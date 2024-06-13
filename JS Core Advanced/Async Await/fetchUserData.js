async function fetchUserData(id) {
    const url = `https://api.example.com/users/${userId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error fetching data.')
        }

        const userData = await response.json();
        return userData;
    }
    catch (error) {
        console.error('Error:', error);
    }
}