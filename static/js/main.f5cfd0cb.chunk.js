(this["webpackJsonpfamily-tree-editor"]=this["webpackJsonpfamily-tree-editor"]||[]).push([[0],{32:function(e,t,a){},40:function(e){e.exports=JSON.parse('{"a":"0.9.0"}')},45:function(e,t,a){e.exports=a(83)},50:function(e,t,a){},77:function(e,t,a){},8:function(e){e.exports=JSON.parse('{"configurations":{"title":"Manappallil Family Tree","orientation":"vertical","translateX":328.4199951171875,"translateY":250,"pathFunc":"step","renderCustomNodeElement":"svg","collapsible":true,"shouldCollapseNeighborNodes":false,"initialDepth":1,"depthFactor":null,"zoomable":true,"zoom":1,"scaleExtent":{"min":0.1,"max":1},"separation":{"siblings":1.25,"nonSiblings":2},"nodeSize":{"x":200,"y":125},"enableLegacyTransitions":true,"transitionDuration":500,"styles":{"nodes":{"node":{"circle":{"fill":"#52e2c5"},"attributes":{"stroke":"#000"}},"leafNode":{"circle":{"fill":"transparent"},"attributes":{"stroke":"#000"}}}}},"tree":{"name":"Cheriyan Alintethekkathil Pandalam","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[{"name":"Gheevarghese Cheriyan","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[{"name":"M. G. Cheria","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[{"name":"Cheriyan Geevarghese (Unnunni)","attributes":{"Date Of Birth":"1887","Date Of Death":"11.07.1965"},"children":[{"name":"M.V. Mariamma","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"M.V. Ammini","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"M.V. John","attributes":{"Date Of Birth":"1923","Date Of Death":"23.03.1984"},"children":[{"name":"Saramma John (Susan)","attributes":{"Date Of Birth":"23.03.1952"},"children":[]}]},{"name":"M.V. Daniel (Dani)","attributes":{"Date Of Birth":"1926","Date Of Death":"16.04.1979"},"children":[]},{"name":"M.V. Abraham (Kunjumon)","attributes":{"Date Of Birth":"30.04.1929"},"children":[]},{"name":"M.V. Annamma","attributes":{"Date Of Birth":"23.07.1931","Date pf death":"31.05.2010"},"children":[]},{"name":"M.V. Aachenkunju","attributes":{"Date Of Birth":"1933","Date pf death":"1938"},"children":[]},{"name":"M.V. Issac (Kuttachen)","attributes":{"Date Of Birth":"19.05.1935"},"children":[]}]},{"name":"Annamma Cheria","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Mariamma Cheria","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[{"name":"Rachel John","attributes":{"Date Of Birth":"15.08.1954"},"children":[]},{"name":"Saly John","attributes":{"Date Of Birth":"02.10.1956"},"children":[]},{"name":"Varghese John (Georgekutty)","attributes":{"Date Of Birth":"unknown"},"children":[]},{"name":"Issac John (Biju)","attributes":{"Date Of Birth":"25.07.1960"},"children":[]},{"name":"Siju Elizabeth John","attributes":{"Date Of Birth":"19.04.19730"},"children":[]}]}]},{"name":"M. G. Tommy","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[{"name":"Aleyamma Tommy","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Kunjamma Tommy","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Aachiamma Tommy","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Rachel Tommy","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Geevarghese Tommy (Unnunni)","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Samuel Tommy (Unnunni)","attributes":{"Date Of Birth":"Unknown","Date Of Death":"1971"},"children":[]},{"name":"Abraham Tommy","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]}]},{"name":"M. G. Cheriyan","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"M. G. John (Ranger)","attributes":{"Date Of Birth":"1868","Date Of Death":"18.09.1941"},"children":[]},{"name":"M. G. Easow","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"M. G. Geevarghese (Writer)","attributes":{"Date Of Birth":"1872","Date Of Death":"13.09.1941"},"children":[]},{"name":"M. G. Mathen","attributes":{"Date Of Birth":"Unknown","Date Of Death":"30.08.1943"},"children":[]},{"name":"Rev. Fr. M. G. Jacob","attributes":{"Date Of Birth":"1883","Date Of Death":"19.01.1960"},"children":[]},{"name":"M.G. Daniel","attributes":{"Date Of Birth":"1889","Date Of Death":"12.06.1965"},"children":[]}]},{"name":"Mathai Cheriyan","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[{"name":"Kochumathai","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Aleyamma Mathai","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]},{"name":"Mariamma Mathai","attributes":{"Date Of Birth":"Unknown","Date Of Death":"Unknown"},"children":[]}]}]}}')},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),i=a.n(o),l=(a(50),a(18)),s=a(3),c=a(4),m=a(6),u=a(5),h=a(29),d=a(13),p=a(2),b=a(28),f=a.n(b),g=a(40),E=(a(77),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.variable,a=e.name,n=e.onChange,o=e.checked;return r.a.createElement("div",{className:"onoffswitch"},r.a.createElement("input",Object.assign({type:"checkbox",className:"onoffswitch-checkbox",id:a,name:a,onChange:n,checked:o},t)),r.a.createElement("label",{className:"onoffswitch-label",htmlFor:a},r.a.createElement("span",{className:"onoffswitch-inner"}),r.a.createElement("span",{className:"onoffswitch-switch"})))}}]),a}(n.Component)),N=function(e){var t=e.nodeData,a=void 0===t?{}:t,n=e.triggerNodeToggle,o=e.foreignObjectProps,i=void 0===o?{}:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{r:20}),r.a.createElement("foreignObject",i,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid black",paddingBottom:"1rem",backgroundColor:"rgb(248, 248, 255)"}},r.a.createElement("h3",null,a.name),r.a.createElement("ul",{style:{listStyleType:"none",padding:0}},a.attributes&&Object.keys(a.attributes).map((function(e,t){return r.a.createElement("li",{key:"".concat(e,"-").concat(t)},e,": ",a.attributes[e])}))),a.children&&r.a.createElement("button",{style:{textAlign:"center"},onClick:n},a.__rd3t.collapsed?"\u2b05\ufe0f \u27a1\ufe0f Expand":"\u27a1\ufe0f \u2b05\ufe0f Collapse"))))},y={vertical:{title:{textAnchor:"start",x:40},attributes:{},attribute:{x:40,dy:"1.2em"}},horizontal:{title:{textAnchor:"start",y:40},attributes:{x:0,y:40},attribute:{x:0,dy:"1.2em"}}},v=function(e){var t=e.nodeDatum,a=e.orientation,n=e.toggleNode,o=e.onNodeClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{r:20,onClick:n}),r.a.createElement("g",{className:"rd3t-label"},r.a.createElement("text",Object.assign({className:"rd3t-label__title"},y[a].title,{onClick:o}),t.name),r.a.createElement("text",Object.assign({className:"rd3t-label__attributes"},y[a].attributes),t.attributes&&Object.entries(t.attributes).map((function(e,t){var n=Object(h.a)(e,2),o=n[0],i=n[1];return r.a.createElement("tspan",Object.assign({key:"".concat(o,"-").concat(t)},y[a].attribute),o,": ",i)})))))},D=(a(32),a(8)),O=a(41),C=a(20),k=a.n(C),w=k.a.mark(M),S=/1(\.[1-9]+)*$/,x=/(1(\.[1-9]+)*)\.[1-9]+$/;function j(e,t,a){if(!(a in t))throw Error("Entry:\n\n".concat(e,"\n\nmust have a '").concat(a,"' defined"));var n=t[a];return delete t[a],n}function F(e){if(0===e.trim().length)return null;var t={},a=e.trim().split("\n");if(0===a.length)return null;a.map((function(e){return e.split("=")})).forEach((function(a){if(2!==a.length)throw Error('Malformed line "'.concat(a.join("="),'" in entry:\n\n').concat(e,"\n\nThe expected format is: property=value"));if(a[0]in t)throw Error("Entry:\n\n".concat(e,"\n\nhas a duplicate property ").concat(a[0],"'"));t[a[0]]=(a[1]||"").trim()}));var n=j(e,t,"id"),r=j(e,t,"name");if(!n.match(S))throw Error('id must match pattern "'.concat(S,'" (eg: 1.2.1), but instead ').concat(n," was found"));var o=n.match(x);return{id:n,parentId:o&&o.length>1?o[1]:null,data:{name:r,attributes:t,children:[]}}}function z(e){var t={};e.replace("\r","").split("\n\n").map(F).filter((function(e){return null!=e})).forEach((function(e){if(e.id in t)throw Error("Duplicate id found: ".concat(e.id));t[e.id]=e}));var a=null;if(Object.values(t).forEach((function(e){if(e.parentId){if(!(e.parentId in t))throw Error("Found an entry with 'id=".concat(e.id,"' but no parent exists with 'id=").concat(e.parentId,"'"));t[e.parentId].data.children.push(e.data)}else{if("1"!==e.id)throw Error("The original ancestor must have an id=1 .\n          All other entries must be descendents (eg. 1.1, 1.2, 1.2.1, etc).\n          But an entry was found with 'id=".concat(e.id,"'"));a=e.data}})),null===a)throw Error("At least one entry must exist with id=1 to represent the original ancestor.");return a}function B(e){return"id=".concat(e.id,"\nname=").concat(e.node.name,"\n").concat(e.node.attributes?Object.entries(e.node.attributes).map((function(e){return e.join("=")+"\n"})).join(""):"")}function M(e){var t,a;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=[{id:"1",node:e}],a=k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.shift(),e.next=3,a;case 3:a.node.children&&a.node.children.forEach((function(e,n){t.push({id:"".concat(a.id,".").concat(n+1),node:e})}));case 4:case"end":return e.stop()}}),e)}));case 2:if(!(t.length>0)){n.next=6;break}return n.delegateYield(a(),"t0",4);case 4:n.next=2;break;case 6:case"end":return n.stop()}}),w)}var U=D.tree,T=D.configurations,A={svg:{description:"Default - Pure SVG node & label (IE11 compatible)",fn:function(e,t){return r.a.createElement(v,{nodeDatum:e.nodeDatum,toggleNode:e.toggleNode,orientation:t.orientation})}},mixed:{description:"MixedNodeElement - SVG `circle` + `foreignObject` label",fn:function(e,t){var a=e.nodeDatum,n=e.toggleNode;return r.a.createElement(N,{nodeData:a,triggerNodeToggle:n,foreignObjectProps:{width:t.nodeSize.x,height:t.nodeSize.y,x:-50,y:50}})}}},V=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1?arguments[1]:void 0;return t+=1,a.children?a.children.reduce((function(t,a){return e(t,a)}),t):t};function P(){var e=window.location.href.match(/https:\/\/(.*)\.github.io\/(.*)\//);if(!e||e.length<3)return"https://github.com/reubenjohn/family-tree-editor/edit/master/src/data/data.json";var t=e[1],a=e[2];return"https://github.com/".concat(t,"/").concat(a,"/edit/master/src/data/data.json")}var G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n,r;return Object(s.a)(this,a),(n=t.call(this,e)).generateConfigs=function(){return{title:n.state.title,orientation:n.state.orientation,translateX:n.state.translateX,translateY:n.state.translateY,pathFunc:n.state.pathFunc,renderCustomNodeElement:n.state.renderCustomNodeElement,collapsible:n.state.collapsible,shouldCollapseNeighborNodes:n.state.shouldCollapseNeighborNodes,initialDepth:n.state.initialDepth,depthFactor:n.state.depthFactor,zoomable:n.state.zoomable,zoom:n.state.zoom,scaleExtent:n.state.scaleExtent,separation:n.state.separation,nodeSize:n.state.nodeSize,enableLegacyTransitions:n.state.enableLegacyTransitions,transitionDuration:n.state.transitionDuration,styles:n.state.styles}},n.generateDataAndConfigurations=function(){return{configurations:n.generateConfigs(),tree:n.state.data}},n.handleCustomNodeFnChange=function(e){var t=e.target.value;n.setState({renderCustomNodeElement:t})},n.toggleCollapseNeighborNodes=function(){n.setState((function(e){return{shouldCollapseNeighborNodes:!e.shouldCollapseNeighborNodes}}))},n.state=Object(l.a)({data:U,proposedAncestry:(r=U,Object(O.a)(M(r)).map(B).join("\n")),totalNodeCount:V(0,Array.isArray(U)?U[0]:U)},T),n.setTitle=n.setTitle.bind(Object(p.a)(n)),n.setOrientation=n.setOrientation.bind(Object(p.a)(n)),n.setPathFunc=n.setPathFunc.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleFloatChange=n.handleFloatChange.bind(Object(p.a)(n)),n.toggleCollapsible=n.toggleCollapsible.bind(Object(p.a)(n)),n.toggleZoomable=n.toggleZoomable.bind(Object(p.a)(n)),n.setScaleExtent=n.setScaleExtent.bind(Object(p.a)(n)),n.setSeparation=n.setSeparation.bind(Object(p.a)(n)),n.setNodeSize=n.setNodeSize.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"setTitle",value:function(e){this.setState({title:e})}},{key:"setOrientation",value:function(e){this.setState({orientation:e})}},{key:"setPathFunc",value:function(e){this.setState({pathFunc:e})}},{key:"handleChange",value:function(e){var t=e.target,a=parseInt(t.value,10);""===t.value?this.setState(Object(d.a)({},t.name,void 0)):isNaN(a)||this.setState(Object(d.a)({},t.name,a))}},{key:"handleFloatChange",value:function(e){var t=e.target,a=parseFloat(t.value);""===t.value?this.setState(Object(d.a)({},t.name,void 0)):isNaN(a)||this.setState(Object(d.a)({},t.name,a))}},{key:"toggleCollapsible",value:function(){this.setState((function(e){return{collapsible:!e.collapsible}}))}},{key:"toggleZoomable",value:function(){this.setState((function(e){return{zoomable:!e.zoomable}}))}},{key:"setScaleExtent",value:function(e){this.setState({scaleExtent:e})}},{key:"setSeparation",value:function(e){isNaN(e.siblings)||isNaN(e.nonSiblings)||this.setState({separation:e})}},{key:"setNodeSize",value:function(e){isNaN(e.x)||isNaN(e.y)||this.setState({nodeSize:e})}},{key:"componentDidMount",value:function(){var e=this.treeContainer.getBoundingClientRect();this.setState({translate:{x:e.width/2.5,y:e.height/2}})}},{key:"tryUpdateAncestry",value:function(e){this.setState({proposedAncestry:e});try{this.setState({data:z(e),totalNodeCount:V(0,Array.isArray(D)?D[0]:D),ancestryParsingError:null})}catch(t){this.setState({ancestryParsingError:t.message})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"demo-container"},r.a.createElement("div",{className:"column-left"},r.a.createElement("div",{className:"controls-container"},r.a.createElement("div",{className:"prop-container"},r.a.createElement("h2",{className:"title"},"Family Tree Editor"),r.a.createElement("h3",{className:"title"},"v",g.a),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h3",{className:"prop"},"Save"),"Save your changes to avoid loosing your data.",r.a.createElement("br",null),r.a.createElement("h5",null,"Steps to save your changes"),r.a.createElement("ol",null,r.a.createElement("li",null,"Create a copy of this website (you only need to do this once)"),r.a.createElement("li",null,"Copy all your changes using the 'Copy Tree & Configurations' button below"),r.a.createElement("li",null,"Open your ",r.a.createElement("a",{href:P(),target:"_blank",rel:"noopener noreferrer"},"data file")," and paste your changes there.",r.a.createElement("br",null),"Finally, hit the 'Commit changes' button at the bottom."),r.a.createElement("li",null,"If all goes well, your changes should reflect in a few minutes once you refresh the page.")),r.a.createElement("textarea",{style:{width:"100%"},value:JSON.stringify(this.generateDataAndConfigurations(),null,2),disabled:!0}),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:function(){return navigator.clipboard.writeText(JSON.stringify(e.generateDataAndConfigurations(),null,2))}},"Copy Tree & Configurations")),r.a.createElement("h4",{className:"prop"},"Ancestry"),r.a.createElement("div",{style:{marginBottom:"5px"}},r.a.createElement("textarea",{style:{width:"100%",color:this.state.ancestryParsingError?"red":"black"},rows:12,value:this.state.proposedAncestry,onChange:function(t){return e.tryUpdateAncestry(t.target.value)}}),this.state.ancestryParsingError&&r.a.createElement("pre",{style:{color:"red"}},this.state.ancestryParsingError))),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h3",{className:"prop"},"Configurations"),r.a.createElement("h4",{className:"prop"},"Title"),r.a.createElement("input",{type:"text",value:this.state.title,onChange:function(t){return e.setTitle(t.target.value)}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Orientation"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setOrientation("horizontal")}},"Horizontal"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setOrientation("vertical")}},"Vertical")),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Path Function"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("diagonal")}},"Diagonal"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("elbow")}},"Elbow"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("straight")}},"Straight"),r.a.createElement("button",{type:"button",className:"btn btn-controls btn-block",onClick:function(){return e.setPathFunc("step")}},"Step")),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"customNodeElement"},"Custom Node Element"),r.a.createElement("select",{className:"form-control",onChange:this.handleCustomNodeFnChange},Object.entries(A).map((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1].description;return r.a.createElement("option",{key:a,value:a},n)})))),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Collapsible"),r.a.createElement(E,{name:"collapsibleBtn",checked:this.state.collapsible,onChange:this.toggleCollapsible})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Collapse neighbor nodes"),r.a.createElement(E,{name:"collapseNeighborsBtn",checked:this.state.shouldCollapseNeighborNodes,onChange:this.toggleCollapseNeighborNodes})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("h4",{className:"prop"},"Enable Legacy Transitions"),r.a.createElement(E,{name:"enableLegacyTransitionsBtn",checked:this.state.enableLegacyTransitions,onChange:function(){return e.setState((function(e){return{enableLegacyTransitions:!e.enableLegacyTransitions}}))}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("div",null,r.a.createElement("label",{className:"prop",htmlFor:"translateX"},"Translate X"),r.a.createElement("input",{className:"form-control",name:"translateX",type:"number",value:this.state.translateX,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{className:"prop",htmlFor:"translateY"},"Translate Y"),r.a.createElement("input",{className:"form-control",name:"translateY",type:"number",value:this.state.translateY,onChange:this.handleChange}))),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"initialDepth"},"Initial Depth"),r.a.createElement("input",{className:"form-control",style:{color:"grey"},name:"initialDepth",type:"text",value:this.state.initialDepth,onChange:this.handleChange})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"depthFactor"},"Depth Factor"),r.a.createElement("input",{className:"form-control",name:"depthFactor",type:"number",defaultValue:this.state.depthFactor,onChange:this.handleChange})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"zoom"},"Zoom"),r.a.createElement("input",{className:"form-control",name:"zoom",type:"number",defaultValue:this.state.zoom,onChange:this.handleFloatChange})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("span",{className:"prop prop-large"},"Scale Extent"),r.a.createElement("label",{className:"sub-prop",htmlFor:"scaleExtentMin"},"Min"),r.a.createElement("input",{className:"form-control",name:"scaleExtentMin",type:"number",defaultValue:this.state.scaleExtent.min,onChange:function(t){return e.setScaleExtent({min:parseFloat(t.target.value),max:e.state.scaleExtent.max})}}),r.a.createElement("label",{className:"sub-prop",htmlFor:"scaleExtentMax"},"Max"),r.a.createElement("input",{className:"form-control",name:"scaleExtentMax",type:"number",defaultValue:this.state.scaleExtent.max,onChange:function(t){return e.setScaleExtent({min:e.state.scaleExtent.min,max:parseFloat(t.target.value)})}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("span",{className:"prop prop-large"},"Node separation"),r.a.createElement("label",{className:"sub-prop",htmlFor:"separationSiblings"},"Siblings"),r.a.createElement("input",{className:"form-control",name:"separationSiblings",type:"number",defaultValue:this.state.separation.siblings,onChange:function(t){return e.setSeparation({siblings:parseFloat(t.target.value),nonSiblings:e.state.separation.nonSiblings})}}),r.a.createElement("label",{className:"sub-prop",htmlFor:"separationNonSiblings"},"Non-Siblings"),r.a.createElement("input",{className:"form-control",name:"separationNonSiblings",type:"number",defaultValue:this.state.separation.nonSiblings,onChange:function(t){return e.setSeparation({siblings:e.state.separation.siblings,nonSiblings:parseFloat(t.target.value)})}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("span",{className:"prop prop-large"},"Node size"),r.a.createElement("label",{className:"sub-prop",htmlFor:"nodeSizeX"},"X"),r.a.createElement("input",{className:"form-control",name:"nodeSizeX",type:"number",defaultValue:this.state.nodeSize.x,onChange:function(t){return e.setNodeSize({x:parseFloat(t.target.value),y:e.state.nodeSize.y})}}),r.a.createElement("label",{className:"sub-prop",htmlFor:"nodeSizeY"},"Y"),r.a.createElement("input",{className:"form-control",name:"nodeSizeY",type:"number",defaultValue:this.state.nodeSize.y,onChange:function(t){return e.setNodeSize({x:e.state.nodeSize.x,y:parseFloat(t.target.value)})}})),r.a.createElement("div",{className:"prop-container"},r.a.createElement("label",{className:"prop",htmlFor:"transitionDuration"},"Transition Duration"),r.a.createElement("input",{className:"form-control",name:"transitionDuration",type:"number",value:this.state.transitionDuration,onChange:this.handleChange})))),r.a.createElement("div",{className:"column-right"},r.a.createElement("div",{className:"tree-stats-container"},"Total nodes in tree: ",this.state.totalNodeCount),r.a.createElement("div",{ref:function(t){return e.treeContainer=t},className:"tree-container"},r.a.createElement(f.a,{data:this.state.data,renderCustomNodeElement:this.state.renderCustomNodeElement?function(t){return A[e.state.renderCustomNodeElement].fn(t,e.state)}:void 0,rootNodeClassName:"demo-node",branchNodeClassName:"demo-node",orientation:this.state.orientation,translate:{x:this.state.translateX,y:this.state.translateY},pathFunc:this.state.pathFunc,collapsible:this.state.collapsible,initialDepth:this.state.initialDepth,zoomable:this.state.zoomable,zoom:this.state.zoom,scaleExtent:this.state.scaleExtent,nodeSize:this.state.nodeSize,separation:this.state.separation,enableLegacyTransitions:this.state.enableLegacyTransitions,transitionDuration:this.state.transitionDuration,depthFactor:this.state.depthFactor,styles:this.state.styles,shouldCollapseNeighborNodes:this.state.shouldCollapseNeighborNodes,onNodeClick:function(){console.log("onNodeClick");for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t)},onNodeMouseOver:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("onNodeMouseOver",t)},onNodeMouseOut:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("onNodeMouseOut",t)},onLinkClick:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log(t)},onLinkMouseOver:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("onLinkMouseOver",t)},onLinkMouseOut:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("onLinkMouseOut",t)}})))))}}]),a}(n.Component),L={svg:{description:"Default - Pure SVG node & label (IE11 compatible)",fn:function(e,t){return r.a.createElement(v,{nodeDatum:e.nodeDatum,toggleNode:e.toggleNode,orientation:t.orientation})}},mixed:{description:"MixedNodeElement - SVG `circle` + `foreignObject` label",fn:function(e,t){var a=e.nodeDatum,n=e.toggleNode;return r.a.createElement(N,{nodeData:a,triggerNodeToggle:n,foreignObjectProps:{width:t.nodeSize.x,height:t.nodeSize.y,x:-50,y:50}})}}},J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={translateX:128,translateY:128},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.treeContainer.getBoundingClientRect();this.setState({translateX:e.width/2.5,translateY:e.height/2})}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.configurations;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"demo-container"},r.a.createElement("div",{className:"column-right"},r.a.createElement("div",{className:"tree-stats-container"},r.a.createElement("h2",null,n.title)),r.a.createElement("div",{ref:function(t){return e.treeContainer=t},className:"tree-container"},r.a.createElement(f.a,{data:a,renderCustomNodeElement:n.renderCustomNodeElement?function(e){return L[n.renderCustomNodeElement].fn(e,n)}:void 0,rootNodeClassName:"demo-node",branchNodeClassName:"demo-node",orientation:n.orientation,translate:{x:this.state.translateX,y:this.state.translateY},pathFunc:n.pathFunc,collapsible:n.collapsible,initialDepth:n.initialDepth,zoomable:n.zoomable,zoom:n.zoom,scaleExtent:n.scaleExtent,nodeSize:n.nodeSize,separation:n.separation,enableLegacyTransitions:n.enableLegacyTransitions,transitionDuration:n.transitionDuration,depthFactor:n.depthFactor,styles:n.styles,shouldCollapseNeighborNodes:n.shouldCollapseNeighborNodes})))))}}]),a}(n.Component),Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"demo-container"},r.a.createElement("div",{className:"column-right"},r.a.createElement(J,{data:D.tree,configurations:D.configurations}))))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={editMode:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"demo-container"},r.a.createElement("button",{title:"Edit",onClick:function(){return e.setState(Object(l.a)(Object(l.a)({},e.state),{},{editMode:!e.state.editMode}))}}),this.state.editMode?r.a.createElement(G,null):r.a.createElement(Y,null)))}}]),a}(n.Component);i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f5cfd0cb.chunk.js.map