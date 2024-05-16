export const actions = {
  async fetchOrderForms (context, payload) {
    const { currentPage, searchKey, searchQuery, languageFilters, dateFilters } = payload
    const params = { page: currentPage }

    if (searchQuery !== '') {
      params.searchKey = searchKey
      params.searchQuery = searchQuery
    }

    if (!!languageFilters && !!languageFilters.length) {
      params.languageFilters = languageFilters.join('-')
    }

    if (dateFilters.mode === 'date' && !!dateFilters.fromDate) {
      params.dateFilters = {
        mode: 'date',
        fromDate: dateFilters.fromDate
      }
    }

    if (dateFilters.mode === 'dateRange' && !!dateFilters.fromDate && !!dateFilters.toDate) {
      params.dateFilters = {
        mode: 'dateRange',
        fromDate: dateFilters.fromDate,
        toDate: dateFilters.toDate
      }
    }

    return await this.$axios.$get('/api/admin/order-forms', { params })
  },
  async fetchOrderFormById (context, orderFormId) {
    return await this.$axios.$get(`/api/order-forms/${ orderFormId }`).then((response) => {
      if (!response) { throw new Error('Invalid order form ID') }
      const prepareOrderForm = { ...response }

      if (prepareOrderForm.upperTeeth.imageData.edited) {
        const base64Data = Buffer.from(response.upperTeeth.imageData.data, 'binary').toString('base64')
        const dataURL = `data:${ response.upperTeeth.imageData.contentType };base64,${ base64Data }`
        prepareOrderForm.upperTeeth.imageData.dataURL = dataURL
      }

      if (prepareOrderForm.lowerTeeth.imageData.edited) {
        const base64Data = Buffer.from(response.lowerTeeth.imageData.data, 'binary').toString('base64')
        const dataURL = `data:${ response.lowerTeeth.imageData.contentType };base64,${ base64Data }`
        prepareOrderForm.lowerTeeth.imageData.dataURL = dataURL
      }

      return prepareOrderForm
    }).catch(() => {
      return null
    })
  }
}
