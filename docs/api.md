# API

## POST /api/interventions

Request: `{ "accountId": "acct-1", "usageDropPercent": 80, "openSupportCases": 2 }`

Response: `{ "accountId": "acct-1", "risk": 78, "action": "executive-outreach" }`. Recommendations are decision support and require human review before customer contact.
