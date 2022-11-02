#!/bin/sh

for d in */ ; do
    rm -rf "./$d/.git/"
    echo $d
done
