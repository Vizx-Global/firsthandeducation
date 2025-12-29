import { api } from "./api";
import type {
  SiteSettings,
  JobLocation,
  JobPost,
  Paginated,
  ApplyPayload,
  ReferPayload,
  StaffingRequestPayload,
  ContactMessagePayload
} from "./types";

export async function getPublicSettings() {
  const { data } = await api.get<SiteSettings>("/api/public/settings");
  return data;
}

export async function getJobLocations() {
  const { data } = await api.get<JobLocation[]>("/api/jobs/locations");
  return data;
}

export async function getJobs(params?: { keyword?: string; locationId?: string; page?: number; limit?: number }) {
  const { data } = await api.get<Paginated<JobPost>>("/api/jobs", { params });
  return data;
}

export async function getJobBySlug(slug: string) {
  const { data } = await api.get<JobPost>(`/api/jobs/${slug}`);
  return data;
}

export async function applyToJob(jobId: string, payload: ApplyPayload) {
  const form = new FormData();
  form.append("firstName", payload.firstName);
  form.append("lastName", payload.lastName);
  form.append("email", payload.email);
  if (payload.phone) form.append("phone", payload.phone);
  if (payload.coverLetter) form.append("coverLetter", payload.coverLetter);
  if (payload.resume) form.append("resume", payload.resume);

  const { data } = await api.post(`/api/jobs/${jobId}/apply`, form, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return data as { message: string; applicationId: string };
}

export async function referCandidate(jobId: string, payload: ReferPayload) {
  const { data } = await api.post(`/api/jobs/${jobId}/refer`, payload);
  return data as { message: string; referralId: string };
}

export async function createStaffingRequest(payload: StaffingRequestPayload) {
  const { data } = await api.post("/api/staffing-requests", payload);
  return data as { message: string; staffingRequestId: string };
}

export async function createContactMessage(payload: ContactMessagePayload) {
  const { data } = await api.post("/api/contact-messages", payload);
  return data as { message: string; contactMessageId: string };
}
