//import arrayNumber from "./index.js";
//Objeto validator que contiene las funciones y que luego va a ser importado al index.js para poder interactuar.
const arrayNumber = [];
const validator = {
  
  isValid: function isValid(){
    
      let arreglo = [];
      for (let i = 0; i < arrayNumber.length; i += 2) {
        arreglo.push(arrayNumber[i]);
      }
      return arreglo;
      
    }
};
//La export es la contraparte que se importó en el index.js *Hay una contraparte de import en el index.js
export default {validator};