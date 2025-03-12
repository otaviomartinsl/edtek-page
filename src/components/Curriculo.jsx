import React from 'react';

function Curriculo() {
  return (
    <div className="curriculo-section">
      <section className="section">
        <h2>OBJETIVO PROFISSIONAL</h2>
        <p>
          Contribuir com minhas habilidades técnicas e experiência profissional para uma posição de Suporte de TI,
          focando na resolução de problemas, atendimento ao cliente e eficiência operacional, enquanto continuo
          desenvolvendo minha carreira na área de tecnologia.
        </p>
      </section>

      <section className="section">
        <h2>FORMAÇÃO ACADÊMICA</h2>
        <div className="timeline-item">
          <div className="date">2024 - 2026</div>
          <div className="content">
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Universidade Puc Minas - 2° período</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>EXPERIÊNCIA PROFISSIONAL</h2>
              
      <div className="timeline-item">
          <div className="date">2023</div>
          <div className="content">
            <h3>Desenvolvedor Unity</h3>
            <p>Empresa Plataforma Launcher</p>
            <ul>
              <li>Desenvolvimento completo da aplicação</li>
              <li>Desenvolvimento com Unity, C#, Photon e Playfab</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="date">2024</div>
          <div className="content">
            <h3>Suporte Técnico</h3>
            <p>Empresa Lógica Soluções</p>
            <ul>
              <li>Prestação de suporte técnico a usuários internos</li>
              <li>Diagnóstico e resolução de problemas de hardware e software</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="date">2024</div>
          <div className="content">
            <h3>Desenvolvedor Fullstack React.JS e Node.JS</h3>
            <p>Empresa Lógica Soluções</p>
            <ul>
              <li>Desenvolvimento de sistema de monitoramento veicular</li>
              <li>Utilização de React.JS, Node.js e PostgreSQL</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="section">
        <h2>HABILIDADES TÉCNICAS</h2>
        <div className="skills-grid">
          <div>
            <h3>Linguagens de Programação</h3>
            <ul>
              <li>React Native, React.JS, Node.JS</li>
              <li>C#, JavaScript, TypeScript</li>
              <li>HTML, CSS</li>
            </ul>
          </div>
          
          <div>
            <h3>Banco de Dados</h3>
            <ul>
              <li>SQL Server</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>IDIOMAS</h2>
        <ul>
          <li>Português - Nativo</li>
          <li>Inglês - Avançado</li>
          <li>Espanhol - Avançado</li>
        </ul>
      </section>
    </div>
  );
}

export default Curriculo;