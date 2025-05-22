// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 100) {
            bar.style.width = bar.parentElement.nextElementSibling.textContent;
        }
    });
};

// Initial check for skills in view
animateSkills();

// Check for skills in view on scroll
window.addEventListener('scroll', animateSkills);

// Highlight active section heading on scroll
const sectionIds = ['about', 'skills', 'projects', 'contact'];
const sectionHeadings = sectionIds.map(id => document.querySelector(`#${id} h2`));
const sections = sectionIds.map(id => document.getElementById(id));

function highlightActiveHeading() {
    let activeIndex = 0;
    const scrollY = window.scrollY + window.innerHeight / 3;
    sections.forEach((section, i) => {
        if (section.offsetTop <= scrollY) {
            activeIndex = i;
        }
    });
    sectionHeadings.forEach((heading, i) => {
        if (heading) {
            heading.classList.toggle('section-active', i === activeIndex);
        }
    });
}

window.addEventListener('scroll', highlightActiveHeading);
window.addEventListener('DOMContentLoaded', highlightActiveHeading); 