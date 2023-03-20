import { useEffect, useState } from "react";
import { Button } from "antd";
import event from "../event";

const Calculator3: React.FC = (props: any) => {
  console.log("exec Calculator3");
  const { plugins, initalValue, onMount, onUnMount } = props;
  const [value, setValue] = useState(initalValue | 0);

  useEffect(() => {
    onMount();
    return () => {
      onUnMount();
    };
  }, []);

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
const showCalculator3 = ({ initalValue, plugins }) => {
  console.log("exec");
  const corePlugins = [
    { name: "inc", exec: (val, setVal) => setVal(val + 1) },
    { name: "dec", exec: (val, setVal) => setVal(val - 1) },
  ];

  const newPlugins = [...corePlugins, ...plugins];

  newPlugins.forEach((p) => {
    // 把所有on开头的都注册一下
    Object.keys(p)
      .filter((key) => key.indexOf("on") === 0 && typeof p[key] === "function")
      .forEach((key) => event.listen(key, p[key]));
  });

  // 这里就简单定义两个生命周期
  const handleMount = () => event.trigger("onMount");

  const handleUnMount = () => event.trigger("onUnMount");

  return (
    <Calculator3
      onMount={handleMount}
      onUnMount={handleUnMount}
      initalValue={initalValue}
      plugins={newPlugins}
    ></Calculator3>
  );
};
export default showCalculator3;
