const Receita = require("../models/Receita");
 /*async function insertReceita() {
    try {
        const docs = [
            {titulo:"Tapioca redonda", 
            descricao:" A tapioca, especialmente popular no Norte e Nordeste do Brasil, é derivada da mandioca, uma planta nativa da América do Sul. Os povos indígenas da região já utilizavam a mandioca há séculos para produzir a goma que forma a base da tapioca.A tapioca redonda, como é conhecida em Fortaleza, é uma variação dessa preparação tradicional, ela é gordinha e feita em forma redonda, feita com ingredientes como, leite de coco, leite condensado, queijo coalho e manteiga de garrafa. ",
            ingredientes: "1/2 kg fécula de mandioca. Sal a gosto. 1/2 litro de água. 1 lata de leite condensando",
            preparo: "Primeiro coloque meio kg fécula em leio litro de água em uma vasilha com um pouco de sal, deixe assentar de um dia pro outro. Retire a água por completo. Com uma colher retire a massa e esfregando na mão até virar uma farinha. Em uma frigideira sem nada, peneire um punhado de farinha (goma), não é preciso fritar, nem deixar muito tempo, (o ponto é parecido com uma panqueca) com uma colher vire do outro lado. Recheio com leite condensado, manteiga ou a seu gosto.",
            regiao: "Metropolitana",
            img:"/img/redondata.jpg"
            
            }, 
            {titulo:"Caranguejada", 
              descricao:"  A Quinta do Caranguejo surgiu por volta de 1990,amalgamou-se ao cotidiano da cidade. Antes disso, o consumo do produto era associado aos finais de semana nas praias. A caranguejada adentrou esta noite, tornou-se circunstância e compôs uma movimentação comercial que perdura até hoje Em 1995, a Quinta do Caranguejo era uma realidade. Além do Chico do Caranguejo, Subindo ao Céu e Itapariká também constavam na preferência do público. Nesse dia, a Praia do Futuro quintava unindo turistas e boêmios que iniciavam o fim de semana mais cedo..",
              ingredientes: "2 cebolas picadas,10 dentes de alho espremidos,Óleo ou azeite de oliva,Suco de 1 limão,Sal e cheiro-verde picado a gosto,1 cubo de caldo de carne, 1 colher(sopa) de aguardente, 25 caranguejos vivos",
              preparo: "Em um caldeirão ou panela grande, refogue a cebola e o alho em um pouco de óleo ou azeite até dourar. Adicione bastante água (uns 5 litros) e os demais ingredientes, exceto os caranguejos, e deixe ferver.Enquanto isso, limpe os caranguejos com uma escovinha sob água corrente. Despeje-os vivos na panela de água fervente e deixe cozinhar de 5 a 10 minutos ou até estarem macios (experimente uma patinha).",
              regiao: "Metropolitana",
              img:"/img/caranguejada-1.jpeg"},

            {titulo:"Filé de pescada frito", 
                descricao:"Inaugurado na década de 60, o Mercado dos Peixes de Fortaleza veio como uma facilitação para os pescadores da região. Nessa época, no final da Avenida Beira Mar existia uma colônia de pescadores muito grande – alguns poucos ainda mantêm as suas residências no local, um pouco isolados devido aos grandes prédios que foram construídos na área.Para ajudar no comércio de peixes e frutos do mar e, para que esse não acontece em vias públicas, a prefeitura da capital construiu pequenos boxes e os distribuiu entre os pescadores.  ",
                preparo: "Tempere o peixe com sal, pimenta seca e limão, deixe descansar por 10 minutos.Depois passe o peixe no trigo e deixe secar.Após coloque a frigideira para aquecer com óleo bem quente.Coloque bem devagar 1 por 1 e deixe ficar bem crocante.",
                ingredientes: "1/2 kg filé de peixe dourado (ou a gosto).Sal a gosto.Limão (a gosto).2 colheres de trigo.Pimenta seca (a gosto).Óleo",
                regiao: "Metropolitana",
                img:"/img/peixefrito.jpg" 
            },
            
            {titulo:"Baião de dois", 
              descricao:"A origem do Baião de Dois remonta ao sertão nordestino, onde os ingredientes básicos eram essenciais na alimentação dos trabalhadores rurais. A necessidade de uma comida sustentável, capaz de fornecer energia para longas jornadas de trabalho, levou à união do arroz e do feijão, complementados por carnes secas ou defumadas disponíveis na região.",
              preparo: "Em uma panela, em fogo médio, derreta a manteiga e frite o bacon até dourar. Junte a calabresa, a cebola, o alho e refogue por 3 minutos. Junte o arroz e o feijão e refogue, mexendo por 2 minutos. Tempere com sal, pimenta e salsa. Retire do fogo, misture o queijo, coloque em uma travessa e sirva em seguida.",
              ingredientes: "3 colheres (sopa) de manteiga.1 xícara (chá) de bacon em cubos.1 gomo de linguiça calabresa em cubos.1 cebola picada.2 dentes de alho amassados.3 xícaras (chá) de arroz branco cozido.1 xícara (chá) de feijão-fradinho cozido com o caldo.Sal, pimenta-do-reino e salsa picada a gosto.1 xícara (chá) de queijo coalho em cubos",
              regiao: "Sertões",
              img:"/img/baiao-dois-1-350x230.jpg" 
          },
          {titulo:"Buchada de bode", 
            descricao:"Originária do Nordeste do Brasil, esse prato tem suas raízes na culinária sertaneja, onde o aproveitamento integral do animal é uma prática comum. Tradicionalmente feita com as vísceras do bode, como o estômago, rins, fígado e intestinos, a Buchada de Bode reflete a criatividade e a habilidade dos cozinheiros locais em transformar ingredientes simples em pratos de sabor marcante. Esse prato não apenas alimenta, mas também conta histórias sobre a vida rural e a conexão profunda com a terra e seus recursos.",
            preparo: "Limpe bem o bucho, coloque em uma panela e cubra com água.Lave bem a laranja, corte ao meio, retire as sementes e coloque na panela com a dobradinha.Cozinhe por vinte minutos depois que começar a ferver.Escorra bem, lave com água fria e reserve.Em uma panela de pressão, coloque azeite, a cebola, o alho e deixe dar uma leve dourada.Adicione o tomate, o pimentão e refogue por alguns minutos.Acrescente a dobradinha, o sal, o açafrão, a pimenta, a páprica, as folhas de louro e refogue por dez minutos.Cubra com água, tampe a panela e assim que pegar pressão, conte trinta minutos.Finalize com cheiro-verde",
            ingredientes: "1 bucho de bode.1 laranja. Azeite a gosto1 cebola. 3 dentes de alho. 1 tomate. 1 pimentão. Sal a gosto. Açafrão a gosto. Pimenta-calabresa a gosto. Páprica picante a gosto. Folhas de louro a gosto. Cheiro-verde a gosto",
            regiao: "Sertões",
            img:"/img/buchada.png" 
        },
        {titulo:"Cuscuz cearense", 
          descricao:"O cuscuz cearense é um prato tradicional da culinária do Ceará, no Nordeste do Brasil. Esse tipo de cuscuz é feito principalmente de milho ou farinha de milho, um alimento básico na dieta cearense, resistente a condicoes climáticas desafiadoras, barato, nutritivo e sinal de resistência sertaneja sendo muito consumido nos sertões preparado de uma maneira que se tornou uma marca registrada da região. costuma ser temperado somente com sal, acompanhado com queijo ou carne",
          preparo: "Em uma tigela misture o sal, a água e os flocos de milho formando uma farofa úmida. Deixe descansar por 15min. Coloque a mistura em uma cuscuzeira ou em uma panela à vapor. Alise a parte de cima (não é preciso apertar). Tampe a cuscuzeira e leve ao fogo baixo por 15min. Transfira o cuscuz para um prato. Sirva quente com manteiga e ovos.",
          ingredientes: "250ml de água.1 colher (chá) de  sal.250g de flocos de milho",
          regiao: "Sertões",
          img:"/img/cuscux.jpg" 
      },
      {titulo:"Galinha à cabidela", 
        descricao:"Herança portuguesa A galinha cabidela é um prato tradicional brasileiro, especialmente popular nas regiões do Nordeste, e muito consumido no noroeste cearense. Este prato é conhecido pela sua preparação única, onde o frango é cozido no seu próprio sangue, o que lhe confere um sabor rico e distinto",
        preparo: "Cortar a galinha em pedaços.Retirar a pele da galinha, colocar na panela, dar uma fervida e escorrer a água.Temperar com todos os ingredientes exceto o sangue.Colocar na panela em fogo medio por 30 minutos.Depois de 30 minutos, peneirar o sangue e colocar 1 colher de sopa de maizena, misturar e colocar na panela.Mexer bem e deixar cozinhar por mais 5 minutos, depois servir.",
        ingredientes: "1 copo americano de sangue de galinha fresco. 1 galinha inteira mais ou menos 2kg. 1 cebola inteira (média). 3 dentes de alho. 1 maco de heiro-verde. 1 maço de cheiro verde. 1 colher de sopa de colorau sem sal. Sal a gosto. 2 xícaras (chá) de água. 1 colher de sopa de maizena. 1 colher de sopa de óleo. 1/2 pimentão. 1/2 tomate",
        regiao: "Noroeste",
        img:"/img/cabidela.jpg" 
    },
    {titulo:"Mugunzá doce", 
      descricao:"Essa variacao de mungunzá que é mais consumida na região noroeste,Essa deliciosa iguaria é uma tradição brasileira que tem sua origem na África. Os escravos trouxeram a receita para o Brasil durante o período colonial e, desde então, o mungunzá se tornou um prato típico em diversas regiões do país.",
      preparo: "Deixe o milho de molho de um dia para o outro. Com a mesma agua do molho, leve-o ao fogo em panela de pressão por uns 40 minutos. Após o milho cozido acrescente o leite de gado. Coloque o leite condensado, o leite de coco e por ultimo o coco ralado, mexendo bem após cada ingrediente adicionado. Deixe em fogo baixo até que levante fervura. Apague o fogo e sirva. Se desejar polvilhe com canela em pó ou misture canela em pau junto com os outros ingredientes. Pode também usar o coco e o leite do mesmo fresco ou industrializado com os dois fica super saboroso.",
      ingredientes: "2 xícaras de chá de milho amarelo para mugunzá. 2 litros de água. 500 ml de leite de gado. 2 latas de leite condensado. 200 g de leite de coco. 100 g de coco ralado",
       regiao: "Noroeste",
      img:"/img/mungunza.jpg" 
  },
  {titulo:"Bolinho de Mandioca", 
    descricao:"A mandioca, também chamada de macaxeira ou aipim, é um dos alimentos mais importantes e versáteis na dieta brasileira, especialmente nas regiões norte e nordeste. No noroeste do Ceará, a mandioca é cultivada há séculos, sendo uma das principais fontes de sustento para as famílias rurais. O processo de transformação da mandioca em farinha e polvilho é artesanal e envolve técnicas transmitidas de geração em geração.",
    preparo: "Misture a mandioca, o ovo, a margarina, o queijo parmesão e o sal. Vá adicionando a farinha de trigo aos poucos até ficar uma massa firme. Pegue porções de massa e recheie com a carne. Feche bem e coloque em uma assadeira antiaderente untada com óleo. Leve ao forno quente (200ºC) por cerca de 30 minutos, até dourar bem.",
    ingredientes: "1 pitada de sal. 2 colheres (sopa) de queijo ralado. 1/2 xícara (chá) de farinha de trigo. 1 colher (sopa) de margarina. 1 unidade de ovo. 1 xícara (chá) de mandioca cozida e amassa. 1 unidade de cebola picada. 200 g de carne moída. 1 dente de alho amassado. 2 colheres (sopa) de molho de tomate. 1 pitada de sal. 1 colher (sopa) de farinha de trigo. 1. Doure a carne moída em uma panela antiaderente. Junte a cebola, o alho, o molho de tomates e o sal. Regue com cerca de 4 colheres (sopa) de água e deixe cozinhar por 10 minutos. Polvilhe a farinha de trigo e mexa até dar liga. Retire do fogo e espere esfriar.",
    regiao: "Noroeste",
    img:"/img/bolinho-de-mandioca-840x480.jpeg" 
},
{titulo:"Bolo de Mandioca Crua", 
  descricao:"No cariri, um dos maiores produtores de mandioca em solo cearense, se consume muitos alimentos a base desse produto, aproveitando os recursos locais, como o bolo de mandioca crua. Uma sobremesa com sabor e texturas únicos",
  preparo: "Rale a mandioca crua, coloque em um pano e esprema bem para tirar o leite. Esfarele a massa. Numa outra vasilha, misture o açúcar, a manteiga, as gemas, o queijo ralado, o sal, o leite e a mandioca. Bata as claras em neve e misture, colocando por último o fermento em pó. Leve ao forno em forma untada e polvilhada.",
  ingredientes: "3 xícaras (chá) de mandioca. 2 xícaras (chá) de açúcar. 3 colheres (sopa) de manteiga. 3 unidades de ovo. 1/2 xícara (chá) de queijo ralado. 2 colheres (chá) de sal. 1/2 xícara (chá) de leite. 1 colher (sopa) de fermento químico em pó",
  regiao: "Centro-sul",
  img:"/img/bolo-de-mandioca-3-840x480.jpeg" 
},
{titulo:"Arroz de charque", 
  descricao:"A charque, ou carne-seca, é uma técnica de preservação da carne muito utilizada no Nordeste brasileiro. Em regiões com escassez de chuvas e muito secos . No Centro-Sul do Ceará, essa prática se consolidou com a expansão da pecuária no sertão, onde a carne de sol e a charque tornaram-se essenciais para a dieta local. Comido com arroz ele se torna um prato nutritivo e que sustenta famílias.",
  preparo: "Lave a carne e deixe de molho em àgua fria por 12 horas. Escorra, corte em cubinhos e leve pra cozinhar por 20 min. Acrescente o òleo a cebola os tomates e a pimenta deixe fritar bem. Quando estiver bem frito acrescente o arroz e a água. Prove o sal, se for presiso acrescente mais. Deixe secar bem a àgua e quando estiver pronto acrescente o tempero verde. Prato tipicamente Gaúcho.",
  ingredientes: "500 g de charque (carne seca). 1 e 1/2 xícara de arroz.3 xícaras de água. 5 colheres (sopa) de óleo. 1 cebola picada. 2 tomates. Pimenta do reino a gosto. Sal. Tempero verde a gosto",
  regiao: "Centro-sul",
  img:"/img/arrozdecharque.webp" 
},
{titulo:"Cuscuz de macaxeira", 
  descricao:"A combinacao entre um alimento muito consumido no Nordeste como o cuscuz e a mandioca, produzida em massa no centro-sul. Gerou na criacao do cuscuz de macaxeira, iguaria que pode ser consumida em qualquer refeicão, é outra variacao do cuscuz como o de milho que mais conhecemos",
  preparo: "Descasque a macaxeira, lave e rale, tendo cuidado para retirar o talo que fica no centro da macaxeira. Após ralar a macaxeira, esprema com auxílio de um pano afim de extrair o sumo da macaxeira. Tenha cuidado de não deixar ela totalmente seca, ela precisa estar úmida. Após retirar o sumo, numa vasilha, junte a macaxeira ralada, o coco ralado, uma pitada de sal e o queijo coalho cortado em cubos pequenos. Com essa massa pronta, é só colocar na cuscuzeira e passar na superfície um pouco de manteiga e aguardar cozinhar. O cozimento é rápido, retire do fogo e sirva com um bom café.",
  ingredientes: "1 kg de macaxeira. 1 coco ralado. sal a gosto. manteiga a gosto. 100 g de queijo coalho",
  regiao: "Centro-sul",
  img:"/img/cuscuz macaxeira.webp" 
},
{titulo:"Bolinho de peixe", 
  descricao:"O bolinho de peixe muito popular nas barracas de praia litoral , surgiu como uma forma de aproveitar ao máximo o pescado. No norte do Ceará, onde cidades como Camocim e Jericoacoara estão localizadas, o mar oferece uma grande variedade de peixes, e a pesca artesanal é uma tradição que se mantém viva há gerações. ",
  preparo: "Cozinhe a batata em cubos com sal e deixe esfriar fora da água. Cozinhe o peixe em um pouco de água com uma pitada de sal, desfie o peixe tirando os espinhos, refogue a cebola no azeite, coloque o peixe desfiado e o cheiro verde. Amasse as batatas (como se fosse fazer um purê) coloque o peixe e a pimenta, junte o ovo e misture bem. Com uma colher faça bolinha e frite em óleo bem quente.",
  ingredientes: "500 g de filé de merluza. 500 g de batata cozida. 1 cebola picada. 1 colher de azeite. 1 ovo. Cheiro verde e pimenta do reino a gosto. Óleo para fritar",
  regiao: "Norte",
  img:"/img/bolinhopeixe.jpg" 
},
{titulo:"Pirão de peixe", 
  descricao:"Prato típico do litoral, O peixe fresco, capturado nas águas locais, é cozido para criar um caldo saboroso, que, ao ser engrossado com farinha de mandioca, resulta em um pirão delicioso e substancioso.",
  preparo: "Colocar todos os ingredientes picados (exceto a farinha de mandioca e o cheiro verde) em uma panela de pressão. Quando começar a ferver deixar por aproximadamente 40 minutos. Após, coar o líquido em peneira fina passando uma colher para aproveitar ao máximo, descartando as sobras. Passar o caldo para outra panela e antes de ligar o fogo adicionar a farinha aos poucos, mexendo para não empelotar. Levar ao fogo sempre mexendo, após iniciar fervura deixar aproximadamente 10 a 15 minutos. Provar o sal, acrescentar o cheiro verde, caso queira o pirão mais duro acrescentar mais farinha aos poucos. Passar para uma travessa, colocar cheiro verde em cima. Fica ótimo com arroz branco e peixe ensopado.",
  ingredientes: "300 g peixe (pintado/tambaqui) ou cabeças que sobram. 250 g farinha de mandioca. 2 tomates maduros picados. 2 cebolas picadas. 1/2 pimentao picado. 3 tabletes de caldo de camarão. 2 colheres de sopa de colorau. 1 pimenta de cheiro picada. 1 pimenta malagueta picada (opcional). Pimenta-do-reino a gosto. Sal a gosto. 6 colheres de sopa de azeite de dende (ou azeite de oliva). 2 litros de água. Cheiro verde",
  regiao: "Norte",
  img:"/img/pirao.jpg" 
},
{titulo:"Arroz de Marisco", 
  descricao:"No litoral do norte cearense, cidades como Jericoacora, antes uma vila de pescadores isolada, contam com excelentes restaurantes especializados em pescados e mariscos pescados localmente,com diversas combinacoes como o Arroz de mariscos.",
  preparo: "Tempere os mexilhões com sal, pimenta-do-reino, cominho, limão, vinho branco e coentro. Deixe marinar por 2 horas. Corte os legumes e reserve. Refogue em uma panela a cebola, o alho e o açafrão. Deixe murchar. Adicione os tomates e, na sequência a pimenta-dedo-de-moça. Deixe os pimentões cozinharem por alguns minutos. Acrescente os mexilhões com o caldo e misture. Coloque o arroz. Adicione o caldo de legumes até cobrir e misture. Deixe cozinhar. Acrescente caldo de uma a duas vezes. Deixe cozinhar até dar o ponto do arroz. Ele deve ficar mais molhado. Finalize com coentro ou cheiro verde.",
  ingredientes: "500 gramas de mexilhão sem casca. 4 xícaras de arroz. 2 tomates maduros. 1 cebola. 3 dentes de alho. 1 pimentão verde médio. 1 pimentão vermelho médio. 1 pimenta-dedo-de-moça. 1 limão. Açafrão, pimenta-do-reino e sal a gosto. 1/2 xícara de vinho branco seco. Caldo de legumes. 1 xícara de vinho branco seco. 500 ml de caldo de legumes. O que bastar coentro ou cheiro verde",
  regiao: "Norte",
  img:"/img/marisco.jpg" 
},
{titulo:"Carne de sol com macaxeira", 
  descricao:" Muito consumido no sul cearense esse prato é o equilíbrio perfeito ter só esses dois elementos no prato, a carne é suculenta e tem um sabor marcante. A carne de sol é um método tradicional de preservação de carne no Nordeste, especialmente em áreas semiáridas como o sul do Ceará.A carne, geralmente bovina, é ligeiramente salgada e deixada para secar ao sol e ao vento, o que ajuda a preservá-la por mais tempo.",
  preparo: "Em uma panela de pressão, coloque o óleo e leve ao fogo alto para aquecer. Junte a cebola e refogue por 2 minutos, ou até dourar. Acrescente a carne, aos poucos, fritando de todos os lados, por 5 minutos. Adicione a macaxeira, o pimentão e o Tempero em Pó Knorr Carne, e regue com a água. Tampe a panela e cozinhe em fogo médio, por 15 minutos, contados a partir do início da pressão. Apague o fogo e aguarde sair todo vapor. Abra a panela, acrescente o coentro, misture e retire do fogo. Sirva em seguida acompanhado de arroz branco.",
  ingredientes: "1 colher de sopa de óleo. 1/2 cebola pequena picada. 300 gramas de carne de sol limpa demolhada cortada em cubos. 200 gramas de macaxeira cortada em cubos. 1/2 pimentão vermelho cortado em cubos. 1 sachê de Tempero em Pó Knorr Carne. 3 1/2 xícara de água fervente (700 ml). 2 colheres de sopa de coentro fresco picado grosseiramente",
  regiao: "Sul",
  img:"/img/carnemacax.jpg" 
},
{titulo:"Feijão com queijo coalho", 
  descricao:"Na região de Jaguaribe, o feijão com queijo coalho é mais do que uma refeição cotidiana; ele é parte da identidade cultural. Esse prato reflete a simplicidade e a criatividade da culinária nordestina, onde se valoriza o uso de ingredientes locais e tradicionais. Jaguaribe é muito conhecido pelo seu queijo coalho",
  preparo: "Escolha os grãos e lave e deixe escorrendo a água. Refogue o bacon, quando soltar a gordura retire os pedaços e coloque a charque, refogue até ficar macia e coloque a calabreza refogando até soltar um pouco da gordura reorne o bacon. Coloque o feijão e refogue por 5 minutos coloque o sal, a água, tampe a panela, abaixe o fogo. Quando levantar fervura deixe cozinhar por 10 minutos. Adicione os outros ingredientes menos o queijo, deixe secar e adicione o queijo (sempre com a panela fechada), quando o queijo ficar mole está pronto. Sirva quente acompanhado com arroz branco, saladas (opcional). ",
  ingredientes: "1 kg de feijão verde limpos. 300 g de charque sem sal e em cubos. 1 calabresa em cubos. 150 g de bacom em cubos. 300 g de queijo coalho. 1 dente de alho picado. 1 cebola roxa pequena picada. 1 pedaço de pimantão amarelo picado. 1 pedaço de pimentao verde picado. 1 pedaço de pimentão vermelho picado. 1 cheiro verde pequeno picados, todos sem sementes e sem aparte branca de dentro. Coentro picado. Salsinha picada. Sal agosto. 1 folha de louro picado. 1 litro de agua quente.",
  regiao: "Jaguaribe",
  img:"/img/feijao.jpg" 
}, 
{titulo:"Queijo de coalho", 
  descricao:"O queijo coalho de jaguaribe é referência nacional. Muitas histórias são contadas pelo povo jaguaribano, que cresceu vendo a arte da produção do queijo coalho dentro de casa. Do gado se tirava o principal sustento. Vendia a carne, o leite e com a sobra se produzia o queijo. A cidade já foi a maior bacia leiteira do ceará.",
  preparo: "Para um pote grande de leite, de boca bem larga, com capacidade para cerca de cinquenta litros, uma xícara de soro com coalho. Deixa coalhar até marejar o soro em cima. Quando chorar, quebra-se a coalhada rapidamente, cobre-se e deixa-se dez minutos repousando.Então, com uma cuinha, vai-se colhendo o soro, com cuidado, sem apertar muito a coalhada. Apanha-se o soro até dar meia lata de querosene (mais ou menos dez litros). Leva-se o soro ao fogo, mexendo sempre para não queimar. Quando subir a fervura, começa-se a apanhar a espuma, que depois vai ser posta num saco, onde ficará até o dia seguinte, e então leva uma mão cheia de sal. Assim é feita a nata salgada. Voltando ao queijo. Quando acabar a espuma, despeja-se o soro fervendo de uma vez na coalhada, que deve ter sido quebrada de novo, rapidamente. Cobre-se a coalhada e deixa cozinhar por quinze minutos. Então, em cima do bloco de coalhada cozida joga-se uma xícara de sal e começa-se a rasgar devagarinho, picando em bolinhas do tamanho de um ovo de pomba. Depois de rasgada, cobre-se e vai-se arrumar a prensa. A coalhada deve ir para a prensa ainda morna. Não bote fria. Vai-se apertando devagar a prensa, duas pessoas, uma de cada lado, até ficar o brinquete preso, sem dançar sobre o cincho. Vira-se à tardinha. Com oito dias, se estiver sujo, pode-se banhar no soro quente. No dia seguinte tira-se, aparam-se as beiradas e bota-se o queijo na tábua.",
  ingredientes: "30l de leite. 1 xícara de soro com coalho. 1 xícara de sal",
  regiao: "Jaguaribe",
  img:"/img/queijo.webp" 
},
{titulo:"Pirão de leite", 
  descricao:"O pirão de leite é uma variação do tradicional pirão, um prato típico da culinária nordestina brasileira. O pirão é feito com farinha de mandioca misturada em caldos quentes de carne ou peixe. No Vale do Jaguaribe, no Ceará, o pirão de leite é uma iguaria bastante apreciada. A região é conhecida por suas tradições culinárias únicas, que incluem o uso de ingredientes locais e técnicas tradicionais de preparo, além de serem grandes produtores de latiocínios desde dos tempos coloniais",
  preparo: "Dissolva o caldo de carne no leite ainda frio. Leve ao fogo brando e aqueça. Antes do leite ferver (subir) adicione aos poucos a farinha de mandioca, sempre mexendo para não embolar, até o pirão atinja o ponto desejado.",
  ingredientes: "500 ml de leite de vaca.1 caldo de carne ou frango (ou de sua preferência). 3 colheres de sopa de farinha de mandioca",
  regiao: "Jaguaribe",
  img:"/img/pleite.jpg" 
},         
       ];
    } catch (error) {
        console.error("Erro ocorreu a criar conta:", error);
    }
  }

  module.exports = insertReceita()*/