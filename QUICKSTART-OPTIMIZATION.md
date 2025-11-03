# 🚀 Quick Start: Apply Optimizations

## TL;DR - 3 Commands

```bash
# 1. Stop current Ponder server (Ctrl+C)

# 2. Apply optimizations (with automatic backups)
npx tsx scripts/apply-optimization.ts

# 3. Start fresh
rm -rf .ponder && npm run dev
```

---

## What This Does

✅ Reduces RPC calls by **89.76%** (9M → 929K blocks)
✅ Reduces sync time from **days → 30-60 minutes**
✅ Eliminates unnecessary `balanceOf()` contract calls
✅ Automatically backs up your original files

---

## Step-by-Step

### Step 1: Stop Current Sync

Press `Ctrl+C` to stop the running Ponder dev server.

### Step 2: Apply Optimization

```bash
npx tsx scripts/apply-optimization.ts
```

**This will:**
- Create automatic backups (`ponder.config.backup-TIMESTAMP.ts`)
- Replace `ponder.config.ts` with optimized version (228 ranges)
- Replace `src/index.ts` with optimized handlers
- Show you statistics and next steps

### Step 3: Clean Start

```bash
# Delete old database
rm -rf .ponder

# Start optimized indexer
npm run dev
```

### Step 4: Monitor Progress

Watch for:
- **Progress**: Should show ~2-3% initially (much faster than before)
- **RPC req/s**: ~1-2 requests/second (sustainable rate)
- **Completion**: 30-60 minutes for full historical sync

---

## Expected Output

```
================================================================================
APPLYING PONDER OPTIMIZATIONS
================================================================================

📊 Optimization Statistics:
  Total Ranges: 228
  Total Blocks to Scan: 929,003
  Original Blocks: 9,070,406
  Reduction: 89.76%

📦 Creating backups...
  ✓ Backed up: ponder.config.ts → ponder.config.backup-2025-10-30T14-30-00.ts
  ✓ Backed up: src/index.ts → src/index.backup-2025-10-30T14-30-00.ts

🚀 Applying optimizations...
  ✓ Applied: ponder.config.optimized.ts → ponder.config.ts
  ✓ Applied: src/index.optimized.ts → src/index.ts

================================================================================
✅ OPTIMIZATION APPLIED SUCCESSFULLY!
================================================================================

Expected improvements:
  - RPC calls reduced by ~90%
  - Sync time reduced from hours/days to minutes
  - No more unnecessary balanceOf() contract calls
```

---

## Rollback (If Needed)

If something goes wrong, restore from backup:

```bash
# Find your backup
ls -la *.backup-*.ts

# Restore (replace TIMESTAMP)
cp ponder.config.backup-TIMESTAMP.ts ponder.config.ts
cp src/index.backup-TIMESTAMP.ts src/index.ts

# Restart
rm -rf .ponder && npm run dev
```

---

## Verification

After optimization is applied and Ponder restarts:

1. **Check config has 228+ ranges:**
   ```bash
   grep -c "RealUnit_Historical_" ponder.config.ts
   # Should output: 228
   ```

2. **Check event handlers registered:**
   Look for this in logs:
   ```
   ✓ Registered 2061 event handlers
     - 228 historical ranges × 9 events
     - 1 current range × 9 events
   ```

3. **Monitor sync speed:**
   Should be noticeably faster than before!

---

## Need Help?

See [OPTIMIZATION.md](./OPTIMIZATION.md) for:
- Detailed technical explanation
- Troubleshooting guide
- Performance expectations
- How the optimization works

---

**Ready?** Run the commands above! 🚀
