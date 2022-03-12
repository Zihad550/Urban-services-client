import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';

function ContactUs() {
    return (
        <div className=" mb-20 container mx-auto">
            <Title classes="mb-5 ">Contact Us</Title>
            <div className="flex flex-col-reverse items-center  gap-20 md:grid grid-cols-2  container">
                {/* contact form */}
                <div className="">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.target.reset();
                        }}
                    >
                        <div className="mb-2">
                            <Input variant="outlined" placeholder="Name" name="name" type="text" />
                        </div>
                        <div className="mb-2">
                            <Input
                                variant="outlined"
                                placeholder="Email"
                                name="email"
                                type="email"
                            />
                        </div>
                        <textarea
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-700 mb-2"
                            placeholder="Message"
                        />
                        <Button type="submit" variant="outlined">
                            Send Message
                        </Button>
                    </form>
                </div>
                {/* other contacts */}
                <div>
                    <h3 className="text-2xl mb-1">Send us a message</h3>
                    <p className="mb-4">Our customer care is open 24/7</p>
                    {/* LOcation */}
                    <div className="flex items-center gap-3 mb-2">
                        <div>
                            <FontAwesomeIcon className="text-2xl" icon={faLocationDot} />
                        </div>
                        <div>
                            <h4 className="text-xl">Address</h4>
                            Dhaka, Bangladesh
                        </div>
                    </div>
                    {/* email */}
                    <div className="flex items-center gap-3 mb-2">
                        <div>
                            <FontAwesomeIcon className="text-2xl" icon={faEnvelope} />
                        </div>
                        <div>
                            <h4 className="text-xl">Email Address</h4>
                            urbanservices@web.com
                        </div>
                    </div>
                    {/* phone */}
                    <div className="flex items-center gap-3 mb-2">
                        <div>
                            <FontAwesomeIcon className="text-2xl" icon={faPhone} />
                        </div>
                        <div>
                            <h4 className="text-xl">Phone Number</h4>
                            01234567891
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
