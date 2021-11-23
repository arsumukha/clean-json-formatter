const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");
const btnDestring = document.querySelector(".controls__button--destring");
const parseErrorMessage = "ENTERED VALUE CAN NOT BE CONVERTED TO JSON PLEASE CHECK THE VALUE.";

    btnFormat.addEventListener("click", () => {
    try {
        const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
        outputArea.value = formatted;
    } catch (error) {
        alert(parseErrorMessage);
    }
    
      });
      
      btnMinify.addEventListener("click", () => {
        try {
        const minified = JSON.stringify(JSON.parse(inputArea.value));
        outputArea.value = minified;
    } catch (error) {
        alert(parseErrorMessage);
    }
    
      });
      
      btnDestring.addEventListener("click", () => {
        try {
          const destring  = inputArea.value.replaceAll("\\\"", "");
          const formatted = JSON.stringify(JSON.parse(destring), null, 4);
          outputArea.value = formatted;
        } catch (error) {
            alert(parseErrorMessage);
        }
        });
    
