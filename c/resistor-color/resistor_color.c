#include "resistor_color.h"

int color_code(resistor_band_t band)
{
    return (int)band;
}

const resistor_band_t* colors()
{
    static const resistor_band_t arr[] = {
        BLACK,
        BROWN,
        RED,
        ORANGE,
        YELLOW,
        GREEN,
        BLUE,
        VIOLET,
        GREY,
        WHITE,
    };

    return arr;
}
