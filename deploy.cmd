@echo off
REM ============================================================
REM  Publish the Northlight site to a STABLE Vercel link.
REM  First run: it asks you to log in (one click via email/GitHub).
REM  Every run after: it updates the SAME link with the latest changes.
REM  Send the "Production:" URL it prints at the end.
REM ============================================================
setlocal
set PATH=C:\Users\JulianMarklin\nl\node-v20.18.0-win-x64;%PATH%
cd /d "%~dp0"

echo.
echo === Step 1 of 2: Vercel login (only needed the first time) ===
call npx --yes vercel@latest login

echo.
echo === Step 2 of 2: Publishing (builds on Vercel, ~1-2 min) ===
call npx --yes vercel@latest --prod --yes

echo.
echo ============================================================
echo  DONE. Copy the "Production:" https://....vercel.app link
echo  above and send it around. Re-run this file anytime to
echo  push the latest changes to the same link.
echo ============================================================
pause
