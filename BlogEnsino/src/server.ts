import { Post } from './models/Post';
import { User } from './models/User';
import express from 'express';
import router from './routes';
import sequelize from './config/database';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger_output.json';

const cors = require('cors');
const app = express();
const crypto = require('crypto');

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

// Sincronização do Sequelize com o banco de dados
sequelize.sync({ alter: true }).then(() => {
  creatMockUser();
  creatMockPost();
  console.log('Models synchronized with the database');
}).catch((error) => {
  console.error('Error syncing models with the database', error);
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});

const creatMockUser = async () => {
  await sequelize.models.User.bulkCreate([
    {
      username: "Breno",
      role: "admin",
      password: hashGenerator("admin_breno_123")
    },
    {
      username: "Camila",
      role: "user",
      password: hashGenerator("user_camila_123")
    },
    {
      username: "Valdir",
      role: "admin",
      password: hashGenerator("admin_valdir_123")
    },
    {
      username: "Matheus",
      role: "admin",
      password: hashGenerator("admin_matheus_123")
    }
  ])
}

function hashGenerator(password: string) {
  return crypto.createHash('sha256').update(password).digest('hex');
}
const creatMockPost = async () => {
  const Post = sequelize.models.Post
  const userAdmin1 = await User.findOne({ where: { username: "Breno" } })
  const userAdmin2 = await User.findOne({ where: { username: "Valdir" } })
  const userAdmin3 = await User.findOne({ where: { username: "Matheus" } })
  if (userAdmin1 && userAdmin2 && userAdmin3) {
    await Post.bulkCreate([
      {
        title: "JavaScript: O guia essencial para iniciantes",
        text: "JavaScript é uma das linguagens de programação mais populares do mundo. A linguagem foi criada para adicionar interatividade às páginas da web, e hoje é usada em uma ampla variedade de aplicações, desde desenvolvimento front-end até back-end com Node.js. Seu ecossistema é rico em frameworks e bibliotecas como React, Angular e Vue.js, o que a torna ideal para desenvolvedores de todos os níveis. Por ser uma linguagem interpretada, ela oferece grande flexibilidade e dinamismo, permitindo aos desenvolvedores criar funcionalidades avançadas sem a necessidade de compilar o código. JavaScript também possui uma comunidade vibrante, que constantemente cria novos recursos e ferramentas para facilitar o trabalho dos desenvolvedores. Além disso, a interoperabilidade com HTML e CSS a torna indispensável no desenvolvimento web moderno, permitindo que designers e programadores trabalhem juntos de forma eficiente. A curva de aprendizado é relativamente baixa, o que a torna uma excelente escolha para iniciantes. Para quem deseja aprender JavaScript, recomenda-se começar com conceitos básicos como variáveis, estruturas de controle e funções antes de avançar para temas mais complexos, como manipulação do DOM e programação assíncrona. Ao dominar essa linguagem, os desenvolvedores estarão bem preparados para construir aplicativos interativos e responsivos, que atendem às expectativas dos usuários modernos.",
        author: userAdmin1.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      },
      {
        title: "A importância do Design Responsivo",
        text: "O design responsivo é um dos pilares do desenvolvimento moderno de websites. Em um mundo onde dispositivos móveis superam os computadores em acesso à internet, criar interfaces que se adaptam a diferentes tamanhos de tela é essencial. O design responsivo utiliza técnicas como grids flexíveis, imagens escaláveis e media queries para garantir que o conteúdo seja acessível e atraente em qualquer dispositivo. Além de melhorar a experiência do usuário, o design responsivo também tem impacto no SEO, pois mecanismos de busca como o Google priorizam sites responsivos em seus rankings. Ferramentas como frameworks CSS, incluindo Bootstrap e Tailwind CSS, tornam mais fácil implementar designs responsivos, economizando tempo e esforço para os desenvolvedores. Ao adotar práticas responsivas, empresas podem aumentar o engajamento do usuário e melhorar as taxas de conversão, pois um site que funciona bem em todos os dispositivos inspira confiança e profissionalismo. Portanto, ao planejar o design de um novo site ou reformular um existente, investir em responsividade não é mais uma opção, mas uma necessidade. Dominar essa habilidade é crucial para desenvolvedores e designers que desejam se destacar no mercado atual.",
        author: userAdmin2.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin2.id
      },
      {
        title: "Os fundamentos do HTML5",
        text: "HTML5 é a mais recente evolução do HyperText Markup Language, que forma a base da web moderna. Ele introduziu novos elementos e APIs que facilitam o desenvolvimento de sites dinâmicos e interativos. Tags como <article>, <section> e <header> ajudam a organizar o conteúdo de maneira mais semântica, melhorando tanto a acessibilidade quanto o SEO. Além disso, HTML5 removeu a necessidade de plugins externos para reprodução de mídia, introduzindo elementos como <audio> e <video>. A linguagem também oferece suporte nativo a gráficos vetoriais por meio do elemento <canvas>, permitindo a criação de jogos, animações e visualizações de dados diretamente no navegador. APIs como Web Storage e Geolocation ampliam as possibilidades de desenvolvimento, permitindo o armazenamento local de dados e a obtenção de localização do usuário, respectivamente. Essas melhorias tornam o HTML5 uma escolha poderosa para criar experiências web ricas e envolventes. Para novos desenvolvedores, aprender HTML5 é um passo essencial para construir uma base sólida no desenvolvimento web, pois ele forma a estrutura sobre a qual o CSS e o JavaScript operam. A flexibilidade e os recursos avançados do HTML5 garantem sua relevância no cenário tecnológico por muitos anos.",
        author: userAdmin3.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin3.id
      },
      {
        title: "A revolução do CSS3",
        text: "CSS3 trouxe uma revolução no design de interfaces web, permitindo criar visuais atraentes com menos esforço e mais eficiência. Entre as principais inovações estão as transições, animações e transformações, que permitem adicionar movimento e interatividade aos sites. Propriedades como gradients e sombras proporcionam designs sofisticados sem a necessidade de imagens adicionais. O CSS3 também introduziu media queries, que são fundamentais para o design responsivo, adaptando o layout com base no tamanho da tela do dispositivo. Além disso, módulos como Flexbox e Grid Layout simplificaram a criação de layouts complexos, reduzindo a dependência de hacks e tabelas. Ferramentas modernas, como pré-processadores (Sass, Less) e frameworks CSS, se integraram ao CSS3 para facilitar a escrita e manutenção de estilos. Aprender CSS3 é uma habilidade indispensável para qualquer desenvolvedor ou designer que deseja criar sites visualmente impressionantes e altamente funcionais. Investir tempo para entender suas funcionalidades avançadas é essencial para aproveitar todo o potencial dessa linguagem, que continua evoluindo com novos padrões e especificações.",
        author: userAdmin1.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      },
      {
        title: "Os benefícios do TypeScript no desenvolvimento front-end",
        text: "TypeScript é uma extensão do JavaScript que adiciona tipagem estática e outros recursos avançados à linguagem. Desenvolvido pela Microsoft, ele tem se tornado cada vez mais popular entre desenvolvedores devido à sua capacidade de reduzir erros e melhorar a manutenção do código. Ao utilizar TypeScript, é possível detectar problemas ainda na fase de desenvolvimento, economizando tempo e evitando bugs em produção. Recursos como interfaces, enums e tipos genéricos permitem criar código mais robusto e legível. Além disso, TypeScript é totalmente compatível com JavaScript, o que facilita sua adoção em projetos existentes. Frameworks modernos, como Angular, são construídos com TypeScript, o que reflete sua importância no desenvolvimento web. A comunidade do TypeScript está crescendo rapidamente, oferecendo uma vasta gama de ferramentas, bibliotecas e tutoriais para ajudar desenvolvedores a se adaptarem. Investir em aprender TypeScript pode abrir novas oportunidades de carreira e aumentar a produtividade no desenvolvimento de aplicações web escaláveis e seguras. Com seu suporte contínuo e integração com ferramentas modernas, TypeScript é uma escolha sólida para o futuro do desenvolvimento front-end.",
        author: userAdmin2.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin2.id
      },
      {
        title: "JavaScript: O guia essencial para iniciantes",
        text: "JavaScript é uma das linguagens de programação mais populares do mundo. A linguagem foi criada para adicionar interatividade às páginas da web, e hoje é usada em uma ampla variedade de aplicações, desde desenvolvimento front-end até back-end com Node.js. Seu ecossistema é rico em frameworks e bibliotecas como React, Angular e Vue.js, o que a torna ideal para desenvolvedores de todos os níveis. Por ser uma linguagem interpretada, ela oferece grande flexibilidade e dinamismo, permitindo aos desenvolvedores criar funcionalidades avançadas sem a necessidade de compilar o código. JavaScript também possui uma comunidade vibrante, que constantemente cria novos recursos e ferramentas para facilitar o trabalho dos desenvolvedores. Além disso, a interoperabilidade com HTML e CSS a torna indispensável no desenvolvimento web moderno, permitindo que designers e programadores trabalhem juntos de forma eficiente. A curva de aprendizado é relativamente baixa, o que a torna uma excelente escolha para iniciantes. Para quem deseja aprender JavaScript, recomenda-se começar com conceitos básicos como variáveis, estruturas de controle e funções antes de avançar para temas mais complexos, como manipulação do DOM e programação assíncrona. Ao dominar essa linguagem, os desenvolvedores estarão bem preparados para construir aplicativos interativos e responsivos, que atendem às expectativas dos usuários modernos.",
        author: userAdmin3.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin3.id
      },
      {
        title: "A importância do Design Responsivo",
        text: "O design responsivo é um dos pilares do desenvolvimento moderno de websites. Em um mundo onde dispositivos móveis superam os computadores em acesso à internet, criar interfaces que se adaptam a diferentes tamanhos de tela é essencial. O design responsivo utiliza técnicas como grids flexíveis, imagens escaláveis e media queries para garantir que o conteúdo seja acessível e atraente em qualquer dispositivo. Além de melhorar a experiência do usuário, o design responsivo também tem impacto no SEO, pois mecanismos de busca como o Google priorizam sites responsivos em seus rankings. Ferramentas como frameworks CSS, incluindo Bootstrap e Tailwind CSS, tornam mais fácil implementar designs responsivos, economizando tempo e esforço para os desenvolvedores. Ao adotar práticas responsivas, empresas podem aumentar o engajamento do usuário e melhorar as taxas de conversão, pois um site que funciona bem em todos os dispositivos inspira confiança e profissionalismo. Portanto, ao planejar o design de um novo site ou reformular um existente, investir em responsividade não é mais uma opção, mas uma necessidade. Dominar essa habilidade é crucial para desenvolvedores e designers que desejam se destacar no mercado atual.",
        author: userAdmin1.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      },
      {
        title: "Os fundamentos do HTML5",
        text: "HTML5 é a mais recente evolução do HyperText Markup Language, que forma a base da web moderna. Ele introduziu novos elementos e APIs que facilitam o desenvolvimento de sites dinâmicos e interativos. Tags como <article>, <section> e <header> ajudam a organizar o conteúdo de maneira mais semântica, melhorando tanto a acessibilidade quanto o SEO. Além disso, HTML5 removeu a necessidade de plugins externos para reprodução de mídia, introduzindo elementos como <audio> e <video>. A linguagem também oferece suporte nativo a gráficos vetoriais por meio do elemento <canvas>, permitindo a criação de jogos, animações e visualizações de dados diretamente no navegador. APIs como Web Storage e Geolocation ampliam as possibilidades de desenvolvimento, permitindo o armazenamento local de dados e a obtenção de localização do usuário, respectivamente. Essas melhorias tornam o HTML5 uma escolha poderosa para criar experiências web ricas e envolventes. Para novos desenvolvedores, aprender HTML5 é um passo essencial para construir uma base sólida no desenvolvimento web, pois ele forma a estrutura sobre a qual o CSS e o JavaScript operam. A flexibilidade e os recursos avançados do HTML5 garantem sua relevância no cenário tecnológico por muitos anos.",
        author: userAdmin2.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin2.id
      },
      {
        title: "A revolução do CSS3",
        text: "CSS3 trouxe uma revolução no design de interfaces web, permitindo criar visuais atraentes com menos esforço e mais eficiência. Entre as principais inovações estão as transições, animações e transformações, que permitem adicionar movimento e interatividade aos sites. Propriedades como gradients e sombras proporcionam designs sofisticados sem a necessidade de imagens adicionais. O CSS3 também introduziu media queries, que são fundamentais para o design responsivo, adaptando o layout com base no tamanho da tela do dispositivo. Além disso, módulos como Flexbox e Grid Layout simplificaram a criação de layouts complexos, reduzindo a dependência de hacks e tabelas. Ferramentas modernas, como pré-processadores (Sass, Less) e frameworks CSS, se integraram ao CSS3 para facilitar a escrita e manutenção de estilos. Aprender CSS3 é uma habilidade indispensável para qualquer desenvolvedor ou designer que deseja criar sites visualmente impressionantes e altamente funcionais. Investir tempo para entender suas funcionalidades avançadas é essencial para aproveitar todo o potencial dessa linguagem, que continua evoluindo com novos padrões e especificações.",
        author: userAdmin3.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin3.id
      },
      {
        title: "Os benefícios do TypeScript no desenvolvimento front-end",
        text: "TypeScript é uma extensão do JavaScript que adiciona tipagem estática e outros recursos avançados à linguagem. Desenvolvido pela Microsoft, ele tem se tornado cada vez mais popular entre desenvolvedores devido à sua capacidade de reduzir erros e melhorar a manutenção do código. Ao utilizar TypeScript, é possível detectar problemas ainda na fase de desenvolvimento, economizando tempo e evitando bugs em produção. Recursos como interfaces, enums e tipos genéricos permitem criar código mais robusto e legível. Além disso, TypeScript é totalmente compatível com JavaScript, o que facilita sua adoção em projetos existentes. Frameworks modernos, como Angular, são construídos com TypeScript, o que reflete sua importância no desenvolvimento web. A comunidade do TypeScript está crescendo rapidamente, oferecendo uma vasta gama de ferramentas, bibliotecas e tutoriais para ajudar desenvolvedores a se adaptarem. Investir em aprender TypeScript pode abrir novas oportunidades de carreira e aumentar a produtividade no desenvolvimento de aplicações web escaláveis e seguras. Com seu suporte contínuo e integração com ferramentas modernas, TypeScript é uma escolha sólida para o futuro do desenvolvimento front-end.",
        author: userAdmin1.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      },
      {
        title: "Introdução ao Node.js e suas aplicações",
        text: "Node.js é um runtime de JavaScript construído sobre o motor V8 do Google Chrome, permitindo que os desenvolvedores usem JavaScript no lado do servidor. Sua arquitetura baseada em eventos e orientada a não bloqueio o torna ideal para aplicações escaláveis, como APIs em tempo real e sistemas de chat. Uma das grandes vantagens do Node.js é o gerenciador de pacotes npm, que oferece milhares de bibliotecas que podem ser facilmente integradas em projetos. Além disso, por usar uma única linguagem para back-end e front-end, o Node.js reduz a complexidade no desenvolvimento e facilita a colaboração entre equipes. Entre os frameworks mais populares no ecossistema do Node.js estão Express, Koa e NestJS, que ajudam a criar aplicações robustas com rapidez. Empresas como Netflix, Uber e LinkedIn adotaram o Node.js para melhorar a performance e a escalabilidade de seus sistemas. Para quem está começando, aprender Node.js abre portas para criar aplicações modernas e de alta performance, aproveitando ao máximo as possibilidades do JavaScript no lado do servidor.",
        author: userAdmin2.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin2.id
      },
      {
        title: "O impacto da acessibilidade no design web",
        text: "Acessibilidade web é um aspecto crucial do design moderno, garantindo que pessoas com deficiência possam usar sites e aplicativos de maneira eficaz. Elementos como contraste adequado de cores, navegação por teclado e descrições alternativas para imagens ajudam a melhorar a experiência para todos os usuários. Ferramentas como WAVE e Lighthouse permitem que desenvolvedores identifiquem e corrijam problemas de acessibilidade em seus projetos. Além de ser uma prática ética, a acessibilidade também é exigida por leis em muitos países, como o ADA nos Estados Unidos e o WCAG globalmente. Empresas que investem em acessibilidade não apenas cumprem requisitos legais, mas também alcançam um público maior e aumentam sua reputação de marca. Adotar acessibilidade desde o início do desenvolvimento reduz custos a longo prazo e demonstra comprometimento com a inclusão. Aprender sobre práticas de acessibilidade é fundamental para desenvolvedores e designers que desejam criar experiências web verdadeiramente universais.",
        author: userAdmin3.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin3.id
      },
      {
        title: "Testes automatizados no desenvolvimento web",
        text: "Testes automatizados são uma parte essencial do desenvolvimento moderno, ajudando a garantir que o código funcione conforme esperado e evitando regressões durante atualizações. Ferramentas como Jest, Mocha e Cypress permitem criar testes unitários, de integração e end-to-end com facilidade. Adotar uma estratégia de testes robusta aumenta a confiança na estabilidade do produto e reduz o tempo gasto na identificação de bugs. Frameworks de front-end como React e Angular oferecem bibliotecas específicas para testes, como React Testing Library e TestBed, que facilitam a simulação de componentes e interações. Além disso, a automação de testes melhora a produtividade da equipe, permitindo que desenvolvedores se concentrem em implementar novas funcionalidades. Para começar, é recomendável criar testes simples para os casos mais críticos e expandir gradualmente para cobrir cenários mais complexos. Com práticas de testes bem estabelecidas, as equipes podem entregar software de alta qualidade, atendendo às expectativas dos usuários e stakeholders.",
        author: userAdmin1.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      },
      {
        title: "React: Construindo interfaces modernas",
        text: "React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário dinâmicas e eficientes. Sua abordagem baseada em componentes permite a reutilização de código e facilita a manutenção de projetos grandes e complexos. Com o uso de hooks, como useState e useEffect, os desenvolvedores podem gerenciar estados e efeitos colaterais de forma elegante e funcional. Além disso, o React possui um ecossistema vibrante, incluindo ferramentas como Redux para gerenciamento de estado global e Next.js para renderização do lado do servidor. Uma das maiores vantagens do React é sua comunidade ativa, que constantemente produz novos pacotes, tutoriais e exemplos. Empresas líderes como Airbnb, Uber e Instagram adotaram o React devido à sua performance e escalabilidade. Para iniciantes, aprender React é um passo importante para dominar o desenvolvimento de front-end moderno, abrindo oportunidades em um mercado de trabalho competitivo. Explorar o React e suas melhores práticas pode transformar a maneira como as interfaces são construídas, resultando em experiências mais ricas e envolventes para os usuários.",
        author: userAdmin2.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin2.id
      },
      {
        title: "Como começar no desenvolvimento front-end",
        text: "O desenvolvimento front-end é uma das áreas mais acessíveis para quem deseja entrar no mundo da programação. Com o foco na criação de interfaces amigáveis e funcionais, os desenvolvedores front-end utilizam tecnologias como HTML, CSS e JavaScript para transformar designs em páginas interativas. Para iniciantes, é essencial dominar o básico dessas tecnologias antes de explorar frameworks como React ou Angular. Ferramentas como o Chrome DevTools ajudam a depurar e testar o código diretamente no navegador. Além disso, plataformas como CodePen e GitHub são ótimas para criar um portfólio e demonstrar habilidades. O aprendizado contínuo e a prática são fundamentais para crescer nesta área que está em constante evolução.",
        author: userAdmin3.username,
         image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin3.id
      },
      {
        title: "Python: A linguagem para todas as ocasiões",
        text: "Python é conhecido por sua simplicidade e versatilidade, tornando-se uma escolha popular entre iniciantes e desenvolvedores experientes. Usado em áreas como desenvolvimento web, análise de dados, inteligência artificial e automação, Python possui uma ampla gama de bibliotecas que facilitam o desenvolvimento. Frameworks como Django e Flask permitem criar aplicações web robustas, enquanto bibliotecas como Pandas e NumPy são ideais para manipulação de dados. Além disso, sua sintaxe intuitiva reduz a barreira de entrada, permitindo que os desenvolvedores se concentrem na solução de problemas. Aprender Python é um investimento valioso para qualquer pessoa interessada em tecnologia.",
        author: userAdmin1.username,
         image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      },
      {
        title: "Scrum: Um guia rápido para metodologias ágeis",
        text: "Scrum é uma das metodologias ágeis mais populares para gerenciar projetos de software. Ele organiza o trabalho em sprints, ciclos curtos onde as equipes planejam, desenvolvem e entregam incrementos do produto. Papéis como Product Owner, Scrum Master e equipe de desenvolvimento são fundamentais para o sucesso do Scrum. Com práticas como reuniões diárias e retrospectivas, o Scrum promove a colaboração e o aprendizado contínuo. Empresas que adotam Scrum frequentemente observam melhorias na eficiência e na qualidade do produto. Para começar, é recomendável aprender sobre os valores e princípios do Agile, bem como se familiarizar com ferramentas como Jira e Trello.",
        author: userAdmin2.username,
         image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin2.id
      },
      {
        title: "A importância do gerenciamento de estado no front-end",
        text: "Em aplicações front-end modernas, o gerenciamento de estado é um dos principais desafios. Ferramentas como Redux, Zustand e Context API ajudam a organizar e centralizar o estado, facilitando o compartilhamento de dados entre componentes. Um gerenciamento de estado eficiente melhora a escalabilidade e a manutenibilidade do código. Escolher a ferramenta certa depende do tamanho e complexidade da aplicação. Por exemplo, Context API é ideal para pequenos projetos, enquanto Redux se destaca em aplicações maiores e mais complexas. Entender os conceitos de estado global, imutabilidade e assincronismo é crucial para implementar soluções eficazes.",
        author: userAdmin3.username,
         image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin3.id
      },
      {
        title: "O futuro do desenvolvimento web com WebAssembly",
        text: "WebAssembly (WASM) é uma tecnologia que permite executar código de baixo nível diretamente no navegador, ampliando as possibilidades do desenvolvimento web. Com suporte para linguagens como C++, Rust e Go, o WebAssembly é ideal para criar aplicações de alta performance, como editores gráficos e motores de jogos. Ele também complementa o JavaScript, permitindo que os desenvolvedores combinem o melhor dos dois mundos. Com o suporte crescente de navegadores e ferramentas, o WebAssembly está se tornando um padrão para aplicações que exigem velocidade e eficiência. Explorar essa tecnologia pode abrir portas para criar experiências web inovadoras.",
        author: userAdmin1.username,
         image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin1.id
      }
    ]
    );

  }


}
