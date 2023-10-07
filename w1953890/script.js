const colors = document.querySelectorAll(".color-item");
const randomColorButton = document.getElementById("random-color-button");

// function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// add event listener to each color item
colors.forEach(color => {
  color.addEventListener("click", () => {
    const body = document.querySelector("body");
    // remove all previous color classes from body
    body.classList.remove("white", "black", "purple");
    // add the color class corresponding to the clicked color item
    body.classList.add(color.id);
  });
});

// add event listener to random color button
randomColorButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  // remove all previous color classes from body
  body.classList.remove("white", "black", "purple");
  // set the background color of body to a random color
  body.style.backgroundColor = getRandomColor();
});



// Set the initial slide index to 1 and show the first slide
var slideIndex = 1;
showSlides(slideIndex);

// Open the modal by setting its display property to "block"
function openModal() {
  document.getElementById("myModal").style.display = "block";
  // Add the "center" class to the modal content to center it horizontally
  document.querySelector(".modal-content").classList.add("center");
}
// Close the modal by setting its display property to "none"
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // Remove the "center" class from the modal content to reset its position
  document.querySelector(".modal-content").classList.remove("center");
}
// Move the slide index by n and update the displayed slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Set the slide index to n and update the displayed slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Display the slide at index n and hide the others
function showSlides(n) {
  var i;
  // Get all slides and dots (optional navigation indicators)
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  // If n is larger than the number of slides, reset to the first slide
  if (n > slides.length) {slideIndex = 1}
  // If n is less than 1, set it to the last slide
  if (n < 1) {slideIndex = slides.length}
  // Hide all slides by setting their display property to "none"
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Show the current slide by setting its display property to "block"
  slides[slideIndex-1].style.display = "block";
  // Set the caption text to the alt attribute of the current slide
  captionText.innerHTML = slides[slideIndex-1].getAttribute("alt");
}




function increaseFontSize() {
  var element = document.getElementById("text");
  var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  var currentSize = parseFloat(style);
  element.style.fontSize = (currentSize + 1) + 'px';
}

function decreaseFontSize() {
  var element = document.getElementById("text");
  var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  var currentSize = parseFloat(style);
  element.style.fontSize = (currentSize - 1) + 'px';
}
