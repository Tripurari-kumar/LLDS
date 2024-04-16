let hr = document.getElementById('hour');
let mn = document.getElementById('minutes');
let ss = document.getElementById('seconds');

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();

  //  12 hrs= 360deg
  //  1hr= 30deg
  //  x hr=  30*x

  //  60mins= 360deg
  //  1min= 6deg
  //  xmins= 6deg*x

  //  60seconds= 360deg
  //  1sec= 6deg
  //  xseconds= 6deg*x

  let hRotation = 30 * hh + mins / 2;
  let mRotattion = 6 * mins;
  let sRotation = 6 * seconds;
  hr.style.transform = `rotate(${hRotation}deg)`;
  mn.style.transform = `rotate(${mRotattion}deg)`;
  ss.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
