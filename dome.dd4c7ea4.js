var t,i,e,s,n=globalThis,a={},o={},h=n.parcelRequiree935;null==h&&((h=function(t){if(t in a)return a[t].exports;if(t in o){var i=o[t];delete o[t];var e={id:t,exports:{}};return a[t]=e,i.call(e.exports,e,e.exports),e.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,i){o[t]=i},n.parcelRequiree935=h),(0,h.register)("27Lyk",function(t,i){Object.defineProperty(t.exports,"register",{get:()=>e,set:t=>e=t,enumerable:!0,configurable:!0});var e,s=new Map;e=function(t,i){for(var e=0;e<i.length-1;e+=2)s.set(i[e],{baseUrl:t,path:i[e+1]})}}),h("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["8jj1W","dome.dd4c7ea4.js","TLCOp","bomb.e2ff4896.wav"]'));var r=/** @class */function(){function t(){var t=document.getElementById("canvas");this.contextCanvas=t.getContext("2d"),this.width=1600,this.height=800}return t.prototype.renderCity=function(){this.contextCanvas.beginPath(),this.contextCanvas.fillStyle="#22ffff",this.contextCanvas.fillRect(this.width-this.width/3.5,this.height-3,300,3),this.contextCanvas.closePath()},t.prototype.render=function(){this.renderCity()},t}(),c={};c=new URL("bomb.e2ff4896.wav",import.meta.url).toString();var l=/** @class */function(){function t(t,i){var e;this.canvas=t,this.audio=new Audio,this.audio.src=(e=c)&&e.__esModule?e.default:e,this.audio.volume=.5,this.explosionFinished=!1,this.target=i,this.velocityX=0,this.velocityY=1,this.missionIsDone=!1,this.color="#ddff33",this.hasAlreadyTakenOffAboveMinimumHeight=!1,this.isGoing=!0,this.x=this.canvas.width-this.canvas.width/4+10*Math.random(),this.y=0,this.id=new Date().getTime()}return t.prototype.explode=function(){var t=this;this.missionIsDone=!0,this.target.explode(),setTimeout(function(){t.audio.play()},900)},t.prototype.renderDefenseMissile=function(){this.canvas.contextCanvas.beginPath(),this.canvas.contextCanvas.fillStyle=this.color,this.canvas.contextCanvas.fillRect(this.x,this.canvas.height-this.y,2,2),this.canvas.contextCanvas.closePath()},t.prototype.renderExplosion=function(){this.canvas.contextCanvas.beginPath(),this.canvas.contextCanvas.fillStyle="#ffffff",this.canvas.contextCanvas.fillRect(this.x,this.canvas.height-this.y,8,8),this.canvas.contextCanvas.closePath()},t.prototype.updateVelocityX=function(t){this.velocityX+=t,this.velocityX>1.65?this.velocityX=1.65:this.velocityX<-1.65&&(this.velocityX=-1.65)},t.prototype.updateVelocityY=function(t){this.velocityY+=t,this.velocityY>1.65?this.velocityY=1.65:this.velocityY<-1.65&&(this.velocityY=-1.65)},t.prototype.trackArtefact=function(){if(this.target.isGoing){var t=this.target.x-this.x,i=this.target.y-this.y;t>0?this.updateVelocityX(t>700?.003:.06):t<0&&this.updateVelocityX(t<700?-.003:-.06),i>0?this.updateVelocityY(.06):i<0&&this.updateVelocityY(-.06),this.y+=this.velocityY,this.x+=this.velocityX}},t.prototype.render=function(){var t=this;if(!this.explosionFinished){if(this.missionIsDone){this.renderExplosion(),setTimeout(function(){t.explosionFinished=!0},2e3);return}this.isGoing&&(!this.hasAlreadyTakenOffAboveMinimumHeight&&this.y>30&&(this.hasAlreadyTakenOffAboveMinimumHeight=!0),this.trackArtefact(),this.renderDefenseMissile(),(Math.abs(this.target.x-this.x)+Math.abs(this.target.y-this.y)<=10||!this.target.isGoing||this.hasAlreadyTakenOffAboveMinimumHeight&&this.y<30)&&this.explode())}},t}(),d=/** @class */function(){function t(t,i){this.canvas=i,this.defenseMissilesByIdHostileArtifacts={},this.hostileArtifacts=t,this.hostileArtifactsDetected=[]}return t.prototype.render=function(){var t=this;this.hostileArtifacts.forEach(function(i){!t.hostileArtifactsDetected.includes(i.id)&&i.y>200&&(t.defenseMissilesByIdHostileArtifacts[i.id]=new l(t.canvas,i),t.hostileArtifactsDetected.push(i.id))}),this.hostileArtifactsDetected.forEach(function(i){var e,s;null===(s=null===(e=t.defenseMissilesByIdHostileArtifacts)||void 0===e?void 0:e[i])||void 0===s||s.render()})},t}(),f=function(t){var i=t+10*Math.random();return i>110?110:i<-110?-110:i},v=/** @class */function(){function t(t,i){var e=i.color,s=i.horizontalSpeedInitial,n=i.verticalSpeedInitial,a=i.startX;this.canvas=t,this.color=e,this.horizontalSpeedInitial=s,this.verticalSpeedInitial=n,this.elapsedTime=0,this.isGoing=!0,this.finishExplosion=!1,this.startX=a,this.startY=0,this.x=0,this.y=0,this.id=new Date().getTime()}return t.prototype.explode=function(){var t=this;this.isGoing=!1,setTimeout(function(){t.finishExplosion=!0},2e3)},t.prototype.renderPosition=function(){this.elapsedTime+=.01,this.canvas.contextCanvas.beginPath(),this.canvas.contextCanvas.fillStyle="#ffffff",this.canvas.contextCanvas.fillRect(this.x,this.canvas.height-this.y,2,2),this.canvas.contextCanvas.closePath()},t.prototype.renderExplosion=function(){this.canvas.contextCanvas.beginPath(),this.canvas.contextCanvas.fillStyle="#ff7722",this.canvas.contextCanvas.fillRect(this.x,this.canvas.height-this.y,8,8),this.canvas.contextCanvas.closePath()},t.prototype.render=function(t){if(!this.finishExplosion){var i,e=(i=10*this.elapsedTime,{x:Math.floor((this.horizontalSpeedInitial+t)*i/20),y:Math.floor((this.verticalSpeedInitial*i-4.905*i*i)/20)});if(this.y=e.y+this.startY,this.x=e.x+this.startX,this.isGoing&&this.elapsedTime>2&&e.y<=5&&this.explode(),this.isGoing){this.renderPosition();return}0===this.elapsedTime||this.finishExplosion||this.renderExplosion()}},t}(),u=0;t=new r,i=new function(){var t=this;this.keyboardState={space:!1};var i={Space:function(i){t.keyboardState.space=i}};window.addEventListener("keydown",function(t){var e;null===(e=i[t.code])||void 0===e||e.call(i,!0)}),window.addEventListener("keyup",function(t){var e;null===(e=i[t.code])||void 0===e||e.call(i,!1)})},e=[],s=new d(e,t),requestAnimationFrame(function n(){t.contextCanvas.clearRect(0,0,t.width,t.height),t.render(),s.render(),u=f(u),i.keyboardState.space&&e.push(new v(t,{color:"rgb(".concat(Math.floor(256*Math.random()),", ").concat(Math.floor(256*Math.random()),", ").concat(Math.floor(256*Math.random()),")"),horizontalSpeedInitial:150+(Math.random()-15),verticalSpeedInitial:500+(Math.random()-.5)+(Math.random()>.7?150*Math.random():0),startX:350*Math.random()})),e.forEach(function(t){t.render(u)}),requestAnimationFrame(n)});//# sourceMappingURL=dome.dd4c7ea4.js.map

//# sourceMappingURL=dome.dd4c7ea4.js.map
