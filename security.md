


VULNERABILIDADE 1

Credenciais e chaves sensíveis expostas em texto plano no arquivo config/credentials.json

Solução: Migrar as credenciais para variáveis de ambiente utilizando um arquivo .env (adicionado ao .gitignore) e carregar os valores dinamicamente no código através de process.env, disponibilizando no repositório apenas um arquivo modelo sem valores reais.  

VULNERABILIDADE 2

O arquivo backup.js realiza o registro de informações sensíveis e credenciais diretamente no console através de console.log, o que expõe dados confidenciais nos logs do sistema ou em ferramentas de CI/CD. 

Solução: Remover a linha de código que imprime a chave ou segredo no console, substituindo-a por uma mensagem genérica que confirme o andamento da rotina sem expor dados confidenciais. 

VULNERABILIDADE 3

O arquivo app.js contém o vazamento de referências a segredos e chaves confidenciais fixadas diretamente no código (hardcoded) nas linhas 12, 13 e 14 ao verificar a configuração dos serviços. 

Solução: Substituir as strings passadas para as funções Boolean() por variáveis de ambiente gerenciadas de forma segura (como process.env.ADMIN_PASSWORD, process.env.PAYMENT_API_KEY e process.env.INTERNAL_API_TOKEN). 

VULNERABILIDADE 4

O arquivo src/config.js expõe a senha do banco de dados ("uchihaItachi") diretamente na propriedade password dentro do código-fonte. 

Solução: Substituir o valor da senha por uma chamada a uma variável de ambiente (como process.env.DB_PASSWORD), garantindo que o segredo não fique exposto no código. 

VULNERABILIDADE 5

O arquivo src/database.js define o nome de usuário do banco de dados com privilégios administrativos fixo diretamente no código (username: "root"), o que expõe informações sensíveis da estrutura de acesso e desrespeita o princípio do menor privilégio. 

Solução: Substituir o valor estático por uma variável de ambiente (como process.env.DB_USER), permitindo a configuração dinâmica e segura do usuário de conexão.

VULNERABILIDADE 6

O arquivo .env armazena credenciais e chaves confidenciais e foi incluído diretamente no repositório, expondo dados sensíveis. A variável INTERNAL API TOKEN contém espaços no nome, o que gera erros de sintaxe ao ser lida por parsers de variáveis de ambiente.

Solução: Adicionar o arquivo .env ao .gitignore para removê-lo do controle de versões, disponibilizar apenas um modelo seguro (.env.example) sem valores confidenciais e corrigir a nomenclatura da variável para um formato válido sem espaços (ex: INTERNAL_API_TOKEN).   

VULNERABILIDADE 7

O arquivo docker-compose.yml expõe senhas e credenciais administrativas diretamente no código, além de conter chaves duplicadas e conflitantes (MYSQL_ROOT_PASSWORD declarada duas vezes com valores diferentes).

Solução: Substituir os valores das senhas e variáveis por referências a um arquivo externo de ambiente (usando a sintaxe ${VAR_NAME}), garantindo que as credenciais fiquem fora do controle de versão e removendo as duplicidades.  


