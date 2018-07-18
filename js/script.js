document.addEventListener("DOMContentLoaded", function(event) {
  lunchYet(false);
});

function lunchYet (clicked) {
  let message;
  let time = new Date().getHours();
  if (time > 11 && time < 13) {
    message = 'Yes!!';
  } else {
    if (clicked) {
      document.getElementById('button').disabled = true;
      setTimeout(function() {
        message = stillNo.next().value
        document.getElementById('text').innerHTML = message
        document.getElementById('button').disabled = false;
      }, 2500);
      message = 'hmm...'
    } else {
      message = 'No.'
    }
  }
  document.getElementById('text').innerHTML = message
}

let stillNo = isItLunchYet();

function* isItLunchYet() {
  let emoji  = '<img src = "./images/emoji.png">'
  while (true) {
    yield* ['Still no.', 'Not yet.', 'Nope!', 'Negative.', 'Nooope.', emoji]
  }
}
