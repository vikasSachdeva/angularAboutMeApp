(function() {
  'use strict';

  angular
    .module('enukeTest')
    .controller('ContactMeController', ContactMeController);
    
    function ContactMeController($log,FormSubmitService,toastr) {
        var vm = this;
        vm.user = {};
        vm.submitForm = function() {
            $log.debug('formData: ',vm.user);
            activate();
        }
        
        function activate() {
            return submitForm().then(function() {
                $log.debug('Activated Form Submit View');
            });
        }

        function submitForm() {
            return FormSubmitService.submitForm(vm.user)
                .then(function(data) {
                    $log.debug(data);
                    showToastr();
                    return vm.showSuccessToastr;
                });
        }
        
        function showToastr() {
            toastr.success('Form Submission is Success');
        }
    }
})();