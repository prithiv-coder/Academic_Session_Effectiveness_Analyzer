document.addEventListener("DOMContentLoaded", function () {

    let ratings = {
        clarity: 0,
        engagement: 0,
        content: 0,
        overall: 0
    };

    let chart;

    // =========================
    // Show Selected Date
    // =========================
    const urlParams = new URLSearchParams(window.location.search);
    const fullDate = urlParams.get("date");

    if (fullDate) {
        const dateElement = document.getElementById("selectedDate");
        if (dateElement) {
            dateElement.innerText = "Selected Date: " + fullDate;
        }
    }

    // =========================
    // Create Star Ratings
    // =========================
    document.querySelectorAll(".stars").forEach(container => {

        const category = container.getAttribute("data-category");

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.innerHTML = "★";
            star.classList.add("star");

            star.addEventListener("click", () => {
                ratings[category] = i;
                updateStars(container, i);
            });

            container.appendChild(star);
        }
    });

    function updateStars(container, rating) {
        const stars = container.querySelectorAll(".star");

        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }

    // =========================
    // Calculate Score
    // =========================
    window.calculateScore = function () {

        const subject = document.getElementById("subject").value;

        if (!subject) {
            alert("Please select a subject!");
            return;
        }

        const { clarity, engagement, content, overall } = ratings;

        if (!clarity || !engagement || !content || !overall) {
            alert("Please rate all categories!");
            return;
        }

        let score = (clarity + engagement + content + overall) / 4;

        let status = "";

        if (score >= 4.5) status = "Excellent";
        else if (score >= 3.5) status = "Good";
        else if (score >= 2.5) status = "Average";
        else status = "Needs Improvement";

        document.getElementById("result").innerHTML =
            subject + " Score: " + score.toFixed(2) + " (" + status + ")";

        createChart(clarity, engagement, content, overall);
    };

    // =========================
    // Create Chart
    // =========================
    function createChart(c, e, con, o) {

        const ctx = document.getElementById("myChart").getContext("2d");

        if (chart) chart.destroy();

        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Clarity", "Engagement", "Content", "Overall"],
                datasets: [{
                    label: "Session Ratings",
                    data: [c, e, con, o],
                    backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"]
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });
    }

    // =========================
    // Reset When Subject Changes
    // =========================
    document.getElementById("subject").addEventListener("change", function () {

        ratings = {
            clarity: 0,
            engagement: 0,
            content: 0,
            overall: 0
        };

        document.querySelectorAll(".star").forEach(star => {
            star.classList.remove("selected");
        });

        document.getElementById("result").innerHTML = "";

        if (chart) chart.destroy();
    });

});
