(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{"052d":function(t,n,e){"use strict";e.r(n);var i=e("ab57"),o=e("f2a8");for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("05fe");var u,r=e("f0c5"),a=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=a.exports},"05fe":function(t,n,e){"use strict";var i=e("191c"),o=e.n(i);o.a},"191c":function(t,n,e){},ab57:function(t,n,e){"use strict";var i={"uni-icon":function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"eb44"))}},o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}))},edba:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){e.e("components/uni-icon/uni-icon").then(function(){return resolve(e("eb44"))}.bind(null,e)).catch(e.oe)},o={name:"uni-notice-bar",components:{uniIcon:i},props:{text:String,moreText:String,backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:[String,Boolean],default:!1},scrollable:{type:[String,Boolean],default:!1},showIcon:{type:[String,Boolean],default:!1},showGetMore:{type:[String,Boolean],default:!1},showClose:{type:[String,Boolean],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,show:!0,animation:""}},watch:{text:function(t,n){var e=this;this.$nextTick((function(){setTimeout(e.setAnimation,200)}))}},computed:{setTextClass:function(){var t=[];return!0===this.scrollable||"true"===this.scrollable?t.push("uni-noticebar--scrollable"):("true"===this.single||!0===this.single||this.moreText)&&t.push("uni-noticebar--single"),t},setContenClass:function(){var t=[];return(!0===this.scrollable||"true"===this.scrollable||"true"===this.single||!0===this.single||this.moreText)&&t.push("uni-noticebar--flex"),t}},onReady:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(n){var e=n.touches?n.touches[0]?n.touches[0].clientX:n.changedTouches[0].clientX:n.detail.clientX;t.upx2px(48)+12>e&&"true"===String(this.showClose)&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var n=this;!1!==this.scrollable&&"false"!==this.scrollable&&t.createSelectorQuery().select("#".concat(this.elId)).boundingClientRect().exec((function(t){n.animation="notice ".concat(t[0].width/n.speed,"s linear infinite both")}))}}};n.default=o}).call(this,e("543d")["default"])},f2a8:function(t,n,e){"use strict";e.r(n);var i=e("edba"),o=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("052d"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);
