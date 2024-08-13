import { Router } from "express";
import { list } from "../services/list";


const router: Router = Router();

router.get('/', list);

export default router;