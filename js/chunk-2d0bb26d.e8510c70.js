(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb26d"],{"39f7":function(e,t,n){"use strict";n.r(t),t["default"]={props:{elementProps:{type:Object,default:function(){return{items:[],activeIndex:0}}}},computed:{innerItems:function(){return this.elementProps.items}},data:function(){return{current:1}},methods:{itemRender:function(e,t,n){var i=this,s=this.$createElement;return"prev"===t?s("a-button",{style:{marginRight:"8px"},attrs:{size:"small",icon:"minus",disabled:1===this.innerItems.length},on:{click:function(){return i.minus(e)}}}):"next"===t?s("a-button",{style:{marginLeft:"8px"},attrs:{size:"small",icon:"plus"},on:{click:this.add}}):n},add:function(){this.elementProps.items.push({image:"",value:"选项".concat(this.innerItems.length+1,"-value"),label:"选项".concat(this.innerItems.length+1,"-label")})},minus:function(e){1!==this.innerItems.length&&(this.elementProps.items.splice(e,1),this.elementProps.activeIndex=Math.max(e-1,0))}},render:function(){var e=this,t=arguments[0],n=this.innerItems[this.current-1]||{};return t("div",[t("a-pagination",{attrs:{current:this.current,size:"small",total:this.innerItems.length,defaultPageSize:1,itemRender:this.itemRender},on:{change:function(t){e.current=t,e.elementProps.activeIndex=t-1}}}),t("lbs-image-gallery",{style:{margin:"16px 0"},attrs:{value:n.image},on:{change:function(e){n.image=e}}})])}}}}]);