// Function to handle clicking on links and preventing new tabs
function handleLinkClick() {
    // Get all anchor elements with the class 'link'
    const links = document.querySelectorAll('a.link');

    // Loop through the links and prevent opening a new tab
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent opening a new tab
            console.log(`Clicked on link: ${link.href}`);
            
            // Optionally, open in the same tab or handle the link however you want:
            // window.location.href = link.href;
        });
    });
}

// Function to handle button clicks on "+ 100 Points" buttons
function handleButtonClick() {
    // Get all button elements on the page
    const allButtons = document.querySelectorAll('button');

    // Loop through all buttons and find the ones with "+ 100 Points" text
    allButtons.forEach(button => {
        if (button.textContent.trim() === "+ 100 Points") {
            console.log('Button found with text:', button.textContent);

            // Simulate the button click
            button.click();

            // You can add any custom logic after the click here
        }
    });
}

// Call both functions to handle both links and buttons
handleLinkClick();
handleButtonClick();
