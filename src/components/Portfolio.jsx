import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Portfólio de Projetos</h2>
      
      <div className="projects-grid">
      <div className="project-card">
  <a 
    href="https://play.google.com/store/apps/details?id=com.Edtek.Matemagoar&hl=pt-BR" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <div 
      className="project-image" 
      style={{
        backgroundImage: "url('https://play-lh.googleusercontent.com/zdrLrC6ER6Dxcix_WZxe9gqhM11EL5q4XdHdoxX7ozCDfOTWGZfrQyaN2J277LBkYFC1=w480-h960-rw')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
    </div>
    <div className="project-footer">
      <div className="project-category">Mobile | Unity, C#</div>
      <h3 className="project-title">Matemago AR</h3>
      <p className="project-description">
        Aplicativo para praticar as operações matemáticas em realidade aumentada. 
      </p>
    </div>
  </a>
</div>

<div className="project-card">
  <a 
    href="https://play.google.com/store/apps/details?id=com.PlataformaLauncher.QuizPlataformaLaucher&hl=pt-BR" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <div 
      className="project-image" 
      style={{
        backgroundImage: "url('https://play-lh.googleusercontent.com/B6z676tFLv_mk-2h7c4aLOiH7DmLqI2GTyZ4s9Emdp9x55rEWT2S2TRWkFEmQ8P8ehNJ=w480-h960-rw')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
    </div>
    <div className="project-footer">
      <div className="project-category">Mobile | Unity, C#</div>
      <h3 className="project-title">Launcher Quiz Enem</h3>
      <p className="project-description">
        Aplicativo de quiz para preparação para o ENEM com mais de 5.000 questões. 
      </p>
    </div>
  </a>
</div>


<div className="project-card">
  <a 
    href="https://play.google.com/store/apps/details?id=com.Edtek.Folclorear&hl=pt-BR" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <div 
      className="project-image" 
      style={{
        backgroundImage: "url('https://play-lh.googleusercontent.com/zwBC4u8BYYqnKzzeGvACaI2YLxm91NNW5wZzgUrrYY-D8lbi9NLlIDlqhf5W8J91-2us=w480-h960-rw')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
    </div>
    <div className="project-footer">
      <div className="project-category">Mobile | Unity, C#</div>
      <h3 className="project-title">Folclore AR</h3>
      <p className="project-description">
        Aplicativo para visualizar os personagens do folclore brasileiro. 
      </p>
    </div>
  </a>
</div>

        
<div className="project-card">
  <a 
    href="https://play.google.com/store/apps/details?id=com.Edtek.Folclore&hl=pt-BR" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <div 
      className="project-image" 
      style={{
        backgroundImage: "url('https://play-lh.googleusercontent.com/KcJOZFDaVh-PVeJcNgW9Qby9iyaORqFZK6zroViI2ILePtG4gp-BwFH6Nnrfsoi4_bkn=w480-h960-rw')",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
    </div>
    <div className="project-footer">
      <div className="project-category">Mobile | Unity, C#</div>
      <h3 className="project-title">Folclore</h3>
      <p className="project-description">
      Aplicativo para aprender sobre os personagens do folclore brasileiro. 
      </p>
    </div>
  </a>
</div>

      </div>
    </div>
  );
}

export default Portfolio;