webpackJsonp([1],{0:function(t,e){},1:function(t,e){},2:function(t,e){},GhuV:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(t){n("gsu9")},null,null).exports,c=n("/ocq"),r=n("tsU9"),u={name:"HelloWorld",data:function(){return{canvas:"",width:document.body.clientWidth+"px",height:"300px"}},mounted:function(){this.canvas=new r.fabric.Canvas("main"),this.canvas.observe("object:moving",function(t){var e=t.target;if(!(e.currentHeight>e.canvas.height||e.currentWidth>e.canvas.width)){var n=e.currentWidth/2,i=e.currentHeight/2,a={tl:{x:n,y:i},br:{x:e.canvas.width-n,y:e.canvas.height-i}};(e.top<a.tl.y||e.left<a.tl.x)&&(e.top=Math.max(e.top,a.tl.y),e.left=Math.max(e.left,a.tl.x)),(e.top>a.br.y||e.left>a.br.x)&&(e.top=Math.min(e.top,a.br.y),e.left=Math.min(e.left,a.br.x))}}),this.canvas.on("object:moving",function(t){var e=t.target;e.currentHeight>e.canvas.height||e.currentWidth>e.canvas.width||(e.setCoords(),(e.getBoundingRect().top<0||e.getBoundingRect().left<0)&&(e.top=Math.max(e.top,e.top-e.getBoundingRect().top),e.left=Math.max(e.left,e.left-e.getBoundingRect().left)),(e.getBoundingRect().top+e.getBoundingRect().height>e.canvas.height||e.getBoundingRect().left+e.getBoundingRect().width>e.canvas.width)&&(e.top=Math.min(e.top,e.canvas.height-e.getBoundingRect().height+e.top-e.getBoundingRect().top),e.left=Math.min(e.left,e.canvas.width-e.getBoundingRect().width+e.left-e.getBoundingRect().left)))})},methods:{getObjectURL:function(t){var e=null;return void 0!=window.createObjectURL?e=window.createObjectURL(t):void 0!=window.URL?e=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e},changeImg:function(t){var e=this,n=this.getObjectURL(t.target.files[0]);r.fabric.Image.fromURL(n,function(t){t.scale(.1),e.canvas.add(t)})},saveAsJPG:function(t){var e=this.canvas.toDataURL("image/jpeg"),n=document.createElement("a");n.href=e,n.download="tupian",document.body.appendChild(n),n.click()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("canvas",{attrs:{id:"main",width:t.width,height:t.height}}),t._v(" "),n("input",{attrs:{type:"file",name:"file0",id:"file0",multiple:"multiple"},on:{change:function(e){return t.changeImg(e)}}}),t._v(" "),n("button",{on:{click:t.saveAsJPG}},[t._v("存为图片")])])},staticRenderFns:[]};var l=n("VU/8")(u,d,!1,function(t){n("GhuV")},null,null).exports;i.default.use(c.a);var h=new c.a({routes:[{path:"/",name:"HelloWorld",component:l}]}),s=n("NxjZ"),g=n.n(s);n("zlkP");i.default.use(g.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:h,render:function(t){return t(o)}})},gsu9:function(t,e){},zlkP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.02e079e8da56511c8a17.js.map