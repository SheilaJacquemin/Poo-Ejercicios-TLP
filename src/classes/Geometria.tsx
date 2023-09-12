import { Component } from "react";

interface FiguraGeometrica {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class Circulo implements FiguraGeometrica {
  constructor(public radio: number) {}

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

class Rectangulo implements FiguraGeometrica {
  constructor(public ancho: number, public alto: number) {}

  calcularArea(): number {
    return this.ancho * this.alto;
  }

  calcularPerimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

class Triangulo implements FiguraGeometrica {
  constructor(public base: number, public altura: number) {}

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro(): number {
    // No se puede calcular el perímetro solo con la base y la altura, se necesita otro lado o información adicional.
    return -1;
  }
}

class Geometria extends Component {
  state = {
    figura: "circulo",
    radio: 0,
    ancho: 0,
    alto: 0,
    base: 0,
    altura: 0,
    resultado: 0,
  };

  calcular = () => {
    switch (this.state.figura) {
      case "circulo":
        // eslint-disable-next-line no-case-declarations
        const circulo = new Circulo(this.state.radio);
        this.setState({
          resultado: circulo.calcularArea(),
        });
        break;
      case "rectangulo":
        // eslint-disable-next-line no-case-declarations
        const rectangulo = new Rectangulo(this.state.ancho, this.state.alto);
        this.setState({
          resultado: rectangulo.calcularArea(),
        });
        break;
      case "triangulo":
        // eslint-disable-next-line no-case-declarations
        const triangulo = new Triangulo(this.state.base, this.state.altura);
        this.setState({
          resultado: triangulo.calcularArea(),
        });
        break;
      default:
        this.setState({
          resultado: 0,
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <h2>Calculadora de Geometría</h2>
        <select
          value={this.state.figura}
          onChange={(e) => this.setState({ figura: e.target.value })}
        >
          <option value="circulo">Círculo</option>
          <option value="rectangulo">Rectángulo</option>
          <option value="triangulo">Triángulo</option>
        </select>
        {this.state.figura === "circulo" && (
          <input
            type="number"
            placeholder="Radio"
            value={this.state.radio}
            onChange={(e) => this.setState({ radio: parseFloat(e.target.value) })}
          />
        )}
        {this.state.figura === "rectangulo" && (
          <div>
            <input
              type="number"
              placeholder="Ancho"
              value={this.state.ancho}
              onChange={(e) => this.setState({ ancho: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Alto"
              value={this.state.alto}
              onChange={(e) => this.setState({ alto: parseFloat(e.target.value) })}
            />
          </div>
        )}
        {this.state.figura === "triangulo" && (
          <div>
            <input
              type="number"
              placeholder="Base"
              value={this.state.base}
              onChange={(e) => this.setState({ base: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Altura"
              value={this.state.altura}
              onChange={(e) => this.setState({ altura: parseFloat(e.target.value) })}
            />
          </div>
        )}
        <button onClick={this.calcular}>Calcular</button>
        <p>Resultado: {this.state.resultado}</p>
      </div>
    );
  }
}

export default Geometria;
