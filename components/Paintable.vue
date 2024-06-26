<template>
  <div class="paintable">
    <canvas
      :ref="'canvas-' + canvasId"
      :width="width"
      :height="height"
      class="canvas back"
      :class="{ active: isActive || alwaysOnTop }"
      :style="{
        pointerEvents: !isActive ? 'none' : 'all',
        display: !canvasIsEmpty || isActive ? 'block' : 'none'
      }"
    />
    <canvas
      :ref="'temp-canvas-' + canvasId"
      class="canvas"
      :width="width"
      :height="height"
      :class="{ active: isActive || alwaysOnTop }"
      :style="{
        pointerEvents: !isActive ? 'none' : 'all',
        display: !canvasIsEmpty || isActive ? 'block' : 'none'
      }"
      @[drawMoveEvent]="drawMove"
      @[drawStartEvent]="drawStart"
      @[drawEndEvent]="drawEnd"
    />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  let currentX = 0
  let currentY = 0

  export default {
    name: 'paintable',

    props: {
      factor: {
        type: Number,
        default: 1
      },
      alwaysOnTop: {
        type: Boolean,
        default: true
      },
      name: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        default: window.innerWidth
      },
      height: {
        type: Number,
        default: window.innerHeight
      },
      threshold: {
        type: Number,
        default: 0
      },
      lineWidth: {
        type: Number,
        default: 4
      },
      active: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#000'
      },
      teethImage: {
        type: String
      }
    },

    data () {
      return {
        currentColor: this.color,
        canvasIsEmpty: false,
        canvasId: 0,
        isActive: this.active,
        pointCoords: [],
        redoList: [],
        undoList: [],
        tempCanvas: null,
        tempCtx: null,
        canvas: null,
        ctx: null,
        startedDrawing: false,
        drawMoveEvent: 'mousemove',
        drawStartEvent: 'mousedown',
        drawEndEvent: 'mouseup',
        isMouse: true,
        thresholdReached: false
      }
    },

    computed: {
      getTeethCanvasUndoList () {
        return this.$store.getters[`${ this.teethImage }-teeth/getTeethCanvasUndoList`]
      },
      /**
       * Check if it is a touch device
       * thanks to: https://ctrlq.org/code/19616-detect-touch-screen-javascript
       */
      isTouch () {
        return (
          'ontouchstart' in window ||
          navigator.MaxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
        )
      }
    },

    watch: {
      isActive: 'initiate',
      name: 'initiate',
      active (isActive) {
        this.isActive = isActive
      },
      color (color) {
        this.currentColor = color
        this.tempCtx.strokeStyle = this.currentColor
        this.ctx.strokeStyle = this.currentColor
      },
      undoList () {
        this.setTeethCanvasUndoList([ ...this.undoList ])
      }
    },

    beforeMount () {
      this.canvasId = this.$generateRandomKey()
    },

    created () {
      if (this.isTouch) {
        this.drawMoveEvent = 'touchmove'
        this.drawStartEvent = 'touchstart'
        this.drawEndEvent = 'touchend'
        this.isMouse = false
      }
    },

    mounted () {
      this.initiate()
    },

    methods: {
      setTeethCanvasUndoList (teethCanvasUndoList) {
        this.$store.commit(`${ this.teethImage }-teeth/setTeethCanvasUndoList`, teethCanvasUndoList)
      },
      /**
       * Cancel current drawing and remove lines
       */
      cancelDrawing () {
        this.loadImageFromStorage()
        this.isActive = false
      },
      /**
       * Set storage item
       * @param {string} key
       * @param {string} value
       */
      setItem (key, value) {
        localStorage.setItem(key, value)
      },
      /**
       * Get storage item
       * @param {string} key
       */
      getItem (key) {
        return localStorage.getItem(key)
      },
      /**
       * Remove item from storage
       * @param {string} key
       */
      removeItem (key) {
        localStorage.removeItem(key)
      },
      /**
       * Initiate paintable component and set all variables
       */
      initiate () {
        try {
          this.pointCoords = []

          // temporary canvas
          this.tempCanvas = this.$refs['temp-canvas-' + this.canvasId]
          this.tempCtx = this.tempCanvas.getContext('2d')

          // canvas with drawing
          this.canvas = this.$refs['canvas-' + this.canvasId]
          this.ctx = this.canvas.getContext('2d')
          this.tempCtx.lineCap = 'round'
          this.ctx.lineCap = 'round'
          this.tempCtx.lineWidth = this.lineWidth
          this.ctx.lineWidth = this.lineWidth
          this.tempCtx.strokeStyle = this.currentColor
          this.ctx.strokeStyle = this.currentColor
          this.undoList = this.getTeethCanvasUndoList()
          this.setItem(
            this.name + 'Settings',
            JSON.stringify({
              width: this.canvas.width,
              height: this.canvas.height
            })
          )

          // set canvas width and height
          this.setCanvasSize()

          this.$emit('toggle-paintable', this.isActive)
        } catch (err) {
          console.log(err)
        }
      },
      // --------------------------------------------------
      /**
       * Undo drawn line
       */
      undoDrawingStep () {
        this.restoreCanvasState(this.undoList, this.redoList)
      },
      /**
       * Redo drawn line
       */
      redoDrawingStep () {
        this.restoreCanvasState(this.redoList, this.undoList)
      },
      /**
       * Restore previous image
       */
      restoreCanvasState (pop, push) {
        this.ctx.globalCompositeOperation = 'source-over'
        if (pop.length) {
          const restoreState = pop.pop()
          this.saveCurrentCanvasState(this.canvas, push, true)
          this.loadImageFromStorage(restoreState)
        }
      },
      /**
       * Save the current canvas state an push it to undo- or redolist
       */
      saveCurrentCanvasState (canvas, list, keepRedo) {
        keepRedo = keepRedo || false
        if (!keepRedo) {
          this.redoList = []
        }
        (list || this.undoList).push(canvas.toDataURL('image/png'))
      },
      /**
       * Get base64 from local storage and load it into canvas
       */
      async loadImageFromStorage (image) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        const base64Image = image || (await this.getItem(this.name))
        if (base64Image) {
          const image = new Image()
          image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
            this.canvasIsEmpty = this.isCanvasBlank()
          }
          image.src = base64Image
        } else {
          this.canvasIsEmpty = this.isCanvasBlank()
        }
      },
      /**
       * Set current canvas size
       */
      setCanvasSize () {
        currentX = 0
        currentY = 0
      },
      /**
       * Clear complete canvas
       */
      clearCanvas () {
        this.undoList = []
        this.redoList = []
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      },
      isCanvasBlank () {
        this.ctx.globalCompositeOperation = 'source-over'
        const blank = document.createElement('canvas')
        const blankCtx = blank.getContext('2d')
        blankCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        blank.width = this.canvas.width
        blank.height = this.canvas.height
        return blank.toDataURL() === this.canvas.toDataURL()
      },
      /**
       * Check first, if canvas is empty.
       * If its not empty save it to the storage.
       */
      saveCurrentCanvasToStorage () {
        if (this.isCanvasBlank()) {
          this.removeItem(this.name)
          this.removeItem(this.name + 'Settings')
        } else {
          this.setItem(this.name, this.canvas.toDataURL('image/png'))
          this.setItem(
            this.name + 'Settings',
            JSON.stringify({
              width: this.canvas.width,
              height: this.canvas.height
            })
          )
        }
        this.canvasIsEmpty = this.isCanvasBlank()
      },
      /**
       * Start drawing lines
       */
      drawStart (e) {
        e.preventDefault()
        this.thresholdReached = false
        if (this.isActive) {
          this.startedDrawing = true
          this.saveCurrentCanvasState(this.canvas)
          const x = !this.isMouse ? e.targetTouches[0].clientX : e.clientX
          const y = !this.isMouse ? e.targetTouches[0].clientY : e.clientY
          if (x && y) {
            currentX =
              (x - this.tempCanvas.getBoundingClientRect().left) * this.factor
            currentY =
              (y - this.tempCanvas.getBoundingClientRect().top) * this.factor
            this.pointCoords.push({
              x: currentX,
              y: currentY
            })
          }
          this.tempCtx.globalCompositeOperation = 'source-over'
          this.ctx.globalCompositeOperation = 'source-over'
        }
      },
      /**
       * End of drawing a line
       */
      drawEnd () {
        if (this.isActive) {
          this.drawLine(this.ctx)
          this.startedDrawing = false
          this.pointCoords = []
          this.thresholdReached = false
        }
      },
      /**
       * Generate line from points array
       */
      drawLine (context) {
        this.tempCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let p1 = this.pointCoords[0]
        let p2 = this.pointCoords[1]
        if (p1 && p2 && p1.x && p1.y) {
          context.beginPath()
          context.moveTo(p1.x, p1.y)
          for (let i = 1, len = this.pointCoords.length; i < len; i++) {
            const midPoint = {
              x: p1.x + (p2.x - p1.x) / 2,
              y: p1.y + (p2.y - p1.y) / 2
            }
            context.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y)
            p1 = this.pointCoords[i]
            p2 = this.pointCoords[i + 1]
          }
          context.lineTo(p1.x, p1.y)
          context.stroke()
          context.closePath()
        }
      },
      /**
       * Draw line on move and add current position to an array
       */
      drawMove (e) {
        e.preventDefault()
        if (this.isActive && this.startedDrawing) {
          const x = !this.isMouse ? e.targetTouches[0].clientX : e.clientX
          const y = !this.isMouse ? e.targetTouches[0].clientY : e.clientY
          if (x && y) {
            currentX =
              x * this.factor - this.tempCanvas.getBoundingClientRect().left
            currentY =
              y * this.factor - this.tempCanvas.getBoundingClientRect().top
            this.pointCoords.push({
              x: currentX,
              y: currentY
            })
            if (this.threshold) {
              const distanceFirstAndLastPoint = Math.sqrt(
                Math.pow(
                  this.pointCoords[this.pointCoords.length - 1].y -
                    this.pointCoords[0].y,
                  2
                ) +
                  Math.pow(
                    this.pointCoords[this.pointCoords.length - 1].x -
                      this.pointCoords[0].x,
                    2
                  )
              )
              if (distanceFirstAndLastPoint > this.threshold) {
                if (!this.thresholdReached) {
                  this.thresholdReached = true
                  this.$emit('thresholdReached')
                }
              }
            }
            this.drawLine(this.tempCtx)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .paintable {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    transform: scale(1);
  }

  .paintable.active {
    z-index: 0;
  }

  .paintable .canvas {
    background-color: transparent;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    touch-action: none;
  }

  .paintable .canvas.active {
    z-index: 1000;
  }

  .paintable .canvas.active.back {
    z-index: 999;
  }
</style>
