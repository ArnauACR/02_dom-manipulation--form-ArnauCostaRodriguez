    document.addEventListener('DOMContentLoaded', () => {
        
        const form = document.querySelector('form');
        const displaySection = document.querySelector('.collect-notes');

        form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const formData = new FormData(form);
        const sanitizedData = {};

        formData.forEach((value, key) => {
            sanitizedData[key] = sanitizeInput(value);
        });

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
    


