import { useMemo, useState } from "react";
import Reveal from "./Reveal";

interface ApplicationFormState {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  droneModel: string;
  flyerId: string;
  yearsExperience: string;
  message: string;
}

const initialState: ApplicationFormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  droneModel: "",
  flyerId: "",
  yearsExperience: "",
  message: ""
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState<ApplicationFormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const requiredFields = useMemo(
    () => ["fullName", "email", "phone", "city", "droneModel", "flyerId", "yearsExperience"],
    []
  );

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!formData[field as keyof ApplicationFormState]?.trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (formData.phone && formData.phone.trim().length < 7) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (formData.yearsExperience && Number(formData.yearsExperience) < 0) {
      nextErrors.yearsExperience = "Enter a valid number.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        yearsExperience: Number(formData.yearsExperience),
        createdAt: new Date().toISOString()
      };

      await mockSubmitApplication(payload);

      setIsSubmitted(true);
      setFormData(initialState);
      setErrors({});
    } catch (error) {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="section-padding bg-graphite">
      <div className="container-max">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Pilot application</p>
          <h2 className="mt-4 text-3xl font-semibold text-orange-500 sm:text-4xl">
            Apply to join the Colix pilot network.
          </h2>
          <p className="mt-6 text-base text-orange-500/80 sm:text-lg">
            Share your flight details and we will review your application within two business days.
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
                Thank you. Our team will review your application and contact you soon.
              </p>
            </div>
          ) : (
            <form className="grid gap-6 text-center" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm text-orange-500/80" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="input-field mt-2"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                  {errors.fullName && <p className="mt-2 text-xs text-orange-500">{errors.fullName}</p>}
                </div>
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
                <div>
                  <label className="text-sm text-orange-500/80" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input-field mt-2"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                  {errors.phone && <p className="mt-2 text-xs text-orange-500">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-sm text-orange-500/80" htmlFor="city">
                    City (UK)
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="input-field mt-2"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  {errors.city && <p className="mt-2 text-xs text-orange-500">{errors.city}</p>}
                </div>
                <div>
                  <label className="text-sm text-orange-500/80" htmlFor="droneModel">
                    Drone Model
                  </label>
                  <input
                    id="droneModel"
                    name="droneModel"
                    type="text"
                    className="input-field mt-2"
                    value={formData.droneModel}
                    onChange={handleChange}
                    required
                  />
                  {errors.droneModel && (
                    <p className="mt-2 text-xs text-orange-500">{errors.droneModel}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-orange-500/80" htmlFor="flyerId">
                    Do you have Flyer ID?
                  </label>
                  <select
                    id="flyerId"
                    name="flyerId"
                    className="input-field mt-2"
                    value={formData.flyerId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.flyerId && <p className="mt-2 text-xs text-orange-500">{errors.flyerId}</p>}
                </div>
                <div>
                  <label className="text-sm text-orange-500/80" htmlFor="yearsExperience">
                    Years of flying experience
                  </label>
                  <input
                    id="yearsExperience"
                    name="yearsExperience"
                    type="number"
                    className="input-field mt-2"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    min={0}
                    step={1}
                    required
                  />
                  {errors.yearsExperience && (
                    <p className="mt-2 text-xs text-orange-500">{errors.yearsExperience}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm text-orange-500/80" htmlFor="message">
                  Short message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input-field mt-2 min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {errors.submit && <p className="text-sm text-orange-500">{errors.submit}</p>}

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <p className="text-xs text-orange-500/80">
                  By submitting, you agree to be contacted about pilot onboarding and compliance
                  checks.
                </p>
                <button type="submit" className="primary-button" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

const mockSubmitApplication = async (payload: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  droneModel: string;
  flyerId: string;
  yearsExperience: number;
  message: string;
  createdAt: string;
}) => {
  // TODO: Insert `payload` into your database (Supabase, Postgres, etc.).
  // TODO: Trigger an admin notification email when a new pilot applies.
  // TODO: Replace this mock with your backend API call when ready.

  await new Promise((resolve) => setTimeout(resolve, 900));
  return payload;
};

export default ApplicationForm;
