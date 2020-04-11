(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,a){t.exports={contact_form:"ContactForm_contact_form__3IbB_",title:"ContactForm_title__1ejVA"}},function(t,e,a){t.exports={contact_field:"ContactList_contact_field__1UJ3T",contact_list:"ContactList_contact_list__1H3hW",button:"ContactList_button__21eHS"}},function(t,e,a){t.exports={app:"App_app__3Qa1t",title:"App_title__SbRd7"}},function(t,e,a){t.exports={button:"Button_button__WOlc8"}},function(t,e,a){t.exports={filter:"Filter_filter__2wV8k",title:"Filter_title__2V9eu"}},,,,,function(t,e,a){t.exports=a(21)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(13),r=a.n(o),l=a(6),i=a(1),s=a(2),u=a(4),m=a(5),d=a(22),f=a(14),h=a(3),b=a(10),p=a.n(b),_=function(t){var e=t.callbackfunc,a=t.text,n=t.type,o=a.toLowerCase();return"function"===typeof e?c.a.createElement("button",{onClick:function(){return e(o)},className:p.a.button,type:n},a):c.a.createElement("button",{className:p.a.button,type:n},a)},v=a(7),E=a.n(v),C=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).handleChange=function(t){var e=t.target,a=e.value,c=e.name;n.setState(Object(h.a)({},c,a))},n.handleAddContact=function(t){t.preventDefault(),n.props.onAddSubmit(Object(f.a)({},n.state,{},{id:Object(d.a)()})),n.resetState()},n.resetState=function(){n.setState({name:"",number:""})},n.state={name:"",number:"",id:""},n.formId=Object(d.a)(),n}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleAddContact,htmlFor:this.formId,className:E.a.contact_form},c.a.createElement("label",null,c.a.createElement("h2",{className:E.a.title},"Name"),c.a.createElement("input",{type:"text",placeholder:"Enter friend",value:e,onChange:this.handleChange,id:this.formId,name:"name"})),c.a.createElement("label",null,c.a.createElement("h2",{className:E.a.title},"Number"),c.a.createElement("input",{type:"text",placeholder:"Enter number",value:a,onChange:this.handleChange,id:this.formId,name:"number"})),c.a.createElement(_,{type:"submit",text:"Add contact"})))}}]),a}(n.Component),O=a(8),j=a.n(O),y=function(t){var e=t.listData,a=t.filterKey,n=t.callbackfunc;if(void 0!==e){var o=Object(l.a)(e);return""!==a&&(o=e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))),c.a.createElement("div",{className:j.a.contact_field},c.a.createElement("ul",{className:j.a.contact_list},o.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement("li",{key:e},a,": ",o," ",c.a.createElement("button",{className:j.a.button,onClick:function(){return n(e)},type:"button"},"delete"))}))))}},g=a(9),S=a.n(g),k=a(11),N=a.n(k),x=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(h.a)({},a,c)),n.props.onChange(c)},n.state={filter:""},n}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state.filter;return c.a.createElement("div",null,c.a.createElement("form",{className:N.a.filter},c.a.createElement("h2",{className:N.a.title},"Find contacts by name"),c.a.createElement("label",null,c.a.createElement("input",{type:"text",placeholder:"Enter contact",value:t,onChange:this.handleChange,id:this.formId,name:"filter"}))))}}]),a}(n.Component),A=function(t){Object(m.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).handleAddContact=function(t){var e=n.state.contacts.find((function(e){return e.name===t.name}));if(void 0!==e)return alert("".concat(e.name," is allready in contacts")),0;n.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},n.handleDeleteContact=function(t){var e=n.state.contacts.filter((function(e){return e.id!==t}));n.setState({contacts:e})},n.handleFilter=function(t){n.setState({filter:t})},n.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.formId=Object(d.a)(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){console.log(t),t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement("div",{className:S.a.app},c.a.createElement("h2",{className:S.a.title},"PhoneBook"),c.a.createElement(C,{onAddSubmit:this.handleAddContact}),c.a.createElement("h2",{className:S.a.title},"Contacts"),c.a.createElement(x,{onChange:this.handleFilter}),c.a.createElement(y,{listData:this.state.contacts,filterKey:this.state.filter,callbackfunc:this.handleDeleteContact}))}}]),a}(n.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.40189d95.chunk.js.map