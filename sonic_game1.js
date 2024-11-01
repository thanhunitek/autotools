// Function to check if the element is clickable
function isElementClickable(element) {
  return element && element.offsetParent !== null && !element.disabled;
}

// Function to wait until the element is clickable and then click
function waitForClickableAndClick() {
  return new Promise((resolve) => {
    let interval = setInterval(() => {
      var element = document.querySelector('button[type="submit"].focus-visible\\:wr-ring-ring');
      
      if (isElementClickable(element)) {
        element.click();
        console.log("Element clicked");
        clearInterval(interval);
        resolve();
      } else {
        console.log("Waiting for the element to become clickable...");
      }
    }, 1000);  // Check every 1 second if the element is clickable
  });
}

// Function to check if the element shows "0 / 10"
function isComplete() {
  var targetElement = document.querySelector('span.rounded-md.bg-white\\/10.px-2.py-1.font-bold.text-white');
  return targetElement && targetElement.textContent.trim() === "0 / 10";
}

// Function to handle the sequence of input and clicking
async function startProcess() {
  let interval = setInterval(async () => {
    if (isComplete()) {
      clearInterval(interval);
      console.log("Process completed. Element shows 0 / 10.");
    } else {
      await waitForClickableAndClick();
    }
  }, 10000);  // Check every 10 seconds
}

// Start the process
startProcess();
