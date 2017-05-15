angular
    .module('toDo.list') // No array, as we are "extending" the module
    .controller('ListCtrl', ListCtrl); // Define our controller (Notice the naming convention - uppercase first letter, Ctrl suffix)

function ListCtrl($http) {

  var vm = this;

     $http.get('/api/todos').then(function(cb){
       vm.list = cb.data;
      //get current time
       var time = new Date().getTime();
       //  console.log(new Date(time)); return: Thu May 11 2017 18:58:30 GMT-0400 (EDT)

       // get index 0 to 15 -> Thu May 11 2017
       vm.dateTod = new Date(time).toString().slice(0,15);
      //returns number of milliseconds
       vm.date = Date.now();

        // loop through each object in mongo
         for (var i=0;i<cb.data.length; i++) {
            //change mongo time(2017-5-11T10:32:32) to seconds
             cb.data[i].dueDate = (new Date(cb.data[i].dueDate)).getTime();
            //change milliseconds to human readable date for Due today
             cb.data[i].isTod = (new Date(cb.data[i].dueDate).toString().slice(0,15));
             console.log(cb.data[i].isTod);

         }

     });

    vm.check = function(id){
     $http.post('/api/completed',{ id : id})
      .then(function(response){
        console.log(response);
      });
    };

}
