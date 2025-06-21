import express from "express";
import {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware); // Apply to all below

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
