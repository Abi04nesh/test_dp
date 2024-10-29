document.addEventListener("DOMContentLoaded", () => {
    const sidebarItems = document.querySelectorAll(".sidebar-item");
    const formSections = document.querySelectorAll(".form-section");

    // Load completion state from localStorage
    sidebarItems.forEach(item => {
        const sectionId = item.getAttribute("id");
        if (localStorage.getItem(sectionId) === "completed") {
            item.classList.add("completed");
        }
    });

    // Sidebar item click event to show the corresponding form section
    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {
            const sectionId = item.getAttribute("id").replace("sidebar-", "");
            showSection(sectionId);
        });
    });

    // Form submission event handler
    formSections.forEach(section => {
        const form = section.querySelector("form");
        form.addEventListener("submit", event => {
            event.preventDefault();  // Prevent page refresh
            const sectionId = section.getAttribute("id");

            // Mark sidebar item as completed
            document.getElementById(`sidebar-${sectionId}`).classList.add("completed");
            localStorage.setItem(`sidebar-${sectionId}`, "completed");

            alert("Section completed!");
        });
    });

    // Function to display the selected form section and hide others
    function showSection(sectionId) {
        formSections.forEach(section => {
            section.classList.add("hidden");
        });
        document.getElementById(sectionId).classList.remove("hidden");

        // Mark the clicked sidebar item as active
        sidebarItems.forEach(item => item.classList.remove("active"));
        document.getElementById(`sidebar-${sectionId}`).classList.add("active");
    }

    // Show the first section initially
    showSection("personal-details");
});
