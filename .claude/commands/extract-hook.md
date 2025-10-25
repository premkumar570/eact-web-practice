---
description: Extract logic into a custom React hook
---

Create a custom React hook to extract and share logic between components.

Hook requirements:
- Create in `/src/hooks/` directory (will create if doesn't exist)
- Follow naming convention: `use[HookName].js`
- Return values as object or array (use destructuring)
- Handle side effects with useEffect if needed
- Keep hooks composable and focused on single responsibility

Common use cases in this project:
- `useUsers()` - Extract user data (currently duplicated in Dashboard/Members)
- `useStats()` - Extract dashboard statistics
- `useActivity()` - Extract activity feed data

Ask me:
1. What should the hook be called? (e.g., useUsers)
2. What data/logic should it encapsulate?
3. What should it return?

I'll create the hook and show you how to use it in components.
