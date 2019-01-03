// 39.837640
// 116.365310
Page({
  data: {
    latitude: 39.837640,
    longitude: 116.365310,
    scale: 20,
    markers: [{
      iconPath: "/image/location.png",
      id: 0,
      latitude: 39.837640,
      longitude: 116.365310,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 116.365310,
        latitude: 39.837640
      }, {
          longitude: 116.365310,
          latitude: 39.837640
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})