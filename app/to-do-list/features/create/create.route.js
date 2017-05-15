angular
    .module('toDo.create') // No array, as we are "extending" the module
    .config(createConfig);

function createConfig($stateProvider) {
    $stateProvider.state({
        name: 'create', // name of the route
        url: '/create', // url endpoint for the route
        templateUrl: '/to-do-list/features/create/create.html', // The url to the view template
        controller: 'CreateCtrl', // The name of the controller to use for this route
        controllerAs: 'CreateVM' // The namespace for the view to access the view model
    })
}
