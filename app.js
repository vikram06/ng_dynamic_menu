

angular.module('myapp', ['ui.bootstrap'])
  .controller("MainController", ["$scope", 
        function($scope){
          $scope.bodyText = "Test Menu";
          
          
           $scope.showSubmenu = function(item) {
            if($scope.activeParentIndex === item){
                $scope.activeParentIndex = "";
            }else{
                $scope.activeParentIndex = item;
            }
        }

        $scope.isShowing = function(index) {
            if($scope.activeParentIndex === index){
                return true;  
            } else{
                return false;
            }
        };
            
        $scope.modulos = 
          [
            {"module":"Admin System ",
           "adm_modulo_id":1,
           "submodule":[{"res":"Angular","url":"#/admin/1"},
                        {"res":"Linux","url":"#/admin/2"},
                        {"res":"Server","url":"#/admin/3"}
                        ]
            },
            {"module":"Admin System ",
           "adm_modulo_id":2,
           "submodule":[{"res":"Angular","url":"#/admin/1"},
                        {"res":"Linux","url":"#/admin/2"},
                        {"res":"Server","url":"#/admin/3"}
                        ]
            }

          ];

        }]);