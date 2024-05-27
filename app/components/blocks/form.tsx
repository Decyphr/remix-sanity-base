import NewsletterForm from "~/components/forms/newsletter-form";
import type { FormType } from "~/types";

export default function FormBlock({ form }: { form: FormType }) {
  return (
    <section>
      <h2>{form.heading}</h2>
      <NewsletterForm />
    </section>
  );
}
