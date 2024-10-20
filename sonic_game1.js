// Function to input values into specified fields
function inputValues() {
  // Input 12 into the first element
  var firstInput = document.evaluate('//*[@id=":rq:-form-item"]/fieldset/div[1]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (firstInput) {
    firstInput.value = "12"; // Set the value
    firstInput.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the input event
    console.log("Entered 12 into the first input");
  }

  // Input 10 into the second element
  var secondInput = document.evaluate('//*[@id=":rr:-form-item"]/fieldset/div[1]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (secondInput) {
    secondInput.value = "10"; // Set the value
    secondInput.dispatchEvent(new Event('input', { bubbles: true })); // Trigger the input event
    console.log("Entered 10 into the second input");
  }
}

// Function to check if the element is clickable
function isElementClickable(element) {
  return element && element.offsetParent !== null && !element.disabled; // Check if the element is visible and not disabled
}

// Function to enable and click the element
function enableAndClickElement() {
  // Locate the button using querySelector
  var element = document.querySelector('button[type="submit"].focus-visible\\:wr-ring-ring');

  // If the element is disabled, enable it
  if (element && element.disabled) {
    element.disabled = false;
    console.log("Element was disabled. It is now enabled.");
  }

  if (isElementClickable(element)) {
    element.click();
    console.log("Element clicked");
  } else {
    console.log("Element not clickable or not found");
  }
}

// Function to handle the sequence of input and clicking
function startProcess() {
  // First, input the values
  inputValues();

  // Then, start the loop to click the element 20 times with a 10-second delay
  let clickCount = 0;
  let interval = setInterval(() => {
    if (clickCount >= 20) {
      clearInterval(interval);
      console.log("Finished clicking 20 times");
    } else {
      enableAndClickElement();
      clickCount++;
    }
  }, 10000);  // 10000 milliseconds = 10 seconds
}

// Start the process
startProcess();
