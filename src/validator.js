//Objeto validator que contiene las funciones y que luego va a ser importado al index.js para poder interactuar.
const validator = {
  isValid: function (creditNum) {
    const total = [];
    creditNum.forEach((e, i) => {
      if(i % 2 !== 0){
        const numPar = e * 2;
      
        if (numPar >= 10){
          total.push(
            numPar.toString().split('').reduce((a, b) =>parseInt(a) + parseInt(b))
          );
        }
        else{total.push(numPar); }
      }
      else{total.push(parseInt(e));}
    });

    const sumaTotal = total.reduce((a, b) => a+b);
    console.log(sumaTotal);
    if(sumaTotal % 10 === 0){
      return true;
      
    }
    else{return false;}
    
  },


  
  
  
  
};
export default validator;