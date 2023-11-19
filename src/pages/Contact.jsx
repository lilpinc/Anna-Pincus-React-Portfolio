


export default function Contact() {

  return (

    <div className="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contactinfo">
        <form action="" class="form pt-3 mx-5 col-4">
          <div class="row mt-3 mb-3">
            <label for="name">Your name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="row mb-3">
            <label for="email">Your email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div class="row mb-3">
            <label for="message">Your message:</label>
            <textarea rows="4" id="message" name="message" />
          </div>
          <div class="row col-3">
            <button type="submit" value="Send">Submit</button>
          </div>
        </form>
        <section class="mx-5 contactme">
          <p className="thanks">Thank you for checking out my website!</p>
          <p className="question">Want to get into contact? Reach me at the following:</p>
            <ul className="contactlist">
            <li>Phone: 757.536.5114</li>
            <li>Email: ab.pincus002@gmail.com</li>
            </ul>
            <p>I'd love to hear your feedback!</p>
        </section>
      </div>
    </div>

  );
}
