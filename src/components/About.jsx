import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
     <section
  id="about"
  className="w-full py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100"
>
  <motion.div
    className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Profile Image */}
    <motion.div
      className="w-full md:w-1/2 flex justify-center"
      variants={fadeUp}
    >
      <motion.div
        className="w-64 h-64 rounded-3xl overflow-hidden shadow-xl border border-white/10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.img
          src="/MS.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </motion.div>

    {/* Text Content */}
    <motion.div
      className="w-full md:w-1/2"
      variants={fadeUp}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
        About Me
      </h2>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        I’m an undergraduate pursuing a 
        <span className="font-semibold text-emerald-400"> BSc in IT (Special) — Data Science</span>.
        I build modern web and mobile applications, but my long-term passion lies in 
        <span className="font-semibold text-emerald-400"> data science</span>.
      </p>

      <p className="text-lg leading-relaxed mb-6 text-slate-300">
        I work confidently with 
        <span className="font-semibold text-emerald-400"> C, C++, Java, JavaScript, Kotlin, and Python</span>.
        I also use 
        <span className="font-semibold text-emerald-400"> Power BI</span> and
        <span className="font-semibold text-emerald-400"> Excel</span> for data analytics.
      </p>

      {/* Skills */}
      <motion.div
        className="grid grid-cols-2 gap-4 mt-10"
        variants={container}
      >
        {["Data Science", "Web Development", "Mobile Apps", "Power BI & Excel"].map(
          (skill, i) => (
            <motion.div
              key={i}
              className="px-5 py-4 bg-white/5 backdrop-blur-md shadow-md 
              rounded-xl border border-white/10 
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
            >
              <p className="font-medium text-slate-100">{skill}</p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  </motion.div>
</section>

  );
}
