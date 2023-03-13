import { useState } from 'react';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape'

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSegundaria: '#d9f7e9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82cffa',
      corSegundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSegundaria: 'f0f8e2'
    },
    {
      nome: 'Dev-ops',
      corPrimaria: '#e06b69',
      corSegundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#d86ebf',
      corSegundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSegundaria: '#fff5d9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSegundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner /> 
      <Formulario times={times.map(time => time.nome)} aoCadastrarColaborador={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSegundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
