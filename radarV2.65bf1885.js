function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i,n,s,r,a,o,h,c,l,d=globalThis,u={},p={},f=d.parcelRequiree935;null==f&&((f=function(t){if(t in u)return u[t].exports;if(t in p){var e=p[t];delete p[t];var i={id:t,exports:{}};return u[t]=i,e.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){p[t]=e},d.parcelRequiree935=f),(0,f.register)("27Lyk",function(e,i){t(e.exports,"register",()=>n,t=>n=t);var n,s=new Map;n=function(t,e){for(var i=0;i<e.length-1;i+=2)s.set(e[i],{baseUrl:t,path:e[i+1]})}}),f("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["ghItd","radarV2.65bf1885.js","fUPKt","helicopter_r1.d679ec66.png","b4iWM","helicopter_r2.3eb7d1f0.png","9hF0h","helicopter_r3.e9431d04.png","7r8yT","military-rotor-loop.987d95f8.wav","eElcJ","radar.ac49fdbd.png","3HQQX","radar-detected.2f54b526.wav","hn9kt","warShip.6c1fc1ef.png"]'));var y={};t(y,"InteractionHandler",()=>g);var x=function(){return(x=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},g=/** @class */function(){function t(t,e){var i=this;this.canvas=t,this.keyBoardHandler=e,this.keyboardState=e.keyboardState,this.lastXClick=0,this.lastYClick=0,this.canvas.element.addEventListener("touchstart",function(t){return i.handleTouchStart(t)},!1),this.canvas.element.addEventListener("mousedown",function(t){return i.handleMouseDown(t)},!1)}return t.prototype.handleTouchStart=function(t){this.getCanvasCoordinates(t),console.log("Touch started at x: ".concat(this.lastXClick,", y: ").concat(this.lastYClick))},t.prototype.handleMouseDown=function(t){this.getCanvasCoordinates(t),console.log("Mouse down at x: ".concat(this.lastXClick,", y: ").concat(this.lastYClick))},t.prototype.setUi=function(t){this.ui=t},t.prototype.resetClick=function(){this.lastXClick=0,this.lastYClick=0},t.prototype.getCanvasCoordinates=function(t){var e=this.canvas.element.getBoundingClientRect();t.touches?(this.lastXClick=t.touches[0].clientX-e.left,this.lastYClick=t.touches[0].clientY-e.top):(this.lastXClick=t.clientX-e.left,this.lastYClick=t.clientY-e.top)},t.prototype.hasCollision=function(t){var e=this.lastXClick>=this.ui.positions[t].x&&this.lastXClick<=this.ui.positions[t].x+this.ui.positions[t].width,i=this.lastYClick>=this.ui.positions[t].y&&this.lastYClick<=this.ui.positions[t].y+this.ui.positions[t].height;return e&&i},t.prototype.render=function(){var t=x({},this.keyBoardHandler.keyboardState);this.lastXClick&&this.lastYClick&&(this.hasCollision("KeyQ")&&(t.KeyQ=!0),this.hasCollision("KeyE")&&(t.KeyE=!0),this.hasCollision("top")&&(t.top=!0),this.hasCollision("left")&&(t.left=!0),this.hasCollision("right")&&(t.right=!0),this.hasCollision("bottom")&&(t.bottom=!0)),this.resetClick(),this.keyboardState=t},t}(),v={};v=new URL("helicopter_r1.d679ec66.png",import.meta.url).toString();var w={};w=new URL("helicopter_r2.3eb7d1f0.png",import.meta.url).toString();var S={};S=new URL("helicopter_r3.e9431d04.png",import.meta.url).toString();var b=function(t,e){var i=e.x>t.x+t.width,n=t.x>e.x+e.width,s=e.y>t.y+t.height,r=t.y>e.y+e.height;return!(i||n||s||r)},m=function(t){return t*(Math.PI/180)},R=function(t,e){var i=new Image;i.src=t,i.onload=function(){e(i)}},P=function(t,e,i,n,s,r,a){t.beginPath(),t.save(),t.translate(n+r/2,s+a/2),t.rotate(i*Math.PI/180),t.translate(-n-r/2,-s-a/2),t.drawImage(e,n,s,r,a),t.restore(),t.closePath()},k={};k=new URL("military-rotor-loop.987d95f8.wav",import.meta.url).toString();var C=/** @class */function(){function t(t,i){var n=this;this.keyboard=i,this.canvas=t,this.x=500,this.y=300,this.width=45,this.height=26,this.xSpeed=0,this.ySpeed=0,this.currentImage=0,this.audio=new Audio,this.audio.src=/*@__PURE__*/e(k),this.audio.volume=.5,this.audio.loop=!0,this.canvas.element.addEventListener("click",function(){n.audio.play()}),R(/*@__PURE__*/e(v),function(t){n.image1=t}),R(/*@__PURE__*/e(w),function(t){n.image2=t}),R(/*@__PURE__*/e(S),function(t){n.image3=t})}return t.prototype.updateSpeed=function(){this.keyboard.keyboardState.top&&(this.ySpeed-=.2),this.keyboard.keyboardState.bottom&&(this.ySpeed+=.2),this.keyboard.keyboardState.left&&(this.xSpeed-=.2),this.keyboard.keyboardState.right&&(this.xSpeed+=.2)},t.prototype.updateLocation=function(){this.x+=this.xSpeed,this.y+=this.ySpeed},t.prototype.drawObstacleInfo=function(){this.canvas.ctx.beginPath(),this.canvas.ctx.fillStyle="#ffffff",this.canvas.ctx.font="16px Arial",this.canvas.ctx.textAlign="center";var t=Math.floor(this.x),e=Math.floor(this.y),i=Number(this.xSpeed.toFixed(1)),n=Number(this.ySpeed.toFixed(1));this.canvas.ctx.fillText("xy=(".concat(t,", ").concat(e,") vxy=(").concat(i,", ").concat(n,")"),this.x,this.y-10),this.canvas.ctx.closePath()},t.prototype.drawImageObstacle=function(){if(this.canvas.ctx.beginPath(),this.currentImage+=1,this.currentImage>=3&&(this.currentImage=0),this.image1&&this.image2&&this.image3){var t={0:this.image1,1:this.image2,2:this.image3};this.canvas.ctx.drawImage(t[this.currentImage],this.x,this.y)}this.canvas.ctx.closePath()},t.prototype.drawObstacle=function(){this.drawObstacleInfo(),this.drawImageObstacle()},t.prototype.render=function(){this.updateSpeed(),this.updateLocation(),this.drawObstacle()},t}(),I=/** @class */function(){function t(){}return t.prototype.render=function(t){var e=performance.now(),i=function(n){n-e>=16.666666666666668&&(t(),e=n),requestAnimationFrame(i)};requestAnimationFrame(i)},t}(),T={};t(T,"Radar",()=>F);var A=/** @class */function(){function t(){this.r=0,this.g=0,this.b=0}return t.prototype.toRgb=function(){return"rgb(".concat(Math.floor(this.r),", ").concat(Math.floor(this.g),", ").concat(Math.floor(this.b),")")},t.prototype.getColorByFactorFrequency=function(t){return t<0&&(t=0),t>1e5&&(t=1e5),(t-0)/1e5*40+80},t.prototype.generateRgbByFrequency=function(t){var e=this.getColorByFactorFrequency(t);this.r=e,this.g=e,this.b=e},t.prototype.applyBlueShift=function(t){this.b+=t/300},t.prototype.applyRedShift=function(t){this.r+=t/300},t}(),H=function(t,e,i){var n=e.x-t.x,s=e.y-t.y,r=Math.sqrt(Math.pow(n,2)+Math.pow(s,2));return i.x*(n/r)+i.y*(s/r)},_=/** @class */function(){function t(t,e,i,n,s,r,a,o){this.x=n,this.y=s,this.width=2,this.height=2,this.lifeRender=0,this.isInInitialDirection=!0,this.canvas=t,this.obstacle=a,this.frequency=r,this.isActive=!0,this.speedX=Math.cos(e)*i,this.speedY=Math.sin(e)*i,this.startPositionLaunch=o,this.color=new A,this.color.generateRgbByFrequency(r)}return t.prototype.destroyPulse=function(){this.isActive=!1},t.prototype.applyBlueShift=function(t){this.color.applyBlueShift(t)},t.prototype.applyRedShift=function(t){this.color.applyRedShift(t)},t.prototype.updateLocation=function(){this.x+=this.speedX,this.y+=this.speedY},t.prototype.updateScale=function(){this.isInInitialDirection?(this.width+=2,this.height+=2):this.width>=0?(this.width-=2,this.height-=2):this.destroyPulse()},t.prototype.drawPulse=function(){this.canvas.ctx.beginPath(),this.canvas.ctx.fillStyle=this.color.toRgb(),this.canvas.ctx.fillRect(this.x,this.y,this.width,this.height),this.canvas.ctx.closePath()},t.prototype.handleLifeRender=function(){this.lifeRender+=1,this.lifeRender>=600&&this.destroyPulse()},t.prototype.invertDirection=function(){this.speedX=-1*this.speedX,this.speedY=-1*this.speedY,this.isInInitialDirection=!1},t.prototype.handleCollisionWithObstacle=function(){var t=b(this,this.obstacle);if(!1!==this.isInInitialDirection&&!1!==t){var e,i=(e=H(this.startPositionLaunch,this.obstacle,{x:this.obstacle.xSpeed,y:this.obstacle.ySpeed}),this.frequency*(12345/(12345+e)));i>this.frequency&&this.applyBlueShift(i),i<this.frequency&&this.applyRedShift(i),this.invertDirection(),this.frequency=i}},t.prototype.render=function(){this.isActive&&(this.updateLocation(),this.updateScale(),this.drawPulse(),this.handleLifeRender(),this.handleCollisionWithObstacle())},t}(),M={};M=new URL("radar.ac49fdbd.png",import.meta.url).toString();var E=function(t,e,i){var n=t-e;return n*i/(e+n)},D=function(){return(D=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},F=/** @class */function(){function t(t,i){var n=this;this.pulses=[],this.calculatePositionXYTarget=function(t,e,i,n){var s=m(n);return{x:i*Math.cos(s),y:i*Math.sin(s)}},this.obstacle=i,this.canvas=t,this.currentDegree=0,this.x=100,this.y=300,this.width=20,this.height=20,this.frequency=0,this.databasePulses={},R(/*@__PURE__*/e(M),function(t){n.radarImage=t})}return t.prototype.handleReturnedPulses=function(){var t=this;this.pulses.forEach(function(e){var i=b(e,{x:t.x,y:t.y,width:t.width,height:t.height});if(e.isActive&&!e.isInInitialDirection&&i){var n=300*Math.round(e.frequency/300);if(!t.databasePulses[n]){e.destroyPulse();return}t.databasePulses[n]=D(D({},t.databasePulses[n]),{timeReceived:new Date().getTime(),frequencyReceived:e.frequency}),e.destroyPulse()}})},t.prototype.calculateDistanceByLaunchAndReceivedTime=function(t){return 800*(t.timeReceived-t.timeLaunched)/2817},t.prototype.calculateTargetInformation=function(t,e){var i=this.calculateDistanceByLaunchAndReceivedTime(t),n=this.calculatePositionXYTarget(this.x,this.y,i,t.degree),s=E(t.frequencyReceived,e,12345);return{timeReceived:t.timeReceived,targetPosition:n,estimatedDistance:i,radialSpeed:s}},t.prototype.getDetectTargets=function(){var t=this,e=[];return Object.keys(this.databasePulses).forEach(function(i){var n=t.databasePulses[i];n.timeReceived&&e.push(t.calculateTargetInformation(n,Number(i)))}),e},t.prototype.cleanup=function(){this.pulses=this.pulses.filter(function(t){return t.isActive})},t.prototype.renderPulses=function(){this.pulses.forEach(function(t){t.render()})},t.prototype.updateFrequency=function(){this.frequency+=300,this.frequency>9e5&&(this.frequency=0)},t.prototype.updateDegree=function(){this.currentDegree+=3,this.currentDegree>=360&&(this.currentDegree=0)},t.prototype.drawRadarImage=function(){if(this.radarImage){var t=this.x-20,e=this.y-20,i=2*this.width,n=2*this.height;P(this.canvas.ctx,this.radarImage,this.currentDegree,t,e,i,n)}},t.prototype.launchPulse=function(){var t=m(this.currentDegree);this.databasePulses[this.frequency]={timeLaunched:new Date().getTime(),degree:this.currentDegree,xLaunch:this.x,yLaunch:this.y,timeReceived:void 0,frequencyReceived:void 0},this.pulses.push(new _(this.canvas,t,20,this.x,this.y,this.frequency,this.obstacle,{x:this.x,y:this.y}))},t.prototype.render=function(){this.updateFrequency(),this.updateDegree(),this.drawRadarImage(),this.launchPulse(),this.renderPulses(),this.cleanup(),this.handleReturnedPulses()},t}(),L={};t(L,"RadarScreen",()=>B);var O={};O=new URL("radar-detected.2f54b526.wav",import.meta.url).toString();var q=function(){return(q=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},B=/** @class */function(){function t(t){this.radar=t,this.scale=4,this.element=document.getElementById("canvas2"),this.ctx=this.element.getContext("2d"),this.isInPreventMode=!1,this.x=0,this.y=0,this.width=500,this.height=500,this.timeToReset=4e3,this.audio=new Audio,this.audio.src=/*@__PURE__*/e(O),this.audio.volume=.5}return t.prototype.setInteractionHandler=function(t){this.interactionHandler=t},t.prototype.changeScale=function(){this.scale=2*this.scale,this.scale>128&&(this.scale=1)},t.prototype.drawRadarCircle=function(){var t=this,e=2*Math.PI,i=this.width/2,n=this.height/2;[0,1,2,3,4].forEach(function(s){t.ctx.beginPath(),t.ctx.strokeStyle="#44de3c",t.ctx.lineWidth=1,t.ctx.arc(i,n,Math.floor(i-50*s),0,e),t.ctx.closePath(),t.ctx.stroke()})},t.prototype.getDetections=function(){return this.radar.getDetectTargets()},t.prototype.normalizeWithOnRadarCenter=function(t,e){return{x:t/this.scale+this.width/2,y:e/this.scale+this.height/2}},t.prototype.removeNormalizationRadarCenter=function(t,e){return{x:t/this.scale-this.width/2,y:e/this.scale-this.height/2}},t.prototype.isOutsideClusterZone=function(t,e){return!b({x:t.targetPosition.x,y:t.targetPosition.y,width:20,height:20},{x:e.x,y:e.y,width:20,height:20})},t.prototype.drawInformationCluster=function(t){this.ctx.fillStyle="#44de3c",this.ctx.font="bold 16px Verdana",this.ctx.textAlign="center";var e=this.removeNormalizationRadarCenter(t.targetPosition.x,t.targetPosition.y),i=Math.floor(e.x),n=Math.floor(e.y),s=Number(t.radialSpeed.toFixed(2))||0,r=Math.floor(t.targetPosition.x),a=Math.floor(t.targetPosition.y),o=Math.floor(t.estimatedDistance);this.ctx.fillText("xy(".concat(i,", ").concat(n,") rv=").concat(s," d=").concat(o),r,a>0?a-10:a+10)},t.prototype.drawClusterItem=function(t){this.ctx.fillStyle="#44de3c",this.ctx.fillRect(t.targetPosition.x,t.targetPosition.y,10,10)},t.prototype.drawDetections=function(t){var e=this;this.ctx.beginPath();var i={x:0,y:0};t.forEach(function(t){var n=e.normalizeWithOnRadarCenter(t.targetPosition.x,t.targetPosition.y),s=q(q({},t),{targetPosition:n});new Date().getTime()-s.timeReceived>e.timeToReset||(e.isOutsideClusterZone(s,i)&&(e.drawInformationCluster(s),e.audio.play(),i={x:s.targetPosition.x,y:s.targetPosition.y}),e.drawClusterItem(s))}),this.ctx.closePath()},t.prototype.changeResetTime=function(){this.timeToReset+=1e3,this.timeToReset>12e3&&(this.timeToReset=2e3)},t.prototype.render=function(){var t=this;this.ctx.clearRect(0,0,this.width,this.height),this.interactionHandler.keyboardState.KeyQ&&!this.isInPreventMode&&(this.isInPreventMode=!0,this.changeResetTime(),setTimeout(function(){t.isInPreventMode=!1},200)),this.interactionHandler.keyboardState.KeyE&&!this.isInPreventMode&&(this.isInPreventMode=!0,this.changeScale(),setTimeout(function(){t.isInPreventMode=!1},200)),this.drawRadarCircle(),this.drawDetections(this.getDetections()),this.ctx.closePath()},t}(),K={};K=new URL("warShip.6c1fc1ef.png",import.meta.url).toString();var U=/** @class */function(){function t(){var t=this;this.element=document.getElementById("canvas"),this.ctx=this.element.getContext("2d"),this.x=0,this.y=0,this.width=1e3,this.height=500,R(/*@__PURE__*/e(K),function(e){t.warShip=e})}return t.prototype.drawOcean=function(){this.ctx.beginPath(),this.ctx.fillStyle="#4baff2",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.closePath()},t.prototype.drawWarShip=function(){this.warShip&&(this.ctx.beginPath(),this.ctx.drawImage(this.warShip,-2,248,120,120),this.ctx.closePath())},t.prototype.render=function(){this.ctx.clearRect(this.x,this.y,this.width,this.height),this.drawOcean(),this.drawWarShip()},t}(),X=/** @class */function(){function t(t,e){this.radarScreen=t,this.keyboardState=e,this.preventMultiplesActions=!1,this.positions={}}return t.prototype.renderButton=function(t){var e=t.text,i=t.x,n=t.y,s=t.xText,r=t.yText,a=t.isActive;a?(this.radarScreen.ctx.fillStyle="#44de3c",this.radarScreen.ctx.fillRect(i,n,40,40)):(this.radarScreen.ctx.strokeStyle="#44de3c",this.radarScreen.ctx.lineWidth=3,this.radarScreen.ctx.rect(i,n,40,40),this.radarScreen.ctx.stroke()),this.radarScreen.ctx.fillStyle=a?"#000000":"#44de3c",this.radarScreen.ctx.font="bold 18px Verdana",this.radarScreen.ctx.textAlign="center",this.radarScreen.ctx.fillText(e,s,r)},t.prototype.optionShowUi=function(t){var e=this.radarScreen.width-50,i=t-50;this.positions.KeyQ={x:10,y:i,height:40,width:40},this.renderButton({text:"".concat(this.radarScreen.timeToReset/1e3,"s"),isActive:!1,x:10,y:i,xText:30,yText:t-23}),this.positions.KeyE={x:e,y:i,height:40,width:40},this.renderButton({text:"".concat(this.radarScreen.scale,"x"),isActive:!1,x:e,y:i,xText:this.radarScreen.width-30,yText:t-23})},t.prototype.render=function(){this.radarScreen.ctx.beginPath(),this.optionShowUi(this.radarScreen.height/8),this.radarScreen.ctx.closePath()},t}(),Y=/** @class */function(){function t(t,e){this.canvas=t,this.keyboardState=e,this.preventMultiplesActions=!1,this.positions={}}return t.prototype.renderButton=function(t){var e=t.text,i=t.x,n=t.y,s=t.xText,r=t.yText,a=t.isActive;a?(this.canvas.ctx.fillStyle="#ffffff",this.canvas.ctx.fillRect(i,n,40,40)):(this.canvas.ctx.strokeStyle="#ffffff",this.canvas.ctx.lineWidth=3,this.canvas.ctx.rect(i,n,40,40),this.canvas.ctx.stroke()),this.canvas.ctx.fillStyle=a?"#000000":"#ffffff",this.canvas.ctx.font="bold 18px Verdana",this.canvas.ctx.textAlign="center",this.canvas.ctx.fillText(e,s,r)},t.prototype.optionShowUi=function(t){var e=this.canvas.width-50,i=t-50;this.positions.top={x:e-50,y:i,height:40,width:40},this.renderButton({text:"w",isActive:!1,x:this.positions.top.x,y:this.positions.top.y,xText:this.canvas.width-30-50,yText:t-23}),this.positions.bottom={x:e-50,y:i+50,height:40,width:40},this.renderButton({text:"s",isActive:!1,x:this.positions.bottom.x,y:this.positions.bottom.y,xText:this.canvas.width-30-50,yText:t-23+50}),this.positions.left={x:e-100,y:i+50,height:40,width:40},this.renderButton({text:"a",isActive:!1,x:this.positions.left.x,y:this.positions.left.y,xText:this.canvas.width-30-100,yText:t-23+50}),this.positions.right={x:e,y:i+50,height:40,width:40},this.renderButton({text:"d",isActive:!1,x:this.positions.right.x,y:this.positions.right.y,xText:this.canvas.width-30,yText:t-23+50})},t.prototype.render=function(){this.canvas.ctx.beginPath(),this.optionShowUi(this.canvas.height/8),this.canvas.ctx.closePath()},t}();i=new U,n=new function(){var t=this;this.keyboardState={top:!1,left:!1,bottom:!1,right:!1,KeyQ:!1,KeyE:!1};var e={KeyW:function(e){t.keyboardState.top=e},KeyS:function(e){t.keyboardState.bottom=e},KeyA:function(e){t.keyboardState.left=e},KeyD:function(e){t.keyboardState.right=e},KeyQ:function(e){t.keyboardState.KeyQ=e},KeyE:function(e){t.keyboardState.KeyE=e}};window.addEventListener("keydown",function(t){var i;null===(i=e[t.code])||void 0===i||i.call(e,!0)}),window.addEventListener("keyup",function(t){var i;null===(i=e[t.code])||void 0===i||i.call(e,!1)})},s=new y.InteractionHandler(i,n),r=new Y(i,s),a=new C(i,s),o=new T.Radar(i,a),h=new L.RadarScreen(o),c=new y.InteractionHandler(h,n),l=new X(h,c),h.setInteractionHandler(c),c.setUi(l),s.setUi(r),new I().render(function(){i.render(),a.render(),r.render(),o.render(),c.render(),s.render(),h.render(),l.render()});//# sourceMappingURL=radarV2.65bf1885.js.map

//# sourceMappingURL=radarV2.65bf1885.js.map
