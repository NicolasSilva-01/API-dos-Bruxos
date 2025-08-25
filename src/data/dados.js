// Criei bruxos e exportei ele
const bruxos = [
    {
      id: 1,
      nome: "Harry Potter",
      ano: 7,
      varinha: "Azevinho e pena de fenix, 28cm",
      mascote: "Coruja",
      patrono: "Cervo",
      especialidade: "sobreviver",
      vivo: false
    },
    {
      id: 2,
      nome: "Hermione Granger",
      casa: "Grifinória",
      ano: 7,
      varinha: "Videira e fibra de dragão, 27cm",
      mascote: "Gato (Bichento)",
      patrono: "Lontra",
      especialidade: "Magia avançada 🧙‍♀️",
      vivo: true
    }
 ];
  const casas = [
        {
          id: 1,
          nome: "Grifinória",
          fundador: "Godric Gryffindor",
          cores: "Vermelho e Dourado",
          animal: "Leao"
        },
        {
          id: 2,
          nome: "Sonserina",
          fundador: "Salazar Slytherin",
          cores: "Verde e Prata",
          animal: "Serpente"
        },
        {
          id: 3,
          nome: "Corvinal",
          fundadora: "Rowena Ravenclaw",
          cores: "Azul e Bronze",
          animal: "Águia"
        },
        {
          id: 4,
          nome: "Lufa-Lufa",
          fundadora: "Helga Hufflepuff",
          cores: "Amarelo e Preto",
          animal: "Texugo"
        }
      ];
      const varinhas = [
        {
            id: 1,
            material: "Azevinho",
            núcleo: "Pena de Fênix",
            comprimento: "28cm"
        },
        {
            id: 2,
            material: "Videira",
            núcleo: "Fibra de Coração de Dragão",
            comprimento: "27cm"
        },
        {
            id: 3,
            material: "Salgueiro",
            núcleo: "Pelo de Unicórnio",
            comprimento: "35cm"
        },
        {
            id: 4,
            material: "Carvalho Inglês",
            núcleo: "Pelo de Testrálio",
            comprimento: "32cm"
        }
          ];
          const animais = [
                    {
                      id: 1,
                      nome: "Coruja",
                      tipo: "Correio/Companhia",
                    },
                    {
                      id: 2,
                      nome: "Gato",
                      tipo: "Companhia",
                    },
                    {
                      id: 3,
                      nome: "Sapo",
                      tipo: "Companhia",
                    },
                    {
                      id: 4,
                      nome: "Rato",
                      tipo: "Companhia",
                    }
              ];
              const pocoes = [
                {
                  id: 1,
                  nome: "Polissuco",
                  efeito: "Transforma na aparência de outra pessoa"
                },
                {
                  id: 2,
                  nome: "Felix Felicis",
                  efeito: "Sorte temporária"
                },
                {
                  id: 3,
                  nome: "Amortentia",
                  efeito: "Poção do amor"
                },
                {
                  id: 4,
                  nome: "Veritaserum",
                  efeito: "Força a dizer a verdade"
                }
                 ];

  export default { bruxos, casas, varinhas, animais, pocoes };
