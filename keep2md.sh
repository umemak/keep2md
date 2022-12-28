#!/bin/bash

while read -r f; do

  ./node_modules/.bin/ts-node keep2md.ts "$f" out
  mv "$f" done/

done < <(find ./in -mindepth 1 -maxdepth 1)
