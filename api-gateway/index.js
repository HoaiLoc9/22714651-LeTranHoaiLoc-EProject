const express = require("express");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();
const app = express();

proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err.message);
  res.status(500).json({ error: 'Service unavailable' });
});

// Route requests to the auth service
app.use("/auth", (req, res) => {
  console.log(`Gateway → Auth: ${req.method} ${req.url}`);
  proxy.web(req, res, { target: "http://auth:3000" });
});

// Route requests to the product service
app.use("/products", (req, res) => {
  console.log(`Gateway → Product: ${req.method} ${req.url}`);
  proxy.web(req, res, { target: "http://product:3001" });
});

// Route requests to the order service
app.use("/orders", (req, res) => {
  console.log(`Gateway → Order: ${req.method} ${req.url}`);
  proxy.web(req, res, { target: "http://order:3002" });
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`✅ API Gateway listening on port ${port}`);
});
