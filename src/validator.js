//Objeto validator que contiene las funciones y que luego va a ser importado al index.js para poder interactuar.
const validator = {
  isValid: function (creditNum){
    let valid = true;


    
    
    console.log(creditNum)
    return valid;
  },
      
    
      
    

    maskify: function () {
      let maskifyNum = '';
      

    return maskifyNum;
    },
      
  
};
//La export es la contraparte que se importó en el index.js *Hay una contraparte de import en el index.js
export default validator;