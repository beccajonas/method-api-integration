const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/fetch-accounts", async (req, res) => {
  const { apiKey, holderId } = req.body;

  if (!apiKey || !holderId) {
    return res.status(400).json({ error: "Missing apiKey or holderId" });
  }

  const url = `https://dev.methodfi.com/accounts?holder_id=${holderId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Method-Version": "2025-07-04",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from Method API:", error.response?.data || error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: error.response?.data || "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
