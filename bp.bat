@echo off
cls
rd /Q /S .\dist
@echo on
ng build --prod --base-href