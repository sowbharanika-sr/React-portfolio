import { useEffect, useRef } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';
const Hero = () => {
  const heroRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const reveal = revealRef.current;

    const move = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      reveal.style.setProperty("--x", `${x}px`);
      reveal.style.setProperty("--y", `${y}px`);
      reveal.classList.add("active");
    };

    const leave = () => {
      reveal.classList.remove("active");
    };

    hero.addEventListener("mousemove", move);
    hero.addEventListener("mouseleave", leave);

    return () => {
      hero.removeEventListener("mousemove", move);
      hero.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className= "topcard">
    <div className="hero" ref={heroRef}>
      <Navbar />

      <div className="hero-content">
        <h1>Hello Everyone!<br/> My Name is Sowbharanika S R<WavingHandRoundedIcon className="icon"/></h1>
        <p>I'm Currently Pursuing B.E in Computer Science and Engineering <br/>at Jansons Institute of Technology,Coimbatore</p>
        <p>Frontend Developer | React Enthusiast | UI Builder</p>
      </div>

      <div className="image-reveal" ref={revealRef}></div>
    </div>
       <div class="card-header">
            <img src="./images/Sow.jpeg" alt="Profile" class="profile-img"/>
        </div>
  
    <div className="card-body">
     
            <h2 className="name">SOWBHARANIKA S R</h2>
            <p className="title">Frontend Developer</p>

            <p className="bio">Passionate Computer Science Engineering student focused on building impactful technology through hands-on projects and continuous skill development.</p>
             <div className="card">
                  <h3 className="skills-title">Technical Skills</h3>
                  <div className="skills">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Python</span>
                    <span>Responsive Design</span>
                    <span>C Programming</span>
                  </div>
                <h3 className="skills-title">Non-Technical Skills</h3>
                <div className="skills">
                    <span>Communication</span>
                    <span>Adaptability</span>
                    <span>Enthusiasm</span>
                    <span>Cooperation</span>
                    <span>Time Management</span>
                    <span>Creative</span>
                </div>
                </div>
                <h3 className="skills-title">Projects</h3>
                <div className="projects">
                    <a href="https://chipper-scone-44215c.netlify.app/" class="project" >Infact-UI</a>
                    <a href="https://sage-starburst-bcbea9.netlify.app/" class="project">React App</a>
                </div>
            
        </div>
        
        <div class="card-footer">
            <a href="https://www.linkedin.com/in/sowbharanika-s-r-b85b3a328/" target="_blank" class="btn">
              <InsertLinkRoundedIcon/>LinkedIn
            </a>
            <a href="mailto:sowbharanikaravikumar4@gmail.com" target="_blank" class="btn">
              <img src="https://th.bing.com/th/id/R.bb18bdbbef437b2d50518db5a8292c94?rik=cOvK7ERpnbu3Tw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2femail-icon-png-download-icons-logos-emojis-email-icons-2400.png&ehk=VQKlzNVcrMc2tLSKYacLzJ9XD4bCkYGXtMrARdqSBKQ%3d&risl=&pid=ImgRaw&r=0" alt="mail"/> Email</a>
              <div class="marksheets">
                <a href="./images/12th_marksheet.jpeg" class="img"> 12th MARKSHEET   |</a>
                <a href="./images/10th_marksheet.jpeg" class="img">10th MARKSHEET   |</a>
                <a href="./images/SEMESTER.jpeg" class="img">SEMESTER MARKSHEET</a>
                </div>
                  
        </div>
    </div>

    
  );
};

export default Hero;
