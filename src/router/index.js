import { createRouter, createWebHistory } from 'vue-router'
import Admin from "../views/Admin.vue"
import Dashboard from "../views/AdminPage.vue"
import setting from "../views/Settings.vue"
import AddStudent from "../views/AddStudent.vue"
import AddTeacher from "../views/AddTeacher.vue"
import AllGroup from "../views/AllGroup.vue"
import addGroup from "../views/AddGroup.vue"
import Notification from "../views/Notification.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Admin,
      children:[
        {
          path: "/",
          component: Dashboard,
        },
        {
          path: "/settings",
          component: setting,
        },  
        {
          path: "/allGroup",
          component: AllGroup
        },  
        {
          path: "/addGroup",
          component: addGroup
        },  
        {
          path: "/Notification",
          component: Notification
        },  
        
      ]
    },
    {
      path:'/add/student',
      component: AddStudent
    },
    {
      path:'/add/teacher',
      component: AddTeacher
    }
  ]
})


export default router

