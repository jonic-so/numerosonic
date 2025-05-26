let listanumero =  [];
let numerolimite = 10;
let numerosonic = geranumero();
let tentativas = 1;



let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogo do sonic';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'sonic de 1 a 10';


function textotela(tag, texto){

   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Portuguese Female', {rate:1.5});

}

function mensagemcomeça(){
   textotela('h1', 'jogo do sonic');
   textotela('p', 'escolha um sonic de 1 a 10');

}

textotela('h1', 'jogo do sonic');
textotela('p', 'escolha um sonic de 1 a 10');


 function verificarChute()  {
   let chute = document.querySelector('input').value;
 
   if (chute == numerosonic) {
      textotela('h1', 'acertou caralho'); 
      let palavratentativa = tentativas > 1? 'tentativas' : 'tentativa'; 
      let mensagemtentativa = `conseguiu com ${tentativas} ${palavratentativa} seu bosta`;
      textotela('p', mensagemtentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
      if (chute > numerosonic) {

         textotela('p', 'eh menor q isso');
         textotela('h1', 'errou trouxa');
      } else {

   textotela('p', 'eh maior q isso');
   textotela('h1', 'errou trouxa');
      }

      tentativas++;
      limpacampo();

   }
 }

 function geranumero() {
   let numeroescolhido = parseInt(Math.random() * numerolimite +1);
   let quantidadenumerolista = listanumero.length;

   if (quantidadenumerolista == numerolimite) {

      listanumero = [];

   }


   if (listanumero.includes(numeroescolhido)){
      return geranumero();
   } else {

      listanumero.push(numeroescolhido);
      console.log(listanumero)
      return numeroescolhido;

   }
   

}

function limpacampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarjogo(){
   numerosonic = geranumero();
   limpacampo();
   tentativas = 1;
   mensagemcomeça()
   document.getElementById('reiniciar').setAttribute('disabled', true);
}
mensagemcomeça();
