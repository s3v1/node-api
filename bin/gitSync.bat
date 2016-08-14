@echo off
git pull && git status
git add -A :/ && git status && git commit -m "syncronizing" && git push
