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
  
 // Function to change status and show/hide the Call Doctor button
function changeStatus(status) {
  const statusText = document.getElementById("status-text");
  const statusCard = document.getElementById("status-card");
  const callDoctorButton = document.getElementById("call-doctor-button");

  // Update status text
  if (status === 'green') {
    statusText.innerHTML = "Status: Green";
    statusCard.className = "card shadow status-card green";
    document.getElementById("status-plan").innerText = "Plan: Ventolin as needed.";
    callDoctorButton.classList.add("d-none"); // Hide the button
  } else if (status === 'yellow') {
    statusText.innerHTML = "Status: Yellow";
    statusCard.className = "card shadow status-card yellow";
    document.getElementById("status-plan").innerText = "Plan: Take steroids as prescribed.";
    callDoctorButton.classList.add("d-none"); // Hide the button
  } else if (status === 'red') {
    statusText.innerHTML = "Status: Red";
    statusCard.className = "card shadow status-card red";
    document.getElementById("status-plan").innerText = "Plan: Call your doctor immediately!";
    callDoctorButton.classList.remove("d-none"); // Show the button
  }
}

  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    changeStatus('green'); // Default status
  });
  