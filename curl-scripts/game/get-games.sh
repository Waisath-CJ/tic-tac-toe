curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authentication: Bearer ${TOKEN}"

echo