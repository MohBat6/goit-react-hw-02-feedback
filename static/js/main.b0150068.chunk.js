(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"FeedbackOptions_container__2l-MZ",button:"FeedbackOptions_button__1vCGo"}},11:function(e,t,n){e.exports={container:"Notification_container__13w59"}},12:function(e,t,n){e.exports={container:"App_container__1KevM"}},22:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),s=n(5),c=n.n(s),r=n(6),o=n(7),d=n(8),u=n(14),l=n(13),b=n(1),j=n.n(b),p=n(9),h=n.n(p),O=n(0),v=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,s=e.positivePercentage;return Object(O.jsxs)("ul",{className:h.a.list,children:[Object(O.jsx)("li",{children:Object(O.jsxs)("span",{children:["Good: ",t," "]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("span",{children:["Neutral: ",n]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("span",{children:["Bad: ",a]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("span",{children:["Total: ",i]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("span",{children:["Positive feedback: ","".concat(s," %")]})})]})},x=n(4),f=n.n(x),g=function(e){var t=e.title,n=e.children;return Object(O.jsxs)("section",{className:f.a.section,children:[Object(O.jsx)("h1",{className:f.a.h1,children:t}),n]})},_=n(10),k=n.n(_),m=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)("div",{children:t.map((function(e,t){return Object(O.jsx)("button",{type:"button",className:k.a.button,style:{backgroundColor:e},onClick:function(){return n(e)},children:e},t)}))})},y=n(11),F=n.n(y),q=function(e){var t=e.message;return Object(O.jsx)("div",{className:F.a.container,children:Object(O.jsx)("span",{children:t})})},R=n(12),N=n.n(R),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.totalFeedbacks=function(){return e.state.good+e.state.neutral+e.state.bad},e.positivePercentage=function(){var t=100*e.state.good/e.totalFeedbacks();return Math.round(t)},e.onLeaveFeedback=function(t){e.setState(Object(r.a)({},t,e.state[t]+1))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:N.a.container,children:Object(O.jsxs)(g,{title:"Please leave feedback",children:[Object(O.jsx)(m,{options:["good","neutral","bad"],onLeaveFeedback:function(t){return e.onLeaveFeedback(t)}}),Object(O.jsx)("h2",{children:"Statistics"}),this.totalFeedbacks()>0?Object(O.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.totalFeedbacks(),positivePercentage:this.positivePercentage()}):Object(O.jsx)(q,{message:"No feedback given"})]})})}}]),n}(a.Component);g.propTypes={title:j.a.string.isRequired},m.propTypes={options:j.a.arrayOf(j.a.string.isRequired).isRequired,onLeaveFeedback:j.a.func.isRequired},v.propTypes={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired},q.propTypes={message:j.a.string.isRequired};var w=P;c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={section:"Section_section__2U9_O",h1:"Section_h1__2uELu"}},9:function(e,t,n){e.exports={list:"Statistics_list__1Bb5m"}}},[[22,1,2]]]);
//# sourceMappingURL=main.b0150068.chunk.js.map