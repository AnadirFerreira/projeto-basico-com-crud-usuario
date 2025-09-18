import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import { CriarPedidoController } from "../controllers/pedido/criar-pedido";

export default (router: Router): void => {
    router.post("/pedidos/", adaptRoute(new CriarPedidoController()));
};