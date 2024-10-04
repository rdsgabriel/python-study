---
title: "Plano Detalhado: Dia 4"
date: "2024-10-09"
---


# Plano Detalhado: Dia 4 - Strings e Operações com Strings em Python

## Objetivos do Dia

- Aprofundar o entendimento sobre strings em Python
- Aprender operações básicas com strings
- Explorar métodos comuns de manipulação de strings
- Praticar a formatação de strings

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular brevemente as operações matemáticas do dia anterior
- Verificar se há dúvidas pendentes

### 2. Introdução às Strings (30 minutos)

- Definição de strings
- Criação de strings com aspas simples, duplas e triplas
- Caracteres de escape (\n, \t, \\, etc.)
- Exemplos:

  ```python
  nome = "Alice"
  frase = 'Python é "incrível"!'
  texto_longo = """Este é um texto
  que ocupa várias linhas."""
  print(nome)
  print(frase)
  print(texto_longo)
  ```

- Exercício: Crie diferentes tipos de strings e imprima-as

### 3. Concatenação e Repetição de Strings (30 minutos)

- Concatenação usando o operador +
- Repetição usando o operador *
- Exemplos:

  ```python
  primeiro_nome = "João"
  sobrenome = "Silva"
  nome_completo = primeiro_nome + " " + sobrenome
  print(nome_completo)
  
  print("Hip " * 3 + "Hurra!")
  ```

- Exercício: Crie um programa que pede o nome e sobrenome do usuário e imprime o nome completo

### 4. Indexação e Fatiamento de Strings (45 minutos)

- Acessando caracteres individuais com índices
- Fatiamento de strings [inicio:fim:passo]
- Índices negativos
- Exemplos:

  ```python
  palavra = "Python"
  print(palavra[0])    # P
  print(palavra[-1])   # n
  print(palavra[2:5])  # tho
  print(palavra[::-1]) # nohtyP
  ```

- Exercício: Crie um programa que verifica se uma palavra é um palíndromo

### 5. Métodos de String (60 minutos)

- lower(), upper(), title(), capitalize()
- strip(), lstrip(), rstrip()
- replace()
- find(), index()
- startswith(), endswith()
- Exemplos:

  ```python
  texto = "  Python é Incrível  "
  print(texto.lower())
  print(texto.upper())
  print(texto.strip())
  print(texto.replace("Incrível", "Fantástico"))
  print(texto.find("é"))
  ```

- Exercício: Crie um programa que pede uma frase ao usuário e aplica diferentes métodos de string, mostrando os resultados

### 6. Formatação de Strings (45 minutos)

- Usando o método format()
- F-strings (a partir do Python 3.6)
- Especificadores de formato (.2f, :02d, etc.)
- Exemplos:

  ```python
  nome = "Alice"
  idade = 30
  print("Olá, {}. Você tem {} anos.".format(nome, idade))
  print(f"Olá, {nome}. Você tem {idade} anos.")
  pi = 3.14159
  print(f"O valor de pi é aproximadamente {pi:.2f}")
  ```

- Exercício: Crie um programa que formata e exibe informações de um produto (nome, preço, quantidade em estoque)

### 7. Operações Úteis com Strings (30 minutos)

- Verificação de conteúdo: in, not in
- Comprimento de uma string: len()
- Conversão entre strings e listas: split(), join()
- Exemplos:

  ```python
  frase = "Python é uma linguagem de programação"
  print("Python" in frase)
  print(len(frase))
  palavras = frase.split()
  print(palavras)
  nova_frase = " ".join(palavras)
  print(nova_frase)
  ```

- Exercício: Crie um programa que conta o número de palavras em uma frase fornecida pelo usuário

### 8. Projeto Prático (45 minutos)

Desenvolva um programa de análise de texto que:

1. Pede ao usuário para inserir um texto
2. Conta o número total de caracteres
3. Conta o número de palavras
4. Identifica a palavra mais longa
5. Conta a frequência de cada letra (ignorando maiúsculas/minúsculas)
6. Exibe todas essas informações formatadas

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta aplicações práticas das operações com strings em programação

## Tarefa para Casa

Crie um programa que:

1. Pede ao usuário para inserir uma frase
2. Converte a frase para:
   - Todas as letras maiúsculas
   - Todas as letras minúsculas
   - Primeira letra de cada palavra em maiúscula
3. Remove todos os espaços em branco do início e do fim
4. Substitui todas as ocorrências de uma palavra específica por outra
5. Inverte a ordem das palavras na frase
