// $(document).ready(function(){
//     $('#one').click(function(){
//         document.forms.display.value +=1;
//     })
//     $('#two').click(function(){
//         document.forms.display.value +=2;
//     })
//     $('#three').click(function(){
//         document.forms.display.value +=3;
//     })
//     $('#four').click(function(){
//         document.forms.display.value +=4;
//     })
//     $('#five').click(function(){
//         document.forms.display.value +=5;
//     })
//     $('#six').click(function(){
//         document.forms.display.value +=6;
//     })
//     $('#seven').click(function(){
//         document.forms.display.value +=7;
//     })
//     $('#eight').click(function(){
//         document.forms.display.value +=8;
//     })
//     $('#nine').click(function(){
//         document.forms.display.value +=9;
//     })
//     $('#zero').click(function(){
//         document.forms.display.value +=0;
//     })
//     $('#addition').click(function(){
//         document.forms.display.value +='+';
//     })
//     $('#minus').click(function(){
//         document.forms.display.value +='-';
//     })
//     $('#multiply').click(function(){
//         document.forms.display.value +='*';
//     })
//     $('#divide').click(function(){
//         document.forms.display.value +='/';
//     })
//     $('#decimal').click(function(){
//         document.forms.display.value +='.';
//     })
//     $('#equal').click(function(){
//         if(display.value == ""){
//            alert("Please enter any numbers to calculate.")
//         }else{
//             document.forms.display.value=
//             eval(document.forms.display.value);
//         }
//     })
//     $('#clear').click(function(){
//         document.forms.display.value = "";
//     })
// })
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons
    const buttons = document.querySelectorAll("input[type='button']");
    const display = document.forms.display; // Assuming there's a form with name 'display'

    // Loop through buttons and add event listeners
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.value;
            if (value === "=") {
                if (display.value === "") {
                    alert("Please enter any numbers to calculate.");
                } else {
                    try {
                        display.value = eval(display.value); // Evaluate the expression
                    } catch {
                        alert("Invalid input");
                        display.value = "";
                    }
                }
            } else if (value === "C") { // Assuming 'C' is for clear
                display.value = "";
            } else {
                display.value += value; // Append value to display
            }
        });
    });
});
