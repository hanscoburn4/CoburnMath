# Logarithmic Functions - Key Concepts

## Learning Objectives
- Define logarithmic functions as inverses of exponential functions
- Convert between exponential and logarithmic forms
- Evaluate logarithmic expressions using properties of logarithms
- Solve logarithmic equations
- Apply logarithmic functions to real-world problems

## Definition
A **logarithmic function** is the inverse of an exponential function.

If y = bˣ, then x = log_b(y)

**Read as**: "x equals log base b of y"

## Logarithmic Form ↔ Exponential Form
- **Logarithmic**: log_b(x) = y
- **Exponential**: bʸ = x

**Example**: log₂(8) = 3 ↔ 2³ = 8

## Properties of Logarithmic Functions

### Domain and Range
- **Domain**: (0, ∞)
- **Range**: All real numbers (-∞, ∞)

### Key Characteristics
- **x-intercept**: (1, 0)
- **Vertical asymptote**: x = 0
- **Passes through**: (1, 0) and (b, 1)

### Behavior Based on Base
- **b > 1**: Increasing function
- **0 < b < 1**: Decreasing function

## Common Logarithms

### Common Logarithm
log(x) = log₁₀(x)
- Base 10 logarithm
- Used in scientific applications

### Natural Logarithm
ln(x) = log_e(x)
- Base e logarithm
- Most important in calculus

## Properties of Logarithms

### Product Property
log_b(xy) = log_b(x) + log_b(y)

### Quotient Property
log_b(x/y) = log_b(x) - log_b(y)

### Power Property
log_b(xⁿ) = n·log_b(x)

### Change of Base Formula
log_b(x) = log_c(x)/log_c(b) = ln(x)/ln(b)

### Special Values
- log_b(1) = 0 (since b⁰ = 1)
- log_b(b) = 1 (since b¹ = b)
- log_b(bˣ) = x (inverse property)
- b^(log_b(x)) = x (inverse property)

## Solving Logarithmic Equations

### Method 1: Convert to Exponential Form
**Example**: log₃(x) = 4
Convert: 3⁴ = x
Therefore: x = 81

### Method 2: Use Properties of Logarithms
**Example**: log(x) + log(x-3) = 1
Combine: log[x(x-3)] = 1
Convert: x(x-3) = 10¹ = 10
Solve: x² - 3x - 10 = 0
Solutions: x = 5 or x = -2
Check domain: x = 5 (x = -2 is extraneous)

### Method 3: Same Base Method
If log_b(x) = log_b(y), then x = y

## Real-World Applications

### Richter Scale (Earthquakes)
M = log₁₀(I/I₀)
- Logarithmic scale for earthquake intensity

### pH Scale (Chemistry)
pH = -log₁₀[H⁺]
- Measures acidity/alkalinity

### Decibel Scale (Sound)
dB = 10·log₁₀(I/I₀)
- Measures sound intensity

### Carbon Dating
t = (ln(N/N₀))/(-λ)
- Determines age of organic materials

## Problem-Solving Strategies

1. **Identify the form**: Determine if conversion is needed
2. **Apply properties**: Use logarithm properties to simplify
3. **Check domain**: Ensure all arguments are positive
4. **Verify solutions**: Substitute back into original equation
5. **Interpret results**: Consider context in real-world problems

## Common Mistakes to Avoid
- Forgetting domain restrictions (arguments must be positive)
- Misapplying properties (log(x+y) ≠ log(x) + log(y))
- Not checking for extraneous solutions
- Confusing natural and common logarithms

## Assessment Checklist
- [ ] Can convert between exponential and logarithmic forms
- [ ] Can evaluate logarithmic expressions
- [ ] Can apply properties of logarithms correctly
- [ ] Can solve logarithmic equations
- [ ] Can use logarithms in real-world applications
- [ ] Can identify and avoid common errors