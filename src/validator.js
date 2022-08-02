//Objeto validator que contiene las funciones y que luego va a ser importado al index.js para poder interactuar.
const validator = {
  // ******FUNCION ISVALID******
  isValid: function (creditCardNumber) {
    //creditCardNumber.reverse();
    const total = [];
    creditCardNumber.forEach((e, i) => {
      if(i % 2 !== 0){
        const numPar = e * 2;
      
        if (numPar > 9){
          total.push(
            numPar.toString().split('').reduce((a, b) =>parseInt(a) + parseInt(b))
          );
        }
        else{total.push(numPar); }
        
      }
      else{total.push(parseInt(e));}
    });
    
    const sumaTotal = total.reduce((digit1, digit2) => digit1+digit2, 0);
    
    if(sumaTotal % 10 === 0){
      return true;
      
    }
    else{return false;}  
  },
  // ****** FUNCION MASKIFY******
  maskify(creditCardNumber){
      let maskified; 
      let maskedNum = creditCardNumber.toString().slice(0,-4).replace(/\w/g,'#');
      
      let visibleNum = creditCardNumber.toString().slice(-4);
      
      maskified = maskedNum + visibleNum;
      return maskified;  
  }
};
export default validator;