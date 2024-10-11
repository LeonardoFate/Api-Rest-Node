import { Router } from "express";
import {
  createProduct,
  DeleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controller/products.controller.js";

const router = Router();
router.get("/productos", getProducts);

router.get('/productos/:producto_id', getProduct);

router.post("/productos", createProduct);

router.put("/productos/:producto_id", updateProduct);

router.delete("/productos/:producto_id", DeleteProduct);

export default router;
