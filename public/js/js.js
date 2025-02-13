import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from "@vercel/analytics"

injectSpeedInsights();
inject();


document.getElementById("about").onclick = function () {
    window.location.href = "about.html";
}

document.getElementById("contact").onclick = function () {
    window.location.href = "contact.html";
}


document.getElementById("projects").onclick = function () {
    window.location.href = "projects.html";
}
