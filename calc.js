let screen = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let result = "";
for(let item of buttons){
    item.addEventListener('click', (e) =>{
        let buttonText = e.target.innerText;
        console.log("Button text is :", buttonText);
        if(buttonText == 'C'){
            result = "";
            screen.value = result;
        }
        else if(buttonText == '='){
            screen.value = eval(result)
        }
        else{
            result += buttonText;
            screen.value = result;
        }
    })
}