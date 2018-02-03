var i = 0;
var questions = [{
        Question: "Who are the founders of Apple",
        options: ["we", "you", "Woz, Jobs and Wayne", "Apple Tree :)"],
        correct: "Woz, Jobs and Wayne"
    },
    {
        Question: "Change is future",
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
    },
    {
        Question: "HTML is what type of language",
        options: [
            "Scripting Language",
            "Markup Language",
            "Programming Language",
            "Network Protocol"
        ],
        correct: "Markup Language"
    },
    {
        Question: "HTML uses",
        options: [
            "User defined tags",
            "Pre-specified tags",
            "Fixed tags defined by the language",
            "Tags only for linking"
        ],
        correct: "Fixed tags defined by the language"
    },
    {
        Question: "The year in which HTML was first proposed",
        options: [
            "1990",
            "1980",
            "2000",
            "1995"
        ],
        correct: "1990"
    },
    {
        Question: "Fundamental HTML Block is known as ",
        options: [
            "HTML Body",
            "HTML Tag",
            "HTML Attribute",
            "HTML Element"
        ],
        correct: "HTML Tag"
    },
    {
        Question: " Apart from <b> tag, what other tag makes text bold",
        options: [
            "<fat>",
            "<strong>",
            "<black>",
            "<emp>"
        ],
        correct: "<strong>"
    },
    {
        Question: " How can you make a bulleted list with numbers",
        options: [
            "<dl>",
            "<ol>",
            "<list>",
            "<ul>"
        ],
        correct: "<ol>"
    },
    {
        Question: "What tag is used to display a picture in a HTML page",
        options: [
            "picture",
            "image",
            "img",
            "src"
        ],
        correct: "img"
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
                    !(prevState.inc > questions.length - prevState.corr - 1) ?
                    prevState.inc + 1 : prevState.inc
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
                    !(prevState.corr > questions.length - prevState.inc - 1) ?
                    prevState.corr + 1 : prevState.corr
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