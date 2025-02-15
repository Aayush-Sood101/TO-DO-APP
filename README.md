# React Todo App with Material UI

A modern Todo application built with React and Material UI that allows users to manage and view todo items with a clean, responsive interface.

## 🚀 Features

- Display todos in a responsive grid layout
- View detailed information for each todo in a modal dialog
- Clean and modern UI using Material UI components
- Error handling and loading states
- Responsive design with CSS Grid
- Fetch todos from external API (dummyjson.com)

## 🛠 Technologies Used

- React 19
- Material UI 6.4
- CSS Modules
- Vite (for build tooling)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser

## 📁 Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── todo-item/
│   │   │   └── index.jsx
│   │   └── todo-details/
│   │       └── index.jsx
│   ├── styles.module.css
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json
```

## 📝 Available Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔌 API Integration

The app integrates with the DummyJSON API endpoints:

| Endpoint | Description |
|----------|------------|
| `GET /todos` | Fetch all todos |
| `GET /todos/:id` | Fetch specific todo |

## 💻 Code Example

```jsx
// Example of fetching todos
async function fetchTodos() {
  try {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    return data.todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Material UI](https://mui.com/) for the component library
- [DummyJSON](https://dummyjson.com/) for the todo API
- [Vite](https://vitejs.dev/) for the build tooling