# Shop App

Modern e-commerce application built with React, TypeScript, and Redux Toolkit.

## 🚀 Features

- Product catalog with filtering and search
- Shopping cart functionality
- Category-based product filtering
- Toast notifications
- Responsive design
- Error boundary implementation
- Loading states and indicators

## 🛠 Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript 4.9
- **State Management:** Redux Toolkit
- **Styling:** SCSS
- **API Integration:** Fake Store API
- **Package Manager:** npm
- **Code Quality:** ESLint, Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/shop-app.git
```

2. Navigate to the project directory:
```bash
cd shop-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run format` - Formats code using Prettier

## 📁 Project Structure

```
shop-app/
├── src/
│   ├── api/              # API services
│   ├── components/       # React components
│   │   ├── Core/        # Reusable UI components
│   │   ├── Layout/      # Layout components
│   │   └── ...          # Feature components
│   ├── store/          # Redux store configuration
│   │   └── slices/     # Redux slices
│   ├── types/          # TypeScript types/interfaces
│   ├── styles/         # Global styles and themes
├── public/             # Static files
└── ...
```

## 🌐 API Integration

The application integrates with the Fake Store API. Main endpoints used:

- `/products` - Get all products
- `/products/categories` - Get product categories
- `/products/category/{categoryName}` - Get products by category

```

## 🔍 Code Quality

We maintain code quality through:

- ESLint configuration for TypeScript and React
- Prettier for consistent code formatting
- Pre-commit hooks using husky
- TypeScript strict mode

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Conventions

- Use TypeScript for all new files
- Follow React functional component patterns
- Implement error boundaries for error handling
- Use CSS modules or SCSS for styling
- Follow semantic commit messages

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [Fake Store API](https://fakestoreapi.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)