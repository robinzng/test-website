const sunImage = document.querySelector("#sun");
const sunPosition = window.getComputedStyle(sunImage.getPropertyValue("top"));

sunImage.onclick = () => {
  sunPosition = 100 - sunPosition;

  sunImage.animate(
    { transform: `translate(${sunPosition}px)`}, 
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