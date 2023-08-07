import React from 'react';

function ContactForm() {
    return (
        <div className='pt-[70px]'>
            <div className='text-center text-[40px]'>Contact Us</div>
            <div className='w-[50vw] border-[15px] flex ml-[auto] mr-[auto] justify-center rounded-[15px] bg-white py-[20px] shadow-2xl shadow hover:shadow-inner'>
                <form className=''>
                    <div className='pt-[20px]'>
                    <label>First Name</label><br/>
                    <input type="text" className='border-2 rounded-[10px] mt-[5px]'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Last Name</label><br/>
                    <input type="text" className='border-2 rounded-[10px] mt-[5px]'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Email</label><br/>
                    <input type="text" className='border-2 rounded-[10px] mt-[5px]'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Phone</label><br/>
                    <input type="text" className='border-2 rounded-[10px] mt-[5px]'/>
                    </div>
                    <div className='pt-[20px]'>
                    <label>Message</label><br/>
                    <input type="text" className='border-2 rounded-[10px] mt-[5px]'/>
                    </div>
                    <button className='text-center border-2 bg-red flex mx-[auto] mt-[20px]'>Submit</button>

                </form>
            </div>
        </div>
    );
}

export default ContactForm;