// XPath selector for the element to be clicked before the loop
var preLoopXPath = '//*[@id="radix-:rv:-content-manual"]/div/div/div/div[1]/fieldset/div[2]/button[4]';

// Updated CSS selector for the button in Step 1
var step1Selector = 'div.wr-absolute.wr-inset-0.wr-w-full.wr-h-full.wr-flex.wr-items-center.wr-justify-center img[src="/images/custom/mines/cell.svg"]';  // Updated selector

// CSS selector for the button in Step 3
var step3Selector = 'button[type="submit"].wr-bg-green-500';  // Selector for the green button

// Function to click an element by XPath
function clickElementByXPath(xpath) {
  var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
  if (element) {
    element.click();
    console.log("Element clicked (XPath): " + xpath);
  } else {
    console.log("Element not found (XPath): " + xpath);
  }
}

// Function to click an element by CSS selector and check if disabled
function clickElementBySelector(selector) {
  var element = document.querySelector(selector);
  
  if (element) {
    // Check if the element is disabled
    if (element.disabled) {
      // Enable the button if it's disabled
      element.disabled = false;
      console.log("Element enabled (Selector): " + selector);
    }
    
    element.click();
    console.log("Element clicked (Selector): " + selector);
  } else {
    console.log("Element not found (Selector): " + selector);
  }
}

// Click the element using XPath before the loop
clickElementByXPath(preLoopXPath);

// Loop with 10-second intervals
let loopCount = 0;
let interval = setInterval(() => {
  if (loopCount >= 20) {
    clearInterval(interval);
    console.log("Finished 20 loops.");
  } else {
    // Step 1: Click the first element using the new CSS selector and ensure it's enabled
    clickElementBySelector(step1Selector);

    // Step 2: Wait 10 seconds (handled by the interval)
    setTimeout(() => {
      // Step 3: Click the second element using a more flexible selector
      clickElementBySelector(step3Selector);
    }, 10000);  // Execute Step 3 after waiting 10 seconds

    loopCount++;
  }
}, 20000);
