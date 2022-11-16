import { useState } from "react";
import React from "react";
import './index.scss';

import comp from '../../service/Exercicio2/Comparar.js'

export default function Figurinha(){

    const [numero1,setNumero1]= useState();
    const [numero2,setNumero2]= useState();
    const [numeros1,setNumeros1]= useState([]);
    const [numeros2,setNumeros2]= useState([]);
    const [resposta,setResposta]=useState("");

    function adicionarNum1(){
        let num= [...numeros1,numero1];
        setNumeros1(num);
    }

    function adicionarNum2(){
        let num= [...numeros2,numero2];
        setNumeros2(num);
    }

    function comparar(){
        let x= comp(numeros1,numeros2);
        
        setResposta(x);

    }
    
   
    
    return(
        <main>
            <header>
                <h1>2. Figurinha</h1>
            </header>
            
            <section>
            
                <div>
                    <label> Usuário 1</label>
                    <input type="number" value={numero1} onChange={e=> setNumero1(Number(e.target.value))}/>
                    <button onClick={adicionarNum1} >
                        Adicionar 
                    </button>

                    <div>
                        {numeros1.map(item=>
                            <p>{item}</p>
                            )}
                    </div>
                </div>

                <div>
                    <label> Usuário 2</label>
                    <input type="number" value={numero2} onChange={e=> setNumero2(Number(e.target.value))}/>
                    <button onClick={adicionarNum2} >
                        Adicionar 
                    </button>

                    <div>
                        {numeros2.map(item=
                            <p>{item}</p>
                            )}
                    </div>
                </div>

                <div>
                    <button onClick={comparar} >
                        Analissar Possibilidades
                    </button>

                    <p>Podem ser feitas {resposta} trocas</p>
                </div>


            </section>
        </main>
    )


}
