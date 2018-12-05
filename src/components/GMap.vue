<template>
  <div class="map" ref="map"></div>
</template>

<script>
import { GdMap } from 'config/gdMap'
import esriLoader from 'esri-loader'
export default {
  name: 'GDMap',
  data () {
    return {
      gisConstructor: {}, // gis 构造函数
      gisInst: {}, // gis 实例
      gisModules: [
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/WebTileLayer'
      ] // gis 模块
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 加载
      esriLoader.loadCss('https://js.arcgis.com/4.9/esri/css/main.css')
      esriLoader
        .loadModules(this.gisModules, {
          url: 'https://js.arcgis.com/4.9/'
        })
        .then(this.loadGdMap)
        .then(this.initMap)
    },
    loadGdMap (args) {
      for (let k in args) {
        let name = this.gisModules[k].split('/').pop()
        this.gisConstructor[name] = args[k]
      }
      this.gisInst.map = GdMap(
        this.gisConstructor.WebTileLayer,
        this.gisConstructor.Map
      )
    },
    initMap () {
      this.gisInst.view = new this.gisConstructor.MapView({
        map: this.gisInst.map,
        container: this.$refs.map,
        center: [121.56, 29.86],
        zoom: 12
      })
      this.gisInst.view.when(() => {
        this.gisInst.view.ui.remove('attribution') // 去掉底部logo
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.map {
    width: 100%;
    height: 100%;
}
</style>
