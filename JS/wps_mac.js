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
var expire_time_diy = 4102415999;
var times = expire_time_diy - body.server_time;
var obj = {
    "exp": 0,
    "level": 1,
    "privilege": [
        {
            "spid": "ocr",
            "times": times,
            "expire_time": expire_time_diy
        },
        {
            "spid": "pdf2doc",
            "times": times,
            "expire_time": expire_time_diy
        },
        {
            "spid": "pdf_merge",
            "times": times,
            "expire_time": expire_time_diy
        },
        {
            "spid": "pdf_sign",
            "times": times,
            "expire_time": expire_time_diy
        },
        {
            "spid": "pdf_split",
            "times": times,
            "expire_time": expire_time_diy
        },
        {
            "spid": "speech_record",
            "times": times,
            "expire_time": expire_time_diy
        },
        {
            "spid": "data_recover",
            "times": times,
            "expire_time": expire_time_diy
        }
    ],
    "result": "ok",
    "server_time": body.server_time,
    "total_buy": 0,
    "total_cost": 0,
    "userid": body.userid,
    "vip": {
        "name": "超级会员",
        "has_ad": 0,
        "memberid": 40,
        "expire_time": expire_time_diy,
        "enabled": [
            {
                "memberid": 40,
                "name": "超级会员",
                "expire_time": expire_time_diy
            },
            {
                "memberid": 20,
                "name": "WPS会员",
                "expire_time": expire_time_diy
            },
            {
                "memberid": 12,
                "name": "稻壳会员",
                "expire_time": expire_time_diy
            }
        ]
    },
    "wealth": 0
};


$done({ body: JSON.stringify(obj) });
  
