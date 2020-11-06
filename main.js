var myCar = {
  direction: 'east',
  x: 0,
  y: 0,
  driving: false,
  speed: 0,
  image: ['images/f1.svg', 'images/fancy.png']
};

var $car = document.querySelector('img');
var $background = document.querySelector('div.background');
var $form = document.querySelector('form');
var $image = document.querySelector('img');
var id = null;

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
    myCar.driving = !myCar.driving;
    if (myCar.driving) {
      id = setInterval(function () {
        if (myCar.direction === 'east') {
          myCar.x += myCar.speed;
          $car.style.left = myCar.x + 'px';
        } else if (myCar.direction === 'west') {
          myCar.x -= myCar.speed;
          $car.style.left = myCar.x + 'px';
        } else if (myCar.direction === 'south') {
          myCar.y += myCar.speed;
          $car.style.top = myCar.y + 'px';
        } else if (myCar.direction === 'north') {
          myCar.y -= myCar.speed;
          $car.style.top = myCar.y + 'px';
        }
      }, 16);
    } else {
      clearInterval(id);
    }
  }
  $car.className = myCar.direction;
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  if ($form.elements.car.value === 'luxury') {
    $image.setAttribute('src', myCar.image[1]);
  } else {
    $image.setAttribute('src', myCar.image[0]);
  }
  if ($form.elements.speed.value === 'normal') {
    myCar.speed = 4;
  } else {
    myCar.speed = 8;
  }
  $form.reset();
  $background.classList.add('hidden');
});
