"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
    useEffect(() => {
        AOS.init({
          // Global settings:
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
          // ... (other configuration settings)
        });
      }, []);


      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0lhyspu",
        "template_zfsrlnc",
        form.current,
        "daFdzriOxxzSUwK_d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <div className='pt-[70px]'>
            
            <div className='xl:w-[40vw] flex ml-[auto] mr-[auto] rounded-[15px]'>
            <div className='xl:w-[40vw] border-2 flex ml-[auto] mr-[auto] justify-center rounded-[15px] bg-white py-[20px]'>
                
                <form ref={form} onSubmit={sendEmail}>
                <div className='text-center text-[40px] py-[20px]' >Contact Us</div>
                    <div className='pt-[20px]'>
                    <label>First Name</label><br/>
                    <input type="text" name='first_name' className='border-2 rounded-[10px] mt-[5px] xl:w-[300px] py-[7px] bg-gray-100 p-4 focus:outline-none'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Last Name</label><br/>
                    <input type="text" name='last_name' className='border-2 rounded-[10px] mt-[5px] xl:w-[300px] py-[7px] bg-gray-100 p-4 focus:outline-none'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Email</label><br/>
                    <input type="text" name='from_email' className='border-2 rounded-[10px] mt-[5px] xl:w-[300px] py-[7px]  bg-gray-100 p-4 focus:outline-none'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Phone</label><br/>
                    <input type="text" name='phone' className='border-2 rounded-[10px] mt-[5px] xl:w-[300px] py-[7px]  bg-gray-100 p-4 focus:outline-none'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Message</label><br/>
                    <textarea name='message' className='border-2 rounded-[10px] mt-[5px] xl:w-[300px] py-[7px]  bg-gray-100 p-4 focus:outline-none '/>
                    </div>
                    <input type='submit' value="send" className='text-center border-2 bg-red flex mx-[auto] mt-[20px] px-[35px] py-[10px] text-[25px] mt-[50px] mb-[20px] rounded-[15px] bg-gray-100 hover:bg-gray-200 border-[3px]'/>

                </form>
            </div>
            </div>
        </div>
    );
}

export default ContactForm;