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
  const statusPlan = document.getElementById("status-plan");

  let planDetails = '';

  // Update status text and plan details
  if (status === 'green') {
    statusText.innerHTML = "Status: Green";
    statusCard.className = "card shadow status-card green";
    planDetails = "Plan: Ventolin as needed.";
    statusPlan.innerText = planDetails;
    callDoctorButton.classList.add("d-none"); // Hide the button
  } else if (status === 'yellow') {
    statusText.innerHTML = "Status: Yellow";
    statusCard.className = "card shadow status-card yellow";
    planDetails = "Plan: Take steroids as prescribed.";
    statusPlan.innerText = planDetails;
    callDoctorButton.classList.add("d-none"); // Hide the button
  } else if (status === 'red') {
    statusText.innerHTML = "Status: Red";
    statusCard.className = "card shadow status-card red";
    planDetails = "Plan: Call your doctor immediately!";
    statusPlan.innerText = planDetails;
    callDoctorButton.classList.remove("d-none"); // Show the button
  }
}

// Function to handle custom content for the plan modal based on the status
function updatePlanDetails(status) {
  const planDetailsElement = document.getElementById('plan-details');
  let customPlanContent = '';

  // Set the plan details based on the status
  if (status === 'green') {
    customPlanContent = "Your current plan is to use Ventolin as needed. If symptoms worsen, please contact your healthcare provider.";
  } else if (status === 'yellow') {
    customPlanContent = "Your current plan includes taking steroids as prescribed. Ensure you follow the dosage instructions provided by your doctor.";
  } else if (status === 'red') {
    customPlanContent = "Your current plan is to immediately call your doctor. If necessary, go to the emergency room.";
  }

  // Update the modal with the custom content
  planDetailsElement.innerHTML = customPlanContent;
}

// Add event listener to the "View Plan" button to trigger modal update
document.getElementById('view-plan-button').addEventListener('click', function() {
  const statusText = document.getElementById('status-text').innerText;
  
  // Extract status from the status text (assuming it starts with "Status: ")
  const status = statusText.split(': ')[1].toLowerCase();
  
  // Call the function to update the modal content with custom plan details
  updatePlanDetails(status);
});


  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    changeStatus('green'); // Default status
  });
  