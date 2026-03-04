const Hero = () => {
  return (
    <section className="py-20 text-center border-b border-slate-800">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
        Building the <span className="text-blue-500">Future</span> of the Web.
      </h2>
      <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
        Hi, I'm Kyle Vertodoulos. I'm a{" "}
        <span className="text-slate-200 font-semibold">
          Software Developer Student
        </span>{" "}
        at Harding University focused on the MERN Stack. I build scalable,
        user-focused applications with a clean-code approach.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all"
        >
          View My Work
        </a>
        <a
          href="mailto:Kyleverto@gmail.com"
          className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded-md font-medium transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
