import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
  		selected: 'profile',
  		resume: {
  			config: [
  				{field: 'profile', icon: 'id'},
  				{field: 'work history', icon: 'work'},
  				{field: 'education', icon: 'book'},
  				{field: 'projects', icon: 'heart'},
  				{field: 'awards', icon: 'cup'},
  				{field: 'contacts', icon: 'phone'}
  			],
  			profile: {
  				name: '',
  				city: '',
  				title: ''
  			},
  			'work history': [
  				{company:'AL',content:'我的第二份工作是'},
  				{company:'TX',content:'我的第一份工作是'},
  			],
  			education: [
  				{school: 'AL', content: '文字'}
  			],
  			projects: [
  				{company:'AL',content:'我的第二份工作是'},
  				{company:'TX',content:'我的第一份工作是'},
  			],
  			awards: [
  				{school: 'AL', content: '文字'}
  			],
  			contacts: [
  				{contact: 'phone', content: '文字'},
  				{contact: 'QQ', content: '文字'}
  			],
  		}
	},
	mutations: {
		switchTab(state, payload){
			state.selectd = payload
		}
	}
})