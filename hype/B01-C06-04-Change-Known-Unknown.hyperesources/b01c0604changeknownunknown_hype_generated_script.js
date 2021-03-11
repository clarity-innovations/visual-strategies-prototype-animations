//	HYPE.documents["B01-C06-04-Change-Known-Unknown"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="B01-C06-04-Change-Known-Unknown.hyperesources",f="B01-C06-04-Change-Known-Unknown",g="b01c0604changeknownunknown_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/b01c0604changeknownunknown_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_728F||null!=window.HYPE_dtl_728F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-728.full.min.js":"HYPE-728.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_728"+c,"HYPE_dtl_728"+c,a,d),false==!0&&(a=a||k("HYPE_w_728","HYPE_wdtl_728","HYPE-728.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_728","HYPE-728.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"submitLibs",source:"function(hypeDocument, element, event) {//update variables with math lib strings from readers\nhypeDocument.vmanimalName1 = hypeDocument.getElementById('animalName1').value;\nhypeDocument.vmanimalName2 = hypeDocument.getElementById('animalName2').value;\nhypeDocument.vmadjective1 = hypeDocument.getElementById('adjective1').value;\nhypeDocument.vmadjective2 = hypeDocument.getElementById('adjective2').value;\nhypeDocument.vmadjective3 = hypeDocument.getElementById('adjective3').value;\nhypeDocument.vmplace = hypeDocument.getElementById('place').value;\nhypeDocument.vmverb = hypeDocument.getElementById('verb').value;\nconsole.log(hypeDocument.vmverb);\n\n\n//save math lib strings in session storage to be accessed in later interactives\nsessionStorage.setItem('vmanimalName1', hypeDocument.vmanimalName1);\nsessionStorage.setItem('vmanimalName2', hypeDocument.vmanimalName2);\nsessionStorage.setItem('vmadjective1', hypeDocument.vmadjective1);\nsessionStorage.setItem('vmadjective2', hypeDocument.vmadjective2);\nsessionStorage.setItem('vmadjective3', hypeDocument.vmadjective3);\nsessionStorage.setItem('vmplace', hypeDocument.vmplace);\nsessionStorage.setItem('vmverb', hypeDocument.vmverb);\n}",identifier:"522"},{name:"printLibs",source:"function(hypeDocument, element, event) {//Gather Variables\nhypeDocument.vmanimalName1 = sessionStorage.getItem('vmanimalName1');\nhypeDocument.vmanimalName2 = sessionStorage.getItem('vmanimalName2');\nhypeDocument.vmadjective1 = sessionStorage.getItem('vmadjective1');\nhypeDocument.vmadjective2 = sessionStorage.getItem('vmadjective2');\nhypeDocument.vmadjective3 = sessionStorage.getItem('vmadjective3');\nhypeDocument.vmplace = sessionStorage.getItem('vmplace');\nhypeDocument.vmverb = sessionStorage.getItem('vmverb');\nconsole.log(\"variables gathered\");\n//Check if the variables are null\nif (hypeDocument.vmanimalName1 == null ||\n\thypeDocument.vmanimalName2 == null ||\n\thypeDocument.vmadjective1 == null ||\n\thypeDocument.vmadjective2 == null ||\n\thypeDocument.vmadjective3 == null ||\n\thypeDocument.vmplace == null ||\n\thypeDocument.vmverb == null) {\n\thypeDocument.showSceneNamed('Error', hypeDocument.kSceneTransitionCrossfade, .5);\t\n}\t\n\t//CHANGE\n\tif (hypeDocument.currentSceneName(\"sceneChange\")) {\n\n\thypeDocument.getElementById('Change1B').innerHTML = \"Some \" + hypeDocument.vmadjective1 + \" \" + hypeDocument.vmanimalName1 + \" were \" + hypeDocument.vmverb + \" near \" + hypeDocument.vmplace + \".\";\n\thypeDocument.getElementById('Change2B').innerHTML = \"A few minutes later, some \" + hypeDocument.vmadjective2 + \" \" + hypeDocument.vmanimalName2 + \" joined them.\";\n\thypeDocument.getElementById('Change3B').innerHTML = \"Together they made a group of really \" + hypeDocument.vmadjective3 + \" animals.\";\n\tconsole.log(\"Print Change2 complete.\");\n}\n\t//PPW\n\tif (hypeDocument.currentSceneName(\"scenePPW\")) {\n\thypeDocument.getElementById('PPW1').innerHTML = \"In the  \" + hypeDocument.vmadjective1 + \" \" + hypeDocument.vmplace + \", there were a whole bunch of \" + hypeDocument.vmanimalName1 + \" and also some \" + hypeDocument.vmanimalName2 + \".\";\n\thypeDocument.getElementById('PPW2').innerHTML = \"Altogether, there were some total number of \" + hypeDocument.vmadjective2 + \" \" + hypeDocument.vmadjective3 + \" animals, \" + hypeDocument.vmverb + \" together happily.\";\n\tconsole.log(\"Print PPW complete.\");\n}\n\t//COMPARE\n\tif (hypeDocument.currentSceneName(\"sceneCompare\")) {\n\n\thypeDocument.getElementById('Compare1').innerHTML = \"We bet you didn't know that \" + hypeDocument.vmplace + \" has a group of \" + hypeDocument.vmadjective1 + \" \" + hypeDocument.vmanimalName1 + \".\";\n\thypeDocument.getElementById('Compare2').innerHTML = \"Because of the \" + hypeDocument.vmverb + \", there are even more \" + hypeDocument.vmanimalName2 + \".\";\n\thypeDocument.getElementById('Compare3').innerHTML = \"In this \" + hypeDocument.vmadjective2 + \" and \" + hypeDocument.vmadjective3 + \" place, there are exactly some number more \" + hypeDocument.vmanimalName2 + \" than \" + hypeDocument.vmanimalName1 + \".\";\n\tconsole.log(\"Print Compare complete.\");\n}\n}",identifier:"527"},{name:"init",source:"function(hypeDocument, element, event) {\t//define variables for math libs\n\thypeDocument.vmanimalName1 = \"\";\n\thypeDocument.vmanimalName2 = \"\";\n\thypeDocument.vmadjective1 = \"\";\n\thypeDocument.vmadjective2 = \"\";\n\thypeDocument.vmadjective3 = \"\";\n\thypeDocument.vmlocation = \"\";\n\thypeDocument.vmverb = \"\";\n\tconsole.log(\"initializing complete\");\n\n\t//clear session storage when the user hits the retart button\n\tsessionStorage.clear();\n\n}",identifier:"528"},{name:"showNextButton",source:"function(hypeDocument, element, event) {if (hypeDocument.getElementById('animalName1').value != \"\" && hypeDocument.getElementById('animalName2').value != \"\" && hypeDocument.getElementById('adjective1').value != \"\" && hypeDocument.getElementById('adjective2').value != \"\" && hypeDocument.getElementById('adjective3').value != \"\" && hypeDocument.getElementById('verb').value != \"\" && hypeDocument.getElementById('place').value != \"\"){\n\thypeDocument.startTimelineNamed('showNext', hypeDocument.kDirectionForward);\n\tconsole.log(\"condition met.\")\n} \n}",identifier:"599"},{name:"checkVariables",source:"function(hypeDocument, element, event) {\n//gather Math Lib entries for animal names\nhypeDocument.vmanimalName1 = sessionStorage.getItem('vmanimalName1');\nhypeDocument.vmanimalName2 = sessionStorage.getItem('vmanimalName2');\nconsole.log(\"variables gathered\");\n\nif (hypeDocument.vmanimalName1 == null ||\n\thypeDocument.vmanimalName2 == null) {\n\thypeDocument.showSceneNamed('Error', hypeDocument.kSceneTransitionCrossfade, .5);\t\n}\n}",identifier:"663"},{name:"numberCards",source:"function(hypeDocument, element, event) {\n\n//print entries on bottom of cards\nhypeDocument.getElementById('animalName1').innerHTML = hypeDocument.vmanimalName1;\nhypeDocument.getElementById('animalName2').innerHTML = hypeDocument.vmanimalName2;\nhypeDocument.getElementById('animalName3').innerHTML = hypeDocument.vmanimalName1 + \" &</br>\" + hypeDocument.vmanimalName2;\n\n//random variable function\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive\n}\n\nvar operator = \"\";\n\nif (getRandomInt(0,2)==0) {\n//set variables for addition problem\noperator = \"+\";\nvar s = getRandomInt(1,11);\nvar c = getRandomInt(1,11);\nvar e = s + c;\n} else {\noperator = \"-\";\nvar s = getRandomInt(11,20);\nvar c = getRandomInt(1,s);\nvar e = s - c;\n}\n\nhypeDocument.getElementById('card1Number').innerHTML = \"<span style='color: rgb(44, 66, 73); text-decoration:underline;'>\" + s ;\nhypeDocument.getElementById('card2Number').innerHTML = \"<span style='color: rgb(44, 66, 73);'>\" + operator + \"</span>\" + \" \" + \"<span style='color: rgb(44, 66, 73); text-decoration:underline;'>\" + c ;\nhypeDocument.getElementById('card3Number').innerHTML = \"<span style='color: rgb(44, 66, 73); text-decoration:underline;'>\" + e ;\n\n}",identifier:"727"},{name:"cardToggleTracker",source:"function(hypeDocument, element, event) {\n//defining variables for clickable cards\n\tvar card1 = hypeDocument.getElementById('card1');\n\t\n\tvar card2 = hypeDocument.getElementById('card2');\n\t\n\tvar card3 = hypeDocument.getElementById('card3');\n\n//toggling off the pointer for cards that have been selected.\t\n\tif (hypeDocument.isPlayingTimelineNamed('Card1')) {\n\t\n\t\tcard1.classList.toggle('pointerDisabled');\n\t\tconsole.log(\"card1 disabled.\");\n\t\tcard1Pointer = true;\n\t\tconsole.log(card1Pointer);\n\t} else if(hypeDocument.isPlayingTimelineNamed('Card2')) {\n\t\n\t\tcard2.classList.toggle('pointerDisabled');\n\t\tconsole.log(\"card2 disabled.\");\n\t\tcard2Pointer = true;\n\t\tconsole.log(card2Pointer);\n\t} else if (hypeDocument.isPlayingTimelineNamed('Card3')) {\n\t\n\t\tcard3.classList.toggle('pointerDisabled');\n\t\tconsole.log(\"card3 disabled.\");\n\t\tcard3Pointer = true;\n\t\tconsole.log(card3Pointer);\n\t}\n//toggling off the pointer for the third card after \n\tif (card1Pointer && card2Pointer) {\n\t\tcard3.classList.toggle('pointerDisabled');\n\t\tconsole.log(\"card3 disabled.\");\n\t\tcard3Pointer = true;\n\t\tconsole.log(card3Pointer);\n\t} else if (card1Pointer && card3Pointer) {\n\t\tcard2.classList.toggle('pointerDisabled');\n\t\tconsole.log(\"card2 disabled.\");\n\t\tcard2Pointer = true;\n\t\tconsole.log(card2Pointer);\n\t} else if (card2Pointer && card3Pointer) {\n\t\tcard1.classList.toggle('pointerDisabled');\n\t\tconsole.log(\"card1 disabled.\");\n\t\tcard1Pointer = true;\n\t\tconsole.log(card1Pointer);\n\t}\n}",identifier:"867"},{name:"card2Toggle",source:"function(hypeDocument, element, event) {\t\n\tvar card2Pointer = false;\n\tvar card2 = hypeDocument.getElementById('card2');\n\tcard2.classList.toggle('pointerDisabled');\n\tconsole.log(\"card2 disabled.\");\n\tvar card2Pointer = true;\n\tconsole.log(card2Pointer);\n}",identifier:"889"},{name:"card3Toggle",source:"function(hypeDocument, element, event) {\t\n\tvar card3Pointer = false;\n\tvar card3 = hypeDocument.getElementById('card3');\n\tcard3.classList.toggle('pointerDisabled');\n\tconsole.log(\"card3 disabled.\");\n\tvar card3Pointer = true;\n\tconsole.log(card1Pointer);\n\t\n}",identifier:"890"},{name:"lockCards",source:"function(hypeDocument, element, event) {\tif (card1Pointer && card2TogglePointer) {\n\tconsole.log(\"card 3 locked.\");\n\thypeDocument.getElementById('card3').classList.toggle('pointerDisabled');\n\t}\n}",identifier:"891"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_728"+c](f,g,{"3":{p:1,n:"icon-arrow-next%4048x48.svg",g:"148",t:"image/svg+xml"},"1":{p:1,n:"icon-arrow-back-single%4048x48.svg",g:"144",t:"image/svg+xml"},"2":{p:1,n:"icon-arrow-play%4048x48.svg",g:"145",t:"image/svg+xml"},"0":{p:1,n:"icon-arrow-back%4048x48.svg",g:"143",t:"image/svg+xml"}},l,["<link rel=\"stylesheet\" href=\"https://use.typekit.net/pjd0cez.css\">"],e,[{n:"Mad-lib story",o:"605",X:[0]},{n:"Error",o:"651",X:[1]},{n:"Change Cards",o:"711",X:[2]}],
[{o:"621",p:"600px",a:100,Y:700,Z:340,b:100,cA:false,c:"#FFF",L:[],bY:1,d:700,U:{"916":{V:{"569_pressed":"922","569_hover":"920","Main Timeline":"921"},W:"921",n:"0-20-Active"},"918":{V:{"576_hover":"923","Main Timeline":"924"},W:"924",n:"0-100-Active"}},T:{"921":{c:"916",q:false,z:0,i:"921",a:[],n:"Main Timeline",f:30,b:[]},"924":{c:"918",q:false,z:0,i:"924",a:[],n:"Main Timeline",f:30,b:[]},"920":{c:"916",q:false,z:1,i:"920",a:[{f:"c",y:0,z:1,i:"g",e:"#0088B2",s:"#0C617E",o:"917"},{f:"c",y:0,z:1,i:"w",e:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",o:"917"},{y:1,i:"g",s:"#0088B2",z:0,o:"917",f:"c"},{y:1,i:"w",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",z:0,o:"917",f:"c"}],n:"569_hover",f:30,b:[]},"923":{c:"918",q:false,z:1,i:"923",a:[{f:"c",y:0,z:1,i:"g",e:"#0088B2",s:"#0C617E",o:"919"},{f:"c",y:0,z:1,i:"w",e:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"color: rgb(255, 255, 255); font-family: arial; font-size: 14.399999618530273px; font-style: normal; font-variant-caps: normal; letter-spacing: 0.7199999690055847px; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(12, 97, 126); text-decoration: none;\">0 - 100</span><br></font>\n</div>",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 100</span></font>\n</div>",o:"919"},{y:1,i:"g",s:"#0088B2",z:0,o:"919",f:"c"},{y:1,i:"w",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"color: rgb(255, 255, 255); font-family: arial; font-size: 14.399999618530273px; font-style: normal; font-variant-caps: normal; letter-spacing: 0.7199999690055847px; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(12, 97, 126); text-decoration: none;\">0 - 100</span><br></font>\n</div>",z:0,o:"919",f:"c"}],n:"576_hover",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"924"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"921"}]},"620":{q:false,z:0,i:"620",n:"showNext",a:[],f:30,b:[]},"922":{c:"916",q:false,z:0,i:"922",a:[],n:"569_pressed",f:30,b:[]}},bZ:180,O:["914","913","915","917","916","919","918"],n:"Untitled Layout","_":0,v:{"915":{x:"visible",k:"div",c:700,d:60,z:0,a:0,j:"absolute",bF:"913",b:280},"918":{x:"visible",a:360,dB:"button",b:20,j:"absolute",bF:"915",aA:{a:[{p:4,h:"663"},{p:0}]},k:"div",c:120,d:40,z:2,bY:1,aP:"pointer",bZ:180,cA:false,bX:false,cV:[]},"914":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:89,e:1,s:"Objektiv-mk1",t:28,Z:"break-word",w:"Let\u2019s solve some problems.<br>Choose the numbers you want to work with.&nbsp;<br>",bF:"913",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,F:"center",b:0},"917":{b:0,z:19,K:"None",c:108,cP:"button",d:28,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#0C617E",aU:6,P:0,bF:"916",aV:6,j:"absolute",k:"div",aI:8,aJ:8,aK:8,aL:8,A:"#0C617E",B:"#0C617E",aM:"920",r:"inline",C:"#0C617E",Z:"break-word",s:"Objektiv-MK1",aN:"922",D:"#0C617E",t:16,F:"center",G:"#FFF",aP:"pointer",w:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"913":{x:"visible",k:"div",c:700,d:341,z:1,a:0,bS:383,j:"absolute",b:0},"916":{x:"visible",a:220,dB:"button",b:20,j:"absolute",bF:"915",aA:{a:[{p:4,h:"663"},{d:1.1,p:1,g:1,e:"711"}]},k:"div",c:120,d:40,z:6,bY:1,aP:"pointer",bZ:180,cA:false,bX:false,cV:[]},"919":{b:0,z:19,K:"None",c:108,cP:"button",d:28,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#0C617E",aU:6,P:0,bF:"918",aV:6,j:"absolute",k:"div",aI:8,aJ:8,aK:8,aL:8,A:"#0C617E",B:"#0C617E",aM:"923",r:"inline",C:"#0C617E",Z:"break-word",s:"Objektiv-MK1",D:"#0C617E",t:16,F:"center",G:"#FFF",aP:"pointer",w:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 100</span></font>\n</div>",x:"visible",I:"None",a:0,y:"preserve",J:"None"}}},{o:"659",p:"600px",a:100,Y:700,Z:340,b:100,cA:false,c:"#FFF",L:[],bY:1,d:700,U:{"928":{V:{"576_hover":"932","Main Timeline":"933"},W:"933",n:"0-100-Active"},"930":{V:{"569_pressed":"936","569_hover":"934","Main Timeline":"935"},W:"935",n:"0-20-Active"}},T:{"934":{c:"930",q:false,z:1,i:"934",a:[{f:"c",y:0,z:1,i:"g",e:"#0088B2",s:"#0C617E",o:"931"},{f:"c",y:0,z:1,i:"w",e:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",o:"931"},{y:1,i:"g",s:"#0088B2",z:0,o:"931",f:"c"},{y:1,i:"w",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",z:0,o:"931",f:"c"}],n:"569_hover",f:30,b:[]},"935":{c:"930",q:false,z:0,i:"935",a:[],n:"Main Timeline",f:30,b:[]},"932":{c:"928",q:false,z:1,i:"932",a:[{f:"c",y:0,z:1,i:"g",e:"#0088B2",s:"#0C617E",o:"929"},{f:"c",y:0,z:1,i:"w",e:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"color: rgb(255, 255, 255); font-family: arial; font-size: 14.399999618530273px; font-style: normal; font-variant-caps: normal; letter-spacing: 0.7199999690055847px; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(12, 97, 126); text-decoration: none;\">0 - 100</span><br></font>\n</div>",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 100</span></font>\n</div>",o:"929"},{y:1,i:"g",s:"#0088B2",z:0,o:"929",f:"c"},{y:1,i:"w",s:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"color: rgb(255, 255, 255); font-family: arial; font-size: 14.399999618530273px; font-style: normal; font-variant-caps: normal; letter-spacing: 0.7199999690055847px; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(12, 97, 126); text-decoration: none;\">0 - 100</span><br></font>\n</div>",z:0,o:"929",f:"c"}],n:"576_hover",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"933"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"935"}]},"933":{c:"928",q:false,z:0,i:"933",a:[],n:"Main Timeline",f:30,b:[]},"936":{c:"930",q:false,z:0,i:"936",a:[],n:"569_pressed",f:30,b:[]}},bZ:180,O:["926","925","927","931","930","929","928"],n:"Untitled Layout","_":1,v:{"928":{x:"visible",a:360,dB:"button",b:20,j:"absolute",bF:"927",aA:{a:[{p:4,h:"663"},{p:0}]},k:"div",c:120,d:40,z:2,bY:1,aP:"pointer",bZ:180,cA:false,bX:false,cV:[]},"931":{b:0,z:19,K:"None",c:108,cP:"button",d:28,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#0C617E",aU:6,P:0,bF:"930",aV:6,j:"absolute",k:"div",aI:8,aJ:8,aK:8,aL:8,A:"#0C617E",B:"#0C617E",aM:"934",r:"inline",C:"#0C617E",Z:"break-word",s:"Objektiv-MK1",aN:"936",D:"#0C617E",t:16,F:"center",G:"#FFF",aP:"pointer",w:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 20</span></font>\n</div>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"927":{x:"visible",k:"div",c:700,d:60,z:1,a:0,j:"absolute",bF:"925",b:280},"930":{x:"visible",a:220,dB:"button",b:20,j:"absolute",bF:"927",aA:{a:[{p:4,h:"663"},{d:1.1,p:1,g:1,e:"711"}]},k:"div",c:120,d:40,z:6,bY:1,aP:"pointer",bZ:180,cA:false,bX:false,cV:[]},"926":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:35,e:1,s:"Objektiv-mk1",t:28,Z:"break-word",w:"You have to set your words first!",bF:"925",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,F:"center",b:0},"929":{b:0,z:19,K:"None",c:108,cP:"button",d:28,L:"None",M:0,bD:"none",aS:6,N:0,aT:6,dB:"button",O:0,g:"#0C617E",aU:6,P:0,bF:"928",aV:6,j:"absolute",k:"div",aI:8,aJ:8,aK:8,aL:8,A:"#0C617E",B:"#0C617E",aM:"932",r:"inline",C:"#0C617E",Z:"break-word",s:"Objektiv-MK1",D:"#0C617E",t:16,F:"center",G:"#FFF",aP:"pointer",w:"<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n <font face=\"arial\"><span style=\"font-size: 14.399999618530273px; letter-spacing: 0.7199999690055847px;\">0 - 100</span></font>\n</div>",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"925":{x:"visible",k:"div",c:700,d:341,z:1,a:0,bS:383,j:"absolute",b:0}}},{o:"713",A:{a:[{p:4,h:"727"}]},p:"600px",a:100,Y:700,Z:340,b:100,cA:false,c:"#FFF",L:[],bY:1,d:700,U:{},T:{"782":{q:false,z:1,i:"782",n:"Card1",a:[{f:"b",y:0,z:0.15,i:"aY",e:113,s:0,o:"947"},{f:"c",y:0,z:0.15,i:"cY",e:"1",s:"0",o:"950"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"712",p:7}]},o:"782"},{f:"c",y:0,z:0.15,i:"cY",e:"0",s:"1",o:"948"},{f:"c",y:0.15,z:0,i:"aY",e:292,s:113,o:"947"},{y:0.15,i:"cY",s:"1",z:0,o:"950",f:"c"},{f:"b",y:0.15,z:0.15,i:"aY",e:360,s:292,o:"947"},{y:0.15,i:"cY",s:"0",z:0,o:"948",f:"c"},{y:1,i:"aY",s:360,z:0,o:"947",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"aY",s:0,z:0,o:"947",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"950",f:"c"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"712",p:7}]},o:"kTimelineDefaultIdentifier"},{y:0,i:"aY",s:4,z:0,o:"942",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"943",f:"c"}],f:30,b:[]},"787":{q:false,z:1,i:"787",n:"Card2",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"712",p:7}]},o:"787"},{f:"c",y:0,z:0.15,i:"cY",e:"1",s:"0",o:"943"},{f:"b",y:0,z:0.15,i:"aY",e:90,s:4,o:"942"},{f:"c",y:0,z:0.15,i:"cY",e:"0",s:"1",o:"945"},{f:"c",y:0.15,z:0,i:"aY",e:270,s:90,o:"942"},{y:0.15,i:"cY",s:"1",z:0,o:"943",f:"c"},{f:"b",y:0.15,z:0.15,i:"aY",e:364,s:270,o:"942"},{y:0.15,i:"cY",s:"0",z:0,o:"945",f:"c"},{y:1,i:"aY",s:364,z:0,o:"942",f:"c"}],f:30,b:[]},"792":{q:false,z:1,i:"792",n:"Card3",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"712",p:7}]},o:"792"},{f:"c",y:0,z:0.15,i:"cY",e:"1",s:"0",o:"941"},{f:"b",y:0,z:0.15,i:"aY",e:68,s:0,o:"938"},{f:"c",y:0,z:0.15,i:"cY",e:"0",s:"1",o:"940"},{f:"c",y:0.15,z:0,i:"aY",e:247,s:68,o:"938"},{y:0.15,i:"cY",s:"1",z:0,o:"941",f:"c"},{f:"b",y:0.15,z:0.15,i:"aY",e:360,s:247,o:"938"},{y:0.15,i:"cY",s:"0",z:0,o:"940",f:"c"},{y:1,i:"aY",s:360,z:0,o:"938",f:"c"}],f:30,b:[]}},bZ:180,O:["946","937","949","947","944","942","939","938","950","948","943","945","941","940","953","951","952"],n:"Untitled Layout","_":2,v:{"953":{aU:8,G:"#2C4249",c:168,aV:8,r:"inline",d:51,s:"Objektiv-mk1",t:20,Z:"break-word",i:"animalName3",w:"Animal 1 &amp; Animal 2<br>",bF:"938",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:8,F:"center",b:158},"939":{b:0,z:4,K:"Solid",c:193,L:"Solid",d:227,M:3,N:3,dB:"button",O:3,g:"rgba(255, 255, 255, 0.000)",P:3,bF:"938",i:"card3",j:"absolute",k:"div",aI:10,aJ:10,aK:10,aL:10,A:"#A3BAC2",B:"#A3BAC2",C:"#A3BAC2",s:"Objektiv-mk1",D:"#A3BAC2",aA:{a:[{b:"792",p:3,z:false,symbolOid:"712"},{p:4,h:"867"}]},F:"center",aP:"pointer",w:"<font color=\"#2c4249\">Ending Amount<br></font>",x:"visible",I:"Solid",a:0,J:"Solid"},"940":{b:41,aU:8,G:"#000",c:168,aV:8,r:"inline",cY:"1",d:113,s:"Objektiv-mk1",f:0,t:80,Z:"break-word",i:"card3Number",w:"<font color=\"#2c4249\">?</font>",bF:"938",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:9,F:"center",bR:0},"945":{b:41,aU:8,G:"#000",c:168,aV:8,r:"inline",cY:"1",d:113,s:"Objektiv-mk1",f:0,t:80,Z:"break-word",i:"card2Number",w:"<font color=\"#2c4249\">?</font>",bF:"942",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:9,F:"center",bR:0},"951":{aU:8,G:"#2C4249",c:168,aV:8,r:"inline",d:24,s:"Objektiv-mk1",t:20,Z:"break-word",i:"animalName1",w:"Animal 1<br>",bF:"947",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:9,F:"center",b:175},"948":{b:41,aU:8,G:"#000",c:168,aV:8,r:"inline",cY:"1",d:113,s:"Objektiv-mk1",f:0,t:80,Z:"break-word",i:"card1Number",w:"<font color=\"#2c4249\">?</font>",bF:"947",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:9,F:"center",bR:0},"937":{x:"visible",k:"div",c:700,d:341,z:1,a:0,bS:383,j:"absolute",b:0},"943":{b:41,aU:8,G:"#000",c:168,aV:8,r:"inline",cY:"0",d:113,s:"Objektiv-mk1",f:0,t:80,Z:"break-word",w:"<font color=\"#2c4249\">?</font>",bF:"942",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:9,F:"center",bR:0},"946":{aU:8,G:"#2C4249",c:684,aV:8,r:"inline",d:35,e:1,s:"Objektiv-mk1",t:28,Z:"break-word",w:"Flip two cards to reveal your knowns<br>",bF:"937",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:0,F:"center",b:0},"941":{b:41,aU:8,G:"#000",c:168,aV:8,r:"inline",cY:"0",d:113,s:"Objektiv-mk1",f:0,t:80,Z:"break-word",w:"<font color=\"#2c4249\">?</font>",bF:"938",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:9,F:"center",bR:0},"952":{aU:8,G:"#2C4249",c:168,aV:8,r:"inline",d:24,s:"Objektiv-mk1",t:20,Z:"break-word",i:"animalName2",w:"Animal 2<br>",bF:"942",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:9,F:"center",b:175},"949":{b:0,z:6,K:"Solid",c:193,L:"Solid",d:227,M:3,N:3,dB:"button",O:3,g:"rgba(255, 255, 255, 0.000)",P:3,bF:"947",i:"card1",j:"absolute",k:"div",aI:10,aJ:10,aK:10,aL:10,A:"#A3BAC2",B:"#A3BAC2",C:"#A3BAC2",s:"Objektiv-mk1",D:"#A3BAC2",aA:{a:[{b:"782",p:3,z:false,symbolOid:"712"},{p:4,h:"867"}]},F:"center",aP:"pointer",w:"<font color=\"#2c4249\">Starting Amount<br></font>",x:"visible",I:"Solid",a:0,J:"Solid"},"944":{b:0,z:4,K:"Solid",c:193,L:"Solid",d:227,M:3,N:3,dB:"button",O:3,g:"rgba(255, 255, 255, 0.000)",P:3,bF:"942",i:"card2",j:"absolute",k:"div",aI:10,aJ:10,aK:10,aL:10,A:"#A3BAC2",B:"#A3BAC2",r:"inline",C:"#A3BAC2",s:"Objektiv-mk1",D:"#A3BAC2",aA:{a:[{b:"787",p:3,z:false,symbolOid:"712"},{p:4,h:"867"}]},F:"center",aP:"pointer",w:"<font color=\"#2c4249\">Change<br></font>",x:"visible",I:"Solid",a:0,J:"Solid"},"938":{cN:"none",x:"visible",a:500,dB:"button",b:65,j:"absolute",bF:"937",z:3,k:"div",c:199,d:233,cQ:1,aY:0,aP:"auto",f:0,cR:1},"950":{b:41,aU:8,G:"#000",c:168,aV:8,r:"inline",cY:"0",d:113,s:"Objektiv-mk1",f:0,t:80,Z:"break-word",w:"<font color=\"#2c4249\">?</font>",bF:"947",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:9,F:"center",bR:0},"947":{cN:"none",x:"visible",a:0,dB:"button",b:65,j:"absolute",bF:"937",z:5,k:"div",c:199,d:233,cQ:1,aY:0,aP:"auto",f:0,cR:1},"942":{cN:"none",x:"visible",a:250,dB:"button",b:65,j:"absolute",bF:"937",z:4,k:"div",c:199,d:233,cQ:1,aY:4,aP:"auto",f:0,cR:1}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
