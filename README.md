# RealUnit Ponder Indexer

Optimized Ponder indexer for the RealUnit Token (0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B) on Ethereum Mainnet.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure RPC URL
cp .env.example .env
# Edit .env and add your RPC URL

# 3. Start Ponder
npm run dev
```

## 📊 Optimization

This indexer is **highly optimized**:

- ✅ **89.76% fewer RPC calls** (929K instead of 9M blocks)
- ✅ **228 optimized block ranges** instead of one large range
- ✅ **In-Memory Balance Tracking** (no balanceOf() RPC calls)
- ✅ **O(1) Block-Lookup** with Set instead of Array
- ✅ **Sync time: Hours instead of days**

For details see [OPTIMIZATION.md](./OPTIMIZATION.md)

## 📦 Setup

### 1. RPC Provider

You need an Ethereum RPC endpoint:
- [Alchemy](https://www.alchemy.com/) (recommended)
- [Infura](https://www.infura.io/)
- [QuickNode](https://www.quicknode.com/)

### 2. Environment Variables

```bash
cp .env.example .env
```

Edit `.env`:
```
PONDER_RPC_URL_1=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
```

### 3. Start

```bash
# Development (with Hot Reload)
npm run dev

# Production
npm run start

# Generate TypeScript types
npm run codegen
```

## 🗄️ Database Schema

### Transfer
All Transfer events:
- `from`, `to`, `value`
- `blockNumber`, `blockTimestamp`
- `transactionHash`, `logIndex`

### Account
Account statistics:
- `balance` (current balance)
- `totalSent`, `totalReceived`
- `transactionCount`, `approvalCount`

### Additional Events
- Approval
- AddressTypeUpdate (Allowlist)
- Announcement
- ChangeTerms
- ChangeTotalShares
- NameChanged
- OwnershipTransferred
- TokensDeclaredInvalid

## 🏗️ Architecture

**Optimized Block Ranges:**
- 228 historical ranges (only blocks with events)
- 1 current range (from block 23,639,871)

**Event Handlers:**
- 2,061 dynamically registered handlers (228×9 + 9)
- Set-based block filtering (O(1))
- In-memory balance calculation

## 📁 Project Structure

```
├── ponder.config.ts          # Optimized configuration (228 ranges)
├── ponder.schema.ts           # Database schema
├── src/
│   └── index.ts              # Event handlers (optimized)
├── blocks.ts                  # Historical block list (548 blocks)
├── handler-mapping.ts         # Contract names for 228 ranges
├── abis/                      # ABI definitions
└── scripts/                   # Optimization scripts
    ├── analyze-blocks.ts     # Block analysis
    ├── generate-config.ts    # Config generation
    └── apply-optimization.ts # Apply optimization
```

## 🔧 Optimization Scripts

If you need to regenerate the optimization:

```bash
# 1. Analyze block distribution
npx tsx scripts/analyze-blocks.ts

# 2. Generate optimized config
npx tsx scripts/generate-config.ts

# 3. Apply optimization (with backup)
npx tsx scripts/apply-optimization.ts
```

## 📖 Documentation

- [OPTIMIZATION.md](./OPTIMIZATION.md) - Technical optimization details
- [QUICKSTART-OPTIMIZATION.md](./QUICKSTART-OPTIMIZATION.md) - 3-command quick start

## 🔍 GraphQL API

After starting, the API is available at:
- **Endpoint:** http://localhost:42069
- **Playground:** http://localhost:42069 (open in browser)

Example query:
```graphql
{
  transfers(limit: 10, orderBy: "blockNumber", orderDirection: "desc") {
    items {
      from
      to
      value
      blockNumber
      blockTimestamp
    }
  }
}
```

## 🚨 Production Deployment

For production:

1. **Use PostgreSQL** instead of SQLite:
   ```
   DATABASE_URL=postgresql://user:pass@host:5432/ponder
   ```

2. **Optimize RPC Provider:**
   - Use dedicated node or premium tier
   - Enable caching if possible

3. **Monitoring:**
   - Monitor RPC req/s rate
   - Check DB size regularly
   - Logs with PONDER_LOG_LEVEL=warn

4. **Backup:**
   - Regular DB backups
   - Keep `.ponder` directory

## 📊 Performance

With optimization:
- **Blocks to scan:** 929,003 (instead of 9,070,406)
- **RPC reduction:** 89.76%
- **Estimated sync time:** 8-12 hours (depending on RPC)
- **Live sync:** Real-time (new blocks in <1 second)

## 🐛 Troubleshooting

**Sync is slow?**
- Check RPC rate limits
- Use faster RPC provider
- Set PONDER_LOG_LEVEL=debug for details

**"Too many event handlers"?**
- Increase gap size in `scripts/analyze-blocks.ts`
- Regenerate config with fewer ranges

**Balances incorrect?**
- Delete `.ponder` and restart
- Check if all events were processed

## 📄 License

MIT

## 🤝 Support

For questions or issues, please open an issue in the repository.
