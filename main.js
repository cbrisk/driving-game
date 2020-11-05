var myCar = {
  direction: 'east'
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
  }
  $car.className = myCar.direction;
});
