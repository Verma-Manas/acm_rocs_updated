import React from 'react';

function Speak() {
  return (
    <section id='speakers' className="speaker" style={{ backgroundColor: "rgb(15, 0, 125)" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}><strong>Speakers</strong></h1>

      {/* Speakers Grid */}
      <section className="speaker-grid">
        {/* Speaker 1 */}
        <section className="speaker-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWjsfoNLL3hYB6TNXW9aFOdTz1NMNvU0TyQ&s" alt="Speaker 1" />
          <p>Dr. Samaresh Bera</p>
          <p>Assistant Professor</p>
          <p>IIT Jammu</p>
        </section>

        {/* Speaker 2 */}
        <section className="speaker-item">
          <img src="https://www.iiitd.ac.in/sites/default/files/arunb.jpg" alt="Speaker 2" />
          <p>Dr. Arun Balaji Buduru</p>
          <p>Associate Professor (CSE, HCD)</p>
          <p>IIIT Delhi</p>
        </section>

        {/* Speaker 3 */}
        <section className="speaker-item">
          <img src="https://www.iiitd.ac.in/sites/default/files/rajiv_0.jpg" alt="Speaker 3" />
          <p>Dr. Rajiv Raman</p>
          <p>Associate Professor (CSE, Math)</p>
          <p>IIIT Hyderabad</p>
        </section>

        {/* Speaker 4 */}
        <section className="speaker-item">
          <img src="https://media.licdn.com/dms/image/v2/C5603AQFxozsUtOOCSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517743945396?e=1736985600&v=beta&t=Ta-tmSGHQ4XhTlWk4njEvVTpVbln8VHeKXuTDIm1sE8" alt="Speaker 4" />
          <p>Dr. Sourangshu Bhattacharya</p>
          <p>Associate Professor (CSE)</p>
          <p>IIT Kharagpur</p>
        </section>

        {/* Speaker 5 (new) */}
        <section className="speaker-item">
          <img src="https://cse.iitkgp.ac.in/~smisra/sudip-picture.jpg" alt="Speaker 5" />
          <p>Dr. Sudip Misra</p>
          <p>Professor (CSE)</p>
          <p>IIT Kharagpur</p>
        </section>

        {/* Speaker 6 (new) */}
        <section className="speaker-item">
          <img src="https://i1.rgstatic.net/ii/profile.image/278617226530849-1443438931769_Q512/Shabir-Sofi.jpg" alt="Speaker 6" />
          <p>Dr. Shabir Ahmad Sofi</p>
          <p>Assistant Professor</p>
          <p>NIT Srinagar</p>
        </section>
      </section>
    </section>
  );
}

export default Speak;
