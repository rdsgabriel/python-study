---
title: "Plano Detalhado: Dia 2"
date: "2024-10-07"
---

# Plano Detalhado: Dia 2 - Variáveis e Tipos de Dados Básicos em Python

## Objetivos do Dia

- Entender o conceito de variáveis
- Aprender sobre os tipos de dados básicos: int, float, e string
- Praticar a atribuição de valores a variáveis
- Compreender a diferença entre os tipos de dados

## Cronograma Sugerido

### 1. Introdução às Variáveis (30 minutos)

- Explicação: Variáveis são como "caixas" que armazenam dados na memória do computador.
- Sintaxe: `nome_da_variavel = valor`
- Regras para nomes de variáveis:
  - Devem começar com uma letra ou underscore
  - Podem conter letras, números e underscores
  - São case-sensitive (idade ≠ Idade)
- Exemplo prático:

  ```python
  idade = 25
  nome = "Maria"
  print(idade)
  print(nome)
  ```

### 2. Tipo de Dado: Inteiros (int) (20 minutos)

- Explicação: Números inteiros sem parte fracionária
- Exemplos:

  ```python
  quantidade_livros = 10
  temperatura = -5
  ano_nascimento = 1995
  ```

- Prática: Crie variáveis para armazenar sua idade, ano de nascimento e número de irmãos.

### 3. Tipo de Dado: Ponto Flutuante (float) (20 minutos)

- Explicação: Números com parte fracionária
- Exemplos:

  ```python
  altura = 1.75
  peso = 68.5
  pi = 3.14159
  ```

- Prática: Crie variáveis para armazenar sua altura, peso e a temperatura atual.

### 4. Tipo de Dado: String (str) (30 minutos)

- Explicação: Sequências de caracteres (texto)
- Podem usar aspas simples ou duplas
- Exemplos:

  ```python
  nome = "João"
  cidade = 'São Paulo'
  frase = "Python é 'incrível'!"
  ```

- Strings multilinhas com aspas triplas
- Prática: Crie variáveis para armazenar seu nome completo, sua cidade natal e sua cor favorita.

### 5. Verificando o Tipo de uma Variável (20 minutos)

- Uso da função `type()`
- Exemplos:

  ```python
  x = 10
  y = "Hello"
  z = 3.14
  print(type(x))  # <class 'int'>
  print(type(y))  # <class 'str'>
  print(type(z))  # <class 'float'>
  ```

- Prática: Use `type()` para verificar o tipo de todas as variáveis criadas até agora.

### 6. Conversão entre Tipos (30 minutos)

- Funções `int()`, `float()`, e `str()`
- Exemplos:

  ```python
  a = int("5")
  b = float("3.14")
  c = str(42)
  ```

- Prática: Converta alguns valores entre diferentes tipos e imprima os resultados.

### 7. Exercício Prático Final (30 minutos)

Crie um programa que:

1. Peça ao usuário seu nome, idade e altura
2. Armazene essas informações em variáveis apropriadas
3. Calcule o ano de nascimento (considere o ano atual)
4. Imprima um resumo formatado com todas as informações

Exemplo de código:

```python
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura em metros: "))

ano_atual = 2024  # Atualize isso conforme necessário
ano_nascimento = ano_atual - idade

print(f"\nResumo:")
print(f"Nome: {nome}")
print(f"Idade: {idade} anos")
print(f"Altura: {altura:.2f} metros")
print(f"Ano de nascimento: {ano_nascimento}")
print(f"Tipo da variável nome: {type(nome)}")
print(f"Tipo da variável idade: {type(idade)}")
print(f"Tipo da variável altura: {type(altura)}")
```

### 8. Revisão e Perguntas (20 minutos)

- Revise os conceitos aprendidos
- Esclareça dúvidas
- Discuta possíveis aplicações práticas dos conceitos no dia a dia

## Tarefa para Casa

Crie um programa que calcule o IMC (Índice de Massa Corporal) do usuário. O programa deve:

1. Pedir o peso em kg e a altura em metros
2. Calcular o IMC (peso / (altura * altura))
3. Imprimir o resultado com duas casas decimais

Dica: Use a função `round(numero, 2)` para arredondar para duas casas decimais.
