module.exports = [
  {
    path: '/pages/index',
    config: {
      enablePullDownRefresh: true
    }
  },
  {
    path: '/packageA/counter',
    subPackage: true,
    config: {
      navigationBarTitleText: '文章详情'
    }
  },
  {
    path: '/pages/details',
  },
  // {
  //   path: '/packageB/index',
  //   subPackage: true,
  //   native: true
  // },
]
