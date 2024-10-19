// XPath of the element to click
var xpath = '//*[@id="app-layout"]/div[1]/form/div/section[1]/div/button';

// Function to click the element
function clickElement() {
  var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
  if (element) {
    element.click();
    console.log("Element clicked");
  } else {
    console.log("Element not found");
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
