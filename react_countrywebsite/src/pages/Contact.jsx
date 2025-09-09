export const Contact = () => {
    const handleFormSubmit = (formData) => {
        console.log(formData.entries());
        const formInputData = Object.fromEntries(formData)
        
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
            <form action={handleFormSubmit} >
              <input 
                type="text" 
                className="form-control"
                autoComplete="off" 
                required
                placeholder="Enter your name"
                name="username" />

             <input 
                type="email" 
                className="form-control"
                autoComplete="off" 
                required
                placeholder="Enter your email"
                name="gmail" />
            
            <textarea  
                className="form-control"
                rows="10"
                autoComplete="off" 
                required
                placeholder="Enter your message"
                name="message" />

                <button type="submit" value="sent">Send</button>
            </form>
            </div>
        </section>
       
    )
}