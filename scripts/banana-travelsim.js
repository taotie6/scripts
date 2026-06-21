/******************************
脚本名称：Banana Travel SIM流量查询
Version  : v1.0.0
更新时间：2026-06-20
作者：taotie6
Platform : Quantumult X
脚本功能：查询 Banana Travel SIM 多张 SIM/eSIM 流量并合并通知
使用说明：先通过 BoxJS 配置 SIM 卡信息，再通过定时任务执行
*******************************/

const _0x1f5573=_0x3c4f;function _0x3c4f(_0x30e00d,_0x398d2b){_0x30e00d=_0x30e00d-0x7c;const _0x5a8299=_0x5a82();let _0x3c4fa7=_0x5a8299[_0x30e00d];if(_0x3c4f['lQLLRI']===undefined){var _0x3ed4ed=function(_0x49451d){const _0x534451='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2168b9='',_0x46e2e9='';for(let _0x5714f2=0x0,_0x1cbc6c,_0x5167fd,_0x12c91b=0x0;_0x5167fd=_0x49451d['charAt'](_0x12c91b++);~_0x5167fd&&(_0x1cbc6c=_0x5714f2%0x4?_0x1cbc6c*0x40+_0x5167fd:_0x5167fd,_0x5714f2++%0x4)?_0x2168b9+=String['fromCharCode'](0xff&_0x1cbc6c>>(-0x2*_0x5714f2&0x6)):0x0){_0x5167fd=_0x534451['indexOf'](_0x5167fd);}for(let _0x1f3cc6=0x0,_0x1eff13=_0x2168b9['length'];_0x1f3cc6<_0x1eff13;_0x1f3cc6++){_0x46e2e9+='%'+('00'+_0x2168b9['charCodeAt'](_0x1f3cc6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x46e2e9);};_0x3c4f['wtZQZJ']=_0x3ed4ed,_0x3c4f['knUHti']={},_0x3c4f['lQLLRI']=!![];}const _0x587aa3=_0x5a8299[0x0],_0x2da6df=_0x30e00d+_0x587aa3,_0x5a580a=_0x3c4f['knUHti'][_0x2da6df];return!_0x5a580a?(_0x3c4fa7=_0x3c4f['wtZQZJ'](_0x3c4fa7),_0x3c4f['knUHti'][_0x2da6df]=_0x3c4fa7):_0x3c4fa7=_0x5a580a,_0x3c4fa7;}(function(_0x3400bc,_0x2c136c){const _0x4263cc=_0x3c4f,_0x4dea23=_0x3400bc();while(!![]){try{const _0x5218a5=parseInt(_0x4263cc(0x8a))/0x1+parseInt(_0x4263cc(0x82))/0x2+-parseInt(_0x4263cc(0x8b))/0x3+-parseInt(_0x4263cc(0x7d))/0x4*(-parseInt(_0x4263cc(0x7c))/0x5)+-parseInt(_0x4263cc(0x85))/0x6+-parseInt(_0x4263cc(0x7f))/0x7+-parseInt(_0x4263cc(0x7e))/0x8;if(_0x5218a5===_0x2c136c)break;else _0x4dea23['push'](_0x4dea23['shift']());}catch(_0x4d107a){_0x4dea23['push'](_0x4dea23['shift']());}}}(_0x5a82,0x655fd));function _0x5a82(){const _0xee7156=['mZaYmduZofvHBLnVEG','BwnOzwnRlMjHBG','DMvSC2LTx2nHCG','yMfUyw5Hx3rYyq','l3n0B3jLzNjVBG','nda0mdu0Ag5lDKPj','otKWmZi3uNztAhvK','mtbOufDmDMW','mte3ndu3mNr2A0ThuG','mteZnZq0ogHvBwvICG','mJaWntC4mfH5BwPTCW','Dc9ZAw0Ty2HLyW','qMfUyw5HifrYyq','mtm3mJi4nfrzwwnODq','yw5HDhjHDMvSCW','DMvSifnjtsdMTyhPH48'];_0x5a82=function(){return _0xee7156;};return _0x5a82();}const SCRIPT_NAME=_0x1f5573(0x81)+_0x1f5573(0x84),STORAGE_KEY=_0x1f5573(0x88)+_0x1f5573(0x87)+'ds',API_URL='https://si'+_0x1f5573(0x86)+_0x1f5573(0x83)+'im.com/api'+_0x1f5573(0x89)+_0x1f5573(0x80)+'k';run();
async function run(){log(`${SCRIPT_NAME} 开始执行`);try{await main()}catch(n){notify(SCRIPT_NAME,"执行失败",stringifyError(n))}finally{log(`${SCRIPT_NAME} 执行结束`),done()}}

async function main(){const{cards:n,errors:o}=readCards(),t=n.filter(n=>n.valid),r=o.concat(n.filter(n=>!n.valid).map(n=>n.error));if(0===t.length)return log(`未配置有效 SIM 卡：${r.join(" | ")||STORAGE_KEY}`),void notify(SCRIPT_NAME,"未配置有效 SIM 卡",r.length>0?r.join("\n"):`请在 BoxJS 中配置 ${STORAGE_KEY}`);log(`读取到 ${t.length} 张有效 SIM 卡`);const a=await Promise.all(t.map(n=>queryCard(n))),e=a.filter(n=>n.ok).flatMap(n=>formatSuccess(n)),l=a.filter(n=>!n.ok).map(n=>`${n.label}\n${n.error}`),i=[];e.length>0&&i.push(e.join("\n\n"));const c=r.concat(l);c.length>0&&i.push(`失败\n${c.join("\n\n")}`);const s=`成功 ${e.length} 项，失败 ${c.length} 项`;notify(SCRIPT_NAME,s,i.join("\n\n")||"没有可展示的流量信息")}

function readCards(){const r=readStore(STORAGE_KEY);if(!r||""===r.trim())return{cards:[],errors:[`未读取到 BoxJS 配置：${STORAGE_KEY}`]};let a;try{a=JSON.parse(r)}catch(r){return{cards:[],errors:[`SIM 卡配置不是合法 JSON：${r.message}`]}}const s=Array.isArray(a)?a:Array.isArray(a.cards)?a.cards:[];return 0===s.length?{cards:[],errors:["SIM 卡配置应为 JSON 数组，或包含 cards 数组的 JSON 对象"]}:{cards:s.map((r,a)=>normalizeCard(r,a)),errors:[]}}

function normalizeCard(i,e){const a=stringValue(i&&i.name).trim(),l=stringValue(i&&i.iccid).replace(/\s+/g,""),r=normalizeSimType(i&&i.simType),c=buildLabel(a,l,r,e);return l?r?{valid:!0,name:a,iccid:l,simType:r,maskedIccid:maskIccid(l),label:c}:{valid:!1,label:c,error:`${c}\nsimType 只能是 SIM 或 eSIM`}:{valid:!1,label:c,error:`第 ${e+1} 项缺少 iccid`}}

function normalizeSimType(e){const i=stringValue(e).trim().toLowerCase();return"sim"===i?"SIM":"esim"===i?"eSIM":""}

function buildLabel(u,n,s,c){const i=[];return i.push(u||`SIM ${c+1}`),s&&i.push(s),n&&i.push(maskIccid(n)),i.join(" · ")}

async function queryCard(e){const a=`${e.name||e.maskedIccid} · ${e.simType} · ${e.maskedIccid}`,r={url:API_URL,method:"POST",headers:{Accept:"application/json","Accept-Language":"zh-CN,zh;q=0.9","Content-Type":"application/json",Origin:"https://simcheck.bananatravelsim.com",Referer:"https://simcheck.bananatravelsim.com/","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"},body:JSON.stringify({iccid:e.iccid,simType:e.simType})};try{const t=await $task.fetch(r),i=Number(t.statusCode||t.status||0);if(i<200||i>=300)return{ok:!1,label:a,error:`HTTP ${i||"未知状态"}`};let c;try{c=JSON.parse(t.body||"{}")}catch(e){return{ok:!1,label:a,error:`响应不是合法 JSON：${e.message}`}}return{ok:!0,label:a,card:e,payload:c}}catch(e){return{ok:!1,label:a,error:stringifyError(e)}}}

function formatSuccess(a){const{card:r,payload:t}=a,e=Array.isArray(t.orders)?t.orders:[],o=t&&t.errors&&t.errors.orders,s=[];return 0===e.length?(s.push(`${a.label}\n未查询到订单${o?`：${o}`:""}`),s):(e.forEach(a=>{const t=stringValue(a.displayName||a.productCode||"未知套餐"),e=stringValue(a.orderStatus||"UNKNOWN"),o=formatData(a.remainingMb),d=formatData(a.dataTotal),n=formatData(a.dataUsage),i=formatDate(a.expiryDate),$=formatDate(a.activatedDate),c=[`${r.name||t} · ${r.simType} · ${r.maskedIccid}`,t,`剩余 ${o} / 总量 ${d}，已用 ${n}`,`状态 ${e}，到期 ${i}`];"-"!==$&&c.push(`激活 ${$}`),s.push(c.join("\n"))}),s)}

function formatData(t){const e=Number(t);return Number.isFinite(e)?Math.abs(e)>=1024?`${(e/1024).toFixed(2)} GB`:`${e.toFixed(e%1==0?0:2)} MB`:"-"}

function formatDate(t){if(!t)return"-";const e=new Date(t);return Number.isNaN(e.getTime())?stringValue(t):e.toISOString().slice(0,10)}

function maskIccid(n){const c=stringValue(n);return c.length<=4?c||"未填写":`****${c.slice(-4)}`}

function readStore(e){if("undefined"!=typeof $prefs&&$prefs.valueForKey){const r=$prefs.valueForKey(e);if("string"==typeof r)return log(`已通过 $prefs 读取配置：${e}`),r}if("undefined"!=typeof $persistentStore&&$persistentStore.read){const r=$persistentStore.read(e);if("string"==typeof r)return log(`已通过 $persistentStore 读取配置：${e}`),r}return log(`未找到可用的持久化存储 API：${e}`),""}

function notify(o,n,i){log([o,n,i].filter(Boolean).join("\n")),"function"!=typeof $notify?"undefined"!=typeof $notification&&$notification&&"function"==typeof $notification.post&&$notification.post(o,n,i):$notify(o,n,i)}

function log(o){"undefined"!=typeof console&&"function"==typeof console.log&&console.log(o)}

function done(){"function"==typeof $done&&$done()}

function stringifyError(r){if(!r)return"未知错误";if("string"==typeof r)return r;if(r.message)return r.message;try{return JSON.stringify(r)}catch(t){return String(r)}}

function stringValue(n){return null==n?"":String(n)}
