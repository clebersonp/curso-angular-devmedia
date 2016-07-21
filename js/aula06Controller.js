app.controller('aula06Controller', function($scope){
    $scope.nome = "Curso AngularJS";
    
    $scope.olaMundo = function(nome) {
        alert("Ola " + nome + "!");
    }
    
    console.log("Executou o controller aula06Controller, é instanciado quando a página é carregada");
    
});