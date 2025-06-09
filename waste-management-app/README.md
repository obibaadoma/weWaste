# ♻️ Waste Management App

this is a responsive and user-friendly React application that allows users to select and order the appropriate skip size for their waste disposal needs. Designed with clean UI/UX using Tailwind CSS and focused on clarity, accessibility, and mobile-friendliness.

## 🚀 Project Features

- 📦 **Skip Size Selector** – Choose from various skip sizes with clear pricing and descriptions.
- 🎨 **Modern UI/UX** – Styled using Tailwind CSS with a responsive grid card layout.
- 📱 **Mobile Friendly** – Designed to work smoothly on all screen sizes.
- 🔄 **Reusable Components** – Built with modular React components for easy scaling.
- 📡 **API-Ready** – Placeholder for integrating external skip data APIs.

---

## 📂 Project Structure

waste-management-app/
├── .babelrc               # Babel configuration
├── .eslintrc.json         # ESLint configuration
├── .github/               # GitHub specific files (e.g., workflows)
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
├── .stylelintrc.json      # Stylelint configuration
├── README.md              # This file!
├── node_modules/          # Project dependencies (managed by npm/yarn)
├── package-lock.json      # Records exact versions of dependencies
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration (often used with Tailwind CSS)
├── public/                # Static assets (index.html, favicon, etc.)
│   ├── index.html
│   └── manifest.json
├── src/                   # Main application source code
│   ├── App.css            # Main styles for App component
│   ├── App.js             # Root React component
│   ├── App.test.js        # Tests for App component
│   ├── Components/        # Reusable UI components
│   │   ├── BottomBar.js
│   │   ├── ProgressBar.js
│   │   ├── SkipCard.js
│   │   └── SkipSelector.js
│   ├── Pages/             # Page-level components (if any)
│   │   └── HomePage.js    # Example page
│   ├── index.css          # Global styles and Tailwind directives
│   ├── index.js           # Entry point of the React application
│   ├── reportWebVitals.js # Performance monitoring
│   └── setupTests.js      # Jest setup for tests
└── tailwind.config.js     # Tailwind CSS configuration

│ └── index.css # Tailwind directives
├── tailwind.config.js # Tailwind setup
├── package.json
└── README.md


---

## 🛠️ Tech Stack

- **React** – JavaScript library for building user interfaces
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Vite / Create React App** – Fast React build tool (CRA used in this case)

---

## 🔧 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/obibaadoma/weWaste.git
cd weWaste
cd waste-management-app

📈 Future Enhancements
✅ Integrate real skip size API

✅ Add cart and booking functionality

✅ Implement great work across different browsers

🌍 Add location-based pricing

🔒 User authentication (optional)

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License
MIT

👤 Derek Akrasi Konadu

GitHub: @obibaadoma
LinkedIn: https://www.linkedin.com/in/derek-akrasi-konadu-187453151/

💬 Feedback
If you have any feedback or suggestions, feel free to reach out or open an issue.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
