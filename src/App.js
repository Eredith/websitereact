const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
const customStyle2 = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
const customStyle3 = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
const customStyle4 = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
const customStyle5 = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
const customStyle6 = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

const randomColor = Math.floor(Math.random()*16777215).toString(16);
const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
const randomColor5 = Math.floor(Math.random()*16777215).toString(16);
const randomColor6 = Math.floor(Math.random()*16777215).toString(16);


function randomizer() {
  customStyle.color = "#" + randomColor;
  customStyle2.color = "#" + randomColor2;
  customStyle3.color = "#" + randomColor3;
  customStyle4.color = "#" + randomColor4;
  customStyle5.color = "#" + randomColor5;
  customStyle6.color = "#" + randomColor6;
}

window.onload = randomizer();

function App() {
  return (
    <div className="App">
      <h1 style={customStyle} className="h1" contentEditable="true">
        Hello World!
      </h1>
      <h3 style={customStyle2} className="n1" contentEditable="true">
        My Name is Aero Jacques Timorence Manukoa.
      </h3>
      <h3 style={customStyle3} className="a1" contentEditable="true">
        I am a handsome/pretty human being.
      </h3>
      <h3 style={customStyle4} className="l1" contentEditable="true">
        I love to learn JavaScript.
      </h3>
      <h3 style={customStyle5} className="s1" contentEditable="true">
        I am a super high quality student.
      </h3>
      <h3 style={customStyle6} className="g1" contentEditable="true">
        I am going to be a super star.
      </h3>
    </div>
  );
}

export default App;
