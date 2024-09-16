const sunImage = document.querySelector("#sun");

sunImage.onclick = () => {
  const sunTopPosition = window.getComputedStyle(sunImage).getPropertyValue("top");
  const sunBottomPosition = window.getComputedStyle(sunImage).getPropertyValue("bottom");

  if (sunTopPosition < sunBottomPosition) {
    sunImage.style.top='auto';
    sunImage.style.right='auto';
    sunImage.style.bottom='2vh';
    sunImage.style.left='2vh';
  } else {
    sunImage.style.top='2vh';
    sunImage.style.right='2vh';
    sunImage.style.bottom='auto';
    sunImage.style.left='auto';
  }

  console.log(sunTopPosition);
  console.log(sunBottomPosition);  
};