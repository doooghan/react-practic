import { useState } from "react";
import { Button } from "antd";

const Calculator: React.FC = (props: any) => {
  const { initalValue } = props;
  const [value, setValue] = useState(initalValue | 0);

  const handleInc = () => setValue(value + 1);

  const handleDec = () => setValue(value - 1);

  return (
    <>
      <div>
        <div>{value}</div>
        <Button onClick={handleInc}>inc</Button>
        <Button onClick={handleDec}>dec</Button>
      </div>
    </>
  );
};

export default Calculator;
