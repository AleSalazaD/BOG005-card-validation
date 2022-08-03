import validator from './validator.js';
console.log(validator);

function getData(){
    //Captura de datos de la tarjeta: nombre, tipo de tarjeta.
    document.getElementById('printName');
    const nameClient = document.getElementById('clientName').value; //Captura el nombre
    
    document.getElementById('printName').innerHTML = nameClient;
    //const typeCard = document.getElementById('cardType').value; //Captura el tipo de tarjeta
    
    //****Captura de datos de la tarjeta: numeros.****
    const strNumber1 = document.getElementById('cardNumber').value;//Captura el #tarjeta en string
        
    //*** MASKIFY FUNCTION CALLBACK:
    const maskified = validator.maskify(strNumber1);//Devuelve el resultado de funcion maskify.
    
    // ISVALID FUNCTION CALLBACK:
    const validar = validator.isValid(strNumber1);//Devuelve el resultado de funcion isValid.
    if(validar === true){
        document.getElementById('cardNumber').value = maskified;
        document.getElementById('printNumber').textContent = maskified;
        document.getElementById('message').textContent = "¡ENHORABUENA, SU TARJETA ES VALIDA!";
    }
     else{document.getElementById('message').textContent = "¡LO SENTIMOS, SU TARJETA NO ES VALIDA!" }

}
document.getElementById('btnSubmit').addEventListener("click",getData);
