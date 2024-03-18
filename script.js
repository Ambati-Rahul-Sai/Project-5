function computeLoan() {
  var amount = document.getElementById('amount').value;
  var interest_rate = document.getElementById('interest_rate').value;
  var months = document.getElementById('months').value;
  var interest = (amount * (interest_rate * 0.01)) / months;
  var total = ((amount/months) + interest).toFixed(2);
  total = total.toString();
  document.getElementById('payment').innerHTML = "Monthly payment : ₹" + total;
}