let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let se = document.getElementById("se");

let hr2 = document.getElementById("hr2");
let mn2 = document.getElementById("mn2");
let se2 = document.getElementById("se2");

setInterval(() => {
  let day = new Date()

  let hh = day.getHours() * 30
  let mm = day.getMinutes() * 6
  let ss = day.getSeconds() * 6

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  se.style.transform = `rotateZ(${ss}deg)`

  let hh2 = day.getHours()
  let mm2 = day.getMinutes()
  let ss2 = day.getSeconds()

  hh2 = (hh2 < 10) ? "0" + hh2 : hh2
  mm2 = (mm2 < 10) ? "0" + mm2 : mm2
  ss2 = (ss2 < 10) ? "0" + ss2 : ss2

  if(hh2 > 12)
  hh2 = hh2 -12

  hr2.textContent = hh2
  mn2.textContent = mm2
  se2.textContent = ss2

  document.getElementById("type").textContent = day.getHours() > 12 ? "PM" : "AM"


}, 1000);
