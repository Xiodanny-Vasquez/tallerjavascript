 let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 function numpares(lista){
    let pares = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            pares.push(lista[i]);
        }   
    }
    return pares;
 }

 console.log(numpares(numeros));