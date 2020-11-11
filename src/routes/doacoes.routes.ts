import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import DoacoesRepository from '../repositories/DoacoesRepository';
import CreateDoacaoService from '../services/CreateDoacaoService';

const doacoesRoutes = Router();

doacoesRoutes.get('/', (request, response) => {
  const doacoesRepository = getCustomRepository(DoacoesRepository);
  const doacoes = doacoesRepository.find();

  return response.json(doacoes);
});

doacoesRoutes.get('/:id_doador', (request, response) => {
  const doacoesRepository = getCustomRepository(DoacoesRepository);
  const doacoesDoador = doacoesRepository.findByDoador(request.params.id_doador);

  return response.json(doacoesDoador);
});

doacoesRoutes.post('/', async (request, response) => {
  const createDoacao = new CreateDoacaoService();

  const doacao = await createDoacao.execute();

  return response.json(doacao);
});

export default doacoesRoutes;
