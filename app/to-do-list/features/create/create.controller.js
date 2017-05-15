angular
    .module('toDo.create') // No array, as we are "extending" the module
    .controller('CreateCtrl', CreateCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CreateCtrl($http) {
  var vm = this;
  vm.data = {
    text: '',
    date: ''
  };

  vm.createdata = function(){
    var entry = {
      actualTodo: vm.data.text,
      dueDate: vm.data.date
    };
    $http.post('/api/todos', entry).then(function(data){
      console.log(data);
    });

  };
}
