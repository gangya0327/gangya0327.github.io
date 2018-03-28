var helloData = {
  name: 'peter'
}
Page({
  data: helloData,
  changename: function(e){
    this.setData({
      name: 'mina'
    })
  }
})