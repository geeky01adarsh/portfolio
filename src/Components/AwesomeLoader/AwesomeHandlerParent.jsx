import './style_awesome.css';
import XlviLoader from './AwesomeHandler'

import React from 'react'

const AwesomeHandlerParent = () => {
  return (
    <div className="AwesomeHandler">
      <XlviLoader
        boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </div>
  );
}

export default AwesomeHandlerParent
