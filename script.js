async function fetchProfile() {
    const username = document.getElementById('username').value.trim();

    if (!username) {
        alert('Please enter a GitHub username.');
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        if (response.status === 200) {
            displayProfile(data);
        } else if (response.status === 404) {
            alert('User not found.');
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
}

function displayProfile(profileData) {
    const profileContainer = document.getElementById('profile');

    profileContainer.innerHTML = `
        <h2>${profileData.login}</h2>
        <img src="${profileData.avatar_url}" alt="${profileData.login}" width="150">
        <p>Name: ${profileData.name || 'N/A'}</p>
        <p>Location: ${profileData.location || 'N/A'}</p>
        <p>Followers: ${profileData.followers}</p>
        <p>Following: ${profileData.following}</p>
        <p>Public Repositories: ${profileData.public_repos}</p>
        <p>Profile URL: <a href="${profileData.html_url}" target="_blank">${profileData.html_url}</a></p>
    `;
}
