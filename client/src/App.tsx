import { BaseSyntheticEvent, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState({
    data: [],
    error: ''
  });

  const handleChange = (event: BaseSyntheticEvent) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const response: Response = await fetch('http://localhost:3000/fizzbuzz', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input })
    });

    setResponse(await response.json());
  };

  return (<>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} placeholder='Please enter an array of values' />
      <input type="submit" />
    </form>

    {response.error ?
      <div>{response.error}</div> :
      response.data.map(x => {
        return <div>{x}</div>;
      })
    }
  </>
  );
}

export default App;
