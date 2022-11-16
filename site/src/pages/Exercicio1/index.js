import { useState } from "react";
import React from "react";
import './index.scss';

import Inverter from '../../service/Exercicio1/Inverter.js'

export default function InverterNumeros(){
    const[numero,setNumero] = useState();
    const[numeros,setNumeros] = useState([]);
    
    function adicionarNum(){
        let num= [...numeros,numero];
        setNumeros(num);
    }

    
    function inverterNum(){
        let num = Inverter(numeros);
        setNumeros(num);
    }

    return(
        <main>
            <header>
                <h1>
                    1. Inverter Números
                </h1>
            </header>
            <section>
                <div>
                    <label>
                        Número:
                    </label>
                    <input type="number" value={numero} onChange={e=> setNumero(Number(e.target.value))} />
                </div>

                <button onClick={adicionarNum}>
                    Adicionar
                </button>

                <button onClick={inverterNum} >
                    Inverter
                </button>

                <div>
                    {numeros.map(item=>
                        <p> {item} </p>
                    )}
                </div>

            </section>
        </main>
    )


}

