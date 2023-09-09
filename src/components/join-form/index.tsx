"use client";

import { Input } from "@ui/input";
import styles from "./join-form.module.css";
import { Button } from "@ui/link";
import { BrandIcon } from "@ui/brand-icon";
import { ChangeEvent, FormEventHandler, useRef, useState } from "react";

export const JoinCommunityForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [activity, showActivity] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    github: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    github: "",
  });

  const patterns = {
    github: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]+\/?$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = (): boolean => {
    /**
     * Check empty states
     * Check validity of content
     */
    if (
      formData.email &&
      formData.fullname &&
      formData.github &&
      patterns.email.test(formData.email) &&
      patterns.github.test(formData.github)
    ) {
      return true;
    } else {
      const errors = { fullname: "", email: "", github: "" };

      if (!formData.fullname) {
        errors.fullname = "Please enter your full name";
      }

      if (!formData.email || !patterns.email.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }

      if (!formData.github || !patterns.github.test(formData.github)) {
        errors.github = "Please enter a valid github profile link";
      }

      setErrors(errors);

      return false;
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    showActivity(true);
    if (validateForm()) {
      alert("Valid");
    }
    showActivity(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.branding}>
        <h2>Be part of our community</h2>
        <p>
          Get access to resources, support, updates and opportunities to improve
          your web development skills.
        </p>
      </div>
      <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          type="text"
          placeholder="john doe"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          error={errors.fullname}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="username@email.com"
        />
        <Input
          type="text"
          label="Github Profile Link"
          value={formData.github}
          onChange={handleChange}
          error={errors.github}
          name="github"
          placeholder="github.com/username"
        />
        <Button
          className={styles.btn}
          variant="accent"
          type="submit"
          showActivity={activity}
          disabled={activity}
        >
          Join our community
        </Button>
      </form>
      <div className={styles.footer}>
        <BrandIcon />
      </div>
    </div>
  );
};