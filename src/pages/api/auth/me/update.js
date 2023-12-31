import { createRouter } from "next-connect";
import dbConnect from "@/backend/config/dbconfig";
import { updateUser } from "@/backend/controllers/userContoller";
import onError from "@/backend/middlewares/errors";
import multer from "multer";
import { isLoggedIN } from "@/backend/middlewares/auth";
import { resizeUserPhoto } from "@/backend/middlewares/resizeImage";
const router = createRouter();

export const config = {
  api: {
    bodyParser: false,
  },
};

dbConnect();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
});

const uploadMiddleware = upload.single("image");

router.use(isLoggedIN, uploadMiddleware, resizeUserPhoto).put(updateUser);

export default router.handler({ onError });
