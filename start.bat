start "" "%ProgramFiles%\Git\git-bash.exe" -c "a=$(pwd); bash $a/start/server.sh"
start "" "%ProgramFiles%\Git\git-bash.exe" -c "a=$(pwd); bash $a/start/working.sh"
code "%cd%"