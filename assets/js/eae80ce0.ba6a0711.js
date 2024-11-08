"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9642],{8267:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>d,assets:()=>c,chCodeConfig:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=t(4848),s=t(8453),r=t(4754);const i={title:"Authentication",sidebar_position:0,slug:"/configuration-authentication"},l=void 0,a={id:"Configuration/configuration-authentication",title:"Authentication",description:"The login functionality in Langflow serves to authenticate users and protect sensitive routes in the application.",source:"@site/docs/Configuration/configuration-authentication.md",sourceDirName:"Configuration",slug:"/configuration-authentication",permalink:"/configuration-authentication",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Authentication",sidebar_position:0,slug:"/configuration-authentication"},sidebar:"defaultSidebar",previous:{title:"Project & General Settings",permalink:"/settings-project-general-settings"},next:{title:"API Keys",permalink:"/configuration-api-keys"}},c={},d={annotations:r.hk,Code:r.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Create a superuser and new users in Langflow",id:"create-a-superuser-and-new-users-in-langflow",level:2},{value:"Manage Superuser with the Langflow CLI",id:"manage-superuser-with-the-langflow-cli",level:2},{value:"Authentication configuration values",id:"values",level:2},{value:"LANGFLOW_AUTO_LOGIN",id:"langflow_auto_login",level:3},{value:"LANGFLOW_SUPERUSER and LANGFLOW_SUPERUSER_PASSWORD",id:"langflow_superuser-and-langflow_superuser_password",level:3},{value:"LANGFLOW_SECRET_KEY",id:"langflow_secret_key",level:3},{value:"LANGFLOW_NEW_USER_IS_ACTIVE",id:"langflow_new_user_is_active",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return d||f("CH",!1),d.Code||f("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(n.p,{children:"The login functionality in Langflow serves to authenticate users and protect sensitive routes in the application."}),"\n",(0,o.jsx)(n.p,{children:"Starting from version 0.5, Langflow introduces an enhanced login mechanism that is governed by a few environment variables. This allows new secure features."}),"\n",(0,o.jsx)(n.h2,{id:"create-a-superuser-and-new-users-in-langflow",children:"Create a superuser and new users in Langflow"}),"\n",(0,o.jsx)(n.p,{children:"Learn how to create a new superuser, log in to Langflow, and add new users."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:".env"})," file and open it in your preferred editor."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the following environment variables to your file."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"False",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"LANGFLOW_SUPERUSER",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"admin",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"securepassword",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"LANGFLOW_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"randomly_generated_secure_key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"LANGFLOW_NEW_USER_IS_ACTIVE",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"False",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["For more information, see ",(0,o.jsx)(n.a,{href:"#values",children:"Authentication configuration values"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The Langflow project includes a ",(0,o.jsx)(n.a,{href:"https://github.com/langflow-ai/langflow/blob/main/.env.example",children:(0,o.jsx)(n.code,{children:".env.example"})})," file to help you get started.\nYou can copy the contents of this file into your own ",(0,o.jsx)(n.code,{children:".env"})," file and replace the example values with your own preferred settings."]})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Save your ",(0,o.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,o.jsx)(n.li,{children:"Run Langflow with the configured environment variables."}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow run ",props:{style:{color:"#A5D6FF"}}},{content:"--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Sign in with your username ",(0,o.jsx)(n.code,{children:"admin"})," and password ",(0,o.jsx)(n.code,{children:"securepassword"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To open the ",(0,o.jsx)(n.strong,{children:"Admin Page"}),", click your user profile image, and then select ",(0,o.jsx)(n.strong,{children:"Admin Page"}),".\nYou can also go to ",(0,o.jsx)(n.code,{children:"http://127.0.0.1:7861/admin"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To add a new user, click ",(0,o.jsx)(n.strong,{children:"New User"}),", and then add the ",(0,o.jsx)(n.strong,{children:"Username"})," and ",(0,o.jsx)(n.strong,{children:"Password"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To activate the new user, select ",(0,o.jsx)(n.strong,{children:"Active"}),".\nThe user can only sign in if you select them as ",(0,o.jsx)(n.strong,{children:"Active"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To give the user ",(0,o.jsx)(n.code,{children:"superuser"})," priveleges, click  ",(0,o.jsx)(n.strong,{children:"Superuser"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To confirm your new user has been created, sign out of Langflow, and then sign back in using your new ",(0,o.jsx)(n.strong,{children:"Username"})," and ",(0,o.jsx)(n.strong,{children:"Password"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"manage-superuser-with-the-langflow-cli",children:"Manage Superuser with the Langflow CLI"}),"\n",(0,o.jsx)(n.p,{children:"Langflow provides a command-line utility for interactively creating superusers:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Enter the CLI command:"}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"superuser",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Langflow prompts you for a ",(0,o.jsx)(n.strong,{children:"Username"})," and ",(0,o.jsx)(n.strong,{children:"Password"}),":"]}),"\n"]}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow superuser",props:{}}]},{tokens:[{content:"Username: new_superuser_1",props:{}}]},{tokens:[{content:"Password:",props:{}}]},{tokens:[{content:"Default folder created successfully.",props:{}}]},{tokens:[{content:"Superuser created successfully.",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["To confirm your new superuser was created successfully, go to the ",(0,o.jsx)(n.strong,{children:"Admin Page"})," at ",(0,o.jsx)(n.code,{children:"http://127.0.0.1:7861/admin"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"values",children:"Authentication configuration values"}),"\n",(0,o.jsx)(n.p,{children:"The following table lists the available authentication configuration variables, their descriptions, and default values:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Variable"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"LANGFLOW_AUTO_LOGIN"})}),(0,o.jsx)(n.td,{children:"Enables automatic login"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"True"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"LANGFLOW_SUPERUSER"})}),(0,o.jsx)(n.td,{children:"Superuser username"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"LANGFLOW_SUPERUSER_PASSWORD"})}),(0,o.jsx)(n.td,{children:"Superuser password"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"LANGFLOW_SECRET_KEY"})}),(0,o.jsx)(n.td,{children:"Key for encrypting superuser password"}),(0,o.jsx)(n.td,{children:"-"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"LANGFLOW_NEW_USER_IS_ACTIVE"})}),(0,o.jsx)(n.td,{children:"Automatically activates new users"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"False"})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"langflow_auto_login",children:"LANGFLOW_AUTO_LOGIN"}),"\n",(0,o.jsxs)(n.p,{children:["By default, this variable is set to ",(0,o.jsx)(n.code,{children:"True"}),". When enabled, Langflow operates as it did in versions prior to 0.5, including automatic login without requiring explicit user authentication."]}),"\n",(0,o.jsx)(n.p,{children:"To disable automatic login and enforce user authentication:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_AUTO_LOGIN",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"False",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"langflow_superuser-and-langflow_superuser_password",children:"LANGFLOW_SUPERUSER and LANGFLOW_SUPERUSER_PASSWORD"}),"\n",(0,o.jsx)(n.p,{children:"These environment variables are only relevant when LANGFLOW_AUTO_LOGIN is set to False. They specify the username and password for the superuser, which is essential for administrative tasks.\nTo create a superuser manually:"}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SUPERUSER",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"admin",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"securepassword",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"langflow_secret_key",children:"LANGFLOW_SECRET_KEY"}),"\n",(0,o.jsx)(n.p,{children:"This environment variable holds a secret key used for encrypting the superuser's password. Make sure to set this to a secure, randomly generated string."}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"randomly_generated_secure_key",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h3,{id:"langflow_new_user_is_active",children:"LANGFLOW_NEW_USER_IS_ACTIVE"}),"\n",(0,o.jsxs)(n.p,{children:["By default, this variable is set to ",(0,o.jsx)(n.code,{children:"False"}),". When enabled, new users are automatically activated and can log in without requiring explicit activation by the superuser."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);