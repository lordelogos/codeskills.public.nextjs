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
    return {
      status: 409,
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
