import { Component } from "react";

interface Tarea {
  nombre: string;
  fechaVencimiento: string;
  completada: boolean;
}

class TodoList extends Component<object, { tareas: Tarea[]; nuevaTarea: Tarea }> {
  constructor(props: object) {
    super(props);
    this.state = {
      tareas: [],
      nuevaTarea: {
        nombre: "",
        fechaVencimiento: "",
        completada: false,
      },
    };
  }

  agregarTarea = () => {
    this.setState((prevState) => ({
      tareas: [...prevState.tareas, this.state.nuevaTarea],
      nuevaTarea: {
        nombre: "",
        fechaVencimiento: "",
        completada: false,
      },
    }));
  };

  completarTarea = (index: number) => {
    const tareas = [...this.state.tareas];
    tareas[index].completada = !tareas[index].completada;
    this.setState({ tareas });
  };

  eliminarTarea = (index: number) => {
    const tareas = [...this.state.tareas];
    tareas.splice(index, 1);
    this.setState({ tareas });
  };

  render() {
    return (
      <div>
        <h2>Lista de Tareas</h2>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={this.state.nuevaTarea.nombre}
          onChange={(e) =>
            this.setState({
              nuevaTarea: { ...this.state.nuevaTarea, nombre: e.target.value },
            })
          }
        />
        <input
          type="date"
          value={this.state.nuevaTarea.fechaVencimiento}
          onChange={(e) =>
            this.setState({
              nuevaTarea: {
                ...this.state.nuevaTarea,
                fechaVencimiento: e.target.value,
              },
            })
          }
        />
        <button onClick={this.agregarTarea}>Agregar</button>
        <ul>
          {this.state.tareas.map((tarea, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => this.completarTarea(index)}
              />
              {tarea.nombre} - Vence el {tarea.fechaVencimiento}
              <button onClick={() => this.eliminarTarea(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
