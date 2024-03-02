/*
WPS Office for Mac 解锁部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/taotie6/scripts/main/JS/wps_vips.js

[mitm]
hostname = *account.wps.cn, *account.wps.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/v3\/mine\/vips requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/taotie6/scripts/main/JS/wps_vips.js

[MITM]
hostname = *account.wps.cn, *account.wps.com

**************************/

var body = JSON.parse($response.body);

var expire_time_diy = 4102415999;
var times = expire_time_diy - body.server_time;
var obj = {
    "result": "ok",
    "server_time": body.server_time,
    "vips": [
        {
            "enabled": null,
            "expire_time": expire_time_diy,
            "has_ad": 0,
            "memberid": 40,
            "name": "超级会员"
        },
        {
            "enabled": null,
            "expire_time": expire_time_diy,
            "has_ad": 0,
            "memberid": 20,
            "name": "WPS会员"
        },
        {
            "enabled": null,
            "expire_time": expire_time_diy,
            "has_ad": 0,
            "memberid": 12,
            "name": "稻壳会员"
        }
    ]
};

$done({ body: JSON.stringify(obj) });
