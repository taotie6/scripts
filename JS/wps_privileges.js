/*
WPS Office for Mac 解锁部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/vas\/privileges url script-response-body https://raw.githubusercontent.com/taotie6/scripts/main/JS/wps_privileges.js

[mitm]
hostname = *account.wps.cn, *account.wps.com

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/vas\/privileges requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/taotie6/scripts/main/JS/wps_privileges.js

[MITM]
hostname = *account.wps.cn, *account.wps.com

**************************/

var body = JSON.parse($response.body);
var expire_time_diy = 4102415999;
var time = Math.round(new Date() / 1000);
var obj = {
  "result" : "ok",
  "privileges" : {
    "doc_roaming" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "corp_free_group_number" : {
      "expire_at" : -1,
      "effect_at" : time,
      "total" : 10,
      "time" : -1
    },
    "pdf2doc" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "smart_sync" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "sync_folder" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 5,
      "time" : 66769
    },
    "link_expire_time_custom" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "share_set_expire" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "batch_download" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "batch_download_file_number" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 2000,
      "time" : 66769
    },
    "batch_download_file_size" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 10240,
      "time" : 66769
    },
    "filenum_in_sync_folder" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "data_recover" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "full_text_search" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "user_free_group_member_number" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 500,
      "time" : 66769
    },
    "download_speed_up" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "user_free_group_number" : {
      "expire_at" : -1,
      "effect_at" : time,
      "total" : 100,
      "time" : -1
    },
    "net_doc_auto_update" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "extract_online" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "cloud_space" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 385024,
      "time" : 66769
    },
    "share_set_password" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "speech_record" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "history_version" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "filesize_limit" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 2048,
      "time" : 66769
    },
    "batch_export" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "recycle_bin_gt7" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "pdf_sign" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "secret_folder" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "ocr" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "pdf_split" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "manage_similar_files" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "ads_free" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "pdf_merge" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : -1,
      "time" : -1
    },
    "share_visit_gt3" : {
      "expire_at" : expire_time_diy,
      "effect_at" : time,
      "total" : 100000,
      "time" : -1
    }
  },
  "userinfo" : {
    "expire_at" : expire_time_diy,
    "member_array" : [
      40,
      20,
      12
    ],
    "member_id" : 40,
    "update_at" : time,
    "company_id" : 0,
    "company_member_map" : {

    }
  }
};

$done({ body: JSON.stringify(obj) });
  
