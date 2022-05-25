window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const exValues  = { amount: 1000, years: 1, rate: 5 };
  const exAmount = document.querySelector("#loan-amount");
  exAmount.value = exValues.amount;
  const exYears = document.querySelector("#loan-years");
  exYears.value = exValues.years;
  const exRate = document.querySelector("#loan-rate");
  exRate.value = exValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValue = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValue));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const interestRate = (values.rate/100) /12;
  const n = Math.floor(values.years * 12);
  return ((values.amount * interestRate) / (1 - Math.pow((1 + interestRate), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUi = document.querySelector('#monthly-payment');
  monthlyUi.innerText = 'The monthly payment will be $' + monthly;
}
