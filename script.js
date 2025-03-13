
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
    document.getElementById("toggle-projects").addEventListener("click", function () {
        var extraProjects = document.querySelector(".extra-projects");
        if (extraProjects.style.display === "none" || extraProjects.style.display === "") {
            extraProjects.style.display = "grid"; // Change from block to grid
            this.textContent = "Show Less";
        } else {
            extraProjects.style.display = "none";
            this.textContent = "Show More";
        }
    });
    