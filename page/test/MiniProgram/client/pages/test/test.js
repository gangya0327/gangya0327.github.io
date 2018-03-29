var helloData = {
  name: 'peter',
  word: 'fine',
  array: [{msg: 'you'}, {msg: 'me'}],
  array1: [1,2,3,4,5],
  flag: 'opp',
  staffA: { firstname: 'peter', lastname: 'gg'},
  staffB: { firstname: 'raven', lastname: 'hh'},
  staffC: { firstname: 'maike', lastname: 'yy'},
  count: 1,
  objectArr: [
    {id: 1, unique: 'unique-1'},
    {id: 2, unique: 'unique-2'},
    {id: 3, unique: 'unique-3'},
    {id: 0, unique: 'unique-0'},
  ],
  numberArr: [1,2,3,4]
}
Page({
  data: helloData,
  changename: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  onLoad: function(){
    console.log('i am ' + helloData.word)
  },
  onShow: function(){
    console.log('you are ' + helloData.word)
  },
  switch: function(e){
    const length = this.data.objectArr.length
    for(let i = 0; i < length; ++i){
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArr[x]
      this.data.objectArr[x] = this.data.objectArr[y]
      this.data.objectArr[y] = temp
    }
    this.setData({
      objectArr: this.data.objectArr
    })    
  },
  addToFront: function(e){
    const length = this.data.objectArr.length
    this.data.objectArr = [{ id: length, unique: 'unique-' + length }].concat(this.data.objectArr)
    this.setData({
      objectArr: this.data.objectArr
    }) 
  },
  addNumberToFront: function (e) {
    this.data.numberArr = [this.data.numberArr.length + 1].concat(this.data.numberArr)
    this.setData({
      numberArr: this.data.numberArr
    })
  }
})

var getGlobalData = getApp()
console.log('look:' + getGlobalData.globalData)