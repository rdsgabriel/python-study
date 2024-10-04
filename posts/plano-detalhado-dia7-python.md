---
title: "Plano Detalhado: Dia 7"
date: "2024-10-12"
---

# Plano Detalhado: Dia 7 - Loops em Python

## Objetivos do Dia

- Entender e aplicar loops while e for
- Aprender sobre controle de fluxo em loops (break, continue)
- Praticar a criação de programas com estruturas de repetição

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular estruturas condicionais
- Verificar se há dúvidas pendentes

### 2. Introdução aos Loops (30 minutos)

- Conceito de repetição em programação
- Quando e por que usar loops
- Exemplos simples de tarefas repetitivas

### 3. Loops While (45 minutos)

- Sintaxe e funcionamento do loop while
- Condição de parada
- Exemplos:

  ```python
  contador = 0
  while contador < 5:
      print(contador)
      contador += 1
  ```

- Exercício: Crie um programa que pede números ao usuário até que ele digite 0

### 4. Loops For (45 minutos)

- Sintaxe e funcionamento do loop for
- Uso com range()
- Iteração sobre sequências (strings, listas)
- Exemplos:

  ```python
  for i in range(5):
      print(i)
  
  for letra in "Python":
      print(letra)
  ```

- Exercício: Crie um programa que calcula a soma dos números de 1 a N, onde N é fornecido pelo usuário

### 5. Nested Loops (30 minutos)

- Loops dentro de loops
- Exemplos com padrões e matrizes
- Exemplos:

  ```python
  for i in range(3):
      for j in range(3):
          print(f"({i}, {j})", end=" ")
      print()
  ```

- Exercício: Crie um programa que imprime um padrão de asteriscos formando um triângulo

### 6. Controle de Fluxo em Loops (45 minutos)

- break: sair do loop
- continue: pular para a próxima iteração
- else em loops
- Exemplos:

  ```python
  for num in range(2, 10):
      for i in range(2, num):
          if num % i == 0:
              print(f"{num} não é primo")
              break
      else:
          print(f"{num} é primo")
  ```

- Exercício: Crie um jogo de adivinhação com um número limitado de tentativas, usando break quando o usuário acertar

### 7. List Comprehensions (30 minutos)

- Sintaxe básica de list comprehensions
- Comparação com loops for tradicionais
- Exemplos:

  ```python
  quadrados = [x**2 for x in range(10)]
  print(quadrados)
  ```

- Exercício: Use uma list comprehension para criar uma lista de números pares de 0 a 20

### 8. Projeto Prático (60 minutos)

Desenvolva um programa de análise de texto que:

1. Pede ao usuário para inserir um texto
2. Conta o número de palavras
3. Identifica a palavra mais frequente
4. Lista todas as palavras únicas em ordem alfabética
5. Permite ao usuário buscar por uma palavra e mostra quantas vezes ela aparece

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta a importância dos loops na automação de tarefas repetitivas

## Tarefa para Casa

Crie um programa que simula um caixa eletrônico:

1. Inicia com um saldo predefinido
2. Apresenta um menu com opções (ver saldo, sacar, depositar, sair)
3. Usa um loop para manter o programa rodando até que o usuário escolha sair
4. Implementa cada operação usando funções separadas
5. Usa estruturas condicionais para validar operações (ex: não permitir saques maiores que o saldo)
