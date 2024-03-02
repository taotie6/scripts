/*
WPS Office for Mac 解锁部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/p\/auth\/check url script-response-body https://raw.githubusercontent.com/taotie6/scripts/main/JS/was_check.js

[mitm]
hostname = *account.wps.cn, *account.wps.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/p\/auth\/check requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/taotie6/scripts/main/JS/was_check.js

[MITM]
hostname = *account.wps.cn, *account.wps.com

**************************/

var body = JSON.parse($response.body);

var obj = {
    "account": "",
    "account_num": 1,
    "address": "",
    "city": "",
    "companyid": 0,
    "country": "CN-HN",
    "current_companyid": 0,
    "departmentid": "",
    "email": "",
    "firstname": "",
    "is_company_account": false,
    "is_plus": true,
    "lastname": "",
    "loginmode": "phone:",
    "nickname": body.nickname,
    "phonenumber": body.phonenumber,
    "pic": body.pic,
    "postal": "",
    "province": "",
    "regtime": body.regtime,
    "result": "ok",
    "role": [
        "user"
    ],
    "sex": "",
    "status": "active",
    "userid": body.userid,
    "uzone": "CN-HN"
};


$done({ body: JSON.stringify(obj) });
  
