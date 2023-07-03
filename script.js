// define the variable
const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');

// define the function
calculate.addEventListener('click', (e) => {
    e.preventDefault();

    let billAmt = document.getElementById('amount').value; //value gets any amount we type in
    let percentage = document.getElementById('discount.percentage').value;
    let discountAmt = document.getElementById('discount.amount');
    let finalPay = document.getElementById('pay');

    discountAmt.value = billAmt * percentage / 100;
    finalPay.value = billAmt - discountAmt.value;

});

resetBtn.addEventListener('click', () => {
    window.location.reload();

});