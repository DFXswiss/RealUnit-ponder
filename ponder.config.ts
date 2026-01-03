import { createConfig } from "ponder";
import { rateLimit } from "@ponder/utils";
import { http } from "viem";

import { RealUnitShares } from "./abis/RealUnitShares";

const isProduction = process.env.NODE_ENV === "production";

export default isProduction
  ? createConfig({
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
    })
  : createConfig({
      chains: {
        sepolia: {
          id: 11155111,
          rpc: rateLimit(http(process.env.RPC_URL_SEPOLIA!), { requestsPerSecond: 100 }),
        },
      },
      contracts: {
        RealUnitShare: {
          chain: "sepolia",
          abi: RealUnitShares,
          address: "0x0Add9824820508dd7992CbEBB9f13FBE8E45A30f",
          startBlock: 9967330,
        },
      },
    });
