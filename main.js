var myCar = {
  direction: 'east'
};

var $car = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowDown') {
    $car.className = 'south';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'north';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'west';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'east';
  }
  myCar.direction = $car.className;
});
