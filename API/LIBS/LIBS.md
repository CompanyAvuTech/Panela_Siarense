<h1>Bibliotecas para o funcionamento do projeto</h1>
<h2>Bootsrap:</h2>
<p>Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma. Geralmente, o Bootstrap é distribuído usando o site oficial e npm. Você também pode criar sua própria distribuição usando o código-fonte, ou por meio da própria rede de distribuição de conteúdo conhecida como CDN do Bootstrap. Um CDN permite que um site da web recupere com frequência arquivos públicos usados ​​de servidores distribuídos globalmente.
</p>
<h3>Instalacão e uso</h3>
<li>Na página de download oficial você encontra com detalhes todas as formas de instalar o Bootstrap.Nós vamos aprender a instalá-lo via CDN.</li>
<li>Crie uma pasta e um arquivo chamado index.html.</li>
<li> Na tag head da estrutura de uma pagina hmtl adicione os links CDN para javascript e css </li>
<li>Exemplo:   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> </li>
<h2>Nodemon:</h2>
<p> É uma biblioteca que monitora automaticamente as alterações nos arquivos da aplicação e reinicia o servidor de forma rápida e eficiente, quando as modificacões forem salvas. </p>
<h3>Instalacão e uso</h3>
<li>A instalação do Nodemon como dependência de desenvolvimento é realizada através de um comando npm na raiz da aplicação: $ npm install -g nodemon</li>
<li>Após a instalação, é necessário configurar um script no arquivo package.json para executar o Nodemon</li>
<li>basta adicionar o script ‘dev’ e executar com ‘npm run dev’.</li>
