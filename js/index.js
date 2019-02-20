// console.log('sanity check');

/*Target the toggle button*/
var toggleButton = document.getElementById('toggle');

/*Target the main div*/
var time = document.getElementsByClassName('time');

/*target the sun and moon*/
var sun = document.getElementsByClassName('sun');
var moon = document.getElementsByClassName('moon');

/*Add eventListener change for toggle*/
toggleButton.onclick = function toggleClass() {
  //Toggle night class
  time[0].classList.toggle('night');
  //Toggle rise to moon class
  sun[0].classList.toggle('rise');
  //Toggle rise off sun class
  moon[0].classList.toggle('rise');

};