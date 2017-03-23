(function() {
    "use strict";
    
    angular.module('enukeTest')
        .directive('technicalWork',technicalWork);
        
    function technicalWork() {
        var directive = {
            restrict: 'E',
            scope: {
                title: '=',
                logo: '=',
                desc: '=',
                animation: '='
            },
            templateUrl: 'app/components/technicalWork/technicalWork.html',
            link: linkFunc,
            controller: TechWorkController,
            controllerAs: 'vm'
        };
        
        return directive;
        
        function linkFunc(scope, el, attr, vm) {
            
        }
        
        function TechWorkController($log) {
            var vm = this;
            activate();
            
            function activate() {
                // vm.awesomeThings = webDevTec.getTec();
                // $log.debug('awesomeThings: ',vm.awesomeThings);
            }
        }
    }
    
})();