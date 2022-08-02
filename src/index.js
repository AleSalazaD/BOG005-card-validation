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
    const strNumber = Array.from(strNumber1).reverse(); //Convierte la data en Array
    
    let arrayNum = [];
    for(let i=0; i<strNumber.length; i++){
        let elemento = parseInt(strNumber[i])
        arrayNum.push(elemento);
    }
    
    //*** MASKIFY FUNCTION CALLBACK:
    const maskified = validator.maskify(strNumber1);//Devuelve el resultado de funcion maskify.
    
    // ISVALID FUNCTION CALLBACK:
    const validar = validator.isValid(arrayNum);//Devuelve el resultado de funcion isValid.
    if(validar === true){
        document.getElementById('cardNumber').value = maskified;
        document.getElementById('printNumber').textContent = maskified;
        document.getElementById('message').textContent = "¡ENHORABUENA, SU TARJETA ES VALIDA!";
    }
    else if('cardNumber'.value === ''){document.getElementById('message').textContent = "¡DEBE INGRESAR UN NUMERO DE TARJETA!";
    }
    else{document.getElementById('message').textContent = "¡LO SENTIMOS, SU TARJETA NO ES VALIDA!" }

    //Captura de datos de la tarjeta: fecha de validez, y cvv.
    //const month = document.getElementById('month').value;
    //const year = document.getElementById('year').value;
    //const cvv = document.getElementById('cvv').value;
}
document.getElementById('btnSubmit').addEventListener("click",getData);
