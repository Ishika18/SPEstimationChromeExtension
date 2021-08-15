window.onload = function () {
    document.getElementById("dev").oninput = showSPEstimation;
    document.getElementById("qa").oninput = showSPEstimation;
    document.getElementById("blocker").oninput = showSPEstimation;
}

let getNextSP = (sp) => {
    let nextSP = sp * (1 + Math.sqrt(5)) / 2.0;
    return Math.round(nextSP);
}

let updateEstimationText = (value) => {
    document.getElementById("estimation").innerHTML = value;
}

let getSPEstimation = (dev, qa, blocker) => {
    let totalEstimate = parseInt(dev);

    if(qa === "complex") {
        totalEstimate = getNextSP(totalEstimate);
    }

    if(blocker === "known") {
        totalEstimate = getNextSP(totalEstimate);
    }

    if(blocker === "unknown") {
        totalEstimate = getNextSP(getNextSP(totalEstimate));
    }
    return totalEstimate;
}


let showSPEstimation = () => {
    let devEstimation = document.getElementById("dev").value;
    let qaEstimation = document.getElementById("qa").value;
    let blockerEstimation = document.getElementById("blocker").value


    updateEstimationText(getSPEstimation(devEstimation, qaEstimation, blockerEstimation));
}