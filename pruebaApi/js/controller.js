var app = angular.module("FinalApp");
app.controller("AppController", function ($scope, $http, $resource) {
    $scope.registros = [];

    $scope.deletData = function (id) {
        var data = {
            id: id
        };
        $http.delete("http://localhost:8085/api/delete/" + JSON.stringify(data.id))
            .then(function (response) {
                if (response.data) {
                    $scope.msg = "DAtos eliminados exitosamente";
                    console.log(response.data);
                }
            })
            .catch(function (response) {
                $scope.msg = "Registro no existe"
                console.log(response);
            });
    };

    $http.get("http://localhost:8085/api/")
        .then(function (request) {
            $scope.registros = request.data;
            console.log(request.data)
        })
        .catch(function (request) {
            console.log(request);
        });

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

    $scope.httPost = function () {
        $http.post("https://jsonplaceholder.typicode.com/posts", $scope.newPost[{
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
        }])
            .then(function (response) {
                console.log(response);
                $scope.todo.push($scope.newPost)
                $scope.newPost = {};
                console.log($scope.todo);
            }, function (response) {
                console.log(response);
            });

    }

});
app.controller("NewRegisterController", function ($scope, $http, $resource) {

});