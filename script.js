// ===== MOBILE MENU =====

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}


// ===== SCROLL REVEAL ANIMATION =====

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ===== TEST =====

console.log("Welcome to Mohsin Ali's Portfolio Website");

// python code
// players = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// #Create 3 lists with 2 players each
// #Use slicing to create a list for Group 1
// g1 = players[0:2]

// #Use slicing to create a list for Group 2
// g2 = players[2:4]

// #Use slicing to create a list for Group 3
// g3 = players[4:6]

// print("Group 1:")
// #display the 1st group
// print(g1)

// print("Group 2:")
// #display the 2nd group
// print(g2)

// print("Group 3:")
// #display the 3rd group
// print(g3)