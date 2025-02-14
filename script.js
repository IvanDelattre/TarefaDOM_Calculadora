let nota;
let notas =[];


function substituir_virgula(value){
    let novaStr = "";
    for (let i = 0; i < value.length; i++) {
        if (value[i] === ",") {
            novaStr += "."; 
        } else {
            novaStr += value[i]; 
        }
    }
    
    value = novaStr;
    return value

}


function verificar_valor(value){
    value = substituir_virgula(value)
    //tentar verificar o valor pode ser transformado em número
    let num = parseFloat(value);
    return num;


}


function adicionar(notas){
    
    let input = document.querySelector(".input");
    let mensagem = input.value;   

    
    if( mensagem == "" ){
        console.log(mensagem)
        alert("A notadigitada é inválida, por favor, insira uma nota válida.");
        return;
    }

     

    mensagem = verificar_valor(mensagem); 
    
    
    if( Number.isNaN(mensagem) ){
        alert("por favor, Digite um número");
        return;
    }


    if(mensagem > 10 ){
        alert("Numeros maiores q 10 não aceitos");
        return;
    }
    
    notas.push(mensagem) ; 
 

    //adicionar o texto no text area
    let area = document.querySelector(".area");
    area.innerText += `nota ${notas.length} é ${mensagem}\n`; 


}


function cacularMedia(notas){
    let media = 0;
    for( let i = 0 ; i < notas.length ; i++ ){
        media += notas[i] ;
    }
    media /= notas.length ;
    
    media = Math.round(media * 100) / 100;

    

    let newMedia = document.querySelector(".mediaCalculada");
    if (newMedia == null){
        let text = document.createElement("p");

        text.innerText = `\n\na média é ${media}`;
        console.log( text.innerText ) ; 
        let main = document.querySelector("#main")
        text.classList.add("mediaCalculada") ; 
        main.append(text) ;
    }else{

        newMedia.innerText = `a média é ${media}`;

    }

  
}


let button = document.querySelector(".add");
button.addEventListener("click",  ()=>{adicionar(notas)} )

let media = document.querySelector(".media");
media.addEventListener("click", ()=>{cacularMedia(notas)} )
