const express = require('express');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
const products = [
    { id: 1, name: 'Pencil', price: 10 },
    { id: 2, name: 'Eraser', price: 5 },
    { id: 3, name: 'Notebook', price: 15 }
];
app.get('/products', (req, res) => {
    res.render('product', { products });
});
app.post('/buy/:id', (req, res) => {
        const productId = parseInt(req.params.id);
        const product = products.find(p => p.id === productId);

        if (product) {
            res.send(`You have bought ${product.name} for $${product.price}`);
        } else {
            res.status(404).send('Product not found');
        }
}); 


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});