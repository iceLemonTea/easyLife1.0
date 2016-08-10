angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.articlePage', {
    url: '/articlePage',
    views: {
      'tab1': {
        templateUrl: 'templates/articlePage.html',
        controller: 'articlePageCtrl'
      }
    }
  })

  .state('tabsController.testPage', {
    url: '/testPage',
    views: {
      'tab2': {
        templateUrl: 'templates/testPage.html',
        controller: 'testPageCtrl'
      }
    }
  })

  .state('tabsController.classPage', {
    url: '/classPage',
    views: {
      'tab3': {
        templateUrl: 'templates/classPage.html',
        controller: 'classPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.searchPage', {
    url: '/SearchPage',
    views: {
      'tab1': {
        templateUrl: 'templates/searchPage.html',
        controller: 'searchPageCtrl'
      }
    }
  })

  .state('tabsController.articleDetailPage', {
    url: '/articleDetailPage',
    views: {
      'tab1': {
        templateUrl: 'templates/articleDetailPage.html',
        controller: 'articleDetailPageCtrl'
      }
    }
  })

  .state('tabsController.testDetailPage', {
    url: '/TestDetailPage',
    views: {
      'tab2': {
        templateUrl: 'templates/testDetailPage.html',
        controller: 'testDetailPageCtrl'
      }
    }
  })

  .state('loginPage', {
    url: '/LoginPage',
    templateUrl: 'templates/loginPage.html',
    controller: 'loginPageCtrl'
  })

$urlRouterProvider.otherwise('/page1/articlePage')

  

});