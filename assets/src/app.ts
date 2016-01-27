///<reference path = "./reference.ts" />

module application {
    
    var app = angular.module('Application', ['ngRoute', 'templates']);
    
    /*
	 * App configuration. 
	 * 
	 * Route settings.
	 */
	app.config(($routeProvider, $logProvider) => {
		
        //Turn on debug output
		$logProvider.debugEnabled(true);
		
		$routeProvider
			.when(Routes.HOME, { 
				controller: HomeCtrl,
				templateUrl: 'app/templates/home.html'
			}) 
			.otherwise({redirectTo: '/'});
	})
    
}