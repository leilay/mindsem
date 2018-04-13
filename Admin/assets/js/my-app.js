new Vue({
	el: '#app',
	methods: {
		handleClick(row) {
			console.log(row);
		}
	},

	data() {
		return {
			tableData: [{
				date: '2016-05-03',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-02',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-04',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}, {
				date: '2016-05-01',
				name: '王小虎',
				province: '上海',
				city: '普陀区',
				address: '上海市普陀区金沙江路 1518 弄',
				zip: 200333
			}],
			//user
			userFilter: {
				user: '',
				status: 'shanghai'
			},
			ruleForm: {
				name: '',
				phone: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				status: '可用',
				desc: ''
			},
			userData: [{
				id: '0',
				username: 'gongchang',
				nickname: '小张',
				phone: '13666667777',
				desc: '',
				loginTime: '2018-04-13 13:24'
			}, {
				id: '1',
				username: 'ming',
				nickname: '小明',
				phone: '13677778888',
				desc: '',
				loginTime: '2018-04-13 13:24'
			}, {
				id: '2',
				username: 'bird',
				nickname: '大鹏',
				phone: '13688889999',
				desc: '',
				loginTime: '2018-04-13 13:24'
			}, {
				id: '3',
				username: 'fly',
				nickname: '小飞',
				phone: '13423456789',
				desc: '',
				loginTime: '2018-04-13 13:24'
			}],
			activeName: 'tab1',
			//	role
			roleData: [{
				id: '0',
				name: '系统管理员',
				status: '可用',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: '1',
				name: '系统客服',
				status: '可用',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: '2',
				name: '商铺管理员',
				status: '可用',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: '3',
				name: '角色名称',
				status: '不可用',
				desc: '',
				time: '2018-04-13 13:24'
			}],

			roleList: [{
				label: '管理员',
				children: [{
					label: 'Admin',
				}]
			}, {
				label: '商户号',
				children: [{
					label: '商户号0001',
				}, {
					label: '商户号002',
				}]
			}, ],
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			//auth
			authData: [{
				id: '0',
				name: '功能001',
			}, {
				id: '1',
				name: '功能002',
			}, {
				id: '2',
				name: '功能003',
			}, {
				id: '3',
				name: '功能004',
			}],
			coopData: [{
				id: 'coop123456789',
				nickname: '经销商简称',
				type: '',
				status: '可用',
				phone: '13666667777',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: 'coop123456789',
				nickname: '经销商简称',
				type: '',
				status: '可用',
				phone: '13666667777',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: 'coop123456789',
				nickname: '经销商简称',
				type: '',
				status: '可用',
				phone: '13666667777',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: 'coop123456789',
				nickname: '经销商简称',
				type: '',
				status: '可用',
				phone: '13666667777',
				desc: '',
				time: '2018-04-13 13:24'
			}, {
				id: 'coop123456789',
				nickname: '经销商简称',
				type: '',
				status: '可用',
				phone: '13666667777',
				desc: '',
				time: '2018-04-13 13:24'
			}, ],

			cateList: [{
				label: '品类1',
				children: [{
					label: '品类1-1',
				}]
			}, {
				label: '品类2',
				children: [{
					label: '品类2-1',
				}, {
					label: '品类2-2',
				}]
			}, ],

			count: 1,
		}
	}
})