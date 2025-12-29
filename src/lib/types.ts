export type ObjectId = string;

export type SiteSettings = {
  _id?: ObjectId;
  brand: { name: string };
  contact: {
    phoneMain?: string | null;
    phoneEmergency?: string | null;
    emailInfo?: string | null;
    emailSupport?: string | null;
    address?: string | null;
  };
  ctas: {
    requestSub: {
      responseTimeText?: string | null;
      emergencyText?: string | null;
      qualificationsText?: string | null;
    };
    contact: {
      responseTimeText?: string | null;
      emergencyTimeText?: string | null;
    };
  };
};

export type JobLocation = {
  _id: ObjectId;
  name: string;
  city?: string;
  state?: string;
  country?: string;
  isActive: boolean;
};

export type JobPost = {
  _id: ObjectId;
  title: string;
  slug: string;
  summary?: string | null;
  description: string;
  employmentType: string;
  status: "draft" | "published" | "closed" | "archived";
  locationIds: ObjectId[] | JobLocation[]; // list endpoint returns ids; details returns populated objects
  postedAt?: string | null;
  closingAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type Paginated<T> = {
  page: number;
  limit: number;
  total: number;
  items: T[];
};

// Requests
export type ApplyPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  coverLetter?: string;
  resume?: File; // optional
};

export type ReferPayload = {
  referrer: { name: string; email: string; phone?: string };
  referred: { name: string; email: string; phone?: string };
  message?: string;
};

export type StaffingRequestPayload = {
  schoolLocation: string;
  address: string;
  dayNeeded: string; // ISO date string
  timeNeeded: string; // "HH:MM"
  timeMeridiem: "AM" | "PM";
  className: string;
  subContactName: string;
  subContactPhone: string;
  notes?: string;
  gradeLevel?: string;
  duration?: string;
  consentAccepted: boolean;
  sourcePage?: string;
};

export type ContactMessagePayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  schoolOrOrganization: string;
  positionOrTitle: string;
  inquiryType: string;
  message: string;
  consentAccepted: boolean;
  sourcePage?: string;
};
