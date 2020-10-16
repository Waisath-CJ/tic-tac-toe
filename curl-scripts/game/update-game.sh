curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authentication: Bearer ${TOKEN}"
  --header "Content-type: application/json"
  --data '{
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${ISOVER}"'"
    }'

echo