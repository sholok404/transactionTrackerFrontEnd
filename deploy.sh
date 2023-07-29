#!/bin/bash

read MESSAGE

rm -rf dist
npx parcel build src/index.html --public-url https://sholok404.github.io/transactionTrackerFrontEnd/
git add dist && git commit -m "$MESSAGE"
git subtree push --prefix dist origin dist
