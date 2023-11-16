
export default function About() {

  const styles ={
    aboutStyles: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '0 20px 0 20px'
    },
    pictureStyles: {
      border: '1px solid black',
      borderRadius: '8px'
    },
    mainStyles: {
      background: '#E0E0E0',
    height: '100vh',
    }
  }
    return (
      <div style={styles.mainStyles}>
        <h1 class=" m-0 pt-5 text-center">About Me</h1>
        <section style={styles.aboutStyles} class="pt-5">
        <p class=" m-0 mx-5">
                My name is Anna-Britta Pincus. I am a full stack developer with a certification of completion from the University of Colorado. My goal is to acquire a full time
                position within the coding field. In my free time I like to rock
                climb, trail run, lift, and paint! My favorite movies are the LOTR trilogy and some Mel Brooks Films. I
                am excited to apply what I learn within the bootcamp to my future career endeavors!
        </p>
        <img style={styles.pictureStyles} class=" m-0 mx-5" src="../public/IMG_5563.jpg" alt="climbing pic" width='400px' />
        </section>
      </div>
    );
  }