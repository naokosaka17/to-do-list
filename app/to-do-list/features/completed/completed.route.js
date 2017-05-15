angular
    .module('toDo.completed') // No array, as we are "extending" the module
    .config(completedConfig);

function completedConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'completed', // name of the route
        url: '/completed', // url endpoint for the route
        templateUrl: '/to-do-list/features/completed/completed.html', // The url to the view template
        controller: 'CompletedCtrl', // The name of the controller to use for this route
        controllerAs: 'CompletedVM' // The namespace for the view to access the view model
    })
}
