export default function Inverter(numeros){
    let num = [];
    let tamanho =-1;
    let contador=0;
    
    for(let item of numeros){
        tamanho++;
    };
    
    for(let i=tamanho;i>=0;i--){
        num[contador]=numeros[i];
        contador++;
    }

    return num;

}