let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
            console.log(string,input.value,"hello namasete");
        } 
        else if (e.target.innerHTML == 'DEL') {
            console.log(string,input.value,"hello namasete");
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else if (e.target.innerHTML == 'AC') {
            console.log(string,input.value,"hello namasete");
            string = "";
            input.value = "";
        } 
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
        inputbox.scrollLeft = inputbox.scrollWidth;

    });
       
});
document.addEventListener("keydown", (e) => {
    let key = e.key;

    // Numbers & operators
    if ("0123456789+-*/.".includes(key)) {
        string += key;
        input.value = string;
        console.log(string, input.value, "hello namstee");
    }

    // Enter key = evaluate
    else if (key === "Enter") {
        try {
            string = eval(string);
            input.value = string;
            console.log(string, input.value, "hello namstee");
        } catch {
            input.value = "Error";
            string = "";
        }
    }

    // Backspace = delete
    else if (key === "Backspace") {
        string = string.substring(0, string.length - 1);
        input.value = string;
        console.log(string, input.value, "hello namstee");
    }

    // Escape key = clear (AC)
    else if (key === "Escape") {
        string = "";
        input.value = string;
        console.log(string, input.value, "hello namstee");
    }
    inputbox.scrollLeft = inputbox.scrollWidth;

});
