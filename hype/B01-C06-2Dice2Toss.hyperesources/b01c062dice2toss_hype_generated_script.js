//	HYPE.documents["B01-C06-2Dice2Toss"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="B01-C06-2Dice2Toss.hyperesources",f="B01-C06-2Dice2Toss",g="b01c062dice2toss_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/b01c062dice2toss_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_660F||null!=window.HYPE_dtl_660F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-660.full.min.js":"HYPE-660.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_660"+c,"HYPE_dtl_660"+c,a,d),false==!0&&(a=a||k("HYPE_w_660","HYPE_wdtl_660","HYPE-660.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_660","HYPE-660.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t \n}",identifier:"5"},{name:"timejump",source:"function(hypeDocument, element, event) {\nvar timeBetween1and5A = Math.floor(Math.random() * 6) + 1;\n\t\n\nhypeDocument.goToTimeInTimelineNamed(timeBetween1and5A, 'Main Timeline')\n \n \n}",identifier:"9"},{name:"timejump2",source:"function(hypeDocument, element, event) {\t\nvar timeBetween1and5A = Math.floor(Math.random() * 6) + 1;\n\t\n\nhypeDocument.goToTimeInTimelineNamed(timeBetween1and5A, 'Dice 2')\t\n}",identifier:"121"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_660"+c](f,g,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},l,[],e,[{n:"B01-C06-2Dice2Toss",o:"1",X:[0]}],
[{o:"3",p:"600px",a:100,Y:300,Z:200,b:100,cA:false,c:"#F2F2F2",L:[],bY:1,d:300,U:{},T:{"93_pressed":{q:false,z:1,i:"93_pressed",n:"93_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"C",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"B",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"D",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"A",e:"#273691",s:"#0081C6",o:"207"},{y:1,i:"g",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"C",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"B",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"D",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"A",s:"#273691",z:0,o:"207",f:"c"}],f:30,b:[]},"89":{q:false,z:7,i:"89",n:"Dice 2",a:[{f:"c",p:2,y:0,z:0.29,i:"ActionHandler",e:{a:[{p:4,h:"121"}]},s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{f:"c",y:0,z:0.14,i:"cY",e:"0",s:"1",o:"205"},{f:"c",y:0,z:0.04,i:"cY",e:"1",s:"0",o:"200"},{f:"c",y:0,z:0.04,i:"cY",e:"0",s:"1",o:"221"},{f:"c",y:0,z:4,i:"cY",e:"0",s:"1",o:"195"},{f:"c",y:0,z:0.11,i:"cY",e:"0",s:"1",o:"215"},{f:"c",y:0,z:0.08,i:"cY",e:"0",s:"1",o:"208"},{f:"c",y:0.04,z:0.18,i:"cY",e:"0",s:"1",o:"200"},{f:"c",y:0.04,z:0.04,i:"cY",e:"1",s:"0",o:"221"},{f:"c",y:0.08,z:0.03,i:"cY",e:"1",s:"0",o:"208"},{f:"c",y:0.08,z:0.1,i:"cY",e:"0",s:"1",o:"221"},{f:"c",y:0.11,z:0.03,i:"cY",e:"1",s:"0",o:"215"},{f:"c",y:0.11,z:5.19,i:"cY",e:"0",s:"1",o:"208"},{f:"c",y:0.14,z:0.04,i:"cY",e:"1",s:"0",o:"205"},{f:"c",y:0.14,z:0.12,i:"cY",e:"0",s:"1",o:"215"},{f:"c",y:0.18,z:0.12,i:"cY",e:"0",s:"1",o:"205"},{f:"c",y:0.18,z:0.04,i:"cY",e:"1",s:"0",o:"221"},{f:"c",y:0.22,z:0.04,i:"cY",e:"1",s:"0",o:"200"},{f:"c",y:0.22,z:0.08,i:"cY",e:"1",s:"1",o:"221"},{f:"c",y:0.26,z:1.04,i:"cY",e:"0",s:"1",o:"200"},{f:"c",y:0.26,z:0.03,i:"cY",e:"1",s:"0",o:"215"},{f:"c",p:2,y:0.29,z:1,i:"ActionHandler",e:{a:[{b:"89",symbolOid:"2",p:7}]},s:{a:[{p:4,h:"121"}]},o:"89"},{f:"c",y:0.29,z:4.01,i:"cY",e:"0",s:"1",o:"215"},{f:"c",y:1,z:1,i:"cY",e:"1",s:"0",o:"205"},{f:"c",y:1,z:2,i:"cY",e:"0",s:"1",o:"221"},{f:"c",p:2,y:1.29,z:1,i:"ActionHandler",e:{a:[{b:"89",symbolOid:"2",p:7}]},s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{f:"c",y:2,z:1,i:"cY",e:"1",s:"0",o:"200"},{y:2,i:"cY",s:"1",z:0,o:"205",f:"c"},{f:"c",p:2,y:2.29,z:1,i:"ActionHandler",e:{a:[{b:"89",symbolOid:"2",p:7}]},s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{y:3,i:"cY",s:"1",z:0,o:"200",f:"c"},{f:"c",y:3,z:1,i:"cY",e:"1",s:"0",o:"221"},{f:"c",p:2,y:3.29,z:1,i:"ActionHandler",e:{a:[{b:"89",symbolOid:"2",p:7}]},s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{f:"c",y:4,z:1,i:"cY",e:"1",s:"0",o:"195"},{f:"c",y:4,z:1,i:"cY",e:"1",s:"1",o:"221"},{f:"c",p:2,y:4.29,z:1,i:"ActionHandler",e:{a:[{b:"89",symbolOid:"2",p:7}]},s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{y:5,i:"cY",s:"1",z:0,o:"195",f:"c"},{f:"c",y:5,z:1,i:"cY",e:"1",s:"0",o:"215"},{y:5,i:"cY",s:"1",z:0,o:"221",f:"c"},{f:"c",p:2,y:5.29,z:1,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{f:"c",y:6,z:1,i:"cY",e:"1",s:"0",o:"208"},{y:6,i:"cY",s:"1",z:0,o:"215",f:"c"},{f:"c",p:2,y:6.29,z:0,i:"ActionHandler",s:{a:[{b:"89",symbolOid:"2",p:7}]},o:"89"},{y:7,i:"cY",s:"1",z:0,o:"208",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:7,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0.29,i:"ActionHandler",e:{a:[{p:4,h:"9"}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:0.06,i:"cY",e:"0",s:"1",o:"251"},{y:0,i:"S",s:0,z:0,o:"233",f:"c"},{y:0,i:"T",s:0,z:0,o:"233",f:"c"},{y:0,i:"Q",s:0,z:0,o:"233",f:"c"},{y:0,i:"R",s:"#000",z:0,o:"233",f:"c"},{f:"c",y:0,z:0.15,i:"cY",e:"0",s:"1",o:"226"},{f:"c",y:0,z:0.03,i:"cY",e:"1",s:"0",o:"233"},{f:"c",y:0,z:0.03,i:"cY",e:"0",s:"1",o:"237"},{f:"c",y:0,z:0.09,i:"cY",e:"0",s:"1",o:"242"},{f:"c",y:0,z:0.23,i:"cY",e:"0",s:"1",o:"253"},{f:"c",y:0.03,z:0.16,i:"cY",e:"0",s:"1",o:"233"},{f:"c",y:0.03,z:0.03,i:"cY",e:"1",s:"0",o:"237"},{f:"c",y:0.06,z:0.03,i:"cY",e:"1",s:"0",o:"251"},{f:"c",y:0.06,z:0.06,i:"cY",e:"0",s:"1",o:"237"},{f:"c",y:0.09,z:0.03,i:"cY",e:"1",s:"0",o:"242"},{f:"c",y:0.09,z:0.21,i:"cY",e:"0",s:"1",o:"251"},{f:"c",y:0.12,z:4.18,i:"cY",e:"0",s:"1",o:"242"},{f:"c",y:0.12,z:0.03,i:"cY",e:"1",s:"0",o:"237"},{f:"c",y:0.15,z:0.04,i:"cY",e:"1",s:"0",o:"226"},{f:"c",y:0.15,z:3.15,i:"cY",e:"0",s:"1",o:"237"},{f:"c",y:0.19,z:0.08,i:"cY",e:"0",s:"1",o:"226"},{f:"c",y:0.19,z:0.04,i:"cY",e:"1",s:"0",o:"233"},{f:"c",y:0.23,z:0.04,i:"cY",e:"1",s:"0",o:"253"},{f:"c",y:0.23,z:2.07,i:"cY",e:"0",s:"1",o:"233"},{f:"c",y:0.27,z:1.03,i:"cY",e:"0",s:"1",o:"253"},{f:"c",y:0.27,z:0.02,i:"cY",e:"1",s:"0",o:"226"},{f:"c",p:2,y:0.29,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{p:4,h:"9"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0.29,z:5.01,i:"cY",e:"0",s:"1",o:"226"},{f:"c",y:1,z:1,i:"cY",e:"1",s:"0",o:"251"},{f:"c",p:2,y:1.29,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:2,z:1,i:"cY",e:"1",s:"0",o:"253"},{y:2,i:"cY",s:"1",z:0,o:"251",f:"c"},{f:"c",p:2,y:2.29,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:3,i:"cY",s:"1",z:0,o:"253",f:"c"},{f:"c",y:3,z:1,i:"cY",e:"1",s:"0",o:"233"},{f:"c",p:2,y:3.29,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:4,i:"cY",s:"1",z:0,o:"233",f:"c"},{f:"c",y:4,z:1,i:"cY",e:"1",s:"0",o:"237"},{f:"c",p:2,y:4.29,z:1,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:5,z:1,i:"cY",e:"1",s:"0",o:"242"},{y:5,i:"cY",s:"1",z:0,o:"237",f:"c"},{f:"c",p:2,y:5.29,z:1,i:"ActionHandler",e:{a:[{}]},s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:6,i:"cY",s:"1",z:0,o:"242",f:"c"},{f:"c",y:6,z:1,i:"cY",e:"1",s:"0",o:"226"},{f:"c",p:2,y:6.29,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"2",p:7}]},o:"kTimelineDefaultIdentifier"},{y:7,i:"cY",s:"1",z:0,o:"226",f:"c"}],f:30,b:[]},"8_pressed":{q:false,z:1,i:"8_pressed",n:"8_pressed",a:[{f:"c",y:0,z:1,i:"g",e:"#273691",s:"#0081C6",o:"250"},{f:"c",y:0,z:1,i:"B",e:"#273691",s:"#0081C6",o:"250"},{f:"c",y:0,z:1,i:"C",e:"#273691",s:"#0081C6",o:"250"},{f:"c",y:0,z:1,i:"D",e:"#273691",s:"#0081C6",o:"250"},{f:"c",y:0,z:1,i:"A",e:"#273691",s:"#0081C6",o:"250"},{f:"c",y:0,z:1,i:"g",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"C",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"B",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"D",e:"#273691",s:"#0081C6",o:"207"},{f:"c",y:0,z:1,i:"A",e:"#273691",s:"#0081C6",o:"207"},{y:1,i:"g",s:"#273691",z:0,o:"250",f:"c"},{y:1,i:"B",s:"#273691",z:0,o:"250",f:"c"},{y:1,i:"C",s:"#273691",z:0,o:"250",f:"c"},{y:1,i:"D",s:"#273691",z:0,o:"250",f:"c"},{y:1,i:"A",s:"#273691",z:0,o:"250",f:"c"},{y:1,i:"g",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"C",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"B",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"D",s:"#273691",z:0,o:"207",f:"c"},{y:1,i:"A",s:"#273691",z:0,o:"207",f:"c"}],f:30,b:[]},"122":{q:false,z:0,i:"122",n:"Dice 1",a:[],f:30,b:[]}},bZ:180,O:["249","225","193","203","194","248","204","253","233","241","237","243","242","228","226","254","235","240","247","227","200","221","197","195","218","215","210","208","201","222","196","217","209","230","252","251","236","244","229","213","206","205","223","219","212","255","234","239","246","232","238","245","231","202","224","199","216","211","198","220","214","250","207"],n:"Untitled Layout","_":0,v:{"197":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"195",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"232":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"226",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:6,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"218":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"215",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"225":{x:"visible",bF:"193",k:"div",c:116,d:152,z:2,a:0,bS:127,j:"absolute",b:0},"198":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"195",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:67},"226":{x:"visible",cY:"1",k:"div",c:84,d:88,z:4,a:16,bF:"225",j:"absolute",b:15},"233":{Q:0,x:"visible",R:"#000",a:16,b:15,j:"absolute",cY:"0",bF:"225",z:7,T:0,d:88,S:0,k:"div",c:84,gg:"0"},"240":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"237",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"219":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"215",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:32,aL:"50%",b:33},"199":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"195",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:4,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"227":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"226",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"234":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"233",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"241":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"237",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"228":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"226",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"200":{x:"visible",cY:"1",k:"div",c:84,d:88,z:8,a:16,bF:"194",j:"absolute",b:15},"235":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"233",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"242":{x:"visible",cY:"1",k:"div",c:84,d:88,z:5,a:16,bF:"225",j:"absolute",b:15},"229":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"226",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:33},"201":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"200",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"236":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"233",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:32,aL:"50%",b:33},"243":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"242",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"250":{b:115,z:3,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#0081C6",aU:6,P:1,bF:"225",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#0081C6",B:"#0081C6",Z:"break-word",r:"inline",C:"#0081C6",aN:"8_pressed",D:"#0081C6",t:14,F:"center",aA:{a:[{i:0.16666667,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"2"},{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2",J:false}]},G:"#FFF",aP:"pointer",w:"Toss",x:"visible",I:"Solid",a:6,y:"preserve",J:"Solid"},"237":{x:"visible",cY:"1",k:"div",c:84,d:88,z:6,a:16,bF:"225",j:"absolute",b:15},"202":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"200",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"244":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"242",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:32,aL:"50%",b:33},"251":{x:"visible",cY:"1",k:"div",c:20,d:20,z:9,a:48,bF:"225",j:"absolute",b:49},"245":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"242",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:4,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:67},"203":{k:"div",aI:10,c:114,d:150,I:"Solid",J:"Solid",gg:"0",K:"Solid",g:"#52B0E2",L:"Solid",M:1,bF:"194",N:1,j:"absolute",x:"visible",O:1,B:"#52B0E2",P:1,A:"#52B0E2",C:"#52B0E2",z:1,Q:6,D:"#52B0E2",R:"#AFAFAF",aK:10,aJ:10,S:3,a:0,aL:10,T:3,b:0},"210":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"208",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"238":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"237",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:67},"252":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"251",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"239":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"237",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:4,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"204":{k:"div",aI:10,c:100,d:100,I:"Solid",J:"Solid",gg:"0",K:"Solid",g:"#F8F8F8",L:"Solid",M:1,bF:"194",N:1,j:"absolute",x:"visible",O:1,B:"#F8F8F8",P:1,A:"#F8F8F8",C:"#F8F8F8",z:2,Q:6,D:"#F8F8F8",R:"#AFAFAF",aK:10,aJ:10,S:1,a:6,aL:10,T:1,b:8},"211":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"208",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:6,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"246":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"242",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:5,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"253":{x:"visible",cY:"1",k:"div",c:84,d:88,z:8,a:16,bF:"225",j:"absolute",b:15},"247":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"242",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"205":{x:"visible",cY:"1",k:"div",c:20,d:20,z:9,a:48,bF:"194",j:"absolute",b:49},"212":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"208",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:33},"254":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"253",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"248":{k:"div",aI:10,c:100,d:100,I:"Solid",J:"Solid",gg:"0",K:"Solid",g:"#F8F8F8",L:"Solid",M:1,bF:"225",N:1,j:"absolute",x:"visible",O:1,B:"#F8F8F8",P:1,A:"#F8F8F8",C:"#F8F8F8",z:2,Q:6,D:"#F8F8F8",R:"#AFAFAF",aK:10,aJ:10,S:1,a:6,aL:10,T:1,b:8},"213":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"208",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:4,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:33},"220":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"215",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:4,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:67},"206":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"205",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:-1},"255":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"253",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"193":{k:"div",x:"visible",c:255,d:152,z:2,a:29,j:"absolute",b:24},"207":{b:115,z:3,K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#0081C6",aU:6,P:1,bF:"194",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#0081C6",B:"#0081C6",Z:"break-word",r:"inline",C:"#0081C6",aN:"93_pressed",D:"#0081C6",t:14,F:"center",aA:{a:[{i:0.16666667,b:"89",p:9,symbolOid:"2"},{b:"89",p:8,z:false,symbolOid:"2",J:false}]},G:"#FFF",aP:"pointer",w:"Toss",x:"visible",I:"Solid",a:6,y:"preserve",J:"Solid"},"214":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"208",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:5,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:67},"221":{Q:0,x:"visible",R:"#000",a:16,b:15,j:"absolute",cY:"0",bF:"194",z:7,T:0,d:88,S:0,k:"div",c:84,gg:"0"},"249":{k:"div",aI:10,c:114,d:150,I:"Solid",J:"Solid",gg:"0",K:"Solid",g:"#52B0E2",L:"Solid",M:1,bF:"225",N:1,j:"absolute",x:"visible",O:1,B:"#52B0E2",P:1,A:"#52B0E2",C:"#52B0E2",z:1,Q:6,D:"#52B0E2",R:"#AFAFAF",aK:10,aJ:10,S:3,a:0,aL:10,T:3,b:0},"194":{x:"visible",bF:"193",k:"div",c:116,d:152,z:1,a:137,bS:127,j:"absolute",b:0},"208":{x:"visible",cY:"1",k:"div",c:84,d:88,z:4,a:16,bF:"194",j:"absolute",b:15},"215":{x:"visible",cY:"1",k:"div",c:84,d:88,z:5,a:16,bF:"194",j:"absolute",b:15},"222":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"221",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"195":{x:"visible",cY:"1",k:"div",c:84,d:88,z:6,a:16,bF:"194",j:"absolute",b:15},"209":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"208",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"216":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"215",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:5,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67},"223":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"221",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:2,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:32,aL:"50%",b:33},"230":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"226",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:4,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:33},"196":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"195",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"231":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"226",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:5,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:67},"217":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"215",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:1,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:64,aL:"50%",b:-1},"224":{c:18,d:18,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",M:1,bF:"221",N:1,A:"#000",x:"visible",j:"absolute",B:"#000",P:1,O:1,C:"#000",z:3,aJ:"50%",D:"#000",aK:"50%",k:"div",aI:"50%",a:0,aL:"50%",b:67}}}],{},h,{},null,false,true,-1,true,false,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
