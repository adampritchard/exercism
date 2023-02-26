#include "grains.h"

uint64_t square(uint8_t index)
{
    if (index < 1 || index > 64) return 0;
    return (uint64_t)1 << (index - 1);
}

uint64_t total()
{
    uint64_t sum = 0;
    for (int index = 1; index <= 64; index += 1)
    {
        sum += square(index);
    }
    return sum;
}
