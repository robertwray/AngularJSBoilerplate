var app = angular.module('angularjsboilerplate', []);

app.controller('MainCtrl', ['$scope', 'Math', function ($scope, Math)
{
    this.text = 'Hello, world! ' + Math.add(3, 2).toString();
    this.myModel = 
    {
        value: 'Starting value'
    };

    this.clearModel = function()
    {
        this.myModel.value = '';
    };
}]);

app.directive('customButton', function() {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        template: '<a href="" class="myawesomebutton" style="background-color: red;" ng-transclude>' +
                    '<i class="icon-ok-sign"></i>' +
                  '</a>',
        link: function (scope, element, attrs) {
          // DOM manipulation/events here!
        }
    };
});

app.service('Math', function()
{
    this.add = function(x, y)
    {
        return x + y;
    };
});