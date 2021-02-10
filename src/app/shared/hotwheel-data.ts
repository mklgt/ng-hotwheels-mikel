import { InMemoryDbService } from 'angular-in-memory-web-api';

export class HotWheelData implements InMemoryDbService {

  createDb() {
    let hotwheels = [
      {
        "id": 0,
        "nombre": "Toyota Supra",
        "price": 24.99,
        "description": "Toda la esencia GR Supra. Con un nuevo corazón de 2.0 litros de cilindrada y 258CV al eje trasero, un afinado bastidor y un diseño inspirador, GR Supra Pure es el heredero de más de 50 años de Leyenda.",
        "image": "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/es/product-token/c64b74e2-5f36-4b5a-bd97-0fe8faf61e25/vehicle/38e90bb0-6525-4a67-9451-ef840c6cdc42/image-quality/70/day-exterior-4_d06.png"
      },
      {
        "id": 1,
        "nombre": "Ferrari Enzo",
        "price": 29.99,
        "description": " automóvil superdeportivo Berlinetta de 2 puertas diédricas biplaza, producido por el fabricante de automóviles italiano Ferrari entre los años 2002 y 2004.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/82/SC06_2003_Enzo_Ferrari_2.jpg"
      },
      {
        "id": 2,
        "nombre": "Audi A4",
        "price": 26.89,
        "description": "Potente, dinámico y más atractivo que nunca. El Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.",
        "image": "https://www.audi.es/content/dam/nemo/models/a4/a4-limousine/my-2020/1920-stage/1920x600_AA4_L_191004-3_v2.jpg?output-format=webp&downsize=1439px:*"
      },
    ];
    return { hotwheels: hotwheels };
  }
}
