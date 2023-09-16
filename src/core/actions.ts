"use server";

import { db } from "@/lib/drizzle";
import { user } from "@/lib/drizzle/schema";
import { User } from "./types";
import { normalizeGitHubURL } from "./utils";
import { eq, sql } from "drizzle-orm";
import { resend } from "@/lib/resend";
import WelcomeEmailTemplate from "@/lib/react-email/welcome-template";

export async function createUser({ name, email, github }: User) {
  const newUser = { name, email, github: normalizeGitHubURL(github) };

  const existingUser = await db.query.user.findFirst({
    where: sql`${user.email} = ${email} OR ${user.github} = ${newUser.github}`,
  });

  if (existingUser) {
    return {
      status: 409,
      key: existingUser.email === email ? "email" : "github",
      message: "User already exists",
    };
  } else {
    await db.insert(user).values(newUser);
    return {
      status: 201,
      message: "User created successfully",
    };
  }
}

export async function sendWelcomeEmail({ name, email }: User) {
  if (!process.env.EMAIL_FROM_ADDRESS) {
    throw new Error("EMAIL_FROM_ADDRESS not set");
  }

  await resend.emails.send({
    from: process.env.EMAIL_FROM_ADDRESS,
    to: [email],
    subject: "Welcome to Codeskills community!",
    react: WelcomeEmailTemplate({ name }),
  });
}
