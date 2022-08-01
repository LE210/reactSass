import './App.scss';
import Button from "./components/Button";

function App() {
  return (
      <div className="App">
        <div className="buttons">
          <Button size="large" onClick={() => console.log("클릭하셨소?")}>Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="grape">Button</Button>
          <Button color="grape">Button</Button>
          <Button size="small" color="grape">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="teal">Button</Button>
          <Button color="teal">Button</Button>
          <Button size="small" color="teal">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" outline>Button</Button>
          <Button color="teal" color="grape" outline>Button</Button>
          <Button size="small" color="teal" outline>Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="blue" fullWidth>Button</Button>
          <Button color="teal" color="grape" fullWidth>Button</Button>
          <Button size="small" color="teal" fullWidth>Button</Button>
        </div>
      </div>
  );
}

export default App;
