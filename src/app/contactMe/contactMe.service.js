(function(){
    "use strict";
    
    angular.module('enukeTest')
        .factory('FormSubmitService',FormSubmitService);
        
    function FormSubmitService($http,$log) {
        var service = {
            submitForm: submitForm
        };
        
        return service;
        
        function submitForm(formData) {
            return $http.post('http://jsonplaceholder.typicode.com/comments',formData)
                .then(submitFormComplete)
                .catch(submitFormFailed);

            function submitFormComplete(response) {
                return response;
            }

            function submitFormFailed(error) {
                $log.error('XHR Failed for submitForm.' + error.data);
            }
        }
    }
})();