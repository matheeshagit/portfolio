import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const handleSubmit = (e) => {
  // Let the form submit
  // But reset right after a short delay so FormSubmit can trigger
  setTimeout(() => {
    e.target.reset();
  }, 100);
};


  return (
    <section
      id="contact"
      className="w-full py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-lg text-slate-300 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out — whether it's about a project, collaboration, or just to say hi.
        </motion.p>

        {/* Contact Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Contact Details */}
          <motion.div
            className="space-y-6"
            variants={fadeUp}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>

            <p className="text-slate-300 leading-relaxed">
              I’m always open to discussing new opportunities, creative ideas, or potential
              collaborations.
            </p>

            <div className="space-y-4">

              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="text-lg font-medium text-emerald-400">
                  12matheesha@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-lg font-medium">Sri Lanka</p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Socials</p>
                <div className="flex gap-5 mt-2 text-2xl">
                    <a
                        href="https://github.com/matheeshagit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/matheesha-shehan-24502623a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:12matheesha@gmail.com"
                        className="text-emerald-400 hover:text-emerald-300 transition"
                    >
                        <FaEnvelope />
                    </a>
                    </div>

              </div>

            </div>
          </motion.div>

          {/* Contact Form — Static */}
          <motion.form
            className="
                bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl space-y-6
            "
            variants={fadeUp}
            action="https://formsubmit.co/12matheesha@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            >

            {/* Disable CAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Redirect URL after success */}
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <div>
                <label className="block mb-2 text-slate-200">Your Name</label>
                <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="
                    w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 
                    text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-400
                "
                />
            </div>

            <div>
                <label className="block mb-2 text-slate-200">Email</label>
                <input
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                className="
                    w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 
                    text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-400
                "
                />
            </div>

            <div>
                <label className="block mb-2 text-slate-200">Message</label>
                <textarea
                rows="4"
                name="message"
                required
                placeholder="Write your message..."
                className="
                    w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 
                    text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-400
                "
                />
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                w-full py-4 rounded-xl font-semibold text-lg
                bg-gradient-to-r from-primary to-accent text-white
                shadow-lg hover:shadow-emerald-500/30 transition-all duration-300
                "
            >
                Send Message
            </motion.button>
            </motion.form>


        </motion.div>
      </div>
    </section>
  );
}
