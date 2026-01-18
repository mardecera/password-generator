#!/usr/bin/env bash

run() {
  local label="$1"
  local command="$2"

  local i=0
  local count=${#SPINNER[@]}

  eval "$command" > /dev/null 2>&1 &
  local pid=$!

  while kill -0 "$pid" 2>/dev/null; do
    printf "\r\033[K%-${LABEL_WIDTH}s %s" \
      "$label" "${SPINNER[i]}"

    i=$(( (i + 1) % count ))
    sleep "$SPINNER_DELAY"
  done

  wait "$pid"
  local status=$?

  if [ "$status" -eq 0 ]; then
    printf "\r\033[K%-${LABEL_WIDTH}s ${GREEN}done${RESET}\n" "$label"
  else
    printf "\r\033[K%-${LABEL_WIDTH}s ${RED}failed${RESET}\n" "$label"
    exit 1
  fi
}
