// Enter your code below.

// Test JS Link
console.log('JS file successfully linked.');

// Selecting div class
const divResource = document.querySelector('.javascript-resources');

// Add Event for click to show resources
document.querySelector('#show-resources').addEventListener('click', () =>{
    
divResource.classList.remove('d-none');

});

// Add event to bold target on mouseover
divResource.addEventListener('mouseover', (event) => {
    console.log('highlighted target event:', event);
    event.target.classList.add('fw-bold');
})

// Add event to unbold target on mouseout
divResource.addEventListener('mouseout', (event) => {
    event.target.classList.remove('fw-bold');
})

// Add event to italic the clicked target
divResource.addEventListener('click', (event) => {
    event.target.classList.add('fst-italic');
})
