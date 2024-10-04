---
title: "Plano Detalhado: Dia 8"
date: "2024-10-13"
---

# Plano Detalhado: Dia 8 - Listas em Python (continuação)

  ```python
  numeros = [1, 2, 3, 4, 5]
  misturado = [1, "dois", 3.0, [4, 5]]
  ```

- Exercício: Crie uma lista de seus 5 filmes favoritos

### 3. Acessando e Modificando Listas (45 minutos)

- Indexação e slicing de listas
- Modificando elementos
- Adicionando e removendo elementos
- Exemplos:

  ```python
  frutas = ["maçã", "banana", "laranja"]
  print(frutas[1])  # banana
  frutas[0] = "pera"
  frutas.append("uva")
  del frutas[2]
  ```

- Exercício: Crie um programa que permite ao usuário adicionar e remover itens de uma lista de compras

### 4. Métodos de Listas (45 minutos)

- append(), extend(), insert()
- remove(), pop(), clear()
- index(), count()
- sort(), reverse()
- Exemplos:

  ```python
  numeros = [1, 3, 2, 4, 2]
  numeros.append(5)
  numeros.insert(0, 0)
  numeros.sort()
  print(numeros.count(2))
  ```

- Exercício: Crie um programa que ordena uma lista de nomes alfabeticamente

### 5. Listas e Loops (30 minutos)

- Iterando sobre listas com for
- Usando enumerate()
- Exemplos:

  ```python
  frutas = ["maçã", "banana", "laranja"]
  for fruta in frutas:
      print(fruta)
  
  for index, fruta in enumerate(frutas):
      print(f"{index}: {fruta}")
  ```

- Exercício: Crie um programa que imprime uma lista numerada de tarefas

### 6. List Comprehensions (Revisão e Aprofundamento) (30 minutos)

- Sintaxe avançada de list comprehensions
- Condicionais em list comprehensions
- Exemplos:

  ```python
  quadrados = [x**2 for x in range(10) if x % 2 == 0]
  print(quadrados)
  ```

- Exercício: Use uma list comprehension para criar uma lista de todas as vogais em uma frase

### 7. Funções Úteis para Listas (30 minutos)

- len(), sum(), max(), min()
- sorted() vs .sort()
- map() e filter()
- Exemplos:

  ```python
  numeros = [1, 5, 3, 2, 4]
  print(len(numeros))
  print(sum(numeros))
  print(max(numeros))
  quadrados = list(map(lambda x: x**2, numeros))
  pares = list(filter(lambda x: x % 2 == 0, numeros))
  ```

- Exercício: Crie um programa que calcula a média de uma lista de notas

### 8. Projeto Prático (60 minutos)

Desenvolva um programa de gerenciamento de playlist musical que:

1. Permite ao usuário adicionar músicas (título, artista, duração)
2. Remove músicas da playlist
3. Exibe a playlist completa
4. Ordena a playlist por diferentes critérios (título, artista, duração)
5. Calcula o tempo total da playlist
6. Permite buscar músicas por título ou artista

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta a importância das listas na organização e manipulação de dados

## Tarefa para Casa

Crie um programa de gerenciamento de estoque simples que:

1. Mantém uma lista de produtos (nome, preço, quantidade)
2. Permite adicionar novos produtos
3. Atualiza a quantidade de produtos existentes
4. Remove produtos esgotados
5. Exibe um relatório do estoque, ordenado por nome ou quantidade
6. Calcula o valor total do estoque
