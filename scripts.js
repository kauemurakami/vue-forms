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
			newMember: {
				fname: null,
				lname: null,
				instrument: null,
			}
		}
	},

};

Vue.createApp(handlingForms).mount('#app');
