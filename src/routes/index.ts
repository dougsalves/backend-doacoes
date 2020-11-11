import { Router } from 'express';

import doadoresRoutes from './doadores.routes';
import doacoesRoutes from './doacoes.routes';

const routes = Router();

routes.use('/doadores', doadoresRoutes);
routes.use('/doacoes', doacoesRoutes);

export default routes;
