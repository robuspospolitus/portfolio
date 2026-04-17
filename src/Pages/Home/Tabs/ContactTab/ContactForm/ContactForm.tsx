import { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm() {
    const [form, setForm] = useState({
        email: '',
        subject: '',
        name: '',
        message: '',
    })
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        form.append("access_key", "dd6e4f86-cc52-4957-8f75-ccdfd6ad8183");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: form
        });
        const data = await response.json();
        setForm({ email: '', subject: '', name: '', message: '' });
        alert( data.success ? "You successfully sent an email. I will try to respond as soon as possible." : "Error. Something went wrong with sending.");
    };

    return (
        <section className="full-section">
            <h2 className='border-bottom-animation' style={{textAlign:"center", maxHeight:"fit-content", borderBottom: "2px solid transparent"}}>Ready for work? E-mail me right now</h2>
            <form onSubmit={onSubmit} className="pixel-corners">
                <input type="hidden" name="from_name" value="Portfolio Form"/>
                <div className="input">
                    <label>E-mail</label>
                    <input type="email" className="pixel-buttons" name="email" placeholder='E-mail' value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                </div>
                <div className="input">
                    <label>Subject</label>
                    <input type="text" className="pixel-buttons" name="subject" placeholder='Subject' value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})}/>
                </div>
                <div className="input">
                    <label>Name<p>*</p></label>
                    <input type="text" className="pixel-buttons" name="name" placeholder='Name' required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                </div>
                <div className="input">
                    <label>Message<p>*</p></label>
                    <textarea name="message" className="pixel-buttons" placeholder='Type your message here...' required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}></textarea>
                </div>
                <input type="checkbox" name="botcheck" className="hidden" style={{display:"none"}}></input>
                <button type="submit" className="pixel-corners">Submit</button>
            </form>
        </section>
    )
}