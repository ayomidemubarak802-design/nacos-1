const courses = document.querySelectorAll(".course");
const totalUnit = document.getElementById("totalUnit");
const form = document.getElementById("courseForm");

const MAX_UNITS = 24;

// Calculate total units
function calculateUnits() {
  let total = 0;
  
  courses.forEach(course => {
    if (course.checked) {
      total += Number(course.dataset.unit);
    }
  });
  
  totalUnit.textContent = total;
  
  // Warn if maximum is exceeded
  if (total > MAX_UNITS) {
    totalUnit.style.color = "red";
  } else {
    totalUnit.style.color = "green";
  }
}

// Update total when a checkbox changes
courses.forEach(course => {
  course.addEventListener("change", calculateUnits);
});

// Validate form before submission
form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  let total = 0;
  let selectedCourses = [];
  
  courses.forEach(course => {
    if (course.checked) {
      total += Number(course.dataset.unit);
      
      const row = course.closest("tr");
      
      selectedCourses.push({
        code: row.cells[1].textContent,
        title: row.cells[2].textContent,
        unit: row.cells[3].textContent
      });
    }
  });
  
  if (selectedCourses.length === 0) {
    alert("Please select at least one course.");
    return;
  }
  
  if (total > MAX_UNITS) {
    alert("You cannot register more than " + MAX_UNITS + " units.");
    return;
  }
  
  alert("Course registration was successful!");
  
  console.log(selectedCourses);
});