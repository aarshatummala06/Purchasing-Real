document.getElementById('pay-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  var cardNumber = document.getElementById('card-number').value;
  var cardHolder = document.getElementById('card-holder').value;
  var expirationDate = document.getElementById('expiration-date').value;
  var cvv = document.getElementById('cvv').value;

  // Validate form inputs
  if (!isValidCreditCardNumber(cardNumber) || !cardHolder || !isValidExpirationDate(expirationDate) || !isValidCVV(cvv)) {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  // Hide error message if all fields are filled and valid
  document.getElementById('error-message').style.display = 'none';

  // Simulate payment processing (replace with actual payment processing logic)
  setTimeout(function() {
    document.getElementById('payment-status').innerText = 'Payment Successful!';
  }, 2000);
});

function isValidCreditCardNumber(cardNumber) {
  // Check if card number contains only numbers
  return /^\d+$/.test(cardNumber);
}

function isValidExpirationDate(expirationDate) {
  // Check if expiration date is in the correct format (MM/YY)
  return /^\d{2}\/\d{2}$/.test(expirationDate);
}

function isValidCVV(cvv) {
  // Check if CVV contains only numbers
  return /^\d+$/.test(cvv);
}
