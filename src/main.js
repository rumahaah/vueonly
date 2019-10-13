Vue.use(VueRouter);

const Content =  httpVueLoader('./src/components/con-tent.vue')
const Contactus =  httpVueLoader('./src/components/contact-us.vue')
const About =  httpVueLoader('./src/components/a-bout.vue')
const Dashboard =  httpVueLoader('./src/components/dash-board.vue')
const Handover =  httpVueLoader('./src/components/hand-over.vue')
const ProjectSA =  httpVueLoader('./src/components/project-sa.vue')

const router = new VueRouter({
 routes:[
 { path:'/', component: Content },
 { path:'/about', component: About },
 { path:'/contactus', component: Contactus },
 { path:'/dashboard', component: Dashboard },
 { path:'/handover', component: Handover },
 { path:'/project_sa', component: ProjectSA },
 ]
});

const app = new Vue({
// new Vue({
  router,
  el: "#app",
  // data: {
  //   // friends: [],
  //   // friends: ["satu", "dua"],
  //   friends: [
  //     {
  //       name: "satu",
  //       id: 01 
  //     },
  //     { 
  //       name: "dua", 
  //       id: 02
  //     } 
  //    ],
  // },
  components: {
    'nav-bar': httpVueLoader('./src/components/nav-bar.vue'),
    'left-bar': httpVueLoader('./src/components/left-bar.vue'),
    // 'foot-er': httpVueLoader('./src/components/foot-er.vue'),
    // 'con-tent': Content
  },
  mounted() {
    // console.log("mounted woi");
    // // fetch("http://rest.learncode.academy/api/rumahaah/friends")
    // fetch("http://127.0.0.1:8000/winopp/api/winopp/")
    //   .then(response => response.json())
    //   .then((data) => {
    //     this.friends = data;
    //   })
  },

  template: `
    <div>
      <nav-bar></nav-bar>
      <left-bar></left-bar>
      <router-view></router-view>
      <!--<foot-er></foot-er>-->
    </div>
  `
})