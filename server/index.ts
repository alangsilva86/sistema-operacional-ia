import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "node:crypto";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const workflowId = process.env.CHATKIT_WORKFLOW_ID || "wf_6928f996b3b88190871a8f20a1b6ebca083e1f9343fc1e11";
const workflowVersion = process.env.CHATKIT_WORKFLOW_VERSION || "1";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/chatkit/session", async (req, res) => {
    if (!process.env.OPENAI_API_KEY) {
      res.status(500).json({ error: "Missing OPENAI_API_KEY" });
      return;
    }

    try {
      const userId =
        (typeof req.body?.user === "string" && req.body.user.trim()) || crypto.randomUUID();

      const session = await openai.beta.chatkit.sessions.create({
        user: userId,
        workflow: {
          id: workflowId,
          version: workflowVersion
        }
      });

      res.json({ client_secret: session.client_secret, user: userId });
    } catch (error) {
      console.error("Failed to create ChatKit session", error);
      res.status(500).json({ error: "Failed to create ChatKit session" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = Number(process.env.PORT) || 3000;

  const shutdown = () => {
    console.log("Shutting down server...");
    server.close(() => {
      console.log("HTTP server closed.");
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
