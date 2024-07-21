import React, { Suspense } from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setcurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Leonard",
          from_email: form.email,
          to_email: "leonardfedal@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisLoading(false);
        showAlert({ show: true, text: "Message envoyé", type: "success" });

        setTimeout(() => {
          hideAlert();
          setcurrentAnimation("idle");
          setform({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setisLoading(false);
        setcurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "Le message n'a pas pu etre envoyé",
          type: "danger",
        });
      });
  };
  const handleFocus = () => {
    setcurrentAnimation("walk");
  };

  const handleBlur = () => {
    setcurrentAnimation("idle");
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] lex flex-col">
        <h1 className="head-text">Faisons connaissance</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Nom
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Nom"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="votremail@mail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Votre message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Dites moi comment je pourrais vous aider!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "En cours..." : "Envoyer mon message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.7, -0.7, 0]}
              scale={[0.3, 0.3, 0.3]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
