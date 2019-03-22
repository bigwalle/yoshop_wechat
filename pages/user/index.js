let App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    orderCount: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 获取当前用户信息
    this.getUserDetail();
  },

  /**
   * 获取当前用户信息
   */
  getUserDetail: function() {
    let _this = this;
    App._get('user.index/detail', {}, function(result) {
      _this.setData(result.data);
    });
    this.orderSign();
  },

  /**
   * 订单导航跳转
   */
  onTargetOrder(e) {
    // 记录formid
    // App.saveFormId(e.detail.formId);
    let urls = {
      all: '/pages/order/index?type=all',
      payment: '/pages/order/index?type=payment',
      received: '/pages/order/index?type=received',
      refund: '/pages/order/refund/index',
    };
    // 转跳指定的页面
    wx.navigateTo({
      url: urls[e.currentTarget.dataset.type]
    })
  },

  /**
   * 菜单列表导航跳转
   */
  onTargetMenus(e) {
    // 记录formId
    // App.saveFormId(e.detail.formId);
    wx.navigateTo({
      url: '/' + e.currentTarget.dataset.url
    })
  },
  orderSign: function (e) {
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    console.log('123456789')

    // var fId = e.detail.formId;
    // console.log(fId)
    var token = wx.getStorageSync('token');
    console.log(token)
    var l = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + token;
    console.log(l)

    var d = {
      "keyword1": {
        "value": "00273",
        "color": "#4a4a4a"
      },
      "keyword2": {
        "value": "腾讯早餐店",
        "color": "#9b9b9b"
      },
      "keyword3": {
        "value": "66元",
        "color": "#9b9b9b"
      },
      "keyword4": {
        "value": "包子",
        "color": "#9b9b9b"
      },
      "keyword5": {
        "value": "68元",
        "color": "#9b9b9b"
      },
      "keyword6": {
        "value": "2015年01月05日 12:30",
        "color": "#9b9b9b"
      },
      "keyword7": {
        "value": "2015年01月05日 12:30",
        "color": "#9b9b9b"
      },
      "keyword8": {
        "value": "2015年01月05日 12:30",
        "color": "#9b9b9b"
      }
    };
    console.log('123456789'+d)
    wx.request({
      url: l,
      　　　　　//注意不要用value代替data
      data: {
        touser: this.data.openid,
        template_id: 'epcRDfA7apzC1SYAIdRnKFK__nPeW-bCDYTIgvwjgyo',//申请的模板消息id，  
        page: '/pages/order/index',
        form_id: '123456',
        data: d,
        color: '#ccc',
        emphasis_keyword: 'keyword1.DATA'
      },
      method: 'POST',
      success: function (res) {
        wx.hideLoading();
        console.log("发送成功");
        console.log(res);
      },
      fail: function (err) {
        // fail  
        wx.hideLoading();
        console.log("push err")
        console.log(err);
      }
    });
  },  

})