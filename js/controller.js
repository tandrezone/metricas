
app.controller('MainController', function($scope, $rootScope, SegmentBuilder) {
    $scope.dataMainGroup = SegmentBuilder.currentSegment;
});