#! /bin/bash

SITE_PATH='/www/web/zhangchenxu.github.io'
USER='root'
USERGROUP='root'

cd $SITE_PATH
git reset --hard origin/master
git clean -f
git pull
git checkout master
chown -R $USER:$USERGROUP $SITE_PATH