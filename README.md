#  Laboratório Git – Mini-Site (Local)

**Arquivos iniciais fornecidos**:
```
site-lab/
├─ index.html
├─ sobre.html
├─ styles.css
└─ script.js
```

---

## **Parte 1 – Operações Locais**

### Passo 0 – Configuração inicial
1. Configure a **branch padrão** para `main`.
2. Configure o **username** usando a primeira letra do seu nome + sobrenome (ex.: Leo Gloria → `lgloria`).
3. Configure o **email** do Git.
4. Verifique se as configurações foram aplicadas.

---

### Passo 1 – Iniciar repositório
1. Acesse a pasta do projeto pelo terminal.
2. Inicie um repositório Git.
3. Verifique o status.
4. Adicione todos os arquivos para a **staging area**.
5. Faça o commit inicial com a mensagem **"Versão inicial do site DevLab"**.
6. Liste o histórico em formato resumido.

---

### Passo 2 – Editar e commitar
1. Altere o `<h1>` da página inicial (`index.html`) para **"Bem-vindo ao meu Laboratório de Git!"**.
2. Verifique o que foi alterado.
3. Adicione o arquivo alterado à **staging area**.
4. Faça um commit com a mensagem **"Personaliza título da página inicial"**.
5. Liste o histórico.

---

### Passo 2A – Restaurar arquivo antes do commit
1. Edite `sobre.html` e adicione uma frase temporária.
2. Adicione o arquivo à **staging area**.
3. Remova o arquivo da **staging area**.
4. Desfaça a alteração no arquivo, voltando ao estado anterior.
5. Confirme que não há alterações pendentes.

---

### Passo 2B – Reverter commit
1. Edite `sobre.html` adicionando a frase **"Este texto será revertido!"**.
2. Faça commit dessa alteração.
3. Liste os commits e anote o ID.
4. Reverta o commit usando o ID anotado.
5. Confirme no arquivo que a alteração foi removida.

---

### Passo 2C – Reverter commit com conflito
1. No `index.html`, altere o `<h1>` para **"Versão de teste para conflito no revert"** e faça commit.
2. Alterar novamente o `<h1>` para **"Outro título diferente depois do commit"** e fazer commit.
3. Tentar reverter o primeiro commit.
4. Resolver o conflito no arquivo e fazer commit da resolução.

---

### Passo 3 – Criar branch
1. Criar uma branch chamada `nova-pagina`.
2. Criar o arquivo `contato.html` com título **"Página de Contato"** e um parágrafo com email fictício.
3. Fazer commit da nova página.
4. Voltar para a branch `main`.

---

### Passo 4 – Merge
1. Na branch `main`, fazer merge da branch `nova-pagina`.
2. Confirmar que o arquivo `contato.html` está disponível.

---

### Passo 5 – Stash
1. Editar `sobre.html` com uma linha temporária.
2. Guardar essa alteração no stash.
3. Listar os itens no stash.
4. Recuperar a alteração usando o stash.

---

### Passo 6 – Stage avançado (`add -p`)
1. Editar `sobre.html` e adicionar duas linhas diferentes.
2. Adicionar somente a primeira alteração à **staging area**.
3. Fazer commit da primeira alteração.
4. Adicionar e commitar a segunda alteração.

---

### Passo 7 – Cherry-pick
1. Criar uma branch chamada `melhorias-sobre`.
2. Editar `sobre.html` com uma melhoria exclusiva.
3. Fazer commit dessa melhoria.
4. Voltar para `main`.
5. Pegar apenas esse commit específico e aplicá-lo na `main`.
6. Confirmar que a melhoria foi aplicada.

---

## **Parte 2 – Trabalhando com Remotes (Local)**

### Passo 8 – Criar um repositório remoto local
1. Criar uma pasta chamada `server` fora da pasta `site-lab`.
2. Entrar na pasta `server`.
3. Criar um repositório bare (`--bare`).
4. Explicar o que é um repositório bare e para que serve.

---

### Passo 9 – Conectar o repositório local ao servidor
1. Voltar para a pasta `site-lab`.
2. Adicionar o repositório `server` como remoto com o nome `origin`.
3. Verificar se o remote foi configurado corretamente.

---

### Passo 10 – Enviar commits para o servidor
1. Enviar a branch `main` para o `origin`.
2. Confirmar que o push foi realizado.

---

### Passo 11 – Clonar do servidor
1. Sair da pasta atual.
2. Clonar o repositório bare `server` para uma nova pasta `site-clone`.
3. Confirmar que os arquivos estão no clone.

---

### Passo 12 – Trabalhar com fetch e pull
1. No `site-clone`, alterar `sobre.html` e fazer commit.
2. Enviar as alterações para o `origin`.
3. No `site-lab`, usar `fetch` para trazer as referências.
4. Usar `pull` para aplicar as alterações localmente.

---

### Passo 13 – Simular colaboração
1. No `site-lab`, fazer uma alteração em `index.html` e commit.
2. Enviar para o `origin`.
3. No `site-clone`, fazer `pull` para receber a alteração.

---

### Passo 14 – Criar nova branch e enviar para o servidor
1. No `site-lab`, criar branch `alterar-footer` e fazer uma alteração no rodapé.
2. Commit e envio da branch para o `origin`.
3. Confirmar que a branch existe no remoto.

---

### Passo 15 – Trazer branch nova para outro clone
1. No `site-clone`, verificar que a branch `alterar-footer` não existe localmente.
2. Buscar do `origin` e mudar para a nova branch.
3. Confirmar a alteração no rodapé.

---

### Passo 16 – Deletar branch no remoto
1. No `site-lab`, deletar a branch `alterar-footer` no `origin`.
2. Confirmar que ela foi removida do remoto.

---

### Passo 17 – Clonar em outro diretório e conferir tudo
1. Sair das pastas atuais.
2. Clonar o repositório bare `server` para `site-final`.
3. Confirmar que as alterações anteriores estão presentes.

---

### Passo 18 – Clonar e simular outro usuário
1. Clonar o repositório bare `server` para `site-outro-dev`.
2. Entrar na pasta e configurar `user.name` e `user.email` diferentes apenas localmente.
3. Confirmar que as configurações foram aplicadas nesse repositório.

---

### Passo 19 – Simular colaboração e merge
1. No `site-outro-dev`, alterar `sobre.html` e fazer commit.
2. Enviar alteração para o `origin`.
3. No `site-lab`, alterar `sobre.html` em outra linha e fazer commit.
4. Tentar enviar e resolver o conflito com `pull` se necessário.
5. Enviar a resolução para o `origin`.
6. No `site-outro-dev`, fazer `pull` para receber a versão final.
