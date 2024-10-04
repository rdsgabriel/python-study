---
title: "Plano Detalhado: Dia 9"
date: "2024-10-14"
---

# Plano Detalhado: Dia 9 - Tuplas e Dicionários em Python

## Objetivos do Dia

- Entender o conceito e uso de tuplas
- Aprender a criar e manipular dicionários
- Explorar métodos e operações com tuplas e dicionários
- Praticar o uso dessas estruturas de dados em programas Python

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular listas e suas operações
- Verificar se há dúvidas pendentes

### 2. Introdução às Tuplas (30 minutos)

- O que são tuplas e quando usá-las
- Criação de tuplas
- Imutabilidade das tuplas
- Exemplos:

  ```python
  coordenadas = (10, 20)
  pessoa = ("Alice", 30, "Engenheira")
  singleton = (42,)  # Tupla com um único elemento
  ```

- Exercício: Crie uma tupla representando um ponto no espaço 3D (x, y, z)

### 3. Operações com Tuplas (45 minutos)

- Indexação e slicing
- Desempacotamento de tuplas
- Tuplas em loops
- Exemplos:

  ```python
  coordenadas = (10, 20, 30)
  x, y, z = coordenadas
  for item in coordenadas:
      print(item)
  ```

- Exercício: Crie um programa que troca os valores de duas variáveis usando tuplas

### 4. Introdução aos Dicionários (45 minutos)

- O que são dicionários e por que são úteis
- Criação de dicionários
- Acessando e modificando valores
- Exemplos:

  ```python
  pessoa = {"nome": "João", "idade": 25, "profissao": "programador"}
  print(pessoa["nome"])
  pessoa["idade"] = 26
  ```

- Exercício: Crie um dicionário representando um livro (título, autor, ano, etc.)

### 5. Métodos de Dicionários (45 minutos)

- keys(), values(), items()
- get(), setdefault()
- update(), pop(), clear()
- Exemplos:

  ```python
  d = {"a": 1, "b": 2, "c": 3}
  print(d.keys())
  print(d.get("d", 0))
  d.update({"d": 4, "e": 5})
  ```

- Exercício: Crie um programa de contagem de palavras em um texto usando um dicionário

### 6. Loops com Dicionários (30 minutos)

- Iterando sobre chaves, valores e itens
- Exemplos:

  ```python
  for chave in d:
      print(chave, d[chave])
  
  for chave, valor in d.items():
      print(f"{chave}: {valor}")
  ```

- Exercício: Crie um programa que imprime um "menu" de opções a partir de um dicionário

### 7. Dicionários e Listas Aninhados (45 minutos)

- Listas de dicionários
- Dicionários como valores de outros dicionários
- Exemplos:

  ```python
  alunos = [
      {"nome": "Alice", "notas": [8, 9, 7]},
      {"nome": "Bob", "notas": [7, 8, 9]}
  ]
  for aluno in alunos:
      print(f"{aluno['nome']}: {sum(aluno['notas'])/len(aluno['notas']):.2f}")
  ```

- Exercício: Crie uma estrutura de dados para representar uma agenda de contatos com múltiplos números por pessoa

### 8. Projeto Prático (60 minutos)

Desenvolva um programa de gerenciamento de um pequeno estoque que:

1. Usa um dicionário para armazenar itens (chave: nome do item, valor: outro dicionário com preço e quantidade)
2. Permite adicionar novos itens
3. Atualiza o preço ou a quantidade de itens existentes
4. Remove itens do estoque
5. Exibe um relatório do estoque, incluindo o valor total
6. Usa tuplas para representar transações (item, quantidade, tipo de operação)

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta as diferenças e usos apropriados de listas, tuplas e dicionários

## Tarefa para Casa

Crie um programa de agenda de compromissos que:

1. Usa um dicionário onde as chaves são datas (no formato de tuplas: (ano, mês, dia)) e os valores são listas de compromissos
2. Permite adicionar, remover e listar compromissos
3. Mostra compromissos de um dia específico
4. Lista todos os compromissos em um intervalo de datas
5. Usa tuplas para representar horários dos compromissos
