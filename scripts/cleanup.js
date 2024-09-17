const { rmSync } = require('fs')

rmSync('src/lib/components', { recursive: true })
rmSync('src/lib/index.ts')
