import "dotenv/config";
import app from "./app";
import { connectDB } from "./config/db";
import { requireEnv } from "./utils/env";

const PORT = Number(process.env.PORT || 5000);
const MONGO_URI = requireEnv("MONGO_URI"); // ✅ always string

async function bootstrap() {
  await connectDB(MONGO_URI);
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

bootstrap();
