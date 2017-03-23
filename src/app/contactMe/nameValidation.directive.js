(function() {
    "use strict";
    
    angular.module('enukeTest')
        .directive('validUsername',validUsername);
        
    function validUsername() {
        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: linkFunc
        };
        
        return directive;
        
        function linkFunc(scope, el, attr, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var isBlank = (viewValue === '');
                var invalidChars = !isBlank && !/^[a-zA-Z\s]+$/.test(viewValue);
                var invalidLen = !isBlank && !invalidChars && (viewValue.length < 5 || viewValue.length > 20);
                ctrl.$setValidity('isBlank', !isBlank);
                ctrl.$setValidity('invalidChars', !invalidChars);
                ctrl.$setValidity('invalidLen', !invalidLen);
                scope.usernameGood = !isBlank && !invalidChars && !invalidLen;
            })
        }
    }
    
})();