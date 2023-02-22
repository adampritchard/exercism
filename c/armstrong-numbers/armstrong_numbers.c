#include <math.h>
#include "armstrong_numbers.h"

static int number_of_digits(int n) {
    int count = 0;

    do {
        count += 1;
        n /= 10;
    } while (n > 0);

    return count;
}

bool is_armstrong_number(int candidate)
{
    int exp = number_of_digits(candidate);

    int digits = candidate;
    int sum = 0;
    while (digits > 0) {
        int digit = digits % 10;
        sum += (int)pow(digit, exp);
        digits /= 10;
    }

    return candidate == sum;
}
