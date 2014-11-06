define(['plugins/http', 'durandal/app', 'knockout', 'underscore', 'viewmodels/shell'], function (http, app, ko, _, shell) {
    var model = {
        activate: function (term) {
            console.log('Searching for ' + term);
            var url = _.template(decodeURI(shell.restRoot().globalSearch))({term: term});
            return http.get(url).done(function (result) {
                console.log('Search result:');
                console.log(result);
                model.searchResult(result);
            });
        },
        searchResult: ko.observable()
    };
    return model;
});
