import { useState } from "react";
import Reveal from "./Reveal";

interface ApplicationFormState {
  email: string;
}

const initialState: ApplicationFormState = {
  email: ""
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState<ApplicationFormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        email: formData.email,
        createdAt: new Date().toISOString()
      };

      await mockSubmitApplication(payload);

      setIsSubmitted(true);
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="section-padding bg-graphite">
      <div className="container-max">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Apply as a Pilot</p>
          <h2 className="mt-4 text-3xl font-semibold text-orange-500 sm:text-4xl">
            Leave your email to apply.
          </h2>
          <p className="mt-6 text-base text-orange-500/80 sm:text-lg">
            Leave your email and we will contact you once pilot intake opens.
          </p>
        </Reveal>

        <Reveal className="mt-12 glass-panel p-8 text-center">
          {isSubmitted ? (
            <div
              className="rounded-2xl border border-electric-500/30 bg-electric-500/10 px-6 py-8 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="text-lg font-semibold text-orange-500">
                Thank you. We have received your email and will be in touch.
              </p>
            </div>
          ) : (
            <form className="grid gap-6 text-center" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="text-sm text-orange-500/80" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field mt-2"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
                {errors.email && <p className="mt-2 text-xs text-orange-500">{errors.email}</p>}
              </div>

              {errors.submit && <p className="text-sm text-orange-500">{errors.submit}</p>}

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button type="submit" className="primary-button" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

const mockSubmitApplication = async (payload: { email: string; createdAt: string }) => {
  // TODO: Save `payload` to the database (Supabase, Postgres, etc.).
  // TODO: Later, send Telegram notifications once the backend is ready.
  // TODO: Replace this mock with an API call when the backend is ready.

  await new Promise((resolve) => setTimeout(resolve, 900));
  return payload;
};

export default ApplicationForm;
