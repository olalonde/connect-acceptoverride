Will change the request's `Accept` header to `application/json` if the
URL ends with `.json`.

# Install

    npm install connect-acceptOverride

# Usage

```javascript
var acceptOverride = require('connect-acceptOverride');
app.use(acceptOverride);
```
