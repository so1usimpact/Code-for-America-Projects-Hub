cfahubControllers.controller('HubController', 
    ['$scope', 'ProjectService', 'ProjectIdeaService', 
      function($scope, ProjectService, ProjectIdeaService) {
    $scope.cards = {};
    $scope.cards.projects = ProjectService.list();
    $scope.cards.ideas = ProjectIdeaService.list();
}]);

cfahubControllers.controller('wrong404Ctrl', ['$scope',
    function($scope) {
        
}]);