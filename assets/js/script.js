const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


// Banner
ScrollReveal().reveal(".banner h3", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".banner h1", {
  ...scrollRevealOption,
  delay: 500,
});

// aboutUs
ScrollReveal().reveal(".aboutUs img", {
    ...scrollRevealOption,
    origin: "left",
  });  

ScrollReveal().reveal(".aboutUs .subHead", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".aboutUs .head", {
    ...scrollRevealOption,
    delay: 1000,
  });
ScrollReveal().reveal(".aboutUs p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".aboutUs .book", {
  ...scrollRevealOption,
  delay: 2000,
});

// rooms
ScrollReveal().reveal(".rooms .box1", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".rooms .box2", {
  ...scrollRevealOption,
  delay: 2000,
});

// service container
ScrollReveal().reveal(".services li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
  });