import * as Mock from '../mock.js';

const DEFAULT_REQUEST_OPTIONS = {
  url: '',
  data: {},
  header: {
    'Content-Type': 'application/json'
  },
  method: 'GET',
  dataType: 'json'
}

let util = {
  request(opt){
    let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt);
    let {url, data, header, method, dataType, mock=false} = options;

    return new Promise((resolve, reject)=>{
      if(mock){
        if(data.hasOwnProperty('page') && data.hasOwnProperty('datasize')){
          let res = null;
          let page = data.page;
          let datasize = data.datasize;
          const types = ['hot', 'amuse', 'variety', 'information'];
          let type = types[data.type - 1];
          let returnData = [];

          const allRes = Mock[url][data.tag][type];

          if(page < allRes.length){
            for(let i = page; i< page + datasize; i++){
              if(allRes[i]){
                returnData.push(allRes[i]);
              }
            }
            res = {res: 1, data: returnData};
          }else{
            res = {res: 0, data: returnData};
          }
          console.log(res)
          resolve(res);
          return;
        }

        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        resolve(res.data);
        return;
      }

      wx.request({
        url,
        data,
        header,
        method,
        dataType,
        success(res){
          let returnRes = [];
          console.log(data);
          if(data.hasOwnProperty('tag')){
            let arr = res.data[data.tag];
            if(data.hasOwnProperty('id')){
              console.log(arr);
              for(let i in arr){
                if(arr[i].video_id === data.id){
                  returnRes = arr[i];
                }
              }
              console.log(returnRes);
              resolve(returnRes);
              return;
            }
            // console.log(arr);
            returnRes = arr;
          }
          if(data.hasOwnProperty('key')){
            const media = res.data;
            for(let i in media){
              for(let j in media[i]){
                var re = new RegExp(data.key);
                if(re.test(media[i][j].title)){
                  returnRes.push(media[i][j]);
                }
              }
            }
            resolve(returnRes);
            return;
          }
          resolve(returnRes);
        },
        fail(err){
          reject(err);
        }
      })
    })
  },
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export default util