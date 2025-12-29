import express from "express";
import cors from "cors";
import morgan from "morgan";

import jobsRoutes from "./routes/jobs.routes";
import formsRoutes from "./routes/forms.routes";
import staffingRoutes from "./routes/staffing.routes";
import contactRoutes from "./routes/contact.routes";
import publicRoutes from "./routes/public.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/jobs", jobsRoutes);
app.use("/api/forms", formsRoutes);
app.use("/api/staffing-requests", staffingRoutes);
app.use("/api/contact-messages", contactRoutes);
app.use("/api/public", publicRoutes);

// error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
    details: err.details || undefined
  });
});

export default app;
