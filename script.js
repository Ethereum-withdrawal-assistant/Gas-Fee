function confirmStep1() {
  const address = document.getElementById('withdrawalAddress').value.trim();
  const network = document.getElementById('network').value;

  if (!address || !network) {
    alert('Please enter a withdrawal address and select a network.');
    return;
  }

  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function confirmStep2() {
  const receiver = document.getElementById('receiverAddress').value.trim();
  const name = document.getElementById('receiverName').value.trim();
  const surname = document.getElementById('receiverSurname').value.trim();

  if (!receiver || !name || !surname) {
    alert('Please complete all receiver fields.');
    return;
  }

  const selectedNetwork = document.getElementById('network').value;
  document.getElementById('finalNetwork').textContent = selectedNetwork;

  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
  startTimer(59 * 60);
}

function startTimer(duration) {
  let timer = duration;
  const display = document.getElementById('timer');

  const interval = setInterval(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `Waiting... ${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = 'Time expired.';
    }
  }, 1000);
}

