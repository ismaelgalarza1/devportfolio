import { useNavigate } from "react-router-dom";
import myResume from '../assets/Resume Ismael Galarza 2025.pdf';
import '../styles/contact.css';

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div className="contact-container">
            <div className="contact-content">
                <button
                    className="back-button"
                    onClick={() => navigate('/')}>
                    ← Back to Home
                </button>

                <h1 className="contact-title">Get In Touch</h1>

                <p className="contact-description">
                    If you wish to contact me fill the form with your full name, email and a
                    short message. I will contact you as soon as possible. If you want
                    to view my Resume just click{' '}
                    <a href={myResume} target="_blank" rel="noopener noreferrer" className="resume-link"> here </a>
                    {' '}or{' '}
                    <a href={myResume} download="Resume_Ismael_Galarza_2025.pdf" className="resume-link">download it</a>.
                </p>

                <form
                    className="contact-form"
                    name="contact"
                    method="POST"
                    action="https://formsubmit.co/ismaelgalarza1@yahoo.com"
                >
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Full Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="hello@me.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="message"
                            rows={6}
                            placeholder="Message"
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button className="submit-button" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;