# Leaderboard Project

https://github.com/user-attachments/assets/2e65e4f3-d481-413c-a873-0f9122c4b7c8


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

2. Navigate to the project directory:
   ```bash

   cd leaderboard
   
3. Install the dependencies:
   ```bash

   npm install

## Running the Project


4. In the project directory, you can run:
   ```bash

   npm start
  

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Hosting

The project is hosted on a free platform for easy access. You can view the live application [here](https://leaderboard-pk.netlify.app/).

## Contributing

Feel free to submit pull requests or open issues if you have any suggestions or improvements.
