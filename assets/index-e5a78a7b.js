import{d as w,r as u,j as C,a as p,o as B,c as O,b as t,w as o,e as s,u as l,g as E,E as n,k as R}from"./index-2335a62f.js";const q=E("div",{style:{color:"#ccc","font-size":"12px"}}," jpg/png files with a size less than 500kb",-1),$=w({__name:"index",setup(P){let i=u([{type:"input",value:"祝福",label:"用户名",prop:"username",placeholder:"请输入用户名",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"123422",label:"密码",prop:"password",placeholder:"请输入密码",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"change"}],children:[]},{type:"checkbox-group",value:["1"],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"1"},{type:"checkbox",label:"篮球",value:"2"},{type:"checkbox",label:"排球",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"not"}]},{type:"upload",label:"上传",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3},rules:[{required:!0,message:"图片不能为空",trigger:"blur"}]},{type:"editor",value:"123123",prop:"desc",label:"描述",placeholder:"请输入描述",rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}]),c=u();C(()=>{setTimeout(()=>{i.value.forEach(e=>{e.prop==="role"&&(e.children=[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}])})},1e3)});let d=e=>{e.form.validate(r=>{r?(console.log(e.model),n.success("提交成功")):n.error("表单填写有误,请检查")})},g=()=>{c.value.resetFields()},m=(e,r)=>{console.log("handleRemove"),console.log(e,r)},h=e=>{console.log("handlePreview"),console.log(e)},f=e=>(console.log("beforeRemove"),R.confirm(`Cancel the transfert of ${e.file.name} ?`)),b=e=>{console.log("handleExceed",e),n.warning(`The limit is 3, you selected ${e.files.length} files this time, add up to ${e.files.length+e.fileList.length} totally`)},v=e=>{console.log("success"),console.log(e)},y=e=>{console.log("change"),console.log(e)},_=e=>{console.log("handleBeforeUpload"),console.log(e)};return(e,r)=>{const a=p("el-button"),x=p("m-form");return B(),O("div",null,[t(x,{ref_key:"form",ref:c,"label-width":"100px",options:l(i),onOnChange:l(y),onBeforeUpload:l(_),onOnPreview:l(h),onOnRemove:l(m),onBeforeRemove:l(f),onOnSuccess:l(v),onOnExceed:l(b)},{uploadArea:o(()=>[t(a,{size:"small",type:"primary"},{default:o(()=>[s("Click to upload")]),_:1})]),uploadTip:o(()=>[q]),action:o(k=>[t(a,{type:"primary",onClick:T=>l(d)(k)},{default:o(()=>[s("提交")]),_:2},1032,["onClick"]),t(a,{onClick:l(g)},{default:o(()=>[s("重置")]),_:1},8,["onClick"])]),_:1},8,["options","onOnChange","onBeforeUpload","onOnPreview","onOnRemove","onBeforeRemove","onOnSuccess","onOnExceed"])])}}});export{$ as default};
