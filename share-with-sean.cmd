@echo off
REM ============================================================
REM  Northlight website - share a temporary public link
REM  Double-click this file. A black window opens and prints a
REM  https://....trycloudflare.com link. Send that link to Sean.
REM  Keep this window OPEN while he is viewing. Close it to stop.
REM ============================================================
setlocal
set NODE=C:\Users\JulianMarklin\nl\node-v20.18.0-win-x64\node.exe
set NEXT=%~dp0node_modules\next\dist\bin\next
set CF=C:\Users\JulianMarklin\nl\cloudflared.exe
cd /d "%~dp0"

echo Cleaning previous build cache...
if exist ".next" rmdir /s /q ".next"

echo Starting the Northlight site (this stays running in a second window)...
start "Northlight dev server" /min "%NODE%" "%NEXT%" dev -p 3100

echo Waiting for the site to start up...
timeout /t 9 /nobreak >nul

echo.
echo ============================================================
echo  COPY the https://....trycloudflare.com link below
echo  and send it to Sean. Keep this window open while he views.
echo ============================================================
echo.
"%CF%" tunnel --url http://localhost:3100 --no-autoupdate
