#!/bin/bash
git pull
npm i

pm2 stop --silent gregoryland.com
pm2 delete --silent gregoryland.com
pm2 start npm -- start --name gregoryland.com
