/*
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-23 11:00:00
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-25 15:45:50
 */
let express = require("express"); //引入express模块
let Mock = require("mockjs"); //引入mock模块
let app = express(); //实例化

/*post方法*/
var bodyParser = require("body-parser"); 
app.use(bodyParser.json()); // 添加json解析
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

/*为app添加中间件处理跨域请求*/
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
app.get("/api/demo", function(req, res) {
  res.json(
    Mock.mock({
      status: 200,
      "data|3": [
        {
          "value|+1": 1,
          "label|+1": ["demo1", "demo2", "demo3"]
        }
      ]
    })
  );
});
//post请求需要引入上面所标注的
app.post("/api/trains", function(req, res) {
  console.log(req.body);
  res.send({ status: 200, msg: "success" });
});
app.listen("4000", function() {
  console.log("app listening at http://localhost:4000");
});