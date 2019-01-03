Page({
  data: {
    imgUrls: [
      'http://m.atfck.com/extend/images/banner1.jpg',
      'http://m.atfck.com/extend/images/banner2.jpg',
      'http://m.atfck.com/extend/images/banner3.jpg'
    ],
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    homeImg: 'http://m.atfck.com/extend/images/home.png',
    logoImg: 'http://m.atfck.com/extend/images/logo.png',
    navbarImg: 'http://m.atfck.com/extend/images/navbar.png',
    navList: [
      {
        url: '/pages/about/about',
        imgUrl: 'http://m.atfck.com/extend/images/about.png'
      },
      {
        url: '/pages/expert/expert',
        imgUrl: 'http://m.atfck.com/extend/images/expert.png'
      },
      {
        url: '/pages/case/case',
        imgUrl: 'http://m.atfck.com/extend/images/case.png'
      },
      {
        url: '/pages/package/package',
        imgUrl: 'http://m.atfck.com/extend/images/package.png'
      }
    ],
    xiangmu1: {
      name: '产科常见项目',
      list: [
        {
          'iconUrl': 'http://m.atfck.com/extend/images/byjd.png',
          'iconText': '备孕建档',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/slgby.png',
          'iconText': '孕期产检',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/dnlc.png',
          'iconText': '温柔分娩',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/gjjb.png',
          'iconText': '妊娠剧吐',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/zgxby.png',
          'iconText': '孕期保胎',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/nfmby.png',
          'iconText': '产后康复',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/jhsy.png',
          'iconText': '月子中心',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/ydwy.png',
          'iconText': '剖后顺产',
        },
      ],
    },
    xiangmu2: {
      name: '生殖健康与不孕不育',
      list: [
        {
          'iconUrl': 'http://m.atfck.com/extend/images/xgxlc.png',
          'iconText': '习惯性流产',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/slgby.png',
          'iconText': '输卵管不孕',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/dnlc.png',
          'iconText': '多囊卵巢',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/gjjb.png',
          'iconText': '宫颈疾病',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/zgxby.png',
          'iconText': '子宫性不孕',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/nfmby.png',
          'iconText': '内分泌不孕',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/jhsy.png',
          'iconText': '计划生育',
        },
        {
          'iconUrl': 'http://m.atfck.com/extend/images/ydwy.png',
          'iconText': '阴道外阴',
        },
      ],
    },
    newsList: [
      '为他人着想,捐献热血,分享生命”2018年世界献血',
      '有奖“爸”气闯关，6月16日活动火热招募'
    ],
    newsSwiper: {
      vertical: true,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0,
    },
    zj: {
      title: '安太嘉园专家团队',
      vertical: false,
      autoplay: false,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0,
      zjList: [
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj1.jpg',
          text: '杨淑华院长创立的电子立体宫腹腔镜联合输卵管疏通术，电子立体腹腔镜下输卵管吻合术，被同仁誉为“杨氏疗法”擅长生理产科、病理产科的诊断、治疗。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj2.jpg',
          text: '张智君主任医师致力于妇科疾病、妇科肿瘤的临床研究30余年。对围产保健、妊娠合并症并发症、高危妊娠诊治及相关疾病的诊断和治疗有丰富的临床经验。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj3.jpg',
          text: '陈凤林首席专家毕业于中国医科大学，医学硕士。中华妇产科网主编。是催眠水中分娩先驱、产道扩张器发明人，温柔分娩和剖后顺倡导者。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj4.jpg',
          text: '杨焕玲毕业于首都医科大学，在北京天坛医院从事妇产科专业30余年。致力于生理产科、病理产科、产前诊断及各种妇产科疾病的临床研究30余年。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj5.jpg',
          text: '荣琪致力于计划生育的临床工作40余年，熟练掌握各种计划生育手术。 临床经验丰富，熟练掌握各种计划生育手术、上环、取环、人工流产、药物流产等。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj6.jpg',
          text: '艾朝辉从事妇产科工作30年，一直在临床一线工作，对远程监护、无痛分娩、水中分娩及各式剖宫产方面经验丰富。擅长产前诊断、高危妊娠筛查等。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj7.jpg',
          text: '陶新凤从事妇科肿瘤临床手术20余年，先后在国内发表学术论文多篇。在恶性子宫癌、卵巢癌、乳房癌等妇科恶性实体瘤的手术上颇有造诣。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj8.jpg',
          text: '齐金燕从事妇产科十余年，曾在三甲医院进修学习，熟练掌握计划生育各种手术:人工流产负压吸引术，上环取环术，避孕方式选择。',
        },
        {
          imgUrl: 'http://m.atfck.com/extend/images/zj9.jpg',
          text: '胡朝钢中华口腔医学会会员，对前后牙直接树脂修复及间接树脂或瓷嵌体修复具有大量临床经验，对个性化治疗计划设计，私人定制微创治疗也具备一定造诣。',
        },
      ]
    },
    contactImgUrl: 'http://m.atfck.com/extend/images/contact.png',
    jylImgUrl: 'http://m.atfck.com/extend/images/jyl.png',
  },

  makePhoneCall: function(){
    wx.makePhoneCall({
      phoneNumber: '01067537758',
    })
  },

  gotoMap:function(){
    console.log('gotomap')
    wx.switchTab({
      url: '/pages/map/map',
      success: function(){
        console.log('gotomap success')
      },
      fail: function () {
        console.log('gotomap fail')
      }
    })
  }
})

