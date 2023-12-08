// Language Proficiency Progress
document.addEventListener('DOMContentLoaded', function () {
    updateProgressBar('englishProgress', 90); // Adjust the proficiency percentage
    updateProgressBar('germanProgress', 30); // Adjust the proficiency percentage
    updateProgressBar('banglaProgress', 100); // Adjust the proficiency percentage

    function updateProgressBar(id, value) {
        var progressBar = document.getElementById(id);
        progressBar.style.width = value + '%';
        progressBar.innerHTML = value + '%';
    }
});

