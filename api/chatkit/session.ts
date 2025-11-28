import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "node:crypto";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const workflowId = process.env.CHATKIT_WORKFLOW_ID || "wf_6928f996b3b88190871a8f20a1b6ebca083e1f9343fc1e11";
const workflowVersion = process.env.CHATKIT_WORKFLOW_VERSION || "1";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    if (!process.env.OPENAI_API_KEY) {
      res.status(500).json({ error: "Missing OPENAI_API_KEY" });
      return;
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const userId = (typeof body?.user === "string" && body.user.trim()) || crypto.randomUUID();

    const session = await openai.beta.chatkit.sessions.create({
      user: userId,
      workflow: {
        id: workflowId,
        version: workflowVersion
      }
    });

    res.status(200).json({ client_secret: session.client_secret, user: userId });
  } catch (error) {
    console.error("Failed to create ChatKit session", error);
    res.status(500).json({ error: "Failed to create ChatKit session" });
  }
}
