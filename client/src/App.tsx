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
    <div className="container">
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <div className="input-group input-group-lg">
            <input type="text" className="form-control" onChange={handleChange} placeholder='Please enter an array of values' />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
        <h3 className="p-5 text-center">Response will show below here</h3>
        <hr />
        {response.error ?
          <div>{response.error}</div> :
          response.data.map(responseText => {
            return <h3>{responseText}</h3>;
          })
        }
      </div>
    </div>


  </>
  );
}

export default App;
