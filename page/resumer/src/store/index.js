import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
  		selected: 'profile',
  		resume: {
  			config: [
  				{field: 'profile', icon: 'id'},
  				{field: 'workHistory', icon: 'work'},
  				{field: 'education', icon: 'book'},
  				{field: 'projects', icon: 'heart'},
  				{field: 'awards', icon: 'cup'},
  				{field: 'contacts', icon: 'phone'}
  			],
  			profile: {
  				name: '应xx',
  				city: '杭州',
  				title: 'xxx工程师',
  				birthday: '1992-02-03'
  			},
  			'workHistory': [
  				{company:'AL',content:`公司总部设在XXXX区，先后在北京、上海成立分公司`},
  				{company:'AH',content:`公司总部设在XXXX区，先后在北京、上海成立分公司`},
  			],
  			education: [
  				{school: '韩琛古惑仔高中', content: '文字'}
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
			state.selected = payload
		},
        updateResume(state, {path, value}){
            objectPath.set(state.resume, path, value)
        }
	}
})