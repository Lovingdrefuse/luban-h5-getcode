(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210b9d"],{b8b3:function(t,e,r){"use strict";r.r(e);r("8e6e"),r("ac6a"),r("456d");var o=r("ade3"),n=r("2f62"),i=[{title:"Id",key:"id",scopedSlots:{customRender:"id"}},{title:"Title",dataIndex:"title",key:"title"},{title:"Forms",key:"formCount",dataIndex:"formCount",align:"center"},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}];function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s,d,u={components:{},data:function(){return{}},computed:a(a({},Object(n["c"])("editor",["works"])),{},{computedWorks:function(){return this.works.map((function(t){return{id:t.id,title:t.title,pv:t.pv||0,uv:t.uv||0,formCount:t.form_count||0}}))}}),methods:a({},Object(n["b"])("editor",["fetchWorksWithForms"])),render:function(t){var e=this,r=this;return t("div",{class:"works-wrapper",style:"background-color:white;padding: 12px;margin-top: 24px;"},[t("a-table",{attrs:{size:"middle",columns:i,dataSource:this.computedWorks,"row-key":"id"},scopedSlots:{id:function(r){return t("router-link",{attrs:{to:{name:"editor",params:{workId:r.id}},target:"_blank",title:e.$t("workCard.view")}},[r.id,t("a-icon",{attrs:{type:"link",title:e.$t("workCard.view")},class:"ml-3"})])},action:function(e){return[t("router-link",{attrs:{to:{name:"stat-detail",params:{id:e.id}}}},[r.$t("basicData.viewData")])]}}})])},created:function(){this.fetchWorksWithForms()}},l=u,p=r("2877"),b=Object(p["a"])(l,s,d,!1,null,null,null);e["default"]=b.exports}}]);