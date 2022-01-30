import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function App() {
  const [colorHexCode, setColorHexCode] = useState('#000000');

  return (
    <div className="App">
      <h3>React color picker - <a href="https://codepremix.com">Code Premix</a></h3>

      <SketchPicker
        color={colorHexCode}
        onChange={e => setColorHexCode(e.hex)} />

      <br />
      <b>Selected Color: </b>{colorHexCode}

    </div>
  );
}

export default App;