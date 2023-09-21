import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Lista from './components/Lista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudadao';

function App() {
  const nome = 'José';
  const meusItens = ['React', 'Vue', 'Angular'];
  const [name, setName] = useState();
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
      <Condicional />
      <h1>Renderização de Listas</h1>
      <Lista itens={meusItens} />
      <Lista itens={[]} />
      <h1>State Lift</h1>
      <SeuNome setName={setName}/>
      <Saudacao name={name} />
    </div>
  );
}

export default App;
