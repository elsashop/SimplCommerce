﻿(function() {
    var adminApp = angular.module('hvAdmin', [
        'ui.router',
        'ngMaterial',
        'ngMessages',
        'smart-table',
        'ngFileUpload',
        'ui.bootstrap',
        'summernote',
        'hvAdmin.dashboard',
        'hvAdmin.user',
        'hvAdmin.category',
        'hvAdmin.product'
    ]);

    adminApp.config([
        '$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/dashboard");
        }
    ]);
})();