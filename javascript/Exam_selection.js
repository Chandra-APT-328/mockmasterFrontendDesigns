// Function to handle button selection
function handleSelection(buttons) {
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons in the group
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Add selected class to the clicked button
            this.classList.add('selected');
        });
    });
}

// Get buttons by ID and group them for selection
const testTypeButtons = [document.getElementById('academic'), document.getElementById('general-training')];
const testFormatButtons = [document.getElementById('paper'), document.getElementById('computer')];

// Apply the selection handler to both groups
handleSelection(testTypeButtons);
handleSelection(testFormatButtons);
