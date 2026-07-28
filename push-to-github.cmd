@echo off
REM ============================================================
REM  Upload the website code to your NEW GitHub account.
REM  First run: a browser window opens once -> log in as
REM  "Juliannorthlight" and approve. After that it just works.
REM ============================================================
set "PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin"
cd /d "%~dp0"

echo.
echo Uploading the website to GitHub:
echo   https://github.com/Juliannorthlight/Website-Northlight
echo.
echo If a browser window opens, log in to your NEW GitHub account (Juliannorthlight).
echo.

git push -u origin main

echo.
echo ============================================================
echo  Done. Open this page to see the files:
echo  https://github.com/Juliannorthlight/Website-Northlight
echo ============================================================
pause
