if (!process.env.NEXT_PUBLIC_GOOGLE_ID) {
  throw new Error("NEXT_PUBLIC_GOOGLE_ID environment variable is required.");
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
