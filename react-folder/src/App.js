import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const nome = 'José'
  return (
    <div className="App"> {/* maneira correta de adicionar uma "class" no React = "className" */}
      <HelloWorld />
      <Frase />
      <SayMyName nome='João'/>
      <SayMyName nome='Maria'/>
      <SayMyName nome={nome} />
      <Pessoa nome='João' idade='21' profissao='Programador' foto='https://via.placeholder.com/150'/>
      <List></List>
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
    </div>
  );
}

export default App;
