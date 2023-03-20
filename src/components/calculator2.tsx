import { useState } from "react";
import { Button } from "antd";

const Calculator2: React.FC = (props: any) => {
  const { plugins, initalValue } = props;
  const [value, setValue] = useState(initalValue | 0);

  const buttons = plugins.map((v) => {
    return (
      <Button onClick={() => v.exec(value, setValue)} key={v.name}>
        {v.name}
      </Button>
    );
  });

  return (
    <>
      <div>
        <div>{value}</div>
        {buttons}
      </div>
    </>
  );
};
const showCalculator2 = ({ initalValue, plugins }) => {
  const corePlugins = [
    { name: "inc", exec: (val, setVal) => setVal(val + 1) },
    { name: "dec", exec: (val, setVal) => setVal(val - 1) },
  ];

  const newPlugins = [...corePlugins, ...plugins];

  return (
    <Calculator2 initalValue={initalValue} plugins={newPlugins}></Calculator2>
  );
};
export default showCalculator2;
