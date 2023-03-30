const { createApp } = Vue;

createApp({
	data() {
		return {
			taskList: [
				{
					text: '(7:00) prendere il pane',
					done: false,
				},
				{
					text: '(7:30) preparare la colazione',
					done: false,
				},
				{
					text: '(8:30) pulire casa',
					done: false,
				},
				{
					text: '(9:30) iniziare lezioni online',
					done: false,
				},
			],
			ingredient: '',
			error: false,
		};
	},
	methods: {
		newTask() {
			const newIngredient = {
				text: this.ingredient,
				done: false,
			};
			if (this.ingredient != '') this.taskList.push(newIngredient);
			return;
		},
		cancel(index) {
			this.taskList.splice(index, 1);
		},
		completed(index) {
			this.taskList[index].done = true;
		},
	},
}).mount('#app');
