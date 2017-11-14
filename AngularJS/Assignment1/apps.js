(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = [$scope];

function LunchCheckController($scope) {
  $scope.bigText = ""
  $scope.sayMessage = function () {
   var listText = $scope.bigText.split(",");
   var emptyCount=0;
   for (var i=0; i < listText.length; i++) {
     if (listText[i].trim().length == 0){
       emptyCount++;
     }
   };

   var listLength=0
   listLength=listText.length - emptyCount;
   console.log(listLength);
   if (listLength==0) {
    $scope.displayWarning = 'Please enter data first';
  } else if (listLength <= 3){
    $scope.displayWarning = 'Enjoy!';
  } else {
    $scope.displayWarning = 'Too much!';
  }
  };

}

})();
