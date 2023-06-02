// JavaScript code

// Get all the skates
const skates = document.querySelectorAll('.skate');

// Function to filter skates based on category and subcategory
function filterSkates() {
  const selectedCategory = document.querySelector('input[name="category"]:checked').value;
  const selectedSubcategory = document.querySelector('#subcategories').value;

  // Hide all skates
  skates.forEach(skate => skate.style.display = 'none');

  // Filter and display skates based on the selected category and subcategory
  skates.forEach(skate => {
    const category = skate.classList[1];
    const subcategory = skate.classList[2];

    // Check if the selected category and subcategory match
    if (
      (selectedCategory === "all" && selectedSubcategory === "") || // Show all skates if no category or subcategory is selected
      (selectedCategory !== "all" && selectedSubcategory === "") || // Show skates of selected category
      (selectedCategory !== "all" && selectedSubcategory !== "" && selectedCategory === category && selectedSubcategory === subcategory) // Show skates of selected category and subcategory
    ) {
      skate.style.display = 'block';
    }
  });
}

// Attach event listeners to category and subcategory inputs
const categoryInputs = document.querySelectorAll('input[name="category"]');
categoryInputs.forEach(input => input.addEventListener('change', filterSkates));

const subcategoryDropdown = document.getElementById('subcategories');
subcategoryDropdown.addEventListener('change', filterSkates);
