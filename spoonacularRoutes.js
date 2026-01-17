const apiKey = '366b7cee4cdc4c919cf97a3a4a7ac87b';

async function get(recipeName) {
    const url = `https://api.spoonacular.com${recipeName}&apiKey=${apiKey}`
    let data = null;
    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Food does not exist');
            //then maybe we can activate the ai to save money
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}