function showSolution(issue) {

    const title = document.getElementById("solution-title");
    const description = document.getElementById("solution-description");
    const steps = document.getElementById("solution-steps");

    let issueTitle = "";
    let issueDescription = "";
    let solutionSteps = [];

    if (issue === "network") {

        issueTitle = "🌐 Network / Wi-Fi Troubleshooting";

        issueDescription =
            "Follow these steps when the computer cannot connect to the internet.";

        solutionSteps = [
            "Check whether Wi-Fi is turned ON.",
            "Restart the Wi-Fi router.",
            "Disconnect and reconnect to the Wi-Fi network.",
            "Check the network cable if using Ethernet.",
            "Restart the computer."
        ];
    }

    else if (issue === "windows") {

        issueTitle = "💻 Windows Troubleshooting";

        issueDescription =
            "Follow these basic steps for common Windows problems.";

        solutionSteps = [
            "Restart the computer.",
            "Check for Windows Updates.",
            "Open Task Manager and check CPU and memory usage.",
            "Check available storage space.",
            "Restart the affected application."
        ];
    }

    else if (issue === "printer") {

        issueTitle = "🖨️ Printer Troubleshooting";

        issueDescription =
            "Follow these steps when the printer is not working.";

        solutionSteps = [
            "Check whether the printer is powered ON.",
            "Check the USB or Wi-Fi connection.",
            "Check paper and ink levels.",
            "Make sure the correct printer is selected.",
            "Restart the printer."
        ];
    }

    else if (issue === "sound") {

        issueTitle = "🔊 Sound Troubleshooting";

        issueDescription =
            "Follow these steps when there is no sound from the computer.";

        solutionSteps = [
            "Check the system volume.",
            "Make sure the computer is not muted.",
            "Select the correct audio output device.",
            "Reconnect headphones or speakers.",
            "Restart the computer."
        ];
    }

    else if (issue === "slow") {

        issueTitle = "🐌 Slow Computer Troubleshooting";

        issueDescription =
            "Follow these steps when the computer is running slowly.";

        solutionSteps = [
            "Restart the computer.",
            "Open Task Manager and check resource usage.",
            "Close unnecessary applications.",
            "Remove unnecessary temporary files.",
            "Check available storage space."
        ];
    }

    else if (issue === "login") {

        issueTitle = "🔐 Login Troubleshooting";

        issueDescription =
            "Follow these steps when you cannot log in to an account.";

        solutionSteps = [
            "Check the username and password.",
            "Make sure Caps Lock is not enabled.",
            "Check the internet connection.",
            "Try resetting the password if available.",
            "Contact the administrator if the problem continues."
        ];
    }

    title.textContent = issueTitle;
    description.textContent = issueDescription;

    steps.innerHTML = "";

    solutionSteps.forEach(function(step) {

        const li = document.createElement("li");

        li.textContent = step;

        steps.appendChild(li);
    });
}
function searchIssue() {

    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    if (search.includes("wifi") || search.includes("network")) {

        showSolution("network");

    } else if (search.includes("windows")) {

        showSolution("windows");

    } else if (search.includes("printer")) {

        showSolution("printer");

    } else if (search.includes("sound") || search.includes("audio")) {

        showSolution("sound");

    } else if (search.includes("slow")) {

        showSolution("slow");

    } else if (search.includes("login") || search.includes("password")) {

        showSolution("login");

    } else {

        alert("Issue not found. Please try another keyword.");
    }
}
function submitRequest() {

    const name = document.getElementById("userName").value;
    const issue = document.getElementById("userIssue").value;
    const priority = document.getElementById("priority").value;
    const message = document.getElementById("requestMessage");

    if (name === "" || issue === "" || priority === "") {

        message.textContent =
            "Please fill all the fields.";

        return;
    }

    const ticketNumber =
        "TKT-" + Math.floor(1000 + Math.random() * 9000);

    message.innerHTML =
        "Support request submitted successfully!<br><br>" +
        "<strong>Ticket ID:</strong> " + ticketNumber + "<br>" +
        "<strong>Customer:</strong> " + name + "<br>" +
        "<strong>Issue:</strong> " + issue + "<br>" +
        "<strong>Priority:</strong> " + priority + "<br>" +
        "<strong>Status:</strong> Open";
}
function updateStatus() {

    const ticket =
        document.getElementById("ticketSearch").value;

    const status =
        document.getElementById("ticketStatus").value;

    const message =
        document.getElementById("statusMessage");

    if (ticket === "") {

        message.textContent =
            "Please enter a Ticket ID.";

        return;
    }

    message.innerHTML =
        "<strong>Ticket:</strong> " + ticket +
        "<br><strong>Updated Status:</strong> " + status;
}
