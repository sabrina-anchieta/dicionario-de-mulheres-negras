function chamaDicionario() {
    var biografias = {
        bio01: {
            nome: "Angela Davis",
            imagem: "https://i.postimg.cc/nhqh7Lcc/angela-davis.png",
            descricao: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
            citacao: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar.",
        },
        bio02: {
            nome: "Carolina de Jesus",
            imagem: "https://i.postimg.cc/gJtzdX44/carolina-de-jesus.png",
            descricao: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
            citacao: "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é.",
        },
        bio03: {
            nome: "Conceição Evaristo",
            imagem: "https://i.postimg.cc/4dxfrbvm/conceicao-evaristo.png",
            descricao: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
            citacao: "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos.",
        },
        bio04: {
            nome: "Lélia Gonzales",
            imagem: "https://i.postimg.cc/wBVxfbmC/lelia-gonzalez.png",
            descricao: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira.Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
            citacao: "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
        },
        bio05: {
            nome: "Liniker",
            imagem: "https://i.postimg.cc/rwWHnBPQ/liniker.jpg",
            descricao: "Liniker de Barros Ferreira Campos, conhecida como simplesmente Liniker é uma cantora, compositora, atriz e artista visual brasileira e ex-integrante da banda Liniker e os Caramelows. Também compõe e canta músicas de gênero soul e black music. Em 2022 se tornou a primeira artista transgênero brasileira a vencer um Grammy Latino.",
            citacao: "A partir do momento em que as pessoas escutam nossas músicas, as letras que a gente escreve, e entendem nossas mensagens, elas precisam se engajar para fazer uma transformação.",
        },
        bio06: {
            nome: "Marielle Franco",
            imagem: "https://i.postimg.cc/KjKZYGHb/marielle-franco.png",
            descricao: "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.",
            citacao: "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?",
        },
        bio07: {
            nome: "Rosa Parks",
            imagem: "https://i.postimg.cc/25m8xfVd/rosa-parks.png",
            descricao: "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
            citacao: "Você nunca deve ter medo do que está fazendo quando está certo.",
        },
        bio08: {
            nome: "Sônia Guimarães",
            imagem: "https://i.postimg.cc/NM4TNh5r/sonia-guimaraes.jpg",
            descricao: "Sonia Guimarães é uma física brasileira, professora do Instituto Tecnológico de Aeronáutica, primeira mulher negra brasileira doutora em Física pela University of Manchester Institute of Science and Technology e primeira mulher negra brasileira a lecionar no ITA, tendo ingressado em 1993, quando a instituição ainda não aceitava mulheres como estudantes.",
            citacao: "O futuro vai ser maravilhoso, uma vez que aqueles que estão no poder comecem a se preocupar com ele.",},
        bio09: {
            nome: "Sueli Carneiro",
            imagem: "https://i.postimg.cc/XvCtcsLy/sueli.jpg",
            descricao: "Aparecida Sueli Carneiro é uma filósofa, escritora e ativista antirracismo do movimento social negro brasileiro.  É Doutora em Filosofia pela USP e  fundadora e atual diretora do Geledés — Instituto da Mulher Negra e considerada uma das principais autoras do feminismo negro no Brasil.",
            citacao: "Ser mulher negra é experimentar essa condição de asfixia social.",
        },
    };

    var content = document.getElementById("content")

    for (var bio in biografias) {
        content.innerHTML += 
        '<div class="card">' + '<img src="' + biografias[bio].imagem +'"/>' + "<details>" +"<summary>" + biografias[bio].nome + "</summary>" +"<p>" + biografias[bio].descricao + "</p>" +"<blockquote><q>"+ biografias[bio].citacao + "</q> </blockquote>" + "</details> </div>";
    }
}

chamaDicionario();