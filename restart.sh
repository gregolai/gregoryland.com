#!/bin/bash
git stash push --include-untracked
git pull
git stash drop
npm i

npm run build:prod

pm2 stop --silent gregoryland.com
pm2 delete --silent gregoryland.com
pm2 start npm --name gregoryland.com -- run serve:prod 
