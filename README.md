# guia-de-leitura

## Prefácio
## Modelo da Documentação
## 1. Introdução
### 1.1 Tema
Tema do projeto "Gamificação da Leitura: Desenvolvimento de um Aplicativo
para Estímulo ao Hábito de Leitura".
O projeto busca incentivar a leitura por meio de um aplicativo que utiliza
elementos de gamificação, como desafios, recompensas e rankings, para
engajar os usuários e tornar a experiência mais interativa e motivadora.
### 1.2 Objetivo do Projeto
O objetivo deste projeto é desenvolver um aplicativo de leitura que incentive
o usuário a se engajar mais com sua leitura, estimulando-o a ler com maior
frequência por meio de uma interface gamificada
### 1.3 Delimitação do Problema
Muitas pessoas têm dificuldade em manter o hábito da leitura devido à falta
de motivação e ao formato tradicional pouco atrativo. A experiência
monótona pode levar ao desinteresse e ao abandono da leitura. Para
resolver esse problema, o projeto propõe um aplicativo com interface
gamificada, tornando a leitura mais interativa e envolvente. O objetivo é
estimular os usuários a lerem mais, criando uma experiência dinâmica e
motivadora. Dessa forma, o aplicativo busca transformar a leitura em um
hábito prazeroso e acessível.

### 1.4 Justificativa da Escolha do Tema
#### 1.4.1 Motivação Teórica
- A leitura é uma habilidade essencial para o aprendizado e desenvolvimento do conhecimento, mas muitos leitores enfrentam dificuldades em acompanhar seu progresso ou manter a disciplina.

- Métodos tradicionais de monitoramento de leitura (como anotações manuais) podem ser ineficientes ou pouco motivadores.

- Aplicativos existentes focam mais na leitura de e-books, enquanto seu projeto foca no acompanhamento da leitura física, trazendo uma abordagem diferenciada.

- Estudos sobre aprendizado autodirigido indicam que acompanhar o progresso melhora a retenção de informações e a motivação do leitor.

#### 1.4.2 Motivação Prática
- Muitos leitores iniciam livros e acabam abandonando-os antes de concluir, seja por falta de organização ou motivação.

- Seu aplicativo propõe uma solução inovadora ao permitir que os usuários registrem suas leituras, acompanhem o progresso percentual e associem palavras-chave para facilitar revisões.

- Ele pode ser útil tanto para leitores casuais quanto para estudantes e pesquisadores que precisam gerenciar várias leituras ao mesmo tempo.

- A possibilidade de compartilhar o progresso pode incentivar leituras coletivas e tornar a experiência mais interativa.
### 1.5 Método de Trabalho
O desenvolvimento seguirá uma abordagem incremental e iterativa, permitindo a implementação gradual das funcionalidades. O aplicativo será modelado segundo o paradigma orientado a objetos (POO), garantindo modularidade e reutilização de código.

A arquitetura será cliente-servidor, com um front-end em React Native e um back-end em Node.js com MongoDB.

Serão realizados testes unitários e de integração para validar o funcionamento do sistema.
### 1.6 Organização do Trabalho
1. Introdução ao Projeto
1.1 Tema: Apresenta o foco central do projeto.
1.2 Objetivo: Explica a finalidade do aplicativo de leitura gamificado.
1.3 Delimitação do Problema: Detalha o problema enfrentado pelos
usuários e como o aplicativo pretende resolvê-lo.
1.4 Justificativa: Divide-se em motivação teórica e prática, explicando a
relevância do projeto.
1.5 Método de Trabalho: Define a abordagem de desenvolvimento e as
tecnologias utilizadas.
1.6 Organização do Trabalho: Provavelmente explica a estrutura do
documento (não detalhado no texto).
1.7 Glossário: Termos importantes do projeto (não detalhado no texto).
2. Descrição Geral do Sistema
2.1 Descrição do Problema: Contextualiza os desafios enfrentados pelos
leitores.
2.2 Principais Envolvidos: Lista os usuários e desenvolvedores.
2.3 Regras de Negócio: Define os processos principais do aplicativo.
3. Requisitos do Sistema
3.1 Requisitos Funcionais: Lista as funcionalidades do aplicativo divididas
em Login e Dashboard.
3.2 Requisitos Não-Funcionais: Define restrições técnicas e padrões de
qualidade.
3.3 Protótipo: Inclui diagramas e telas para ilustrar a navegação do
sistema.
3.4 Métricas e Cronograma: Define prazos e métricas de desempenho do
projeto.
4. Análise e Design
4.1 Diagrama de Classes: Mostra a estrutura dos objetos e suas relações.
4.2 Diagrama de Atividades: Representa o fluxo das ações no sistema.
4.3Diagrama de Estados: Demonstra os diferentes estados possíveis
dentro do sistema.
8. Manual do Usuário
Explica como utilizar o aplicativo, desde o cadastro até a interação com as
funcionalidades.

