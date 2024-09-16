const sunImage = document.querySelector("#sun");


sunImage.onclick = () => {
  const currentSunPosition = window.getComputedStyle(sunImage.getPropertyValue("top"));
  newSunPosition = 100 - currentSunPosition;

  sunImage.animate(
    { transform: `translate(${newSunPosition}px)`}, 
    { duration: 2000, fill: "forwards"},
    );

/*   if (sunTopPosition < sunBottomPosition) {
    sunImage.style.top='auto';
    sunImage.style.right='auto';
    sunImage.style.bottom='2vh';
    sunImage.style.left='2vh';
  } else {
    sunImage.style.top='2vh';
    sunImage.style.right='2vh';
    sunImage.style.bottom='auto';
    sunImage.style.left='auto';
  } */
};