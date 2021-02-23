import { useState } from 'react';//hook/gancho para definir estados


interface ButtonProps {//especificando o tipo de dados que o botão irá receber
    color: string;//uma cor do tipo string :)
    children: string; //permite adicionar coisas dentro do botão como tag
}

export function Button(props: ButtonProps) {
    // setCounter é uma função que atualiza o valor do counter
    const [counter, setCounter] = useState(1);//estado iniciado com 1

    function increment() {//função que incrementar o valor
        setCounter(counter + 1);//setCounter cria um novo valor para counter, coisa do React :)
    }
    
    return(
        <button 
        type="button" 
        style={ { backgroundColor: props.color} }
        onClick={increment}//toda vez que clicar no botão, ele chama a função
        >
            {props.children} <strong>{counter}</strong>
        </button>
    );
}