### 1.7 Glossário
Glossário
Aplicativo de Leitura Gamificado: Software que combina elementos de
jogos (como recompensas e desafios) para incentivar a leitura.
Dashboard: Interface principal do usuário, onde ele pode visualizar
informações, progresso e acessar funcionalidades do aplicativo.
Gamificação: Uso de mecânicas de jogos em contextos não relacionados a
jogos para engajar e motivar usuários.
Interface do Usuário (UI): Design visual do aplicativo que define a
interação entre o usuário e o sistema.
Experiência do Usuário (UX): Conjunto de fatores que influenciam a forma
como um usuário interage com um sistema e sua satisfação com essa
interação.
Login: Processo de autenticação do usuário no sistema, geralmente por
meio de e-mail e senha.
Requisitos Funcionais: Lista de funcionalidades que o sistema deve
possuir para atender às necessidades dos usuários.
Requisitos Não-Funcionais: Restrições e características técnicas que
garantem a qualidade do sistema, como segurança, desempenho e
compatibilidade.
Protótipo: Representação visual das telas e interações do sistema antes do
desenvolvimento final.
Diagrama de Classes: Modelo gráfico que representa a estrutura do
sistema e as relações entre seus objetos.
Diagrama de Atividades: Representação do fluxo de processos no sistema,
ilustrando as etapas de cada funcionalidade.
Diagrama de Estados: Modelo que mostra os diferentes estados pelos
quais um objeto pode passar dentro do sistema.
Banco de Dados: Sistema que armazena, organiza e gerencia informações
utilizadas pelo aplicativo.
Regras de Negócio: Conjunto de diretrizes e condições que determinam
como o sistema deve operar para cumprir seus objetivos.
Métricas: Indicadores utilizados para medir o desempenho do sistema e a
experiência dos usuários


## 2. Descrição Geral do Sistema
### 2.1 Descrição do Problema
Atualmente, muitos adultos e adolescentes, na faixa etária de 18 a 35 anos,
enfrentam dificuldades em manter o hábito da leitura devido à falta de
motivação e ao formato tradicional pouco interativo. A leitura convencional
pode parecer monótona, o que leva à falta de engajamento e ao abandono
da prática. O avanço das plataformas digitais e o consumo de conteúdos
rápidos e dinâmicos tornam a leitura de textos longos menos atraente para
esse público.
Dessa forma, é necessário um sistema que ofereça uma experiência de
leitura inovadora e estimulante, utilizando mecânicas de gamificação para
aumentar o engajamento do usuário. Esse sistema deve conter
funcionalidades que tornem a leitura mais interativa, como desafios,
recompensas, níveis de progresso e interações sociais. Além disso, o
aplicativo deve permitir a personalização da experiência do usuário por
meio de recomendações de leitura, definição de metas diárias e feedback
motivacional, promovendo um ambiente favorável à criação de um hábito
contínuo de leitura.

### 2.2 Principais Envolvidos e suas Características
#### 2.2.1 Usuários do Sistema
adultos e adolescentes, na faixa etária de 18 a 35 anos,
#### 2.2.2 Desenvolvedores do Sistema
Programadores: Deivyson Ricardo
Gerentes de projeto: Deivyson Ricardo
Documentado: Deivyson Ricardo
Testadores: Deivyson Ricardo
Analistas de requisitos: Cauan Warlly 

