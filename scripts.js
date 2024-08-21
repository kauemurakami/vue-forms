members = [
	{
		fname: 'John',
		lname: 'Lennon',
		instrument: 'Violão'
	},
	{
		fname: 'George',
		lname: 'Harrison',
		instrument: 'Guitarra'
	}
]

const handlingForms = {

	data() {
		return {
			members: window.members,
			newMember: { } //com v-model ele cria as propriedades
		}
	},
	methods:{
		addMember : function(){
			this.members.push(this.newMember)
			this.newMember = {}
		}
	}

};

Vue.createApp(handlingForms).mount('#app');
