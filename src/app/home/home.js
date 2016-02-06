/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope,$state,$stateParams ) {

  $scope.text = {};

  $scope.analyze = function() {
    var x = $scope.text;
    console.log(x.test);

    var res = x.test.slice(0,2);
    console.log(res);


    if(res === "I ") {
      console.log('employee 1');
      $state.go('about',{id:1});
    } else if (res === "We") {
      console.log('employee 2');
      $state.go('about',{id:2});
    } else if (res === "Go") {
      console.log('employee 3');
      $state.go('about',{id:3});
    } else if (res === "Wi") {
      console.log('employee 4');
      $state.go('about',{id:4});
    } else if (res === "As") {
      console.log('employee 5');
      $state.go('about',{id:5});
    } else {
      alert('put in the right data pleaseeeeeee');
    }




    console.log('go');
  };


});

