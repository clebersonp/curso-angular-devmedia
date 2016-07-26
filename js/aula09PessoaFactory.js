app.factory('Pessoa', function(){
    console.log("Criout Factory aula 09");
    
    var Pessoa = function(){
        this.nome = "Cleberson";
        this.idade = 31;
        
        this.cumprimentar = function() {
            return "Olá " + this.nome + "!";
        };
    };
    
    return Pessoa;
    
});