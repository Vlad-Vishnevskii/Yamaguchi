const girlAnimation = () => {
  const container = document.querySelector('.description');
  const hole = document.querySelector('.description__hole-img');
  const girl = document.querySelector('.description__girl-img');

  const showHole = () => {
    hole.classList.add('show-hole');
  };

  const transformHole = () => {
    hole.classList.add('transform-hole');
  };

  const transformDefaultHole = () => {
    hole.classList.remove('transform-hole');
  };

  const girlMoveTop = () => {
    girl.classList.add('girl-top');
  };

  const girlLevitationDown = () => {
    girl.classList.add('girl-levitation-down');
  };

  const girlLevitationTop = () => {
    girl.classList.add('girl-levitation-top');
  };

  const girlFinishAnimation = () => {
    girl.classList.add('girl-finish');
  };

  const girlClearLevitationClass = () => {
    if (girl.classList.contains('girl-levitation-down')) {
      girl.classList.remove('girl-levitation-down');
    }
    if (girl.classList.contains('girl-levitation-top')) {
      girl.classList.remove('girl-levitation-top');
    }
  };

  if (container) {
    setTimeout(showHole, 1500);
    setTimeout(transformHole, 3000);
    setTimeout(girlMoveTop, 4500);
    setTimeout(transformDefaultHole, 6000);
    setTimeout(girlLevitationDown, 7000);
    setTimeout(girlLevitationTop, 7400);
    let timeOutStart = 7700;
    for (let i = 0; i <= 4; i++) {
      setTimeout(girlClearLevitationClass, timeOutStart);
      timeOutStart += 300;
      setTimeout(girlLevitationDown, timeOutStart);
      timeOutStart += 300;
      setTimeout(girlLevitationTop, timeOutStart);
      timeOutStart += 300;
    }
    setTimeout(girlFinishAnimation, timeOutStart + 300);
  }
};

export {girlAnimation};
