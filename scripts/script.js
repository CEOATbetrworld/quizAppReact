var i = 0;
var questions = [
  {
    Question: "Who are the founders of apple",
    options: ["we", "you", "Woz, Jobs and Wayne", "Apple Tree :)"],
    correct: "Woz, Jobs and Wayne"
  },
  {
    Question: "change is future",
    options: ["yes", "No", "May be", "absolutely"],
    correct: "absolutely"
  },
  {
    Question: "WWW stands for",
    options: [
      "World Whole Web",
      "Wide World Web",
      "May Web World Wide",
      "World Wide Web"
    ],
    correct: "World Wide Web"
  }
];

class Question extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.question} ?</h2>
      </div>
    );
  }
}

function Option(props) {
  return <button onClick={props.clickHandle}>{props.option}</button>;
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var optArr = [];
    for (var i = 0; i < this.props.option.length; i++) {
      if (this.props.option[i] == this.props.correct) {
        optArr.push(
          <Option
            clickHandle={this.props.clickHandlerc}
            option={this.props.option[i]}
          />
        );
      } else {
        optArr.push(
          <Option
            clickHandle={this.props.clickHandleri}
            option={this.props.option[i]}
          />
        );
      }
    }
    return <div className="options">{optArr}</div>;
  }
}

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ScoreBoard">
        <h3>Correct : {this.props.corr}</h3>
        <h3>Incorrect : {this.props.inc}</h3>
      </div>
    );
  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: questions[i].Question,
      options: questions[i].options,
      inc: 0,
      corr: 0,
      correct: questions[i].correct
    };

    this.clickHandleri = this.clickHandleri.bind(this);
    this.clickHandlerc = this.clickHandlerc.bind(this);
  }

  clickHandleri() {
    if (i < questions.length - 1) {
      i++;
    }

    this.setState((prevState, props) => {
      return {
        question: questions[i].Question,
        options: questions[i].options,
        correct: questions[i].correct,
        inc:
          prevState.inc < questions.length && prevState.corr < questions.length
            ? prevState.inc + 1
            : prevState.inc
      };
    });
    console.log(i);
  }

  clickHandlerc() {
    if (i < questions.length - 1) {
      i++;
    }

    this.setState((prevState, props) => {
      return {
        question: questions[i].Question,
        options: questions[i].options,
        correct: questions[i].correct,
        corr:
          prevState.corr < questions.length && prevState.inc < questions.length
            ? prevState.corr + 1
            : prevState.corr
      };
    });
    console.log(i);
  }

  render() {
    return (
      <div>
        <Question question={this.state.question} />
        <Options
          clickHandleri={this.clickHandleri}
          clickHandlerc={this.clickHandlerc}
          option={this.state.options}
          correct={this.state.correct}
        />
        <ScoreBoard corr={this.state.corr} inc={this.state.inc} />
      </div>
    );
  }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));
