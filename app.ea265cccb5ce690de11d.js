webpackJsonp([1],{0:function(e,t){},"9aeF":function(e,t){},F2Cz:function(e,t){},MqYO:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n=i("8+8L"),a=i("IZMb"),r=i.n(a),o=i("NYxO"),c=i("asHx"),l=i.n(c);s.a.use(o.a);var d={providedImg:"",receivedImgs:[],sessionId:(new l.a).guid()},h=new o.a.Store({state:d,mutations:{SET_PROVIDED_IMG:function(e,t){e.providedImg=t},SET_IMG_IN_PROGRESS:function(e,t){e.receivedImgs.push({id:t,url:""})},SET_IMG_DONE:function(e,t){var i=e.receivedImgs.map(function(e){return e.id}).indexOf(t.id);e.receivedImgs.splice(i,1,{id:t.id,url:t.url})},DELETE_IMG_IN_PROGRESS:function(e,t){var i=e.receivedImgs.map(function(e){return e.id}).indexOf(t);e.receivedImgs.splice(i,1)}},actions:{}}),u=(i("e0XP"),i("pFYg")),p=i.n(u),g=i("woOf"),f=i.n(g),m=i("hiCB"),v=i.n(m),w={name:"picture-input",props:{width:{type:[String,Number],default:v.a},height:{type:[String,Number],default:v.a},margin:{type:[String,Number],default:0},accept:{type:String,default:"image/*"},size:{type:[String,Number],default:v.a},name:{type:String,default:null},id:{type:[String,Number],default:null},buttonClass:{type:String,default:"btn btn-primary button"},removeButtonClass:{type:String,default:"btn btn-secondary button secondary"},aspectButtonClass:{type:String,default:"btn btn-secondary button secondary"},prefill:{type:[String,File],default:""},prefillOptions:{type:Object,default:function(){return{}}},crop:{type:Boolean,default:!0},radius:{type:[String,Number],default:0},removable:{type:Boolean,default:!1},hideChangeButton:{type:Boolean,default:!1},autoToggleAspectRatio:{type:Boolean,default:!1},toggleAspectRatio:{type:Boolean,default:!1},changeOnClick:{type:Boolean,default:!0},plain:{type:Boolean,default:!1},zIndex:{type:Number,default:1e4},alertOnError:{type:Boolean,default:!0},customStrings:{type:Object,default:function(){return{}}}},watch:{prefill:function(){this.prefill?this.preloadImage(this.prefill,this.prefillOptions):this.removeImage()}},data:function(){return{imageSelected:!1,previewHeight:0,previewWidth:0,draggingOver:!1,canvasWidth:0,canvasHeight:0,strings:{upload:"<p>Your device does not support file uploading.</p>",drag:"Drag an image or <br>click here to select a file",tap:"Tap here to select a photo <br>from your gallery",change:"Change Photo",aspect:"Landscape/Portrait",remove:"Remove Photo",select:"Select a Photo",selected:"<p>Photo successfully selected!</p>",fileSize:"The file size exceeds the limit",fileType:"This file type is not supported."}}},mounted:function(){var e=this;if(this.updateStrings(),this.prefill&&this.preloadImage(this.prefill,this.prefillOptions),this.$nextTick(function(){window.addEventListener("resize",e.onResize),e.onResize()}),this.supportsPreview){this.pixelRatio=Math.round(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI);var t=this.$refs.previewCanvas;t.getContext&&(this.context=t.getContext("2d"),this.context.scale(this.pixelRatio,this.pixelRatio))}"image/*"!==this.accept&&(this.fileTypes=this.accept.split(","),this.fileTypes=this.fileTypes.map(function(e){return e.trim()})),this.canvasWidth=this.width,this.canvasHeight=this.height,this.$on("error",this.onError)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize),this.$off("error",this.onError)},methods:{updateStrings:function(){for(var e in this.customStrings)e in this.strings&&"string"==typeof this.customStrings[e]&&(this.strings[e]=this.customStrings[e])},onClick:function(){this.imageSelected?(this.changeOnClick&&this.selectImage(),this.$emit("click")):this.selectImage()},onResize:function(){this.resizeCanvas(),this.imageObject&&this.drawImage(this.imageObject)},onDragStart:function(){this.supportsDragAndDrop&&(this.draggingOver=!0)},onDragStop:function(){this.supportsDragAndDrop&&(this.draggingOver=!1)},onFileDrop:function(e){this.onDragStop(),this.onFileChange(e)},onFileChange:function(e,t){var i=e.target.files||e.dataTransfer.files;if(i.length)if(i[0].size<=0||i[0].size>1024*this.size*1024)this.$emit("error",{type:"fileSize",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileSize+" ("+this.size+"MB)"});else if(i[0].name!==this.fileName||i[0].size!==this.fileSize||this.fileModified!==i[0].lastModified){if(this.file=i[0],this.fileName=i[0].name,this.fileSize=i[0].size,this.fileModified=i[0].lastModified,this.fileType=i[0].type,"image/*"===this.accept){if("image/"!==i[0].type.substr(0,6))return}else if(-1===this.fileTypes.indexOf(i[0].type))return void this.$emit("error",{type:"fileType",fileSize:i[0].size,fileType:i[0].type,fileName:i[0].name,message:this.strings.fileType});this.imageSelected=!0,this.image="",this.supportsPreview?this.loadImage(i[0],t||!1):t?this.$emit("prefill"):this.$emit("change",this.image)}},onError:function(e){this.alertOnError&&alert(e.message)},loadImage:function(e,t){var i=this;this.getEXIFOrientation(e,function(s){i.setOrientation(s);var n=new FileReader;n.onload=function(e){i.image=e.target.result,t?i.$emit("prefill"):i.$emit("change",i.image),i.imageObject=new Image,i.imageObject.onload=function(){i.autoToggleAspectRatio&&(i.getOrientation(i.canvasWidth,i.canvasHeight)!==i.getOrientation(i.imageObject.width,i.imageObject.height)&&i.rotateCanvas());i.drawImage(i.imageObject)},i.imageObject.src=i.image},n.readAsDataURL(e)})},drawImage:function(e){this.imageWidth=e.width,this.imageHeight=e.height,this.imageRatio=e.width/e.height;var t=0,i=0,s=this.previewWidth,n=this.previewHeight,a=this.previewWidth/this.previewHeight;this.crop?this.imageRatio>=a?(s=n*this.imageRatio,t=(this.previewWidth-s)/2):(n=s/this.imageRatio,i=(this.previewHeight-n)/2):this.imageRatio>=a?(n=s/this.imageRatio,i=(this.previewHeight-n)/2):(s=n*this.imageRatio,t=(this.previewWidth-s)/2);var r=this.$refs.previewCanvas;r.style.background="none",r.width=this.previewWidth*this.pixelRatio,r.height=this.previewHeight*this.pixelRatio,this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,r.width,r.height),this.rotate&&(this.context.translate(t*this.pixelRatio,i*this.pixelRatio),this.context.translate(s/2*this.pixelRatio,n/2*this.pixelRatio),this.context.rotate(this.rotate),t=-s/2,i=-n/2),this.context.drawImage(e,t*this.pixelRatio,i*this.pixelRatio,s*this.pixelRatio,n*this.pixelRatio)},selectImage:function(){this.$refs.fileInput.click()},removeImage:function(){this.$refs.fileInput.value="",this.$refs.fileInput.type="",this.$refs.fileInput.type="file",this.fileName="",this.fileType="",this.fileSize=0,this.fileModified=0,this.imageSelected=!1,this.image="",this.file=null,this.imageObject=null,this.$refs.previewCanvas.style.backgroundColor="rgba(200,200,200,.25)",this.$refs.previewCanvas.width=this.previewWidth*this.pixelRatio,this.$emit("remove")},rotateImage:function(){this.rotateCanvas(),this.imageObject&&this.drawImage(this.imageObject);var e=this.getOrientation(this.canvasWidth,this.canvasHeight);this.$emit("aspectratiochange",e)},resizeCanvas:function(){var e=this.canvasWidth/this.canvasHeight,t=this.$refs.container.clientWidth;(this.toggleAspectRatio||t!==this.containerWidth)&&(this.containerWidth=t,this.previewWidth=Math.min(this.containerWidth-2*this.margin,this.canvasWidth),this.previewHeight=this.previewWidth/e)},getOrientation:function(e,t){var i="square";return e>t?i="landscape":e<t&&(i="portrait"),i},switchCanvasOrientation:function(){var e=this.canvasWidth,t=this.canvasHeight;this.canvasWidth=t,this.canvasHeight=e},rotateCanvas:function(){this.switchCanvasOrientation(),this.resizeCanvas()},setOrientation:function(e){this.rotate=!1,8===e?this.rotate=-Math.PI/2:6===e?this.rotate=Math.PI/2:3===e&&(this.rotate=-Math.PI)},getEXIFOrientation:function(e,t){var i=new FileReader;i.onload=function(e){var i=new DataView(e.target.result);if(65496!==i.getUint16(0,!1))return t(-2);for(var s=i.byteLength,n=2;n<s;){var a=i.getUint16(n,!1);if(n+=2,65505===a){if(1165519206!==i.getUint32(n+=2,!1))return t(-1);var r=18761===i.getUint16(n+=6,!1);n+=i.getUint32(n+4,r);var o=i.getUint16(n,r);n+=2;for(var c=0;c<o;c++)if(274===i.getUint16(n+12*c,r))return t(i.getUint16(n+12*c+8,r))}else{if(65280!=(65280&a))break;n+=i.getUint16(n,!1)}}return t(-1)},i.readAsArrayBuffer(e.slice(0,65536))},preloadImage:function(e,t){var i=this;if(t=f()({},t),"object"===(void 0===e?"undefined":p()(e)))return this.imageSelected=!0,this.image="",void(this.supportsPreview?this.loadImage(e,!0):this.$emit("prefill"));var s=new Headers;s.append("Accept","image/*"),fetch(e,{method:"GET",mode:"cors",headers:s}).then(function(e){return e.blob()}).then(function(s){var n={target:{files:[]}},a=t.fileName||e.split("/").slice(-1)[0],r=t.mediaType||"image/"+(t.fileType||a.split(".").slice(-1)[0]);r=r.replace("jpg","jpeg"),n.target.files[0]=new File([s],a,{type:r}),i.onFileChange(n,!0)}).catch(function(e){i.$emit("error",{type:"failedPrefill",message:"Failed loading prefill image: "+e})})}},computed:{supportsUpload:function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=document.createElement("input");return e.type="file",!e.disabled},supportsPreview:function(){return window.FileReader&&!!window.CanvasRenderingContext2D},supportsDragAndDrop:function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&!("ontouchstart"in window||navigator.msMaxTouchPoints)},computedClasses:function(){var e={};return e["dragging-over"]=this.draggingOver,e},fontSize:function(){return Math.min(.04*this.previewWidth,21)+"px"}}},I={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"picture-input",attrs:{id:"picture-input"}},[e.supportsUpload?e.supportsPreview?i("div",[i("div",{staticClass:"preview-container",style:{maxWidth:e.previewWidth+"px",height:e.previewHeight+"px",borderRadius:e.radius+"%"}},[i("canvas",{ref:"previewCanvas",staticClass:"picture-preview",class:e.computedClasses,style:{height:e.previewHeight+"px",zIndex:e.zIndex+1},on:{drag:function(e){e.stopPropagation(),e.preventDefault()},dragover:function(e){e.stopPropagation(),e.preventDefault()},dragstart:function(t){t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragenter:function(t){t.stopPropagation(),t.preventDefault(),e.onDragStart(t)},dragend:function(t){t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},dragleave:function(t){t.stopPropagation(),t.preventDefault(),e.onDragStop(t)},drop:function(t){t.stopPropagation(),t.preventDefault(),e.onFileDrop(t)},click:function(t){t.preventDefault(),e.onClick(t)}}}),e._v(" "),e.imageSelected||e.plain?e._e():i("div",{staticClass:"picture-inner",style:{top:-e.previewHeight+"px",marginBottom:-e.previewHeight+"px",fontSize:e.fontSize,borderRadius:e.radius+"%",zIndex:e.zIndex+2}},[e.supportsDragAndDrop?i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.drag)}}):i("span",{staticClass:"picture-inner-text",domProps:{innerHTML:e._s(e.strings.tap)}})])]),e._v(" "),e.imageSelected&&!e.hideChangeButton?i("button",{class:e.buttonClass,on:{click:function(t){t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]):e._e(),e._v(" "),e.imageSelected&&e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e(),e._v(" "),e.imageSelected&&e.toggleAspectRatio&&e.width!==e.height?i("button",{class:e.aspectButtonClass,on:{click:function(t){t.preventDefault(),e.rotateImage(t)}}},[e._v(e._s(e.strings.aspect))]):e._e()]):i("div",[e.imageSelected?i("div",[i("div",{domProps:{innerHTML:e._s(e.strings.selected)}}),e._v(" "),e.hideChangeButton?e._e():i("button",{class:e.buttonClass,on:{click:function(t){t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.change))]),e._v(" "),e.removable?i("button",{class:e.removeButtonClass,on:{click:function(t){t.preventDefault(),e.removeImage(t)}}},[e._v(e._s(e.strings.remove))]):e._e()]):i("button",{class:e.buttonClass,on:{click:function(t){t.preventDefault(),e.selectImage(t)}}},[e._v(e._s(e.strings.select))])]):i("div",{domProps:{innerHTML:e._s(e.strings.upload)}}),e._v(" "),i("input",{ref:"fileInput",attrs:{type:"file",name:e.name,id:e.id,accept:e.accept},on:{change:e.onFileChange}})])},staticRenderFns:[]};var b={data:function(){return{image:""}},components:{PictureInput:i("VU/8")(w,I,!1,function(e){i("F2Cz")},"data-v-186d4010",null).exports},methods:{onChange:function(e){e?(this.$store.commit("SET_PROVIDED_IMG",e),this.image=e):this.$toasted.global.error("FileReader API not supported, try different browser.")}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main"},[t("picture-input",{ref:"pictureInput",staticClass:"canvas_bg",attrs:{"z-index":"0",width:"600",height:"600",margin:"16",accept:"image/jpeg,image/png",size:"5",buttonClass:"btn",hideChangeButton:"true",customStrings:{drag:"<span style='color: #2B3A42;'>Drag image or click here. For best performance use lossless formats (ex. png)</span>"}},on:{change:this.onChange}})],1)},staticRenderFns:[]};var _=i("VU/8")(b,y,!1,function(e){i("9aeF"),i("WPvj")},"data-v-f15c5d92",null).exports,S=i("jIVf"),P=i.n(S),C={data:function(){return{showOptions:!1,isInPercents:!0,useSpeedup:!0,height:50,width:50,isProcessing:!1}},computed:{providedImg:function(){return this.$store.state.providedImg}},methods:{onProcess:function(){var e=this;""!==this.providedImg?(this.isProcessing=!0,this.$toasted.global.info("Sending image to processing."),this.$http.post("https://zhktfieuhf.execute-api.eu-west-3.amazonaws.com/budziol/async-invoke-budziol",{ext:this.providedImg.substring(this.providedImg.indexOf("/")+1,this.providedImg.indexOf(";")),img:this.providedImg.substr(this.providedImg.indexOf(",")+1),params:["-height="+(this.height&&this.height>0?this.height:200),"-width="+(this.width&&this.width>0?this.width:200),"-perc="+(this.isInPercents?1:0)],sessionId:this.$store.state.sessionId,speedup:this.useSpeedup}).then(function(t){e.isProcessing=!1},function(t){e.isProcessing=!1,e.$toasted.global.error("Could not send request."),console.log(t)})):this.$toasted.global.info("Please select an image.")}},created:function(){var e=this,t=this,i=new P.a("834a31567cceaf30da68",{cluster:"eu",encrypted:!0}).subscribe(this.$store.state.sessionId);i.bind("img-done",function(i){if(window.Notification&&"granted"===Notification.permission)try{var s=new Notification("Budziol: Picture is ready!");setTimeout(s.close.bind(s),5e3)}catch(e){}t.$store.commit("SET_IMG_DONE",{id:i.id,url:i.url}),e.$toasted.global.success("Image "+i.id+" complete!")}),i.bind("img-in-progress",function(i){t.$store.commit("SET_IMG_IN_PROGRESS",i.id),e.$toasted.global.info("Processing image "+i.id+" started."),setTimeout(function(){""===t.$store.state.receivedImgs.find(function(e){return e.id===i.id}).url&&(t.$store.commit("DELETE_IMG_IN_PROGRESS",i.id),e.$toasted.global.error("Image "+i.id+" took too long to process. (Lambda timeout)"))},3e5)})}},x={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main flex-center"},[i("div",{staticClass:"noselect font-transition flex-center upload-button",on:{click:function(t){!e.isProcessing&&e.onProcess()}}},[e._v("\n    UPLOAD\n  ")]),e._v(" "),i("div",{staticClass:"noselect font-transition flex-center dropdown-button",on:{click:function(t){e.showOptions=!e.showOptions}}},[e._v("OPTIONS")]),e._v(" "),i("transition",{attrs:{name:"fade"}},[e.showOptions?i("div",{staticClass:"dropdown flex-center"},[i("div",{staticClass:"shrink"},[i("label",[e._v("%")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.isInPercents,expression:"isInPercents"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isInPercents)?e._i(e.isInPercents,null)>-1:e.isInPercents},on:{change:function(t){var i=e.isInPercents,s=t.target,n=!!s.checked;if(Array.isArray(i)){var a=e._i(i,null);s.checked?a<0&&(e.isInPercents=i.concat([null])):a>-1&&(e.isInPercents=i.slice(0,a).concat(i.slice(a+1)))}else e.isInPercents=n}}})]),e._v(" "),i("div",{staticClass:"shrink grow-2"},[e._v(" Output Height ("+e._s(e.isInPercents?"%":"px")+")\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{placeholder:"Height",type:"number",max:e.isInPercents?100:9999},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"shrink grow-2"},[e._v(" Output Width ("+e._s(e.isInPercents?"%":"px")+")\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"width"}],attrs:{placeholder:"Width",type:"number",max:e.isInPercents?100:9999},domProps:{value:e.width},on:{input:function(t){t.target.composing||(e.width=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"shrink"},[i("label",[e._v("Speedup")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.useSpeedup,expression:"useSpeedup"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.useSpeedup)?e._i(e.useSpeedup,null)>-1:e.useSpeedup},on:{change:function(t){var i=e.useSpeedup,s=t.target,n=!!s.checked;if(Array.isArray(i)){var a=e._i(i,null);s.checked?a<0&&(e.useSpeedup=i.concat([null])):a>-1&&(e.useSpeedup=i.slice(0,a).concat(i.slice(a+1)))}else e.useSpeedup=n}}})])]):e._e()])],1)},staticRenderFns:[]};var O={render:function(){var e=this.$createElement,t=this._self._c||e;return this.receivedImgs&&this.receivedImgs.length>0?t("div",{staticClass:"main"},this._l(this.receivedImgs,function(e){return t("div",[""===e.url?t("div",{staticClass:"fas fa-spinner fa-pulse",staticStyle:{"font-family":"FontAwesome","font-size":"2rem"}}):t("img",{attrs:{src:e.url,alt:e.id}})])})):this._e()},staticRenderFns:[]};var R={name:"App",components:{ImgPicker:_,ImgProcess:i("VU/8")(C,x,!1,function(e){i("MqYO")},"data-v-3ab8bc60",null).exports,ImgPresent:i("VU/8")({computed:{receivedImgs:function(){return this.$store.state.receivedImgs}}},O,!1,function(e){i("eiIZ")},"data-v-736bae26",null).exports},methods:{showInfo:function(){this.$toasted.show('\n      <div class="info-toast">\n        Miscellaneous info about Budziol:\n        <ul>\n          <li>Image scaling can take up to 5 minutes to process</li>\n          <li>Notification (if you accept them) will let you know once image is ready</li>\n          <li>It is possible to process multiple images at once</li>\n          <li>Processed images are stored for 2 days</li>\n          <li>Speedup option reduces size to 1200/1200px max</li>\n          <li>Budziol uses <a style="color: #FF530D" href="https://github.com/esimov/caire">Caire</a> to scale images</li>\n          <li>For full Budziol code click on Gitlab logo</li>\n        </ul>\n      </div>\n      ',{action:{text:"CLOSE",onClick:function(e,t){t.goAway(0)}},duration:null,position:"bottom-center",closeOnSwipe:!1})}},created:function(){"Notification"in window&&Notification.requestPermission()}},z={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),i("div",{staticClass:"wrapper"},[i("ImgPicker"),e._v(" "),i("ImgProcess"),e._v(" "),i("ImgPresent")],1),e._v(" "),i("div",{staticClass:"footer"},[e._m(1),e._v(" "),i("a",{staticClass:"footer-item",on:{click:e.showInfo}},[i("div",{staticClass:"font-transition fas fa-question-circle"})])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("span",{staticClass:"title"},[this._v("Budziol")]),this._v(" "),t("span",{staticClass:"subtitle"},[this._v("AWS Lambda based content aware image scaling")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"footer-item",attrs:{href:"https://gitlab.com/budziol"}},[t("div",{staticClass:"font-transition fab fa-gitlab"})])}]};var D=i("VU/8")(R,z,!1,function(e){i("a5cq")},null,null).exports;s.a.use(n.a),s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:D},template:"<App/>",store:h});var $=[{text:"CLOSE",onClick:function(e,t){t.goAway(0)}}];s.a.toasted.register("error",function(e){return e},{type:"error",action:$,duration:5e3,position:"bottom-center"}),s.a.toasted.register("info",function(e){return e},{type:"info",action:$,duration:2e3,position:"bottom-center"}),s.a.toasted.register("success",function(e){return e},{type:"success",action:$,duration:3e3,position:"bottom-center"})},WPvj:function(e,t){},a5cq:function(e,t){},e0XP:function(e,t){},eiIZ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ea265cccb5ce690de11d.js.map