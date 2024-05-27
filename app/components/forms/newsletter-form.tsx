// TODO: Create a newsletter form component

export default function NewsletterForm() {
  return (
    <form action="/" method="POST">
      <input type="email" name="email" placeholder="Email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
