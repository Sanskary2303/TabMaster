document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("openWindow").addEventListener("click", () => {
        browser.windows.create({
            url: "new_window.html",
            type: "popup",
            width: 600,
            height: 500
        });
    });
});

