import React from "react";

import express from "express";
import { prerenderToNodeStream } from "react-dom/static";
import { WellCome } from "./../../../components/Welcome";

const router = express.Router();

router.get("/", async (req, res) => {
  const { prelude } = await prerenderToNodeStream(<p>From component router</p>);

  res.setHeader("Content-Type", "text/plain");
  prelude.pipe(res);
});

router.get("/Welcome", async (req, res) => {
  const { prelude } = await prerenderToNodeStream(<WellCome />);

  res.setHeader("Content-Type", "text/plain");
  prelude.pipe(res);
});

export default router;
