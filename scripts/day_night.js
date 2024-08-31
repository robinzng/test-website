const sunImage = document.querySelector("#sun");

sunImage.onclick = () => {
  const sunTopPosition = window.getComputedStyle(sunImage).getPropertyValue("top");
  const sunBottomPosition = window.getComputedStyle(sunImage).getPropertyValue("bottom");

  console.log(sunTopPosition);
  console.log(sunBottomPosition);  
};