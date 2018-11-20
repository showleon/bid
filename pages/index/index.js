//index.js
const bidList = [{
  bId: 1,
  title: "[南昌市本级]南昌市洪都中医院二期工程（含中医药传承创新工程重点中医医院建设）监",
  sourceDate: "2018-10-12 09:22",
  budget: 13882.6,
  district: "南昌",
  primaryType: "采购", // 采购/工程/服务
  secondaryType: "公开招标", // 询价/披露公告/中标公告 ...
  matchor: {
    key: "洪都中医院", date: "今天", type: "采购公告", way: "【采购】公开招标", city: "南昌"
  }
}, {
  bId: 2,
  title: "[东乡县]抚州市东乡区小璜镇中心幼儿园建设项目 [第1次答疑澄清公告]",
  sourceDate: "2018-10-12 09:22",
  budget: 13882.6,
  district: "南昌",
  primaryType: "工程", // 采购/工程/服务
  secondaryType: "披露公告", // 询价/披露公告/中标公告 ...
  matchor: {
    key: "洪都中医院", date: "今天", type: "采购公告", way: "【采购】公开招标", city: "南昌"
  }
}, {
  bId: 3,
  title: "[都昌县]都昌县2018－2020年度统筹整合资金推进高标准农田建设监理服务项目",
  sourceDate: "2018-10-12 09:22",
  budget: 13882.6,
  district: "南昌",
  primaryType: "服务", // 采购/工程/服务
  secondaryType: "中标公告", // 询价/披露公告/中标公告 ...
  matchor: {
    key: "洪都中医院", date: "今天", type: "采购公告", way: "【采购】公开招标", city: "南昌"
  }
}]

const category = ['采购', '工程', '服务']
const whichClass = primaryType => ['green', 'orange', 'purple'][category.indexOf(primaryType)]


Page({
  data: {
    threshold: true,
    bidList: []
  },

  toDetailsPage: function (evt) {
    let { listid } = evt.currentTarget.dataset

    if (listid !== 0 && !listid)
      return;

    wx.navigateTo({
      url: '/pages/details/details?id=' + listid,
    })
  },

  toSearchPage: function (evt) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  toMatchesPage: function (evt) {
    wx.navigateTo({
      url: '/pages/matches/matches',
    })
  },

  onLoad: function () {
    bidList.forEach(item => item.klass = whichClass(item.primaryType))
    console.log(bidList)
    this.setData({
      bidList
    })
  }
})
