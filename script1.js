document.addEventListener("DOMContentLoaded", function () {
    let num1 = 0;                                             // variable to store the number as user clicks the buttons
    let arr=[];                                               // array to store the expression
    let numStr = "";                                          // string for constructing the expression
    let operator="";
    let answer=0;
    let angleInRadians = 0 ; 
    let memoryArr=[];                                          // array to store the memory values

    // function to convert degrees to radians
    function setradians(num1){
        angleInRadians = num1 * (Math.PI / 180); 
    }

     // updating number with each button click
        function number1(num) {
      num1 = num1 * 10 + num;
      numStr += num.toString(); 
      console.log("num1:", num1);
     
      expressionDisplay.innerHTML += num.toString();
    }
    
   
        //getting the buttons
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
        const buttonClear = document.querySelector(".btn.All.Clear");
        const buttonSin = document.querySelector(".btn.Sin");
        const buttonCos = document.querySelector(".btn.Cos");
        const buttonTan = document.querySelector(".btn.Tan");
        const buttonLog = document.querySelector(".btn.Log");
        const buttonLn = document.querySelector(".btn.Ln");
        const buttonSquareroot = document.querySelector(".btn.Squareroot");
        const buttonPi = document.querySelector(".btn.Pi");
        const buttonFactorial = document.querySelector(".btn.Factorial");
        const buttonSquare = document.querySelector(".btn.Square");
        const buttonDelete= document.querySelector(".btn.Delete");
        const buttonDecimal=document.querySelector(".btn.Decimal");
        const buttonMemoryClear=document.querySelector(".btn.memory.Clear");
        const buttonMemoryAdd=document.querySelector(".btn.memory.Add");
        const buttonMemorySubtract=document.querySelector(".btn.memory.Subtract");
        const buttonMemoryRecall=document.querySelector(".btn.memory.Recall");
        const resultDisplay = document.querySelector(".display .result");
        const expressionDisplay = document.querySelector(".display .expression");
        expressionDisplay.innerHTML = ""; 
        
        // Adding event listeners to buttons
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
        buttonSin.addEventListener("click", () => { 
            arr.push("sin") 
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

        buttonSquareroot.addEventListener("click", () => {
            console.log("Square root button clicked");
            arr.push("√")
            console.log("arr:", arr);
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + "√";
        
        });

        buttonPi.addEventListener("click", () => {
            console.log("Pi button clicked");
            num1=Math.PI
            expressionDisplay.innerHTML = expressionDisplay.innerHTML + Math.PI;
        });
        
        buttonFactorial.addEventListener("click", () => {
            console.log("Factorial button clicked");
            arr.push("!")
            console.log("arr:", arr);
               expressionDisplay.innerHTML = expressionDisplay.innerHTML + "!";
        });

        buttonSquare.addEventListener("click",()=>{
            console.log("square button clicked");
            arr.push("^2");
            console.log("arr=",arr);
               expressionDisplay.innerHTML = expressionDisplay.innerHTML + "^2";

        });

        buttonDecimal.addEventListener("click",()=>{
            console.log("decimal clicked");
            

        })


        buttonClear.addEventListener("click", () => {
            console.log("Clear button clicked");
            arr=[];
            num1 = 0;
            answer=0;
            expressionDisplay.innerHTML = "";
            resultDisplay.innerHTML = "";
        });

        buttonDelete.addEventListener("click",()=>{
            console.log("delete clicked");
            expressionDisplay.innerHTML = expressionDisplay.innerHTML.slice(0, -1);
                arr.pop();
                console.log("arr after delete",arr);
           
        });
        buttonMemoryClear.addEventListener("click",()=>{
            console.log("Memory clear clicked");
            memoryArr=[];
            expressionDisplay.innerHTML = "Memory Cleared";
        });
        buttonMemoryAdd.addEventListener("click",()=>{
            console.log("Memory add clicked");
            memoryArr.push(num1);
            
            expressionDisplay.innerHTML =  "M+"+num1;
        });
        buttonMemorySubtract.addEventListener("click",()=>{
            console.log("Memory subtract clicked");
            memoryArr.push(-num1);
            expressionDisplay.innerHTML = "M-"+num1;
        });
        buttonMemoryRecall.addEventListener("click",()=>{
            console.log("Memory recall clicked");
            console.log("Memory array:",memoryArr);
            let current=0;
            for(let i=0;i<memoryArr.length;i++){
                current+=memoryArr[i];
            }
            expressionDisplay.innerHTML = "In Memory= "+current;
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


        //Evaluating the expression when the equal button is clicked
        buttonEqual.addEventListener("click", () => {
             expressionDisplay.innerHTML="";

             console.log("Array:", arr);
             arr.push(num1);
            for (let i = 0; i < arr.length; i++) {
                expressionDisplay.innerHTML += arr[i];                                 // displaying the whole expression
            }
             while(arr.length!=0){
                console.log("Array:", arr);
                currentNum=0;                                                          //checking if current element in array is a number or special character
                if(arr[0]=="sin"||arr[0]=="cos"||arr[0]=="tan"||arr[0]=="log"||arr[0]=="ln"||arr[0]=="√"||arr[0]=="!"||arr[0]=="^2")
                    {
                    let result=0;
                    let trig=arr.shift();
                    console.log("Trig:", trig);
                    num1=arr.shift();
                    console.log("Num1:", num1);
                   
                    switch (trig) {                         //switch case for trigonometric functions
                        case "sin":
                            setradians(num1);
                            answer= currentNum+Math.sin(angleInRadians);
                             arr.unshift(answer);                    //pushing the result in front of the array
                            break;
                        case "cos":
                            setradians(num1);
                            answer= currentNum+Math.cos(angleInRadians);
                            arr.unshift(answer);
                            break;
                        case "tan":
                            setradians(num1);
                            answer= currentNum+Math.tan(angleInRadians);
                            arr.unshift(answer);
                            break;
                        case "log":
                            answer=currentNum+Math.log10(num1); 
                            arr.unshift(answer);
                            break;
                        case "ln":
                            answer=currentNum+Math.log(num1);
                            arr.unshift(answer);
                              break;
                        case "!":
                           result=  factorial(num1);
                            arr.unshift(result);
                            console.log("arr:", arr);
                              result=0;
                            
                              break;
                        case "√":
                           result=Math.sqrt(num1);
                            arr.unshift(result);
                               result=0;
                                break;

                        case "^2":
                            result= num1*num1;
                            arr.unshift(result);
                            console.log("arr under sq",arr);
                            result=0;
                            break;
                        default:
                            console.log("Invalid operator");
                            expressionDisplay.innerHTML = "Error";
                    }
                }

                console.log(arr);
                if(arr.length==1){
                    answer=arr.shift();                                                           //if only one element is left in the array, it is the answer
                    break;
                 }
  
                currentNum=arr.shift();                                                           //getting the first number from the array
                num1=0;
                operator=arr.shift();                                                              //getting the operator from the array

                switch (operator) {                                                                //switch case for operators
                    case "+":
                        
                      answer=(answer+currentNum)+getnum2();                                        //getting the next number from the array from the function getnum2
                      console.log("arr=",arr);
    
                     break;
                    case "-":
                        answer=(answer+currentNum)-getnum2();
                        break;
                    case "*":
                        answer=(answer+currentNum)*getnum2();
                        break;
                    case "/":
                        answer=(answer+currentNum)/getnum2();
                        break;
                    default:
                        console.log("Invalid operator");
                        expressionDisplay.innerHTML = "Error";
                }

             }
             console.log("Final answer:", answer);                                                    //displaying the final answer
             resultDisplay.innerHTML = answer;

        });
           
                                                                                                   //function to get the next number from the array
        
             function getnum2(){                                                                     
                let currentans=0;                                                                 //checking if current element in array is a number or special character
                console.log("inside getnum2",arr," ",arr[0])
                if(arr[0]=="sin"||arr[0]=="cos"||arr[0]=="tan"||arr[0]=="log"||arr[0]=="ln"||arr[0]=="!"||arr[0]=="√"||arr[0]=="^2"){
                    let trig=arr.shift();
                    console.log("trig=",trig)
                    switch (trig) {
                        case "sin":
                            setradians(arr.shift());
                            currentans=Math.sin(angleInRadians);
                            console.log("sin ans",currentans)
                            arr.push(currentans);
                            break;
                        case "cos":
                            setradians(arr.shift());
                            currentans=Math.cos(angleInRadians);
                            arr.push(currentans);
                            break;
                        case "tan":
                            setradians(arr.shift());
                            currentans=Math.tan(angleInRadians);
                            arr.push(currentans);
                            break;
                        case "log":
                            currentans=Math.log10(arr.shift());
                            arr.push(currentans);
                            break;
                        case "ln":
                            currentans=Math.log(arr.shift());
                            arr.push(currentans);
                              break;
                        case "!":
                            
                            currentans = factorial(arr.shift());
                            arr.push(currentans);
                            break;
                            case "√" :
                                currentans = Math.sqrt(arr.shift());
                                arr.push(currentans);
                           
                            break;
                            case "^2":
                                let variable=arr.shift();
                            currentans= variable*variable;
                            arr.unshift(currentans);
                            break;
                        default:
                            console.log("Invalid operator");
                            expressionDisplay.innerHTML = "Error";    
                       }
                        return arr.shift();
                    }
               else {
                       return arr.shift();
                    }
                }
             
        // helper function to calculate factorial
        function factorial(n) {
            if (n < 0) return undefined;
            if (n === 0 || n === 1) return 1;
            return n * factorial(n - 1);
          }
           
          const btn = document.querySelector(".btn");

          btn.addEventListener("touchstart", () => {
            btn.classList.add("active");
          });
          
          btn.addEventListener("touchend", () => {
            btn.classList.remove("active");
          });
          
          
        

    });



    
  