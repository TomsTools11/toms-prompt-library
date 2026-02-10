---
name: prospect-research
description: Sales prospect research combining contact enrichment with high-level company intel. Use when asked to research a prospect, find contact info, look up an executive, or gather lead intelligence. Prioritizes actionable contact data (email, phone) over lengthy reports.
---

# Prospect Research

Find contact info and high-level company intelligence for sales prospecting. Prioritizes actionable data over lengthy reports.

## Input Flexibility

Accept any of the following as starting input:
- Company name
- Company website URL
- Executive/contact name
- LinkedIn URL
- Any combination of the above

If insufficient info is provided, ask ONE concise clarifying question before proceeding.

## Priority Data (Must Find)

### Contact Info
| Field | Priority | Sources |
|-------|----------|---------|
| Name | Required | Apollo, Exa, Company site |
| Email | Critical | Apollo, Exa, Perplexity, Company site |
| Phone | High | Apollo, Exa, Company site |
| Past Companies | Medium | Apollo, Exa, LinkedIn |

### Company Info
| Field | Priority | Sources |
|-------|----------|---------|
| Marketing Spend (approx) | High | Perplexity, Exa, Industry reports |
| # of Producers | High | Apollo, Company site, Exa |

## Available Search Tools

### 1. Exa Search (AI-powered semantic search)
Best for: Finding specific people, contact pages, company info, LinkedIn profiles

```bash
curl -s -X POST "https://api.exa.ai/search" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ${EXA_API_KEY}" \
  -d '{
    "query": "Sohil Yusuf Sierra Mountain Insurance email contact",
    "type": "neural",
    "useAutoprompt": true,
    "numResults": 5,
    "contents": {
      "text": true
    }
  }'
```

**Exa search types:**
- `neural` — semantic/AI search (best for finding people, concepts)
- `keyword` — traditional keyword matching

### 2. Perplexity Search (AI-synthesized answers)
Best for: Quick facts, summaries, company overviews, market data

```bash
curl -s -X POST "https://api.perplexity.ai/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${PERPLEXITY_API_KEY}" \
  -d '{
    "model": "sonar",
    "messages": [
      {
        "role": "user",
        "content": "What is the estimated marketing budget for Sierra Mountain Insurance Agency in California? Include any advertising spend data."
      }
    ]
  }'
```

### 3. Apollo API (Contact enrichment)
Best for: Verifying contacts, employment history, company data

```bash
# Match a person by name + company
curl -s -X POST "https://api.apollo.io/v1/people/match" \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: ${APOLLO_API_KEY}" \
  -d '{
    "first_name": "John",
    "last_name": "Smith",
    "organization_name": "Company Name",
    "domain": "example.com"
  }'
```

### 4. Web Fetch (Direct website scraping)
Best for: Contact pages, team directories, about pages

```
web_fetch: https://company.com/contact
web_fetch: https://company.com/about
web_fetch: https://company.com/team
```

## Workflow

### Phase 1: Identify Target

From user input, determine:
- Company name and domain
- Target contact name (if provided)
- Any other identifying info

If unclear, ask: "To find the best contact info, could you confirm: [specific question]?"

### Phase 2: Parallel Data Gathering

Run these searches concurrently to maximize coverage:

**Exa Searches:**
```
1. "[contact name] [company] email contact linkedin"
2. "[company name] executive team leadership contact"
3. "[company name] marketing advertising spend budget"
```

**Perplexity Queries:**
```
1. "What is [contact name]'s email and phone at [company]?"
2. "How many employees/agents does [company] have?"
3. "What is [company]'s estimated marketing or advertising budget?"
```

**Apollo:**
```
- People Match for known contacts
- Organization enrichment for company data
```

**Web Fetch:**
```
- Company homepage
- /contact, /about, /team pages
- Contact's profile page if URL known
```

### Phase 3: Cross-Reference & Validate

- Compare results across sources
- Flag conflicting data
- Prioritize verified sources (company website > search results)

### Phase 4: Compile & Deliver

Present findings in chat with this structure:

```
🎯 **Prospect Research: [Company Name]**

---

**📇 Contact Information**
• **Name:** [Full Name]
• **Title:** [Title]
• **Email:** [email] ✅ / ⚠️ / ❌
• **Phone:** [phone] ✅ / ⚠️ / ❌
• **LinkedIn:** [URL if found]
• **Past Companies:** [List]

---

**🏢 Company Snapshot**
• **Industry:** [Industry]
• **Employees:** [Count]
• **Producers/Agents:** [Count if available]
• **Est. Marketing Spend:** [Range/estimate]
• **Location:** [HQ]
• **Website:** [URL]

---

**📝 Quick Intel**
[2-3 sentences: what they do, recent news, key talking points]

---

**⚠️ Gaps**
[List any priority fields not found]
```

### Phase 5: Offer More

After delivering, ask:
> "Want me to dig deeper on any of these areas, or search for additional contacts at this company?"

## API Reference

| Service | Base URL | Auth Header |
|---------|----------|-------------|
| Apollo | `https://api.apollo.io/v1` | `X-Api-Key: ${APOLLO_API_KEY}` |
| Exa | `https://api.exa.ai` | `x-api-key: ${EXA_API_KEY}` |
| Perplexity | `https://api.perplexity.ai` | `Authorization: Bearer ${PERPLEXITY_API_KEY}` |

## Quality Standards

- **Prioritize accuracy** — Only report data you actually found
- **Mark confidence:**
  - ✅ Verified (from official source or multiple sources agree)
  - ⚠️ Inferred (single source, unverified)
  - ❌ Not found
- **Note gaps clearly** — Don't hide missing data
- **Be concise** — This is a quick-hit research tool, not a full report
- **Cite sources** when data comes from a specific search
