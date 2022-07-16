import { Enquete } from '@prisma/client';
import express from 'express';
import { prisma } from './prisma';



export const routes = express.Router();


// Rotas de enquetes

routes.get('/enquetes', async (req, res) => {
  const resultado = await prisma.enquete.findMany()
  return res.send(resultado);
});


routes.get('/enquetes/registrada/:titulo', async (req, res) => {
  const resultado = await prisma.enquete.findUnique({
    where: {
      titulo: req.params.titulo,
    },
  })
  return res.send(resultado);

});


routes.get('/enquetes/iniciar', async(req, res) => {
  const resultado = await prisma.enquete.findMany();
  const hoje = new Date()
  const enquetesParaIniciar: Enquete[] = [];

  resultado.forEach(enquete => {
   if (hoje <= new Date(enquete.dataInicio)) enquetesParaIniciar.push(enquete)
  });


  return res.send(enquetesParaIniciar);
});

routes.get('/enquetes/iniciadas', async(req, res) => {
  const resultado = await prisma.enquete.findMany();
  const hoje = new Date()
  const enquetesIniciadas: Enquete[] = [];

  resultado.forEach(enquete => {
   if (hoje >= new Date(enquete.dataInicio) && hoje <= new Date(enquete.dataFim)) {
    enquetesIniciadas.push(enquete)
    console.log("caiu")
  }
  });


  return res.send(enquetesIniciadas);

});

routes.get('/enquetes/finalizadas', async(req, res) => {
  const resultado = await prisma.enquete.findMany();
  const hoje = new Date()
  const enquetesFinalizadas: Enquete[] = [];

  resultado.forEach(enquete => {
   if (hoje >= new Date(enquete.dataFim) && hoje >= new Date(enquete.dataInicio)) enquetesFinalizadas.push(enquete)
  });


  return res.send(enquetesFinalizadas);

});



routes.post('/enquetes', async (req, res) => {
  const { titulo, dataInicio, dataFim, opcoes } = req.body

  const novaDataInicio = new Date(dataInicio);
  novaDataInicio.setHours(novaDataInicio.getHours() + 3);
  
  const novaDataFim = new Date(dataFim);
  novaDataFim.setHours(novaDataFim.getHours() + 3);

  const resultado = await prisma.enquete.create({
    data: {
      titulo,
      dataInicio: novaDataInicio,
      dataFim: novaDataFim,
      opcoes: opcoes.join(";")
    }
  });

  return res.send({resultado});
});


routes.put('/enquetes', async (req, res) => {
  const { titulo, dataInicio, dataFim, opcoes } = req.body;

  const novaDataInicio = new Date(dataInicio);
  novaDataInicio.setHours(novaDataInicio.getHours() + 3);
  
  const novaDataFim = new Date(dataInicio);
  novaDataFim.setHours(novaDataFim.getHours() + 3);


  const resultado = await prisma.enquete.update({
    where: {
      titulo
    },
    data: {
      titulo,
      dataInicio: novaDataInicio,
      dataFim: novaDataFim,
      opcoes: opcoes.join(";")
    }
  })

  return res.send(resultado);
});

routes.delete('/enquetes/:titulo', async (req, res) => {
  const votosDeletados = await prisma.voto.deleteMany({
    where:{
      enqueteTitulo: req.params.titulo
    }
  });

  const resultado = await prisma.enquete.delete({
    where: {
      titulo: req.params.titulo,
    },
  })

  return res.send({ resultado, votosDeletados});
});


// Rotas de voto
routes.get('/voto/:opcao', async (req, res) => {
  const resultado = await prisma.voto.findUnique({
    where: {
      opcao: req.params.opcao,
    },
  })
  return res.send(resultado);
})

routes.get('/voto', async (req, res) => {
  const resultado = await prisma.voto.findMany();
  return res.send(resultado);
});


routes.post('/voto', async (req, res)=> {
  const {opcao, enqueteTitulo} = req.body;
  const resultado = await prisma.voto.create({
    data: {
      opcao,
      votos: 0,
      enqueteTitulo
    }
  });

  return res.send(resultado);
})

routes.put('/voto', async (req, res) => {
  const { opcao } = req.body;

  const voto = await prisma.voto.findUnique({
    where: {
      opcao
    },
  });

  const resultado = await prisma.voto.update({
    where: {
      opcao
    },
    data: {
      votos: Number(voto?.votos) + 1,
      opcao
    }
  }
  )

  return res.send(resultado);
})



routes.delete('/voto/:opcao', async (req, res) => {
  const resultado = await prisma.voto.delete({
    where: {
      opcao: req.params.opcao,
    },
  })

  return res.send({resultado});
});

