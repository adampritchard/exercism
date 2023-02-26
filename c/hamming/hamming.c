#include "hamming.h"

int compute(const char *lhs, const char *rhs)
{
    int dist = 0;

    // iterate over both pointers.
    for (; *lhs && *rhs; lhs += 1, rhs += 1)
    {
        // increase distance if not equal.
        if (*lhs != *rhs) dist += 1;
    }

    // invalid if lhs & rhs are not same length.
    if (*lhs != '\0' || *rhs != '\0') return -1;

    return dist;
}
