#include <emscripten/emscripten.h>
#include <iostream>

EMSCRIPTEN_KEEPALIVE int add(int a, int b) {
    return a + b;
}