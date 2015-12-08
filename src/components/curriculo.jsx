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
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.data.personalData.fullname}</h2>
        </div>
        <div className="mdl-card__supporting-text">
            {this.props.data.personalData.title}
        </div>
      </div>
    );
  }
});

var SocialNetworkCard = React.createClass({
  render:function(){
    return (
      <div className="mdl-card">
        <div className="mdl-card__actions">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
        </a>
        </div>
      </div>
    );
  }
});

var ApplicantLeftInfo = React.createClass({
 render:function(){
    return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <div className="mdl-layout__drawer">
        <header className="leftHeader">
        <span className="mdl-layout-title">{this.props.data.personalData.fullname}</span>
            <img src={this.props.data.personalData.photo} className="img-circle"/>
        </header>
        <nav className="mdl-navigation">

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