### 2.3 Regras de Negócio
- Cadastro de usuários: Cada usuário poderá criar uma conta com nome, e-mail e senha, garantindo acesso seguro via autenticação JWT.
- Gerenciamento de leitura: O usuário poderá adicionar livros e registrar páginas lidas.
- Progresso de leitura: O sistema calculará automaticamente a porcentagem do livro lido, exibindo visualmente a evolução.
- Compartilhamento: Possibilidade de compartilhar progresso de leitura com outros usuários.

## 3. Requisitos do Sistema
### 3.1 Requisitos Funcionais
Requisitos Funcionais Do Login (RFL)
São os requisitos que definem as funcionalidades do sistema, ou seja, o que o
aplicativo deve permitir que o usuário faça.
1. Autenticação de Usuário
RF01: O sistema deve permitir que o usuário crie uma conta.
RF02: O sistema deve permitir que o usuário inicie sessão informando email e senha.
RF03: O sistema deve fornecer uma opção para recuperação de senha
caso o usuário a esqueça.
2. Cadastro de Usuário
RF04: O sistema deve solicitar ao usuário informações básicas durante o
cadastro, como nome completo, sexo e data de nascimento.
RF05: O sistema deve solicitar ao usuário informações de acesso, como email e senha.
RF06: O sistema deve validar se as senhas informadas na criação da conta
são iguais antes de permitir o cadastro.
3. Escolha de Avatar
RF07: O sistema deve permitir que o usuário escolha um avatar durante o
cadastro.
RF08: O sistema deve apresentar diferentes opções de avatares para o
usuário selecionar.
RF09: O sistema deve registrar o avatar escolhido no perfil do usuário.
4. Navegação e Interface
RF10: O sistema deve exibir uma tela de boas-vindas ao usuário ao abrir o
aplicativo pela primeira vez.
RF11: O sistema deve oferecer botões de "Realizar Cadastro" e "Iniciar
Sessão" na tela inicial.
RF12: O sistema deve apresentar botões de "Próxima Etapa" para avançar
entre as telas do cadastro.
RF13: O sistema deve permitir que o usuário volte à tela anterior durante o
processo de cadastro.

Requisitos Funcionais Do Dashboard (RFD)
São os requisitos que definem as funcionalidades do sistema, ou seja, o que o
aplicativo deve permitir que o usuário faça.
1. Dashboard e Atividades Recentes
RF01: O sistema deve exibir um painel com atividades recentes dos
usuários.
RF02: O sistema deve registrar e exibir quais livros o usuário começou a ler
e a data de início da leitura.
RF03: O sistema deve exibir um calendário semanal que indica os dias em
que o usuário realizou leituras.
2. Gamificação e Ranking
RF04: O sistema deve exibir um ranking de leitores com base na
experiência adquirida (XP).
RF05: O sistema deve permitir que os usuários ganhem XP ao progredir na
leitura.
RF06: O sistema deve mostrar a posição do usuário no ranking em relação
a outros leitores.
3. Biblioteca e Progresso de Leitura
RF07: O sistema deve exibir os livros adicionados pelo usuário em uma
biblioteca pessoal.
Guia-de-leitura 8
RF08: O sistema deve mostrar a porcentagem de progresso de leitura de
cada livro.
RF09: O sistema deve exibir informações do livro, como título, autor e
gênero.
RF10: O sistema deve permitir que o usuário continue a leitura a partir do
ponto onde parou.
4. Adição de Livros
RF11: O sistema deve permitir que o usuário adicione livros à sua biblioteca
pessoal.
RF12: O sistema deve solicitar informações como nome do livro, autor,
gênero, quantidade de páginas e páginas lidas.
RF13: O sistema deve calcular e atualizar automaticamente o progresso do
livro com base nas páginas lidas.
5. Perfil do Usuário e Estatísticas
RF14: O sistema deve exibir informações do perfil do usuário, incluindo
avatar e nome de exibição.
RF15: O sistema deve exibir estatísticas de leitura, como:
Dias de leitura consecutivos.
Total de XP acumulado.
Nível/divisão do usuário (ex: Ouro).
Pontos adquiridos.
RF16: O sistema deve permitir que o usuário visualize e gerencie sua lista
de amigos.
RF17: O sistema deve exibir a quantidade de seguidores e pessoas
seguidas pelo usuário.
6. Navegação
RF18: O sistema deve fornecer um menu inferior de navegação com as
seguintes opções:
Página inicial (dashboard).
Ranking de leitores.
Biblioteca de livros.
Adição de novos livros.
Perfil do usuário.
RF19: O sistema deve permitir que o usuário acesse e alterne entre as telas
de forma intuitiva.

