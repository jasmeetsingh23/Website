import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import amazon from '../../assets/amazon.jpg';
import iphone from '../../assets/3d1.jpg';
import figma from '../../assets/figma.jpg'
import tic from '../../assets/tic.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={figma}
          link="https://figma-clone-ashen-one.vercel.app/"
          h3="Figma"
          p="Designer App"
        />
        <ProjectCard
          src={iphone}
          link="https://3-d-iphone-five.vercel.app/"
          h3="3D IPhone Website"
          p="3D Model"
        />
        <ProjectCard
          src={amazon}
          link="https://amazon-delta-blond.vercel.app/"
          h3="Amazon App"
          p="Shopping App"
        />
        <ProjectCard
          src={tic}
          link="https://tic-tac-toa-game-eight.vercel.app/"
          h3="Tic Tac Toe Game"
          p="Game"
        />
      </div>
    </section>
  );
}

export default Projects;
