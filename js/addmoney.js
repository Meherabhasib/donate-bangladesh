
document.getElementById('donet-btn-1').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('donet-amount-input-1')
  
    const balance = getTextFieldValueById('new-balance-1')
    const totalMoney = getTextFieldValueById('total-amount')
    const totalNewBalance = totalMoney - addMoney;
    const newBalance = addMoney + balance;
    if ( addMoney === 'number' || isNaN(addMoney) ) {
        alert("Warning: Please enter a valid donation amount.");
    } else {
           openModal();
    } 

    document .getElementById('new-balance-1').innerText = newBalance
    document .getElementById('total-amount').innerText = totalNewBalance
    
    
})


document.getElementById('donet-btn-2').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('donet-amount-input-2')
  
    const balance = getTextFieldValueById('new-balance-2')
    const totalMoney = getTextFieldValueById('total-amount')
    const totalNewBalance = totalMoney - addMoney;
    const newBalance = addMoney + balance;
    if ( addMoney === 'number' || isNaN(addMoney) ) {
        alert("Warning: Please enter a valid donation amount.");
    } else {
           openModal();
    } 

    document .getElementById('new-balance-2').innerText = newBalance
    document .getElementById('total-amount').innerText = totalNewBalance
    
    
})


document.getElementById('donet-btn-3').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('donet-amount-input-3')
  
    const balance = getTextFieldValueById('new-balance-3')
    const totalMoney = getTextFieldValueById('total-amount')
    const totalNewBalance = totalMoney - addMoney;
    const newBalance = addMoney + balance;
    if ( addMoney === 'number' || isNaN(addMoney) ) {
        alert("Warning: Please enter a valid donation amount.");
    } else {
           openModal();
    } 

    document .getElementById('new-balance-3').innerText = newBalance
    document .getElementById('total-amount').innerText = totalNewBalance
    
    
})