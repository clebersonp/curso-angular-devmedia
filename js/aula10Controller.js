app.controller('controllerAula10', ['$scope', 'saudacaoFilter', function($scope, saudacaoFilter){
    
    console.log("Iniciou o controller aula 10");
    
    /*criar objeto pessoa*/
    $scope.pessoa = {
        
        nome: "devmedia",
        idade: 32
        
    };
    
    /*usando um filtro dentro do controller, para utilizar um filtro no controller
     precisa adicionar a palavra reservada Filter no nome do filtro que foi criado*/
    console.log(saudacaoFilter('Usando filtro dentro do controller'));
    
}]);