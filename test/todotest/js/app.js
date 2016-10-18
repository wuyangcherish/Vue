(function(exports){
	var filters = {
		all: function (todos) {
			return todos;
		},
		active: function (todos) {
			return todos.filter(function (todo) {
				return !todo.completed;
			});
		},
		completed: function (todos) {
			return todos.filter(function (todo) {
				return todo.completed;
			});
		}
	};

	exports.app = new Vue({
		el:'.app',
		data:[
			{text:'first task', completed: false},
			{text:'second task', completed: false},
			{text:'third task', completed: true},
			{text:'fourth task', completed: false},
			{text:'fifth task', completed: true},
			{text:'sixth task', completed: false},
			{text:'seventh task', completed: false},
			{text:'eighth task', completed: false}
		],
		computed: {
			filteredTodos: function () {
				return filters[this.visibility](this.todos);
			}
		},
	})
})(window)