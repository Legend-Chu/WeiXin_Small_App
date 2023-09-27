// js
Page({
  data:{
      name:'',
      canIUseGetUserProfile: true,
  },
onLoad(){
  wx.getStorage({
      key:"name",//本地缓存中指定的 key
      success:(res)=>{ 
        console.log('获取缓存成功',res.data)      
          this.setData({
              name:res.data, //将得到的缓存给key 
               canIUseGetUserProfile: false,             
          }) 
          fail:(err)=>{
              console.log("获取失败",err);
          }                 
      }
  })
  try {
              var count= wx.getStorageSync('count', '')
              console.log('count',count);
             } catch (e) { }   
},

  getUserProfile(e){//获取用户信息绑定的单击事件
      wx.getUserProfile({//获取用户信息
        desc: '用于完善会员资料',// 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
         success:(res)=>{
          console.log("---",res);    
          this.setData({
            name:res.userInfo
          })
          wx.setStorage({
              key:'name',//本地缓存中指定的 key(类型：string)
              data:res.userInfo,//需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象(类型:any)
              success:(s)=>{
                  console.log('存储缓存成功====',s);
                  this.setData({
                       canIUseGetUserProfile: false  //隐藏登录按钮  
                  })
              },
              fail:(f)=>{
                  console.log('存储缓存失败====',f);                    
              }
          })
          wx.setStorage({//第二个缓存
              key:"count",
              data:"缓存2"
          })
      }
      })
}
})
