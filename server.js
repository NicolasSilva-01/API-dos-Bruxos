import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;
const app = express();
app.use(express.json());

const serverPort = 3000;

app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando...");
});

app.get("/bruxos", (req, res) => {
  if (bruxos.length > 0) {
    res.status(200).json(bruxos);
  } else {
    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado!",
    });
  }
});

app.get("/casas", (req, res) => {
  if (casas.length > 0) {
    res.status(200).json(casas);
  } else {
    res.status(404).json({
      mensagem: "Nenhuma casa encontrada!",
    });
  }
});

app.get("/varinhas", (req, res) => {
  if (varinhas.length > 0) {
    res.status(200).json(varinhas);
  } else {
    res.status(404).json({
      mensagem: "Nenhuma varinha encontrada!",
    });
  }
});

app.get("/varinhas/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const varinha = varinhas.find((v) => v.id === id);
  if (varinha) {
    res.status(200).json(varinha);
  } else {
    res.status(404).json({
      mensagem: "varinha não encontrada",
    });
  }
});

app.get("/animais/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const animal = animais.find((v) => v.id === id);
  if (animal) {
    res.status(200).json(animal);
  } else {
    res.status(404).json({
      mensagem: "animal não encontrado",
    });
  }
});
app.get("/pocoes/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const pocao = pocoes.find((v) => v.id === id);
  if (pocao) {
    res.status(200).json(pocao);
  } else {
    res.status(404).json({
      mensagem: "poção não encontrada",
    });
  }
});

app.get("/animais", (req, res) => {
  if (animais.length > 0) {
    res.status(200).json(animais);
  } else {
    res.status(404).json({
      mensagem: "Nenhum animal encontrado!",
    });
  }
});
app.get("/pocoes", (req, res) => {
  if (pocoes.length > 0) {
    res.status(200).json(pocoes);
  } else {
    res.status(404).json({
      mensagem: "Nenhuma poção encontrada!",
    });
  }
});

app.listen(serverPort, () => {
  console.log(`Servidor rodando em http://localhost:${serverPort} !!!`);
});
