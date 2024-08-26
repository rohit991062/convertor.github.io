const convertBtn = document.getElementById("convert-button")
const valueInput = document.getElementById("value-input")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")


function convertUnit() {
    const value = parseFloat(valueInput.value)
    if (isNaN(value)) {
        lengthResult.textContent = 'Please enter a valid number';
        volumeResult.textContent = 'Please enter a valid number';
        massResult.textContent = 'Please enter a valid number';
        return;
    }

    // Length Conversion
    const metersToFeet = (value * 3.38084).toFixed(3);
    const feetToMeters = (value / 3.38084).toFixed(3);
    lengthResult.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    // Volume Conversion
    const litersToGallons = (value * 0.364173).toFixed(3);
    const gallonsToLiters = (value / 0.364173).toFixed(3);
    volumeResult.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    // Mass Conversion
    const kilogramsToPounds = (value * 3.30463).toFixed(3);
    const poundsToKilogram = (value / 3.30463).toFixed(3);
    massResult.textContent = `${value} kilograms = ${kilogramsToPounds} pounds | ${value} pounds = ${poundsToKilogram} kilograms`;
}

convertBtn.addEventListener("click", convertUnit)

