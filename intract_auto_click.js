document.querySelectorAll('div._accordian_base_container_1vd77_1').forEach(function(container) {
    // Prevent links from opening in new tab
    container.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of opening the link in a new tab
            window.location.href = link.href; // Optionally navigate in the same tab
        });
    });

    // Click all buttons that are meant to be clicked (like Verify button)
    const verifyButton = container.querySelector('button[data-verify-button-status="idle"]');
    if (verifyButton && !verifyButton.disabled) {
        verifyButton.click(); // Simulate click on the button
    }
});
