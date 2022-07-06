import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { API } from '../modules/api'

const plugin: Plugin = async(ctx, inject) => {
  const api = Vue.observable(new API(ctx))
  inject('api', api)
}

export default plugin