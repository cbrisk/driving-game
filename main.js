var myCar = {
  direction: 'east',
  x: 0,
  y: 0
};

var $car = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowDown') {
    myCar.direction = 'south';
  } else if (event.key === 'ArrowUp') {
    myCar.direction = 'north';
  } else if (event.key === 'ArrowLeft') {
    myCar.direction = 'west';
  } else if (event.key === 'ArrowRight') {
    myCar.direction = 'east';
  } else if (event.key === ' ') {
    setInterval(function () {
      myCar.x += 4;
      $car.style.left = myCar.x + 'px';
    }, 16);
  }
  $car.className = myCar.direction;
});
