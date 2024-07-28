document.addEventListener("DOMContentLoaded", () => {
    // Email form button event
    const emailFormButton = document.querySelector(".email-form button");
    emailFormButton.addEventListener("click", (e) => {
        const emailInput = document.querySelector(".email-form input").value;
        if (emailInput === "") {
            alert("Please enter your email address.");
        } else {
            alert(`Email address ${emailInput} submitted!`);
        }
    });

    // Smooth scroll for internal links (if any)
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    }
});
