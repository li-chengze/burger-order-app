(this["webpackJsonpreact-burger-app"]=this["webpackJsonpreact-burger-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,n,t){e.exports={Salad:"Ingredient_Salad__2oSzW",Bacon:"Ingredient_Bacon__32tUl",Cheese:"Ingredient_Cheese__1ZHZ2",Sausage:"Ingredient_Sausage__n91tN"}},function(e,n,t){e.exports={BuilderControl:"BuilderControl_BuilderControl__2ngfQ",Label:"BuilderControl_Label__1OQK4",Less:"BuilderControl_Less__14Hia",More:"BuilderControl_More__1w7bA"}},function(e,n,t){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,n,t){e.exports={ContactInfo:"ContactInfo_ContactInfo__1UemI",Field:"ContactInfo_Field__3u8gO"}},,,,function(e,n,t){e.exports={Burger:"Burger_Burger__10T8F",UpperBread:"Burger_UpperBread__2JByq",BottomBread:"Burger_BottomBread__3jogZ"}},function(e,n,t){e.exports={BuilderControls:"BuilderControls_BuilderControls__3KQMr",PriceBanner:"BuilderControls_PriceBanner__-AHjM",OrderButton:"BuilderControls_OrderButton__1N3lM",enable:"BuilderControls_enable__1TFOj"}},function(e,n,t){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,n,t){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DeskOnly:"Toolbar_DeskOnly__mgEGL"}},,,function(e,n,t){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,,,,,,,,,,,function(e,n,t){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,n,t){e.exports={BackDrop:"BackDrop_BackDrop__2O2aY"}},function(e,n,t){e.exports={Loader:"Spiner_Loader__2KgmD",load3:"Spiner_load3__7jWFF"}},,,function(e,n,t){e.exports=t.p+"static/media/logo.b8503d26.png"},function(e,n,t){e.exports={Logo:"Logo_Logo__3tJ9M"}},,function(e,n,t){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,n,t){e.exports={DrawerToggle:"SideDrawerToggle_DrawerToggle__GSO01"}},function(e,n,t){e.exports={Order:"Order_Order__3QCuV"}},function(e,n,t){e.exports={Orders:"Orders_Orders__1b4Uj"}},function(e,n,t){e.exports=t(84)},,,,,function(e,n,t){},function(e,n,t){},,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(21),c=t.n(o),i=(t(60),t(61),t(6)),l=t(7),s=t(9),d=t(8),u=t(12),m=t(24),p=t.n(m),g=t(17),E=t.n(g),_=function(e){var n=null;switch(e.type){case"salad":n=a.a.createElement("div",{className:E.a.Salad});break;case"cheese":n=a.a.createElement("div",{className:E.a.Cheese});break;case"sausage":n=a.a.createElement("div",{className:E.a.Sausage});break;case"bacon":n=a.a.createElement("div",{className:E.a.Bacon});break;default:n=null}return n},f=function(e){var n=Object.keys(e.ingredients).reduce((function(n,t){return n.concat(Array(e.ingredients[t]).fill(t))}),[]),t=0===n.length?a.a.createElement("p",null,"Please add ingredients"):n.map((function(e,n){return a.a.createElement(_,{key:e+n,type:e})}));return a.a.createElement("div",{className:p.a.Burger},a.a.createElement("div",{className:p.a.UpperBread}),t,a.a.createElement("div",{className:p.a.BottomBread}))},h=t(18),v=t.n(h),b=function(e){return a.a.createElement("div",{className:v.a.BuilderControl},a.a.createElement("label",{className:v.a.Label},e.type),a.a.createElement("button",{className:v.a.Less,disabled:0===e.ingredientCount,onClick:function(){e.removeIngredientHandler(e.type)}},"Less"),a.a.createElement("button",{className:v.a.More,onClick:function(){e.addIngredientHandler(e.type)}},"More"))},O=t(25),k=t.n(O),N=function(e){return a.a.createElement("div",{className:k.a.BuilderControls},a.a.createElement("p",{className:k.a.PriceBanner},"Total Price: ",e.totalPrice),Object.keys(e.ingredients).map((function(n){return a.a.createElement(b,{key:n,type:n,ingredientCount:e.ingredients[n],addIngredientHandler:e.addIngredientHandler,removeIngredientHandler:e.removeIngredientHandler})})),a.a.createElement("button",{className:k.a.OrderButton,disabled:5===e.totalPrice,onClick:e.clickOrderHandler},"ORDER"))},C=t(43),y=t.n(C),B=function(e){return a.a.createElement("div",{style:{textAlign:"left"}},a.a.createElement("p",null,"This is your delicious hamburger"),a.a.createElement("ul",null,Object.entries(e.ingredients).map((function(e){return a.a.createElement("li",{key:e[0]},a.a.createElement("label",null,e[0]),": ",e[1])}))),a.a.createElement("p",null," Your total price: ",a.a.createElement("strong",null,e.totalPrice)))},D=t(26),I=t.n(D),S=function(e){var n=null;return"Danger"===e.btnType?n=I.a.Danger:"Success"===e.btnType&&(n=I.a.Success),a.a.createElement("button",{className:[I.a.Button,n].join(" "),onClick:e.onClick},e.children)},j=t(44),w=t.n(j),H=function(e){return e.show?a.a.createElement("div",{className:w.a.BackDrop,onClick:e.onClick},"this is backdrop"):null},T=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(H,{show:e.checking,onClick:e.cancelOrderHandler}),a.a.createElement("div",{className:y.a.Modal,style:{transform:e.checking?"translateY(0)":"translateY(-100vh)"}},a.a.createElement(B,{ingredients:e.ingredients,totalPrice:e.totalPrice}),a.a.createElement(S,{btnType:"Danger",onClick:e.cancelOrderHandler},"Cancel"),a.a.createElement(S,{btnType:"Success",onClick:e.continueOrderHandler},"Continue")))},x=t(45),L=t.n(x),P=function(){return a.a.createElement("div",{className:L.a.Loader},"Loading...")},M=t(46),R=t.n(M).a.create({baseURL:"https://react-burger-app-14645.firebaseio.com/"}),F=t(11),A=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={checking:!1},e.addIngredientHandler=function(n){e.props.addIngredient(n)},e.removeIngredientHandler=function(n){e.props.removeIngredient(n)},e.clickOrderHandler=function(){e.setState({checking:!0})},e.cancelOrderHandler=function(){e.setState({checking:!1})},e.continueOrderHandler=function(){var n=Object.keys(e.props.ingredients).map((function(n){return encodeURIComponent(n)+"="+encodeURIComponent(e.props.ingredients[n])})).join("&");e.props.history.push({pathname:"/checkout",search:"?"+n})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.get("/ingredients.json").then((function(n){e.setState({ingredients:n.data})})).catch((function(e){alert(e)}))}},{key:"render",value:function(){var e=a.a.createElement(P,null);return null!==this.props.ingredients&&(e=a.a.createElement("div",null,a.a.createElement(T,{checking:this.state.checking,ingredients:this.props.ingredients,totalPrice:this.props.totalPrice,cancelOrderHandler:this.cancelOrderHandler,continueOrderHandler:this.continueOrderHandler}),a.a.createElement(f,{ingredients:this.props.ingredients}),a.a.createElement(N,{ingredients:this.props.ingredients,totalPrice:this.props.totalPrice,addIngredientHandler:this.addIngredientHandler,removeIngredientHandler:this.removeIngredientHandler,clickOrderHandler:this.clickOrderHandler}))),e}}]),t}(r.Component),U=Object(F.b)((function(e){return{ingredients:e.ingredients,totalPrice:e.totalPrice}}),(function(e){return{addIngredient:function(n){return e({type:"ADD_INGREDIENTS",ingredient:n})},removeIngredient:function(n){return e({type:"REMOVE_INGREDIENTS",ingredient:n})}}}))(A),G=t(27),J=t.n(G),K=t(48),Q=t.n(K),W=t(49),X=t.n(W),Y=function(e){return a.a.createElement("img",{className:X.a.Logo,src:Q.a,alt:"logo"})},Z=t(13),V=t(30),q=t.n(V),z=function(e){return a.a.createElement("li",{className:q.a.NavigationItem},a.a.createElement(Z.b,{to:e.link,activeClassName:q.a.active,exact:!0},e.children))},$=t(51),ee=t.n($),ne=function(e){return a.a.createElement("ul",{className:ee.a.NavigationItems},a.a.createElement(z,{link:"/"},"Burger Builder"),a.a.createElement(z,{link:"/orders"},"Orders"))},te=t(52),re=t.n(te),ae=function(e){return a.a.createElement("div",{className:re.a.DrawerToggle,onClick:e.openSideDrawerHandler},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},oe=function(e){return a.a.createElement("div",{className:J.a.Toolbar},a.a.createElement("div",null,a.a.createElement(ae,{openSideDrawerHandler:e.openSideDrawerHandler})),a.a.createElement("div",{className:J.a.Logo},a.a.createElement(Y,null)),a.a.createElement("nav",{className:J.a.DeskOnly},a.a.createElement(ne,null)))},ce=t(19),ie=t.n(ce),le=function(e){var n=e.opened?ie.a.Open:ie.a.Close;return a.a.createElement(r.Fragment,null,a.a.createElement(H,{show:e.opened,onClick:e.closeSideDrawerHandler}),a.a.createElement("div",{className:[ie.a.SideDrawer,n].join(" ")},a.a.createElement("div",{className:ie.a.Logo},a.a.createElement(Y,null)),a.a.createElement("nav",null,a.a.createElement(ne,null))))},se=t(53),de=t.n(se),ue=function(e){return a.a.createElement("div",{className:de.a.Order},Object.keys(e.order.ingredients).map((function(n){return a.a.createElement("p",{key:n},a.a.createElement("label",null,n,": "),e.order.ingredients[n])})))},me=t(54),pe=t.n(me),ge=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={orders:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.get("/orders.json").then((function(n){e.setState({orders:Object.entries(n.data)})})).catch((function(e){return alert(e)}))}},{key:"render",value:function(){return a.a.createElement("div",{className:pe.a.Orders},this.state.orders.map((function(e){return a.a.createElement(ue,{key:e[0],order:e[1]})})))}}]),t}(r.Component),Ee=t(14),_e=t(20),fe=t.n(_e),he=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).orderHandler=function(){R.post("/orders.json",e.props.order).then((function(n){e.props.resetIngredients(),e.props.history.push("/")})).catch((function(e){return alert(e)}))},e}return Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:fe.a.ContactInfo},"Please enter your contact information",a.a.createElement("form",null,a.a.createElement("div",{className:fe.a.Field},a.a.createElement("label",null,"Name: "),a.a.createElement("input",{value:this.props.order.name})),a.a.createElement("div",{className:fe.a.Field},a.a.createElement("label",null,"Mobile: "),a.a.createElement("input",{value:this.props.order.mobile})),a.a.createElement("div",{className:fe.a.Field},a.a.createElement("label",null,"Address: "),a.a.createElement("input",{value:this.props.order.address}))),a.a.createElement(S,{btnType:"Success",onClick:this.orderHandler},"Order"))}}]),t}(r.Component),ve=Object(F.b)(null,(function(e){return{resetIngredients:function(){e({type:"RESET_INGREDIENTS"})}}}))(Object(u.e)(he)),be=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={order:{ingredients:null,price:10,name:"test",mobile:"12345",address:"test address"}},e.cancelCheckoutHandler=function(){e.props.history.replace("/")},e.continueCheckoutHandler=function(){e.props.history.push(e.props.match.url+"/contact-info")},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(Ee.a)({},this.state.order,{ingredients:this.props.ingredients});this.setState({order:e})}},{key:"render",value:function(){var e=this,n=null!==this.state.order.ingredients?a.a.createElement(f,{ingredients:this.state.order.ingredients}):null;return a.a.createElement("div",null,n,a.a.createElement(u.a,{path:this.props.match.url,exact:!0,render:function(){return a.a.createElement(S,{btnType:"Danger",onClick:e.cancelCheckoutHandler},"Cancel")}}),a.a.createElement(u.a,{path:this.props.match.url,exact:!0,render:function(){return a.a.createElement(S,{btnType:"Success",onClick:e.continueCheckoutHandler},"Continue")}}),a.a.createElement(u.a,{path:this.props.match.url+"/contact-info",render:function(){return a.a.createElement(ve,{order:e.state.order})}}))}}]),t}(r.Component),Oe=Object(F.b)((function(e){return{ingredients:e.ingredients}}))(be),ke=function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={sideDrawerOpened:!1},e.openSideDrawerHandler=function(){e.setState({sideDrawerOpened:!0})},e.closeSideDrawerHandler=function(){e.setState({sideDrawerOpened:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(oe,{openSideDrawerHandler:this.openSideDrawerHandler}),a.a.createElement(le,{opened:this.state.sideDrawerOpened,closeSideDrawerHandler:this.closeSideDrawerHandler}),a.a.createElement(u.a,{path:"/",component:U,exact:!0}),a.a.createElement(u.a,{path:"/orders",component:ge}),a.a.createElement(u.a,{path:"/checkout",component:Oe}))}}]),t}(r.Component),Ne=t(23),Ce={ingredients:{salad:0,bacon:0,cheese:0,sausage:0},totalPrice:5},ye={salad:1.2,bacon:2,cheese:.8,sausage:2.5},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_INGREDIENTS":var t=n.ingredient,r=e.ingredients,a=Object(Ee.a)({},r);a[t]=r[t]+1;var o=Number((e.totalPrice+ye[t]).toFixed(2));return Object(Ee.a)({},e,{ingredients:a,totalPrice:o});case"REMOVE_INGREDIENTS":var c=n.ingredient,i=e.ingredients,l=Object(Ee.a)({},i),s=e.totalPrice;return l[c]>0&&(l[c]=i[c]-1,s=Number((s-ye[c]).toFixed(2))),Object(Ee.a)({},e,{ingredients:l,totalPrice:s});case"RESET_INGREDIENTS":return Ce;default:return e}},De=Object(Ne.b)(Be);var Ie=function(){return a.a.createElement(F.a,{store:De},a.a.createElement(Z.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(ke,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.09527332.chunk.js.map