// Step 1: Select all checkbox inputs in the document
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

// Step 2: Loop through each checkbox
for (let i = 0; i < checkboxes.length; i++) {
  // Step 3: Add an event listener for the 'focus' event to each checkbox
  // Step 3.1: When a checkbox gains focus, add the 'focus' class to the checkbox
  // Step 3.2: Also add the 'focus' class to the parent label element

  const checkbox = checkboxes[i]

  checkbox.addEventListener('focus', () => {
    checkbox.classList.add('focus')
    checkbox.parentElement.classList.add('focus')
  })

  // Step 4: Add an event listener for the 'blur' event to each checkbox

  checkbox.addEventListener('blur', () => {
    // Step 4.1: When a checkbox loses focus, remove the 'focus' class
    // Step 4.2: Also remove the 'focus' class from the parent label element

    checkbox.classList.remove('focus')
    checkbox.parentElement.classList.remove('focus')
  })
}
