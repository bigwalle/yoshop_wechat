// feedback.js
let App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

      feedContent:'',
      phone :'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  submitData:function(e){
    console.log(this.phone);
    console.log(this.feedContent);

    if (!this.feedContent) {
      App.showError('反馈信息不能为空');
      return false;
    }else{
      App.showSuccess("已提交", function () {
        wx.navigateBack();
      });
    }
 
  },
  textareaInput2: function (e) {
    console.log(e.detail.value)
   this.feedContent = e.detail.value
  },
   relationInput:function(e){
    console.log(e.detail.value),
      this.phone = e.detail.value;
   }

})