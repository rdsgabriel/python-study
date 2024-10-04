---
title: "Plano Detalhado: Dia 5"
date: "2024-10-11"
---
# Plano Detalhado: Dia 6 - Condicionais em Python

## Objetivos do Dia

- Entender e aplicar estruturas condicionais (if, elif, else)
- Aprender sobre operadores de comparação e lógicos
- Praticar a criação de programas com lógica condicional

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular input do usuário e conversão de tipos
- Verificar se há dúvidas pendentes

### 2. Introdução às Estruturas Condicionais (30 minutos)

- Conceito de tomada de decisão em programação
- Sintaxe básica do if
- Exemplos:

  ```python
  idade = int(input("Digite sua idade: "))
  if idade >= 18:
      print("Você é maior de idade.")
  ```

- Exercício: Crie um programa que verifica se um número é positivo, negativo ou zero

### 3. Estruturas if-else (30 minutos)

- Adicionando uma alternativa com else
- Exemplos:

  ```python
  numero = int(input("Digite um número: "))
  if numero % 2 == 0:
      print("O número é par.")
  else:
      print("O número é ímpar.")
  ```

- Exercício: Crie um programa que simula um jogo de cara ou coroa

### 4. Estruturas if-elif-else (45 minutos)

- Usando elif para múltiplas condições
- Exemplos:

  ```python
  nota = float(input("Digite sua nota: "))
  if nota >= 90:
      print("A")
  elif nota >= 80:
      print("B")
  elif nota >= 70:
      print("C")
  else:
      print("D")
  ```

- Exercício: Crie um programa que classifica um triângulo baseado no tamanho dos lados

### 5. Operadores de Comparação (30 minutos)

- ==, !=, <, >, <=, >=
- Comparação de strings
- Exemplos:

  ```python
  x = 5
  y = 10
  print(x == y)  # False
  print(x < y)   # True
  print("apple" < "banana")  # True
  ```

- Exercício: Crie um programa que compara duas palavras e diz qual vem primeiro alfabeticamente

### 6. Operadores Lógicos (45 minutos)

- and, or, not
- Tabelas verdade
- Exemplos:

  ```python
  idade = 25
  tem_carteira = True
  pode_dirigir = idade >= 18 and tem_carteira
  print(pode_dirigir)  # True
  ```

- Exercício: Crie um programa que verifica se um ano é bissexto

### 7. Condicionais Aninhados (30 minutos)

- Estruturas if dentro de outras estruturas if
- Exemplos:

  ```python
  idade = int(input("Digite sua idade: "))
  if idade >= 18:
      tem_carteira = input("Você tem carteira de motorista? (s/n) ").lower() == 's'
      if tem_carteira:
          print("Você pode dirigir.")
      else:
          print("Você precisa tirar a carteira primeiro.")
  else:
      print("Você é muito jovem para dirigir.")
  ```

- Exercício: Crie um programa que determina o preço de um ingresso baseado na idade e se é estudante ou não

### 8. Projeto Prático (60 minutos)

Desenvolva um jogo de adivinhação que:

1. Gera um número aleatório entre 1 e 100
2. Pede ao usuário para adivinhar o número
3. Dá dicas se o palpite é muito alto ou muito baixo
4. Continua até que o usuário acerte
5. Conta o número de tentativas e dá uma pontuação baseada nisso

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta a importância das estruturas condicionais na lógica de programação

## Tarefa para Casa

Crie um programa de "Pedra, Papel e Tesoura" que:

1. Pede a escolha do usuário
2. Gera uma escolha aleatória para o computador
3. Determina o vencedor baseado nas regras do jogo
4. Permite múltiplas rodadas
5. Mantém uma pontuação geral
