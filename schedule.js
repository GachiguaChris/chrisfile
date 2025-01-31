document.addEventListener("DOMContentLoaded", () => {
  // Animate cards on page load with delay
  const cards = document.querySelectorAll(".card, .testimonial-card");
  cards.forEach((card, index) => {
    card.style.animation = `fadeIn 0.5s ease-out ${index * 0.2}s`;
  });

  // Form submit event listener for scheduling a post
  const scheduleForm = document.getElementById("schedule-form");
  scheduleForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get form values
    const postContent = document.getElementById("post-content").value;
    const postDate = document.getElementById("post-date").value;
    const platform = document.getElementById("platform").value;
    const fileInput = document.getElementById("upload-file").files[0];

    if (!postContent || !postDate || !platform) {
      alert("Please fill in all fields!");
      return;
    }

    // Handle the file upload
    if (fileInput) {
      console.log(`File chosen: ${fileInput.name}`);
    } else {
      console.log("No file uploaded.");
    }

    // Log the form data for now (In real scenario, you'd send it to the server)
    console.log("Scheduled Post Data:");
    console.log(`Content: ${postContent}`);
    console.log(`Date & Time: ${postDate}`);
    console.log(`Platform: ${platform}`);

    // Success message
    alert("Your post has been scheduled successfully!");

    // Reset form after submission
    scheduleForm.reset();
  });

  // Form Input Focus Effects
  const inputs = document.querySelectorAll('textarea, input[type="text"], input[type="datetime-local"], select');
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#f39c12";
      input.style.backgroundColor = "#fff8e1";
    });

    input.addEventListener("blur", () => {
      input.style.borderColor = "#006a8e";
      input.style.backgroundColor = "#e7f3ff";
    });
  });

  // Adding hover effects to buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#f39c12";
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#006a8e";
    });
  });
});

// For smooth scroll when clicking on nav links (if needed)
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
