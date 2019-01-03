const util = require('../../utils/util.js');
const api = require('../../utils/api.js');
const app = getApp();
var page = 1;
Page({
  data: {
    posts: [],
    page: 1,
    loading: false,
    nodata: false,
    nomore: false,
    lowerComplete: true,
    defaultImageUrl: app.globalData.defaultImageUrl + app.globalData.imageStyle600To300
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    this.getData();		
  },
  lower: function () {
    let that = this;
    if (!that.data.lowerComplete) {
      return;
    }
    if (!that.data.nomore &&!that.data.nodata) {
      that.setData({
        loading: true,
        lowerComplete: false
      });
      that.getData();
      that.setData({
        lowerComplete: true
      });
    }
  },
  //事件处理函数
  bindItemTap: function (e) {
    let blogId = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/detail/detail?blogId=' + blogId
    })
  },
  //图片加载失败给到默认图片
  errorloadImage: function (e) {
    if (e.type == "error") {
      var index = e.target.dataset.index
      var posts = this.data.posts
      posts[index].slug = this.data.defaultImageUrl
      this.setData({
        posts: posts
      })
    }
  },
  getData: function () {
    let that = this;
    let page = that.data.page;
		wx.request({
			url: 'https://dota1vod.com/tp5/public/index.php/index/index/we?page=' + page,
			method: 'GET',
			header: {
				'content-type': 'application/json' // 默认值
			},
      success: (res) => {
        if (res.data.last_page === res.data.total) {
          that.setData({
            nomore: true
          });
        }
        const posts = res.data.data;
        for (var post of posts) {
					var time = util.formatTime(post.newstime);
          post.created_at = time;
          // post.slug = app.globalData.imageUrl + post.slug + '.jpg?' + app.globalData.imageStyle600To300;
					post.slug = post.titlepic;
        }
        this.setData({
          posts: this.data.posts.concat(posts),
					page: page+1,
          loading:false
        });
      }
		})
		// api.getArticle({
		// 	success: (res)=>{
		// 		console.log(res);
		// 	}
		// })
    // api.getBlogList({
    //   query: {
    //     limit: 10,
    //     page: page + 1,
    //     fields: 'id,title,custom_excerpt,created_at,slug'
    //   },
    //   success: (res) => {
    //     if (res.data.meta.pagination.next == null) {
    //       that.setData({
    //         nomore: true
    //       });
    //     }

    //     const posts = res.data.posts;
    //     for (var post of posts) {
    //       var time = util.formatTime(post.created_at);
    //       post.created_at = time;
    //       post.slug = app.globalData.imageUrl + post.slug + '.jpg?' + app.globalData.imageStyle600To300;
    //     }
    //     this.setData({
    //       posts: this.data.posts.concat(posts),
    //       page: res.data.meta.pagination.page,
    //       loading:false
    //     });
    //   },
    // });
  },	
})
