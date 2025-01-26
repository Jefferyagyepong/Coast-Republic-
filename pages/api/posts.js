// pages/api/posts.js

export default function handler(req, res) {
  const { page = 1, limit = 5 } = req.query; // Default page is 1, limit is 5
  const posts = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Post #${i + 1}`,
  }));

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPosts = posts.length;

  res.status(200).json({
    data: paginatedPosts,
    total: totalPosts,
    totalPages: Math.ceil(totalPosts / limit),
    currentPage: Number(page),
  });
}
