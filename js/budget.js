document.getElementById('btn-field').addEventListener('click', function(){
const inputField = document.getElementById('input-field');
const inputFieldString = inputField.value;
const inputFieldValue = parseFloat(inputFieldString);
inputField.value = inputFieldValue;

const TotalPlayer = document.getElementById('total-player');
const TotalPlayerString = TotalPlayer.innerText;
const TotalPlayerValue = parseFloat(TotalPlayerString);
TotalPlayerValue.innerText = TotalPlayerValue;

const TotalPlayerCost = inputFieldValue * TotalPlayerValue;


const perPlayerCost = document.getElementById('per-Player');
const perPlayerString = perPlayerCost.innerText;
const previousValue = parseFloat(perPlayerString);
perPlayerCost.innerText = previousValue;

const TotalExpense = TotalPlayerCost + previousValue;
perPlayerCost.innerText = TotalExpense;

})

document.getElementById('btn-calculate').addEventListener('click', function(){
    const inputManager = document.getElementById('input-manager');
    const inputManagerString = inputManager.value;
    const inputValue = parseFloat(inputManagerString);
    inputManager.value = inputValue;
  
})