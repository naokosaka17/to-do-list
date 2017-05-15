angular
    .module('toDo.completed') // No array, as we are "extending" the module
    .controller('CompletedCtrl', CompletedCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function CompletedCtrl($http) {
  // vm stands for View Model - anything on "the vm" is exposed to the view
  var vm = this;

  $http.get('/api/todos').then(function(cb){
    vm.list = cb.data;
  });

  vm.check = function(id){
   $http.post('/api/uncompleted',{ id : id})
    .then(function(response){
      console.log(response);
    });
  };
}
