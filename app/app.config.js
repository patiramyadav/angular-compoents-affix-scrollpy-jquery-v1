myapp.config(function($stateProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $stateProvider
        .state('/', {
            url: "/",
            views: {
                "viewA": {
                    template: "index.viewA"
                },
                "viewB": {
                    template: "index.viewB"
                }
            }
        })
    });