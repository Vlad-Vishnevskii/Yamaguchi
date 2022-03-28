const tableBtnHandler = () => {
  const btnList = document.querySelector('.about-table__buttons-list');
  const breakpointA = window.matchMedia('(min-width:1366px)');
  const breakpointB = window.matchMedia('(min-width:767px)');
  if (btnList) {
    const imgTop = document.querySelector('.about-table__img-top');
    imgTop.style.top = '60px';
    btnList.addEventListener('click', (evt) => {
      const btnTop = evt.target.closest('.about-table__button--top');
      const btnBottom = evt.target.closest('.about-table__button--bottom');
      let top;
      if (btnTop) {
        top = parseInt(imgTop.style.top);
        if (top > -20 && breakpointA.matches && breakpointB.matches) {
          imgTop.style.top = top - 10 + 'px';
        }
        if (top > 0 && !breakpointA.matches && breakpointB.matches) {
          imgTop.style.top = top - 10 + 'px';
        }

        if (top > 20 && !breakpointB.matches) {
          imgTop.style.top = top - 10 + 'px';
        }
      }
      if (btnBottom) {
        top = parseInt(imgTop.style.top);
        if (top < 100 && breakpointA.matches) {
          imgTop.style.top = top + 10 + 'px';
        }
        if (top < 80 && !breakpointA.matches) {
          imgTop.style.top = top + 10 + 'px';
        }
      }
    });
  }
  breakpointA.addListener(tableBtnHandler);
  breakpointB.addListener(tableBtnHandler);
};

export {tableBtnHandler};
