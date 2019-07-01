const fs = require('fs');
fs.writeFileSync('./.env', `ENV_VAR=${process.env.ENV_VAR}\n`);
