import { useState } from 'react';

export default function TestimonialForm() {
  const [form, setForm] = useState({ name: '', quote: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: '', quote: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Leave a review:</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        className="block w-full mb-4 p-2 border rounded"
        required
      />

      <textarea
        name="quote"
        placeholder="What was your experience with me..."
        value={form.quote}
        onChange={handleChange}
        className="block w-full mb-4 p-2 border rounded"
        required
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>

      {submitted && <p className="text-green-600 mt-4">Thank you for your feedback!</p>}
    </form>
  );
}
