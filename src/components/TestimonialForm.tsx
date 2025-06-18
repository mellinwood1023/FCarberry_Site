export default function TestimonialForm() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <form
        action="https://formsubmit.co/mellinwood1023@gmail.com" 
        method="POST"
      >
        <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="block w-full mb-4 p-3 border rounded"
        />

        <textarea
          name="quote"
          placeholder="What was your experience with me..."
          required
          rows={5}
          className="block w-full mb-4 p-3 border rounded"
        />

        {/* Optional: Disable CAPTCHA and redirect after submit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://fredcarberry.net/thankyou" />

        <button
          type="submit"
          className="bg-blue-600 text-black px-6 py-2 rounded hover:bg-blue-700 transition shadow-md"
        >
          Submit
        </button>

        <p className="text-gray-500 mt-4">Your review will be submitted for approval.</p>
      </form>
    </div>
  );
}
