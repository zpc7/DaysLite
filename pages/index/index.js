//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
        cardList: [{
                id: 1,                   //卡片
                title:'春节',            //标题
                type:'will',             //past已经过去  will还有
                days:67,                 //距离的天数
                time:'2018-02-15 星期四'  //目标日期或起始日期
            },{
                id: 2,
                title:'毕业',
                type:'past',
                days:470,
                time:'2016-07-01 星期五'
            }]
    },
    //新增事件
    addEvent(e){
        //TODO
    }
})
