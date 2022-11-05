#!/bin/sh

if test $(whereis cargo | grep -c cargo) = 1 ; then
    echo "cargo already installed"
else
    echo "installing cargo"
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    echo ". \"$HOME/.cargo/env\"" > $HOME/.profile
    source $HOME/.cargo/env
fi

if test $(whereis rustup | grep -c rustup) = 1 ; then
    echo "rustup already installed"
else
    echo "installing rustup"
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    echo ". \"$HOME/.cargo/env\"" > $HOME/.profile
    source $HOME/.cargo/env
fi

if test $(whereis wasm-pack | grep -c wasm-pack) = 1 ; then
    echo "wasm-pack already installed"
else
    echo "installing wasm pack"
    cargo install wasm-pack
fi

if test $(whereis cargo-generate | grep -c cargo-generate) = 1 ; then
    echo "cargo-generate already installed"
else
    echo "installing cargo-generate"
    cargo install cargo-generate
fi
