const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lasModified").textContent = `Last Modified: ${lastModified}`;

// Static values for temperature and wind speed
const temperature = 1; // Temperature in Celsius
const windSpeed = 26; // Wind speed in km/h

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    // Convert wind speed from km/h to m/s
    const windSpeedMps = windSpeed / 3.6;

    // Check if wind chill can be calculated
    if (temp <= 10 && windSpeedMps > 4.8) {
        // Wind chill formula in Celsius
        const windChill =
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeedMps, 0.16) +
            0.3965 * temp * Math.pow(windSpeedMps, 0.16);
        return windChill.toFixed(1); // Return the value rounded to 1 decimal place
    } else {
        return "N/A"; // Wind chill is not applicable
    }
}

// Calculate the wind chill factor
const windChillFactor = calculateWindChill(temperature, windSpeed);

// Display the wind chill factor in the weather section
document.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.createElement("li");
    windChillElement.textContent = `Wind Chill: ${windChillFactor}°C`;
    document.querySelector(".weather ul").appendChild(windChillElement);
});
