const sunImage = document.querySelector("sun");

sunImage.onclick = () => {
  const sunTopPosition = window.getComputedStyle(sunImage).getPropertyValue("top");
  const sunRightPosition = window.getComputedStyle(sunImage).getPropertyValue("right");

  console.log(sunTopPosition);
  console.log(sunRightPosition);  
};