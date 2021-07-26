import "./database";

import Passageiro from "./app/models/Passageiro";
import Viagem from "./app/models/Viagem";

class Playground {
  static async play() {
    // Passageiros
    // SHOW ALL
    // const passageiros = await Passageiro.findAll();

    // CREATE
    // const passageiros = await Passageiro.create({
    //   nome: "Marcio",
    //   cpf: "06577714993",
    //   endereco: "Lugar",
    //   telefone: "999999999",
    //   email: "m@email.com",
    //   created_at: "2021-08-07 13:00:00-03",
    //   updated_at: "2021-08-07 13:00:00-03",
    // });

    // UPDATE
    // const passageiros = await Passageiro.findByPk(5);
    // const alterar = await passageiros.update({
    //   cpf: "06577714999",
    // });

    // DELETE
    // const passageiros = await Passageiro.findByPk(5);
    // passageiros.destroy()

    // console.log
    // console.log(JSON.stringify(passageiros, null, 2));
    // ---------------------------------------------------------

    // Viagens
    
    // ---------------------------------------------------------
  }
}

Playground.play();
