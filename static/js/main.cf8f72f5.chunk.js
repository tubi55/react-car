(this["webpackJsonpreact-three-fiber"]=this["webpackJsonpreact-three-fiber"]||[]).push([[0],{31:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var c=i(1),r=i(22),a=i.n(r),s=i(6),n=(i(31),i(8)),o=i(4);var l=function(){var e=Object(n.e)(),t=e.camera,i=e.gl;return Object(o.jsx)("orbitControls",{attach:"orbitControls",args:[t,i.domElement]})},u=i(25),j=i(0),d={cameraPos:new j.Vector3(6,0,7),target:new j.Vector3(0,0,0),shouldUpdate:!0,activeName:"Cube001_0",activeMesh:{}};var b=function(e){var t=Object(n.d)(u.a,e.path),i=t.nodes,r=t.scene;return d.activeMesh=r.getObjectByName(d.activeName),Object(c.useMemo)((function(){Object.values(i).forEach((function(e){e.isMesh&&Object.assign(e,{castShadow:!0})}))}),[i]),Object(o.jsx)("primitive",{object:r,position:e.position,scale:new Array(3).fill(e.scale),dispose:null})};var m=function(){return Object(n.c)((function(e){var t=e.camera,i=e.scene;d.shouldUpdate&&(t.position.lerp(d.cameraPos,.05),i.orbitControls.target.lerp(d.target,.05),i.orbitControls.update(),t.position.clone().sub(d.cameraPos).length()<.1&&(d.shouldUpdate=!1))})),null},p=i(7),O=i(9),h={0:{cameraPos:[7,0,7],target:[0,0,0]},1:{cameraPos:[0,3,10],target:[1,-2,0]},2:{cameraPos:[-7,-1,7],target:[0,0,0]},3:{cameraPos:[-9,0,-2],target:[0,0,0]},4:{cameraPos:[-1,2,-4],target:[0,1,0]},5:{cameraPos:[6,1,-2],target:[1,0,0]}};var x=function(e){var t=Object(c.useRef)(null),i=function(i){var c,r,a,s=t.current.querySelectorAll("li"),n=Object(O.a)(s);try{for(n.s();!(a=n.n()).done;){a.value.classList.remove("on")}}catch(o){n.e(o)}finally{n.f()}s[i].classList.add("on"),(c=d.cameraPos).set.apply(c,Object(p.a)(h[i].cameraPos)),(r=d.target).set.apply(r,Object(p.a)(h[i].target)),d.shouldUpdate=!0,e.setIndex(i)};return Object(o.jsxs)("ul",{className:"cameraBtns",ref:t,children:[Object(o.jsx)("li",{className:"on",onClick:function(){return i(0)},children:"Consect"}),Object(o.jsx)("li",{onClick:function(){return i(1)},children:"Dolor"}),Object(o.jsx)("li",{onClick:function(){return i(2)},children:"Lorem"}),Object(o.jsx)("li",{onClick:function(){return i(3)},children:"Sit amet"}),Object(o.jsx)("li",{onClick:function(){return i(4)},children:"Adipisic"}),Object(o.jsx)("li",{onClick:function(){return i(5)},children:"Corporis"})]})};var f=function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){t.current.querySelectorAll("article").forEach((function(e,t){var i,c=e.querySelector("h2"),r=c.innerText,a="",s=0,n=Object(O.a)(r);try{for(n.s();!(i=n.n()).done;){var o=i.value;a+="<span style='transition-delay: ".concat(.1*s++,"s'>").concat(o,"</span>")}}catch(l){n.e(l)}finally{n.f()}c.innerHTML=a}))}),[]),Object(c.useEffect)((function(){var i,c=t.current.querySelectorAll("article"),r=Object(O.a)(c);try{for(r.s();!(i=r.n()).done;){i.value.classList.remove("on")}}catch(a){r.e(a)}finally{r.f()}c[e.Index].classList.add("on")}),[e.Index]),Object(o.jsxs)("section",{className:"txt",ref:t,children:[Object(o.jsxs)("article",{className:"on",children:[Object(o.jsx)("h2",{children:"Consect"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nihil totam minus, expedita debitis quas! Reiciendis distinctio in fugit molestiae."})]}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:"Dolor"}),Object(o.jsxs)("p",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit enim obcaecati. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Rem id saepe sapiente provident. Itaque dicta explicabo, minima assumenda corporis nemo placeat optio quam consectetur! Vel ad praesentium aspernatur doloremque quae maxime ipsum exercitationem magnam ipsam voluptas?"]})]}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:"Lorem"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi suscipit enim officiis porro, eligendi excepturi repudiandae corrupti molestiae."})]}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:"Sit amet"}),Object(o.jsxs)("p",{children:["Necessitatibus eos maxime eaque quaerat iusto est modi temporibus.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Aliquid quaerat accusamus amet blanditiis deserunt eaque, labore nobis tempore facere minus inventore totam quo nulla doloremque deleniti dolore qui officia consequatur corrupti. ",Object(o.jsx)("br",{}),"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quod!"]})]}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:"Adipisic"}),Object(o.jsxs)("p",{children:["Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"/Soluta deserunt quam impedit, sunt atque similique expedita accusamus omnis, pariatur debitis, perspiciatis adipisci exercitationem natus illum ratione neque id placeat voluptas sed minima odio sint."]})]}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{children:"Corporis"}),Object(o.jsxs)("p",{children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",Object(o.jsx)("br",{}),"Minima iste quo doloremque veritatis assumenda quam reiciendis! Et pariatur delectus dicta asperiores, iste, modi doloribus architecto rerum a omnis molestias."]})]})]})};var v=function(){var e=function(e){d.activeMesh&&(d.activeMesh.material.color=new j.Color(e.target.style.backgroundColor))},t=["#bdf2ee","#c2e699","#c9c0f5"];return Object(o.jsx)("ul",{className:"colorPicker",children:["transparent","#fcfc81","#ea9dff"].map((function(i,c){return Object(o.jsx)("li",{style:{backgroundColor:t[c]},"data-color":i,onClick:e},i)}))})},g=i(26);Object(n.b)({DragControls:g.a});var q=i(27);function y(){var e=Object(c.useRef)(null);return Object(n.c)((function(t){null!==e.current&&(e.current.rotation.x+=.03,e.current.rotation.y+=.03)})),Object(o.jsxs)("mesh",{ref:e,position:[0,0,4],children:[Object(o.jsx)("boxBufferGeometry",{attach:"geometry",args:[2,2,2]}),Object(o.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,opacity:.5,wireframe:!0,color:"#000"})]})}Object(n.b)({OrbitControls:q.a});var C=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),i=t[0],r=t[1];return Object(o.jsxs)("figure",{children:[Object(o.jsx)("h1",{children:"Decode Lab"}),Object(o.jsx)(f,{Index:i}),Object(o.jsx)(x,{setIndex:r}),Object(o.jsx)(v,{}),Object(o.jsxs)(n.a,{shadowMap:!0,style:{background:"#cdcfd3"},camera:{position:[7,7,7]},children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{}),Object(o.jsx)("ambientLight",{color:"white",intensity:1}),Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(y,{}),children:Object(o.jsx)(b,{path:"/react-car/car/scene.gltf",position:[0,-1,4],scale:1})})]})]})};a.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.cf8f72f5.chunk.js.map