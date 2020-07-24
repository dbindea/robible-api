#!/bin/bash

cd /root/robible-api/
rm -rf node_modules/

git reset --hard
git pull

npm i

pm2 delete "robible-api"
pm2 --name "robible-api" start npm -- run start:prod