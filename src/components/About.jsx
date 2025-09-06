export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center bg-[#f5f0e6] px-6 py-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 bg-[#f5f0e6] rounded-2xl shadow-lg p-8 md:p-12 max-w-5xl border border-[#d6c6b2]">
        
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3b2f2f]">
            About Me
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#6b4f4f]">
            Rawan Alsir
          </h2>
          <p className="text-[#5a4d4d] leading-relaxed text-lg md:text-xl max-w-md mx-auto md:mx-0">
            I am a Data Science student and currently learning web development. 
            As an international student, I embrace challenges and opportunities 
            that shape both my academic and personal journey. I am passionate 
            about data analysis, discovering patterns, and combining it with 
            web technologies to create meaningful and interactive solutions. 
            My goal is to grow my skills in programming and data science to 
            build a creative and impactful future.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/123.png"
            alt="About"
            className="w-52 sm:w-60 md:w-80 rounded-xl shadow-md transition-transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
