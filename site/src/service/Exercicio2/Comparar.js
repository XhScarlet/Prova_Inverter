export default function comp(numeros1,numeros2){
    let tamanho1=-1;
    let tamanho2=-1;

    let contador=0;
    

    for(let item in numeros1){
        tamanho1++;
        for(let item in numeros2){
            tamanho2++;
        }
    }

    // if(tamanho1>tamanho2){
    // for(let item in numeros1){
    //     if(item !== numeros2){
    //         contador++;
    //     }
        
    // }
    // }

    for (let i = 0; i < tamanho1 && tamanho2 ; i++) { 
        for (let j = i; j < tamanho2; j++){ 
        if (numeros1[i] === numeros2[j]) break; 
            else contador++ 
        } 
     }

    console.log(numeros1[1,4],[1,6,8],numeros2[1,4],[1,6,8])
    return contador--;
}