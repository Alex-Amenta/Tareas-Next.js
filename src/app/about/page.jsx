const AboutPage = () => {
  return (
    <>
      <div className="card-about">
          <a
            href="https://www.linkedin.com/in/alexander-amenta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-circle-user text-7xl text-white text-center block mb-4"></i>
          </a>
          <h2 className="text-center text-2xl">ALEXANDER AMENTA</h2>
          <p className="text-center mb-5 text-base text-red-800">
            Desarrollador Web
          </p>
          <p>
            Soy Alexander, un apasionado desarrollador web con experiencia en la
            creación de soluciones digitales innovadoras. Mi objetivo es
            combinar diseño y funcionalidad para brindar experiencias en línea
            excepcionales. ¡Espero contribuir al éxito de este proyecto!
          </p>
        <div className="text-center text-3xl mt-5">
          <a
            href="https://www.linkedin.com/in/alexander-amenta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin mr-4 text-white hover:text-red-900"></i>
          </a>

          <a
            href="https://github.com/Alex-Amenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github text-white hover:text-red-900"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
