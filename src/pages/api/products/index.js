import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbconfig";
import {
  createAllProducts,
  getAllProducts,
} from "@/backend/controllers/productController";
import onError from "@/backend/middlewares/errors";

const router = createRouter();

dbConnect();

// router.post(createAllProducts);
router.get(getAllProducts);

export default router.handler({ onError });
