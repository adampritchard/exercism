#include "isogram.h"
#include <stddef.h>
#include <ctype.h>

// used to map from a-z to 0-25
const int CHAR_INDEX_OFFSET = 'a';

bool is_isogram(const char phrase[])
{
    if (phrase == NULL) return false;

    bool foundChars[26] = { false };

    for (int index = 0; phrase[index] != '\0'; index += 1)
    {
        // ignore if char is not a letter.
        if (!isalpha(phrase[index])) continue;

        char c = tolower(phrase[index]);

        // check if we've already found this char.
        if (foundChars[c - CHAR_INDEX_OFFSET]) return false;

        // mark char as found.
        foundChars[c - CHAR_INDEX_OFFSET] = true;
    }

    // if we've made it here then we have an isogram.
    return true;
}
