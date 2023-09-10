"use server";

import { db } from "@/lib/db";
import { user } from "@/lib/db/schema";
import { User } from "./types";
import { normalizeGitHubURL } from "./utils";
import { eq } from "drizzle-orm";

export async function createUser({ name, email, github }: User) {
  const newUser = { name, email, github: normalizeGitHubURL(github) };

  const existingUser = await db.query.user.findFirst({
    where: eq(user.email, email),
  });

  if (existingUser) {
    throw new Error("User already exists");
  } else {
    await db.insert(user).values(newUser);
  }
}
