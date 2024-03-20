import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="pt-24 sm:pt-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-16 px-8">
              <div data-aos="zoom-in">
                <p className="mt-6 text-xl text-center leading-8">
                  If you're seeking a dedicated and creative team member, I'd love to chat! Please feel free to reach out to me via the following contact options.  
                  I am always open to exploring new opportunities.        
                </p>
              </div>
        </div>
      </div>
    </div>
  );
}
