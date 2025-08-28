# Shubham Yadav - Portfolio Website

A modern, responsive portfolio website built with React and Node.js, showcasing my skills, experience, and projects as a web developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **Interactive Elements**: Hover effects, animations, and modern UI components
- **Contact Form**: Functional contact form for potential clients
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **CSS3** - Modern CSS with custom properties and Grid/Flexbox

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Response compression

## 📱 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal information and background
3. **Experience** - Work experience timeline
4. **Education** - Educational background
5. **Projects** - Portfolio projects showcase
6. **Skills** - Technical skills with progress bars
7. **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5001) and the React development server (port 3000).

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start both server and client in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the React client
- `npm run build` - Build the React app for production

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Heroku
The app is configured for Heroku deployment with automatic build processes.

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── server.js              # Node.js server
├── package.json           # Backend dependencies
└── README.md              # Project documentation
```

## 🎨 Customization

### Colors and Themes
The website uses CSS custom properties for easy theming. Modify the variables in `client/src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #f8fafc;
  --text-primary: #1e293b;
  /* ... more variables */
}
```

### Content
Update the portfolio data in `server.js` to customize:
- Personal information
- Experience details
- Education background
- Project descriptions
- Skills and certifications

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Performance Features

- Lazy loading with React.lazy()
- Optimized images and assets
- CSS animations with hardware acceleration
- Efficient state management
- Minimal bundle size

## 📞 Contact

- **Email**: shubham.yadav@example.com
- **Location**: Lucknow, Uttar Pradesh, India
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Shubham Yadav**
