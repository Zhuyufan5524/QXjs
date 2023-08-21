
[rewrite_local]

^http[s]?:\/\/(api-chat.soulapp.cn|.*)(\/chat\/limitInfo|\/privilege\/fly\/status) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Soul.js

[mitm] 

hostname = (.*|api-chat.soulapp.cn)