### 3.2 Requisitos Não-Funcionais
Requisitos Não Funcionais Do Login (RNFL)
São os requisitos que especificam restrições e qualidades do sistema, como
desempenho, segurança e usabilidade.
1. Usabilidade
RNF01: A interface deve ser intuitiva e amigável, facilitando a navegação do
usuário.
RNF02: Os botões e campos de entrada devem ter um design padronizado
para manter consistência na interface.
RNF03: O sistema deve utilizar cores e elementos visuais que tornem a
experiência agradável e clara.
2. Desempenho
RNF04: O tempo de resposta do sistema ao clicar nos botões deve ser
inferior a 1 segundo.
3. Segurança
RNF05: O sistema deve armazenar senhas de forma criptografada para
garantir a segurança dos dados dos usuários.
RNF06: O sistema deve validar os dados inseridos pelo usuário antes de
prosseguir para a próxima etapa do cadastro.
4. Compatibilidade
RNF07: O aplicativo deve ser compatível com dispositivos móveis Android e
iOS.

Requisitos Não Funcionais Do Dashboard (RNFD)
Os requisitos não funcionais descrevem aspectos relacionados ao
desempenho, usabilidade e segurança do sistema.
1. Usabilidade
RNF01: O sistema deve ter uma interface intuitiva e amigável, garantindo
uma experiência fluida para o usuário.
RNF02: Os botões e menus devem ser bem posicionados e de fácil acesso
para otimizar a navegação.
RNF03: A exibição de informações deve ser clara, utilizando cores e ícones
para facilitar a interpretação dos dados.
2. Desempenho
Guia-de-leitura 11
RNF04: O sistema deve carregar as informações dos livros e do progresso
de leitura em menos de 2 segundos.
RNF05: O ranking de leitores deve ser atualizado automaticamente à
medida que os usuários ganham XP.
3. Segurança
RNF06: O sistema deve proteger as informações do usuário, garantindo
que dados pessoais e estatísticas de leitura sejam acessíveis apenas pelo
próprio usuário.
RNF07: O sistema deve utilizar um banco de dados seguro para armazenar
as informações do usuário e dos livros.
4. Compatibilidade
RNF08: O aplicativo deve ser compatível com dispositivos móveis Android
e iOS.

### 3.3 Protótipo
#### 3.3.1 Diagrama de Navegação
Tela Inicial
├── Botão "Realizar Cadastro" → 2. Cadastro - Informações Básicas
├── Botão "Iniciar Sessão" → 3. Login
2. Cadastro - Informações Básicas
├── Preenchimento de Nome, Sexo, Data de Nascimento
├── Botão "Próxima Etapa" → 4. Cadastro - Informações de Acesso
3. Login
├── Campos de Email e Senha
├── Botão "Iniciar Sessão" → 6. Tela Principal
├── Link "Esqueci minha senha" (não detalhado na imagem)
4. Cadastro - Informações de Acesso
├── Preenchimento de Email, Senha e Confirmação de Senha
├── Botão "Próxima Etapa" → 5. Escolha de Avatar
5. Escolha de Avatar
├── Seleção de Avatar
├── Botão "Realizar Cadastro" → 6. Tela Principal
6. Tela Principal
├── Menu Inferior com ícones:
│ ├── Casa (Início) → 6.1 Atividades Recentes
│ ├── Ranking → 6.2 Ranking de Leitores
│ ├── Livros → 6.3 Lista de Livros
│ ├── Adicionar → 6.4 Adicionar Livro
│ ├── Perfil → 6.5 Perfil do Usuário
6.1 Atividades Recentes
├── Lista de atividades dos usuários
├── Exibição de livros em andamento
6.2 Ranking de Leitores
├── Lista de usuários com mais XP
6.3 Lista de Livros
├── Exibição de livros adicionados
├── Seleção de livro → 6.6 Tela de Livro
6.4 Adicionar Livro
├── Preenchimento de Nome, Autor, Gênero e Páginas
├── Botão "Adicionar Livro" → 6.3 Lista de Livros
6.5 Perfil do Usuário
├── Estatísticas (dias de leitura, XP, pontos)
├── Lista de amigos (seguindo e seguidores)
├── Botão "Adicionar Amigos"
6.6 Tela de Livro
├── Exibição de progresso de leitura
├── Botão "Continuar Leitura"

