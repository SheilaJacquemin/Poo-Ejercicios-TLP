import { Component } from "react";

interface Mascota {
  nombre: string;
  nivelFelicidad: number;
}

class Simulacion extends Component<object, { mascotas: Mascota[]; nuevaMascota: Mascota }> {
  constructor(props: object) {
    super(props);
    this.state = {
      mascotas: [],
      nuevaMascota: {
        nombre: "",
        nivelFelicidad: 100,
      },
    };
  }

  agregarMascota = () => {
    this.setState((prevState) => ({
      mascotas: [...prevState.mascotas, this.state.nuevaMascota],
      nuevaMascota: {
        nombre: "",
        nivelFelicidad: 100,
      },
    }));
  };

  alimentarMascota = (index: number) => {
    const mascotas = [...this.state.mascotas];
    mascotas[index].nivelFelicidad += 10;
    this.setState({ mascotas });
  };

  jugarConMascota = (index: number) => {
    const mascotas = [...this.state.mascotas];
    mascotas[index].nivelFelicidad += 20;
    this.setState({ mascotas });
  };

  cuidarMascota = (index: number) => {
    const mascotas = [...this.state.mascotas];
    mascotas[index].nivelFelicidad -= 10;
    this.setState({ mascotas });
  };

  render() {
    return (
      <div>
        <h2>Simulación de Mascotas Virtuales</h2>
        <input
          type="text"
          placeholder="Nombre de la mascota"
          value={this.state.nuevaMascota.nombre}
          onChange={(e) =>
            this.setState({
              nuevaMascota: { ...this.state.nuevaMascota, nombre: e.target.value },
            })
          }
        />
        <button onClick={this.agregarMascota}>Agregar Mascota</button>
        <ul>
          {this.state.mascotas.map((mascota, index) => (
            <li key={index}>
              {mascota.nombre} - Felicidad: {mascota.nivelFelicidad}
              <button onClick={() => this.alimentarMascota(index)}>Alimentar</button>
              <button onClick={() => this.jugarConMascota(index)}>Jugar</button>
              <button onClick={() => this.cuidarMascota(index)}>Cuidar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Simulacion;
