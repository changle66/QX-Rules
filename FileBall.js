/***********************************

> 应用名称：FileBall Pro
> 软件版本：1.2.8
> 脚本作者：Cuttlefish
> 解锁说明：先卸载，重新安装后，先挂载QX，然后打开FileBall
> 更新时间：2022-12-08

[rewrite_local]
  
# ～ FileBall解锁会员权限（2022-12-08）@ddgksf2013
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/*) url script-echo-response https://raw.githubusercontent.com/tkzc11/QX-Rules/main/FileBall.js
^https?:\/\/firebaseremoteconfig\.googleapis\.com\/v\d\/projects\/filebox url script-echo-response https://raw.githubusercontent.com/tkzc11/QX-Rules/main/FileBall.js

[mitm] 

hostname=api.revenuecat.com,firebaseremoteconfig.googleapis.com

***********************************/

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf1765=["\x6F\x66\x66\x65\x72\x69\x6E\x67\x73","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x72\x6C","\x70\x72\x6F","\x50\x72\x6F\x20\x74\x6F\x20\x61\x63\x63\x65\x73\x73\x20\x61\x6C\x6C\x20\x66\x65\x61\x74\x75\x72\x65\x73","\x66\x69\x6C\x65\x62\x6F\x78\x5F\x70\x72\x6F","\x6A\x75\x73\x74\x20\x61\x20\x74\x65\x73\x74","\x73\x61\x6C\x65","\x24\x72\x63\x5F\x6D\x6F\x6E\x74\x68\x6C\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x66\x69\x72\x65\x62\x61\x73\x65\x72\x65\x6D\x6F\x74\x65\x63\x6F\x6E\x66\x69\x67","\x66\x61\x6C\x73\x65","","\x74\x72\x75\x65","\x66\x6C\x61\x73\x65","\x7B\x5C\x22\x6C\x69\x73\x74\x5C\x22\x3A\x5B\x5D\x7D","\x7B\x5C\x22\x65\x6E\x61\x62\x6C\x65\x5C\x22\x3A\x74\x72\x75\x65\x2C\x5C\x22\x73\x6F\x75\x72\x63\x65\x5C\x22\x3A\x5C\x22\x74\x6D\x64\x62\x5C\x22\x7D","\x6D\x65\x2E\x73\x68\x75\x69\x66\x65\x6E\x67\x2E\x46\x69\x6C\x65\x62\x6F\x78","\x55\x50\x44\x41\x54\x45","\x34\x32","\x32\x30\x32\x31\x2D\x30\x37\x2D\x31\x33\x54\x30\x31\x3A\x31\x32\x3A\x35\x38\x5A","\x32\x30\x32\x31\x2D\x30\x37\x2D\x31\x33\x54\x30\x31\x3A\x31\x32\x3A\x30\x31\x5A","\x32\x30\x32\x31\x2D\x30\x37\x2D\x31\x33\x54\x30\x30\x3A\x32\x36\x3A\x35\x31\x5A","\x30\x35\x32\x32\x62\x39\x31\x37\x38\x31","\x61\x70\x70\x5F\x73\x74\x6F\x72\x65","\x24\x52\x43\x41\x6E\x6F\x6E\x79\x6D\x6F\x75\x73\x49\x44\x3A\x64\x64\x67\x6B\x73\x66\x32\x30\x31\x33","\x31\x2E\x30","\x32\x30\x31\x33\x2D\x30\x38\x2D\x30\x31\x54\x30\x37\x3A\x30\x30\x3A\x30\x30\x5A","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];if($request[__Oxf1765[0x2]][__Oxf1765[0x1]](__Oxf1765[0x0])>  -1){var ddgksf2013={"\x63\x75\x72\x72\x65\x6E\x74\x5F\x6F\x66\x66\x65\x72\x69\x6E\x67\x5F\x69\x64":__Oxf1765[0x3],"\x6F\x66\x66\x65\x72\x69\x6E\x67\x73":[{"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":__Oxf1765[0x4],"\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x3],"\x70\x61\x63\x6B\x61\x67\x65\x73":[{"\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x5],"\x70\x6C\x61\x74\x66\x6F\x72\x6D\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x5]}]},{"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":__Oxf1765[0x6],"\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x7],"\x70\x61\x63\x6B\x61\x67\x65\x73":[{"\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x8],"\x70\x6C\x61\x74\x66\x6F\x72\x6D\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x5]}]}]};$done({body:JSON[__Oxf1765[0x9]](ddgksf2013)})}else {if($request[__Oxf1765[0x2]][__Oxf1765[0x1]](__Oxf1765[0xa])>  -1){var ddgksf2013={"\x65\x6E\x74\x72\x69\x65\x73":{"\x76\x65\x72\x69\x66\x79\x5F\x72\x65\x63\x65\x69\x70\x74":__Oxf1765[0xb],"\x72\x65\x73\x65\x74\x5F\x70\x72\x6F\x5F\x69\x66\x5F\x74\x72\x61\x6E\x73\x63\x61\x74\x69\x6F\x6E\x5F\x69\x64\x5F\x6D\x69\x73\x73\x69\x6E\x67":__Oxf1765[0xb],"\x73\x65\x74\x5F\x66\x61\x6B\x65\x5F\x70\x72\x6F\x5F\x77\x68\x65\x6E\x5F\x6C\x6F\x61\x64\x69\x6E\x67\x5F\x6F\x66\x66\x65\x72\x73\x5F\x66\x61\x69\x6C\x65\x64":__Oxf1765[0xb],"\x76\x65\x72\x69\x66\x79\x5F\x72\x65\x63\x65\x69\x70\x74\x5F\x77\x69\x74\x68\x5F\x66\x69\x72\x65\x62\x61\x73\x65":__Oxf1765[0xb],"\x63\x68\x65\x63\x6B\x5F\x72\x65\x63\x65\x69\x70\x74\x5F\x64\x61\x74\x61":__Oxf1765[0xb],"\x63\x68\x65\x63\x6B\x5F\x74\x72\x61\x6E\x73\x63\x61\x74\x69\x6F\x6E\x5F\x69\x64\x5F\x77\x68\x69\x74\x65\x5F\x6C\x69\x73\x74":__Oxf1765[0xc],"\x65\x6E\x61\x62\x6C\x65\x5F\x64\x61\x6E\x64\x61\x6E\x70\x6C\x61\x79":__Oxf1765[0xd],"\x76\x65\x72\x69\x66\x79\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0xb],"\x63\x6C\x65\x61\x6E\x5F\x65\x74\x61\x67\x5F\x77\x68\x65\x6E\x5F\x6C\x6F\x61\x64\x69\x6E\x67\x5F\x6F\x66\x66\x73\x65\x72\x73\x5F\x66\x61\x69\x6C\x65\x64":__Oxf1765[0xe],"\x62\x6C\x61\x63\x6B\x6C\x69\x73\x74":__Oxf1765[0xf],"\x64\x65\x74\x65\x63\x74\x5F\x6D\x61\x6C\x66\x6F\x72\x6D\x65\x64":__Oxf1765[0xb],"\x6C\x69\x62\x72\x61\x72\x79\x5F\x73\x65\x61\x72\x63\x68\x5F\x6D\x6F\x76\x69\x65":__Oxf1765[0x10],"\x65\x6E\x61\x62\x6C\x65\x5F\x73\x65\x61\x72\x63\x68\x5F\x6C\x79\x72\x69\x63\x73":__Oxf1765[0xb]},"\x61\x70\x70\x4E\x61\x6D\x65":__Oxf1765[0x11],"\x73\x74\x61\x74\x65":__Oxf1765[0x12],"\x74\x65\x6D\x70\x6C\x61\x74\x65\x56\x65\x72\x73\x69\x6F\x6E":__Oxf1765[0x13]};$done({body:JSON[__Oxf1765[0x9]](ddgksf2013)})}else {var ddgksf2013={"\x72\x65\x71\x75\x65\x73\x74\x5F\x64\x61\x74\x65":__Oxf1765[0x14],"\x72\x65\x71\x75\x65\x73\x74\x5F\x64\x61\x74\x65\x5F\x6D\x73":1626138778636,"\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72":{"\x65\x6E\x74\x69\x74\x6C\x65\x6D\x65\x6E\x74\x73":{"\x66\x69\x6C\x65\x62\x6F\x78\x5F\x70\x72\x6F":{"\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":null,"\x67\x72\x61\x63\x65\x5F\x70\x65\x72\x69\x6F\x64\x5F\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65":null,"\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72":__Oxf1765[0x5],"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf1765[0x15]}},"\x66\x69\x72\x73\x74\x5F\x73\x65\x65\x6E":__Oxf1765[0x16],"\x6C\x61\x73\x74\x5F\x73\x65\x65\x6E":__Oxf1765[0x16],"\x6D\x61\x6E\x61\x67\x65\x6D\x65\x6E\x74\x5F\x75\x72\x6C":null,"\x6E\x6F\x6E\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73":{"\x66\x69\x6C\x65\x62\x6F\x78\x5F\x70\x72\x6F":[{"\x69\x64":__Oxf1765[0x17],"\x69\x73\x5F\x73\x61\x6E\x64\x62\x6F\x78":false,"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf1765[0x15],"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf1765[0x15],"\x73\x74\x6F\x72\x65":__Oxf1765[0x18]}]},"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x70\x70\x5F\x75\x73\x65\x72\x5F\x69\x64":__Oxf1765[0x19],"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x5F\x76\x65\x72\x73\x69\x6F\x6E":__Oxf1765[0x1a],"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf1765[0x1b],"\x6F\x74\x68\x65\x72\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x73":{"\x66\x69\x6C\x65\x62\x6F\x78\x5F\x70\x72\x6F":{"\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65":__Oxf1765[0x15]}},"\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73":{}}};$done({body:JSON[__Oxf1765[0x9]](ddgksf2013)})}};(function(_0xd1d5x2,_0xd1d5x3,_0xd1d5x4,_0xd1d5x5,_0xd1d5x6,_0xd1d5x7){_0xd1d5x7= __Oxf1765[0x1c];_0xd1d5x5= function(_0xd1d5x8){if( typeof alert!== _0xd1d5x7){alert(_0xd1d5x8)};if( typeof console!== _0xd1d5x7){console[__Oxf1765[0x1d]](_0xd1d5x8)}};_0xd1d5x4= function(_0xd1d5x9,_0xd1d5x2){return _0xd1d5x9+ _0xd1d5x2};_0xd1d5x6= _0xd1d5x4(__Oxf1765[0x1e],_0xd1d5x4(_0xd1d5x4(__Oxf1765[0x1f],__Oxf1765[0x20]),__Oxf1765[0x21]));try{_0xd1d5x2= __encode;if(!( typeof _0xd1d5x2!== _0xd1d5x7&& _0xd1d5x2=== _0xd1d5x4(__Oxf1765[0x22],__Oxf1765[0x23]))){_0xd1d5x5(_0xd1d5x6)}}catch(e){_0xd1d5x5(_0xd1d5x6)}})({})
