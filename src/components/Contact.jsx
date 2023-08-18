import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// template_imno8p9
//service_mmz5gvv
// 9Q0z1iKjni4TOElDl
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_mmz5gvv",
        "template_sapmhal",
        {
          from_name: form.name,
          to_name: "Nithin",
          from_email: form.email,
          to_email: "vukkusilanithin@gmail.com",
          message: form.message,
        },
        "9Q0z1iKjni4TOElDl"
      )
      .then((res) => {
        setLoading(false);
        alert("Thank you");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) =>{ 
        setLoading(false)
        alert("Somthing went wrong please try again.")});
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        variants={slideIn("left", "tween", "0.2", 1)}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>{" "}
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to change"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending" : "Send"}{" "}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", "0.2", 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
