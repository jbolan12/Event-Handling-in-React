# Event-Handling-in-React

# React Hover Button App

This React application demonstrates dynamic styling of a button using hover effects. The button’s background color changes when the mouse hovers over it, and the font color adjusts based on the background color to ensure readability.

## Features

- **Dynamic Button Styling**: The button's background and font colors change on mouse hover.
- **Conditional Styling Logic**: Background and font colors are determined based on the button’s current state, providing a smooth user experience.

## Files

### `App.jsx`

- Contains the main `App` component where:
  - A `buttonBackgroundColor` state is managed to toggle between white and black on mouse events.
  - Event handlers `handleMouseOver` and `handleMouseOut` adjust the background color on hover.
  - Font color is dynamically set to ensure readability against the background.

### `index.js`

- Renders the `App` component to the root DOM element.
- Imports global CSS from `styles.css` to apply any additional styling.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jbolan12/Event-Handling-in-React.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-hover-button-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the app.

## Code Overview

- **State Management**: 
  - The button’s background color is managed by the `buttonBackgroundColor` state.
- **Conditional Styling**:
  - Button background changes to black on hover and reverts to white on mouse out.
  - Font color is set to white when the background is black and to gray when the background is white, for better contrast.

## Dependencies:
React: 18.3.1
React-DOM: 18.3.1
React-Scripts 5.0.1


## License
This project is licensed under the MIT License. See the LICENSE file for details.

### Code Example

```javascript
function handleMouseOver() {
  setButtonBackgroundColor("black");
}

function handleMouseOut() {
  setButtonBackgroundColor("white");
}

const buttonFontColor = buttonBackgroundColor === "white" ? "grey" : "white";
