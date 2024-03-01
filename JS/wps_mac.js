/*
WPS Office for Mac 解锁部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/users url script-response-body https://raw.githubusercontent.com/taotie6/scripts/main/JS/wps_mac.js

[mitm]
hostname = *account.wps.cn, *account.wps.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/taotie6/scripts/main/JS/wps_mac.js

[MITM]
hostname = *account.wps.cn, *account.wps.com

**************************/

var body = JSON.parse($response.body);
var obj = {
  result: "ok",
  server_time: body.server_time,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 4102415999 },
    { spid: "ocr", times: 0, expire_time: 4102415999 },
    { spid: "pdf2doc", times: 0, expire_time: 4102415999 },
    { spid: "pdf_merge", times: 0, expire_time: 4102415999 },
    { spid: "pdf_sign", times: 0, expire_time: 4102415999 },
    { spid: "pdf_split", times: 0, expire_time: 4102415999 }
  ],
  total_cost: -30,
  userid: body.userid,
  level: 3,
  wealth: 0,
  exp: 0,
  vip: {
    memberid: 40,
    expire_time: 4102415999,
    name: "超级会员",
    has_ad: 0,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 4102415999 },
      { memberid: 20, name: "WPS会员", expire_time: 4102415999 },
      { memberid: 12, name: "稻壳会员", expire_time: 4102415999 }
    ]
  },
  expire_time: 4102415999,
  total_buy: 0,
};

$done({ body: JSON.stringify(obj) });
  
