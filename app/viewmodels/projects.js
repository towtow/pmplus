define(['plugins/http', 'durandal/app', 'knockout', 'viewmodels/shell'], function (http, app, ko, shell) {
    var model = {
        activate: function () {
            return http.get(shell.restRoot().projects).done(function (result) {
                model.projects(result);
            });
        },
        name: ko.computed(function () {
            return shell.restRoot().myUser.name;
        }, shell),
        projects: ko.observableArray()
    };
    return model;
});
