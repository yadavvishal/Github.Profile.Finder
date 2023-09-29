function fetchGitHubProfile() {
    const username = document.getElementById('username').value;
    if (username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Not Found") {
                    document.getElementById('profile').innerHTML = 'User not found';
                } else {
                    const profile = `
                        <h2>${data.login}</h2>
                        <img src="${data.avatar_url}" alt="Profile Picture" width="200">
                        <p>${data.name}</p>
                        <p>Followers: ${data.followers}</p>
                        <p>Following: ${data.following}</p>
                        <p>Public Repositories: ${data.public_repos}</p>
                    `;
                    document.getElementById('profile').innerHTML = profile;
                }
            })
            .catch(error => console.error(error));
    } else {
        document.getElementById('profile').innerHTML = 'Please enter a username';
    }
}
