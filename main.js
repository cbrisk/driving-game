var myCar = {
  direction: 'east'
};

var $car = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowDown') {
    $car.className = 'south';
    myCar.direction = 'south';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'north';
    myCar.direction = 'north';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'west';
    myCar.direction = 'west';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'east';
    myCar.direction = 'east';
  }
});
