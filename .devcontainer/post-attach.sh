#!/usr/bin/env bash
set -euo pipefail

if (exec 3<>/dev/tcp/127.0.0.1/4321) 2>/dev/null; then
  echo "site is already running on http://localhost:${SITE_PORT:-4321}, stop it with: pkill -f 'astro dev'"
else
  exec bun run dev
fi
