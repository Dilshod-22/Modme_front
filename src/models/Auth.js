import AuthServise from '../service/auth'

const state = {
	isLoading: false,
	user: null,
	errors: null,
	isLoggedIn: null,
}


const mutations = {
	registerStart(state) {
		state.isLoading = true
		state.user = null
		state.errors = null
		state.isLoggedIn = null
	},
	registerSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
		state.isLoggedIn = true
	},
	registerFailure(state, payload) {
		state.isLoading = false
		state.errors = payload.errors
		state.isLoggedIn = false
	},
	loginStart(state) {
		state.isLoading = true
		state.user = null
		state.errors = null
		state.isLoggedIn = null
	},
	loginSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
		state.isLoggedIn = true
	},
	loginFailure(state, payload) {
		state.isLoading = false
		state.errors = payload.errors
		state.isLoggedIn = false
	},
	currentUserStart(state) {
		state.isLoading = true
	},
	currentUserSuccess(state, payload) {
		state.isLoading = false
		state.user = payload
		state.isLoggedIn = true
	},
	currentUserFailure(state) {
		state.isLoading = false
		state.user = null
		state.isLoggedIn = false
	},
	logout(state) {
		state.user = null
		state.isLoggedIn = false
	},
}

const actions = {
	register(context, user) {
		return new Promise((resolve, reject) => {
			context.commit('registerStart')
			AuthServise.register(user)
				.then(response => {
					context.commit('registerSuccess', response.data.user)
					resolve(response.data.user)
				})
				.catch(error => {
					context.commit('registerFailure', error.response.data)
					reject(error.response.data)
				})
		})
	},
	login(context, user) {
        console.log('kelitti');
		return new Promise((resolve, reject) => {
			context.commit('loginStart')
			AuthServise.login(user)
				.then(response => {
					context.commit('registerSuccess', response.data.user)
					resolve(response.data.user)
				})
				.catch(error => {
					context.commit('registerFailure', error.response.data)
					reject(error.response.data)
				})
		})
	},
	getUser(context) {
		return new Promise(resolve => {
			context.commit('currentUserStart')
			AuthServise.getUser()
				.then(response => {
					context.commit('currentUserSuccess', response.data.user)
					resolve(response.data.user)
				})
				.catch(() => context.commit('currentUserFailure'))
		})
	},
	logout(context) {
		context.commit('logout')
		removeItem('token')
	},
}

export default {
	state,
	mutations,
	actions,
}
