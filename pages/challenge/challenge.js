(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/challenge/challenge"],{"04d0":function(n,t,e){"use strict";(function(n){e("d3fb"),e("921b");o(e("66fd"));var t=o(e("22b4"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"22b4":function(n,t,e){"use strict";e.r(t);var o=e("eb99"),s=e("8050");for(var i in s)"default"!==i&&function(n){e.d(t,n,(function(){return s[n]}))}(i);e("7c38");var a,c=e("f0c5"),r=Object(c["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=r.exports},"7c38":function(n,t,e){"use strict";var o=e("d2f7"),s=e.n(o);s.a},8050:function(n,t,e){"use strict";e.r(t);var o=e("a184"),s=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=s.a},a184:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){e.e("components/share").then(function(){return resolve(e("ab53"))}.bind(null,e)).catch(e.oe)},s={components:{share:o},data:function(){return{questionBanks:[],score:0,current:0,controlShow:!0,animationData:{}}},onShow:function(){console.log("size:"+this.questionBanks.length),n.login({provider:"weixin",success:function(t){console.log("loginRes"),console.log(t),n.getUserInfo({provider:"weixin",success:function(n){console.log(n),console.log("用户昵称为："+n.userInfo.nickName)}})}}),this.randTen()},methods:{donghua:function(){var t=n.createAnimation({duration:1e3,timingFunction:"ease"});this.animation=t,t.opacity(0).translate(-300).step(),this.animationData=t.export(),console.log("1000"),setTimeout(function(){t.translate(10).opacity(.5).step({duration:0}),this.animationData=t.export()}.bind(this),400),setTimeout(function(){t.translate(0).opacity(1).step({duration:800}),this.animationData=t.export(),console.log("1000")}.bind(this),500),console.log("动画呢")},randTen:function(){var t=this;if(console.log("初始化"),this.questionBanks.length>0&&this.current<9)return!1;this.current=0,this.score=0,this.controlShow=!0,this.questionBanks=[],n.request({url:this.serverUrl+"/qb/randOne?num=10",success:function(n){console.log(n),console.log(n.data.data),t.questionBanks=n.data.data}})},switchTabToClassify:function(t){if(9==this.current&&(this.controlShow=!1),console.log(t),console.log(this.questionBanks[this.current]),this.questionBanks[this.current]["selectedType"]=t,console.log("当前的需要："+this.current),this.questionBanks[this.current].garbageType==t){this.donghua();var e=this;setTimeout((function(){e.score++,e.current++,e.gotoNav()}),400)}else{var o=this.questionBanks[this.current],s=1==o.garbageType?"干垃圾":2==o.garbageType?"湿垃圾":3==o.garbageType?"可回收物":"有害垃圾",i=o.garbageName+" 属于 "+s,a=this;n.showModal({title:"选错啦",content:i,confirmText:"知道了",showCancel:!1,success:function(n){console.log(n),console.log("点击了确认:me.current:"+a.current),a.donghua(),setTimeout((function(){a.current++,a.gotoNav()}),400)}})}},gotoNav:function(){if(this.current>=10){console.log("要进行跳转拉");var t=JSON.stringify(this.questionBanks),e=this.score;n.request({url:this.serverUrl+"/challenge",data:{score:e,userName:"张三",list:this.questionBanks},header:{"content-type":"application/json"},method:"POST",success:function(n){console.log(n),console.log(n.data.data)}}),n.navigateTo({url:"/pages/challenge/challengeResult?score=".concat(e,"&list=").concat(t)})}}}};t.default=s}).call(this,e("543d")["default"])},d2f7:function(n,t,e){},eb99:function(n,t,e){"use strict";var o,s=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}))}},[["04d0","common/runtime","common/vendor"]]]);