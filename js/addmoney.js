
document.getElementById('donet-btn-1').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('donet-amount-input-1')
  
    const balance = getTextFieldValueById('new-balance-1')
    const totalMoney = getTextFieldValueById('total-amount')
    const totalNewBalance = totalMoney - addMoney;
    const newBalance = addMoney + balance;
    if ( typeof addMoney !== 'number' || isNaN(addMoney) || addMoney <= 0 ) {
       return alert("Warning: Please enter a valid donation amount.");
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
    if (typeof addMoney !== 'number' || isNaN(addMoney) || addMoney <= 0 ) {
      return  alert("Warning: Please enter a valid donation amount.");
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
    if (typeof addMoney !== 'number' || isNaN(addMoney) || addMoney <= 0 ) {
       return alert("Warning: Please enter a valid donation amount.");
    } else {
           openModal();
    } 

    document .getElementById('new-balance-3').innerText = newBalance
    document .getElementById('total-amount').innerText = totalNewBalance
    
    const historyItem = document.createElement('div');
    historyItem.className =
    "bg-white w-5/6 mx-auto rounded-lg border-2 border-slate-300"
    historyItem.innerHTML=`    
    <p class="text-sm font-medium">${new Date().toLocaleDateString()}</p>
    `

    const historyList = document.getElementById('history-donate-dtls')

    historyList.insertBefore(historyItem, history.firstChild )
})

//const historyContainer = document.getElementById('history-btn');
//const donationContrainer = document.getElementById('donation-btn');
//historyContainer.addEventListener('click', function () {

  //  historyContainer.classList.add('bg-lime-300')    

    //donationContrainer.classList.remove('bg-lime-300')

    
//})

