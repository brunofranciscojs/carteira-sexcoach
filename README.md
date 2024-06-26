# Projeto Carteira Digital - Instituto MM Academy
### Bem-vindo ao repositório do projeto Carteira Digital para o curso SexCoach do Instituto MM Academy. Este projeto foi refatorado para melhorar a eficiência e a legibilidade do código, utilizando funções auxiliares (helper functions), localStorage, e fetch para manipulação de dados. A nova versão elimina a dependência de jQuery e reduz o uso excessivo de if-else.

## Tecnologias Utilizadas
* HTML: Estrutura básica da aplicação.
* Tailwind CSS: Framework de CSS para estilização rápida e responsiva.
* JavaScript: Manipulação de dados e funcionalidades interativas.

## Funcionalidades
* Login por Nome: Campo de autocomplete que sugere nomes dos alunos conforme são digitados.
* Login por Número da Carteira: Validação do número da carteira para acesso.
* Armazenamento Local: Utilização de localStorage para persistência de dados do usuário.
* Busca e Filtro: Funções auxiliares para busca e filtragem de dados dos alunos.
* Fetch API: Carregamento de dados dos alunos a partir de um arquivo JSON.

## Estrutura do Projeto
```bash
/
├── index.html        # Página principal com o formulário de login
├── styles.css        # Estilos personalizados além dos fornecidos pelo Tailwind CSS
├── main.js           # Script principal para funcionalidades de login e autocomplete
└── tailwind.config.js# Configuração do Tailwind CSS
```
### Como Usar
* Clone o Repositório
```bash
git clone https://github.com/seuusuario/carteira-digital-mm-academy.git
Navegue até o Diretório do Projeto
```

```bash
cd carteira-digital-mm-academy
```
* Abra o index.html no seu navegador
Basta abrir o arquivo index.html diretamente no navegador para testar a aplicação.

### Código JavaScript
A seguir está uma explicação detalhada do código JavaScript refatorado:

Adicionando Event Listeners
```javascript
document.querySelector('input[type="text"]').addEventListener('input', (e) => {
    document.querySelector('div[results]').innerHTML = busca(e.target.value).join('');
    
    if (e.target.value.length < 1) {
        document.querySelector('div[results]').innerHTML = '';
    }
});

document.querySelector('input[type="tel"]').addEventListener('change', (e) => {
    if (e.target.value.includes(cpmes(e.target.value.replace(/[-.]/g, '')))) {
        entrar(e);
    }
});
```
Funções Auxiliares (Helper Functions)
Fetching Students Data
```javascript
Copiar código
let students = [];

const fetchStudents = () => {
    fetch('./js/alunos.json').then(res => res.json())
    .then(json => {
        students = json;
    });
};

fetchStudents();
Busca e Filtro
javascript
Copiar código
const cpmes = (cpm) => {
    const busca = students.filter(aluno => {
        const numero = aluno.cpm.replace(/[-.]/g, '');
        return numero.includes(cpm.replace(/[-.]/g, ''));
    });
    return busca.map(aluno => aluno.cpm);
};

const busca = (name) => {
    const busca = students.filter(aluno => {
        const nome = aluno.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        return nome.includes(name.toLowerCase());
    });
    return busca.map(aluno => `<span onclick="entrar(event)">${aluno.name}</span>`);
};
Função de Login
javascript
Copiar código
const entrar = (e) => {
    students.filter(aluno => {
        if (e.target.tagName === 'SPAN' && e.target.innerText == aluno.name) {
            localStorage.setItem('aluno', JSON.stringify({
                id: btoa(aluno.name),
                name: aluno.name,
                document: aluno.document,
                cpm: aluno.cpm,
                emission: aluno.emission,
                expiration: aluno.expiration
            }));
            setTimeout(() => {
                window.location = `./user`;
            }, 200);
        } else if (e.target.tagName === 'INPUT') {
            window.location = `./user?=${e.target.value.replace(/[-.]/g, '')}`;
        }
    });
};
```
### Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para discutir melhorias ou correções.

### Licença
Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

### Contato
Para mais informações ou dúvidas, entre em contato:



# Digital Wallet Project - MM Academy Institute

## Welcome to the repository of the Digital Wallet project for the SexCoach course at MM Academy Institute. This project has been refactored to improve code efficiency and readability using helper functions, localStorage, and fetch for data manipulation. The new version eliminates the dependency on jQuery and reduces excessive if-else usage.

## Technologies Used
### HTML: Basic application structure.
### Tailwind CSS: CSS framework for quick and responsive styling.
### JavaScript: Data manipulation and interactive functionalities.

## Features
* Name Login: Autocomplete field suggesting student names as they are typed.
* Card Number Login: Validation of card number for access.
* Local Storage: Use of localStorage for user data persistence.
* Search and Filter: Helper functions for searching and filtering student data.
* Fetch API: Loading student data from a JSON file.
