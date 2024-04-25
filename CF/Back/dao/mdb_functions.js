const Receita = require("../models/Receita");
 async function insertReceita() {
    try {
        const docs = [
            {titulo:"Pacoca cearense", 
            descricao:"Diferente da tradicional paçoca doce conhecida em outras regiões do Brasil, a paçoca cearense é um prato salgado feito com carne de sol desfiada, farinha de mandioca e temperos. É uma verdadeira delícia!",
            ingredientes: "1 e 1/2 kg de carne seca salgada (ou se não encontrar, salgue uma carne que você tenha e deixe-a ao sol por um dia).1 kg de farinha de mandioca.2 cebolas.Óleo de milho ou soja",
            preparo: "Corte a carne em cubos e lave-a em 3 ou 4 águas para retirada parcial do sal.Logo depois despeje água quente sobre ela, deixe por cerca de 5 minutos e retire a água.Em seguida, leve ao fogo em uma frigideira com óleo e, quando a carne estiver vermelha, jogue a cebola picada dentro dela (tendo cuidado para que a cebola não queime), deixe por aproximadamente 4 a 5 minutos, mexa bem e desligue o fogo.Em um liquidificador, coloque 2 colheres de carne com óleo e cebola, para 1 colher de farinha cessada, e bata assim sucessivamente até acabar a carne.",
            regiao: "ceara",
            img:"/img/pacoca.jpg"},
            {titulo:"canjica", 
            descricao:"delicia",
            ingredientes: "sal e barata",
            preparo: "bata o sal e barata",
            regiao: "fortaleza",
            img:"/img/canjica.jpg"
            },
            {titulo:"Moqueca Cearense", 
            descricao:" A moqueca é um prato típico da culinária brasileira, originário da região Nordeste do país. Sua origem remonta aos povos indígenas que habitavam a região, e eles já preparavam peixes e frutos do mar em panelas de barro. Com o passar dos anos, a receita foi aprimorada e ganhou novos ingredientes, como dendê e leite de coco",
            ingredientes: "Sal a gosto,pimenta-do-reino a gosto, 1,500g de postas de badejo,robalo ou namorado.Suco de 2 limões,Cheiro verde picado,5 tomates,2 cebolas,Suco de 6 cajus maduros ou 1 garrafa do suco,  4 colheres de sopa de azeite.",
            preparo: "Antes de iniciar a receita, limpe, lave, enxugue e tempere com sal, limão e pimenta do reino, as postas de peixe.Deixe pegar gosto por 1 hora.Unte com azeite, uma panela e coloque o peixe em camadas intercaladas com os tomates em rodelas, a cebola picada e o cheiro verde.Despeja o suco do caju, cobrindo todo o conteúdo da panela e leve ao fogo alto, com a panela tampada, por 12 minutos.Assim que estiver pronto, retire 1 xícara do caldo, junte 2 xícaras de água, em uma panela a parte e junte lentamente a farinha de mandioca, mexendo, até formar um pirão consistente",
            regiao: "ceara",
            img:"/img/moqueca-cearense"
            },
            {titulo:"canjica", 
            descricao:"delicia",
            ingredientes: "sal e barata",
            preparo: "bata o sal e barata",
            regiao: "fortaleza",
            img:"/img/canjica.jpg"
            },
            {titulo:"canjica", 
            descricao:"delicia",
            ingredientes: "sal e barata",
            preparo: "bata o sal e barata",
            regiao: "fortaleza",
            img:"/img/canjica.jpg"
            },
            {titulo:"canjica", 
            descricao:"delicia",
            ingredientes: "sal e barata",
            preparo: "bata o sal e barata",
            regiao: "fortaleza",
            img:"/img/canjica.jpg"
            },
            {titulo:"canjica", 
            descricao:"delicia",
            ingredientes: "sal e barata",
            preparo: "bata o sal e barata",
            regiao: "fortaleza",
            img:"/img/canjica.jpg"
            },        ];
      const check = await Receita.find({ titulo: { $in: docs.map(Receita => Receita.titulo) }});
      const checking = docs.filter(Receita  => !check.some(check => check.titulo === Receita.titulo));
      if (checking.length > 0) {
      await Receita.insertMany(checking);
      console.log("criada")
    } else {
    console.log("ja existe"); 
    }
    } catch (error) {
        console.error("Erro ocorreu a criar conta:", error);
    }
  }

  module.exports = insertReceita()