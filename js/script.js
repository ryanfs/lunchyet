document.addEventListener("DOMContentLoaded", function(event) {
  lunchYet(false);
});

function lunchYet (clicked) {
  let message;
  let time = new Date().getHours();
  if (time > 0) message = 'No.';
  if (time > 11) message = 'Yes!!';
  if (time > 13) message = 'No.';
  document.getElementById('text').innerHTML = 'hmm?';
  setTimeout(function() {
    if (clicked) {
      message = 'Still ' + message;
      document.getElementById('text').style.fontSize = '66px';
      document.getElementById('text').style.top = '8%';

    }
    document.getElementById('text').innerHTML = message;
  }, 2500);
  document.getElementById('text').style.fontSize = '120px';
  document.getElementById('text').style.top = '-4%';
}
