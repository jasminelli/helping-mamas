export default {
  // NOTE: For nextjs apps, instead of BASE_URL, consider using NEXT_PUBLIC_VERCEL_URL
  // https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
  pages: {
    index: "/",
    events: "/events",
    "applicant-view": "/applicant-view",
    "user-manager": "/user-manager",
    settings: "/settings",
    profile: "/profile",
  },
  api: {
    auth: {},
    events: {},
    users: {},
  },
};
