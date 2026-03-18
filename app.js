// app.js

// Capture the form data from index.html
document.getElementById('registrarViaje').onclick = function() {
    let monto = document.getElementById('monto').value;
    let km = document.getElementById('km').value;
    let tipo = document.getElementById('tipo').value;

    let viajeData = { monto, km, tipo };

    // Sync data with GitHub repository
    syncDataWithGitHub(viajeData);
    // Store data in localStorage as fallback
    localStorage.setItem('viajeData', JSON.stringify(viajeData));
};

// Function to sync data with GitHub repository
function syncDataWithGitHub(data) {
    const token = 'YOUR_PERSONAL_ACCESS_TOKEN';
    const repoOwner = 'cristiantronic2000-spec';
    const repoName = 'driver-pro-data';
    const filePath = 'data.json';

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        method: 'GET',
        headers: { 'Authorization': `token ${token}` }
    })
    .then(response => response.json())
    .then(dataFromGitHub => {
        let sha = dataFromGitHub.sha;
        saveDataToGitHub(data, sha);
    })
    .catch(error => console.error('Error fetching data from GitHub:', error));
}

// Function to save data to GitHub
function saveDataToGitHub(data, sha) {
    const token = 'YOUR_PERSONAL_ACCESS_TOKEN';
    const repoOwner = 'cristiantronic2000-spec';
    const repoName = 'driver-pro-data';
    const filePath = 'data.json';

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Update viaje data',
            content: btoa(JSON.stringify(data)),
            sha: sha
        })
    })
    .then(response => response.json())
    .then(result => console.log('Data saved to GitHub:', result))
    .catch(error => console.error('Error saving data to GitHub:', error));
}

// Function to manage offline/online states
window.addEventListener('online', () => console.log('You are online!'));
window.addEventListener('offline', () => console.log('You are offline!'));

// Load data from localStorage if offline
function loadData() {
    let viajeData = localStorage.getItem('viajeData');
    if (viajeData) {
        console.log('Loaded data from localStorage:', JSON.parse(viajeData));
    }
}

loadData();
