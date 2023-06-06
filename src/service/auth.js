import axios from './axios'

const AuthServise = {
	register(user) {
		return axios.post('/users', {user})
	},
	login(user) {
		return axios.post('/login', {user})
	},
	getUser() {
		return axios.get('/users')
	},
}

export default AuthServise
