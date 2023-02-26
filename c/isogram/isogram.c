#include "isogram.h"
#include <stddef.h>
#include <ctype.h>

bool is_isogram(const char phrase[])
{
    if (phrase == NULL) return false;

    // use bit flags to indicate which chars we've found.
    unsigned int flags = 0;

    for (int index = 0; phrase[index] != '\0'; index += 1)
    {
        // ignore if char is not a letter.
        if (!isalpha(phrase[index])) continue;

        char c = tolower(phrase[index]);
        unsigned int flag = 1 << (c - 'a');

        // check if we've already found this char.
        if (flags & flag) return false;

        // flag char as found.
        flags |= flag;
    }

    // if we've made it here then we have an isogram.
    return true;
}
