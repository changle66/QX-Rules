#!name = 哔哩哔哩
#!desc = 没有广告的哔哩哔哩更值得干杯
#!author = RuCu6 Maasea
#!update = 2023-11-07 20:05

# Proto 动态广告,后台播放限制,播放页广告 //app.bilibili.com
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/DynAll url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/biliProtoA.js
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Teenagers\/ModeStatus url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/biliProtoA.js
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.(view|viewunite)\.v1\.View\/(View|ViewProgress) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/biliProtoA.js
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.community\.service\.dm\.v1\.DM\/DmView url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/biliProtoA.js
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.main\.community\.reply\.v1\.Reply\/MainList url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/biliProtoA.js
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.polymer\.app\.search\.v1\.Search\/SearchAll url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/bilibili/biliProtoA.js

# 首页 DefaultWord,推荐,热搜发现,右上角活动,标签页,观影页,直播,直播间商品广告浮窗
^https:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Search\/DefaultWords$ url reject
^https:\/\/app\.bilibili\.com\/x\/v2\/(feed\/index(\/story)?|search\/square)\? url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js
^https:\/\/app\.bilibili\.com\/x\/resource\/(top\/activity|show\/tab\/v2)\? url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js
^https:\/\/api\.bilibili\.com\/pgc\/page\/(bangumi|cinema\/tab\?) url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js
^https:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom\? url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js
^https:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v1\/ecommerce-user\/get_shopping_info\? url reject-dict

# 开屏广告 //app.bilibili.com
^http:\/\/upos-sz-static\.bilivideo\.com\/ssaxcode\/\w{2}\/\w{2}\/\w{32}-1-SPLASH url reject
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/(brand\/list|event\/list2|list|show)\? url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js

# 我的页面 解锁1080P高码率,4K画质,皮肤推送 //app.bilibili.com
^https:\/\/app\.bilibili\.com\/x\/v2\/account\/(mine(\/ipad)?|myinfo)\? url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js
^https:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/bili.js

# IP请求,地理位置请求 //api.bilibili.com
^https:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
^https:\/\/api\.bilibili\.com\/x\/web-interface\/zone\?jsonp=jsonp$ url reject-200

hostname = app.bilibili.com, api.bilibili.com, api.live.bilibili.com, grpc.biliapi.net