import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//  - Método HTTP
//  - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar recursos do back-end
// POST => Criar um recurso no back-end
// PUT => Editar recurso no back-end
// PATCH => Editar uma informação específica de um recurso no back-end
// DELETE => Remove um recurso no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criando usuário no back-end

// Stateful x Stateless

// Cabeçalho (requisição, resposta) => Metadados

// HTTP status code -> 200 , 201 , 404, 500 e etc...

// Query Parameters -> http://localhost:3333/users?userId=1&name=Bruce -> URL stateful => utilizados em filtros, paginação, não obrigatórios
// Route Parameters -> GET http://localhost:3333/users/1 -> Identificação de recurso =>
// Request Body: Envio de informações de um formulário (HTTPs)

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = req.url.match(route.path);

    req.params = { ...routeParams.groups };

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333, () => {
  console.log("Server is running");
});
