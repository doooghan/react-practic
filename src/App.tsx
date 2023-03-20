import "./App.css";
import Calculator from "./components/calculator";
import showCalculator2 from "./components/calculator2";

function App() {
  return (
    <div className="App">
      <p>使用插件形式的计算器</p>
      <Calculator />
      {showCalculator2({
        initalValue: 1,
        plugins: [{ name: "square", exec: (val, setVal) => setVal(val * val) }],
      })}
    </div>
  );
}

export default App;
