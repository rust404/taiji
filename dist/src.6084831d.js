parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var n='\n/**\n * 手把手教你怎么弄一个会动的太极图\n * 无论竖屏横屏都能完美显示哦\n * 下面我们开始吧\n * 先把各个屏幕比例下的太极大小配置好\n */\n@media (max-aspect-ratio: 1/2) {\n  #taiji {\n    width: 80vw;\n    height: 80vw;\n  }\n}\n\n@media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1) {\n  #taiji {\n    width: 40vh;\n    height: 40vh;\n  }\n}\n\n@media (min-aspect-ratio: 1/1) and (max-aspect-ratio: 2/1) {\n  #taiji {\n    width: 40vw;\n    height: 40vw;\n  }\n}\n\n@media (min-aspect-ratio: 2/1) {\n  #taiji {\n    width: 80vh;\n    height: 80vh;\n  }\n}\n/**\n * 定义太极的动画\n */\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/**\n * 做个大球\n */\n#taiji {\n  position: relative;\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(255, 255, 255, 1) 50%,\n    rgba(0, 0, 0, 1) 50%,\n    rgba(0, 0, 0, 1) 100%\n  );\n}\n\n/**\n * 做两个小球\n */\n#taiji::before,\n#taiji::after {\n  content: "";\n  display: block;\n  position: absolute;\n  width: 50%;\n  height: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n#taiji::before {\n  top: 0;\n  background: rgb(255, 255, 255);\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(255, 255, 255, 1) 25%,\n    rgba(0, 0, 0, 1) 25%,\n    rgba(0, 0, 0, 1) 100%\n  );\n}\n\n#taiji::after {\n  bottom: 0;\n  background: rgb(255, 255, 255);\n  background: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 1) 0%,\n    rgba(0, 0, 0, 1) 25%,\n    rgba(255, 255, 255, 1) 25%,\n    rgba(255, 255, 255, 1) 100%\n  );\n}\n\n/**\n * 最后让它动起来\n */\n#taiji {\n  animation: rotate 5s linear infinite alternate;\n}\n',a=0,t=document.querySelector("#codePanel"),r=document.querySelector("#codePanel style"),e=document.querySelector("#codePanel code");r.innerHTML="",e.innerHTML="";var i=function i(){a>=n.length||setTimeout(function(){var o=n[a++];e.innerHTML+=o,r.innerHTML+=o,t.scrollTo(0,99999),i()},16)};i();
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.6084831d.js.map