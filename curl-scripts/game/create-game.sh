curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authentication: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{}'

echo