/*document.addEventListener("DOMContentLoaded", function () {
    console.log("Event tracking initialized.");

    // Function to log event details
    function logEvent(event, eventType) {
        const timestamp = new Date().toISOString();
        const eventObject = event.target.tagName.toLowerCase();

        console.log(`${timestamp} , ${eventType} , ${eventObject}`);
    }

    // Track clicks on all elements
    document.addEventListener("click", function (event) {
        logEvent(event, "click");
    });

    // Track when the page is viewed
    logEvent({ target: document.body }, "view");
});*/

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

