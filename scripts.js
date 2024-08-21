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
			newMember: {} //com v-model ele cria as propriedades
		}
	},
	methods: {
		addMember: function () {
			//Nós só conseguimos que os dados inseridos no formulário 
			//sejam enviados para as propriedades de dado 
			//isso é One way Data Binding ou seja os dados 
			//só fluem nessa direção

			//Caso quisermos que qualquer alteração na propriedade de dados
			//seja enviada de volta para o formulário de usuário 
			// então temos ums Two way Data Binding
			if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
				this.members.push(this.newMember)
				this.newMember = {}
			}else {
				alert('All fields must be filled')
			}

		}
	}

};

Vue.createApp(handlingForms).mount('#app');
