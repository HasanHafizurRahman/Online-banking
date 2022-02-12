document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value;
    // console.log(depositeAmount);

    //  get previous deposite 
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    depositeTotal.innerText = depositeAmount;
    
    console.log(depositeTotalText);

    // clear input value 
    depositeInput.value = '';
})
