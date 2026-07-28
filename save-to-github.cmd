@echo off
REM ============================================================
REM  Save ALL current changes and upload them to GitHub.
REM  Double-click this after you (or a developer) edited the site.
REM ============================================================
set "PATH=%PATH%;C:\Program Files\Git\cmd;C:\Program Files\Git\bin"
cd /d "%~dp0"

echo Saving and uploading the latest changes to GitHub...
echo.
git add -A
git commit -m "Update %DATE% %TIME%"
git push origin main

echo.
echo ============================================================
echo  Done. Latest version is now on GitHub:
echo  https://github.com/Juliannorthlight/Website-Northlight
echo ============================================================
pause
