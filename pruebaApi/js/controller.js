var app = angular.module("FinalApp");
app.controller("AppController", function ($scope, $http, $resource) {
    $scope.registros = [];
    //funcion para eliminar
    $scope.deletData = function (id) {
        var data = {
            id: id
        };
        $http.delete("http://localhost:8085/api/delete/" + JSON.stringify(data.id))
            .then(function (response) {
                if (response.data) {
                    $scope.msg = "DAtos eliminados exitosamente";
                    $scope.registros = $scope.getRegistros();
                    console.log(response.data);
                }
            })
            .catch(function (response) {
                $scope.msg = "Registro no existe"
                console.log(response);
            });
    };

    //carga automatica
    $http.get("http://localhost:8085/api/")
        .then(function (request) {
            $scope.registros = request.data;
            console.log(request.data)
        })
        .catch(function (request) {
            console.log(request);
        });
    //funciona para servicios que no sirve
    $scope.getRegistros = function () {
        $http.get("http://localhost:8085/api/")
            .then(function (request) {
                $scope.registros = request.data;
                console.log(request.data)
            })
            .catch(function (request) {
                console.log(request);
            });

    }



});
app.controller("NewRegisterController", function ($scope, $http, $resource) {
    //funcion para hacer post
    $scope.todo = [];
    /*$scope.postQuisui = function (nombre, edad, nacimiento, dpi) {
        $scope.newRegister = {
            'nombre': nombre,
            'edad': edad,
            'nacimiento': nacimiento,
            'dpi': dpi
        }

        $scope.httPost = function () {
            $http.http("http://localhost:8085/api/register", JSON.stringify(newRegister))
                .then(function (response) {
                    if (response.data) {
                        $scope.msg = "post ingresado exitosamente";
                        scope.todo.push($response.data.post);
                        console.log(response.data);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                });

        }
    }*/

    $scope.postQuisui = function () {
        $scope.todo = [];
        $http({
            url: 'http://localhost:8085/api/register',
            method: "post",
            data: {
                'nombre': $scope.nombre,
                'edad': $scope.edad,
                'nacimiento': $scope.nacimiento,
                'dpi': $scope.dpi
            }
        })
        
        
        .then(function (response) {
            if (response.data) {
                $scope.msg = "post ingresado exitosamente";
                $scope.todo.push(response.data.post);
                console.log(response.data);
            }
        })
        .catch(function (response) {
            console.log(response);
        });
        /*
        .success(function (response) {
            })
            .error(function (response) {
                toastr.success('Creacion de asignaciones fallo');
            })
            .finally(function (response) {
                $scope.todo = response.data.posts;
            })*/
    }
});