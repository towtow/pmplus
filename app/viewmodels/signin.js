define(['plugins/http', 'durandal/app', 'knockout', 'viewmodels/shell'], function (http, app, ko, shell) {
    var model = {
        username: ko.observable(),
        password: ko.observable(),
        signin: function signin() {
            http.post('https://ng.conject.com/ng/loginController.do?actionId=LoginForm.login&userNameTextBox_currentValue=' +
                encodeURIComponent(model.username()) + '&passwordTextBox_currentValue=' + encodeURIComponent(model.password()) +
                '&fname=topWindow&finitiat=topWindow&NG-FORM-VIEW-ID=/login/loginPage.xhtml&NG-FORM-MAPPING=/loginController').done(function () {
                    http.get('https://ng.conject.com/rest').done(function (result) {
                        shell.onSignIn(result);
                    });
                }
            );
        }
    };
    return model;
});
