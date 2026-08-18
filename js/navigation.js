/* ==========================================================================
   navigation.js
   - Mobile hamburger menu toggle & accessibility
   - Intersection Observer for scroll reveal animations & active nav links
   - Typewriter animation for the Hero section
   - Advanced contact form validation & interactive submission states
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------- 1. Mobile Navigation ---------------- */
  const burger = document.querySelector(".burger");
  const navLinksList = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  function closeMenu() {
    navLinksList.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = navLinksList.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  }

  if (burger && navLinksList) {
    burger.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      const clickedInsideNav = navLinksList.contains(event.target) || burger.contains(event.target);
      if (!clickedInsideNav && navLinksList.classList.contains("open")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navLinksList.classList.contains("open")) {
        closeMenu();
        burger.focus();
      }
    });
  }


  /* ---------------- 2. Typewriter Animation ---------------- */
  const typewriterText = document.getElementById("typewriter-text");
  const roles = [
    "Software Developer.",
    "B.Tech CSE Student (2026 Passout).",
    "Full-Stack Web Architect.",
    "Problem Solver & Tech Enthusiast."
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      // Deleting character
      typewriterText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // delete faster
    } else {
      // Typing character
      typewriterText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // standard typing speed
    }

    // Checking states
    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at the end of word
      isDeleting = true;
      typingSpeed = 2000; // pause before delete
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // pause before typing next
    }

    setTimeout(typeRole, typingSpeed);
  }

  if (typewriterText) {
    // Start typing cycle
    setTimeout(typeRole, 1000);
  }


  /* ---------------- 3. Scroll Reveal & Active Links Observer ---------------- */
  const revealElements = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section");

  // Options for Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  // Reveal scroll observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // trigger animation only once
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Active navigation link tracking observer
  const activeLinkOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // viewport middle slice
    threshold: 0
  };

  const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, activeLinkOptions);

  sections.forEach((section) => {
    activeLinkObserver.observe(section);
  });


  /* ---------------- 4. Advanced Contact Form Validation ---------------- */
  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  function setFieldError(field, message) {
    const wrapper = field.closest(".form-field");
    const error = wrapper.querySelector(".field-error");
    if (message) {
      wrapper.classList.add("invalid");
      error.textContent = message;
    } else {
      wrapper.classList.remove("invalid");
      error.textContent = "";
    }
  }

  function validateName(field) {
    if (field.value.trim().length < 2) {
      setFieldError(field, "Please enter your name (at least 2 characters).");
      return false;
    }
    setFieldError(field, "");
    return true;
  }

  function validateEmail(field) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(field.value.trim())) {
      setFieldError(field, "Please enter a valid email address (e.g. name@domain.com).");
      return false;
    }
    setFieldError(field, "");
    return true;
  }

  function validateMessage(field) {
    if (field.value.trim().length < 10) {
      setFieldError(field, "Message must contain at least 10 characters.");
      return false;
    }
    setFieldError(field, "");
    return true;
  }

  if (form) {
    const nameField = form.querySelector("#name");
    const emailField = form.querySelector("#email");
    const messageField = form.querySelector("#message");

    // Real-time validations on blur
    nameField.addEventListener("blur", () => validateName(nameField));
    emailField.addEventListener("blur", () => validateEmail(emailField));
    messageField.addEventListener("blur", () => validateMessage(messageField));

    // Form submit validation & interactive states
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const validName = validateName(nameField);
      const validEmail = validateEmail(emailField);
      const validMessage = validateMessage(messageField);

      if (validName && validEmail && validMessage) {
        // Show sending state
        submitBtn.classList.add("loading");
        submitBtn.disabled = true;
        statusMessage.textContent = "";
        statusMessage.classList.remove("visible", "success", "invalid");

        // Simulate API network delay
        setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
          
          // Show beautiful success banner
          statusMessage.textContent = "Message transmitted successfully! Thank you, Dhruv Kumar will connect with you shortly.";
          statusMessage.classList.add("visible", "success");
          
          form.reset();
        }, 1500);

      } else {
        // Show validation warning
        statusMessage.textContent = "Please resolve the errors highlighted above and resubmit.";
        statusMessage.classList.remove("success");
        statusMessage.classList.add("visible", "invalid");

        // Auto-focus on first invalid input
        const firstInvalid = form.querySelector(".form-field.invalid input, .form-field.invalid textarea");
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }
})();
