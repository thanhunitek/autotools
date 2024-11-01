// Function to check if the element is clickable
function isElementClickable(element) {
  return element && element.offsetParent !== null && !element.disabled;
}

// Function to enable and click the element
function enableAndClickElement() {
  var element = document.querySelector('button[type="submit"].focus-visible\\:wr-ring-ring');

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

// Function to check if the element shows "0 / 10"
function isComplete() {
  var targetElement = document.querySelector('span.rounded-md.bg-white\\/10.px-2.py-1.font-bold.text-white');
  return targetElement && targetElement.textContent.trim() === "0 / 10";
}

// Function to handle the sequence of input and clicking
function startProcess() {

  let interval = setInterval(() => {
    if (isComplete()) {
      clearInterval(interval);
      console.log("Process completed. Element shows 0 / 10.");
    } else {
      enableAndClickElement();
    }
  }, 15000);  // Check every 10 seconds
}

// Start the process
startProcess();
