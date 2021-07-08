import type { NextApiRequest, NextApiResponse } from "next";

export default function index(req: NextApiRequest, res: NextApiResponse) {
  res.status(400).json({ name: "No Game Selected" });
}
