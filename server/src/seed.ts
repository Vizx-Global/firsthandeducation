import "dotenv/config";
import { connectDB } from "./config/db";
import { JobLocation } from "./models/JobLocation";
import { JobPost } from "./models/JobPost";
import { SiteSettings } from "./models/SiteSettings";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("Missing MONGO_URI");

  await connectDB(uri);

  await Promise.all([
    JobPost.deleteMany({}),
    JobLocation.deleteMany({}),
    SiteSettings.deleteMany({})
  ]);

  const loc1 = await JobLocation.create({ name: "San Diego, CA", city: "San Diego", state: "CA" });
  const loc2 = await JobLocation.create({ name: "Orange County, CA", state: "CA" });

  await JobPost.create({
    title: "K-12 Substitute Teacher",
    slug: slugify("K-12 Substitute Teacher San Diego"),
    summary: "Flexible substitute assignments across partner schools.",
    description:
      "Serve as a substitute teacher for K-12 classrooms. Must pass background checks and meet district requirements.",
    employmentType: "substitute",
    status: "published",
    locationIds: [loc1._id],
    postedAt: new Date()
  });

  await JobPost.create({
    title: "Paraprofessional (Long-Term)",
    slug: slugify("Paraprofessional Long-Term Orange County"),
    summary: "Long-term placement supporting classroom instruction.",
    description:
      "Support students and teachers in a long-term assignment. Experience preferred. Background check required.",
    employmentType: "contract",
    status: "published",
    locationIds: [loc2._id],
    postedAt: new Date()
  });

  await SiteSettings.create({
    brand: { name: "FirstHand Education" },
    contact: {
      phoneMain: "(000) 000-0000",
      phoneEmergency: "(000) 000-0000",
      emailInfo: "info@firsthand-education.com",
      emailSupport: "support@firsthand-education.com",
      address: "Your office address here"
    },
    ctas: {
      requestSub: {
        responseTimeText: "Typical response time: 1–2 hours (7AM–5PM)",
        emergencyText: "For immediate assistance, call our emergency line.",
        qualificationsText: "All substitutes are screened and meet placement requirements."
      },
      contact: {
        responseTimeText: "We respond within 1 business day.",
        emergencyTimeText: "For urgent issues, call the emergency line."
      }
    }
  });

  console.log("✅ Seed complete");
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌ Seed failed", e);
  process.exit(1);
});
