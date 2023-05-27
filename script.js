/* DOM */
const dropdown = document.getElementById("candidate-type");
const contentOption1 = document.getElementById('presidential');
const contentOption2 = document.getElementById('vice');
const contentOption3 = document.getElementById('contentOption3');
const contact = document.getElementById("contact");
const contactContainer = document.getElementById("contact-container");
const searchSection = document.getElementById("search-section");
const candidateType = document.getElementById("candidate-type");

/* Event Listeners */
dropdown.addEventListener('change', function() {
  const selectedOption = dropdown.value;

  if (selectedOption === 'president') {
    contentOption1.style.display = "flex";
    contentOption2.style.display = "none";
    contactContainer.style.display = "none";
  } else if (selectedOption === 'vice-president') {
    contentOption1.style.display = "none";
    contentOption2.style.display = "flex";
    contactContainer.style.display = "none";
  } else if (selectedOption === 'option3') {
    // Show content for option 3
  }
});
