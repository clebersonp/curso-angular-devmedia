app.controller('aula09Controller_1', ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa){
    console.log("Criou Controller 09_1");
    
    $scope.pessoa = new Pessoa();
    
    
                                      
    console.log(operacoes.somar(10, 10));
    
}]);

app.controller('aula09Controller_2', ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa){
    console.log("Criou Controller 09_2");
    
    $scope.pessoa = new Pessoa();
    $scope.pessoa.nome = "Cleberson Pedreira Pauluci";
    $scope.pessoa.idade = 25;
    
    console.log(operacoes.subtrair(20, 10));
    
}]);