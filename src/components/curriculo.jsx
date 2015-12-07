var React = require('react');
var ReactDOM = require('react-dom');
var resume = require ('../data/curriculo.json');

console.log(resume);

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


var BasicInfoCard = React.createClass({
  render:function(){
    return(
      <div className="mdl-card">
        <img src={this.props.data.personalData.photo} className="img-circle"/>
      </div>

    );
  }
});

var ApplicantLeftInfo = React.createClass({
 render:function(){
    return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <div className="mdl-layout__drawer">

        <span className="mdl-layout-title">{this.props.data.name}</span>
        <nav className="mdl-navigation">
          <BasicInfoCard data={this.props.data}/>
          <a className="mdl-navigation__link" href=""></a>
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
        <ApplicantLeftInfo data={this.props.data}/>
        <ExperienciaList/>
      </div>
    );
  }
});



ReactDOM.render(
  <Curriculo data={resume}/>,
  document.getElementById('curriculo')
);
