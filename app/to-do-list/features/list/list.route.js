angular
    .module('toDo.list') // No array, as we are "extending" the module
    .config(listConfig);

function listConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'list', // name of the route
        url: '/', // url endpoint for the route
        templateUrl: '/to-do-list/features/list/list.html', // The url to the view template
        controller: 'ListCtrl', // The name of the controller to use for this route
        controllerAs: 'ListVM' // The namespace for the view to access the view model
    })
}
