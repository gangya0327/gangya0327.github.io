var helloData = {
  name: 'peter',
  movies: [
    { url: 'bg5.jpg' },
    { url: 'bg2.jpg' },
    { url: 'bg3.jpg' }
  ]
}
Page({
  data: helloData,
  changename: function(e){
    this.setData({
      name: 'mina'
    })
  },
  goSingle: function(){
    wx.navigateTo({
      url: '../value/single'
    })
  },
  goTotal: function () {
    wx.navigateTo({
      url: '../value/total'
    })
  },
  goShow: function () {
    wx.navigateTo({
      url: '../test/test3'
    })
  }
})