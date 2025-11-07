/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/

//appena clicco il bottone genero 5 numeri e avvio il timer
const generaBtn = document.querySelector("#genera");
const randomResult = document.querySelector("#verifica");
const numInput1 = document.getElementById("num1")
const numInput2 = document.getElementById("num2")
const numInput3 = document.getElementById("num3")
const numInput4 = document.getElementById("num4")
const numInput5 = document.getElementById("num5")
const randomNumeri = document.querySelector("h1")
const timerElem = document.getElementById("timer")
const verificaBtn = document.querySelector("#verifica")
console.log(generaBtn)

verificaBtn.disabled =true
numInput1.disabled =true
numInput2.disabled =true
numInput3.disabled =true
numInput4.disabled =true
numInput5.disabled =true

generaBtn.addEventListener("click", function () {
    //genera nuemri random/////////////////////////////////////
    const arrayRandom = [];
    let cont = 3
    //genera 5 numeri random
    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * 9) + 1
        let currNum = randomNum

        //A samuel non piacciono numeri uguali quindi verifico che se all'interno
        //ne trovo uno uguale presente nell'array (includes) allora torno indietro col ciclo for di i=1
        if (arrayRandom.includes(currNum)) {
            i = i - 1
        }
        //in caso contrario pusho nell'array i numeri
        else {
            arrayRandom.push(randomNum)
        }
    }

    //output-html-console///////////////////////////////
    //appena ce l'ho tutti li posso mostrare in console e in html
    console.log(arrayRandom)
    randomNumeri.innerHTML = arrayRandom.join(" ")
    //disattivo il bottone
    generaBtn.disabled = true;

    ///avvio timer//////////////////////////////////////

    const input1 = numInput1.value
    const input2 = numInput1.value
    const input3 = numInput1.value
    const input4 = numInput1.value
    const input5 = numInput1.value

    const intervalloID = setInterval(function () {
        if (cont === 0) {
            console.log("stop")
            timerElem.innerHTML = "Tempo scaduto"
            randomNumeri.innerHTML = "- - - - -";
            numInput1.disabled = false
             numInput2.disabled = false
              numInput3.disabled = false
               numInput4.disabled = false
                numInput5.disabled = false
                
           
            clearInterval(intervalloID)
        } else {
            console.log(cont)
            timerElem.innerHTML = cont;
        }
        cont = cont - 1;
    }, 1000);

})

verificaBtn.addEventListener("click", function(){
 if (input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != "") {
               console.log("verifica che i numeri corrispano")
            } 
            else{
                alert("numeri manca")
            }

})






            /*
   
  if (input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
    verificaBtn.classList.disabled = false;
    //verificaBtn.addEventListener("click", function(){
    console.log("ok puoi proseguire")
}else{
    alert("inserisci tutti i numeri")
}
*/










