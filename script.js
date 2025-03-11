function openTab(event, tabName) {
    let tabContents = document.querySelectorAll(".tab-content");
    let tabs = document.querySelectorAll(".tab");
    let activeContent = document.querySelector(".tab-content.active");

    // Prevent clicking the same tab
    if (activeContent && activeContent.id === tabName) return;

    // Fade out current tab
    if (activeContent) {
        activeContent.classList.add("fade-out");
        setTimeout(() => {
            activeContent.classList.remove("active", "fade-out");
            
            // Show new tab after fade-out completes
            let newContent = document.getElementById(tabName);
            newContent.classList.add("active");
        }, 500);
    } else {
        // If no active content, just show the new tab
        document.getElementById(tabName).classList.add("active");
    }

    // Update tab styles
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
}
