import { Component } from "react";

interface Contacto {
  nombre: string;
  correoElectronico: string;
  numeroTelefono: string;
}

class GestorContactos extends Component<object, { contactos: Contacto[]; nuevoContacto: Contacto }> {
  constructor(props: object) {
    super(props);
    this.state = {
      contactos: [], // Inicializamos contactos como un array vacío
      nuevoContacto: {
        nombre: "",
        correoElectronico: "",
        numeroTelefono: "",
      },
    };
  }

  agregarContacto = () => {
    this.setState((prevState) => ({
      contactos: [...prevState.contactos, this.state.nuevoContacto],
      nuevoContacto: {
        nombre: "",
        correoElectronico: "",
        numeroTelefono: "",
      },
    }));
  };

  buscarContacto = () => {
    // Realizar alguna acción con los contactos encontrados (por ejemplo, mostrarlos)
  }

  render() {
    return (
      <div>
        <h2>Gestor de Contactos</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={this.state.nuevoContacto.nombre}
          onChange={(e) =>
            this.setState({
              nuevoContacto: { ...this.state.nuevoContacto, nombre: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Correo Electrónico"
          value={this.state.nuevoContacto.correoElectronico}
          onChange={(e) =>
            this.setState({
              nuevoContacto: {
                ...this.state.nuevoContacto,
                correoElectronico: e.target.value,
              },
            })
          }
        />
        <input
          type="text"
          placeholder="Número de Teléfono"
          value={this.state.nuevoContacto.numeroTelefono}
          onChange={(e) =>
            this.setState({
              nuevoContacto: {
                ...this.state.nuevoContacto,
                numeroTelefono: e.target.value,
              },
            })
          }
        />
        <button onClick={this.agregarContacto}>Agregar Contacto</button>
        <input
          type="text"
          placeholder="Buscar por nombre"
          onChange={() => this.buscarContacto()}
        />
        <ul>
          {this.state.contactos.map((contacto, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {contacto.nombre}<br />
              <strong>Correo Electrónico:</strong> {contacto.correoElectronico}<br />
              <strong>Número de Teléfono:</strong> {contacto.numeroTelefono}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GestorContactos;
