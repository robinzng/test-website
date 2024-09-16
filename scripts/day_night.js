const sunImage = document.querySelector("#sun");

sunImage.onclick = () => {
  let currentSunPosition = window.getComputedStyle(sunImage).getPropertyValue("top");
  newSunPosition = 500 - currentSunPosition;

  const sunKeys = [
    { transform: "translateX(0) translateY(0)" },
    { transform: `translateX(${-newSunPosition}) translateY(${newSunPosition})` },
  ];
  
  const sunTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };

  sunImage.animate(sunKeys, sunTiming) 
};