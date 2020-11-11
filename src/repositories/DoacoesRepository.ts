import { EntityRepository, Repository } from 'typeorm';
import Doacoes from '../models/Doacoes';

@EntityRepository(Doacoes)
class DoacoesRepository extends Repository<Doacoes> {
  public async findByDoador(id_doador: string): Promise<Doacoes[] | null> {
    const findDoacoes = await this.find({
      where: { id_doador }
    });

    if (!findDoacoes) {
      return null
    } else {
      const doacoes: Doacoes[] = [];

      findDoacoes.map(doacao => {
        doacoes.push(doacao);
      });

      return doacoes
    }
  }

}

export default DoacoesRepository;
