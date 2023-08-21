/*******************************

脚本功能：Soul——解锁私聊——解锁谁看过我
下载地址：https://is.gd/Y8maL3
软件版本：4.9.0
脚本作者：彭于晏💞
更新时间：2023-8-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】


*******************************

[rewrite_local]

^http[s]?:\/\/(api-chat.soulapp.cn|.*)(\/chat\/limitInfo|\/privilege\/fly\/status) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Soul.js

[mitm] 

hostname = (.*|api-chat.soulapp.cn)