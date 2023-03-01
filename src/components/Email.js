import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
// email js => mlippold.website@gmail.com

const Email = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d7csfhi', 'template_pvnlhag', form.current, '9-FOdiIn6P_nD_RzX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };

    return (
        <section>
            <div className="email--container">
                <h2 className="--text-center"></h2>

                <form className="--form-control"
                      ref={form}
                      onSubmit={sendEmail}>
                    <p></p>
                    <input type="text"
                    placeholder="Full Name"
                    name="'user_name" required />
                    <p></p>
                    <input type="email"
                    placeholder="Email"
                    name="'user_email" required />
                    <p></p>
                    <input type="text"
                    placeholder="Subject"
                    name="'user_subject" required />
                    <p></p>
                    <textarea name="message"
                    cols="30" rows="10">
                    </textarea>
                    <p></p>
                    <button className="--btn 
                    --btn-primary" type="submit"> Send Message </button>
                </form>


            </div>
        </section>
    )
}

export default Email