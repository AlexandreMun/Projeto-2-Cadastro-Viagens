import { Router } from "express";
const routes = new Router();

import passageiros from "./app/controllers/passageirosController";
import viagens from "./app/controllers/viagemsController";

// Passageiros
routes.get("/passageiros/", passageiros.index);
routes.get("/passageiros/:id", passageiros.show);
routes.post("/passageiros/", passageiros.create);
routes.put("/passageiros/:id", passageiros.update);
routes.delete("/passageiros/:id", passageiros.delete);

// Viagens
routes.get("/viagens/", viagens.index);
routes.get("/viagens/:id", viagens.show);
routes.post("/viagens/", viagens.create);
routes.put("/viagens/:id", viagens.update);
routes.delete("/viagens/:id", viagens.delete);

// Viagens inativas
routes.get("/inativas/", viagens.inativas);

// Passageiros de uma viagem
routes.get("/viagem/passageiros/:viagem_id", viagens.indexPassageiros);

export default routes;
