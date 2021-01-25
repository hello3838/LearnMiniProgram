Page({
  data:{
    name:'zhangwenhui',
    age:12,
    students:[
      {name : "11111" , age : 1 },
      {name : "11111" , age : 1 },
      {name : "11111" , age : 1 },
      {name : "11111" , age : 1}
    ],
    counter:0
  },
  onXXX(){
    var xxx = this.data.counter;
    xxx+=1;
    this.setData({
      counter:xxx
    })
    console.log(xxx);
  }
})