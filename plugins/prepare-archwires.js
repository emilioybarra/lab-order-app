export const prepareArchwires = (archwireSizes = {}) => {
  const sizesObject = {}
  const sizesArray = [
    'size12',
    'size14',
    'size16',
    'size16x22',
    'size18x25_1',
    'size18',
    'size16x24',
    'size16x24ET',
    'size16x24EET',
    'size18x25_2',
    'size18x25red',
    'size175x175',
    'size17x25',
    'size18x18',
    'size18x25_3'
  ]

  if (!Object.keys(archwireSizes).length) {
    sizesArray.map((size) => {
      sizesObject[size] = {
        straight: {
          size: '',
          check: 0
        },
        individual: {
          size: '',
          check: 0
        },
        compression: '',
        expansion: ''
      }
    })
    return sizesObject
  }

  Object.entries(archwireSizes).forEach(([ key, value ]) => {
    sizesObject[key] = {
      straight: {
        size: value.straight.size,
        check: value.straight.check
      },
      individual: {
        size: value.individual.size,
        check: value.individual.check
      },
      compression: value.compression || '',
      expansion: value.expansion || ''
    }
  })
  return sizesObject
}

export default ({ app }, inject) => {
  inject('prepareArchwires', prepareArchwires)
}
