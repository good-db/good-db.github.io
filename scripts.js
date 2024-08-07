let t = 'npm';
function change(type) {
    t = type;
    if (type == 'npm') {
        // Change the text content of the element with the id "command-line" to "npm install good.db"
        document.getElementById("command-line").textContent = "$ npm install good.db";
        document.getElementById("command-line").innerHTML += `
        <button id="copy-btn" class="button-cus text-light mb-1 mr-0 ml-0" onclick="copyCommand()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
          </svg>
    </button>`;
        // Change the button class to "btn btn-primary"
        document.getElementById("yarn-btn").className = "btn btn-outline-light text-secondary";
        document.getElementById("npm-btn").className = "btn btn-light text-secondary me-2";

    } else if (type == 'yarn') {
        document.getElementById("command-line").textContent = "$ yarn add good.db";
        document.getElementById("command-line").innerHTML += `
        <button id="copy-btn" class="button-cus text-light mb-1 mr-0 ml-0" onclick="copyCommand()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
          </svg>
    </button>
    `;
        // Change the button class to "btn btn-primary"
        document.getElementById("yarn-btn").className = "btn btn-light text-secondary";
        document.getElementById("npm-btn").className = "btn btn-outline-light text-secondary me-2";
    };
};

function copyCommand() {
    // Copy the text content of the element with the id "command-line" to the clipboard
    navigator.clipboard.writeText(document.getElementById("command-line").textContent.replace('$', '').trim());
    // Change the text content of the element with the id "copy-btn" to "Copied!"
    document.getElementById("copy-btn").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
  </svg>`;
    // Change the button class to "btn btn-success"
    document.getElementById("copy-btn").className = "button-cus text-success mb-1 mr-0 ml-0";
    // Change the text content of the element with the id "copy-btn" to "Copy"
    setTimeout(() => {
        document.getElementById("copy-btn").innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>`;
        // Change the button class to "btn btn-primary"
        document.getElementById("copy-btn").className = "button-cus text-light mb-1 mr-0 ml-0";
    }, 1000);
}


// Get all progress bars
const progressBars = document.querySelectorAll('.progress-bar');

// Get durations from aria-valuemax attributes
const durations = Array.from(progressBars).map(bar => parseInt(bar.getAttribute('aria-valuemax')));

// Find the maximum duration
const maxDuration = Math.max(...durations);

// Set the width of each progress bar based on its duration
progressBars.forEach(bar => {
    const duration = parseInt(bar.getAttribute('aria-valuemax'));
    const widthPercentage = (duration / maxDuration) * 100;
    bar.style.width = `${widthPercentage}%`;
});

const xValues = Array.from({ length: 10 }, (_, i) => 1000 + i * 1000); // Generate x-axis values from 1000 to 10000

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                data: [2711, 9908, 23364, 44015, 64074, 105160, 138844, 175926, 228070, 293667].map(msToSeconds),
                borderColor: "green",
                fill: false,
                label: "Good.db"
            },
            {
                data: [1410, 4836, 10839, 21050, 30890, 45533, 62828, 84932, 105821, 133784].map(msToSeconds),
                borderColor: "purple",
                fill: true,
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                label: "Good.db (Caching)"
            },
            {
                data: [2707, 9870, 24615, 45780, 69914, 107009, 141454, 188537, 236031, 305003].map(msToSeconds),
                borderColor: "blue",
                fill: false,
                label: "Best.db"
            },
            {
                data: [2800, 9621, 25268, 47013, 71036, 105780, 138723, 188213, 244605, 310935].map(msToSeconds),
                borderColor: "gray",
                fill: false,
                label: "Pro.db"
            },
            {
                data: [6647, 14788, 26003, 35920, 44850, 62220, 75649, 94440, 111733, 139436].map(msToSeconds),
                borderColor: "cyan",
                fill: false,
                label: "Quick.db (Caching)"
            },
            {
                data: [7761, 33812, 79934, 127000, 195959, 274331, 351275, 457205, 598155, 763685].map(msToSeconds),
                borderColor: "yellow",
                fill: false,
                label: "St.db",
            },
            {
                data: [3892, 14410, 40123, 68721, 102589, 165327, 216148, 283573, 360532, 449981].map(msToSeconds),
                borderColor: "red",
                fill: false,
                label: "Wio.db",
            },
        ]
    },
    options: {
        // legend: { display: false }
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                    var xValue = data.labels[tooltipItem.index];
                    var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return `${datasetLabel}: ${value} seconds at ${xValue} keys`;
                }
            }
        },
        scales: {
            yAxes: [{
              ticks: {
                reverse: true,
              }
            }]
          }
    }
});

function msToSeconds(ms) {
    return (ms / 1000).toFixed(2);
}