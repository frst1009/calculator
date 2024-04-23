import { useSelector } from "react-redux";


const Input = () => {
  const lastOperation = useSelector(
    (state) => state.calc.lastOperation
  );
  const operation = useSelector((state) => state.calc.operation);
  const result = useSelector((state) => state.calc.result);

  return (
    <div className="operation-result-view-sect">
      <div className="operation-after-result">
        {result !== 0 ? lastOperation : null}
      </div>
      <div className="operation-result">
        <div className="equal-to" >
          {result !== 0 ? "=" : ""}
        </div>
        <div className="result" >
          {result !== 0 ? result : operation}
        </div>
      </div>
    </div>
  );
};

export default Input;