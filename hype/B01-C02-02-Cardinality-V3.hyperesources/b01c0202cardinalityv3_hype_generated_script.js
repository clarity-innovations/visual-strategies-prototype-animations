//	HYPE.documents["B01-C02-02-Cardinality-V3"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="B01-C02-02-Cardinality-V3.hyperesources",c="B01-C02-02-Cardinality-V3",e="b01c0202cardinalityv3_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/b01c0202cardinalityv3_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"fDragConstrainHorizontal",source:"function(hypeDocument, element, event) {\t\tif (event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseStart) {\n\t\twindow.gTop = hypeDocument.getElementProperty(element, 'top');\n\t}else if(event['hypeGesturePhase'] == hypeDocument.kHypeGesturePhaseMove) {\n\t\thypeDocument.setElementProperty(element, 'top', gTop, 0, 'linear');\n\t};\t\n}",identifier:"5352"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"0":{p:1,n:"restart.svg",g:"1342",t:"image/svg+xml"},"1":{p:2,n:"counting1-9.mp3",g:"3057",t:"audio/mpeg"},"2":{p:2,n:"cardinal-9.mp3",g:"3111",t:"audio/mpeg"}},h,[],d,[{n:"B01-C02-02-Cardinality-V3",o:"5471",X:[0]}],[{o:"5501",p:"600px",a:100,Y:700,Z:400,b:100,cA:false,c:"#F2F2F2",L:[],bY:1,d:700,U:{"5542":{V:{"1597_pressed":"5604","1596_pressed":"5603","Main Timeline":"5605",Disabled:"5606","Fade out":"5607"},W:"5605",n:"restartButtonActive"},"5536":{V:{"1472_pressed":"5599","Main Timeline":"5600"},W:"5600",n:"restartButtonInactive"},"5522":{V:{"Black to Red":"5598","Main Timeline":"5594","Red to Black":"5597","Red Static":"5595","Black Static":"5596"},W:"5594",n:"counter"},"5512":{V:{"Black to Red":"5573","Main Timeline":"5569","Red to Black":"5572","Red Static":"5570","Black Static":"5571"},W:"5569",n:"counter"},"5506":{V:{"Black to Red":"5558","Main Timeline":"5554","Red to Black":"5557","Red Static":"5555","Black Static":"5556"},W:"5554",n:"counter"},"5516":{V:{"Black to Red":"5583","Main Timeline":"5579","Red to Black":"5582","Red Static":"5580","Black Static":"5581"},W:"5579",n:"counter"},"5549":{V:{"Main Timeline":"5608"},W:"5608",n:"singleSceneBackground"},"5551":{V:{"Main Timeline":"5609"},W:"5609",n:"multiSceneBackground"},"5540":{V:{"135_pressed":"5602","Main Timeline":"5601"},W:"5601",n:"playButton"},"5518":{V:{"Black to Red":"5588","Main Timeline":"5584","Red to Black":"5587","Red Static":"5585","Black Static":"5586"},W:"5584",n:"counter"},"5508":{V:{"Black to Red":"5563","Main Timeline":"5559","Red to Black":"5562","Red Static":"5560","Black Static":"5561"},W:"5559",n:"counter"},"5510":{V:{"Black to Red":"5568","Main Timeline":"5564","Red to Black":"5567","Red Static":"5565","Black Static":"5566"},W:"5564",n:"counter"},"5520":{V:{"Black to Red":"5593","Main Timeline":"5589","Red to Black":"5592","Red Static":"5590","Black Static":"5591"},W:"5589",n:"counter"},"5514":{V:{"Black to Red":"5578","Main Timeline":"5574","Red to Black":"5577","Red Static":"5575","Black Static":"5576"},W:"5574",n:"counter"}},T:{"5558":{c:"5506",z:1,i:"5558",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5507"},{y:1,i:"g",s:"#F18270",z:0,o:"5507",f:"c"}],f:30,b:[]},"5607":{c:"5542",z:0.08,i:"5607",n:"Fade out",a:[{y:0,i:"cY",s:"1",z:0,o:"5543",f:"c"},{f:"c",y:0,z:0.08,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5544"},{y:0,i:"cY",s:"0",z:0,o:"5546",f:"c"},{f:"c",y:0,z:0.08,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5548"},{y:0.08,i:"g",s:"#CCCCCC",z:0,o:"5544",f:"c"},{y:0.08,i:"g",s:"#CCCCCC",z:0,o:"5548",f:"c"}],f:30,b:[]},"5594":{c:"5522",z:0,i:"5594",n:"Main Timeline",a:[],f:30,b:[]},"5587":{c:"5518",z:1,i:"5587",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5519"},{y:1,i:"g",s:"#000000",z:0,o:"5519",f:"c"}],f:30,b:[]},"5600":{c:"5536",z:0,i:"5600",n:"Main Timeline",a:[{y:0,i:"g",s:"#CCCCCC",z:0,o:"5539",f:"c"}],f:30,b:[]},"5566":{c:"5510",z:0,i:"5566",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5511",f:"c"}],f:30,b:[]},"5559":{c:"5508",z:0,i:"5559",n:"Main Timeline",a:[],f:30,b:[]},"5580":{c:"5516",z:0,i:"5580",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5517",f:"c"}],f:30,b:[]},"5573":{c:"5512",z:1,i:"5573",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5513"},{y:1,i:"g",s:"#F18270",z:0,o:"5513",f:"c"}],f:30,b:[]},"5608":{c:"5549",z:0,i:"5608",n:"Main Timeline",a:[],f:30,b:[]},"5595":{c:"5522",z:0,i:"5595",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5523",f:"c"}],f:30,b:[]},"5588":{c:"5518",z:1,i:"5588",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5519"},{y:1,i:"g",s:"#F18270",z:0,o:"5519",f:"c"}],f:30,b:[]},"5601":{c:"5540",z:0,i:"5601",n:"Main Timeline",a:[],f:30,b:[]},"5574":{c:"5514",z:0,i:"5574",n:"Main Timeline",a:[],f:30,b:[]},"5567":{c:"5510",z:1,i:"5567",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5511"},{y:1,i:"g",s:"#000000",z:0,o:"5511",f:"c"}],f:30,b:[]},"5581":{c:"5516",z:0,i:"5581",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5517",f:"c"}],f:30,b:[]},"5560":{c:"5508",z:0,i:"5560",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5509",f:"c"}],f:30,b:[]},"5596":{c:"5522",z:0,i:"5596",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5523",f:"c"}],f:30,b:[]},"5589":{c:"5520",z:0,i:"5589",n:"Main Timeline",a:[],f:30,b:[]},"5609":{c:"5551",z:0,i:"5609",n:"Main Timeline",a:[],f:30,b:[]},"5602":{c:"5540",z:1,i:"5602",n:"135_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#62C0D7",s:"#62C0D7",o:"5541"},{y:1,i:"g",s:"#62C0D7",z:0,o:"5541",f:"c"}],f:30,b:[]},"5582":{c:"5516",z:1,i:"5582",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5517"},{y:1,i:"g",s:"#000000",z:0,o:"5517",f:"c"}],f:30,b:[]},"5575":{c:"5514",z:0,i:"5575",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5515",f:"c"}],f:30,b:[]},"5568":{c:"5510",z:1,i:"5568",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5511"},{y:1,i:"g",s:"#F18270",z:0,o:"5511",f:"c"}],f:30,b:[]},"5554":{c:"5506",z:0,i:"5554",n:"Main Timeline",a:[],f:30,b:[]},"5561":{c:"5508",z:0,i:"5561",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5509",f:"c"}],f:30,b:[]},"5597":{c:"5522",z:1,i:"5597",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5523"},{y:1,i:"g",s:"#000000",z:0,o:"5523",f:"c"}],f:30,b:[]},"5603":{c:"5542",z:1,i:"5603",n:"1596_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#62C0D7",s:"#62C0D7",o:"5548"},{y:1,i:"g",s:"#62C0D7",z:0,o:"5548",f:"c"}],f:30,b:[]},"5590":{c:"5520",z:0,i:"5590",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5521",f:"c"}],f:30,b:[]},"5583":{c:"5516",z:1,i:"5583",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5517"},{y:1,i:"g",s:"#F18270",z:0,o:"5517",f:"c"}],f:30,b:[]},"5576":{c:"5514",z:0,i:"5576",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5515",f:"c"}],f:30,b:[]},"5569":{c:"5512",z:0,i:"5569",n:"Main Timeline",a:[],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:11,b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5608"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5605"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5609"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5600"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5581"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5566"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5586"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5591"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5596"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5571"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5556"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5561"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"5576"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0.01,b:"5601"}],a:[{y:0,i:"e",s:1,z:0,o:"5505",f:"a"},{f:"c",y:0,z:10.08,i:"cY",e:"0",s:"1",o:"5542"},{f:"a",y:0,z:9,i:"cY",e:"0",s:"1",o:"5525"},{y:0,i:"cY",s:"0",z:0,o:"5505",f:"c"},{f:"c",p:2,y:0.01,z:9.04,i:"ActionHandler",e:{a:[{p:12,o:"3111",q:false}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"1132",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0.01,z:0.07,i:"e",e:0,s:1,o:"5540"},{y:0.08,i:"e",s:0,z:0,o:"5540",f:"c"},{f:"c",y:1,z:0.13,i:"b",e:239,s:201,o:"5514"},{f:"c",y:1,z:0.13,i:"a",e:-153,s:0,o:"5514"},{f:"c",y:1,z:0.26,i:"cY",e:"1",s:"0",o:"5526"},{f:"c",y:1.03,z:0.06,i:"e",e:1,s:0,o:"5526"},{f:"c",y:1.09,z:0.12,i:"e",e:1,s:1,o:"5526"},{y:1.13,i:"b",s:239,z:0,o:"5514",f:"c"},{y:1.13,i:"a",s:-153,z:0,o:"5514",f:"c"},{f:"c",y:1.21,z:0.05,i:"e",e:0,s:1,o:"5526"},{f:"c",y:1.26,z:0.12,i:"a",e:-78,s:-4,o:"5516"},{f:"c",y:1.26,z:0.12,i:"b",e:238,s:87,o:"5516"},{f:"c",y:1.26,z:0.26,i:"cY",e:"1",s:"0",o:"5532"},{y:1.26,i:"cY",s:"1",z:0,o:"5526",f:"c"},{y:1.26,i:"e",s:0,z:0,o:"5526",f:"c"},{f:"c",y:1.29,z:0.06,i:"e",e:1,s:0,o:"5532"},{f:"c",y:2.05,z:0.12,i:"e",e:1,s:1,o:"5532"},{y:2.08,i:"a",s:-78,z:0,o:"5516",f:"c"},{y:2.08,i:"b",s:238,z:0,o:"5516",f:"c"},{f:"c",y:2.17,z:0.05,i:"e",e:0,s:1,o:"5532"},{f:"c",y:2.22,z:0.27,i:"cY",e:"1",s:"0",o:"5527"},{y:2.22,i:"cY",s:"1",z:0,o:"5532",f:"c"},{y:2.22,i:"e",s:0,z:0,o:"5532",f:"c"},{f:"c",y:2.23,z:0.13,i:"b",e:239,s:142,o:"5510"},{f:"c",y:2.23,z:0.13,i:"a",e:-4,s:55,o:"5510"},{f:"c",y:2.25,z:0.06,i:"e",e:1,s:0,o:"5527"},{f:"c",y:3.01,z:0.12,i:"e",e:1,s:1,o:"5527"},{y:3.06,i:"b",s:239,z:0,o:"5510",f:"c"},{y:3.06,i:"a",s:-4,z:0,o:"5510",f:"c"},{f:"c",y:3.13,z:0.06,i:"e",e:0,s:1,o:"5527"},{f:"2584",y:3.19,z:0.14,i:"a",e:71,s:142,o:"5508"},{f:"c",y:3.19,z:0.14,i:"b",e:239,s:215,o:"5508"},{f:"c",y:3.19,z:0.26,i:"cY",e:"1",s:"0",o:"5534"},{y:3.19,i:"cY",s:"1",z:0,o:"5527",f:"c"},{y:3.19,i:"e",s:0,z:0,o:"5527",f:"c"},{f:"c",y:3.21,z:0.06,i:"e",e:1,s:0,o:"5534"},{f:"c",y:3.27,z:0.13,i:"e",e:1,s:1,o:"5534"},{y:4.03,i:"b",s:239,z:0,o:"5508",f:"c"},{y:4.03,i:"a",s:71,z:0,o:"5508",f:"c"},{f:"c",y:4.1,z:0.05,i:"e",e:0,s:1,o:"5534"},{f:"c",y:4.15,z:0.26,i:"cY",e:"1",s:"0",o:"5531"},{y:4.15,i:"cY",s:"1",z:0,o:"5534",f:"c"},{y:4.15,i:"e",s:0,z:0,o:"5534",f:"c"},{f:"c",y:4.16,z:0.13,i:"b",e:239,s:169,o:"5520"},{f:"c",y:4.16,z:0.13,i:"a",e:146,s:206,o:"5520"},{f:"c",y:4.18,z:0.06,i:"e",e:1,s:0,o:"5531"},{f:"c",y:4.24,z:0.12,i:"e",e:1,s:1,o:"5531"},{y:4.29,i:"a",s:146,z:0,o:"5520",f:"c"},{y:4.29,i:"b",s:239,z:0,o:"5520",f:"c"},{f:"c",y:5.06,z:0.05,i:"e",e:0,s:1,o:"5531"},{f:"c",y:5.11,z:0.26,i:"cY",e:"1",s:"0",o:"5529"},{y:5.11,i:"cY",s:"1",z:0,o:"5531",f:"c"},{y:5.11,i:"e",s:0,z:0,o:"5531",f:"c"},{f:"c",y:5.12,z:0.14,i:"a",e:221,s:274,o:"5518"},{f:"c",y:5.12,z:0.14,i:"b",e:239,s:150,o:"5518"},{f:"c",y:5.14,z:0.06,i:"e",e:1,s:0,o:"5529"},{f:"c",y:5.2,z:0.12,i:"e",e:1,s:1,o:"5529"},{y:5.26,i:"b",s:239,z:0,o:"5518",f:"c"},{y:5.26,i:"a",s:221,z:0,o:"5518",f:"c"},{f:"c",y:6.02,z:0.05,i:"e",e:0,s:1,o:"5529"},{f:"c",y:6.07,z:0.27,i:"cY",e:"1",s:"0",o:"5528"},{y:6.07,i:"cY",s:"1",z:0,o:"5529",f:"c"},{y:6.07,i:"e",s:0,z:0,o:"5529",f:"c"},{f:"c",y:6.09,z:0.13,i:"b",e:239,s:121,o:"5522"},{f:"c",y:6.09,z:0.13,i:"a",e:296,s:134,o:"5522"},{f:"c",y:6.1,z:0.06,i:"e",e:1,s:0,o:"5528"},{f:"c",y:6.16,z:0.12,i:"e",e:1,s:1,o:"5528"},{y:6.22,i:"b",s:239,z:0,o:"5522",f:"c"},{y:6.22,i:"a",s:296,z:0,o:"5522",f:"c"},{f:"c",y:6.28,z:0.06,i:"e",e:0,s:1,o:"5528"},{f:"c",y:7.04,z:0.26,i:"cY",e:"1",s:"0",o:"5530"},{y:7.04,i:"cY",s:"1",z:0,o:"5528",f:"c"},{y:7.04,i:"e",s:0,z:0,o:"5528",f:"c"},{f:"c",y:7.05,z:0.14,i:"b",e:239,s:47,o:"5506"},{f:"c",y:7.05,z:0.14,i:"a",e:371,s:126,o:"5506"},{f:"c",y:7.06,z:0.06,i:"e",e:1,s:0,o:"5530"},{f:"c",y:7.12,z:0.13,i:"e",e:1,s:1,o:"5530"},{y:7.19,i:"b",s:239,z:0,o:"5506",f:"c"},{y:7.19,i:"a",s:371,z:0,o:"5506",f:"c"},{f:"c",y:7.25,z:0.05,i:"e",e:0,s:1,o:"5530"},{f:"c",y:8,z:0.26,i:"cY",e:"1",s:"0",o:"5533"},{y:8,i:"cY",s:"1",z:0,o:"5530",f:"c"},{y:8,i:"e",s:0,z:0,o:"5530",f:"c"},{f:"c",y:8.02,z:0.13,i:"a",e:446,s:230,o:"5512"},{f:"c",y:8.02,z:0.13,i:"b",e:239,s:76,o:"5512"},{f:"c",y:8.02,z:0.07,i:"e",e:1,s:0,o:"5533"},{f:"c",y:8.09,z:0.12,i:"e",e:1,s:1,o:"5533"},{y:8.15,i:"a",s:446,z:0,o:"5512",f:"c"},{y:8.15,i:"b",s:239,z:0,o:"5512",f:"c"},{f:"c",y:8.21,z:0.05,i:"e",e:0,s:1,o:"5533"},{y:8.26,i:"cY",s:"1",z:0,o:"5533",f:"c"},{y:8.26,i:"e",s:0,z:0,o:"5533",f:"c"},{y:9,i:"cY",s:"0",z:0,o:"5525",f:"c"},{f:"c",p:2,y:9.05,z:1.1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2458",p:7}]},s:{a:[{p:12,o:"3111",q:false}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:9.08,z:0.07,i:"e",e:1,s:0,o:"5525"},{y:9.15,i:"e",s:1,z:0,o:"5525",f:"c"},{f:"c",y:10.08,z:0.07,i:"e",e:1,s:0,o:"5542"},{y:10.08,i:"cY",s:"0",z:0,o:"5542",f:"c"},{f:"c",y:10.15,z:0.03,i:"e",e:1,s:1,o:"5542"},{f:"c",p:2,y:10.15,z:0.15,i:"ActionHandler",e:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2458"}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2458",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:10.18,z:0.07,i:"e",e:0,s:1,o:"5542"},{y:10.25,i:"e",s:0,z:0,o:"5542",f:"c"},{f:"c",p:2,y:11,z:0,i:"ActionHandler",s:{a:[{i:0,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2458"}]},o:"kTimelineDefaultIdentifier"}],f:30},"5562":{c:"5508",z:1,i:"5562",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5509"},{y:1,i:"g",s:"#000000",z:0,o:"5509",f:"c"}],f:30,b:[]},"5598":{c:"5522",z:1,i:"5598",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5523"},{y:1,i:"g",s:"#F18270",z:0,o:"5523",f:"c"}],f:30,b:[]},"5555":{c:"5506",z:0,i:"5555",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5507",f:"c"}],f:30,b:[]},"5604":{c:"5542",z:1,i:"5604",n:"1597_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5544"},{y:1,i:"g",s:"#CCCCCC",z:0,o:"5544",f:"c"}],f:30,b:[]},"5591":{c:"5520",z:0,i:"5591",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5521",f:"c"}],f:30,b:[]},"5584":{c:"5518",z:0,i:"5584",n:"Main Timeline",a:[],f:30,b:[]},"5577":{c:"5514",z:1,i:"5577",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5515"},{y:1,i:"g",s:"#000000",z:0,o:"5515",f:"c"}],f:30,b:[]},"5570":{c:"5512",z:0,i:"5570",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5513",f:"c"}],f:30,b:[]},"5563":{c:"5508",z:1,i:"5563",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5509"},{y:1,i:"g",s:"#F18270",z:0,o:"5509",f:"c"}],f:30,b:[]},"5599":{c:"5536",z:1,i:"5599",n:"1472_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#CCCCCC",s:"#62C0D7",o:"5539"},{y:1,i:"g",s:"#CCCCCC",z:0,o:"5539",f:"c"}],f:30,b:[]},"5556":{c:"5506",z:0,i:"5556",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5507",f:"c"}],f:30,b:[]},"5605":{c:"5542",z:0,i:"5605",n:"Main Timeline",a:[{y:0,i:"cY",s:"1",z:0,o:"5543",f:"c"},{y:0,i:"g",s:"#62C0D7",z:0,o:"5544",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"5546",f:"c"},{y:0,i:"g",s:"#62C0D7",z:0,o:"5548",f:"c"}],f:30,b:[]},"5578":{c:"5514",z:1,i:"5578",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5515"},{y:1,i:"g",s:"#F18270",z:0,o:"5515",f:"c"}],f:30,b:[]},"5592":{c:"5520",z:1,i:"5592",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5521"},{y:1,i:"g",s:"#000000",z:0,o:"5521",f:"c"}],f:30,b:[]},"5585":{c:"5518",z:0,i:"5585",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5519",f:"c"}],f:30,b:[]},"5571":{c:"5512",z:0,i:"5571",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5513",f:"c"}],f:30,b:[]},"5564":{c:"5510",z:0,i:"5564",n:"Main Timeline",a:[],f:30,b:[]},"5557":{c:"5506",z:1,i:"5557",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5507"},{y:1,i:"g",s:"#000000",z:0,o:"5507",f:"c"}],f:30,b:[]},"5606":{c:"5542",z:0,i:"5606",n:"Disabled",a:[{y:0,i:"g",s:"#CCCCCC",z:0,o:"5544",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"5543",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"5546",f:"c"},{y:0,i:"g",s:"#E1E1E1",z:0,o:"5548",f:"c"}],f:30,b:[]},"5586":{c:"5518",z:0,i:"5586",n:"Black Static",a:[{y:0,i:"g",s:"#000000",z:0,o:"5519",f:"c"}],f:30,b:[]},"5579":{c:"5516",z:0,i:"5579",n:"Main Timeline",a:[],f:30,b:[]},"5593":{c:"5520",z:1,i:"5593",n:"Black to Red",a:[{f:"c",y:0,z:1,i:"g",e:"#F18270",s:"#000000",o:"5521"},{y:1,i:"g",s:"#F18270",z:0,o:"5521",f:"c"}],f:30,b:[]},"5572":{c:"5512",z:1,i:"5572",n:"Red to Black",a:[{f:"c",y:0,z:1,i:"g",e:"#000000",s:"#F18270",o:"5513"},{y:1,i:"g",s:"#000000",z:0,o:"5513",f:"c"}],f:30,b:[]},"5565":{c:"5510",z:0,i:"5565",n:"Red Static",a:[{y:0,i:"g",s:"#F18270",z:0,o:"5511",f:"c"}],f:30,b:[]}},bZ:180,O:["5535","5552","5551","5550","5549","5504","5524","5505","5526","5532","5527","5534","5531","5529","5528","5530","5533","5553","5525","5541","5540","5515","5514","5517","5516","5511","5510","5509","5508","5521","5520","5519","5518","5523","5522","5507","5506","5513","5512","5544","5543","5548","5546","5542","5539","5537","5536","5545","5547","5538"],n:"Untitled Layout","_":0,v:{"5542":{x:"visible",a:639,dB:"button",b:341,j:"absolute",cY:"1",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2458",J:false}]},k:"div",z:3,d:53,bF:"5535",c:53,e:0,aP:"pointer",bY:1,bZ:180,cA:false,bX:false,cV:[]},"5507":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5506",P:0,a:0,aL:"50%",b:0},"5519":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5518",P:0,a:0,aL:"50%",b:0},"5550":{c:700,d:400,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,bF:"5549",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:0},"5515":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5514",P:0,a:0,aL:"50%",b:0},"5527":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px;\">\"three\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:10,F:"center",b:15},"5539":{b:0,z:1,K:"None",c:41,J:"None",L:"None",d:41,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#CCCCCC",aU:6,P:0,bF:"5537",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:42,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",cY:"0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",aN:"5599",t:24,F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"",x:"visible",I:"None",a:0,y:"preserve",cN:"auto"},"5511":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5510",P:0,a:0,aL:"50%",b:0},"5523":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5522",P:0,a:0,aL:"50%",b:0},"5535":{x:"visible",cY:"0",k:"div",c:700,d:400,z:6,a:0,j:"absolute",bF:"5504",b:0},"5547":{w:"",h:"1342",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:10,j:"absolute",dB:"img",z:2,k:"div",bF:"5546",d:33,c:53,r:"inline",aP:"pointer"},"5531":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"five\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:10,F:"center",b:15},"5543":{x:"visible",cY:"1",k:"div",c:53,d:53,z:11,r:"inline",a:0,j:"absolute",bF:"5542",b:0},"5508":{x:"visible",a:142,cA:false,b:215,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:19,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5561",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5561",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5551":{x:"visible",cA:false,a:0,b:0,j:"absolute",bF:"5504",c:698,k:"div",bY:1,d:334,z:3,bX:false,bZ:180,cV:[]},"5504":{k:"div",x:"visible",c:700,d:400,z:3,a:0,j:"absolute",bS:383,b:0},"5516":{x:"visible",a:-4,cA:false,b:87,j:"absolute",cY:"0",c:63,k:"div",bY:1,d:71,z:12,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5581",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5581",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5528":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"seven\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:10,F:"center",b:15},"5512":{x:"visible",a:230,cA:false,b:76,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:18,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5571",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5571",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5524":{k:"div",x:"visible",c:700,d:323,z:5,a:0,j:"absolute",bF:"5504",b:6},"5536":{x:"visible",cA:false,a:639,b:341,j:"absolute",bF:"5535",c:53,k:"div",bY:1,d:53,z:2,bX:false,bZ:180,cV:[]},"5548":{b:0,z:1,K:"None",c:41,L:"None",d:41,aS:6,M:0,e:1,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#62C0D7",aU:6,P:0,bF:"5546",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:42,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",cY:"0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",aN:"5603",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,f:3}]},F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"<br>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"5520":{x:"visible",a:206,cA:false,b:169,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:20,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5591",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5591",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5532":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"two\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:11,aS:8,aT:8,a:10,F:"center",b:15},"5544":{b:0,z:1,K:"None",c:41,J:"None",L:"None",d:41,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#62C0D7",aU:6,P:0,bF:"5543",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:42,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",cY:"0",s:"Helvetica,Arial,Sans-Serif",D:"#A0A0A0",aN:"5604",t:24,F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"",x:"visible",I:"None",a:0,y:"preserve",cN:"auto"},"5540":{x:"visible",a:244,dB:"button",b:145,j:"absolute",bF:"5535",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2458",J:false},{p:12,o:"3057",q:false}]},k:"div",z:1,d:80,c:211,r:"inline",e:1,aP:"pointer",bY:1,bZ:180,cA:false,bX:false,cV:[]},"5509":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5508",P:0,a:0,aL:"50%",b:0},"5552":{b:0,z:2,K:"None",c:698,BDbK:1,L:"None",d:334,BDbG:0,M:0,N:0,O:0,g:"#FFFFFF",P:0,bF:"5551",BDbL:0,BDbH:0,bG:0,j:"absolute",k:"div",bH:0,bI:1,bJ:1,BDbI:1,A:"#D8DDE4",bK:1,B:"#D8DDE4",r:"inline",bL:0,C:"#D8DDE4",D:"#D8DDE4",BDbJ:1,x:"visible",I:"None",a:0,J:"None"},"5505":{x:"visible",cY:"0",k:"div",c:357,d:323,z:4,e:1,a:171,j:"absolute",bF:"5504",b:10},"5517":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5516",P:0,a:0,aL:"50%",b:0},"5529":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"six\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:10,F:"center",b:15},"5513":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5512",P:0,a:0,aL:"50%",b:0},"5525":{G:"#000000",aU:8,c:384,d:99,aV:8,cY:"1",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px;\">\"There &nbsp;are nine </span><br><span style=\"font-size: 40px;\">total dots.\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:150,F:"center",b:47},"5537":{x:"visible",cY:"0",k:"div",c:53,d:53,z:11,r:"inline",a:0,j:"absolute",bF:"5536",b:0},"5549":{x:"visible",a:0,cA:false,b:0,j:"absolute",r:"none",c:700,k:"div",bY:1,d:400,z:2,bF:"5504",bX:false,bZ:180,cV:[]},"5521":{c:64,bS:36,d:64,I:"None",J:"None",K:"None",g:"#F18270",L:"None",M:0,w:"",aI:"50%",A:"#D8DDE4",N:0,x:"visible",O:0,aJ:"50%",j:"absolute",C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",aK:"50%",B:"#D8DDE4",bF:"5520",P:0,a:0,aL:"50%",b:0},"5533":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"nine\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:10,F:"center",b:15},"5545":{h:"1342",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:10,j:"absolute",bF:"5543",z:2,k:"div",dB:"img",d:33,c:53,r:"inline"},"5541":{b:0,z:15,K:"None",c:199,L:"None",d:68,aS:6,M:0,bD:"none",N:0,aT:6,O:0,g:"#62C0D7",aU:6,P:0,bF:"5540",aV:6,j:"absolute",aI:100,k:"div",aJ:100,aK:100,aL:100,A:"#A0A0A0",Y:71,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"Helvetica,Arial,Sans-Serif",aN:"5602",D:"#A0A0A0",t:33,F:"center",v:"bold",G:"#FFFFFF",aP:"pointer",w:"&nbsp;PLAY &nbsp;\u25b6",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"5553":{G:"#000000",aU:8,c:384,d:99,aV:8,cY:"1",e:0.41434908820548688,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px;\">\"There &nbsp;are nine </span><br><span style=\"font-size: 40px;\">total dots.\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:13,aS:8,aT:8,a:150,F:"center",b:41},"5506":{x:"visible",tY:0.5,a:126,b:47,j:"absolute",cY:"0",z:13,k:"div",c:64,d:64,bF:"5505",bY:1,cA:false,bZ:180,bX:false,cK:{a:[{b:"5556",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5556",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}],tX:0.5},"5518":{x:"visible",a:274,cA:false,b:150,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:21,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5586",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5586",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5514":{x:"visible",a:0,cA:false,b:201,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:14,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5576",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5576",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5526":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"one\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:12,aS:8,aT:8,a:10,F:"center",b:15},"5538":{h:"1342",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:10,j:"absolute",bF:"5537",z:2,k:"div",dB:"img",d:33,c:53,r:"inline"},"5510":{x:"visible",a:55,cA:false,b:142,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:16,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5566",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5566",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5522":{x:"visible",a:134,cA:false,b:121,j:"absolute",cY:"0",c:64,k:"div",bY:1,d:64,z:17,bF:"5505",bX:false,bZ:180,cK:{a:[{b:"5596",p:3,z:false,symbolOid:"8"}]},cV:[{a:[{b:"5596",p:3,z:false,symbolOid:"8"}],B:"turnBlack"}]},"5534":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"four\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:10,F:"center",b:15},"5546":{x:"visible",a:0,dB:"button",b:0,j:"absolute",cY:"0",bF:"5542",k:"div",z:2,d:53,c:53,r:"inline",e:1,aP:"pointer"},"5530":{G:"#000000",aU:8,c:184,d:49,aV:8,cY:"0",e:0,s:"Avenir,Helvetica,Arial,Sans-Serif",r:"inline",t:16,Z:"break-word",w:"<span style=\"text-align: center; text-indent: 0px; background-color: rgb(255, 255, 255);\"><span style=\"font-size: 40px; white-space: normal;\">\"eight\"</span></span>",bF:"5524",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:10,F:"center",b:15}}}],{},g,{"2584":[[0,0,0.3998,0.0001502,0.611,0.9959,1,1]]},null,false,false,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
