var React = require('react');
var ReactDOM = require('react-dom');


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



var ApplicantCard = React.createClass({
 render:function(){
    return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="http://github.com/genezysg">github.com/genezysg</a>
        </nav>
      </div>
    </div>
    );
 }
});
var Cabecalho = React.createClass({
  render: function(){
    return(
      <div className="cabecalho">
        Aqui eh o cabeçalho do
      </div>
    );
}
});

var Curriculo  = React.createClass({
  render: function() {
    return (
      <div className="curriculo">
        Curriculo do Genezys
        <ApplicantCard/>
        <ExperienciaList/>
      </div>
    );
  }
});



ReactDOM.render(
  <Curriculo />,
  document.getElementById('curriculo')
);
