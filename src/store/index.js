import {createStore} from 'vuex'
import Auth from "../models/Auth"
const store = createStore({
	state: {
		teacher:true,
		student:false
	},
	mutations: {
		teacher(){
			this.teacher = !this.teacher
		},
		student(){
			this.student = !this.student
		}
	},
	actions: {},
	modules: {Auth},
})

export default store
