// collect input id to return value
function inputById(id){ 
    const inputId = document.getElementById(id);
    const inputIdValue = inputId.value;

    if (inputIdValue === "" || inputIdValue <= 0 ){
        alert("wrong input");
    }
    else{
        // const inputIdString = inputId.value;
        const triangleValue = parseFloat(inputIdValue);
        inputId.value = "";
        return triangleValue;
    }

};
// collect display string to convert to number
function innerTextInput(id){ 
    const inputId = document.getElementById(id).innerText;
    const triangleValue = parseFloat(inputId);
    return triangleValue;
}
// set the value to show the display
function setInnerText(id, value){
    const displayValue = document.getElementById(id);
    displayValue.innerText = value;
};
// with default number * 0.5
function multiplyNumber1(num1, num2){
    const triangleB = inputById(num1);
    const triangleH = inputById(num2);
    const total = triangleB * triangleH * 0.5;
    return total.toFixed(2);
};
// without default values
function multiplyNumber2(num1, num2){
    const triangleB = inputById(num1);
    const triangleH = inputById(num2);
    const total = triangleB * triangleH;
    return total.toFixed(2);
};
// calculate all display show values
function displayTotal(){
    const triangleTotal = innerTextInput('triangle-total');
    const rectangleTotal = innerTextInput('rectangle-total');
    const parallelogramTotal = innerTextInput('parallelogram-total');
    const rhombusTotal = innerTextInput('rhombus-total');
    const pentagonTotal = innerTextInput('pentagon-total');
    const ellipseTotal = innerTextInput('ellipse-total');
    const allTotal = triangleTotal + rectangleTotal + parallelogramTotal + rhombusTotal + pentagonTotal + ellipseTotal;
    setInnerText('all-total', allTotal);
    return allTotal.toFixed;
};
    

document.getElementById('triangle-calculate').addEventListener('click',function(){

    const total = multiplyNumber1('triangle-b','triangle-h');
    setInnerText("triangle-total",total); 
    displayTotal();
    
});

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const total = multiplyNumber2('rectangle-w','rectangle-l');
    setInnerText("rectangle-total",total);
    displayTotal();
});
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const total = multiplyNumber2('parallelogram-b','parallelogram-h');
    setInnerText("parallelogram-total",total);
    displayTotal();
});
document.getElementById('rhombus-btn').addEventListener('click',function(){
    const total = multiplyNumber1('rhombus-d1','rhombus-d2');
    setInnerText("rhombus-total",total);
    displayTotal();
});
document.getElementById('pentagon-btn').addEventListener('click',function(){
    const total = multiplyNumber1('pentagon-p','pentagon-b');
    setInnerText("pentagon-total",total);
    displayTotal();
    
});
document.getElementById('ellipse-btn').addEventListener('click',function(){
    const total = multiplyNumber1('ellipse-a','ellipse-b');
    const totalPi = total * Math.PI;
    setInnerText("ellipse-total",totalPi.toFixed(2));
    displayTotal();
    
});



// random color 
// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 
  
//   document.addEventListener("mouseover", function(){
//     document.getElementById('circle').style.backgroundColor = randomColor();
//   });


  
 /*  document.querySelectorAll('.circle').addEventListener('mouseover', event => {
        event.target.style.fill = randomColor();
  }); */
