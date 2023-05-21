const candidateTypeDropdown = document.getElementById("candidate-type");
const candidateListDiv = document.getElementById("candidate-list");

candidateTypeDropdown.addEventListener("change", function () {
  const selectedOption = candidateTypeDropdown.value;
  let candidates = [];

  if (selectedOption === "presidential") {
    candidates = presidentialCandidates;
  } else if (selectedOption === "vice-president") {
    candidates = vicePresidentCandidates;
  } else if (selectedOption === "senator") {
    candidates = senatorCandidates;
  }

  displayCandidates(candidates);
})