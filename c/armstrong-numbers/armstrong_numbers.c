#include <math.h>
#include "armstrong_numbers.h"

bool is_armstrong_number(int candidate)
{
    int exp = log10(candidate) + 1;

    int digits = candidate;
    int sum = 0;
    while (digits > 0) {
        int digit = digits % 10;
        sum += (int)pow(digit, exp);
        digits /= 10;
    }

    return candidate == sum;
}
