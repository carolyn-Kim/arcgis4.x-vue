
const tileInfo = {
  'rows': 256,
  'cols': 256,
  'compressionQuality': 0,
  'origin': { 'x': -20037508.342787, 'y': 20037508.342787 },
  'spatialReference': { 'wkid': 102100 },
  'lods': [
    {
      'level': 0,
      'resolution': 156543.033928,
      'scale': 591657527.591555
    }, {
      'level': 1,
      'resolution': 78271.5169639999,
      'scale': 295828763.795777
    }, {
      'level': 2,
      'resolution': 39135.7584820001,
      'scale': 147914381.897889
    }, {
      'level': 3,
      'resolution': 19567.8792409999,
      'scale': 73957190.948944
    }, {
      'level': 4,
      'resolution': 9783.93962049996,
      'scale': 36978595.474472
    }, {
      'level': 5,
      'resolution': 4891.96981024998,
      'scale': 18489297.737236
    }, {
      'level': 6,
      'resolution': 2445.98490512499,
      'scale': 9244648.868618
    }, {
      'level': 7,
      'resolution': 1222.99245256249,
      'scale': 4622324.434309
    }, {
      'level': 8,
      'resolution': 611.49622628138,
      'scale': 2311162.217155
    }, {
      'level': 9,
      'resolution': 305.748113140558,
      'scale': 1155581.108577
    }, {
      'level': 10,
      'resolution': 152.874056570411,
      'scale': 577790.554289
    }, {
      'level': 11,
      'resolution': 76.4370282850732,
      'scale': 288895.277144
    }, {
      'level': 12,
      'resolution': 38.2185141425366,
      'scale': 144447.638572
    }, {
      'level': 13,
      'resolution': 19.1092570712683,
      'scale': 72223.819286
    }, {
      'level': 14,
      'resolution': 9.55462853563415,
      'scale': 36111.909643
    }, {
      'level': 15,
      'resolution': 4.77731426794937,
      'scale': 18055.954822
    }, {
      'level': 16,
      'resolution': 2.38865713397468,
      'scale': 9027.977411
    }, {
      'level': 17,
      'resolution': 1.19432856685505,
      'scale': 4513.988705
    }, {
      'level': 18,
      'resolution': 0.597164283559817,
      'scale': 2256.994353
    }, {
      'level': 19,
      'resolution': 0.298582141647617,
      'scale': 1128.497176
    }
  ]
}
export function GdMap (WebTileLayer, Map) {
  let layer = new WebTileLayer({
    id: 'digitalMap',
    title: 'digitalMap',
    urlTemplate:
            'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={col}&y={row}&z={level}',
    tileInfo: tileInfo,
    spatialReference: { wkid: 102100 }
  })

  let map = new Map({
    basemap: {
      baseLayers: [layer]
    }
  })

  return map
}

const TtileInfo = {
  'rows': 256,
  'cols': 256,
  'dpi': 300,
  'format': 'PNG32',
  'compressionQuality': 0,
  'origin': {
    'x': -180,
    'y': 90
  },
  'spatialReference': {
    'wkid': 4326
  },
  'lods': [{
    'level': 2,
    'resolution': 0.3515625,
    'scale': 147748796.52937502
  }, {
    'level': 3,
    'resolution': 0.17578125,
    'scale': 73874398.264687508
  }, {
    'level': 4,
    'resolution': 0.087890625,
    'scale': 36937199.132343754
  }, {
    'level': 5,
    'resolution': 0.0439453125,
    'scale': 18468599.566171877
  }, {
    'level': 6,
    'resolution': 0.02197265625,
    'scale': 9234299.7830859385
  }, {
    'level': 7,
    'resolution': 0.010986328125,
    'scale': 4617149.8915429693
  }, {
    'level': 8,
    'resolution': 0.0054931640625,
    'scale': 2308574.9457714846
  }, {
    'level': 9,
    'resolution': 0.00274658203125,
    'scale': 1154287.4728857423
  }, {
    'level': 10,
    'resolution': 0.001373291015625,
    'scale': 577143.73644287116
  }, {
    'level': 11,
    'resolution': 0.0006866455078125,
    'scale': 288571.86822143558
  }, {
    'level': 12,
    'resolution': 0.00034332275390625,
    'scale': 144285.93411071779
  }, {
    'level': 13,
    'resolution': 0.000171661376953125,
    'scale': 72142.967055358895
  }, {
    'level': 14,
    'resolution': 8.58306884765625e-005,
    'scale': 36071.483527679447
  }, {
    'level': 15,
    'resolution': 4.291534423828125e-005,
    'scale': 18035.741763839724
  }, {
    'level': 16,
    'resolution': 2.1457672119140625e-005,
    'scale': 9017.8708819198619
  }, {
    'level': 17,
    'resolution': 1.0728836059570313e-005,
    'scale': 4508.9354409599309
  }, {
    'level': 18,
    'resolution': 5.3644180297851563e-006,
    'scale': 2254.4677204799655
  }]
}

export function TMap (WebTileLayer, Map) {
  let layer = new WebTileLayer({
    id: 'TMap',
    title: 'TMap',
    urlTemplate:
            'http://t0.tianditu.com/DataServer?T=vec_c&x={col}&y={row}&l={level}', // 实例化电子地图
    tileInfo: TtileInfo,
    spatialReference: { wkid: 4326 }
  })

  let map = new Map({
    basemap: {
      baseLayers: [layer]
    }
  })

  return map
}
