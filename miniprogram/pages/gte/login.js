// pages/gte/login.js
const app_id ="wxe43d16c7dbe392a3";
const app_secret = 'f7867bc8de2743a9a08895c3cd800bdc';
var openID='';
var session_key="";
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse:wx.canIUse("button.open-type.getUserInfo"),
    
  },
  getOpenID:function(){
    wx.showLoading({
      title: '授权中..',
    })
    var that=this;
    wx.login({
      success:function(res){
        wx.request({
    url:"https://api.weixin.qq.com/sns/jscode2session",
          data:{
            appid:app_id,
            secret:app_secret,
            js_code:res.code,
            grant_type:"authorization_code"
          },
          method:'GET',
          success:function(res){
            console.log(123)
            console.log(res)
            openID=res.data.openid;
            session_key=res.data.session_key; 
            //设置缓存    
            wx.setStorage({
              key:"openID",
              data:{
                openID: res.data.openid,
                session_key: res.data.session_key,
              }
            });
            //查询数据库是否存在这位用家
            db.collection("my_user").where({
              _openid: res.data.openid
            }).get().then(res=>{
              console.log(res)
              //如果不存在，则在数据表中添加用户基本信息
              if(res.data.length===0){
                db.collection("my_user").add({
                  data:{
                    _openid: res.data.openid,
                    cash:0,
                    height:170,
                    weight:70
                  }
                })
                console.log("插入新的用户信息")
                that.jump()
              }else{
                //如果存在用户信息，直接跳转
                console.log("用户存在，直接跳转")
                that.jump()
              }
            })
          }
        })
      }
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'openID',
      success: function(res) {
        console.log(res)
        console.log("找到缓存的数据拉!")
        that.jump();
      },
      fail:err=>{
        console.log("缓存没东西，需要重新发请求")
      }
    })
    
    
  },
  bindGetUserInfo:function(e){
     
    this.getOpenID()
  },
  jump(){
    wx.switchTab({
      url: '/pages/gte-mine/gte-mine01',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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