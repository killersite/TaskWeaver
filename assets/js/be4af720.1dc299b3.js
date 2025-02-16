"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3498],{3763:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(4848),a=s(8453);const r={},i="QWen",l={id:"llms/qwen",title:"QWen",description:"1. QWen (Tongyi Qianwen) is a LLM developed by Alibaba. Go to QWen and register an account and get the API key. More details can be found here (in Chinese).",source:"@site/docs/llms/qwen.md",sourceDirName:"llms",slug:"/llms/qwen",permalink:"/TaskWeaver/docs/llms/qwen",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/llms/qwen.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Gemini",permalink:"/TaskWeaver/docs/llms/gemini"},next:{title:"GLM",permalink:"/TaskWeaver/docs/llms/glm"}},o={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"qwen",children:"QWen"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["QWen (Tongyi Qianwen) is a LLM developed by Alibaba. Go to ",(0,t.jsx)(n.a,{href:"https://dashscope.aliyun.com/",children:"QWen"})," and register an account and get the API key. More details can be found ",(0,t.jsx)(n.a,{href:"https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key?spm=a2c4g.11186623.0.0.7b5749d72j3SYU",children:"here"})," (in Chinese)."]}),"\n",(0,t.jsx)(n.li,{children:"Install the required packages dashscope."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install dashscope\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Add the following configuration to ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n    "llm.api_type": "qwen",\n    "llm.model": "qwen-max", \n    "llm.api_key": "YOUR_API_KEY"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["NOTE: ",(0,t.jsx)(n.code,{children:"llm.model"})," is the model name of QWen LLM API.\nYou can find the model name in the ",(0,t.jsx)(n.a,{href:"https://help.aliyun.com/zh/dashscope/developer-reference/model-square/?spm=a2c4g.11186623.0.0.35a36ffdt97ljI",children:"QWen LLM model list"}),"."]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Start TaskWeaver and chat with TaskWeaver.\nYou can refer to the ",(0,t.jsx)(n.a,{href:"/TaskWeaver/docs/quickstart",children:"Quick Start"})," for more details."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);