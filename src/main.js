let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string2 = "";

let string = `/*你好，我是前端新人
接下来我要画一个太极
首先，我要画一个div*/
#div1{
    border: 1px solid red;
    width: 200px;
    height:200px;
}
/*接下来我要开始画了，首先把div变成圆圈*/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*接下来我要填充阴阳*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
  width:100px;
  height:100px;
  top:0px;
  left:50%;
  transform:translateX(-50%);
  background: #000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0px;
  left:50%;
  transform:translateX(-50%);
  background: #fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
console.log(string.length);
let n = 0;

let step = () => {
  if (string[n] === "\n") {
    string2 += "<br>";
  } else if (string[n] === " ") {
    string2 += "&nbsp";
  } else {
    string2 += string[n];
  }
  // string2 += string[n] === "\n" ? "<br>" : string[n];
  //如果当前字符是回车，那么变成换行,如果是空格，那么变换空格，否则就照抄
  setTimeout(() => {
    if (n < string.length) {
      //如果不是最后一个，继续调用step
      html.innerHTML = string2;
      // console.log(style);
      style.innerHTML = string.substring(0, n);
      window.scrollTo(0, 9999);
      html.scrollTo(0, 99999);
      n += 1;
      step();
    }
  }, 50);
};

step();

// 1.获取到这个元素
// 2.让这个元素开始动起来
// 3.动起来之后尝试按照想要的顺序动起来，eg 显示一句话
// 4.让同样的东西可以同时存在于屏幕上，eg 正常显示一句话
//string.replace()替换第一个命中的字符，可以用正则匹配所有字符
//string[n].charCodeAt() 查询第n个字符的unicode字符
