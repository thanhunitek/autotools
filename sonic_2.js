// XPaths of the elements
var step1Xpath = '//*[@id=":r10:-form-item"]/div/div[1]/div/img';
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

// Function to click an element by a CSS selector
function clickElementBySelector(selector) {
  var element = document.querySelector(selector);
  
  if (element) {
    element.click();
    console.log("Element clicked (Selector): " + selector);
  } else {
    console.log("Element not found (Selector): " + selector);
  }
}

// Loop with 10-second intervals
let loopCount = 0;
let interval = setInterval(() => {
  if (loopCount >= 20) {
    clearInterval(interval);
    console.log("Finished 20 loops.");
  } else {
    // Step 1: Click the first element using XPath
    clickElementByXPath(step1Xpath);

    // Step 2: Wait 10 seconds (handled by the interval)
    setTimeout(() => {
      // Step 3: Click the second element using a more flexible selector
      clickElementBySelector(step3Selector);
    }, 10000);  // Execute Step 3 after waiting 10 seconds

    loopCount++;
  }
}, 20000);

