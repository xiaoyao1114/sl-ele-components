import{d as k,r as p,a as n,o as c,c as x,b as s,w as t,e as i,u as a,f as C,i as w,l as q,g as B,E as d}from"./index-2335a62f.js";const N=B("div",{style:{color:"#ccc","font-size":"12px"}},"jpg/png files with a size less than 500kb",-1),E=k({__name:"index",setup(V){let l=p(!1),g=p([{type:"input",value:"123",label:"用户名",prop:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"图片不能为空",trigger:"blur"}]},{type:"editor",value:"",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}]),m=()=>{l.value=!0},b=e=>{e.validate()(r=>{r?(console.log(e.getFormData),d.success("验证成功"),l.value=!1):d.error("表单填写有误,请检查")})},v=e=>{e.resetFields(),l.value=!1},h=e=>{console.log("success"),console.log(e)},y=e=>{console.log("change"),console.log(e)};return(e,u)=>{const r=n("el-button"),f=n("m-modal-form");return c(),x("div",null,[s(r,{type:"primary",onClick:a(m)},{default:t(()=>[i("open")]),_:1},8,["onClick"]),a(l)?(c(),C(f,{key:0,isScroll:"",options:a(g),title:"编辑用户",width:"50%",visible:a(l),"onUpdate:visible":u[0]||(u[0]=o=>w(l)?l.value=o:l=o),"on-change":a(y),"on-success":a(h)},{footer:t(o=>[s(r,{onClick:_=>a(v)(o.form)},{default:t(()=>[i("取消")]),_:2},1032,["onClick"]),s(r,{type:"primary",onClick:_=>a(b)(o.form)},{default:t(()=>[i("确认")]),_:2},1032,["onClick"])]),uploadArea:t(()=>[s(r,{size:"small",type:"primary"},{default:t(()=>[i("Click to upload")]),_:1})]),uploadTip:t(()=>[N]),_:1},8,["options","visible","on-change","on-success"])):q("",!0)])}}});export{E as default};
