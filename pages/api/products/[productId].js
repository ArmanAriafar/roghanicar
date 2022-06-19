import { data } from "../../../data/db";
export default function handler(req, res) {
    const { productId } = req.query;
    const product = data.find((product) => product.id === parseInt(productId));
    res.status(200).json(product);
}
