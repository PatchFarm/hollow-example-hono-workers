import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello from The Hollow's Hono example."));

// The pipeline's post-deploy checks call this.
app.get("/health", (c) => c.json({ status: "ok" }));

export default app;
