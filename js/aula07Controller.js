app.controller("aula07Controller", function($scope){
    
    $scope.nomes = ['Cleberson', 'Paulo', 'Ricardo', 'João'];
    
    $scope.pessoas = [];
    
    $scope.pessoas.push( { nome : 'Ana', idade : 31 } );
    $scope.pessoas.push( { nome : 'Carlos', idade : 32 } );
    $scope.pessoas.push( { nome : 'Fabio', idade : 33 } );
    $scope.pessoas.push( { nome : 'Wellington', idade : 34 } );
    
    $scope.adicionarPessoa = function() {
        nome = document.getElementById("nomePessoa");
        idade = document.getElementById("idadePessoa");
        
        $scope.pessoas.push( { nome : nome.value, idade : idade.value } );
        
        /*limpar campos após inserir pessoa*/
        
        nome.value = '';
        idade.value = '';
        
        nome.focus();
    };
});