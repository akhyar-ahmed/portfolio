// Language Proficiency Progress
document.addEventListener('DOMContentLoaded', function () {
    updateProgressBar('englishProgress', 90); // Adjust the proficiency percentage
    updateProgressBar('germanProgress', 30); // Adjust the proficiency percentage
    updateProgressBar('banglaProgress', 100); // Adjust the proficiency percentage

    // Move your Chart.js code inside this onload event
    window.onload = function () {
        // Data for the charts
        var programmingData = {
        labels: ["Python", "SQL", "Java", "C++"],
        datasets: [{
            data: [95, 80, 85, 60],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        }]
        };
        var mlData = {
        labels: ["Scikit-learn", "PyTorch", "TensorFlow", "Trees (RandomForest, XGBoost)", "Deployment: (Docker, FastAPI, AWS EB)", "Serverless: (AWS Lambda)"],
        datasets: [{
            data: [95, 95, 90, 90, 90, 70],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9966FF", "#4BC0C0", "#6B32FF"],
        }]
        };

        var nlpData = {
        labels: ["NLTK", "SpaCy", "Gensim", "Transformers", "Proompt Engineering/LLM"],
        datasets: [{
            data: [95, 80, 55, 95, 95],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        }]
        };

        var deepLearningData = {
        labels: ["Supervised: (CNN, LSTM, RNN, ResNet)","Unsupervised: (GAN, Autoencoders)", "Reinforcement: (Q-Learning, Monte Carlo Tree Search)"],
        datasets: [{
            data: [95, 75, 80],
            backgroundColor: ["#FF6384", "#36A2EB", "#9966FF"],
        }]
        };

        var dataVizData = {
        labels: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "ggplot2"],
        datasets: [{
            data: [95, 95, 90, 90, 50],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        }]
        };

        var mlopsData = {
        labels: ["BentoML", "MLFlow", "Orchestration: (Prefect, Kubernets)", "Monitorization: (Grafana, Prometheus)", "Weights & Biases", "Amazon SageMaker"],
        datasets: [{
            data: [75, 75, 85, 85, 75, 50],
            backgroundColor: ["#4BC0C0", "#FF6384", "#36A2EB", "#FFCE56", "#9966FF", "#4BC0FF"],
        }]
        };

        var cplatformData = {
        labels: ["AWS", "GCP", "Azure"],
        datasets: [{
            data: [80, 70, 70],
            backgroundColor: ["#4BC0C0", "#FF6384", "#36A2EB"],
        }]
        };

        var bigDataToolsData = {
        labels: ["Apache Hadoop", "Apache Spark", "Hive"],
        datasets: [{
            data: [90, 60, 40],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        }]
        };

        // Chart configurations
        var chartConfig = {
        type: 'pie',
        options: {
            legend: {
            position: 'top',
            },
            responsive: false,
            maintainAspectRatio: true,
        },
        };

        // Create charts
        var programmingChart = new Chart(document.getElementById("programmingChart"), Object.assign({}, chartConfig, {
        data: programmingData,
        }));

        var mlChart = new Chart(document.getElementById("mlChart"), Object.assign({}, chartConfig, {
        data: mlData,
        }));

        var nlpChart = new Chart(document.getElementById("nlpChart"), Object.assign({}, chartConfig, {
        data: nlpData,
        }));

        var deepLearningChart = new Chart(document.getElementById("deepLearningChart"), Object.assign({}, chartConfig, {
        data: deepLearningData,
        }));

        var dataVizChart = new Chart(document.getElementById("dataVizChart"), Object.assign({}, chartConfig, {
        data: dataVizData,
        }));

        var mlopsChart = new Chart(document.getElementById("mlopsChart"), Object.assign({}, chartConfig, {
        data: mlopsData,
        }));

        var cplatformChart = new Chart(document.getElementById("cplatforms"), Object.assign({}, chartConfig, {
        data: cplatformData,
        }));

        var bigDataToolsChart = new Chart(document.getElementById("bigDataTools"), Object.assign({}, chartConfig, {
        data: bigDataToolsData,
        }));

    };

    function updateProgressBar(id, value) {
        var progressBar = document.getElementById(id);
        progressBar.style.width = value + '%';
        progressBar.innerHTML = value + '%';
    }
});

