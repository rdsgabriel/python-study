---
title: "Plano Detalhado: Dia 5"
date: "2024-10-10"
---
# Plano Detalhado: Dia 5 - Input do Usuário e Conversão de Tipos em Python

## Objetivos do Dia

- Aprender a obter input do usuário
- Entender e praticar a conversão entre diferentes tipos de dados
- Lidar com erros básicos de input

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular brevemente as operações com strings do dia anterior
- Verificar se há dúvidas pendentes

### 2. Introdução ao Input do Usuário (30 minutos)

- Função input()
- Armazenando input em variáveis
- Exemplos:

  ```python
  nome = input("Digite seu nome: ")
  print(f"Olá, {nome}!")
  ```

- Exercício: Crie um programa que pede o nome e a idade do usuário e os imprime

### 3. Conversão de Tipos (45 minutos)

- int(), float(), str()
- Conversão implícita vs. explícita
- Exemplos:

  ```python
  idade_str = input("Digite sua idade: ")
  idade = int(idade_str)
  altura = float(input("Digite sua altura em metros: "))
  print(f"Daqui a 5 anos você terá {idade + 5} anos e sua altura é {altura} metros.")
  ```

- Exercício: Crie uma calculadora simples que pede dois números e a operação desejada

### 4. Lidando com Erros de Input (45 minutos)

- Introdução a try/except
- Validação básica de input
- Exemplos:

  ```python
  try:
      numero = int(input("Digite um número: "))
      print(f"O dobro de {numero} é {numero * 2}")
  except ValueError:
      print("Erro: Por favor, digite um número válido.")
  ```

- Exercício: Modifique a calculadora para lidar com inputs inválidos

### 5. Formatação de Output (30 minutos)

- Revisão de f-strings
- Formatação de números (casas decimais, alinhamento)
- Exemplos:

  ```python
  preco = 19.99
  quantidade = 3
  total = preco * quantidade
  print(f"{'Produto':<10}{'Preço':>10}{'Qtd':>5}{'Total':>10}")
  print(f"{'Item':<10}{preco:>10.2f}{quantidade:>5d}{total:>10.2f}")
  ```

- Exercício: Crie um programa que gera uma "nota fiscal" simples

### 6. Input Multilinhas (30 minutos)

- Usando input() em um loop
- Exemplos:

  ```python
  print("Digite várias linhas de texto (Enter duas vezes para finalizar):")
  linhas = []
  while True:
      linha = input()
      if linha == "":
          break
      linhas.append(linha)
  texto_completo = "\n".join(linhas)
  print("Você digitou:")
  print(texto_completo)
  ```

- Exercício: Crie um programa que permite ao usuário digitar várias tarefas e depois as exibe em uma lista numerada

### 7. Projeto Prático (60 minutos)

Desenvolva um programa de cadastro simples que:

1. Pede informações pessoais (nome, idade, altura, peso)
2. Calcula o IMC (Índice de Massa Corporal)
3. Classifica o IMC em categorias (abaixo do peso, normal, sobrepeso, etc.)
4. Exibe um relatório formatado com todas as informações
5. Lida com possíveis erros de input

### 8. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta a importância da validação de input em programas reais

## Tarefa para Casa

Crie um programa de quiz que:

1. Faz uma série de perguntas ao usuário
2. Aceita respostas de múltipla escolha
3. Mantém uma pontuação
4. Lida com respostas inválidas
5. No final, exibe a pontuação total e uma mensagem baseada no desempenho
