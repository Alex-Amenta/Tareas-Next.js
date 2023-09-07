import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => {
  return (
    <>
      <div className="card-about">
        <a
          href="https://www.linkedin.com/in/alexander-amenta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faUserTie}
            size="8x"
            className="w-20 text-white text-center mb-4 m-auto"
          />
        </a>
        <h2 className="text-center text-2xl">ALEXANDER AMENTA</h2>
        <p className="text-center mb-5 text-base text-red-800">
          Desarrollador Web
        </p>
        <p>
          Soy Alexander, un apasionado desarrollador web con experiencia en la
          creación de soluciones digitales innovadoras. Mi objetivo es combinar
          diseño y funcionalidad para brindar experiencias en línea
          excepcionales. ¡Espero contribuir al éxito de este proyecto!
        </p>
        <div className="text-center text-3xl flex justify-center items-center mt-5">
          <a
            href="https://www.linkedin.com/in/alexander-amenta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mr-4 text-white hover:text-red-900 w-8"
            />
          </a>

          <a
            href="https://github.com/Alex-Amenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white hover:text-red-900 w-8"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
