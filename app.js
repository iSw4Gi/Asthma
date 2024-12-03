// Display Current Date and Time Without Seconds
function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    document.getElementById("datetime").textContent = now.toLocaleDateString('en-US', options);
  }
  
  // Change Status and Update UI
  function changeStatus(status) {
    const statusCard = document.getElementById("status-card");
    const statusText = document.getElementById("status-text");
    const statusPlan = document.getElementById("status-plan");
    const callDoctorButton = document.getElementById("call-doctor-button");
  
    if (status === 'green') {
      statusCard.className = "card shadow status-card green";
      statusText.textContent = "Status: Green";
      statusPlan.textContent = "Plan: Ventolin as needed.";
      callDoctorButton.classList.add("d-none");
    } else if (status === 'yellow') {
      statusCard.className = "card shadow status-card yellow";
      statusText.textContent = "Status: Yellow";
      statusPlan.textContent = "Plan: Take prescribed steroids.";
      callDoctorButton.classList.add("d-none");
    } else if (status === 'red') {
      statusCard.className = "card shadow status-card red";
      statusText.textContent = "Status: Red";
      statusPlan.textContent = "Plan: Call your doctor immediately!";
      callDoctorButton.classList.remove("d-none");
    }
  
    // Update Plan Details in Modal
    document.getElementById("plan-details").textContent = statusPlan.textContent;
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    changeStatus('green'); // Default status
  });
  