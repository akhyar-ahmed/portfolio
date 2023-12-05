// JavaScript to toggle the visibility of the recommendation letter
// $(document).ready(function () {
//     $("#toggleLetter").click(function () {
//         $("#letterContainer").toggle();
//     });
// });

// JavaScript to toggle the visibility of the recommendation letter
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleLetter').addEventListener('click', function () {
        document.getElementById('letterContainer').style.display = 'block';
    });
});