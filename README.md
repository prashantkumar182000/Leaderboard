# Leaderboard Project

## Overview
This project is a responsive leaderboard application built using ReactJS and TypeScript. The application displays the top 10 scores of players and includes various features such as an auto-scrolling footer, a smooth animation for new score entries, and a popup for adding scores.

## Key Features
1. **Responsive Design**: The leaderboard adjusts seamlessly across different display sizes, ensuring that the top 10 scores are always visible initially.
2. **Auto-Scrolling Footer**: The bottom image footer auto-scrolls to enhance the user experience.
3. **Add Score Popup**: A popup allows users to add a new score with specific fields:
   - **Username**: Input field for the player's username (string).
   - **Score**: Input field formatted as MM:SS:MS (minutes:seconds:milliseconds) for the player's score.
4. **Smooth Animation**: When a new score is added, a smooth animation effect visually displays the new entry.
5. **Dynamic Entry**: If the new score ranks within the top 10, the leaderboard automatically scrolls to the correct position and smoothly inserts it.
6. **State Management**: Redux is used for proper state management.
7. **Pure CSS Animations**: No external library is used for animations, ensuring a lightweight and efficient application.
8. **Fixed Header and Footer**: The header and footer sizes are fixed and do not change with different screen sizes.

## Technologies Used
- **ReactJS**
- **TypeScript**
- **Redux** (for state management)
- **React-Icons** (for icons)
- **CSS** (for animations and styling)

## Installation
1. Clone the repository:
   ```bash

   git clone https://github.com/yourusername/leaderboard-project.git


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
