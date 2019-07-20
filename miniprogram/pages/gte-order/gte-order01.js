// pages/gte-order/gte-order01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pros: [{ vid: '01', name: "人气热卖" }, { vid: '02', name: "咖啡" }, { vid: '03', name: "沙拉" }, { vid: '04', name: "营养果餐" }, { vid: '05', name: "奶昔" }, { vid: '06', name: "欧包" }, { vid: '07', name: "便当" }],
    chose:'01',
    count:0,
    pick:true,
    height:null,
    things:[
      {
        id: "01", name:"人气热卖",thing:[
        { id:"0101",  name: "卤肉饭", price: 15.0},
        { id: "0102", name: "卤肉饭", price: 13.0},
        { id: "0103", name: "鸡肉饭", price: 13.5 },
        { id: "0104", name: "牛肉饭", price: 15.0 },
        { id: "0105", name: "鸭肉饭", price: 9.0},
        { id: "0106", name: "青蛙饭", price: 11.0},
        { id: "0107", name: "鸽子饭", price: 21.5},
        { id: "0108", name: "煲仔饭", price: 16.0},
      ]},
      {
        id: "02", name: "咖啡", thing: [
          { id: "0101", name: "卤肉饭", price: 15.0 },
          { id: "0102", name: "卤肉饭", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        id: "03", name: "沙拉", thing: [
          { id: "0101", name: "卤肉饭", price: 15.0 },
          { id: "0102", name: "卤肉饭", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        id: "04", name: "营养果餐", thing: [
          { id: "0101", name: "卤肉饭", price: 15.0 },
          { id: "0102", name: "卤肉饭", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        id: "05", name: "奶昔", thing: [
          { id: "0101", name: "卤肉饭", price: 15.0 },
          { id: "0102", name: "卤肉饭", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        id: "06", name: "欧包", thing: [
          { id: "0101", name: "卤肉饭", price: 15.0 },
          { id: "0102", name: "卤肉饭", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        id: "07", name: "便当", thing: [
          { id: "0101", name: "卤肉饭", price: 15.0 },
          { id: "0102", name: "卤肉饭", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },

    ],
    shopbag:[]

  },
  change:function(e){
   var vid=e.target.dataset.vid
   this.setData({
     chose:vid
   })
  },
  pick:function(){
    if(this.data.pick===true){
      this.setData({
        pick:false
      })
    }else{
      this.setData({
        pick: true
      })
    }
  },
  getHeight(){
    var that=this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height:res.windowHeight
        })
        },
    })
  },
 query:function(){
   var that=this;
   const query = wx.createSelectorQuery()                // 创建节点查询器 query
   query.select('#title').boundingClientRect()    // 这段代码的意思是选择Id=productServe的节点，获取节点位置信息的查询请求
   query.select('#middle').boundingClientRect() // 这段代码的意思是选择Id=enterpriseServe的节点，获取节点位置信息的查询请求
   query.select('#bot').boundingClientRect()     // 这段代码的意思是选择Id=normalServe的节点，获取节点位置信息的查询请求
   query.select('#outside').boundingClientRect()   
   query.selectViewport().scrollOffset()                 // 这段代码的意思是获取页面滑动位置的查询请求
   query.exec((res) => {
     console.log(res)
     console.log(res[3].height)
     console.log(that.data.height)
    var newheight=that.data.height-res[0].height-res[2].height;
    console.log(newheight)
    that.setData({
      height:newheight
    })
   })
 },

 onPageScroll:function(e){
   console.log(e.detail.scrollTop)
 },
 //商品数量-加入购物车控制
 qtyCtrlup(e){ 
   var obj = { id: e.target.dataset.id, name: e.target.dataset.name, qty: 1, price: e.target.dataset.price,}
   var ctr;
   var bag = this.data.shopbag
   if(this.data.shopbag.length>0){
     for(var elem of bag){
       if(elem.id==e.target.dataset.id){
         elem.qty+=1;
         console.log(bag)
         ctr=1;
         break
       }else{
         ctr=-1
         continue
       }
     };
     if(ctr<0){
       bag.push(obj)
       console.log(bag)
     }
   }else{
     bag.push(obj)
   }
   var ncount=0;
   for(var elem of bag){
     ncount+=elem.price*elem.qty
   }
  this.setData({
    shopbag:bag,
    count:ncount
  })
 },
 qtyCtrldown(e) {
   var bag = this.data.shopbag
   if(this.data.shopbag.length>0){
     bag.forEach((elem,i)=>{
       if(elem.id==e.target.dataset.id){
         if(elem.qty>1){
           elem.qty-=1
           console.log(this.data.shopbag)
         }else{
           bag.splice(i,1)
         }
       }
     })
   }
   var ncount = 0;
   for (var elem of bag) {
     ncount += elem.price * elem.qty
   }
   this.setData({
     shopbag:bag,
     count:ncount
   })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHeight();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取节点信息最好延迟获取
    setTimeout(()=>{this.query();},100)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})