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
            this.data.input1 = '1';
            this.data.input2 = '2';
            this.text = 'Hello, world! ' + Math.add(3, 2).toString();
            this.myModel = 
            {
                value: 'Starting value'
            };
        
            this.clearModel = function()
            {
                alert(this.myModel.value);
                this.myModel.value = '';
            };
        }], // we'll instantiate this controller "as" the above name
        link: function () {}
    };
});