import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navbar from '../components/Navbar'

const Contact = () => {
    const [state, handleSubmit] = useForm("meqydkgy");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className="contact">
            <Navbar />
            <div className="profile">
                <img src={process.env.PUBLIC_URL + '/img/profile.jpeg'} alt="프로필 사진" />
                <div className="text_area">
                    <p className="name">박유안</p>
                    <p className="phone">010-8574-5424</p>
                    <p className="email">euantheuan@gmail.com</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="email">
                        이메일 주소: 
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                </div>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder='보내실 이메일의 내용을 입력해주세요.'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    보내기
                </button>
            </form>
        </div>
    )
}

export default Contact