#!/bin/sh

for d in */ ; do
    # rm -rf "./$d/.git/"
    # filename="./$d/.gitignore" && test -f $filename || touch $filename
    # printf "%s%s%s%s%s%s\n" "[" $d "]" "(" "./$d" ")"
done
