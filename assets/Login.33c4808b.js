import{r as v,s as y,j as S,k as w,l as e,H as I,y as f,I as g,D as N}from"./index.612da5fa.js";import{a as k,l as b}from"./api.6d59bfa2.js";const D={class:"container py-20 mx-auto"},B={class:"max-w-md p-5 mx-auto border rounded-2xl"},C=["onSubmit"],L=e("h2",{class:"text-lg font-medium text-center"},"Login With Credentials",-1),U={class:""},V={class:"form-control"},z=e("label",{class:"label"},[e("span",{class:"label-text"},"Phone Number")],-1),A={class:"form-control"},E=e("label",{class:"label"},[e("span",{class:"label-text"},"Email")],-1),J={class:"mt-3 text-center"},Y={setup(M){const l=v(""),n=v(""),o=y(),r=v(!1),x=async()=>{r.value=!0;let i=localStorage.getItem("ca22");if(i){localStorage.setItem("ca24",i),o.push("/");return}let s=l.value.substr(l.value.length-10);try{if((await k("880"+s,n.value)).exists){let a=await b(s);a.user||o.push("/register?phone="+s);let c=a.user,[u,d,p,m,h]=c,_={phone:u,roll:d,name:p,email:m,school:h};localStorage.setItem("ca24",JSON.stringify(_)),o.push("/")}else{let a=await b(s);a.user||alert("You are not authorized to access this page");let c=a.user,[u,d,p,m,h]=c,_={phone:u,roll:d,name:p,email:m,school:h};localStorage.setItem("ca24",JSON.stringify(_)),o.push("/"),r.value=!1}}catch{r.value=!1}};return(i,s)=>(S(),w("div",D,[e("div",B,[e("form",{class:"space-y-2",onSubmit:I(x,["prevent"])},[L,e("div",U,[e("div",V,[z,f(e("input",{type:"tel",class:"input input-bordered",placeholder:"Your Phone Number",id:"phone","onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t)},null,512),[[g,l.value]])]),e("div",A,[E,f(e("input",{type:"email",class:"input input-bordered",placeholder:"e.g. example@example.com",id:"phone","onUpdate:modelValue":s[1]||(s[1]=t=>n.value=t)},null,512),[[g,n.value]])]),e("div",J,[e("button",{class:N(["btn",{loading:r.value}])},"Login",2)])])],40,C)])]))}};export{Y as default};
