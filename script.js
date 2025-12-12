// Language toggle
const langBtn = document.getElementById("langToggle");
let isAmharic = false;

langBtn.addEventListener("click", () => {
    isAmharic = !isAmharic;
    if (isAmharic) {
        document.body.innerHTML = document.body.innerHTML.replace(
            /Empowering Better Health Through Knowledge/g,
            "የጤና መረጃ በማዕከላዊነት"
        );
        langBtn.innerText = "English";
    } else {
        location.reload(); // Simple reload to reset English
    }
});

// Optional: Smooth scrolling for navigation
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
