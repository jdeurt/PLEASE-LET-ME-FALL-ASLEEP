console.log("LL");
  function newMeds() {
    fetch("/api/doctor/5c69078777e58837349e515f/medication", {
      method: "POST",
      body: {
        val: [{name: "Summedicin", dose: "2/day"}, {name: document.getElementById("m-name").getAttribute("value"), dose: document.getElementById("m-dose").getAttribute("value")}]
      }
    }).then(console.log);
  }