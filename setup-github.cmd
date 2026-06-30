@echo off
REM ============================================================
REM  One-time: put the Northlight site on GitHub (private repo)
REM  so Vercel can auto-deploy it on every change.
REM  Step 1 asks you to sign in to GitHub (paste a code in your
REM  browser - same as the Vercel login). Step 2 creates the repo.
REM ============================================================
setlocal
set PATH=C:\Users\JulianMarklin\nl;C:\Users\JulianMarklin\nl\node-v20.18.0-win-x64;%PATH%
cd /d "%~dp0"

echo.
echo === Step 1: Sign in to GitHub (one-time) ===
echo When prompted, choose: GitHub.com  /  HTTPS  /  Login with a web browser
gh auth login --hostname github.com --git-protocol https --web
if errorlevel 1 goto :end

echo.
echo === Step 2: Create a PRIVATE repo and push the code ===
gh repo create northlight-site --private --source=. --remote=origin --push
if errorlevel 1 goto :end

echo.
echo ============================================================
echo  SUCCESS - code is on GitHub (private).
echo  Final step is connecting it to Vercel (3 clicks) - see the
echo  instructions Claude gave you.
echo ============================================================
:end
pause
