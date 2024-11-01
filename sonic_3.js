// Function to click the radio button after the page refresh
var radioButtonSelector = 'button[role="radio"][value="3"]';
function clickRadioButton() {
  return new Promise((resolve) => {
    var radioButton = document.querySelector(radioButtonSelector);
    if (radioButton) {
      radioButton.click();
      console.log("Radio button clicked!");
      resolve();
    } else {
      console.log("Radio button not found.");
      resolve();
    }
  });
}

// CSS selector for the button in Step 1
var buttonSelector = 'button[type="submit"].wr-bg-green-500.wr-h-12.wr-rounded-lg';

// Function to check if the button is disabled
function isDisabled(button) {
  return button.disabled || button.classList.contains('disabled');
}

// Function to wait until the button is clickable and then click
function clickWhenClickable() {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      var button = document.querySelector(buttonSelector);
      if (button) {
        if (!isDisabled(button)) {
          button.click();
          console.log("Button clicked!");
          clearInterval(interval);
          resolve();
        } else {
          console.log("Button is disabled, waiting...");
        }
      } else {
        console.log("Waiting for the button to appear...");
      }
    }, 1000);  // Check every 1 second if the button is clickable
  });
}

// Function to check if the status element says "0 / 10"
function isComplete() {
  var statusElement = document.querySelector('span.rounded-md.bg-white\\/10.px-2.py-1.font-bold.text-white');
  return statusElement && statusElement.textContent.trim() === "0 / 10";
}

// Loop until the status is "0 / 10"
async function loopClickingUntilComplete() {
  while (!isComplete()) {
    console.log("Starting a new loop iteration");
    await clickWhenClickable();  // Wait for the button to become clickable and click
    await new Promise(resolve => setTimeout(resolve, 10000));  // Wait 10 seconds before the next iteration
    
    if (isComplete()) {
      console.log("Status reached 0 / 10. Stopping the loop.");
      break;
    }
  }
  console.log("Finished loop.");
}

// Start the loop and radio button click
clickRadioButton();
loopClickingUntilComplete();
