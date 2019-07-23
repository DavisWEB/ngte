// pages/gte-order/gte-order01.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pros: [],
    chose:'01',
    intoview:"v01",
    count:0,
    pick:true,
    height:null,
    things:[],
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
   var obj = {  name: e.target.dataset.name, qty: 1, price: e.target.dataset.price,}
   var ctr;
   var bag = this.data.shopbag
   console.log(e.target.dataset)
   if(this.data.shopbag.length>0){
     for(var elem of bag){
       if(elem.name==e.target.dataset.name){
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
//  去结算
 goPay(){
   console.log(this.data.shopbag)
   var f_id=Math.floor(Math.random()*9999);
   var data=this.data.shopbag
   db.collection("form-1").add({
     data:{
       f_id:f_id,
       datas:data,
       uid:1,
       status:0
     }
   })
   wx.switchTab({
     url: '/pages/gte-form/gte-form01',
   })

 },
 //查询节点高度
 qtyCtrldown(e) {
   var bag = this.data.shopbag
   if(this.data.shopbag.length>0){
     bag.forEach((elem,i)=>{
       if(elem.name==e.target.dataset.name){
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
   } else if (scrolltop >= this.data.v6top) {
     this.setData({
       chose: "06",
     })
   };
 },
 
  showPros(){
      db.collection("pros").get().then(res => {
        console.log(res.data)
        this.setData({
          pros: res.data
        })
      })
  },

  // promise函数
  one:function(){
    return new Promise((res,err)=>{
      this.showPros()
      console.log(1)
      res()
    })
  },
  two:function(){
    return new Promise((res,err)=>{
      this.getHeight();
      console.log(2)
      res()
    })
  },
  three:function(){
    return new Promise((res,err)=>{
      setTimeout(()=>{
        this.query()
        console.log(3)
      },500)
     
      res()
    })
  },

   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.one().then(this.two).then(this.three)
      // new Promise(open=>{
      //   this.showPros()
      //   console.log(1)
      //   open()
      // }).then(res=>{
      //   this.getHeight();
      //   console.log(2)
      // }).then(res=>{
      //   setTimeout(()=>{
      //     this.query() 
      //   console.log(3)
      //   },2000)
        
      // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取节点信息最好延迟获取
    
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