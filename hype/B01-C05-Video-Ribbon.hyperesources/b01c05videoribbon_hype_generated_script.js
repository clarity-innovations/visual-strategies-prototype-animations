//	HYPE.documents["B01-C05-Video-Ribbon"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="B01-C05-Video-Ribbon.hyperesources",f="B01-C05-Video-Ribbon",g="b01c05videoribbon_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/b01c05videoribbon_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_712F||null!=window.HYPE_dtl_712F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-712.full.min.js":"HYPE-712.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_712"+c,"HYPE_dtl_712"+c,a,d),false==!0&&(a=a||k("HYPE_w_712","HYPE_wdtl_712","HYPE-712.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_712","HYPE-712.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"sync2",source:"function(hypeDocument, element, event) {\t\t\n\tvar video = document.getElementById('video2');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container2');\n\t\n\tvideo.oncanplaythrough = function () {\n\t\tvideo.playbackRate = 1;\n\t\t//video.pause();\n\t\t//symbol.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n\t}\n\t\n\tvideo.onseeking = function () {\n\t\tvar currentTime = video.currentTime;\n\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t}\n\t\n\tvideo.ontimeupdate = function () {\n\t\n\t\tvar currentTime = video.currentTime;\n\t\t\n\t\tconsole.log(currentTime);\n\t\t\n\t\tif (video.paused) {\n\t\t\tsymbol.pauseTimelineNamed('Main Timeline');\n\t\t} else {\n\t\t\tsymbol.continueTimelineNamed('Main Timeline');\n\t\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t\t\t\n\t\t}\n\t}\n\t\n}",identifier:"25"},{name:"sync3",source:"function(hypeDocument, element, event) {\t\n\t\t\n\tvar video = document.getElementById('video3');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container3');\n\t\n\tvideo.oncanplaythrough = function () {\n\t\tvideo.playbackRate = 1;\n\t\t//video.pause();\n\t\t//symbol.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n\t}\n\t\n\tvideo.onseeking = function () {\n\t\tvar currentTime = video.currentTime;\n\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t}\n\t\n\tvideo.ontimeupdate = function () {\n\t\n\t\tvar currentTime = video.currentTime;\n\t\t\n\t\tconsole.log(currentTime);\n\t\t\n\t\tif (video.paused) {\n\t\t\tsymbol.pauseTimelineNamed('Main Timeline');\n\t\t} else {\n\t\t\tsymbol.continueTimelineNamed('Main Timeline');\n\t\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t\t\t\n\t\t}\n\t}\n\n}",identifier:"26"},{name:"playPause2",source:"function(hypeDocument, element, event) {\t\nvar video = document.getElementById('video2');\nvar symbol = hypeDocument.getSymbolInstanceById('container2');\nvar video3 = document.getElementById('video3');\nvar video1 = document.getElementById('video1');\n\nif(video1.currentTime == 0 && video3.currentTime == 0 && video.currentTime == 0){\n\thypeDocument.startTimelineNamed('Hide Title', hypeDocument.kDirectionForward);\n}\nvideo1.pause();\nvideo1.currentTime = 0;\nvideo3.pause();\nvideo3.currentTime = 0;\nif (video.paused) {\n    video.play();\n} else {\n    video.pause();\n}\n\n}",identifier:"28"},{name:"playPause3",source:"function(hypeDocument, element, event) {\t\nvar video = document.getElementById('video3');\nvar symbol = hypeDocument.getSymbolInstanceById('container3');\nvar video1 = document.getElementById('video1');\nvar video2 = document.getElementById('video2');\n\nif(video1.currentTime == 0 && video2.currentTime == 0 && video.currentTime == 0){\n\thypeDocument.startTimelineNamed('Hide Title', hypeDocument.kDirectionForward);\n}\nvideo1.pause();\nvideo1.currentTime = 0;\nvideo2.pause();\nvideo2.currentTime = 0;\n\nif (video.paused) {\n    video.play();\n} else {\n    video.pause();\n}\n}",identifier:"45"},{name:"playPause1",source:"function(hypeDocument, element, event) {var video = document.getElementById('video1');\nvar symbol = hypeDocument.getSymbolInstanceById('container1');\nvar video3 = document.getElementById('video3');\nvar video2 = document.getElementById('video2');\n\n\nif(video2.currentTime == 0 && video3.currentTime == 0 && video.currentTime == 0){\n\thypeDocument.startTimelineNamed('Hide Title', hypeDocument.kDirectionForward);\n}\nvideo2.pause();\nvideo2.currentTime = 0;\nvideo3.pause();\nvideo3.currentTime = 0;\nif (video.paused) {\nconsole.log(\"playing video1\");\n    video.play();\n} else {\n    video.pause();\n    console.log(\"pausing video1\");\n}\n\t\n}",identifier:"59"},{name:"sync1",source:"function(hypeDocument, element, event) {\tconsole.log(event);\t\t\n\tvar video = document.getElementById('video1');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container1');\n\t\n\tvideo.oncanplaythrough = function () {\n\t\tvideo.playbackRate = 1;\n\t}\n\t\n\tvideo.onseeking = function () {\n\t\tvar currentTime = video.currentTime;\n\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t}\n\t\n\tvideo.ontimeupdate = function () {\n\t\n\t\tvar currentTime = video.currentTime;\n\t\t\n\t\tconsole.log(currentTime);\n\t\t\n\t\tif (video.paused) {\n\t\t\tsymbol.pauseTimelineNamed('Main Timeline');\n\t\t\tconsole.log(\"pause timeline 1\");\n\t\t} else {\n\t\t\tsymbol.continueTimelineNamed('Main Timeline');\n\t\t\tsymbol.goToTimeInTimelineNamed(currentTime, 'Main Timeline')\n\t\t\tconsole.log(\"play timeline 1\");\n\t\t\t\n\t\t}\n\t}\n\t\n\n\t\n}",identifier:"60"},{name:"reset3",source:"function(hypeDocument, element, event) {\tvar video = document.getElementById('video3');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container3');\n\t\n\t\n\tvideo.pause();\n\tvideo.currentTime = 0;\n\tsymbol.goToTimeInTimelineNamed(video.currentTime, 'Main Timeline');\n\thypeDocument.startTimelineNamed('Show Title', hypeDocument.kDirectionForward);\n\t\n\t\n}",identifier:"61"},{name:"reset1",source:"function(hypeDocument, element, event) {\t\n\tvar video = document.getElementById('video1');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container1');\n\t\n\tvideo.pause();\n\tvideo.currentTime = 0;\n\tsymbol.goToTimeInTimelineNamed(video.currentTime, 'Main Timeline');\n\thypeDocument.startTimelineNamed('Show Title', hypeDocument.kDirectionForward);\n\n\t\n}",identifier:"137"},{name:"reset2",source:"function(hypeDocument, element, event) {\tvar video = document.getElementById('video2');\n\tvar symbol = hypeDocument.getSymbolInstanceById('container2');\n\t\n\tvideo.pause();\n\tvideo.currentTime = 0;\n\tsymbol.goToTimeInTimelineNamed(video.currentTime, 'Main Timeline');\n\thypeDocument.startTimelineNamed('Show Title', hypeDocument.kDirectionForward);\n\n\t\n}",identifier:"138"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_712"+c](f,g,{"3":{n:"B01-C05-VR-Symbols-03Ken.webm",g:"164",t:"video/webm"},"1":{n:"B01-C05-VR-Symbols-01Ella.webm",g:"163",t:"video/webm"},"4":{n:"B01-C05-VR-Symbols-07Aiden.mp4",g:"165",t:"video/mp4"},"2":{n:"B01-C05-VR-Symbols-03Ken.mp4",g:"164",t:"video/mp4"},"0":{n:"B01-C05-VR-Symbols-01Ella.mp4",g:"163",t:"video/mp4"},"5":{n:"B01-C05-VR-Symbols-07Aiden.webm",g:"165",t:"video/webm"}},l,["<link rel=\"stylesheet\" href=\"https://use.typekit.net/uce1gym.css\">"],e,[{n:"B01-C05-Video-Ribbon",o:"1",X:[0]}],
[{o:"3",A:{a:[{p:4,h:"25"},{p:4,h:"26"},{p:4,h:"60"}]},p:"600px",a:100,Y:700,Z:280,b:100,cA:false,c:"#FFF",L:[],bY:1,d:700,U:{"167":{V:{"Main Timeline":"186"},W:"186",n:"Symbol3"},"173":{V:{"Main Timeline":"187"},W:"187",n:"Symbol2"},"180":{V:{"Main Timeline":"188"},W:"188",n:"Symbol1"}},T:{"135":{q:false,z:0.05,i:"135",n:"Hide Title",a:[{y:0,i:"cY",s:"0",z:0,o:"179",f:"c"},{f:"c",y:0,z:0.05,i:"e",e:0,s:1,o:"179"},{y:0.05,i:"e",s:0,z:0,o:"179",f:"c"}],f:30,b:[]},"188":{c:"180",q:false,z:9.13,i:"188",a:[{f:"c",p:2,y:0,z:9.13,i:"ActionHandler",e:{a:[{p:4,h:"137"}]},s:{a:[{b:"188",symbolOid:"10",p:7}]},o:"188"},{f:"c",y:0,z:3.19,i:"w",e:"We were doing some Egyptian numbers last year, ",s:"I see different kinds of numbers. ",o:"181"},{y:0,p:1,i:"Video Track",z:4.16,o:"184",f:"c"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"183"},{f:"b",y:0.16,z:8.17,i:"c",e:548,s:-2,o:"182"},{f:"c",y:0.16,z:0.1,i:"e",e:1,s:0,o:"182"},{f:"c",y:0.16,z:8.17,i:"e",e:1,s:1,o:"183"},{f:"c",y:0.2,z:0.1,i:"e",e:1,s:-0.0000000000,o:"181"},{f:"c",y:0.26,z:8.07,i:"e",e:1,s:1,o:"182"},{f:"c",y:1,z:2.14,i:"e",e:1,s:1,o:"181"},{f:"c",y:3.14,z:0.05,i:"e",e:0,s:1,o:"181"},{f:"c",y:3.19,z:3.13,i:"w",e:"so I can recognize the bottom one.",s:"We were doing some Egyptian numbers last year, ",o:"181"},{f:"c",y:3.19,z:0.05,i:"e",e:1,s:0,o:"181"},{f:"c",y:3.24,z:3.03,i:"e",e:1,s:1,o:"181"},{f:"c",y:6.27,z:0.05,i:"e",e:0,s:1,o:"181"},{y:7.02,i:"w",s:"so I can recognize the bottom one.",z:0,o:"181",f:"c"},{f:"c",y:7.02,z:0.05,i:"e",e:1,s:0,o:"181"},{f:"c",y:7.07,z:1.26,i:"e",e:1,s:1,o:"181"},{y:9.03,i:"c",s:548,z:0,o:"182",f:"c"},{f:"c",y:9.03,z:0.1,i:"e",e:0,s:1,o:"183"},{f:"c",y:9.03,z:0.1,i:"e",e:0,s:1,o:"182"},{f:"c",y:9.03,z:0.1,i:"e",e:-0.0000000000,s:1,o:"181"},{f:"c",p:2,y:9.13,z:0,i:"ActionHandler",s:{a:[{p:4,h:"137"}]},o:"188"},{y:9.13,i:"e",s:0,z:0,o:"183",f:"c"},{y:9.13,i:"e",s:0,z:0,o:"182",f:"c"},{y:9.13,i:"e",s:-0.0000000000,z:0,o:"181",f:"c"}],n:"Main Timeline",f:30,b:[]},"136":{q:false,z:0.05,i:"136",n:"Show Title",a:[{y:0,i:"cY",s:"0",z:0,o:"179",f:"c"},{f:"c",y:0,z:0.05,i:"e",e:1,s:0,o:"179"},{f:"c",p:2,y:0.05,z:0,i:"ActionHandler",s:{a:[{b:"136",symbolOid:"2",p:7}]},o:"136"},{y:0.05,i:"e",s:1,z:0,o:"179",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:11.2,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[{D:11.2,H:true,E:true,z:false,F:0,G:0,C:0,b:"186"},{D:9.13,H:true,E:true,z:false,F:0,G:0,C:0,b:"188"},{D:10.12,H:true,E:true,z:false,F:0,G:0,C:0,b:"187"}]},"186":{c:"167",q:false,z:11.2,i:"186",a:[{f:"c",p:2,y:0,z:11.2,i:"ActionHandler",e:{a:[{p:4,h:"61"}]},s:{a:[{b:"186",symbolOid:"5",p:7}]},o:"186"},{y:0,i:"cY",s:"0",z:0,o:"171",f:"c"},{f:"c",y:0,z:4,i:"w",e:"in 3 minutes and 4 seconds. ",s:"I notice that 184 is the number of seconds",o:"169"},{y:0,p:1,i:"Video Track",z:6.01,o:"170",f:"c"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"171"},{f:"b",y:0.12,z:10.18,i:"c",e:548,s:-2,o:"168"},{f:"c",y:0.12,z:0.1,i:"e",e:1,s:0,o:"168"},{f:"c",y:0.16,z:10.14,i:"e",e:1,s:1,o:"171"},{f:"c",y:0.22,z:0.1,i:"e",e:1,s:0,o:"169"},{f:"c",y:0.22,z:10.08,i:"e",e:1,s:1,o:"168"},{f:"c",y:1.02,z:2.23,i:"e",e:1,s:1,o:"169"},{f:"c",y:3.25,z:0.05,i:"e",e:0,s:1,o:"169"},{f:"c",y:4,z:1.21,i:"w",e:"I also see the roman numeral IV,",s:"in 3 minutes and 4 seconds. ",o:"169"},{f:"c",y:4,z:0.05,i:"e",e:1,s:0,o:"169"},{f:"c",y:4.05,z:1.11,i:"e",e:1,s:1,o:"169"},{f:"c",y:5.16,z:0.05,i:"e",e:0,s:1,o:"169"},{f:"c",y:5.21,z:2.09,i:"w",e:"and I wonder if all of the representations",s:"I also see the roman numeral IV,",o:"169"},{f:"c",y:5.21,z:0.05,i:"e",e:1,s:0,o:"169"},{f:"c",y:5.26,z:1.29,i:"e",e:1,s:1,o:"169"},{f:"c",y:7.25,z:0.05,i:"e",e:0,s:1,o:"169"},{f:"c",y:8,z:1.21,i:"w",e:"are the same number. ",s:"and I wonder if all of the representations",o:"169"},{f:"c",y:8,z:0.05,i:"e",e:1,s:0,o:"169"},{f:"c",y:8.05,z:1.11,i:"e",e:1,s:1,o:"169"},{f:"c",y:9.16,z:0.05,i:"e",e:0,s:1,o:"169"},{y:9.21,i:"w",s:"are the same number. ",z:0,o:"169",f:"c"},{f:"c",y:9.21,z:0.05,i:"e",e:1,s:0,o:"169"},{f:"c",y:9.26,z:1.04,i:"e",e:1,s:1,o:"169"},{y:11,i:"c",s:548,z:0,o:"168",f:"c"},{f:"c",y:11,z:0.1,i:"e",e:0,s:1,o:"168"},{f:"c",y:11,z:0.1,i:"e",e:0,s:1,o:"171"},{f:"c",y:11,z:0.1,i:"e",e:0,s:1,o:"169"},{y:11.1,i:"e",s:0,z:0,o:"168",f:"c"},{y:11.1,i:"e",s:0,z:0,o:"171",f:"c"},{y:11.1,i:"e",s:0,z:0,o:"169",f:"c"},{f:"c",p:2,y:11.2,z:0,i:"ActionHandler",s:{a:[{p:4,h:"61"}]},o:"186"}],n:"Main Timeline",f:30,b:[]},"187":{c:"173",q:false,z:10.12,i:"187",a:[{y:0,i:"cY",s:"0",z:0,o:"175",f:"c"},{f:"c",p:2,y:0,z:10.12,i:"ActionHandler",e:{a:[{p:4,h:"138"}]},s:{a:[{b:"187",symbolOid:"9",p:7}]},o:"187"},{f:"c",y:0,z:3.24,i:"w",e:"used for different things,",s:"I assume these are all different types of numbers",o:"174"},{y:0,p:1,i:"Video Track",z:6.25,o:"176",f:"c"},{f:"c",y:0.06,z:0.1,i:"e",e:1,s:0,o:"175"},{f:"c",y:0.14,z:0.1,i:"e",e:1,s:-0.0000000000,o:"174"},{f:"b",y:0.16,z:9.12,i:"c",e:548,s:-2,o:"177"},{f:"c",y:0.16,z:0.1,i:"e",e:1,s:0,o:"177"},{f:"c",y:0.16,z:9.12,i:"e",e:1,s:1,o:"175"},{f:"c",y:0.24,z:2.25,i:"e",e:1,s:1,o:"174"},{f:"c",y:0.26,z:9.02,i:"e",e:1,s:1,o:"177"},{f:"c",y:3.19,z:0.05,i:"e",e:0,s:1,o:"174"},{f:"c",y:3.24,z:2.26,i:"w",e:"and then I wonder what",s:"used for different things,",o:"174"},{f:"c",y:3.24,z:0.05,i:"e",e:1,s:0,o:"174"},{f:"c",y:3.29,z:2.16,i:"e",e:1,s:1,o:"174"},{f:"c",y:6.15,z:0.05,i:"e",e:0,s:1,o:"174"},{f:"c",y:6.2,z:1.16,i:"w",e:"some of these numbers are used for.",s:"and then I wonder what",o:"174"},{f:"c",y:6.2,z:0.05,i:"e",e:1,s:0,o:"174"},{f:"c",y:6.25,z:1.06,i:"e",e:1,s:1,o:"174"},{f:"c",y:8.01,z:0.05,i:"e",e:0,s:1,o:"174"},{y:8.06,i:"w",s:"some of these numbers are used for.",z:0,o:"174",f:"c"},{f:"c",y:8.06,z:0.05,i:"e",e:1,s:0,o:"174"},{f:"c",y:8.11,z:1.17,i:"e",e:1,s:1,o:"174"},{y:9.28,i:"c",s:548,z:0,o:"177",f:"c"},{f:"c",y:9.28,z:0.1,i:"e",e:0,s:1,o:"175"},{f:"c",y:9.28,z:0.1,i:"e",e:0,s:1,o:"177"},{f:"c",y:9.28,z:0.1,i:"e",e:0,s:1,o:"174"},{y:10.08,i:"e",s:0,z:0,o:"175",f:"c"},{y:10.08,i:"e",s:0,z:0,o:"177",f:"c"},{y:10.08,i:"e",s:0,z:0,o:"174",f:"c"},{f:"c",p:2,y:10.12,z:0,i:"ActionHandler",s:{a:[{p:4,h:"138"}]},o:"187"}],n:"Main Timeline",f:30,b:[]}},bZ:180,O:["184","180","173","167","166","172","176","185","170","178","181","174","169","179","182","183","177","175","168","171"],n:"Untitled Layout","_":0,v:{"173":{x:"visible",i:"container2",a:0,b:0,j:"absolute",r:"inline",c:700,k:"div",bY:1,d:280,z:4,bF:"166",cA:false,bZ:180,bX:false,cV:[]},"178":{c:198,d:198,r:"inline",I:"Solid",J:"Solid",K:"Solid",g:"rgba(188, 191, 194, 0.000)",L:"Solid",aP:"pointer",M:1,bF:"166",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:6,dB:"button",D:"rgba(0, 0, 0, 0.000)",aK:"50%",aJ:"50%",aA:{a:[{p:4,h:"45"}]},k:"div",a:490,aL:"50%",aI:"50%",b:5},"182":{c:-2,d:13,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#0C617E",L:"Solid",M:1,bF:"180",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:5,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"174":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:34,e:-0.0000000000,s:"Objektiv-mk1",t:24,u:"normal",Z:"break-word",w:"I assume these are all different types of numbers",bF:"173",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,F:"center",b:220},"166":{x:"visible",k:"div",c:700,d:200,z:3,a:0,bS:383,j:"absolute",b:0},"179":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",cY:"0",d:34,s:"Objektiv-mk1",e:1,t:28,Z:"break-word",w:"Select a person to hear what they counted.&nbsp;<br>",bF:"166",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,F:"center",b:215},"170":{aR:"0",x:"visible",bE:"164",a:480,b:0,j:"absolute",bF:"167",z:12,aO:"0",i:"video3",d:220,k:"video",c:220,aQ:"0",aH:"0"},"183":{c:548,d:13,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"180",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:4,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"175":{c:548,d:13,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"173",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:2,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"167":{x:"visible",i:"container3",a:-0,b:0,j:"absolute",r:"inline",c:700,k:"div",bY:1,d:280,z:3,bF:"166",cA:false,bZ:180,bX:false,cV:[]},"171":{c:548,d:13,I:"Solid",cY:"0",e:0,J:"Solid",K:"Solid",g:"#A3BAC2",L:"Solid",M:1,bF:"167",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:3,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:266},"184":{aR:"0",x:"visible",bE:"165",a:0,b:0,j:"absolute",bF:"180",z:8,aO:"0",i:"video1",d:220,k:"video",c:220,aQ:"0",aH:"0"},"176":{aR:"0",x:"visible",bE:"163",a:240,b:0,j:"absolute",bF:"173",z:13,aO:"0",i:"video2",d:220,k:"video",c:220,aQ:"0",aH:"0"},"168":{c:-2,d:13,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#0C617E",L:"Solid",M:1,bF:"167",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:4,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:266},"180":{x:"visible",i:"container1",a:0,b:0,j:"absolute",r:"inline",c:700,k:"div",bY:1,d:280,z:5,bF:"166",cA:false,bZ:180,bX:false,cV:[]},"172":{c:198,d:198,r:"inline",cY:"0",e:1,J:"Solid",I:"Solid",K:"Solid",g:"rgba(188, 191, 194, 0.000)",L:"Solid",aP:"pointer",M:1,bF:"166",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.000)",P:1,A:"rgba(0, 0, 0, 0.000)",C:"rgba(0, 0, 0, 0.000)",z:8,dB:"button",D:"rgba(0, 0, 0, 0.000)",aK:"50%",aJ:"50%",aA:{a:[{p:4,h:"59"}]},k:"div",a:10,aL:"50%",aI:"50%",b:0},"185":{aI:"50%",c:198,d:198,r:"inline",I:"Solid",J:"Solid",K:"Solid",g:"rgba(188, 191, 194, 0.000)",L:"Solid",aP:"pointer",M:1,w:"",bF:"166",A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,N:1,C:"rgba(0, 0, 0, 0.000)",O:1,z:7,D:"rgba(0, 0, 0, 0.000)",aK:"50%",dB:"button",aJ:"50%",aA:{a:[{p:4,h:"28"}]},a:250,aL:"50%",k:"div",b:0},"177":{c:-2,d:13,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#0C617E",L:"Solid",M:1,bF:"173",N:1,A:"rgba(0, 0, 0, 0.000)",x:"visible",j:"absolute",B:"rgba(0, 0, 0, 0.000)",P:1,O:1,C:"rgba(0, 0, 0, 0.000)",z:3,aJ:10,D:"rgba(0, 0, 0, 0.000)",aK:10,k:"div",aI:10,a:75,aL:10,b:265},"169":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:18,e:0,s:"Objektiv-mk1",t:24,u:"normal",Z:"break-word",v:"normal",w:"I notice that 184 is the number of seconds",bF:"167",j:"absolute",x:"visible",k:"div",y:"preserve",z:11,aS:8,aT:8,a:0,F:"center",b:220},"181":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:34,e:-0.0000000000,s:"Objektiv-mk1",t:24,u:"normal",Z:"break-word",w:"I see different kinds of numbers. ",bF:"180",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,F:"center",b:220}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
