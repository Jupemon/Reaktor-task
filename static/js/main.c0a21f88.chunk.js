(this["webpackJsonpreaktor-task"]=this["webpackJsonpreaktor-task"]||[]).push([[0],{32:function(t,e,r){},34:function(t,e,r){},42:function(t,e,r){"use strict";r.r(e);var a=r(3),n=r(0),c=r.n(n),s=r(15),i=r.n(s),o=(r(32),r(13)),u=r.n(o),l=r(16),d=r(8),p=r(9),h=r(12),j=r(11),b=(r(34),r(50)),f=r(51),v=r(44),O=r(45),x=function(t){Object(h.a)(r,t);var e=Object(j.a)(r);function r(){var t;Object(d.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={},t}return Object(p.a)(r,[{key:"render",value:function(){var t=this;return Object(a.jsxs)(b.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(a.jsx)(b.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(a.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(a.jsx)(f.a,{children:Object(a.jsxs)(v.a,{"aria-label":"Basic example",children:[Object(a.jsx)(O.a,{onClick:function(){t.props.fetchProducts("jackets")},variant:"secondary",children:"Jackets"}),Object(a.jsx)(O.a,{onClick:function(){t.props.fetchProducts("shirts")},variant:"secondary",children:"Shirts"}),Object(a.jsx)(O.a,{onClick:function(){t.props.fetchProducts("accessories")},variant:"secondary",children:"Accessories"})]})})})]})}}]),r}(n.Component),m=(r(41),r(46)),k=r(47),y=r(48),g=r(52),C=function(t){Object(h.a)(r,t);var e=Object(j.a)(r);function r(){var t;Object(d.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={loading:!1,availability:"Check availability"},t.handleClick=function(){var e=Object(l.a)(u.a.mark((function e(r,a){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.checkAvailability,t.setState({loading:!0}),e.next=4,n(r,a);case 4:c=e.sent,t.setState({availability:c});case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),t}return Object(p.a)(r,[{key:"render",value:function(){var t=this,e=this.state,r=e.availability,n=e.loading,c=this.props.data,s=c.name,i=c.id,o=c.color,u=c.manufacturer,l=c.price;return Object(a.jsx)(g.a,{style:{width:"18rem",margin:"auto",marginTop:"10px",marginBottom:"10px"},children:Object(a.jsxs)(g.a.Body,{children:[Object(a.jsx)(g.a.Title,{children:s}),Object(a.jsxs)(g.a.Text,{children:["Id : ",i]}),Object(a.jsxs)(g.a.Text,{children:["manufacturer : ",u]}),Object(a.jsxs)(g.a.Text,{children:["Color : ",o]}),Object(a.jsxs)(g.a.Text,{children:["price : ",l]}),Object(a.jsx)(O.a,{disabled:n,onClick:function(){t.handleClick(u,i)},children:r})]})})}}]),r}(n.Component),A=function(t){Object(h.a)(r,t);var e=Object(j.a)(r);function r(t){var a;Object(d.a)(this,r),(a=e.call(this,t)).renderMoreProducts=function(){var t=a.props,e=t.products,r=t.amountToRender,n=a.state,c=n.rendered,s=n.amount;c=c.concat(e.slice(s,s+r)),s+=r,a.setState({rendered:c,amount:s})};var n=t.products,c=t.amountToRender;return a.state={amount:c,rendered:n.slice(0,c)},a}return Object(p.a)(r,[{key:"componentDidUpdate",value:function(t){var e=this.props,r=e.products,a=e.amountToRender;t.products!==this.props.products&&this.setState({rendered:r.slice(0,a)})}},{key:"render",value:function(){var t=this,e=this.state.rendered;return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(k.a,{children:e.map((function(e){return Object(a.jsx)(y.a,{children:Object(a.jsx)(C,{checkAvailability:t.props.checkAvailability,data:e},e.id)})}))}),Object(a.jsx)(k.a,{children:Object(a.jsx)(O.a,{onClick:function(){t.renderMoreProducts()},variant:"primary",size:"lg",block:!0,children:"Load more..."})})]})}}]),r}(n.Component),T=r(49),S=function(t){Object(h.a)(r,t);var e=Object(j.a)(r);function r(){var t;Object(d.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={message:"Choose a product",availability:[],selected:null,products:[]},t.extractAvailability=function(t){return t.includes(">INSTOCK<")?"In stock":t.includes(">OUTOFSTOCK<")?"Out of stock":t.includes(">LESSTHAN10<")?"Less than 10":"NAN"},t.checkAvailability=function(){var e=Object(l.a)(u.a.mark((function e(r,a){var n,c,s,i,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.state,n.products,void 0!==(c=n.availability).find((function(t){return t.manufacturer===r}))){e.next=11;break}return e.next=5,fetch("https://bad-api-assignment.reaktor.com/availability/".concat(r));case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,c.push({manufacturer:r,products:i.response}),t.setState({availability:c});case 11:return o=c.find((function(t){return t.manufacturer===r})),l=o.products.find((function(t){return t.id===a.toUpperCase()})),e.abrupt("return",t.extractAvailability(l.DATAPAYLOAD));case 16:return e.prev=16,e.t0=e.catch(0),e.abrupt("return","Failed to fetch data");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,r){return e.apply(this,arguments)}}(),t.fetchProducts=function(){var e=Object(l.a)(u.a.mark((function e(r){var a,n,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.state,n=a.products,c=a.selected,void 0!==n.find((function(t){return t.category===r}))){e.next=10;break}return e.next=5,fetch("https://bad-api-assignment.reaktor.com/products/".concat(r));case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,n.push({category:r,items:i});case 10:c=n.findIndex((function(t){return t.category===r})),t.setState({products:n,selected:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t.setState({message:"Could not Connect to API"});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(p.a)(r,[{key:"render",value:function(){var t=this.state,e=t.selected,r=t.products,n=t.message;return r.length<=0?Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{fetchProducts:this.fetchProducts}),Object(a.jsxs)(T.a,{fluid:!0,children:[Object(a.jsx)("h1",{children:"Pick something"}),Object(a.jsx)("p",{children:n})]})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{fetchProducts:this.fetchProducts}),Object(a.jsx)("div",{style:{marginBottom:"30px"}}),Object(a.jsx)(A,{checkAvailability:this.checkAvailability,products:r[e].items,amountToRender:10})]})}}]),r}(n.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c0a21f88.chunk.js.map