import './ContactForm.scss';

export default function ContactForm() {
    const onSubmit = async (event:React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "dd6e4f86-cc52-4957-8f75-ccdfd6ad8183");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        alert(data.success ? "You succesfully sent an email. I will try to respond as soon as possible." : "Error. Something went wrong with sending.")
    };

    return (
        <section className="full-section">
            <h2 className='border-bottom-animation' style={{maxHeight: "var(--font-size-xl)", textAlign:"center"}}>Ready for work? E-mail me right now</h2>
            <form onSubmit={onSubmit} className="pixel-corners">
                <input type="hidden" name="from_name" value="Portfolio Form"/>
                <div className="input">
                    <label>E-mail</label>
                    <input type="email" className="pixel-buttons" name="email" placeholder='E-mail' />
                </div>
                <div className="input">
                    <label>Subject</label>
                    <input type="text" className="pixel-buttons" name="subject" placeholder='Subject' />
                </div>
                <div className="input">
                    <label>Name<p>*</p></label>
                    <input type="text" className="pixel-buttons" name="name" placeholder='Name' required/>
                </div>
                <div className="input">
                    <label>Message<p>*</p></label>
                    <textarea name="message" className="pixel-buttons" placeholder='Type your message here...' required></textarea>
                </div>
                <input type="checkbox" name="botcheck" className="hidden" style={{display:"none"}}></input>
                <button type="submit" className="pixel-corners">Submit</button>
            </form>

        </section>
    )
}