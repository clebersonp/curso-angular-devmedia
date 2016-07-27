app.filter('saudacao', function(){
    return function(nome) {
        return 'olá ' + nome + '!';
    };
});