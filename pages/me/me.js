// pages/me/me.js
Page({
	data: {
		userInfo:{},
	},
	onShow: function () {
	    const userInfo = wx.getStorageSync("userInfo");
	    this.setData({
	      userInfo
	    })
	},
})
