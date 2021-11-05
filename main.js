import './style.css'

var vca
var vco

const c = 261.63
const cb = 277.18
const d = 293.66
const db = 311.13
const e = 329.63
const f = 349.23
const fb = 369.99
const g = 392.00
const gb = 415.30
const a = 440.00
const ab = 466.16
const b = 493.88

document.getElementById("button").addEventListener("click", e => {
  var context = new AudioContext()

  vco = context.createOscillator()
  vco.type = "sine"
  vco.start(0)

  /* VCA */
  vca = context.createGain();
  vca.gain.value = 0;

  /* Connections */
  vco.connect(vca);
  vca.connect(context.destination);
})

document.addEventListener("keydown", event => {
  if (event.key === "a") {
    vco.frequency.value = c
    vca.gain.value = 1
    document.getElementsByClassName("a")[0].classList.add("color")
  } else if (event.key === "z") {
    vco.frequency.value = d
    vca.gain.value = 1
    document.getElementsByClassName("z")[0].classList.add("color")
  } else if (event.key === "e") {
    vco.frequency.value = e
    vca.gain.value = 1
    document.getElementsByClassName("e")[0].classList.add("color")
  } else if (event.key === "r") {
    vco.frequency.value = f
    vca.gain.value = 1
    document.getElementsByClassName("r")[0].classList.add("color")
  } else if (event.key === "t") {
    vco.frequency.value = g
    vca.gain.value = 1
    document.getElementsByClassName("t")[0].classList.add("color")
  } else if (event.key === "y") {
    vco.frequency.value = a
    vca.gain.value = 1
    document.getElementsByClassName("y")[0].classList.add("color")
  } else if (event.key === "u") {
    vco.frequency.value = b
    vca.gain.value = 1
    document.getElementsByClassName("u")[0].classList.add("color")
  } else if (event.key === "q") {
    vco.frequency.value = cb
    vca.gain.value = 1
    document.getElementsByClassName("q")[0].classList.add("blackcolor")
  } else if (event.key === "s") {
    vco.frequency.value = db
    vca.gain.value = 1
    document.getElementsByClassName("s")[0].classList.add("blackcolor")
  } else if (event.key === "d") {
    vco.frequency.value = fb
    vca.gain.value = 1
    document.getElementsByClassName("d")[0].classList.add("blackcolor")
  } else if (event.key === "f") {
    vco.frequency.value = gb
    vca.gain.value = 1
    document.getElementsByClassName("f")[0].classList.add("blackcolor")
  } else if (event.key === "g") {
    vco.frequency.value = ab
    vca.gain.value = 1
    document.getElementsByClassName("g")[0].classList.add("blackcolor")
  }
  else {
    vca.gain.value = 0
  }
})

document.addEventListener("keyup", e => {
  vca.gain.value = 0
  document.getElementsByClassName("a")[0].classList.remove("color")
  document.getElementsByClassName("z")[0].classList.remove("color")
  document.getElementsByClassName("e")[0].classList.remove("color")
  document.getElementsByClassName("r")[0].classList.remove("color")
  document.getElementsByClassName("t")[0].classList.remove("color")
  document.getElementsByClassName("y")[0].classList.remove("color")
  document.getElementsByClassName("u")[0].classList.remove("color")
  document.getElementsByClassName("q")[0].classList.remove("blackcolor")
  document.getElementsByClassName("s")[0].classList.remove("blackcolor")
  document.getElementsByClassName("d")[0].classList.remove("blackcolor")
  document.getElementsByClassName("f")[0].classList.remove("blackcolor")
  document.getElementsByClassName("g")[0].classList.remove("blackcolor")

})

$("#flipbook").turn({
  width: 400,
  height: 300,
  autoCenter: true
});
