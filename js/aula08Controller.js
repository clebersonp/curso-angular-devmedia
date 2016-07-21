app.controller("aula08Controller", function($scope){
    
    $scope.pessoa = novaPessoa();
    
    $scope.estados = ['SP', 'RJ', 'SC', 'ES'];
    
    $scope.pessoas = [];
    
    $scope.adicionarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        
        $scope.pessoa = novaPessoa();
        
        $scope.frm.$setUntouched();
        $scope.frm.$setPristine();
    };
    
});

function novaPessoa() {
    return {
        nome : '',
        email: '',
        sexo: 'F',
        estado: 'RJ'
    };
};