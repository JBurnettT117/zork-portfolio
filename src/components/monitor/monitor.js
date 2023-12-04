import React from 'react';
import './monitor.css';
import TerminalComponent from '../terminal/terminal';

const MonitorComponent = () => {
    return (
        <div className="box">
          <div className="monitor">
              <div className='rounded-bezel-top'></div>
              <div className='bezel'>
                <TerminalComponent/>
              </div>
              <div className='rounded-bezel-bottom'></div>
          </div>
        </div>
      );
};

export default MonitorComponent;