### 3.4 Métricas e Cronograma
## 4. Análise e Design
### 4.4 Diagrama de Classes
### 4.5 Diagrama de Atividades
### 4.6 Diagrama de Estados

## 8. Manual do Usuário
### Manual do Usuário - Aplicativo Shlomo
1. Introdução
O aplicativo Shlomo foi desenvolvido para ajudar os usuários a organizar sua
rotina de leitura, acompanhar progresso e interagir com outros leitores. Este
manual tem como objetivo fornecer instruções detalhadas sobre o uso do
aplicativo.
2. Cadastro e Login
2.1 Tela Inicial
Ao abrir o aplicativo, o usuário verá a tela de boas-vindas, onde poderá
escolher entre:
Realizar Cadastro: Criar uma nova conta.
Iniciar Sessão: Acessar uma conta já existente.
2.2 Criando uma Conta
Caso o usuário opte por se cadastrar, ele passará pelas seguintes etapas:
1. Informações Básicas: Inserir nome completo, sexo e data de nascimento.
2. Informações de Acesso: Inserir e-mail, senha e confirmação da senha.
3. Escolha de Avatar: Selecionar um avatar de sua preferência.
4. Finalização: Após selecionar o avatar, o cadastro será concluído.
2.3 Login
Para acessar a conta, o usuário deve inserir:
E-mail
Senha
Caso tenha esquecido a senha, poderá utilizar a opção “Esqueci minha senha”
para redefini-la.
3. Navegação pelo Aplicativo
3.1 Tela Inicial (Home)
A página inicial exibe:
Atividades Recentes: Atualizações sobre o progresso de leitura dos
amigos.
Calendário de Leitura: Exibição dos dias de leitura.
3.2 Ranking de Leitores
O aplicativo possui um ranking baseado na experiência adquirida pelos
usuários durante a leitura. O ranking é atualizado conforme os pontos
acumulados.
3.3 Biblioteca de Livros
Nesta seção, o usuário pode visualizar os livros que está lendo, com
informações como:
Nome do livro
Autor
Percentual de progresso na leitura
3.4 Adicionar Livro
O usuário pode cadastrar um novo livro preenchendo:
Nome do livro
Autor
Gênero
Quantidade total de páginas
Páginas já lidas
Após inserir essas informações, basta clicar no botão "Adicionar Livro".
3.5 Perfil do Usuário
O perfil exibe estatísticas de leitura, como:
Dias de Leitura: Número total de dias que o usuário leu.
XP Total: Pontos acumulados com a leitura.
Pontuação: Classificação do usuário no ranking.
Também há opções para:
Seguir e ser seguido por amigos.
Adicionar novos amigos.
4. Leitura e Progresso
Para continuar lendo um livro, o usuário pode acessar a tela do livro e clicar no
botão "Continuar Leitura". O progresso será atualizado conforme as páginas
lidas forem informadas.
5. Conclusão
O aplicativo Shlomo é uma excelente ferramenta para leitores que desejam
organizar sua rotina de leitura e interagir com outros usuários. Com
funcionalidades intuitivas e um sistema de gamificação, ele incentiva o hábito
da leitura de maneira divertida e eficiente.

