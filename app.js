let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function getInnerText(id) {
    const element = document.getElementById(id);
    return element.innerText;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function updateUI() {
    setInnerText("heart-count", heartCount);
    setInnerText("coin-count", coinCount);
    setInnerText("copy-count", copyCount);
}
updateUI();

// Hearts
function handleHeart(service) {
    document.getElementById("heart-" + service).addEventListener("click", function () {
        heartCount++;
        updateUI();
    });
}

// Handel copy
function handleCopy(service, numberId) {
    document.getElementById("copy-" + service).addEventListener("click", function () {
        const number = getInnerText(numberId);
        navigator.clipboard.writeText(number);
        alert("Copied: " + number);
        copyCount++;
        updateUI();
    });
}

// Handel call
function handleCall(service, serviceName, numberId) {
    document.getElementById("call-" + service).addEventListener("click", function () {
        const number = getInnerText(numberId);

        if (coinCount < 20) {
            alert(" Not enough coins!");
            return;
        }

        coinCount -= 20;
        updateUI();
        alert(` Calling ${serviceName} (${number})`);

        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.innerText = `${serviceName} - ${number} - ${time}`;
        document.getElementById("history-list").appendChild(li);
    });
}

// call functions
handleHeart("national");
handleCopy("national", "num-national");
handleCall("national", "National Emergency Number", "num-national");

handleHeart("police");
handleCopy("police", "num-police");
handleCall("police", "Police Helpline Number", "num-police");

handleHeart("fire");
handleCopy("fire", "num-fire");
handleCall("fire", "Fire Service Number", "num-fire");

handleHeart("ambulance");
handleCopy("ambulance", "num-ambulance");
handleCall("ambulance", "Ambulance Service", "num-ambulance");

handleHeart("women");
handleCopy("women", "num-women");
handleCall("women", "Women & Child Helpline", "num-women");

handleHeart("anticorruption");
handleCopy("anticorruption", "num-anticorruption");
handleCall("anticorruption", "Anti-Corruption Helpline", "num-anticorruption");

handleHeart("electricity");
handleCopy("electricity", "num-electricity");
handleCall("electricity", "Electricity Helpline", "num-electricity");

handleHeart("brac");
handleCopy("brac", "num-brac");
handleCall("brac", "Brac Helpline", "num-brac");

handleHeart("railway");
handleCopy("railway", "num-railway");
handleCall("railway", "Bangladesh Railway Helpline", "num-railway");

// history clear
document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("history-list").innerText = "";
});