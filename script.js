// Calculator project
{
    let screenDiv = document.getElementById('screen');
    let buttons = document.querySelectorAll('input[type="button"]'); // returns a nodelist of button
    let display = '';
    screenDiv.value = 0;

    // add click event listener on all the buttons
    for(let button of buttons){
        button.addEventListener('click', (event)=>{
            let btnValue = event.target.value; // get value for every click

            if(btnValue == 'X'){
                btnValue = '*';
                display += btnValue;
                screenDiv.value = display;
            }else if(btnValue == '='){
                display = eval(display); // eval == evaluate the js code
                screenDiv.value = display;
            }else if(btnValue == 'C'){
                display = '';
                screenDiv.value = 0;
            }else if (btnValue == 'DEL'){
                display = display.slice(0, display.length-1);
                screenDiv.value = display;
            }else{
                display += btnValue;
                screenDiv.value = display;
            }
        });
    };

    



}