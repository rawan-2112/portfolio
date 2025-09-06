export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f5f0e6] px-6 md:px-12 py-12 flex flex-col items-center"
    >
      <h2 className="text-3xl font-extrabold text-[#3b2f2f] mb-8 text-center">
        Contact Me
      </h2>
      <form className="w-full max-w-xl bg-white shadow-md rounded-xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-[#3b2f2f] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-[#3b2f2f] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-[#3b2f2f] p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="bg-[#3b2f2f] text-white px-6 py-3 rounded-lg hover:bg-[#2a1f1f] transition font-semibold w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
