// Function to click the radio button after the page refresh
function clickRadioButton() {
  return new Promise((resolve) => {
    var radioButton = document.querySelector(radioButtonSelector);
    if (radioButton && isClickable(radioButton)) {
      radioButton.click();
      console.log("Radio button clicked!");
      resolve();
    } else {
      console.log("Radio button not found or not clickable.");
      resolve();  // Continue even if the radio button is not found
    }
  });
}

// CSS selector for the button in Step 1
var buttonSelector = 'button[type="submit"].wr-bg-green-500.wr-h-12.wr-rounded-lg';  // Adjust the selector if necessary

// Function to check if an element is clickable (not disabled)
function isClickable(element) {
  return !element.disabled && element.offsetParent !== null;  // Checks if it's enabled and visible
}

// Function to click the button after waiting for it to be clickable
function clickWhenClickable() {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      var button = document.querySelector(buttonSelector);
      if (button && isClickable(button)) {
        button.click();
        console.log("Button clicked!");
        clearInterval(interval);
        resolve();
      } else {
        console.log("Waiting for button to be clickable...");
      }
    }, 1000);  // Check every 1 second if the button is clickable
  });
}

// Loop 20 times, waiting for the button to be clickable, then clicking it
async function loopClicking() {
  for (let i = 0; i < 20; i++) {
    console.log(`Starting loop ${i + 1}`);
    await clickWhenClickable();  // Wait for the button to become clickable and click
    await new Promise(resolve => setTimeout(resolve, 10000));  // Wait 10 seconds before the next iteration
  }
  console.log("Finished 20 loops.");
}

// Start the loop
clickRadioButton();
loopClicking();
