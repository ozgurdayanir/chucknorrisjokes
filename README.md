# Chuck Norris Random Joke Generator

This is a simple web application that fetches random jokes from the Chuck Norris Joke API and displays them on the page when a button is clicked.

## Screen Shot
**Web address** https://ozgurdayanir.github.io/chucknorrisjokes/
![ScreenShot](/img/screenshot.png)

## Features

- Fetches random jokes from the [Chuck Norris Joke API](https://api.chucknorris.io/).
- Displays the fetched joke on the page after the user clicks a button.
- Handles potential errors gracefully and logs them to the console.

## Technologies Used

- HTML
- CSS (optional for styling)
- JavaScript (ES6+)
- [Chuck Norris Joke API](https://api.chucknorris.io/)

## How It Works

1. The user clicks the "Tell me a Joke!" button.
2. The application makes an API request to fetch a random Chuck Norris joke.
3. The joke is displayed on the webpage.
4. If there is any error during the process, it will be logged in the console.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ozgurdayanir/chucknorrisjokes.git
2. Open the index.html file in a web browser.

## Example Code Snippet

```javascript
button.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        joke.textContent = data.value;
    })
    .catch(error => console.error('Error:', error));
});
```

## API Reference

[Chuck Norris Joke API](https://api.chucknorris.io)

## License

This project is licensed under the MIT License.