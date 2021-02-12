//	HYPE.documents["B01-C01-Video-Ribbon"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="B01-C01-Video-Ribbon.hyperesources",f="B01-C01-Video-Ribbon",g="b01c01videoribbon_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/b01c01videoribbon_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_728F||null!=window.HYPE_dtl_728F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-728.full.min.js":"HYPE-728.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_728"+c,"HYPE_dtl_728"+c,a,d),false==!0&&(a=a||k("HYPE_w_728","HYPE_wdtl_728","HYPE-728.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_728","HYPE-728.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"sync2",source:"function(hypeDocument, element, event) {\t\t\n\tvar video = document.getElementById('video2');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container2');\n\t\n\tvideo.oncanplaythrough = function () {\n\t\tvideo.playbackRate = 1;\n\t\t//video.pause();\n\t\t//symbol.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n\t}\n\t\n\tvideo.onseeking = function () {\n\t\tvar currentTime = video.currentTime;\n\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t}\n\t\n\tvideo.ontimeupdate = function () {\n\t\n\t\tvar currentTime = video.currentTime;\n\t\t\n\t\tconsole.log(currentTime);\n\t\t\n\t\tif (video.paused) {\n\t\t\tsymbol.pauseTimelineNamed('Main Timeline');\n\t\t} else {\n\t\t\tsymbol.continueTimelineNamed('Main Timeline');\n\t\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t\t\t\n\t\t}\n\t}\n\t\n}",identifier:"25"},{name:"sync3",source:"function(hypeDocument, element, event) {\t\n\t\t\n\tvar video = document.getElementById('video3');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container3');\n\t\n\tvideo.oncanplaythrough = function () {\n\t\tvideo.playbackRate = 1;\n\t\t//video.pause();\n\t\t//symbol.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n\t}\n\t\n\tvideo.onseeking = function () {\n\t\tvar currentTime = video.currentTime;\n\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t}\n\t\n\tvideo.ontimeupdate = function () {\n\t\n\t\tvar currentTime = video.currentTime;\n\t\t\n\t\tconsole.log(currentTime);\n\t\t\n\t\tif (video.paused) {\n\t\t\tsymbol.pauseTimelineNamed('Main Timeline');\n\t\t} else {\n\t\t\tsymbol.continueTimelineNamed('Main Timeline');\n\t\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t\t\t\n\t\t}\n\t}\n\n}",identifier:"26"},{name:"playPause2",source:"function(hypeDocument, element, event) {\t\nvar video = document.getElementById('video2');\nvar symbol = hypeDocument.getSymbolInstanceById('container2');\nvar video3 = document.getElementById('video3');\nvar video1 = document.getElementById('video1');\n\nif(video1.currentTime == 0 && video3.currentTime == 0 && video.currentTime == 0){\n\thypeDocument.startTimelineNamed('Hide Title', hypeDocument.kDirectionForward);\n}\nvideo1.pause();\nvideo1.currentTime = 0;\nvideo3.pause();\nvideo3.currentTime = 0;\nif (video.paused) {\n    video.play();\n} else {\n    video.pause();\n}\n\n}",identifier:"28"},{name:"playPause3",source:"function(hypeDocument, element, event) {\t\nvar video = document.getElementById('video3');\nvar symbol = hypeDocument.getSymbolInstanceById('container3');\nvar video1 = document.getElementById('video1');\nvar video2 = document.getElementById('video2');\n\nif(video1.currentTime == 0 && video2.currentTime == 0 && video.currentTime == 0){\n\thypeDocument.startTimelineNamed('Hide Title', hypeDocument.kDirectionForward);\n}\nvideo1.pause();\nvideo1.currentTime = 0;\nvideo2.pause();\nvideo2.currentTime = 0;\n\nif (video.paused) {\n    video.play();\n} else {\n    video.pause();\n}\n}",identifier:"45"},{name:"playPause1",source:"function(hypeDocument, element, event) {var video = document.getElementById('video1');\nvar symbol = hypeDocument.getSymbolInstanceById('container1');\nvar video3 = document.getElementById('video3');\nvar video2 = document.getElementById('video2');\n\n\nif(video2.currentTime == 0 && video3.currentTime == 0 && video.currentTime == 0){\n\thypeDocument.startTimelineNamed('Hide Title', hypeDocument.kDirectionForward);\n}\nvideo2.pause();\nvideo2.currentTime = 0;\nvideo3.pause();\nvideo3.currentTime = 0;\nif (video.paused) {\nconsole.log(\"playing video1\");\n    video.play();\n} else {\n    video.pause();\n    console.log(\"pausing video1\");\n}\n\t\n}",identifier:"59"},{name:"sync1",source:"function(hypeDocument, element, event) {\tconsole.log(event);\t\t\n\tvar video = document.getElementById('video1');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container1');\n\t\n\tvideo.oncanplaythrough = function () {\n\t\tvideo.playbackRate = 1;\n\t}\n\t\n\tvideo.onseeking = function () {\n\t\tvar currentTime = video.currentTime;\n\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t}\n\t\n\tvideo.ontimeupdate = function () {\n\t\n\t\tvar currentTime = video.currentTime;\n\t\t\n\t\tconsole.log(currentTime);\n\t\t\n\t\tif (video.paused) {\n\t\t\tsymbol.pauseTimelineNamed('Main Timeline');\n\t\t\tconsole.log(\"pause timeline 1\");\n\t\t} else {\n\t\t\tsymbol.continueTimelineNamed('Main Timeline');\n\t\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t\t\tconsole.log(\"play timeline 1\");\n\t\t\t\n\t\t}\n\t}\n\t\n\n\t\n}",identifier:"60"},{name:"reset3",source:"function(hypeDocument, element, event) {\tvar video = document.getElementById('video3');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container3');\n\t\n\tvideo.pause();\n\tvideo.currentTime = 0;\n\tsymbol.goToTimeInTimelineNamed(video.currentTime, 'Main Timeline');\n\thypeDocument.startTimelineNamed('Show Title', hypeDocument.kDirectionForward);\n\n}",identifier:"61"},{name:"reset1",source:"function(hypeDocument, element, event) {\t\n\tvar video = document.getElementById('video1');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container1');\n\t\n\tvideo.pause();\n\tvideo.currentTime = 0;\n\tsymbol.goToTimeInTimelineNamed(video.currentTime, 'Main Timeline');\n\thypeDocument.startTimelineNamed('Show Title', hypeDocument.kDirectionForward);\n\n\t\n}",identifier:"137"},{name:"reset2",source:"function(hypeDocument, element, event) {\tvar video = document.getElementById('video2');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container2');\n\t\n\tvideo.pause();\n\tvideo.currentTime = 0;\n\tsymbol.goToTimeInTimelineNamed(video.currentTime, 'Main Timeline');\n\thypeDocument.startTimelineNamed('Show Title', hypeDocument.kDirectionForward);\n\n\t\n}",identifier:"138"},{name:"loadVideos",source:"function(hypeDocument, element, event) {\t\nvar video1 = document.getElementById('video1');\nvar video2 = document.getElementById('video2');\nvar video3 = document.getElementById('video3');\n\t\nvideo1.load();\nvideo2.load();\nvideo3.load();\n\t\n\t\n}",identifier:"146"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_728"+c](f,g,{"7":{n:"B01-C01-VR-Cars-02Jaxon.webm"},"3":{n:"B01-C01-VR-Cars-02Jaxon.webm",g:"112",t:"video/webm"},"8":{n:"B01-C01-VR-Cars-19Nataki.mp4",g:"148",t:"video/mp4"},"4":{n:"B01-C01-VR-Cars-18Ricor.mp4"},"0":{n:"B01-C01-VR-Cars-18Ricor.mp4",g:"147",t:"video/mp4"},"9":{n:"B01-C01-VR-Cars-19Nataki.webm",g:"148",t:"video/webm"},"5":{n:"B01-C01-VR-Cars-18Ricor.webm"},"1":{n:"B01-C01-VR-Cars-18Ricor.webm",g:"147",t:"video/webm"},"6":{n:"B01-C01-VR-Cars-02Jaxon.mp4"},"2":{n:"B01-C01-VR-Cars-02Jaxon.mp4",g:"112",t:"video/mp4"}},l,["<link rel=\"stylesheet\" href=\"https://use.typekit.net/pjd0cez.css\">"],e,[{n:"B01-C01-Video-Ribbon",o:"1",X:[0]}],
[{o:"3",A:{a:[{p:4,h:"25"},{p:4,h:"26"},{p:4,h:"60"},{p:4,h:"146"}]},p:"600px",a:100,Y:700,Z:280,b:100,cA:false,c:"#FFF",L:[],bY:1,d:700,U:{"151":{V:{"Main Timeline":"171"},W:"171",n:"Symbol3"},"157":{V:{"Main Timeline":"172"},W:"172",n:"Symbol2"},"164":{V:{"Main Timeline":"173"},W:"173",n:"Symbol1"}},T:{"172":{c:"157",q:false,z:17.22,i:"172",a:[{y:0,i:"cY",s:"0",z:0,o:"159",f:"c"},{f:"c",p:2,y:0,z:9.27,i:"ActionHandler",e:{a:[{p:4,h:"138"}]},s:{a:[{b:"172",symbolOid:"9",p:7}]},o:"172"},{y:0,p:1,i:"Video Track",z:17.22,o:"161",f:"c"},{f:"c",y:0,z:3.27,i:"w",e:"those people are not following the rules.",s:"I notice that on the left, ",o:"158"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"159"},{f:"c",y:0.15,z:0.05,i:"e",e:1,s:-0.0000000000,o:"158"},{f:"b",y:0.16,z:8.27,i:"c",e:548,s:-2,o:"160"},{f:"c",y:0.16,z:0.1,i:"e",e:1,s:0,o:"160"},{f:"c",y:0.16,z:8.27,i:"e",e:1,s:1,o:"159"},{f:"c",y:0.2,z:3.02,i:"e",e:1,s:1,o:"158"},{f:"c",y:0.26,z:8.17,i:"e",e:1,s:1,o:"160"},{f:"c",y:3.22,z:0.05,i:"e",e:0,s:1,o:"158"},{f:"c",y:3.27,z:2.19,i:"w",e:"And the people on the right are rule followers. ",s:"those people are not following the rules.",o:"158"},{f:"c",y:3.27,z:0.05,i:"e",e:1,s:0,o:"158"},{f:"c",y:4.02,z:2.09,i:"e",e:1,s:1,o:"158"},{f:"c",y:6.11,z:0.05,i:"e",e:0,s:1,o:"158"},{y:6.16,i:"w",s:"And the people on the right are rule followers. ",z:0,o:"158",f:"c"},{f:"c",y:6.16,z:0.05,i:"e",e:1,s:0,o:"158"},{f:"c",y:6.21,z:2.22,i:"e",e:1,s:1,o:"158"},{y:9.13,i:"c",s:548,z:0,o:"160",f:"c"},{f:"c",y:9.13,z:0.1,i:"e",e:0,s:1,o:"159"},{f:"c",y:9.13,z:0.1,i:"e",e:0,s:1,o:"160"},{f:"c",y:9.13,z:0.1,i:"e",e:0,s:1,o:"158"},{y:9.23,i:"e",s:0,z:0,o:"159",f:"c"},{y:9.23,i:"e",s:0,z:0,o:"160",f:"c"},{y:9.23,i:"e",s:0,z:0,o:"158",f:"c"},{f:"c",p:2,y:9.27,z:0,i:"ActionHandler",s:{a:[{p:4,h:"138"}]},o:"172"}],n:"Main Timeline",f:30,b:[]},"135":{q:false,z:0.05,i:"135",n:"Hide Title",a:[{y:0,i:"cY",s:"0",z:0,o:"163",f:"c"},{f:"c",y:0,z:0.05,i:"e",e:0,s:1,o:"163"},{y:0.05,i:"e",s:0,z:0,o:"163",f:"c"}],f:30,b:[]},"173":{c:"164",q:false,z:4.03,i:"173",a:[{f:"c",p:2,y:0,z:4,i:"ActionHandler",e:{a:[{p:4,h:"137"}]},s:{a:[{b:"173",symbolOid:"10",p:7}]},o:"173"},{y:0,i:"cY",s:"0",z:0,o:"168",f:"c"},{y:0,p:1,i:"Video Track",z:4.03,o:"167",f:"c"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"165"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"168"},{f:"b",y:0.16,z:2.27,i:"c",e:548,s:-2,o:"166"},{f:"c",y:0.16,z:0.1,i:"e",e:1,s:0,o:"166"},{f:"c",y:0.16,z:2.27,i:"e",e:1,s:1,o:"165"},{f:"c",y:0.16,z:2.27,i:"e",e:1,s:1,o:"168"},{f:"c",y:0.26,z:2.17,i:"e",e:1,s:1,o:"166"},{y:3.13,i:"c",s:548,z:0,o:"166",f:"c"},{f:"c",y:3.13,z:0.1,i:"e",e:0,s:1,o:"166"},{f:"c",y:3.13,z:0.1,i:"e",e:0,s:1,o:"165"},{f:"c",y:3.13,z:0.1,i:"e",e:0,s:1,o:"168"},{y:3.23,i:"e",s:0,z:0,o:"166",f:"c"},{y:3.23,i:"e",s:0,z:0,o:"165",f:"c"},{y:3.23,i:"e",s:0,z:0,o:"168",f:"c"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{p:4,h:"137"}]},o:"173"}],n:"Main Timeline",f:30,b:[]},"136":{q:false,z:0.05,i:"136",n:"Show Title",a:[{y:0,i:"cY",s:"0",z:0,o:"163",f:"c"},{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"163"},{f:"c",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{b:"136",symbolOid:"2",p:7}]},o:"136"},{y:0.05,i:"e",s:1,z:0,o:"163",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:17.22,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[{D:7.1,H:true,E:true,z:false,F:0,G:0,C:0,b:"171"},{D:4.03,H:true,E:true,z:false,F:0,G:0,C:0,b:"173"},{D:17.22,H:true,E:true,z:false,F:0,G:0,C:0,b:"172"}]},"171":{c:"151",q:false,z:7.1,i:"171",a:[{f:"c",p:2,y:0,z:7.1,i:"ActionHandler",e:{a:[{p:4,h:"61"}]},s:{a:[{b:"171",symbolOid:"5",p:7}]},o:"171"},{y:0,i:"cY",s:"0",z:0,o:"155",f:"c"},{y:0,p:1,i:"Video Track",z:6.16,o:"154",f:"c"},{f:"c",y:0.06,z:3.3,i:"w",e:"and the highway has way more cars than the city.",s:"One's a highway and one's a city",o:"153"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"155"},{f:"b",y:0.16,z:6.1,i:"c",e:548,s:-2,o:"152"},{f:"c",y:0.16,z:0.1,i:"e",e:1,s:0,o:"152"},{f:"c",y:0.16,z:6.1,i:"e",e:1,s:1,o:"155"},{f:"c",y:0.26,z:6,i:"e",e:1,s:1,o:"152"},{f:"c",y:1.04,z:0.1,i:"e",e:1,s:0,o:"153"},{f:"c",y:1.14,z:2.17,i:"e",e:1,s:1,o:"153"},{f:"c",y:4.01,z:0.05,i:"e",e:0,s:1,o:"153"},{y:4.06,i:"w",s:"and the highway has way more cars than the city.",z:0,o:"153",f:"c"},{f:"c",y:4.06,z:0.05,i:"e",e:1,s:0,o:"153"},{f:"c",y:4.11,z:2.15,i:"e",e:1,s:1,o:"153"},{y:6.26,i:"c",s:548,z:0,o:"152",f:"c"},{f:"c",y:6.26,z:0.1,i:"e",e:0,s:1,o:"155"},{f:"c",y:6.26,z:0.1,i:"e",e:0,s:1,o:"152"},{f:"c",y:6.26,z:0.1,i:"e",e:0,s:1,o:"153"},{y:7.06,i:"e",s:0,z:0,o:"155",f:"c"},{y:7.06,i:"e",s:0,z:0,o:"152",f:"c"},{y:7.06,i:"e",s:0,z:0,o:"153",f:"c"},{f:"c",p:2,y:7.1,z:0,i:"ActionHandler",s:{a:[{p:4,h:"61"}]},o:"171"}],n:"Main Timeline",f:30,b:[]}},bZ:180,O:["163","167","164","157","151","150","161","154","156","170","162","165","158","153","166","168","160","159","152","155","169"],n:"Untitled Layout","_":0,v:{"165":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:34,e:0,s:"Objektiv-mk1",t:24,u:"normal",Z:"break-word",w:"I notice there is only one red car in each picture. ",bF:"164",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,F:"center",b:220},"157":{x:"visible",i:"container2",a:0,b:0,j:"absolute",bF:"150",c:700,k:"div",bY:1,d:280,z:4,cA:false,bX:false,bZ:180,cV:[]},"161":{dA:"1",aR:"0",x:"visible",bE:"148",a:240,b:0,j:"absolute",bF:"157",z:12,aO:"0",i:"video2",d:220,k:"video",c:220,aQ:"0",aH:"0"},"153":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:18,e:0,s:"Objektiv-mk1",t:24,u:"normal",Z:"break-word",v:"normal",w:"One's a highway and one's a city",bF:"151",j:"absolute",x:"visible",k:"div",y:"preserve",z:11,aS:8,aT:8,a:0,F:"center",b:220},"166":{c:-2,d:13,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#0C617E",L:"Solid",M:1,bF:"164",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:5,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"158":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:34,e:-0.0000000000,s:"Objektiv-mk1",t:24,u:"normal",Z:"break-word",w:"I notice that on the left, ",bF:"157",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,F:"center",b:220},"170":{b:41,z:7,K:"Solid",c:198,L:"Solid",d:178,M:1,N:1,dB:"button",O:1,g:"rgba(188, 191, 194, 0.000)",aG:"Video 2",P:1,bF:"150",j:"absolute",k:"div",aI:"50%",aJ:"50%",ti:0,aK:"50%",aL:"50%",A:"rgba(0, 0, 0, 0.000)",B:"rgba(0, 0, 0, 0.000)",r:"inline",C:"rgba(0, 0, 0, 0.000)",D:"rgba(0, 0, 0, 0.000)",aA:{a:[{p:4,h:"28"}]},aP:"pointer",w:"",x:"visible",I:"Solid",a:250,J:"Solid"},"162":{aI:"50%",c:198,d:176,r:"inline",I:"Solid",J:"Solid",aG:"Video 3",K:"Solid",g:"rgba(188, 191, 194, 0.000)",L:"Solid",aP:"pointer",M:1,bF:"150",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.000)",P:1,A:"rgba(0, 0, 0, 0.000)",C:"rgba(0, 0, 0, 0.000)",z:6,dB:"button",D:"rgba(0, 0, 0, 0.000)",aK:"50%",aJ:"50%",aA:{a:[{p:4,h:"45"}]},k:"div",a:490,ti:0,aL:"50%",b:47},"154":{dA:"1",aR:"0",x:"visible",bE:"147",a:480,b:0,j:"absolute",bF:"151",z:12,aO:"0",i:"video3",d:220,k:"video",c:220,aQ:"0",aH:"0"},"167":{dA:"1",aR:"0",x:"visible",bE:"112",a:0,b:0,j:"absolute",bF:"164",z:7,aO:"0",i:"video1",d:220,k:"video",c:220,aQ:"0",aH:"0"},"159":{c:548,d:13,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"157",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:2,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"150":{x:"visible",k:"div",c:700,d:200,z:3,a:0,bS:383,j:"absolute",b:0},"163":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",cY:"0",d:34,s:"Objektiv-mk1",e:1,t:28,Z:"break-word",w:"Select a person to hear what they saw.&nbsp;<br>",bF:"150",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:0,F:"center",b:0},"155":{c:548,d:13,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"151",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:3,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:266},"168":{c:548,d:13,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"164",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:4,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"151":{x:"visible",i:"container3",a:-0,b:0,j:"absolute",bF:"150",c:700,k:"div",bY:1,d:280,z:3,cA:false,bX:false,bZ:180,cV:[]},"164":{x:"visible",i:"container1",a:0,b:0,j:"absolute",bF:"150",c:700,k:"div",bY:1,d:280,z:5,cA:false,bX:false,bZ:180,cV:[]},"156":{b:41,z:8,K:"Solid",c:198,L:"Solid",d:178,M:1,e:1,N:1,dB:"button",O:1,g:"rgba(188, 191, 194, 0.000)",aG:"Video 1",P:1,bF:"150",j:"absolute",aI:"50%",k:"div",aJ:"50%",ti:0,aK:"50%",aL:"50%",A:"rgba(0, 0, 0, 0.000)",B:"rgba(0, 0, 0, 0.000)",r:"inline",C:"rgba(0, 0, 0, 0.000)",cY:"0",D:"rgba(0, 0, 0, 0.000)",aA:{a:[{p:4,h:"59"}]},aP:"pointer",x:"visible",I:"Solid",a:10,J:"Solid"},"169":{c:548,d:13,I:"Solid",cY:"0",e:1,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"150",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:2,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:266},"160":{c:-2,d:13,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#0C617E",L:"Solid",M:1,bF:"157",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:3,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"152":{c:-2,d:13,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#0C617E",L:"Solid",M:1,bF:"151",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:4,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
