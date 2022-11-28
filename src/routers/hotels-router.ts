import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotels, getRoomsWithHotelId } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter.all("/*", authenticateToken);
hotelsRouter.get("/", getHotels);
hotelsRouter.get("/:hotelId", getRoomsWithHotelId);

export { hotelsRouter };
