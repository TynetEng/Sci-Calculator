let display = document.getElementById('show');
        let display2 = document.getElementById('show2');
        display.innerText = '0'
        let firstNumber = '';
        let secondNumber = '';
        let oper = '';
        let save = false;
        let equal = false;
        let thirdNumber = '';
        function number(digits){
            if(display.innerText == '0'){
                display.innerText = '';
            }
            if(save){
                secondNumber+=digits;
            }
            if(equal == false){
                display.innerText +=digits
            }
            else if(equal){
                display.innerText = '';
                display.innerHTML += `${digits}`
                equal = false
            }
        }
        function operator(signs){
            oper = signs
            firstNumber = display.innerText;
            display.innerText += signs;
            save = true;
        }
        function result(){
            equal = true;
            save = false;
            if(oper =='+' ){
                final = parseInt(firstNumber) + parseInt(secondNumber)
                display2.innerText = final;
                console.log(firstNumber, oper, secondNumber,final);
            }
            else if(oper =='-' ){
                final = parseInt(firstNumber) - parseInt(secondNumber)
                display2.innerText = final;
                console.log(firstNumber, oper, secondNumber,final);
            }
            else if(oper =='*' ){
                final = parseInt(firstNumber) * parseInt(secondNumber)
                display2.innerText = final;
                console.log(firstNumber, oper, secondNumber,final);
            }
            else if(oper =='/' ){
                final = parseInt(firstNumber) / parseInt(secondNumber)
                display2.innerText = final;
                console.log(firstNumber, oper, secondNumber,final);
            }
            else if (oper == ')COS'){
                final = Math.cos(firstNumber)
                display2.innerText = final
            }
            else if (oper == ')TAN'){
                final = Math.tan(firstNumber)
                display2.innerText = final
            }
            else if (oper == ')SIN'){
                final = Math.sin(firstNumber)
                display2.innerText = final
            }
            else if (oper == ')LOG'){
                final = Math.log(firstNumber)
                display2.innerText = final
            }
            else if (oper == ')IN'){
                final = Math.asin(firstNumber)
                display2.innerText = final
            }
            else if (oper == ')x2'){
                final = firstNumber ** 2;
                display2.innerText = final
            }else if (oper == ')x3'){
                final = firstNumber ** 3;
                display2.innerText = final
            }
            else if (oper == ')2-1'){
                final = Math.SQRT1_2(firstNumber);
                display2.innerText = final
            }
            else if (oper == ')SQRT'){
                final = Math.sqrt(firstNumber)
                display2.innerText = final
            }
            firstNumber = '';
            secondNumber='';
            storeResult()
        }
        // function infinity(){
        //     if(oper == ""){
        //         final = save;
               
        //         final+=secondNumber;

        //     }
        // }
        function del(){
            let del = display.innerText.replace(display.innerText.slice(-1),'');
            display.innerText = del;
        }
        function on(){
            display.innerText ='';
            display2.innerText = ''
            display.innerText = '0'
        }
        function storeResult(){
            localStorage.setItem('Result', JSON.stringify(final))
            let a = localStorage.getItem('Result')
            console.log(JSON.parse(a));
            display2.innerText = final
            // result()
        }
        
        