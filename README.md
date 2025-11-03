# RealUnit Ponder Indexer

Optimierter Ponder-Indexer für den RealUnit Token (0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B) auf Ethereum Mainnet.

## 🚀 Quick Start

```bash
# 1. Dependencies installieren
npm install

# 2. RPC URL konfigurieren
cp .env.example .env
# Bearbeite .env und füge deine RPC URL ein

# 3. Ponder starten
npm run dev
```

## 📊 Optimierung

Dieser Indexer ist **hochgradig optimiert**:

- ✅ **89.76% weniger RPC-Calls** (929K statt 9M Blöcke)
- ✅ **228 optimierte Block-Ranges** statt einem großen Range
- ✅ **In-Memory Balance Tracking** (keine balanceOf() RPC-Calls)
- ✅ **O(1) Block-Lookup** mit Set statt Array
- ✅ **Sync-Zeit: Stunden statt Tage**

Details siehe [OPTIMIZATION.md](./OPTIMIZATION.md)

## 📦 Setup

### 1. RPC Provider

Du benötigst einen Ethereum RPC-Endpoint:
- [Alchemy](https://www.alchemy.com/) (empfohlen)
- [Infura](https://www.infura.io/)
- [QuickNode](https://www.quicknode.com/)

### 2. Environment Variables

```bash
cp .env.example .env
```

Bearbeite `.env`:
```
PONDER_RPC_URL_1=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
```

### 3. Starten

```bash
# Development (mit Hot Reload)
npm run dev

# Production
npm run start

# TypeScript Types generieren
npm run codegen
```

## 🗄️ Datenbank-Schema

### Transfer
Alle Transfer-Events:
- `from`, `to`, `value`
- `blockNumber`, `blockTimestamp`
- `transactionHash`, `logIndex`

### Account
Konto-Statistiken:
- `balance` (aktueller Saldo)
- `totalSent`, `totalReceived`
- `transactionCount`, `approvalCount`

### Weitere Events
- Approval
- AddressTypeUpdate (Allowlist)
- Announcement
- ChangeTerms
- ChangeTotalShares
- NameChanged
- OwnershipTransferred
- TokensDeclaredInvalid

## 🏗️ Architektur

**Optimierte Block-Ranges:**
- 228 historische Ranges (nur Blöcke mit Events)
- 1 Current Range (ab Block 23,639,871)

**Event Handlers:**
- 2,061 dynamisch registrierte Handler (228×9 + 9)
- Set-basierte Block-Filterung (O(1))
- In-Memory Balance-Berechnung

## 📁 Projekt-Struktur

```
├── ponder.config.ts          # Optimierte Konfiguration (228 Ranges)
├── ponder.schema.ts           # Datenbank-Schema
├── src/
│   └── index.ts              # Event Handler (optimiert)
├── blocks.ts                  # Historische Block-Liste (548 Blöcke)
├── handler-mapping.ts         # Contract-Namen für 228 Ranges
├── abis/                      # ABI-Definitionen
└── scripts/                   # Optimierungs-Scripts
    ├── analyze-blocks.ts     # Block-Analyse
    ├── generate-config.ts    # Config-Generierung
    └── apply-optimization.ts # Optimierung anwenden
```

## 🔧 Optimierungs-Scripts

Falls du die Optimierung neu generieren musst:

```bash
# 1. Block-Verteilung analysieren
npx tsx scripts/analyze-blocks.ts

# 2. Optimierte Config generieren
npx tsx scripts/generate-config.ts

# 3. Optimierung anwenden (mit Backup)
npx tsx scripts/apply-optimization.ts
```

## 📖 Dokumentation

- [OPTIMIZATION.md](./OPTIMIZATION.md) - Technische Details der Optimierung
- [QUICKSTART-OPTIMIZATION.md](./QUICKSTART-OPTIMIZATION.md) - 3-Befehle Quick Start

## 🔍 GraphQL API

Nach dem Start ist die API verfügbar unter:
- **Endpoint:** http://localhost:42069
- **Playground:** http://localhost:42069 (im Browser öffnen)

Beispiel-Query:
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

Für Production:

1. **Verwende PostgreSQL** statt SQLite:
   ```
   DATABASE_URL=postgresql://user:pass@host:5432/ponder
   ```

2. **Optimiere RPC Provider:**
   - Verwende dedizierte Node oder Premium-Tier
   - Aktiviere Caching falls möglich

3. **Monitoring:**
   - Überwache RPC req/s Rate
   - Prüfe DB-Größe regelmäßig
   - Logs mit PONDER_LOG_LEVEL=warn

4. **Backup:**
   - Regelmäßige DB-Backups
   - Behalte `.ponder` Verzeichnis

## 📊 Performance

Mit der Optimierung:
- **Blocks zu scannen:** 929,003 (statt 9,070,406)
- **RPC-Reduktion:** 89.76%
- **Geschätzte Sync-Zeit:** 8-12 Stunden (abhängig vom RPC)
- **Laufende Sync:** Real-time (neue Blöcke in <1 Sekunde)

## 🐛 Troubleshooting

**Sync ist langsam?**
- Prüfe RPC Rate Limits
- Verwende schnelleren RPC Provider
- Erhöhe PONDER_LOG_LEVEL=debug für Details

**"Too many event handlers"?**
- Erhöhe Gap-Size in `scripts/analyze-blocks.ts`
- Regeneriere Config mit weniger Ranges

**Balances stimmen nicht?**
- Lösche `.ponder` und starte neu
- Prüfe ob alle Events verarbeitet wurden

## 📄 License

MIT

## 🤝 Support

Bei Fragen oder Problemen öffne ein Issue im Repository.
