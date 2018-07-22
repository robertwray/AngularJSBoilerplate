app.directive('coDependentFields', function()
{
    return {
        restrict: 'EA',
        replace: true,
        scope: true,
        templateUrl: '/scripts/module/view/co-dependent-fields.html',
        controllerAs: 'vm',
        controller: ['Math', function (Math)
        {
            this.data = {};
            this.data.input1 = '3';
            this.data.input2 = '2';

            this.data.requiredCheck = function()
            {
                var field1Set = this.input1 != '' && this.input1 != "";
                var field2Set = this.input2 != '' && this.input2 != "";
                
                if ((!field1Set && !field2Set) || (field1Set && field2Set)) 
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }],
        link: function () {}
    };
});