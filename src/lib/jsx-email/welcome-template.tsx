// @ts-ignore
import { siteLinks } from "../../core/site-config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@jsx-email/all";
import React from "react";

type WelcomeEmailTemplateProps = {
  name: string;
};

const WelcomeEmailTemplate = ({ name }: WelcomeEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>We are thrilled to have you join our growing Community!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={logo}>CodeSkills</Text>
            <Hr style={hr} />
            <Text style={paragraph}>Dear {name},</Text>
            <Text style={paragraph}>
              Welcome to{" "}
              <Link href={siteLinks.main} style={link}>
                CodeSkills Developer Community!
              </Link>{" "}
              We are thrilled to have you join our growing family of passionate
              learners and creators.
            </Text>
            <Text style={paragraph}>
              Here at CodeSkills, we are more than just a platform; we are a
              vibrant community dedicated to helping each other grow and succeed
              in the world of coding and web development.
            </Text>
            <Section style={paragraph}>
              <Heading as="h3">Next Steps:</Heading>
              <ul style={list}>
                <li>
                  Join the{" "}
                  <Link style={link} href={siteLinks.discord}>
                    Official Discord
                  </Link>
                </li>
                <li>
                  Connect with our community on{" "}
                  <Link style={link} href={siteLinks.whatsApp}>
                    WhatsApp
                  </Link>{" "}
                </li>
                <li>
                  Follow our{" "}
                  <Link style={link} href={siteLinks.gitAndGithubGuide}>
                    Git and Github guide
                  </Link>{" "}
                  to get started with Git and GitHub.
                </li>
                <li>
                  Explore our{" "}
                  <Link style={link} href={siteLinks.starterRepo}>
                    Bootcamp Starter Repository
                  </Link>{" "}
                  and begin your coding journey with hands-on projects.
                </li>
              </ul>
            </Section>
            <Text style={paragraph}>
              We are excited to see you thrive within our community. Remember,
              your journey in coding is a marathon, not a sprint. Embrace the
              learning process, ask questions, and do not hesitate to seek help
              when needed.
            </Text>
            <Text style={paragraph}>
              Good luck, happy coding, and welcome to the CodeSkills community.
              If you have any questions or need assistance, please do not
              hesitate to reach out.
            </Text>
            <Text style={paragraph}>- The CodeSkills team</Text>
            <Hr style={hr} />
            <Text>
              <Link
                style={footerLink}
                href={siteLinks.blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                Our blog
              </Link>
              {"   "}|{"   "}
              <Link
                style={footerLink}
                href={siteLinks.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
              {"   "}|{"   "}
              <Link
                style={footerLink}
                href={siteLinks.twitterPersonal}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

WelcomeEmailTemplate.PreviewProps = { name: "Paul" };

export default WelcomeEmailTemplate;

const colors = {
  accent: "#f52929",
  deepAccent: "#d21111",
  primary: "#121212",
  secondary: "#fffafa",
  lightPrimary: "#1e1d1d",
};

const main = {
  backgroundColor: colors.lightPrimary,
  color: colors.secondary,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  background: colors.primary,
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const logo = {
  fontSize: 24,
  fontWeight: "bold",
};

const box = {
  padding: "0 48px",
};

const paragraph = {
  color: colors.secondary,
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const link = {
  color: colors.accent,
};

const list = {
  listStyle: "square",
  paddingLeft: 16,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};
