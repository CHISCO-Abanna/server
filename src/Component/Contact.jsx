import React from 'react'


function Contact() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center align-center gap-2 mt-12'>
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52961786.329385094!2d-161.8326839380127!3d35.88501095906176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sng!4v1730103782033!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
            <div className="cform">
                <form action="">
                    <div className='mb-2'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" className='w-full p-3 outline-none' name="" id="" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Subject</label>
                        <input type="text" className='w-full p-3 outline-none' name="" id="" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email Address</label>
                        <input type="email" className='w-full p-3 outline-none' name="" id="" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Enter Message</label>
                        <textarea className='w-full outline-none border-1' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button type="submit" className='bg-purple-200 p-3 w-full'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact;