// Acesse o site OneCompiler (Link em anexo), copie e cole o array 'numerosDaSorte', e logo em seguida escreva o código necessário para avaliar cada elemento do array e imprimir uma frase seguindo algum dos seguintes três modelos:

// - X é par e menor que 50
// - X é menor que 50
// - X é maior que 50


let numerosDaSorte = [37, 14, 26, 5, 94, 87];

for(i=0; i<numerosDaSorte.length; i++){
    let x = numerosDaSorte[i];

    if (x % 2 === 0 && x < 50) {
        console.log(x,"é par e menor que 50");
    } else if (x < 50){
        console.log(x,'é menor que 50');
    } else {
        console.log(x,'é maior que 50');    
    }
}