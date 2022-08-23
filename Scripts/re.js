/******************************
脚本功能：FileBall解锁订阅
软件版本：1.2.2
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > FileBall解锁订阅
^https:\/\/api\.revenuecat\.com\/v\d/(subscribers/\$RCAnonymousID\%(\w)+|receipts)$ url script-response-body https://raw.githubusercontent.com/GalaxySpace/Heartbeats/main/Scripts/FileBall.js
hostname = api.revenuecat.com
*******************************/

var body = $response.body;
var objc = JSON.parse(body);
objc =
{
  "request_date": "2022-04-12T14:44:57Z",
  "request_date_ms": 1649774697910,
  "subscriber": {
    "entitlements": {
      "filebox_pro": {
        "expires_date": "2999-02-11T09:48:56Z",
        "grace_period_expires_date": "2999-02-11T09:48:56Z",
        "product_identifier": "filebox_pro",
        "purchase_date": "2022-02-11T09:48:56Z"
      }
    },
    "first_seen": "2022-02-11T09:49:26Z",
    "last_seen": "2022-04-12T14:44:57Z",
    "management_url": null,
    "non_subscriptions": {
      "filebox_pro": [
        {
          "id": "12ajd865",
          "is_sandbox": false,
          "original_purchase_date": "2022-02-11T09:48:56Z",
          "purchase_date": "2022-02-11T09:48:56Z",
          "store": "app_store"
        }
      ]
    },
    "original_app_user_id": "$RCAnonymousID:dccd8008a4a4467d8f7a977d74a25a1b",
    "original_application_version": "102",
    "original_purchase_date": "2022-02-11T09:48:52Z",
    "other_purchases": {
      "filebox_pro": {
        "purchase_date": "2022-02-11T09:48:56Z"
      }
    },
    "subscriptions": {}
  }
}
body = JSON.stringify(objc);
$done({body});
