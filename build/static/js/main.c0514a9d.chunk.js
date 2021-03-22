(this["webpackJsonppwa-birdifier"]=this["webpackJsonppwa-birdifier"]||[]).push([[0],{288:function(e,n,r){},296:function(e,n){},297:function(e,n){},305:function(e,n){},308:function(e,n){},309:function(e,n){},316:function(e,n,r){"use strict";r.r(n);var a,t,i=r(30),o=r.n(i),c=r(236),l=r.n(c),d=(r(288),r(94)),s=r(95),u=s.a.div(a||(a=Object(d.a)(["\n  min-height:100vh;\n  min-width: 100vw;\n\tfont-size: 10px;   /*1rem = 10px*/\n  /* background-color: #FAFAFF; */\n  background-image: url('pexels-roberto-shumski-1903702.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n  overflow-x: hidden;\n\n  color: #273469; \n\n  display: flex;\n  flex-direction: column;\n"]))),h=s.a.div(t||(t=Object(d.a)(["\n  padding: 1.4rem 0;\n  align-self: center;\n  flex-shrink: 2;\n  @media(min-width: 1024px) {\n    align-self: auto;\n  }\n\n  h1 {\n    margin-left: 1.4rem;\n    font-size: 2rem;\n    \n  }\n"]))),b=r(33);var p,g,f=function(){return Object(b.jsx)(h,{children:Object(b.jsx)("h1",{children:"PWA Birdifier"})})},m=r(3),j=r.n(m),w=r(18),x=r(11),k=r(6),O=r(146),v=s.a.div(p||(p=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: auto;\n  \n  div {\n    flex: 1;\n  }\n\n  @media(min-width: 1024px) {\n    width: 40rem;\n    margin:0 auto;\n  }\n\n  .currentImage {\n    display: flex;\n  }\n\n  .currentImage img {\n    height: auto;\n    min-width: 100%;\n    max-height: 350px;\n    width: auto;\n    align-self: flex-end;\n    border: 1px solid #273469;\n    border-bottom: none;\n  }\n\n  .btn-group, .btn-group-2 {\n    flex-grow: 0;\n  }\n\n  .btn-group button {\n    width: 33.3%;\n    border: 1px solid #273469;\n    padding: 15px 24px; \n    @media(max-width: 350px) {\n      padding: 10px 10px;\n    }\n  }\n\n  .btn-group-2 button {\n    width: 50%;\n    border: 1px solid #273469;\n    padding: 15px 24px; \n    @media(max-width: 350px) {\n      padding: 10px 10px;\n    }\n  }\n\n  .btn-group, .btn-group-2 button:not(:last-child) {\n    border-right: none;\n  }\n\n  button, input > button {\n    background-color: #8884d8;\n    cursor: pointer;\n    color: #FAFAFF;\n    font-family: inherit;\n  }\n"]))),C=r.p+"static/media/bald-eagle-preloaded-v2.8155ad7c.jpg",B=s.a.div(g||(g=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  width: 100%;\n  background-color: #273469;   \n  text-align: center;\n  align-items: center;\n  margin: 0;\n  \n\n  th, td, h2 {\n    color: #FAFAFF;\n  }\n  \n  table {\n    padding-bottom: 20px;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n  }\n\n  th, td {\n    font-size: 1.2rem;\n  }\n\n  button {\n    width: 100%;\n    padding: 15px 24px; \n  }\n\n  .closeBtn {\n    width: 100%;\n  }\n\n"])));var S=function(e){var n=e.classifications,r=e.setRenderResults;return Object(b.jsxs)(B,{children:[Object(b.jsx)("h2",{children:"Results"}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Species"}),Object(b.jsx)("th",{children:"Detection Confidence / %"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:n[0].name}),Object(b.jsx)("td",{children:Math.round(100*(n[0].value+Number.EPSILON))/100})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:n[1].name}),Object(b.jsx)("td",{children:Math.round(100*(n[1].value+Number.EPSILON))/100})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:n[2].name}),Object(b.jsx)("td",{children:Math.round(100*(n[2].value+Number.EPSILON))/100})]})]})]}),Object(b.jsx)("div",{className:"closeBtn",children:Object(b.jsx)("button",{onClick:function(){return r(!1)},children:"Close"})})]})},y=r(259);r(310);var P=function(e){var n=Object(i.useState)(e.imgSrc),r=Object(k.a)(n,2),a=r[0],t=(r[1],Object(i.useState)()),o=Object(k.a)(t,2),c=o[0],l=o[1];return Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(b.jsx)(y.a,{style:{alignSelf:"flex-end",minWidth:"100%",maxHeight:"350px",height:"auto"},initialAspectRatio:1,src:a,viewMode:1,guides:!0,minCropBoxHeight:10,minCropBoxWidth:10,responsive:!0,background:!1,autoCropArea:1,checkOrientation:!1,onInitialized:function(e){l(e)}}),Object(b.jsxs)("div",{id:"crop",className:"btn-group-2",children:[Object(b.jsx)("button",{onClick:function(){return e.setCropImage(!1)},children:"Cancel"}),Object(b.jsx)("button",{onClick:function(){"undefined"!==typeof c&&(e.setImgSrc(c.getCroppedCanvas().toDataURL()),e.setCropImage(!1))},children:"Crop"})]})]})},T={"African Crowned Crane":0,"African Firefinch":1,Albatross:2,"Alexandrine Parakeet":3,"American Avocet":4,"American Bittern":5,"American Coot":6,"American Goldfinch":7,"American Kestrel":8,"American Pipit":9,"American Redstart":10,Anhinga:11,"Annas Hummingbird":12,Antbird:13,"Araripe Manakin":14,"Asian Crested Ibis":15,"Bald Eagle":16,"Bali Starling":17,"Baltimore Oriole":18,Bananaquit:19,"Banded Broadbill":20,"Bar-Tailed Godwit":21,"Barn Owl":22,"Barn Swallow":23,"Barred Puffbird":24,"Bay-Breasted Warbler":25,"Bearded Barbet":26,"Belted Kingfisher":27,"Bird Of Paradise":28,"Black Francolin":29,"Black Skimmer":30,"Black Swan":31,"Black Throated Warbler":32,"Black Vulture":33,"Black-Capped Chickadee":34,"Black-Necked Grebe":35,"Black-Throated Sparrow":36,"Blackburniam Warbler":37,"Blue Grouse":38,"Blue Heron":39,Bobolink:40,"Brown Noody":41,"Brown Thrasher":42,"Cactus Wren":43,"California Condor":44,"California Gull":45,"California Quail":46,Canary:47,"Cape May Warbler":48,Capuchinbird:49,"Carmine Bee-Eater":50,"Caspian Tern":51,Cassowary:52,"Chara De Collar":53,"Chipping Sparrow":54,"Chukar Partridge":55,"Cinnamon Teal":56,"Cock Of The  Rock":57,Cockatoo:58,"Common Firecrest":59,"Common Grackle":60,"Common House Martin":61,"Common Loon":62,"Common Poorwill":63,"Common Starling":64,"Couchs Kingbird":65,"Crested Auklet":66,"Crested Caracara":67,"Crested Nuthatch":68,Crow:69,"Crowned Pigeon":70,"Cuban Tody":71,"Curl Crested Aracuri":72,"D-Arnauds Barbet":73,"Dark Eyed Junco":74,"Downy Woodpecker":75,"Eastern Bluebird":76,"Eastern Meadowlark":77,"Eastern Rosella":78,"Eastern Towee":79,"Elegant Trogon":80,"Elliots  Pheasant":81,"Emperor Penguin":82,Emu:83,"Eurasian Golden Oriole":84,"Eurasian Magpie":85,"Evening Grosbeak":86,"Fire Tailled Myzornis":87,"Flame Tanager":88,Flamingo:89,Frigate:90,"Gambels Quail":91,"Gila Woodpecker":92,"Gilded Flicker":93,"Glossy Ibis":94,"Go Away Bird":95,"Gold Wing Warbler":96,"Golden Cheeked Warbler":97,"Golden Chlorophonia":98,"Golden Eagle":99,"Golden Pheasant":100,"Golden Pipit":101,"Gouldian Finch":102,"Gray Catbird":103,"Gray Partridge":104,"Great Potoo":105,"Greator Sage Grouse":106,"Green Jay":107,"Grey Plover":108,"Guinea Turaco":109,Guineafowl:110,Gyrfalcon:111,"Harpy Eagle":112,"Hawaiian Goose":113,"Helmet Vanga":114,Hoatzin:115,"Hooded Merganser":116,Hoopoes:117,Hornbill:118,"Horned Guan":119,"Horned Sungem":120,"House Finch":121,"House Sparrow":122,"Imperial Shaq":123,"Inca Tern":124,"Indian Bustard":125,"Indian Pitta":126,"Indigo Bunting":127,Jabiru:128,"Java Sparrow":129,"Javan Magpie":130,Kakapo:131,Killdear:132,"King Vulture":133,Kiwi:134,Kookaburra:135,"Lark Bunting":136,"Lears Macaw":137,"Lilac Roller":138,"Long-Eared Owl":139,"Malabar Hornbill":140,"Malachite Kingfisher":141,Maleo:142,"Mallard Duck":143,"Mandrin Duck":144,"Marabou Stork":145,"Masked Booby":146,"Masked Lapwing":147,"Mikado  Pheasant":148,"Mourning Dove":149,Myna:150,"Nicobar Pigeon":151,"Northern Bald Ibis":152,"Northern Cardinal":153,"Northern Flicker":154,"Northern Gannet":155,"Northern Goshawk":156,"Northern Jacana":157,"Northern Mockingbird":158,"Northern Parula":159,"Northern Red Bishop":160,"Ocellated Turkey":161,"Okinawa Rail":162,Osprey:163,Ostrich:164,"Oyster Catcher":165,"Painted Buntig":166,Palila:167,"Paradise Tanager":168,"Parus Major":169,Peacock:170,Pelican:171,"Peregrine Falcon":172,"Philippine Eagle":173,"Pink Robin":174,Puffin:175,"Purple Finch":176,"Purple Gallinule":177,"Purple Martin":178,"Purple Swamphen":179,Quetzal:180,"Rainbow Lorikeet":181,Razorbill:182,"Red Bearded Bee Eater":183,"Red Bellied Pitta":184,"Red Faced Cormorant":185,"Red Faced Warbler":186,"Red Headed Duck":187,"Red Headed Woodpecker":188,"Red Honey Creeper":189,"Red Winged Blackbird":190,"Red Wiskered Bulbul":191,"Ring-Necked Pheasant":192,Roadrunner:193,Robin:194,"Rock Dove":195,"Rosy Faced Lovebird":196,"Rough Leg Buzzard":197,"Ruby Throated Hummingbird":198,"Rufous Kingfisher":199,"Rufuos Motmot":200,"Samatran Thrush":201,"Sand Martin":202,"Scarlet Ibis":203,"Scarlet Macaw":204,Shoebill:205,"Short Billed Dowitcher":206,"Smiths Longspur":207,"Snowy Egret":208,"Snowy Owl":209,Sora:210,"Spangled Cotinga":211,"Splendid Wren":212,"Spoon Biled Sandpiper":213,Spoonbill:214,"Sri Lanka Blue Magpie":215,"Steamer Duck":216,"Stork Billed Kingfisher":217,"Strawberry Finch":218,"Stripped Swallow":219,"Superb Starling":220,"Swinhoes Pheasant":221,"Taiwan Magpie":222,Takahe:223,"Tasmanian Hen":224,"Teal Duck":225,"Tit Mouse":226,Touchan:227,"Townsends Warbler":228,"Tree Swallow":229,"Trumpter Swan":230,"Turkey Vulture":231,"Turquoise Motmot":232,"Umbrella Bird":233,"Varied Thrush":234,"Venezuelian Troupial":235,"Vermilion Flycather":236,"Violet Green Swallow":237,"Vulturine Guineafowl":238,"Wattled Curassow":239,Whimbrel:240,"White Cheeked Turaco":241,"White Necked Raven":242,"White Tailed Tropic":243,"Wild Turkey":244,"Wilsons Bird Of Paradise":245,"Wood Duck":246,"Yellow Bellied Flowerpecker":247,"Yellow Cacique":248,"Yellow Headed Blackbird":249},M=r(261),R=r.n(M);var G=function(){var e=Object(i.useRef)(null),n=Object(i.useState)([{name:"Bald Eagle",value:90},{name:"Golden Eagle",value:7},{name:"Turkey Vulture",value:3}]),r=Object(k.a)(n,2),a=r[0],t=r[1],o=Object(i.useState)(!1),c=Object(k.a)(o,2),l=c[0],d=c[1],s=Object(i.useState)(!1),u=Object(k.a)(s,2),h=u[0],p=u[1],g=Object(i.useState)(!1),f=Object(k.a)(g,2),m=f[0],B=f[1],y=Object(i.useState)(C),M=Object(k.a)(y,2),G=M[0],F=M[1],W=Object(i.useState)(null),A=Object(k.a)(W,2),E=A[0],N=A[1],I="/tfjs_files/model.json",H=Object.keys(T);function D(e){return L.apply(this,arguments)}function L(){return(L=Object(x.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,n.save("indexeddb://my-model");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=N,e.next=4,O.c("indexeddb://my-model");case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=10;break;case 8:e.prev=8,e.t2=e.catch(0);case 10:return e.prev=10,e.t3=N,e.next=14,O.c(I);case 14:return e.t4=e.sent,(0,e.t3)(e.t4),window.indexedDB&&D(E),e.finish(10);case 18:case"end":return e.stop()}}),e,null,[[0,8,10,18]])})))).apply(this,arguments)}function K(e){return e.expandDims(0).toFloat().div(127).sub(1)}function V(e){return O.b.resizeBilinear(e,[224,224])}function J(e){for(var n=[],r=0;r<e.length;r++)n.push({species:H[r],prediction:e[r]});var a=e.indexOf(Math.max.apply(Math,Object(w.a)(e)));e[a]=0;var i=e.indexOf(Math.max.apply(Math,Object(w.a)(e)));e[i]=0;var o=e.indexOf(Math.max.apply(Math,Object(w.a)(e))),c=[{name:n[a].species,value:100*n[a].prediction},{name:n[i].species,value:100*n[i].prediction},{name:n[o].species,value:100*n[o].prediction}];t(c)}Object(i.useEffect)((function(){!function(){z.apply(this,arguments)}()}),[]);var U=function(){var e=Object(x.a)(j.a.mark((function e(){var n,r,a,t,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==m||!E){e.next=22;break}return p(!0),(n=new Image).src=G,e.prev=4,r=O.a.fromPixels(n),a=V(r),t=K(a),i=E.predict(t),e.next=11,i.data();case 11:J(e.sent),p(!1),d(!0),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(4),p(!1),console.log(e.t0),alert("Something went wrong with classification. Try again!");case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(v,{children:[!0===l?Object(b.jsx)(S,{classifications:a,setRenderResults:d}):null,!0===h?Object(b.jsx)(R.a,{color:"#8884d8",style:{margin:"auto",width:"50%"}}):null,!0===m?Object(b.jsx)(P,{setCropImage:B,imgSrc:G,setImgSrc:F}):Object(b.jsx)("div",{className:"currentImage",children:Object(b.jsx)("img",{src:G})}),!1===m?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"btn-group",children:[Object(b.jsx)("button",{onClick:function(){return l&&d(!1),B(!0)},children:"Crop"}),Object(b.jsx)("button",{onClick:function(){return e.current.click()},children:"Select"}),Object(b.jsx)("button",{onClick:function(){return U()},children:"Classify"})]}),Object(b.jsx)("input",{style:{display:"none"},ref:e,type:"file",onChange:function(e){var n;e.preventDefault(),e.dataTransfer?n=e.dataTransfer.files:e.target&&(n=e.target.files);var r=new FileReader;r.onload=function(){F(r.result)};try{r.readAsDataURL(n[0])}catch(a){console.log(a),alert("Something went wrong with image selection. Try again!")}},accept:"image/*"})]}):null]})};var F=function(){return Object(i.useEffect)((function(){document.title="PWA Birdifier"}),[]),Object(b.jsxs)(u,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(G,{})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var E=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,317)).then((function(n){var r=n.getCLS,a=n.getFID,t=n.getFCP,i=n.getLCP,o=n.getTTFB;r(e),a(e),t(e),i(e),o(e)}))};l.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");W?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var a=r.headers.get("content-type");404===r.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):A(n,e)}))}}(),E()}},[[316,1,2]]]);
//# sourceMappingURL=main.c0514a9d.chunk.js.map