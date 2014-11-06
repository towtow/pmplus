define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {
    var model = {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Sign In', moduleId: 'viewmodels/signin', nav: true },
                { route: 'projects', moduleId: 'viewmodels/projects', nav: true },
                { route: 'searchResult/:term', moduleId: 'viewmodels/searchResult', nav: false }
            ]);
            router.buildNavigationModel();
            return router.activate();
        },
        restRoot: ko.observable(),
        onSignIn: function (rest) {
            model.restRoot(rest);
            router.navigate('projects');
        },
        searchTerm: ko.observable(),
        search: function () {
            var term = model.searchTerm();
            if (term) {
                router.navigate('searchResult/' + term);
            }
        }
    };
    return model;
});
