// pages/gte-order/gte-order01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pros: [{ vid: '01', name: "人气热卖" }, { vid: '02', name: "咖啡" }, { vid: '03', name: "沙拉" }, { vid: '04', name: "营养果餐" }, { vid: '05', name: "奶昔" }, { vid: '06', name: "欧包" }, { vid: '07', name: "便当" }],
    chose:'01',
    intoview:"v01",
    count:0,
    pick:true,
    height:null,
    things:[
      {
        vid: "01", name:"人气热卖",thing:[
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
        vid: "02", name: "咖啡", thing: [
          { id: "0101", name: "去去去", price: 15.0 },
          { id: "0102", name: "滚滚滚", price: 13.0 },
          { id: "0103", name: "哈哈", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        vid: "03", name: "沙拉", thing: [
          { id: "0101", name: "一i", price: 15.0 },
          { id: "0102", name: "营养", price: 13.0 },
          { id: "0103", name: "鸡肉买买买饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        vid: "04", name: "营养果餐", thing: [
          { id: "0101", name: "咖啡", price: 15.0 },
          { id: "0102", name: "可乐", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "哈哈", price: 15.0 },
          { id: "0105", name: "鸡翅", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        vid: "05", name: "奶昔", thing: [
          { id: "0101", name: "问问", price: 15.0 },
          { id: "0102", name: "是不", price: 13.0 },
          { id: "0103", name: "的", price: 13.5 },
          { id: "0104", name: "饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        vid: "06", name: "欧包", thing: [
          { id: "0101", name: "嗯嗯", price: 15.0 },
          { id: "0102", name: "食物", price: 13.0 },
          { id: "0103", name: "鸡肉的饭", price: 13.5 },
          { id: "0104", name: "牛肉饭", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
      {
        vid: "07", name: "便当", thing: [
          { id: "0101", name: "青蛙", price: 15.0 },
          { id: "0102", name: "个人", price: 13.0 },
          { id: "0103", name: "鸡肉饭", price: 13.5 },
          { id: "0104", name: "哈哈就", price: 15.0 },
          { id: "0105", name: "鸭肉饭", price: 9.0 },
          { id: "0106", name: "青蛙饭", price: 11.0 },
          { id: "0107", name: "鸽子饭", price: 21.5 },
          { id: "0108", name: "煲仔饭", price: 16.0 },
        ]
      },
    ],
    shopbag:[],
    v1top:0,
    v2top: 0,
    v3top: 0,
    v4top: 0,
    v5top: 0,
    v6top: 0,
    v7top: 0,
  },
  change:function(e){
   var vid=e.target.dataset.vid
   var into="v"+vid
   this.setData({
     chose:vid,
     intoview:into
   })
   console.log(this.data.intoview)
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
   new Promise(open=>{
     query.select('#title').boundingClientRect()    // 这段代码的意思是选择Id=productServe的节点，获取节点位置信息的查询请求
     query.select('#middle').boundingClientRect() // 这段代码的意思是选择Id=enterpriseServe的节点，获取节点位置信息的查询请求
     query.select('#bot').boundingClientRect()     // 这段代码的意思是选择Id=normalServe的节点，获取节点位置信息的查询请求
     query.select('#v01').boundingClientRect() 
     query.select('#v02').boundingClientRect() 
     query.select('#v03').boundingClientRect() 
     query.select('#v04').boundingClientRect() 
     query.select('#v05').boundingClientRect() 
     query.select('#v06').boundingClientRect() 
     query.select('#v07').boundingClientRect() 

     query.select('#outside').boundingClientRect();
     query.selectViewport().scrollOffset()  ; 
      // 这段代码的意思是获取页面滑动位置的查询请求
     query.exec(function (res) {
       open(res)
     })             
   }).then(res=>{
     console.log(res)
       var newheight = that.data.height - res[0].height - res[2].height;
       that.setData({
         height: newheight,
          v1top:res[3].top,
         v2top: res[4].top,
         v3top: res[5].top,
         v4top: res[6].top,
         v5top: res[7].top,
         v6top: res[8].top,
         v7top: res[9].top,
       })
     })
   
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
 //滚动事件
 onscroll:function(e){
   
   var scrolltop = e.detail.scrollTop+100;
   
   if (scrolltop >= this.data.v1top && scrolltop <= this.data.v2top){
     this.setData({
       chose: "01",
     }) 
   } else if (scrolltop >= this.data.v2top && scrolltop <= this.data.v3top){
     this.setData({
       chose: "02",
     })
    
   } else if (scrolltop >= this.data.v3top && scrolltop <= this.data.v4top) {
     this.setData({
       chose: "03",
     })
   } else if (scrolltop >= this.data.v4top && scrolltop <= this.data.v5top) {
     this.setData({
       chose: "04",
     })
     
   } else if (scrolltop >= this.data.v5top && scrolltop <= this.data.v6top) {
    this.setData({
       chose: "05",
     })
   } else if (scrolltop >= this.data.v6top && scrolltop <= this.data.v7top) {
     this.setData({
       chose: "06",
     })
   } else if ( scrolltop >= this.data.v7top) {
     this.setData({
       chose: "07",
     })
   };
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
    this.query()
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