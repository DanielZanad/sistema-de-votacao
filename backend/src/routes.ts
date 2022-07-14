import express from 'express';
import { prisma } from './prisma';



export const routes = express.Router();


// Rotas de enquetes

routes.get('/enquetes', async (req, res) => {
  const resultado = await prisma.enquete.findMany()
  return res.send(resultado);
});

routes.get('/enquetes/:titulo', async (req, res) => {
  const resultado = await prisma.enquete.findUnique({
    where: {
      titulo: req.params.titulo,
    },
  })
  return res.send(resultado);

})


routes.post('/enquetes', async (req, res) => {
  const { titulo, dataInicio, dataFim, opcoes } = req.body

  const resultadoEnquete = await prisma.enquete.create({
    data: {
      titulo,
      dataInicio: new Date(dataInicio),
      dataFim: new Date(dataFim),
      opcoes: opcoes.join(";")
    }
  });

  const resultadoVoto = await prisma.voto.create({
    data: {
      votos: 0,
      enqueteTitulo: titulo
    }
  })
  return res.send({ resultadoEnquete, resultadoVoto });
});


routes.put('/enquetes', async (req, res) => {
  const { titulo, dataInicio, dataFim, opcoes } = req.body;

  const resultado = await prisma.enquete.update({
    where: {
      titulo
    },
    data: {
      titulo,
      dataInicio: new Date(dataInicio),
      dataFim: new Date(dataFim),
      opcoes: opcoes.join(";")
    }
  })

  return res.send(resultado);
});

routes.delete('/enquetes/:titulo', async (req, res) => {
  const resultadoVoto = await prisma.voto.delete({
    where: {
      enqueteTitulo: req.params.titulo,
    },
  })

  const resultadoEnquete = await prisma.enquete.delete({
    where: {
      titulo: req.params.titulo,
    },
  })

  return res.send({ resultadoEnquete, resultadoVoto });
});