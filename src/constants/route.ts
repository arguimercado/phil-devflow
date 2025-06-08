export const ROUTE = {
  HOME: "/",
  SIGNIN: "/sign-in",
  SIGNUP: "/sign-up",
  JOBS: "/jobs",
  COLLECTIONS: "/collection",
  COMMUNITY: "/community",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id:string) => `/profile/${id}`,
  TAGS: (tag:string) => `/tags/${tag}`,
} as const;

export default ROUTE;
