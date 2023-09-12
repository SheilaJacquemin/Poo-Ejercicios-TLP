import { useState } from 'react'
import './App.css'
import Biblioteca from './classes/Biblioteca.tsx';
import Geometria from './classes/Geometria.tsx';
import GestorContactos from './classes/GestorContactos.tsx';
import Simulacion from './classes/Simulacion.tsx';
import TodoList from './classes/TodoList.tsx'; 


const App: React.FC = () => {
  const [componenteActual, setComponenteActual] = useState<string | null>(null);

  const mostrarComponente = (componente: string) => {
    setComponenteActual(componente);
  };

  return (
    <div>
      <h1>APP DE EJERCICIOS</h1>
      <div>
        <button onClick={() => mostrarComponente('tareas')}>Lista de Tareas</button>
        <button onClick={() => mostrarComponente('geometria')}>Calculadora de Geometría</button>
        <button onClick={() => mostrarComponente('biblioteca')}>Biblioteca Virtual</button>
        <button onClick={() => mostrarComponente('mascotas')}>Simulación de Mascotas</button>
        <button onClick={() => mostrarComponente('gestorcontactos')}>Gestor de Contactos</button>
      </div>

      {componenteActual === 'tareas' && <TodoList />}
      {componenteActual === 'geometria' && <Geometria />}
      {componenteActual === 'biblioteca' && <Biblioteca />}
      {componenteActual === 'mascotas' && <Simulacion />}
      {componenteActual === 'gestorcontactos' && <GestorContactos />}
    </div>
  );
};

export default App;
