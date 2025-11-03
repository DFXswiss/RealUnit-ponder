import { createConfig } from "ponder";
import { rateLimit } from "@ponder/utils";
import { http } from "viem";

import { RealUnitShares } from "./abis/RealUnitShares";

export default createConfig({
  chains: {
    mainnet: {
      id: 1,
      rpc: rateLimit(http(process.env.RPC_URL_MAINNET!), { requestsPerSecond: 100 }),
    },
  },
  contracts: {
    RealUnitShare: {
      chain: "mainnet",
      abi: RealUnitShares,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      startBlock: 14569464,
    },
  },
});
