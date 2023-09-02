import { Metadata } from "next";

export const siteLinks = {
  main: "https://codeskills.dev",
  githubPersonal: "https://github.com/lordelogos",
};

export const siteConfig: Metadata = {
  title: "Codeskills - Web Development Community",
  description:
    "Join the CodeSkills community for web development learning, networking, events, and more. Explore coding tutorials, programming resources, and connect with fellow developers.",
  authors: [{ name: "Paul Ehikhuemen", url: siteLinks.githubPersonal }],
  keywords: [
    "web development community",
    "coding tutorials",
    "programming resources",
    "web development learning",
    "developer networking",
    "code learning platform",
    "html, css, javaScript tutorials",
  ],
  openGraph: {
    title: "Codeskills - Web Development Community",
    description:
      "Join the CodeSkills community for web development learning, networking, events, and more. Explore coding tutorials, programming resources, and connect with fellow developers.",
    siteName: "Codeskills",
    type: "website",
    locale: "en-US",
    url: siteLinks.main,
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeskills - Web Development Community",
    description:
      "Join the CodeSkills community for web development learning, networking, events, and more. Explore coding tutorials, programming resources, and connect with fellow developers.",
    creator: "@pauloe_me",
  },

  creator: "Paul Ehikhuemen",
};
