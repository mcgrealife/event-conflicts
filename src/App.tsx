import { useState } from 'react';

function App() {
  const [log, setLog] = useState(['']);

  return (
    <>
      <label>
        <p>Focus the input, then click the button</p>
        <input
          id="input"
          onClick={() => setLog([''])}
          onBlur={() => {
            setLog((prev) => prev.concat('input onBlur'));
          }}
        />
        <button
          onClick={() => {
            setLog((prev) => prev.concat('button onClick'));
          }}
        >
          Button
        </button>
      </label>
      <ul>
        {log?.filter(Boolean).map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
