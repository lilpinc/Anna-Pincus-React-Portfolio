const styles= {
  contactStyles: {
    background: '#E0E0E0',
    height: '100vh',
  },
  formStyles:{
   background: '#9E9E9E',
   padding: '30px',
   marginTop: '50px',
   border: '1px solid black'
  },
textStyles:{
  display: 'flex',
  justifyContent: 'space-around',
},
infoStyles:{
  marginTop: '50px',
}
};

export default function Contact() {


  return (

    <div style={styles.contactStyles} className="contact">
      <h1 class=" m-0 pt-5 text-center">Contact Me</h1>
    <div style={styles.textStyles}>
      <form action="" style={styles.formStyles} class="pt-3 mx-5 col-4">
        <div class="row mt-5 mb-3">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div class="row mb-3">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div class="row mb-3">
          <label for="message">Message:</label>
          <textarea rows="4" id="message" name="message" />
        </div>
        <div class="row col-3">
        <button type="submit">Submit</button>
        </div>
      </form>
      <section style={styles.infoStyles} class="mx-5">
      <p>If you are interested in my work and would like to contact me please leave your name, email, and a message. I will reach out as soon as possible! </p>
      </section>
      </div>
    </div>

  );
}