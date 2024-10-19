// Function to check if the element is clickable
function isElementClickable(element) {
  return element && element.offsetParent !== null && !element.disabled; // Check if the element is visible and not disabled
}

// Function to click the element
function clickElement() {
  // Locate the button using the class name
  var element = document.querySelector('button[type="submit"].focus-visible\\:wr-ring-ring');

  if (isElementClickable(element)) {
    element.click();
    console.log("Element clicked");
  } else {
    console.log("Element not clickable or not found");
  }
}

// Loop to click the element 20 times with a 10-second delay between clicks
let clickCount = 0;
let interval = setInterval(() => {
  if (clickCount >= 20) {
    clearInterval(interval);
    console.log("Finished clicking 20 times");
  } else {
    clickElement();
    clickCount++;
  }
}, 10000);  // 10000 milliseconds = 10 seconds
