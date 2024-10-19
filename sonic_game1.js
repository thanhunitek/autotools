// XPath of the element to click
var xpath = '//*[@id="app-layout"]/div[1]/form/div/section[1]/div/button';

// Function to check if the element is clickable
function isElementClickable(element) {
  return element && element.offsetParent !== null; // Check if the element is visible and not disabled
}

// Function to click the element
function clickElement() {
  var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
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



// Class name of the element to click
var className = 'focus-visible:wr-ring-ring wr-inline-flex wr-items-center wr-justify-center wr-px-3 wr-py-0 wr-text-[14px] wr-font-semibold wr-leading-4 wr-ease-out hover:wr-ease-in focus-visible:wr-outline-none focus-visible:wr-ring-2 focus-visible:wr-ring-offset-2 disabled:wr-pointer-events-none disabled:wr-cursor-not-allowed wr-bg-green-500 hover:wr-bg-green-600 disabled:wr-bg-green-800 disabled:wr-text-zinc-400 disabled:wr-opacity-90 wr-h-12 wr-rounded-lg wr-w-full wr-uppercase wr-transition-all wr-duration-300 active:wr-scale-[85%] wr-select-none';

// Function to check if the element is clickable
function isElementClickable(element) {
  return element && element.offsetParent !== null; // Check if the element is visible and not disabled
}

// Function to click the element
function clickElement() {
  var element = document.querySelector(`button.${className.split(' ').join('.')}`); // Locate the button using class name
  
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

