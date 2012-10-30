Will change the request's `Accept` header to `application/json` if the
URL ends with `.json`.

# Install

    npm install connect-acceptoverride

# Usage

```javascript
var acceptOverride = require('connect-acceptoverride');
app.use(acceptOverride());
```
