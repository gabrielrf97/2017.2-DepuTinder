import React, { Component } from 'react';

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <a
            className="waves-effect waves-light btn black yellow-text text-accent-3"
            id="elaborateQuestionButton"
          >Criar Questão
          </a>
        </div>
        <div>
          <a
            className="waves-effect waves-light btn black yellow-text text-accent-3"
            id="elaborateQuestionnaireButton"
          >Criar Questionário
          </a>
        </div>
      </div>
    );
  }
}

export default AdminPage;