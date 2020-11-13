import { useState } from 'react';
const { default: Navbar } = require("./components/Navbar");


function App() {

  const [ todo, setTodo ] = useState([]);
  const [ data, setData ] = useState('');


  function onSubmit(e){
    e.preventDefault();
    if(data === '') return alert('VAZIO')
    setTodo([
      ...todo,
      data
    ])
    setData('')
  }


  return (
    <>
      <Navbar/>
      <div 
        class="jumbotron" 
        style={{
          display:"flex",
          justifyContent:"center"
      }}>
        <form 
          onSubmit={onSubmit} 
          style={{
            display:"flex",
            justifyContent:"center"
          }}
        >
          <input               
            type="text"
            style={{
              width:400
            }}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="TO DO"
            value={data}
            onChange={e => setData(e.target.value)}
            data-cy="input-task"
          />
          <button 
            className="btn btn-primary ml-1" 
            type="submit"
            data-cy="btn-add"
           >
            ADD
          </button>
        </form>
      </div>


      <div 
        style={{
          display:"flex",
          justifyContent:"center",
          padding:122,
          marginTop:0}}
      >
        <ul>
            {
              todo.map(item => <li key={item}>{item}</li>)
            }
        </ul>
      </div>
    </>
  );
}

export default App;
