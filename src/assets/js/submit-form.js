document.addEventListener("DOMContentLoaded", function() {
  if (!document.getElementById("login-form")) return console.log("Form not found.");

  console.log("Loaded form");

  document.getElementById("login-patient").onclick = e => {
    e.preventDefault();

    document.getElementById("submissionType").setAttribute("value", "patient");

    document.getElementById("login-form").submit();
  };

  document.getElementById("login-doctor").onclick = e => {
    e.preventDefault();

    document.getElementById("submissionType").setAttribute("value", "doctor");

    document.getElementById("login-form").submit();
  };

  document.getElementById("login-provider").onclick = e => {
    e.preventDefault();

    document.getElementById("submissionType").setAttribute("value", "provider");

    document.getElementById("login-form").submit();
  };
});

console.log("LL");
  function newMeds() {
    fetch("/api/doctor/5c69078777e58837349e515f/medication", {
      method: "POST",
      body: {
        val: [{name: "Summedicin", dose: "2/day"}, {name: document.getElementById("m-name").getAttribute("value"), dose: document.getElementById("m-dose").getAttribute("value")}]
      }
    }).then(resp => {
      document.getElementById("m-name").setAttribute("value", "");
      document.getElementById("m-dose").setAttribute("value", "");
    });

  }