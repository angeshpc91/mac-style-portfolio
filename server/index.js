import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600',
      githubUrl: 'https://github.com/angeshpc91/project1',
      liveUrl: 'https://project1.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking features.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1600',
      githubUrl: 'https://github.com/angeshpc91/project2',
      liveUrl: 'https://project2.example.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations.',
      technologies: ['JavaScript', 'Chart.js', 'OpenWeather API'],
      image: 'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1600',
      githubUrl: 'https://github.com/angeshpc91/project3',
      liveUrl: 'https://project3.example.com'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A macOS-inspired portfolio website showcasing projects and skills with interactive elements.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600',
      githubUrl: 'https://github.com/angeshpc91/portfolio',
      liveUrl: 'https://angesh-portfolio.example.com'
    }
  ];
  
  res.json(projects);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // In a real application, you would:
  // 1. Validate input
  // 2. Store in database
  // 3. Send notification email
  // 4. Handle errors
  
  // For now, we'll just simulate a successful submission
  console.log('Contact form submission:', { name, email, subject, message });
  
  // Simulate processing delay
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Message received! I will get back to you soon.' 
    });
  }, 1000);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});