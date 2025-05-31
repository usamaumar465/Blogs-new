const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all origins
app.use(cors());

// Sample data for blogs
const blogs = [
  {
    id: 1,
    topicId: 1,
    title: "Introduction to DevOps",
    content: "DevOps is a culture...",
  },
  {
    id: 2,
    topicId: 1,
    title: "CI/CD Pipelines",
    content: "Continuous Integration and Deployment...",
  },
  {
    id: 3,
    topicId: 2,
    title: "React Basics",
    content: "React is a JavaScript library...",
  },
  {
    id: 4,
    topicId: 3,
    title: "Node.js Overview",
    content: "Node.js is a runtime environment...",
  },
];

// Sample data for topics
const topics = [
  { id: 1, name: "devops" },
  { id: 2, name: "frontend" },
  { id: 3, name: "backend" },
];

// Middleware
app.use(express.json());

// API to fetch all topics
app.get("/api/topics", (req, res) => {
  res.json(topics);
});

// API to fetch blogs by topic name
app.get("/api/topics/:topicName/blogs", (req, res) => {
  const topicName = req.params.topicName.toLowerCase();
  const topic = topics.find((t) => t.name === topicName);

  if (!topic) {
    return res.status(404).json({ message: "Topic not found" });
  }

  const filteredBlogs = blogs.filter((blog) => blog.topicId === topic.id);
  res.json(filteredBlogs);
});

// API to fetch blog details by blog ID
app.get("/api/blogs/:blogId", (req, res) => {
  const blogId = parseInt(req.params.blogId);
  const blog = blogs.find((blog) => blog.id === blogId);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on :${PORT}`);
});
