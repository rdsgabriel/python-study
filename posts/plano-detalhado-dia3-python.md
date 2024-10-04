---
title: "Plano Detalhado: Dia 3"
date: "2024-10-08"
---

# Plano Detalhado: Dia 3 - Operações Matemáticas Básicas em Python

## Objetivos do Dia

- Aprender sobre operações matemáticas básicas em Python
- Entender a ordem das operações
- Introduzir o conceito de módulo e exponenciação
- Praticar cálculos simples usando Python

## Cronograma Sugerido

### 1. Revisão Rápida (15 minutos)

- Recapitular brevemente variáveis e tipos de dados do dia anterior
- Verificar se há dúvidas pendentes

### 2. Operações Aritméticas Básicas (45 minutos)

- Adição (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/)
- Exemplos:

  ```python
  a = 10
  b = 3
  print(a + b)  # 13
  print(a - b)  # 7
  print(a * b)  # 30
  print(a / b)  # 3.3333...
  ```

- Prática: Crie um programa que realiza estas quatro operações com dois números fornecidos pelo usuário.

### 3. Divisão Inteira e Módulo (30 minutos)

- Divisão inteira (//)
- Módulo (%) - resto da divisão
- Exemplos:

  ```python
  print(10 // 3)  # 3
  print(10 % 3)   # 1
  ```

- Aplicações práticas do módulo (ex: verificar se um número é par ou ímpar)
- Exercício: Crie um programa que verifica se um número é par ou ímpar usando o operador módulo.

### 4. Exponenciação e Raiz Quadrada (30 minutos)

- Exponenciação (**)
- Raiz quadrada (usando math.sqrt() ou **)
- Exemplos:

  ```python
  print(2 ** 3)  # 8
  print(9 ** 0.5)  # 3.0
  
  import math
  print(math.sqrt(16))  # 4.0
  ```

- Exercício: Calcule a área de um círculo dado o raio (A = πr²)

### 5. Ordem das Operações (45 minutos)

- Explicar a precedência dos operadores (PEMDAS: Parênteses, Exponenciação, Multiplicação/Divisão, Adição/Subtração)
- Exemplos:

  ```python
  print(2 + 3 * 4)    # 14
  print((2 + 3) * 4)  # 20
  ```

- Prática: Escreva expressões matemáticas complexas e calcule o resultado

### 6. Operadores de Atribuição Composta (30 minutos)

- +=, -=, *=, /=
- Exemplos:

  ```python
  x = 5
  x += 3  # Equivalente a x = x + 3
  print(x)  # 8
  ```

- Exercício: Crie um programa que simula uma conta bancária, permitindo depósitos e saques usando operadores de atribuição composta.

### 7. Funções Matemáticas da Biblioteca math (45 minutos)

- Importar a biblioteca math
- Explorar funções como math.ceil(), math.floor(), math.trunc()
- Funções trigonométricas (sin, cos, tan)
- Constantes (math.pi, math.e)
- Exemplo:

  ```python
  import math
  
  print(math.ceil(3.7))   # 4
  print(math.floor(3.7))  # 3
  print(math.sin(math.pi/2))  # 1.0
  ```

- Exercício: Crie um programa que calcula o seno, cosseno e tangente de um ângulo fornecido pelo usuário (em graus).

### 8. Projeto Prático (60 minutos)

Desenvolva uma calculadora simples que:

1. Pede ao usuário para escolher uma operação (adição, subtração, multiplicação, divisão, exponenciação)
2. Solicita dois números
3. Realiza a operação escolhida
4. Exibe o resultado
5. Pergunta se o usuário quer fazer outro cálculo ou sair

### 9. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta aplicações práticas das operações matemáticas em programação

## Tarefa para Casa

Crie um programa que:

1. Pede ao usuário para inserir um número inteiro
2. Calcula e exibe:
   - O quadrado do número
   - A raiz quadrada do número
   - O fatorial do número (dica: use um loop)
   - Se o número é primo ou não
