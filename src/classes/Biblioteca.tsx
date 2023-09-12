import { Component } from "react";

interface Libro {
  titulo: string;
  autor: string;
  prestado: boolean;
}

class Biblioteca extends Component<object, { libros: Libro[]; nuevoLibro: Libro }> {
  constructor(props: object) {
    super(props);
    this.state = {
      libros: [],
      nuevoLibro: {
        titulo: "",
        autor: "",
        prestado: false,
      },
    };
  }

  agregarLibro = () => {
    this.setState((prevState) => ({
      libros: [...prevState.libros, this.state.nuevoLibro],
      nuevoLibro: {
        titulo: "",
        autor: "",
        prestado: false,
      },
    }));
  };

  prestarLibro = (index: number) => {
    const libros = [...this.state.libros];
    libros[index].prestado = true;
    this.setState({ libros });
  };

  devolverLibro = (index: number) => {
    const libros = [...this.state.libros];
    libros[index].prestado = false;
    this.setState({ libros });
  };

  render() {
    return (
      <div>
        <h2>Biblioteca Virtual</h2>
        <input
          type="text"
          placeholder="Título del libro"
          value={this.state.nuevoLibro.titulo}
          onChange={(e) =>
            this.setState({
              nuevoLibro: { ...this.state.nuevoLibro, titulo: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Autor del libro"
          value={this.state.nuevoLibro.autor}
          onChange={(e) =>
            this.setState({
              nuevoLibro: { ...this.state.nuevoLibro, autor: e.target.value },
            })
          }
        />
        <button onClick={this.agregarLibro}>Agregar</button>
        <ul>
          {this.state.libros.map((libro, index) => (
            <li key={index}>
              {libro.titulo} - {libro.autor}{" "}
              {libro.prestado ? (
                <button onClick={() => this.devolverLibro(index)}>Devolver</button>
              ) : (
                <button onClick={() => this.prestarLibro(index)}>Prestar</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Biblioteca;
