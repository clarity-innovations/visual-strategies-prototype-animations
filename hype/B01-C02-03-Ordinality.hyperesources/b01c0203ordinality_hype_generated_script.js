//	HYPE.documents["B01-C02-03-Ordinality"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="B01-C02-03-Ordinality.hyperesources",c="B01-C02-03-Ordinality",e="b01c0203ordinality_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/b01c0203ordinality_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"fDragConstrainHorizontal",source:"function(hypeDocument, element, event) {\t\tif (event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseStart) {\n\t\twindow.gTop = hypeDocument.getElementProperty(element, 'top');\n\t}else if(event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseMove) {\n\t\thypeDocument.setElementProperty(element, 'top', gTop, 0, 'linear');\n\t};\t\n}",identifier:"5352"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"0":{p:1,n:"restart.svg",g:"1342",t:"image/svg+xml"}},h,[],d,[{n:"B01-C02-03-Ordinality",o:"5386",X:[0]}],[{o:"5419",p:"600px",a:100,Y:700,Z:400,b:100,cA:false,c:"#F2F2F2",L:[],bY:1,d:700,U:{"5476":{V:{"1597_pressed":"5521","1596_pressed":"5520","Main Timeline":"5522",Disabled:"5523","Fade out":"5524"},W:"5522",n:"restartButtonActive"},"5506":{V:{"Main Timeline":"5535"},W:"5535",n:"counter 1"},"5489":{V:{"Main Timeline":"5529"},W:"5529",n:"singleSceneBackground"},"5491":{V:{"Main Timeline":"5530"},W:"5530",n:"counter 6"},"5485":{V:{"1472_pressed":"5527","Main Timeline":"5528"},W:"5528",n:"restartButtonInactive"},"5512":{V:{"Main Timeline":"5537"},W:"5537",n:"counter 8"},"5509":{V:{"Main Timeline":"5536"},W:"5536",n:"counter 7"},"5515":{V:{"Main Timeline":"5538"},W:"5538",n:"counter 9"},"5494":{V:{"Main Timeline":"5531"},W:"5531",n:"counter 5"},"5497":{V:{"Main Timeline":"5532"},W:"5532",n:"counter 4"},"5500":{V:{"Main Timeline":"5533"},W:"5533",n:"counter 3"},"5483":{V:{"135_pressed":"5526","Main Timeline":"5525"},W:"5525",n:"playButton"},"5473":{V:{"Main Timeline":"5519"},W:"5519",n:"multiSceneBackground"},"5503":{V:{"Main Timeline":"5534"},W:"5534",n:"counter 2"}},T:{"5534":{c:"5503",z:0.15,i:"5534",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5504",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5504"},{y:0.15,i:"e",s:1,z:0,o:"5504",f:"c"}],f:30,b:[]},"5523":{c:"5476",z:0,i:"5523",n:"Disabled",a:[{y:0,i:"g",s:"#CCCCCC",z:0,o:"5478",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"5477",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"5480",f:"c"},{y:0,i:"g",s:"#E1E1E1",z:0,o:"5482",f:"c"}],f:30,b:[]},"5528":{c:"5485",z:0,i:"5528",n:"Main Timeline",a:[{y:0,i:"g",s:"#CCCCCC",z:0,o:"5488",f:"c"}],f:30,b:[]},"5532":{c:"5497",z:0.15,i:"5532",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5499",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5499"},{y:0.15,i:"e",s:1,z:0,o:"5499",f:"c"}],f:30,b:[]},"5521":{c:"5476",z:1,i:"5521",n:"1597_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5478"},{y:1,i:"g",s:"#CCCCCC",z:0,o:"5478",f:"c"}],f:30,b:[]},"5537":{c:"5512",z:0.15,i:"5537",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5513",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5513"},{y:0.15,i:"e",s:1,z:0,o:"5513",f:"c"}],f:30,b:[]},"5526":{c:"5483",z:1,i:"5526",n:"135_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#62C0D7",s:"#62C0D7",o:"5484"},{y:1,i:"g",s:"#62C0D7",z:0,o:"5484",f:"c"}],f:30,b:[]},"5530":{c:"5491",z:0.15,i:"5530",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5493",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5493"},{y:0.15,i:"e",s:1,z:0,o:"5493",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"5535":{c:"5506",z:0.15,i:"5535",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5508",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5508"},{y:0.15,i:"e",s:1,z:0,o:"5508",f:"c"}],f:30,b:[]},"5524":{c:"5476",z:0.08,i:"5524",n:"Fade out",a:[{y:0,i:"cY",s:"1",z:0,o:"5477",f:"c"},{f:"c",y:0,z:0.08,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5478"},{y:0,i:"cY",s:"0",z:0,o:"5480",f:"c"},{f:"c",y:0,z:0.08,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5482"},{y:0.08,i:"g",s:"#CCCCCC",z:0,o:"5478",f:"c"},{y:0.08,i:"g",s:"#CCCCCC",z:0,o:"5482",f:"c"}],f:30,b:[]},"5529":{c:"5489",z:0,i:"5529",n:"Main Timeline",a:[],f:30,b:[]},"5533":{c:"5500",z:0.15,i:"5533",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5501",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5501"},{y:0.15,i:"e",s:1,z:0,o:"5501",f:"c"}],f:30,b:[]},"5522":{c:"5476",z:0,i:"5522",n:"Main Timeline",a:[{y:0,i:"cY",s:"1",z:0,o:"5477",f:"c"},{y:0,i:"g",s:"#62C0D7",z:0,o:"5478",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"5480",f:"c"},{y:0,i:"g",s:"#62C0D7",z:0,o:"5482",f:"c"}],f:30,b:[]},"5538":{c:"5515",z:0.15,i:"5538",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5517",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5517"},{y:0.15,i:"e",s:1,z:0,o:"5517",f:"c"}],f:30,b:[]},"5527":{c:"5485",z:1,i:"5527",n:"1472_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5488"},{y:1,i:"g",s:"#CCCCCC",z:0,o:"5488",f:"c"}],f:30,b:[]},"5531":{c:"5494",z:0.15,i:"5531",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5495",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5495"},{y:0.15,i:"e",s:1,z:0,o:"5495",f:"c"}],f:30,b:[]},"5520":{c:"5476",z:1,i:"5520",n:"1596_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#62C0D7",s:"#62C0D7",o:"5482"},{y:1,i:"g",s:"#62C0D7",z:0,o:"5482",f:"c"}],f:30,b:[]},"5536":{c:"5509",z:0.15,i:"5536",n:"Main Timeline",a:[{y:0,i:"cY",s:"0",z:0,o:"5511",f:"a"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"5511"},{y:0.15,i:"e",s:1,z:0,o:"5511",f:"c"}],f:30,b:[]},"5525":{c:"5483",z:0,i:"5525",n:"Main Timeline",a:[],f:30,b:[]},"5519":{c:"5473",z:0,i:"5519",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["5475","5474","5473","5490","5489","5471","5472","5484","5483","5518","5508","5504","5501","5499","5495","5493","5511","5513","5517","5507","5506","5505","5503","5502","5500","5498","5497","5496","5494","5492","5491","5510","5509","5514","5512","5516","5515","5478","5477","5482","5480","5476","5488","5486","5485","5479","5481","5487"],n:"Untitled Layout","_":0,v:{"5476":{x:"visible",a:639,dB:"button",b:341,j:"absolute",cY:"1",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2458",J:false}]},k:"div",z:3,d:53,bF:"5475",c:53,e:1,aP:"pointer",bY:1,bZ:180,cA:false,bX:false,cV:[]},"5488":{b:0,z:1,K:"None",c:41,J:"None",L:"None",d:41,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#CCCCCC",aU:6,P:0,bF:"5486",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:42,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",cY:"0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",aN:"5527",t:24,F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"",x:"visible",I:"None",a:0,y:"preserve",cN:"auto"},"5472":{x:"visible",cY:"0",k:"div",c:357,d:323,z:6,e:1,a:171,j:"absolute",bF:"5471",b:10},"5484":{b:0,z:15,K:"None",c:199,L:"None",d:68,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"#62C0D7",aU:6,P:0,bF:"5483",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:71,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"Helvetica,Arial,Sans-Serif",aN:"5526",D:"#A0A0A0",t:33,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"&nbsp;PLAY &nbsp;\u25b6",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"5496":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5531",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5494",b:0},"5503":{x:"visible",cA:false,a:-78,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:29,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5480":{x:"visible",a:0,dB:"button",b:0,j:"absolute",cY:"0",bF:"5476",k:"div",z:2,d:53,c:53,r:"inline",e:1,aP:"pointer"},"5492":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5530",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5491",b:0},"5507":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5535",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5506",b:0},"5511":{G:"#000000",aU:8,c:78,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"seventh<br>",bF:"5509",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-13,F:"center",b:-35},"5515":{x:"visible",cA:false,a:446,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:19,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5477":{x:"visible",cY:"1",k:"div",c:53,d:53,z:11,r:"inline",a:0,j:"absolute",bF:"5476",b:0},"5489":{x:"visible",a:0,cA:false,b:0,j:"absolute",r:"none",c:700,k:"div",bY:1,d:400,z:3,bF:"5471",bX:false,bZ:180,cV:[]},"5473":{x:"visible",cA:false,a:0,b:0,j:"absolute",bF:"5471",c:698,k:"div",bY:1,d:334,z:4,bX:false,bZ:180,cV:[]},"5485":{x:"visible",cA:false,a:639,b:341,j:"absolute",bF:"5475",c:53,k:"div",bY:1,d:53,z:2,bX:false,bZ:180,cV:[]},"5497":{x:"visible",cA:false,a:71,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:27,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5504":{G:"#000000",aU:8,c:68,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"second<br>",bF:"5503",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-10,F:"center",b:-35},"5481":{w:"",h:"1342",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:10,j:"absolute",dB:"img",z:2,k:"div",bF:"5480",d:33,c:53,r:"inline",aP:"pointer"},"5493":{G:"#000000",aU:8,c:48,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"sixth<br>",bF:"5491",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:-35},"5500":{x:"visible",cA:false,a:-4,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:28,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5508":{G:"#000000",aU:8,c:48,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"first<br>",bF:"5506",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:-35},"5512":{x:"visible",cA:false,a:371,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:20,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5516":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5538",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5515",b:0},"5478":{b:0,z:1,K:"None",c:41,J:"None",L:"None",d:41,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#62C0D7",aU:6,P:0,bF:"5477",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:42,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",cY:"0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",aN:"5521",t:24,F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"",x:"visible",I:"None",a:0,y:"preserve",cN:"auto"},"5474":{b:0,z:2,K:"None",c:698,BDbK:1,L:"None",d:334,BDbG:0,M:0,N:0,O:0,g:"#FFFFFF",P:0,bF:"5473",BDbL:0,BDbH:0,bG:0,j:"absolute",k:"div",bH:0,bI:1,bJ:1,BDbI:1,A:"#D8DDE4",bK:1,B:"#D8DDE4",r:"inline",bL:0,C:"#D8DDE4",D:"#D8DDE4",BDbJ:1,x:"visible",I:"None",a:0,J:"None"},"5486":{x:"visible",cY:"0",k:"div",c:53,d:53,z:11,r:"inline",a:0,j:"absolute",bF:"5485",b:0},"5498":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5532",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5497",b:0},"5505":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5534",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5503",b:0},"5482":{b:0,z:1,K:"None",c:41,L:"None",d:41,aS:6,M:0,e:1,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#62C0D7",aU:6,P:0,bF:"5480",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:42,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",cY:"0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",aN:"5520",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,f:3}]},F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"5494":{x:"visible",cA:false,a:146,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:26,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5501":{G:"#000000",aU:8,c:48,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"third<br>",bF:"5500",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:-35},"5509":{x:"visible",cA:false,a:296,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:21,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5490":{c:700,d:400,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,bF:"5489",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:0},"5513":{G:"#000000",aU:8,c:78,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"eighth<br>",bF:"5512",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-13,F:"center",b:-35},"5517":{G:"#000000",aU:8,c:78,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"ninth<br>",bF:"5515",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-13,F:"center",b:-35},"5479":{h:"1342",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:10,j:"absolute",bF:"5477",z:2,k:"div",dB:"img",d:33,c:53,r:"inline"},"5475":{x:"visible",cY:"0",k:"div",c:700,d:400,z:5,r:"none",a:0,j:"absolute",bF:"5471",b:0},"5487":{h:"1342",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:10,j:"absolute",bF:"5486",z:2,k:"div",dB:"img",d:33,c:53,r:"inline"},"5499":{G:"#000000",aU:8,c:58,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"fourth<br>",bF:"5497",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-5,F:"center",b:-35},"5471":{k:"div",x:"visible",c:700,d:400,z:4,a:0,j:"absolute",bS:383,b:0},"5483":{c:211,d:80,r:"inline",cY:"0",e:1,cA:false,aP:"pointer",bF:"5475",j:"absolute",x:"visible",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2458",J:false}]},k:"div",dB:"button",z:1,bX:false,cV:[],bY:1,a:244,bZ:180,b:84},"5495":{G:"#000000",aU:8,c:48,d:25,aV:8,cY:"0",e:0,s:"Helvetica,Arial,Sans-Serif",r:"inline",t:20,Z:"break-word",w:"fifth<br>",bF:"5494",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:-35},"5502":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5533",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5500",b:0},"5506":{x:"visible",cA:false,a:-153,b:239,j:"absolute",bF:"5472",c:64,k:"div",bY:1,d:64,z:30,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},bZ:180,cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5491":{cN:"auto",x:"visible",a:221,dB:"button",b:239,j:"absolute",bF:"5472",aA:{a:[{b:"5425",p:3,z:false,symbolOid:"5420"}]},k:"div",z:25,d:64,c:64,bY:1,aP:"pointer",bZ:180,cA:false,bX:false,cK:{a:[{b:"5423",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5423",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5514":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5537",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5512",b:0},"5510":{P:0,c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#000000",L:"None",aP:"pointer",M:0,w:"",aI:"50%",aA:{a:[{b:"5536",p:8,z:false,symbolOid:"5420",J:false}]},N:0,O:0,A:"#D8DDE4",aJ:"50%",x:"visible",dB:"button",z:2,C:"#D8DDE4",D:"#D8DDE4",aK:"50%",j:"absolute",k:"div",B:"#D8DDE4",a:0,aL:"50%",bF:"5509",b:0},"5518":{G:"#000000",aU:8,c:671,aV:8,d:18,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:24,Z:"break-word",w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-style: normal; font-variant-caps: normal; text-decoration: none; font-family: Arial; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap;\">Can you identify the </span><span style=\"color: rgb(0, 0, 0); font-variant-caps: normal; text-decoration: none; font-family: Arial; font-style: italic; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap;\"><b>fourth</b></span><span style=\"color: rgb(0, 0, 0); font-style: normal; font-variant-caps: normal; text-decoration: none; font-family: Arial; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap;\"> and </span><span style=\"color: rgb(0, 0, 0); font-variant-caps: normal; text-decoration: none; font-family: Arial; font-style: italic; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap;\"><b><font>eighth</font></b></span><span style=\"color: rgb(0, 0, 0); font-style: normal; font-variant-caps: normal; text-decoration: none; font-family: Arial; font-variant-ligatures: normal; font-variant-east-asian: normal; font-variant-position: normal; vertical-align: baseline; white-space: pre-wrap;\"> dots in this sequence? </span></div>",bF:"5472",j:"absolute",x:"visible",k:"div",y:"preserve",z:31,aS:8,aT:8,a:-158,b:100}}}],{},g,{},null,false,false,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
