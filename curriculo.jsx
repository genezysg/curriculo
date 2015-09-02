var ExperienciaList = React.createClass({
  render: function(){
    return (
      <div className="experiencias">
        Lista
        <Experiencia/>
        <Experiencia/>
      </div>
    );
  }
});


var Experiencia = React.createClass({
  render: function(){
    return(
        <div className="experiencia">
        Uma unica experiencia
        </div>
    );
  }
});


var Cabecalho = React.createClass({
  render: function(){
    return (
      <div className="cabecalho">
        Aqui eh o cabeçalho do curriculo
      </div>
    );
  }
});

var Curriculo  = React.createClass({
  render: function() {
    return (
      <div className="curriculo">
        Curriculo do Genezys
        <Cabecalho/>
        <ExperienciaList/>
      </div>
    );
  }
});

React.render(
  <Curriculo />,
  document.getElementById('curriculo')
);
