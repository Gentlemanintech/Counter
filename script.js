let countButton = document.getElementById('click-btn');
countButton.addEventListener("click", function () {
   let output = document.querySelector("#counts");
   let result = Number(output.textContent) + 1;
 
   output.textContent = result;
 });

 let undoButton = document.getElementById('undo');
 undoButton.addEventListener("click", function () {
    let output = document.querySelector("#counts");
    let result = Number(output.textContent) - 1;

    output.textContent = result;
     if (output.textContent < 0 ) {
       output.textContent = 0;
     }
  });



 let resetButton = document.getElementById('reset');
 resetButton.addEventListener('click', function () {
   let output = document.querySelector('#counts');
   let outputValue = output.value;

   outputValue = Number(0);
   output.textContent = outputValue;

 })