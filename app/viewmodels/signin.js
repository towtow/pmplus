define(['plugins/http', 'durandal/app', 'knockout', 'viewmodels/shell'], function (http, app, ko, shell) {
    var model = {
        signin: function signin() {
            console.log("asdasd");
            http.get('https://ng.conject.com/rest').done(function (result) {
                shell.onSignIn(result);
            });
        }
    };
    return model;
});
