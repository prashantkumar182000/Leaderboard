# Formula One Leaderboard Application (Version 2)


## Overview

The Formula One Leaderboard Application is a responsive and dynamic leaderboard built using **ReactJS** and **TypeScript**. It displays the top scores of players and includes advanced features such as a **non-stop looping F1 racing video footer**, **smooth animations**, and a **modernized UI**. This project demonstrates efficient state management, performance optimization, and a seamless user experience.

---

## Key Features

### **Version 2 Updates**
- **Non-Stop Looping Video Footer**: Replaced the image slider with a high-performance, non-stop looping F1 racing video for a more immersive experience.
- **Modernized UI**: Enhanced the overall design with gradient backgrounds, accent borders, and animations to align with the F1 racing theme.
- **Improved Input Structure**: Added floating labels, icons, and real-time validation for the "Add Score" popup.
- **Performance Optimization**: Hosted the video on a CDN (ImageKit.io) for faster loading and better performance.
- **Responsive Design**: Ensured the application looks great on all screen sizes, from desktops to mobile devices.
- **Efficient State Management**: Used **Redux** for seamless state updates and animations.

### **Version 1 Features**
- **Responsive Design**: The leaderboard adjusts seamlessly across different display sizes, ensuring the top 10 scores are always visible initially.
- **Auto-Scrolling Footer**: The bottom image footer auto-scrolled to enhance the user experience.
- **Add Score Popup**: A popup allowed users to add a new score with specific fields:
  - **Username**: Input field for the player's username (string).
  - **Score**: Input field formatted as `MM:SS:MS` (minutes:seconds:milliseconds) for the player's score.
- **Smooth Animation**: When a new score was added, a smooth animation effect visually displayed the new entry.
- **Dynamic Entry**: If the new score ranked within the top 10, the leaderboard automatically scrolled to the correct position and smoothly inserted it.
- **Pure CSS Animations**: No external library was used for animations, ensuring a lightweight and efficient application.
- **Fixed Header and Footer**: The header and footer sizes were fixed and did not change with different screen sizes.

---

## Hosted Applications
- **Version 2**: [https://formulaone-v2.netlify.app/](https://formulaone-v2.netlify.app/)
- **Version 1**: [https://formulaone-v1.netlify.app/](https://formulaone-v1.netlify.app/)

---

## Efficiency and Performance

### **AI-Assisted Development**
- Leveraged **AI tools** (like GitHub Copilot and ChatGPT) to accelerate development, reduce boilerplate code, and implement best practices.
- Saved **20+ hours** of development time by automating repetitive tasks and generating optimized code snippets.

### **Performance Improvements**
- Reduced the video file size by **50%** (from 23 MB to 10 MB) using compression and modern codecs.
- Hosted static assets (e.g., video, images) on a **CDN** for faster loading and better scalability.
- Implemented **lazy loading** for the video to improve initial page load times.

---

## Technologies Used

### **Frontend**
- **ReactJS**: For building the user interface.
- **TypeScript**: For type-safe and maintainable code.
- **Redux**: For state management.
- **CSS**: For animations and styling.
- **React-Icons**: For icons in the UI.

### **Hosting and Deployment**
- **Netlify**: For hosting the application.
- **ImageKit.io**: For hosting and optimizing the F1 racing video.

### **Development Tools**
- **AI Tools**: GitHub Copilot, ChatGPT for code generation and optimization.
- **HandBrake/FFmpeg**: For video compression and optimization.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/leaderboard-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd leaderboard
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

---

## Running the Project

1. Start the development server:
   ```bash
   npm start
   ```
   - Runs the app in development mode.
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Run tests:
   ```bash
   npm test
   ```
   - Launches the test runner in interactive watch mode.

---

## Version 3 Plans

### **Key Improvements**
- **Real-Time Updates**: Integrate WebSocket or Firebase for real-time leaderboard updates.
- **User Authentication**: Add login/signup functionality to allow users to save and track their scores.
- **Advanced Analytics**: Display player statistics and trends using charts and graphs.
- **Customizable Themes**: Allow users to switch between light and dark themes.
- **Mobile App**: Develop a cross-platform mobile app using **React Native**.

### **Performance Enhancements**
- **Code Splitting**: Implement lazy loading for components to improve performance.
- **Progressive Web App (PWA)**: Make the application installable and work offline.

---

## Why This Project Stands Out

- **Modern Design**: The application features a sleek, F1-themed design with smooth animations and a responsive layout.
- **Efficient Development**: Leveraged AI tools to accelerate development and implement best practices.
- **Performance Optimization**: Hosted assets on a CDN, compressed the video, and used lazy loading for faster load times.
- **Scalable Architecture**: Built with modular components and efficient state management for easy scalability.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:
- **Email**: prashantkumar18.pk@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/prashant-kumar-778246188](https://www.linkedin.com/in/prashant-kumar-778246188)
- **GitHub**: [https://github.com/prashantkumar182000](https://github.com/prashantkumar182000)
