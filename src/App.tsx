import "./App.css";
import Calculator from "./components/calculator";
import showCalculator2 from "./components/calculator2";
import showCalculator3 from "./components/calculator3";

function App() {
  return (
    <div className="App">
      <p>使用插件形式的计算器</p>
      <Calculator />
      {showCalculator2({
        initalValue: 1,
        plugins: [{ name: "square", exec: (val, setVal) => setVal(val * val) }],
      })}
      {showCalculator3({
        initalValue: 1,
        plugins: [
          {
            name: "square",
            exec: (val, setVal) => setVal(val * val),
            onMount: () => console.log("the calculator3 is onmount"),
          },
        ],
      })}
    </div>
  );
}

export default App;
