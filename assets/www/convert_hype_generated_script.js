//	HYPE.documents["convert"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "convert.hyperesources";
	var documentName = "convert";
	var documentLoaderFilename = "convert_hype_generated_script.js";
	var mainContainerID = "convert_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"area.png",p:1},"12":{n:"paperrexture%20%281%29-1.png",p:1},"21":{n:"paperrexture%20%281%29-3.png",p:1},"4":{n:"lineareq.png",p:1},"30":{n:"perfect_square_trinomials.jpg",p:1},"13":{n:"equation_of_circle.jpg",p:1},"5":{n:"mass.png",p:1},"22":{n:"next-3.png",p:1},"6":{n:"next.png",p:1},"31":{n:"paperrexture%20%281%29-6.png",p:1},"14":{n:"mid_point_formula.jpg",p:1},"7":{n:"paperrexture%20%281%29.png",p:1},"23":{n:"next-4.png",p:1},"40":{n:"next-8.png",p:1},"32":{n:"backbutton1-6.png",p:1},"15":{n:"paperrexture%20%281%29-2.png",p:1},"8":{n:"dif_two_squares.jpg",p:1},"24":{n:"backbutton1-4.png",p:1},"9":{n:"distance_formula.jpg",p:1},"33":{n:"standard_form_linear.jpg",p:1},"16":{n:"next-2.png",p:1},"41":{n:"backbutton1-8.png",p:1},"25":{n:"paperrexture%20%281%29-4.png",p:1},"42":{n:"sum_dif_two_cubes.jpg",p:1},"34":{n:"next-6.png",p:1},"17":{n:"pointslope.jpg",p:1},"43":{n:"paperrexture%20%281%29-9.png",p:1},"26":{n:"slope_intercept.jpg",p:1},"35":{n:"next-7.png",p:1},"18":{n:"backbutton1-2.png",p:1},"44":{n:"backbutton1-9.png",p:1},"27":{n:"paperrexture%20%281%29-5.png",p:1},"36":{n:"std-vertex-form.jpg",p:1},"19":{n:"pythagoras1.jpg",p:1},"45":{n:"sum_two_squares.jpg",p:1},"28":{n:"backbutton1-5.png",p:1},"37":{n:"paperrexture%20%281%29-7.png",p:1},"46":{n:"linear-equation-solver.js"},"29":{n:"next-5.png",p:1},"38":{n:"backbutton1-7.png",p:1},"39":{n:"paperrexture%20%281%29-8.png",p:1},"10":{n:"backbutton1-1.png",p:1},"0":{n:"forumla%20%282%29.png",p:1},"1":{n:"factorcalc.png",p:1},"11":{n:"next-1.png",p:1},"2":{n:"length.png",p:1},"20":{n:"backbutton1-3.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"7":{o:"content-box",h:"0",x:"visible",a:282,q:"100% 100%",b:132,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"30"}],k:"div",c:145,d:37,z:"7",aP:"pointer"},"3":{o:"content-box",w:"",h:"1",a:72,x:"visible",q:"100% 100%",b:198,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"22"}],k:"div",c:151,d:28,z:"10",aP:"pointer"},"4":{o:"content-box",h:"5",x:"visible",a:74,q:"100% 100%",b:132,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"14"}],k:"div",c:125,d:33,z:"6",aP:"pointer"},"92":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"3",d:360},"5":{o:"content-box",h:"3",x:"visible",a:74,q:"100% 100%",b:53,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"10"}],k:"div",c:125,d:33,z:"4",aP:"pointer"},"6":{o:"content-box",h:"2",x:"visible",a:292,q:"100% 100%",b:53,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"12"}],k:"div",c:125,d:33,z:"5",aP:"pointer"},"2":{o:"content-box",h:"4",x:"visible",a:282,q:"100% 100%",b:197,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"18"}],k:"div",c:152,d:28,z:"9",aP:"pointer"}},n:"convert",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"8"},{x:1,p:"600px",c:"#FFFFFF",v:{"91":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"3",d:360},"9":{I:"None",x:"visible",J:"None",a:26,b:75,j:"absolute",K:"None",c:428,k:"div",z:"4",d:170,L:"None",U:"htmlwidget.html",V:"0",W:""},"99":{o:"content-box",h:"10",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"8"}],k:"div",c:48,d:48,z:"5",aP:"pointer"}},n:"aera",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"10"},{x:2,p:"600px",c:"#FFFFFF",v:{"90":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"3",d:360},"11":{I:"None",x:"visible",J:"None",a:26,b:81,j:"absolute",K:"None",c:428,k:"div",z:"4",d:170,L:"None",U:"htmlwidget-1.html",V:"0",W:""},"98":{o:"content-box",h:"10",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"8"}],k:"div",c:48,d:48,z:"5",aP:"pointer"}},n:"length",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"12"},{x:3,p:"600px",c:"#FFFFFF",v:{"89":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"3",d:360},"97":{o:"content-box",h:"10",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"8"}],k:"div",c:48,d:48,z:"5",aP:"pointer"},"13":{I:"None",x:"visible",J:"None",a:26,b:75,j:"absolute",K:"None",c:428,k:"div",z:"4",d:170,L:"None",U:"htmlwidget-2.html",V:"0",W:""}},n:"mass",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"14"},{x:4,p:"600px",c:"#FFFFFF",v:{"88":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"3",d:360},"96":{o:"content-box",h:"10",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneOid:"8"}],k:"div",c:48,d:48,z:"5",aP:"pointer"},"17":{I:"None",x:"visible",J:"None",a:60,b:16,j:"absolute",K:"None",c:391,k:"div",z:"4",d:288,L:"None",U:"htmlwidget-3.html",V:"0",W:""}},n:"linner",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"18"},{x:5,p:"600px",c:"#FFFFFF",v:{"86":{I:"None",x:"visible",J:"None",a:90,b:0,j:"absolute",K:"None",c:300,k:"div",z:"2",d:284,L:"None",U:"htmlwidget-4.html",V:"0",W:""},"87":{o:"content-box",h:"7",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360},"95":{o:"content-box",h:"10",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,sceneOid:"8",transition:1}],k:"div",c:48,d:48,z:"3",aP:"pointer"}},n:"factor",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"22"},{x:6,p:"600px",c:"#FFFFFF",v:{"29":{o:"content-box",h:"9",x:"visible",a:273,q:"100% 100%",b:88,j:"absolute",r:"inline",c:185,k:"div",z:"5",d:143},"25":{o:"content-box",h:"6",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"24":{aV:8,w:"Distance Formula:\n",x:"visible",a:290,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"7",k:"div",b:63,aT:8,aS:8,t:16,aU:8,G:"#000000"},"27":{o:"content-box",h:"8",x:"visible",a:78,q:"100% 100%",b:97,j:"absolute",r:"inline",c:146,k:"div",z:"4",d:20},"23":{aV:8,w:"Difference of Squares:",x:"visible",a:64,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"6",k:"div",b:63,aT:8,aS:8,t:16,aU:8,G:"#000000"},"26":{o:"content-box",w:"\n\n\n\n\n\n",h:"7",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360}},n:"rich",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"30"},{x:7,p:"600px",c:"#FFFFFF",v:{"34":{aV:8,w:"Equation of a Circle:\n",x:"visible",a:160,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"6",k:"div",b:38,aT:8,aS:8,t:16,aU:8,G:"#000000"},"33":{o:"content-box",h:"10",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"32":{o:"content-box",h:"13",x:"visible",a:134,q:"100% 100%",b:71,j:"absolute",r:"inline",c:212,k:"div",z:"5",d:177},"35":{o:"content-box",h:"11",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"31":{o:"content-box",h:"12",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360}},n:"rich2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"36"},{x:8,p:"600px",c:"#FFFFFF",v:{"39":{aV:8,w:"Midpoint Formula:\n",x:"visible",a:75,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"8",k:"div",b:54,aT:8,aS:8,t:16,aU:8,G:"#000000"},"42":{o:"content-box",h:"17",x:"visible",a:235,q:"100% 100%",b:87,j:"absolute",r:"inline",c:239,k:"div",z:"6",d:37},"37":{o:"content-box",h:"14",x:"visible",a:75,q:"100% 100%",b:87,j:"absolute",r:"inline",c:144,k:"div",z:"4",d:39},"40":{o:"content-box",h:"16",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"43":{o:"content-box",h:"18",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"38":{o:"content-box",w:"",h:"15",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360},"41":{aV:8,w:"Point Slope Formula:\n",x:"visible",a:261,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"9",k:"div",b:53,aT:8,aS:8,t:16,aU:8,G:"#000000"}},n:"rich2 Copy",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"44"},{x:9,p:"600px",c:"#FFFFFF",v:{"46":{o:"content-box",h:"22",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"49":{aV:8,w:"<b style=\"color: rgb(0, 0, 0); font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-style: normal; font-variant: normal; text-align: left; text-transform: none; text-indent: 0px; line-height: normal; letter-spacing: normal; white-space: normal; word-spacing: 0px; background-color: rgb(255, 255, 255); \">Pythagorean Theorem :</b><br>",x:"visible",a:142,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:40,aT:8,aS:8,t:16,aU:8,G:"#000000"},"45":{o:"content-box",h:"19",x:"visible",a:131,q:"100% 100%",b:81,j:"absolute",r:"inline",c:218,k:"div",z:"4",d:158},"48":{o:"content-box",w:"",h:"21",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360},"47":{o:"content-box",h:"20",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"}},n:"rich2 Copy 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"50"},{x:10,p:"600px",c:"#FFFFFF",v:{"51":{o:"content-box",h:"24",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"54":{aV:8,w:"Slope-intercept Formula:\n",x:"visible",a:144,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:16,aT:8,aS:8,t:16,aU:8,G:"#000000"},"53":{o:"content-box",h:"25",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360},"52":{o:"content-box",h:"26",x:"visible",a:141,q:"100% 100%",b:61,j:"absolute",r:"inline",c:198,k:"div",z:"4",d:198},"55":{o:"content-box",h:"23",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"}},n:"rich2 Copy 3",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"56"},{x:11,p:"600px",c:"#FFFFFF",v:{"58":{o:"content-box",h:"29",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"57":{aV:8,w:"<b style=\"color: rgb(0, 0, 0); font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-style: normal; font-variant: normal; text-align: left; text-transform: none; text-indent: 0px; line-height: normal; letter-spacing: normal; white-space: normal; word-spacing: 0px; background-color: rgb(255, 255, 255); \">Perfect Square Trinomial Formula:</b><br>",x:"visible",a:102,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:103,aT:8,aS:8,t:16,aU:8,G:"#000000"},"61":{o:"content-box",h:"30",x:"visible",a:136,q:"100% 100%",b:143,j:"absolute",r:"inline",c:208,k:"div",z:"4",d:73},"59":{o:"content-box",h:"28",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"60":{o:"content-box",h:"27",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360}},n:"rich2 Copy 3 Copy",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"62"},{x:12,p:"600px",c:"#FFFFFF",v:{"63":{o:"content-box",h:"31",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360},"66":{o:"content-box",h:"34",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"65":{o:"content-box",h:"33",x:"visible",a:172,q:"100% 100%",b:81,j:"absolute",r:"inline",c:213,k:"div",z:"4",d:173},"64":{o:"content-box",h:"32",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"67":{aV:8,w:"Standard Form (Linear):\n",x:"visible",a:186,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:47,aT:8,aS:8,t:16,aU:8,G:"#000000"}},n:"rich2 Copy 3 Copy 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"68"},{x:13,p:"600px",c:"#FFFFFF",v:{"71":{o:"content-box",h:"35",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"69":{o:"content-box",h:"38",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"70":{aV:8,w:"Standard (Vertex) Form:\n",x:"visible",a:147,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:23,aT:8,aS:8,t:16,aU:8,G:"#000000"},"73":{o:"content-box",h:"37",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360},"72":{o:"content-box",h:"36",x:"visible",a:78,q:"100% 100%",b:65,j:"absolute",r:"inline",c:323,k:"div",z:"4",d:189}},n:"rich2 Copy 3 Copy 3",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"74"},{x:14,p:"600px",c:"#FFFFFF",v:{"75":{o:"content-box",h:"41",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"78":{aV:8,w:"Sum and Difference of Two Cubes:\n",x:"visible",a:108,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:47,aT:8,aS:8,t:16,aU:8,G:"#000000"},"77":{o:"content-box",h:"40",x:"visible",a:416,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:1}],k:"div",c:48,d:48,z:"2",aP:"pointer"},"76":{o:"content-box",h:"42",x:"visible",a:119,q:"100% 100%",b:87,j:"absolute",r:"inline",c:242,k:"div",z:"4",d:186},"79":{o:"content-box",h:"39",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360}},n:"rich2 Copy 3 Copy 3 Copy",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"80"},{x:15,p:"600px",c:"#FFFFFF",v:{"83":{o:"content-box",h:"45",x:"visible",a:122,q:"100% 100%",b:137,j:"absolute",r:"inline",c:263,k:"div",z:"4",d:31},"82":{o:"content-box",h:"44",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",aA:[{type:1,transition:1,sceneSymbol:2}],k:"div",c:48,d:48,z:"3",aP:"pointer"},"81":{aV:8,w:"Sum of Squares:\n",x:"visible",a:187,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"5",k:"div",b:82,aT:8,aS:8,t:16,aU:8,G:"#000000"},"84":{o:"content-box",h:"43",x:"visible",a:0,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:480,k:"div",z:"1",d:360}},n:"rich2 Copy 3 Copy 3 Copy 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"85"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

