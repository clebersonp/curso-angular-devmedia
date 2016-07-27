/*service contem todos os métodos utilitários*/
app.service('operacoes', function(){
    
    console.log("Criou Service aula 09");
    
     this.somar = function(valor1, valor2){
        return valor1 + valor2;
    };
    
     this.subtrair = function(valor1, valor2) {
        return valor1 - valor2;
    };
});