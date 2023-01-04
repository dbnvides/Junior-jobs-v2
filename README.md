Convençãos

Funções
Arrow Function
Export const
Styled-component
Nomenclatura - Styled[Nome]
ClassName - CamelCase
Hierarquia limite 3
Formato
"" - aspas duplo
Nomes - inglês
Commits
Feat: criando
Fix: corrigindo
HotFix: correção rapida na main
Descrição completa
Media
Mobile-first
Min-width: 768px


Júnior Jobs

Grupo 2

Membros:

Carlos Eduardo Perezini Cavalari
Celso Barrico
Dionisio Benevides dos Santos
Gabriel de Lima Santana
Leonardo L Cunha
Valdecir Cesar da Silva Teixeira
Vinicius Sussumu Vieira Ogawa

Ideia: Site para busca de emprego e desenvolvedores juniors;

Problema a ser resolvido: Facilitar a inserção de dev junior no mercado de trabalho e a facilitação da busca das empresa por novos devs;

Solução que a aplicação traz: Site traz vagas apenas para desenvolvedores júniors,onde tanto os devs quanto as empresas podem se cadastrar. Os devs podem se candidatar às vagas que as empresas cadastrarem, e de acordo com o perfil do mesmo a empresa pode contratá lo.

Nível estimado de complexidade: 8/10 

Features Front:
Login Page,
Register Page
Empresa,
Dev

Home page
Empresa
Dev
Profile
Empresa,
Dev,
Modal
modal-viewer company,
modal-viewer dev.

Endpoints:

Login End Points

.../login
email:
senha:

Register

Cadastro Dev
.../register/user
nome:
email:
senha:
confirmar senha:
avatar:
Cadastro Company
.../register/company
nome:
email:
senha:
confirmar senha:
avatar:
site:
localidade:



Home Page

HomePage user
.../home/user(Token:)
todas as informações do usuario
id:
nome:
email:
tecnologia: Select
contato:
linkedin:
applyed:[
idVaga:
]
HomePage company
.../home/company(Token:)
id:
nome:
localidade:
vagas:[]
HomePage company
.../home/company/id/vagas
vagas:[
{
id:
nome:
periodo:
imagem:
Localidade:
userID:
}
]
HomePage company search
.../home/vaga/id
id:
nome:
periodo:
imagem:
Localidade:
userID:
descrição:{
title:
text:
}

Bibliotecas
YUP,
React-router-dom,
TotastFy,
Styled-componet,
Axios,
Icons,
React

Ferramentas
Trello,
Json server,
Figma.

Linguagem
Typescript

Links
https://trello.com/invite/b/Ffth3ZLM/ATTI12f912277c62e441c7bd03665c09a1d16B6543AF/gestao-de-projetos
https://www.figma.com/file/ahO3wwj35ynu8sGwxjmce1/devjobs?node-id=0%3A1&t=w9N34qLsDo6LS0gD-1

 	
