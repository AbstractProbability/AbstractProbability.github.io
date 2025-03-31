document.addEventListener("DOMContentLoaded", function () {
    function logEvent(event, type) {
        console.log(`${new Date().toISOString()} , ${type} , ${event.target.tagName.toLowerCase()}`);
    }

    // Track clicks
    document.addEventListener("click", function (event) {
        logEvent(event, "click");
    });

    // Track page views (triggered when the page loads)
    console.log(`${new Date().toISOString()} , page_view , document`);

    // Track hover events only on links and images
    document.addEventListener("mouseover", function (event) {
        if (event.target.tagName.toLowerCase() === "a" || event.target.tagName.toLowerCase() === "img") {
            logEvent(event, "hover");
        }
    });
});

