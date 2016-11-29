var indexPage = angular.module('indexPage', ['ui.router']);
indexPage.config(function($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    /*$stateProvider.state('index', {
        url : '/Index',
        views: {
            'header': {
                templateUrl : 'templates/profileHeader.html',
            },
            'content': {
                templateUrl : 'templates/Account.html',

            },
        }
    })*/

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('signin', {
            url:'/signin',
            templateUrl: '/signin/signin.html',
            controller: 'signin',
            params : { listings : null}

        })
        .state('signup', {
            url:'/signup',
            signup: '/signup/signup.html',
            controller: 'signup',
            params : { listings : null}

        })


});


indexPage.controller('viewProfile', function($scope, $http,$state) {

    console.log("Inside viewProfile");


    $scope.Profile = function()
    {
        window.location.assign("/Profile");
    }


});






