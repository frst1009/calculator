import React from 'react'
import { useSelector } from "react-redux";

function History({ isDarkMode}) {
    const history = useSelector((state) => state.calc.history);
  return (<>
    <div style={{ fontWeight: "bold" }}>History</div>
    <div className="history-items">
        {history &&
          history.map((item, idx) => {
            return (
              <div className={`${isDarkMode ? 'dark-button' : 'light-button'}`} key={idx}>
                <p>{item.operation}</p>
                {/* <span>{item.result}</span> */}
              </div>
            );
          })}
      </div></>
  )
}

export default History