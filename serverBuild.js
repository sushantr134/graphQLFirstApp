module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("express")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("express-graphql")},function(e,t,r){e.exports=r(5)},function(e,t,r){"use strict";r.r(t),function(e){var t=r(0),n=r.n(t),o=(r(6),r(1)),u=r.n(o),i=r(2),a=r.n(i),c=r(3),p=r.n(c),s=r(7),f=n()();f.use(u()()),f.use(a()()),f.use("/graphql",p()({schema:s,graphiql:!0})),f.use(n.a.static("build")),f.get("*",function(t,r){r.sendFile("index.html",{root:e})}),f.listen(3e3,function(){return console.log("Server Started 3000")})}.call(this,"/")},function(e,t){e.exports=require("path")},function(e,t,r){var n=r(8),o=r(9),u=r(10).faculty,i=n.GraphQLObjectType,a=n.GraphQLInt,c=n.GraphQLID,p=n.GraphQLString,s=n.GraphQLSchema,f=new i({name:"Faculty",fields:function(){return{id:{type:c},name:{type:p},department:{type:p},contact:{type:a}}}}),l=new i({name:"RootQueryType",fields:{faculty:{type:f,args:{id:{type:c}},resolve:function(e,t){return o.find(u,{id:t.id})}}}});e.exports=new s({query:l})},function(e,t){e.exports=require("graphql")},function(e,t){e.exports=require("lodash")},function(e){e.exports={faculty:[{id:1,name:"Dr. Shishir Kumar",department:"Computer Science",contact:123},{id:13,name:"Mr. Nilesh Patel",department:"Computer Science",contact:1234},{id:15,name:"Mr. Amit Kumar Srivastava",department:"Computer Science",contact:122},{id:55,name:"Dr. Mahesh Kumar",department:"Computer Science",contact:1213},{id:21,name:"Dr. Amit Kumar",department:"Computer Science",contact:1323}]}}]);