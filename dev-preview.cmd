@echo off
REM Launches the Next.js dev server from this project's directory using the
REM locally-extracted Node runtime (Node is not installed system-wide here).
cd /d "%~dp0"
"C:\Users\JulianMarklin\nl\node-v20.18.0-win-x64\node.exe" "%~dp0node_modules\next\dist\bin\next" dev -p 3100
