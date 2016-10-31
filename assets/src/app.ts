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
			.when(Routes.EVENTS, { 
				controller: EventsCtrl,
				templateUrl: 'app/templates/events.html'
			})
			.when(Routes.CLICKS, { 
				controller: ClicksCtrl,
				templateUrl: 'app/templates/clicks.html'
			})
			.when(Routes.HISTORY, { 
				controller: HistoryCtrl,
				templateUrl: 'app/templates/history.html'
			})
			.when(Routes.TOOLS, { 
				controller: ToolsCtrl,
				templateUrl: 'app/templates/tools.html'
			})

			.otherwise({redirectTo: '/'});
	})
    
}