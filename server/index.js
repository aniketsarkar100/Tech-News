require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// ✅ Example schema/model
const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
});
const Article = mongoose.model("Article", ArticleSchema);

// ✅ Example Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Tech News API');
});

// POST route to save a favorite article
app.post('/api/articles', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save article' });
  }
});

// GET route to fetch all saved articles
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
