import React from 'react';
// import emailjs from 'emailjs-com'

const ContactMe = () => {
    // const sendEmail = e => {
    //     e.preventDefault()

    //     emailjs.sendForm('service_8cb9ilh', 'template_v0tzeuf', e.target, 'user_2TdPbcRhevhQDIGBqaPfM')
    //         .then(res => {
    //             console.log(res);
    //         }).catch(err => console.log(err))
    // }
    return (
        <div>
            <form className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact Me!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Zillur Rahman" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="example@gmail.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' class="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;