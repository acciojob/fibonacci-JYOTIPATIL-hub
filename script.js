function fibonacci(n):
    if n == 1, return 0
    if n == 2, return 1

    a = 0
    b = 1

    for i = 3 to n:
        c = a + b
        a = b
        b = c

    return b


