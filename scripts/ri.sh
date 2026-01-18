#!/usr/bin/env bash

set -e

# =========================
# Resolve script directory
# =========================
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# =========================
# Load libs
# =========================
source "$SCRIPT_DIR/colors.sh"
source "$SCRIPT_DIR/spinners.sh"
source "$SCRIPT_DIR/runner.sh"

load_spinner "dots"

# =========================
# Hide cursor (TTY only)
# =========================
if [ -t 1 ]; then
  printf "\033[?25l"
  trap 'printf "\033[?25h"' EXIT
fi

LABEL_WIDTH=25

# =========================
# Commands
# =========================
run "> clean node_modules" "pnpm clean-modules"
run "> clean .turbo" "pnpm clean-turbo"
run "> clean builds" "pnpm clean-build"
run "> install dependencies" "pnpm install"
run "> compile packages" "pnpm compile"
