import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListAnsweredQuestions from '../containers/listAnsweredQuestions';
import SaveQuestionnaire from '../actions/saveQuestionnaireData';

class AnsweredQuestionsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goToRanking() {
    this.props.answeredQuestions.map((question) => {
      this.props.sendQuestionnaire(1, question.answerID, question.answer);
    });

    browserHistory.push('/ranking');
  }

  render() {
    return (
      <div className="answerPanel">
        <h3 className="center" id="answerPanelTitle">Respostas</h3>
        <ul id="listAnswers" className="collapsible" data-collapsible="accordion">
          <ListAnsweredQuestions questionID="0" />
          <ListAnsweredQuestions questionID="1" />
          <ListAnsweredQuestions questionID="2" />
          <ListAnsweredQuestions questionID="3" />
          <ListAnsweredQuestions questionID="4" />
          <ListAnsweredQuestions questionID="5" />
          <ListAnsweredQuestions questionID="6" />
          <ListAnsweredQuestions questionID="7" />
          <ListAnsweredQuestions questionID="8" />
          <ListAnsweredQuestions questionID="9" />
        </ul>
        <div className="row" id="answerListButtonsRow">
          <div className="col s6 m6 l6" id="editButtonColumn">
            <center>
              <a
                className="waves-effect waves-light btn black"
                id="editButton"
                onClick={() => browserHistory.push('/responder')}
              ><i className="material-icons right" id="editButtonIcon">edit</i>Editar
              </a>
            </center>
          </div>
          <div className="col s6 m6 l6" id="sendButtonColumn">
            <center>
              <a
                className="waves-effect waves-light btn black"
                id="sendtButton"
                onClick={() => this.goToRanking()}
              >
                <i className="material-icons right" id="sendButtonIcon">send</i>Submeter
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

AnsweredQuestionsPanel.propTypes = {
  answeredQuestions: PropTypes.arrayOf(PropTypes.object),
  sendQuestionnaire: PropTypes.func,
};

AnsweredQuestionsPanel.defaultProps = {
  answeredQuestions: [{
    answerID: 0,
    answer: 'answer',
  }],
  sendQuestionnaire() {},
};

function mapStateToProps(state) {
  return {
    answeredQuestions: state.answeredQuestions,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendQuestionnaire(userID, questionID, answer) {
      dispatch(SaveQuestionnaire(userID, questionID, answer));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnsweredQuestionsPanel);
