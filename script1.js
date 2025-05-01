document.addEventListener("DOMContentLoaded", function () {
    let num1 = 0;
    let arr=[];
    let operator="";
    let num2=0;
    let answer=0;
    let result=0;
    let angleInRadians = 0 ; 

  



      

    
        


    function setradians(num1){
        angleInRadians = num1 * (Math.PI / 180); 
    }
        function number1(num) {
      num1 = num1 * 10 + num;
      console.log("num1:", num1); // This should show updated num1
      expressionDisplay.innerHTML =num1;
      setnum2(num1);


    }
    
   
      
        const button0 = document.querySelector(".btn.number0");
        const button1 = document.querySelector(".btn.number1");
        const button2 = document.querySelector(".btn.number2");
        const button3 = document.querySelector(".btn.number3");
        const button4 = document.querySelector(".btn.number4");
        const button5 = document.querySelector(".btn.number5");
        const button6 = document.querySelector(".btn.number6");
        const button7 = document.querySelector(".btn.number7");
        const button8 = document.querySelector(".btn.number8");
        const button9 = document.querySelector(".btn.number9");
        const buttonPlus = document.querySelector(".btn.Plus");
        const buttonMinus = document.querySelector(".btn.Minus");
        const buttonMultiply = document.querySelector(".btn.Multiply");
        const buttonDivide = document.querySelector(".btn.Divide");
        const buttonEqual = document.querySelector(".btn.Equal");
        const buttonClear = document.querySelector(".btn.Clear");
        const buttonSin = document.querySelector(".btn.Sin");
        const buttonCos = document.querySelector(".btn.Cos");
        const buttonTan = document.querySelector(".btn.Tan");
        const buttonLog = document.querySelector(".btn.Log");
        const buttonLn = document.querySelector(".btn.Ln");

        const resultDisplay = document.querySelector(".display .result");
        const expressionDisplay = document.querySelector(".display .expression");
        expressionDisplay.innerHTML = ""; 
        

        button0.addEventListener("click", () => number1(0));
        button1.addEventListener("click", () => number1(1));
        button2.addEventListener("click", () => number1(2));
        button3.addEventListener("click", () => number1(3));
        button4.addEventListener("click", () => number1(4));
        button5.addEventListener("click", () => number1(5));
        button6.addEventListener("click", () => number1(6));
        button7.addEventListener("click", () => number1(7));
        button8.addEventListener("click", () => number1(8));
        button9.addEventListener("click", () => number1(9));
        buttonSin.addEventListener("click", () => { arr.push("sin") 
            
            console.log("Sin button clicked"); 
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + "sin(";
        });
            
        buttonCos.addEventListener("click", () => {arr.push("cos")
            
            console.log("Cos button clicked"); 
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + "cos(";
        });

        buttonTan.addEventListener("click", () => {
            arr.push("tan")
        
            console.log("Tan button clicked");
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + "tan("
        }); 

        buttonLog.addEventListener("click", () => {
            arr.push("log")
            console.log("Log button clicked");
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + "log(";
        });
        
        buttonLn.addEventListener("click", () => {
            arr.push("ln")
            console.log("Ln button clicked");
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + "ln(";
        });

        buttonClear.addEventListener("click", () => {
            console.log("Clear button clicked");
            arr=[];
            num1 = 0;
            expressionDisplay.innerHTML = "";
            resultDisplay.innerHTML = "";
        });

       




        buttonEqual.addEventListener("click", () => {
             expressionDisplay.innerHTML="";
            
            
            arr.push(num1);
           
            let currentNum=0;
            
             while(arr.length!=0){
                console.log("Array:", arr);
                
                for (let i = 0; i < arr.length; i++) {
                    expressionDisplay.innerHTML += arr[i];
                    console.log("Expression:", expressionDisplay.innerHTML);
                }
                if(arr[0]=="sin"||arr[0]=="cos"||arr[0]=="tan"||arr[0]=="log"){
                    
                 
                    let trig=arr.shift();
                    console.log("Trig:", trig);
                    num1=arr.shift();
                    console.log("Num1:", num1);
                    setradians(num1);
                    switch (trig) {
                        case "sin":
                            answer= currentNum+Math.sin(angleInRadians);
                            
                            break;
                        case "cos":
                            answer= currentNum+Math.cos(angleInRadians);
                            break;
                        case "tan":
                            answer= currentNum+Math.tan(angleInRadians);
                            break;
                        case "log":
                            answer=currentNum+Math.log10(num1);
                            break;
                            case "ln":
                            answer=currentNum+Math.log(num1);
                        default:
                            console.log("Invalid operator");
                            expressionDisplay.innerHTML = "Error";
                    }
                }
                if(arr.length==0){
                    break;
                }
                let current=arr[0];
                console.log(arr);
                console.log("Current:", current);
               
                if(current!=="+" && current!=="-" && current!=="*" && current!=="/"&& current!=="sin"&& current!=="cos"&& current!=="tan"&& current!=="log"&& current!=="ln"){
                    currentNum=arr.shift();
                }
                num1=0;
                operator=arr.shift();
                               
                console.log("currentNum:", currentNum);
                console.log("Current:", operator);
                switch (operator) {
                    case "+":
                        
                      answer=answer+currentNum+arr.shift();
                      
                     // arr.push(answer);
                     break;
                    case "-":
                        answer=answer+currentNum-arr.shift();
                       // arr.push(answer);
                        break;
                    case "*":
                        answer=answer*arr.shift()+currentNum;
                       // arr.push(answer);
                        break;
                    case "/":
                        answer=answer/arr.shift()+currentNum;
                      //  arr.push(answer);
                        break;
                    default:
                        console.log("Invalid operator");
                        expressionDisplay.innerHTML = "Error";
                }

             }
             console.log("Final answer:", answer);
             resultDisplay.innerHTML = answer;

        });
            buttonPlus.addEventListener("click", () => {
                console.log("Plus button clicked");
                operator = "+";
                 arr.push(num1);
                arr.push(operator);
                expressionDisplay.innerHTML = expressionDisplay.innerHTML+operator;
                
                num1 = 0; 
            })
        

            buttonMinus.addEventListener("click", () => {
                console.log(" minus button clicked");
                operator = "-";
                arr.push(num1);
                arr.push(operator);
                expressionDisplay.innerHTML =expressionDisplay.innerHTML+ operator;
                num1 = 0; 
            });
        
        
            buttonMultiply.addEventListener("click", () => {
                console.log("mul button clicked");
                operator = "*";
                arr.push(num1);
                arr.push(operator);
                console.log("Array:", arr);
                expressionDisplay.innerHTML =expressionDisplay.innerHTML +operator;
                num1 = 0; 
            });
        
        
            buttonDivide.addEventListener("click", () => {
                console.log(" divide clicked");
                operator = "/";
                arr.push(num1);
                arr.push(operator);
                expressionDisplay.innerHTML =expressionDisplay.innerHTML+operator;
                num1 = 0; 
            });

            function setnum2(num1) {
                num2 = num1;
                expressionDisplay.innerHTML =num2;
            }
            
        

        });





    
  