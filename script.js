function openTab(event, tabName) {
    let tabContents = document.querySelectorAll(".tab-content");
    let tabs = document.querySelectorAll(".tab");

    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove("active");
    });

    // Remove active class from all tabs
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // Add active class to clicked tab and its content
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}
