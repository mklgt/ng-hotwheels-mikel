var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Hotwheel = /** @class */ (function () {
    function Hotwheel(id, nombre, description, image, price) {
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.image = image;
        this.price = price;
    }
    return Hotwheel;
}());
var hotwheels = [
    {
        "id": 0,
        "nombre": "Toyota Supra",
        "description": "Toda la esencia GR Supra. Con un nuevo corazón de 2.0 litros de cilindrada y 258CV al eje trasero, un afinado bastidor y un diseño inspirador, GR Supra Pure es el heredero de más de 50 años de Leyenda.",
        "image": "https://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/es/product-token/c64b74e2-5f36-4b5a-bd97-0fe8faf61e25/vehicle/38e90bb0-6525-4a67-9451-ef840c6cdc42/image-quality/70/day-exterior-4_d06.png",
        "price": 24.99
    },
    {
        "id": 1,
        "nombre": "Ferrari Enzo",
        "description": " automóvil superdeportivo Berlinetta de 2 puertas diédricas biplaza, producido por el fabricante de automóviles italiano Ferrari entre los años 2002 y 2004.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/82/SC06_2003_Enzo_Ferrari_2.jpg",
        "price": 29.99
    },
    {
        "id": 2,
        "nombre": "Audi A4",
        "description": "Potente, dinámico y más atractivo que nunca. El Audi A4 sorprende por su nuevo lenguaje de diseño, ampliamente renovado por dentro y por fuera.",
        "image": "https://www.audi.es/content/dam/nemo/models/a4/a4-limousine/my-2020/1920-stage/1920x600_AA4_L_191004-3_v2.jpg?output-format=webp&downsize=1439px:*",
        "price": 26.89
    },
];
function getHotWheels() {
    return hotwheels;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/hotwheels', bodyParser.json(), function (req, res) {
    var carNew = new Hotwheel(hotwheels.length + 1, req.body.nombre, req.body.description, req.body.image, req.body.price);
    hotwheels.push(carNew);
    res.status(200).send({
        id: carNew.id,
        nombre: carNew.nombre,
        description: carNew.description,
        image: carNew.image,
        price: carNew.price
    });
});
app.get('/', function (req, res) {
    res.send('The URL of hotwheels is http://localhost:8000/hotwheels');
});
app.get('/hotwheels', function (req, res) {
    res.json(getHotWheels());
});
function getHotWheelById(carId) {
    var h;
    h = hotwheels.find(function (p) { return p.id == carId; });
    return h;
}
app.get('/hotwheels/:id', function (req, res) {
    res.json(getHotWheelById(parseInt(req.params.id)));
});
function updateHotWheelsById(req, carId) {
    var h;
    h = hotwheels.find(function (h) { return h.id == carId; });
    var index = hotwheels.indexOf(h);
    h.nombre = req.body.nombre,
        h.description = req.body.description,
        h.images = req.body.images,
        h.price = req.body.price,
        hotwheels[index] = h;
    return h;
}
app.put('/hotwheels/:id', function (req, res) {
    res.json(updateHotWheelsById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteHotWheelsById(carId) {
    var h;
    h = hotwheels.find(function (h) { return h.id == carId; });
    var index = hotwheels.indexOf(h);
    delete hotwheels[index];
    return h;
}
app["delete"]('/hotwheels/:id', function (req, res) {
    res.json(deleteHotWheelsById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
