function calcularDesconto(){
    let nomeProduto = document.getElementById('nomeProduto').value;
    let valorOriginal = parseFloat(document.getElementById('valorOriginal').value);
    let percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);
   
    if (isNaN(valorOriginal) || isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100) {
        alert('Por favor, coloca ai o valor original e o percentual de desconto (entre 0 e 100).');
        return;
    }

    let valorDesconto = (valorOriginal * percentualDesconto) / 100;
   
    let valorFinal = valorOriginal - valorDesconto;

    
    document.getElementById('nomeProdutoResultado').textContent = nomeProduto;
    document.getElementById('valorDesconto').textContent = valorDesconto.toFixed(2);
    document.getElementById('valorFinal').textContent = valorFinal.toFixed(2);

   
    document.getElementById('resultado').style.display = 'block';
}


document.getElementById('desconto').addEventListener('submit', function(event) {
    event.preventDefault(); 
    calcularDesconto(); 
});


document.getElementById('reiniciar').addEventListener('click', function() {
    
    document.getElementById('desconto').reset();
    
    document.getElementById('resultado').style.display = 'none';
});
