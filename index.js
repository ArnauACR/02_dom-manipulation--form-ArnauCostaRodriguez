document.addEventListener('DOMContentLoaded', (event) => {
const form = document.querySelector('form');
const displaySection = document.querySelector('.collectNotes');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const sanitizedData = {};
    formData.forEach((value, key) => {
    sanitizedData[key] = sanitizeInput(value);
    });

    if (sanitizedData.priority === 'select') {
    console.log('No priority');
    return;
    }

    const newNode = document.createElement('div');
    newNode.textContent = `Title: ${sanitizedData.title}, Content: ${sanitizedData.content}, Priority: ${sanitizedData.priority}`;
    
    displaySection.appendChild(newNode);

    form.reset();
});

function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}
});


