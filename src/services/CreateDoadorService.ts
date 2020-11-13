import { getRepository } from 'typeorm';

import Doadores from '../models/Doadores';
import DoadorEnderecos from '../models/DoadorEnderecos';
import DoadorTelefones from '../models/DoadorTelefones';

interface TelefonesDTO {
  numero: number,
  operadora: string,
  id_doador: string,
}

interface DoadoresDTO {
  nome: string,
  email: string,
  telefones: TelefonesDTO[],
}

class CreateDoadorService {
  public async execute({nome, email, telefones}: DoadoresDTO): Promise<Doadores> {
    const doadoresRepository = getRepository(Doadores);
    const enderecosRepository = getRepository(DoadorEnderecos);
    const telefonesRepository = getRepository(DoadorTelefones);

    const doador = doadoresRepository.create({
      nome,
      email,
    });

    const { id_doador } = await doadoresRepository.save(doador);

    const telefonesDoador = telefones.map(telefone => [
      telefone.numero,
      telefone.operadora,
      id_doador,
    ]);

    return doador;
  }
}

export default CreateDoadorService;