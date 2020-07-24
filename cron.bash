#!/bin/bash

cd /root/robible/
rm -rf node_modules/

git reset --hard
git pull

npm i

pm2 delete "robible"
pm2 --name "robible" start npm -- run start:prod