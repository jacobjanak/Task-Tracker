(function(){"use strict";var t={8631:function(t,e,n){var r=n(9242),a=n(3396);const s={class:"container"};function o(t,e,n,r,o,i){const d=(0,a.up)("Header"),l=(0,a.up)("AddTask"),u=(0,a.up)("Tasks");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(d,{title:"Task Tracker",onAddTaskToggle:i.addTaskToggle},null,8,["onAddTaskToggle"]),(0,a.Wm)(l,{showAddTask:o.showAddTask,onAddTask:i.addTask},null,8,["showAddTask","onAddTask"]),(0,a.Wm)(u,{tasks:o.tasks,onToggleReminder:i.toggleReminder,onDeleteTask:i.deleteTask},null,8,["tasks","onToggleReminder","onDeleteTask"])])}var i=n(7139);function d(t,e,n,r,s,o){const d=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("h1",null,(0,i.zw)(n.title),1),(0,a.Wm)(d,{text:"Add Task",color:"green",onClick:e[0]||(e[0]=e=>t.$emit("add-task-toggle"))})])}function l(t,e,n,r,s,o){return(0,a.wg)(),(0,a.iD)("button",{class:"btn",style:(0,i.j5)({background:n.color})},(0,i.zw)(n.text),5)}var u={name:"Button",props:{text:String,color:String}},c=n(89);const k=(0,c.Z)(u,[["render",l]]);var m=k,p={name:"Header",props:{title:String},components:{Button:m}};const h=(0,c.Z)(p,[["render",d],["__scopeId","data-v-63129215"]]);var f=h;const g=t=>((0,a.dD)("data-v-e3294fa0"),t=t(),(0,a.Cn)(),t),T={class:"form-control"},v=g((()=>(0,a._)("label",{for:"task-text-input"},"Task",-1))),b={class:"form-control"},y=g((()=>(0,a._)("label",{for:"date-input"},"Day & Time",-1))),w={class:"form-control form-control-check"},x=g((()=>(0,a._)("label",{for:"reminder-check"},"Set Reminder",-1))),_=g((()=>(0,a._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function A(t,e,n,s,o,d){return(0,a.wg)(),(0,a.iD)("form",{class:"add-form",onSubmit:e[3]||(e[3]=(...t)=>d.onSubmit&&d.onSubmit(...t)),style:(0,i.j5)(""+(n.showAddTask?"display:block;":"display:none;"))},[(0,a._)("div",T,[v,(0,a.wy)((0,a._)("input",{id:"task-text-input",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.text=t),name:"text",placeholder:"Add Task",required:""},null,512),[[r.nr,o.text]])]),(0,a._)("div",b,[y,(0,a.wy)((0,a._)("input",{id:"date-input",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>o.day=t),name:"day",placeholder:"Add Day & Time"},null,512),[[r.nr,o.day]])]),(0,a._)("div",w,[x,(0,a.wy)((0,a._)("input",{id:"reminder-check",type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>o.reminder=t),name:"reminder"},null,512),[[r.e8,o.reminder]])]),_],36)}var D={name:"AddTask",props:{showAddTask:Boolean},data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){t.preventDefault(),this.$emit("add-task",{text:this.text,day:this.day,reminder:this.reminder}),this.text="",this.day="",this.reminder=!1}}};const O=(0,c.Z)(D,[["render",A],["__scopeId","data-v-e3294fa0"]]);var j=O;function S(t,e,n,r,s,o){const i=(0,a.up)("Task");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tasks,(e=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{task:e,onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id)},null,8,["task","onToggleReminder","onDeleteTask"])])))),256)}function R(t,e,n,r,s,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["task",n.task.reminder?"reminder":""]),onDblclick:e[1]||(e[1]=e=>t.$emit("toggle-reminder"))},[(0,a._)("h3",null,[(0,a.Uk)((0,i.zw)(n.task.text)+" ",1),(0,a._)("i",{class:"fas fa-times",onClick:e[0]||(e[0]=e=>t.$emit("delete-task"))})]),(0,a._)("p",null,(0,i.zw)(n.task.day),1)],34)}var C={name:"Task",props:{task:Object}};const I=(0,c.Z)(C,[["render",R],["__scopeId","data-v-66e73982"]]);var Z=I,$={name:"Tasks",props:{tasks:Array},components:{Task:Z},emits:["toggle-reminder","delete-task"]};const M=(0,c.Z)($,[["render",S]]);var W=M,z={name:"App",components:{Header:f,AddTask:j,Tasks:W},data(){return{tasks:[],showAddTask:!1,lastTaskId:3}},methods:{addTaskToggle(){this.showAddTask=!this.showAddTask,console.log(this.showAddTask)},addTask(t){this.lastTaskId++,t.id=this.lastTaskId,this.tasks.push(t)},toggleReminder(t){for(let e=0;e<this.tasks.length;e++)if(this.tasks[e].id===t){this.tasks[e].reminder=!this.tasks[e].reminder;break}},deleteTask(t){if(confirm("Delete this task?"))for(let e=0;e<this.tasks.length;e++)if(this.tasks[e].id===t){this.tasks.splice(e,1);break}}},created(){this.tasks=[{id:"1",text:"Doctors Appointment",day:"March 5th at 2:30pm",reminder:!0},{id:"2",text:"Meeting with boss",day:"March 6th at 1:30pm",reminder:!0},{id:"3",text:"Food shopping",day:"March 7th at 2:00pm",reminder:!1}]}};const B=(0,c.Z)(z,[["render",o]]);var H=B;(0,r.ri)(H).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,s){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],s=t[u][2];for(var i=!0,d=0;d<r.length;d++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[d])}))?r.splice(d--,1):(i=!1,s<o&&(o=s));if(i){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,s,o=r[0],i=r[1],d=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(d)var u=d(n)}for(e&&e(r);l<o.length;l++)s=o[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},r=self["webpackChunktasks"]=self["webpackChunktasks"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8631)}));r=n.O(r)})();
//# sourceMappingURL=app.284fc895.js.map