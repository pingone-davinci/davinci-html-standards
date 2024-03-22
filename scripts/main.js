const testData = [
  {
    title: "User Sign On",
    description: "Standardized Sign On form. The form includes fields for email address and password, buttons for Sign On, Password Reset and Registration.",
    url: "forms/signon.html",
  },
  {
    title: "Change Password",
    description: "Standardized Change Password form. The form includes fields for current, new and verify new passwords. Buttons for Continue and Cancel.",
    url: "forms/change-password.html",
  },
  {
    title: "Forgot Password",
    description: "Standardized Forgot Password form. Buttons for Continue and Cancel.",
    url: "forms/forgot-password.html",
  },
  {
    title: "Password Recovery",
    description: "Standardized Password Recovery form. Fields for recovery code, new and verify password. Buttons for Resend, Continue and Cancel.",
    url: "forms/password-recovery.html",
  },
  {
    title: "Password Recovery Success",
    description: "Standardized Password Recovery Success form. Success message with button to Continue",
    url: "forms/password-recovery-success.html",
  },
  {
    title: "Address Form",
    description: "User Address form. Fields for street address, city, state, zip and country. Buttons for Continue and Cancel",
    url: "forms/address.html",
  },
  {
    title: "Agreement Form",
    description: "PingOne Agreement form. Field for accepting terms. Buttons for Accept and Decline",
    url: "forms/agreement.html",
  },
  {
    title: "MFA Auth Device Selection",
    description: "Standardized MFA device selection form. Buttons for devices and Cancel",
    url: "forms/mfa-auth-device-selection.html",
  },
  {
    title: "One-Time Passcode Authentication",
    description: "One-Time Passcode Authentication form (configured for email). Field for OTP code. Buttons for Resend, Continue and Cancel",
    url: "forms/otp-authentication.html",
  },
  {
    title: "FIDO Passkey Authentication",
    description: "FIDO Passkey Authentication form. Buttons for Retry and Cancel",
    url: "forms/fido2-authentication.html",
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("testCards");

  testData.forEach((test) => {
    const cardHTML = `
            <div class="col">
                <div class="card test-panel h-100">
                    <div class="panel-header">
                        <span class="m-0 h5">${test.title}</span>
                    </div>
                    <div class="panel-body">
                        <p>${test.description}</p>
                    </div>
                    <div class="panel-footer">
                        <a href="${test.url}" class="btn btn-primary px-4 rounded-3">View</a>
                    </div>
                </div>
            </div>
        `;
    cardContainer.innerHTML += cardHTML;
  });
});

