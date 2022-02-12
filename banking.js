// function doubleIt(num){
//     const result = num*2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);



function getInputValue(inputId){
    const depositeInput = document.getElementById(inputId);
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    // clear input field 
    depositeInput.value = '';
    return depositeAmount;
}

function updateTotalField(totalFieldId ,amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previoustotal = parseFloat(totalText);

    totalElement.innerText = previoustotal + amount;
}

function updateBalance(depositeAmount, isAddition){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if(isAddition== true){
        balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositeAmount;
    }
}
document.getElementById('deposite-button').addEventListener('click', function(){
    /* const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */
    
    // console.log(depositeAmount);

    //  get and update deposite total 
    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);

    depositeTotal.innerText = previousDepositeTotal + depositeAmount; */
    
    
    // update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount; */
    const depositeAmount = getInputValue('deposite-input');
    updateTotalField('deposite-total', depositeAmount);
    updateBalance(depositeAmount, true);



    // clear input value 
    // depositeInput.value = '';
});

    // handling withdraw input 
    document.getElementById('withdraw-button').addEventListener('click', function(){
       /*  const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        // console.log(withdrawAmountText)
        const withdrawAmount = parseFloat(withdrawAmountText); */
        

        // update withdraw total 
       /*  const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotalText  = withdrawTotal.innerText;
        const previousWithdrawToatal = parseFloat(previousWithdrawTotalText);
        withdrawTotal.innerText = previousWithdrawToatal + withdrawAmount; */
        
        

        // update balance after withdraw 

        /* const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
        const withdrawAmount = getInputValue('withdraw-input');
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);

        // clear input field of withdraw section
        withdrawInput.value = '';
        
    })
