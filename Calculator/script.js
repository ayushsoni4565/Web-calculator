 let input = document.getElementById('inputbox')
 let buttons = document.querySelectorAll('button');
 let string = " ";
 let arr = Array.from(buttons);
 arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval (string);
            input.value = string;
        }
        else if(e.target.innerHTML =='AC'){
            String = " ";
            input.value = String;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = String.substring(0, String.length-1);
            input.value = String;
        }
       else{
        string += e.target.innerHTML;
        input.value = string;
    }
    })
 })