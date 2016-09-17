(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.textbox = {textboxMessage: ""};
    $scope.message = "";
    $scope.countItem = function (items){
      var itemArray = items.split(',');
      var validItems = countValidItem(itemArray);
      displayMessage(validItems);
    };

    function displayMessage (itemCount) {
      if (itemCount <= 3)
      {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too Much!";
      }
    }

    function countValidItem(itemArray) {
      var validItemCount = 0;
      for (var count = 0; count < itemArray.length; count++){
        if (itemArray[count] != "") {
          validItemCount = validItemCount + 1;
        }
      }

      return validItemCount;
    }

  };





})();
