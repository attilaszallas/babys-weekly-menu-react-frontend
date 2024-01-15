
import React, { useState } from 'react';
import './App.css';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';

function App(){
  return (
    <div className="App">
      <div className="container mx-auto">
        <p className="text-2xl text-blue-700 font-bold h-24 hover:text-black py-4">Baby's weekly menu</p>
          <div className="grid grid-cols-7 grid-rows-7 gap-4">
            <Monday/>
            <Tuesday/>
            <Wednesday/>
            <Thursday/>
            <Friday/>
            <Saturday/>
            <Sunday/>
          </div>
      </div>
    </div>
  );
}

export default App;
