const fs = require('fs');
const path = require('path');

const productosData = path.join(__dirname,'../data/productsDataBase.json');
const productos= JSON.parse(fs.readFileSync(productosData,'utf-8'));


const toThousand = n =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");


let mainController = {
	index: (req, res) => {
		res.render('index', {
			productosAMostrar: productos

		});
	},
	detail: (req, res) => {
		let category = req.params.category;
		let productoID = req.params.id;
		let productFind = null;

		productFind = productos.find(product => product.id == productoID);
		let precioNeto = productFind.price1 * (1 - (productFind.discount / 100));
		return res.render('products', {productFind,precioNeto,toThousand});
	},
};

module.exports = mainController;
