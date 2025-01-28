// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Navbar active link update on scroll
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Dark mode toggle
const themeToggle = document.querySelector(".theme-toggle")
const body = document.body

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"))
})

// Check for saved dark mode preference
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode")
}

// Contact form submission
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const formData = new FormData(contactForm)
  fetch("/submit_contact", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      } else {
        alert("There was an error submitting your message. Please try again.")
      }
    })
    .catch((error) => {
      console.error("Error:", error)
      alert("There was an error submitting your message. Please try again.")
    })
})

