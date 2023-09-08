import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'José'
  return (
    <div className="App"> {/* maneira correta de adicionar uma "class" no React = "className" */}
      <HelloWorld />
      <SayMyName nome='João'/>
      <SayMyName nome='Maria'/>
      <SayMyName nome={nome} />
      <Pessoa nome='João' idade='21' profissao='Programador' foto='https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
