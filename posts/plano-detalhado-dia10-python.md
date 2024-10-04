---
title: "Plano Detalhado: Dia 10"
date: "2024-10-15"
---

# Plano Detalhado: Dia 10 - Funções em Python

## Objetivos do Dia

- Entender o conceito e importância das funções
- Aprender a definir e chamar funções
- Explorar parâmetros e retorno de funções
- Praticar a criação de funções para resolver problemas

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular tuplas e dicionários
- Verificar se há dúvidas pendentes

### 2. Introdução às Funções (30 minutos)

- O que são funções e por que são importantes
- Sintaxe básica de definição de funções
- Chamada de funções
- Exemplos:

  ```python
  def saudacao(nome):
      print(f"Olá, {nome}!")

  saudacao("Alice")
  ```

- Exercício: Crie uma função que calcule e imprima a área de um retângulo

### 3. Parâmetros de Funções (45 minutos)

- Parâmetros posicionais
- Parâmetros com valores padrão
- Argumentos nomeados
- Exemplos:

  ```python
  def potencia(base, expoente=2):
      return base ** expoente

  print(potencia(3))       # 9
  print(potencia(2, 3))    # 8
  print(potencia(expoente=3, base=2))  # 8
  ```

- Exercício: Crie uma função que calcule o IMC (Índice de Massa Corporal) com parâmetros para peso e altura

### 4. Retorno de Funções (45 minutos)

- A palavra-chave return
- Retornando múltiplos valores
- Funções sem retorno explícito (None)
- Exemplos:

  ```python
  def divisao_e_resto(a, b):
      quociente = a // b
      resto = a % b
      return quociente, resto

  q, r = divisao_e_resto(17, 5)
  print(f"Quociente: {q}, Resto: {r}")
  ```

- Exercício: Crie uma função que retorne o maior e o menor valor de uma lista

### 5. Escopo de Variáveis (30 minutos)

- Variáveis locais vs. globais
- A palavra-chave global
- Exemplos:

  ```python
  x = 10

  def funcao():
      global x
      x = 20
      y = 5
      print(f"Dentro da função: x = {x}, y = {y}")

  funcao()
  print(f"Fora da função: x = {x}")
  # print(y)  # Isso causaria um erro
  ```

- Exercício: Crie uma função que incrementa um contador global

### 6. Funções como Objetos de Primeira Classe (45 minutos)

- Atribuindo funções a variáveis
- Passando funções como argumentos
- Retornando funções
- Exemplos:

  ```python
  def somar(a, b):
      return a + b

  def aplicar_operacao(func, x, y):
      return func(x, y)

  resultado = aplicar_operacao(somar, 3, 4)
  print(resultado)  # 7
  ```

- Exercício: Crie uma função que retorna diferentes operações matemáticas com base em um parâmetro

### 7. Funções Lambda (30 minutos)

- Sintaxe e uso de funções lambda
- Uso com map(), filter(), e sort()
- Exemplos:

  ```python
  quadrado = lambda x: x**2
  print(quadrado(5))  # 25

  numeros = [1, 4, 2, 3, 5]
  pares = list(filter(lambda x: x % 2 == 0, numeros))
  ```

- Exercício: Use uma função lambda com sorted() para ordenar uma lista de tuplas pelo segundo elemento

### 8. Projeto Prático (60 minutos)

Desenvolva uma calculadora avançada que:

1. Define funções para operações básicas (soma, subtração, multiplicação, divisão)
2. Inclui funções para operações mais complexas (potência, raiz quadrada, fatorial)
3. Usa um dicionário para mapear strings de operação para funções
4. Implementa um loop principal que pede ao usuário a operação e os números
5. Usa tratamento de exceções para lidar com erros (como divisão por zero)
6. Permite ao usuário adicionar novas operações personalizadas em tempo de execução

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta a importância das funções na organização e reutilização de código

## Tarefa para Casa

Crie um programa de análise de texto que:

1. Define funções para diferentes análises (contagem de palavras, frequência de letras, palavras mais comuns, etc.)
2. Permite ao usuário escolher quais análises realizar
3. Retorne o resultado
