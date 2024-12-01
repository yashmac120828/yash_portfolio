let body = document.querySelector("body");
let nav = document.querySelectorAll("nav");
let themeButton = document.querySelector(".theme");
let hr = document.querySelectorAll(".hr"); 
let theme = localStorage.getItem('theme') || 'dark';
let netf=document.querySelector(".netf");
let amazon=document.querySelector(".amzn");
let p = document.querySelectorAll(".p");
let c1 = document.querySelectorAll(".c1");
//form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.Name.value.trim();
    const email = this.Email.value.trim();
    const query = this.Query.value.trim();
    const review = this.Review.value;
    let valid = true;
    let errors = [];
    if (name === "") {
        valid = false;
        errors.push("Name is required.");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        valid = false;
        errors.push("Email is required.");
    } else if (!emailPattern.test(email)) {
        valid = false;
        errors.push("Please enter a valid email address.");
    }
    if (review === "" || review < 0 || review > 10) {
        valid = false;
        errors.push("Review must be a number between 0 and 10.");
    }
    if (!valid) {
        alert(errors.join("\n"));
    } else {
        this.submit();
    }
});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        netf.src=`darknetflix.png`;
        amazon.src=`darkamzon.png`;
        themeButton.innerHTML = `<i class="fa-regular fa-moon"></i>`;
        themeButton.style.backgroundColor = "#b2679a"; 
        body.style.backgroundColor = "#0e050f";
        body.style.color = "#fff";
        p.forEach(px => {
            px.style.color="#fff";
        });
        hr.forEach(h => {
            h.style.borderColor = "#170b3b";
        });
        nav.forEach(n => {
            n.style.backgroundColor = "#170b3b";
        })
        c1.forEach(cx => {
            cx.style.color = "#fff"; 
        }
        );

    } else {
        netf.src=`lightnetflix.png`;
        amazon.src=`lightamazon.png`;
        themeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        themeButton.style.backgroundColor = "#b2679a"; 
        body.style.backgroundColor = "white";
        body.style.color = "#31424a";
        p.forEach(px => {
            px.style.color="#31424a";
        });
        nav.forEach(n => {
            n.style.backgroundColor = "#31424a";
        });
        c1.forEach(cx => {
            cx.style.color = "#31424a"; 
        });
    }
}


function toggleTheme() {
    theme = (theme === 'dark') ? 'light' : 'dark'; // Toggle theme
    applyTheme(theme);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(theme); // Apply the stored theme on load

    
    themeButton.addEventListener('click', toggleTheme);
});
document.addEventListener("DOMContentLoaded", function() {
    const secondSection = document.querySelector('.secondSection');
    const imgSkills = document.querySelectorAll('.imgskills');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgSkills.forEach(imgSkill => {
                    imgSkill.classList.add('popout'); 
                });
            } else {
                imgSkills.forEach(imgSkill => {
                    imgSkill.classList.remove('popout'); 
                });
            }
        });
    });

    observer.observe(secondSection);
    imgSkills.forEach(imgSkill => {
        imgSkill.addEventListener('animationend', () => {
            imgSkill.classList.remove('popout'); 
        });
    });
});
