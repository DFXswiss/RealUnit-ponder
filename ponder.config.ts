import { createConfig } from "@ponder/core";
import { http } from "viem";

import { RealUnitAbi } from "./abis/RealUnitAbi";
import { HISTORICAL_END_BLOCK } from "./blocks";

// =============================================================================
// OPTIMIZED CONFIGURATION - AUTO-GENERATED
// =============================================================================
// This configuration was auto-generated to optimize RPC usage
//
// Statistics:
// - Total Ranges: 328
// - Total Blocks to Scan: 223,715
// - Original Blocks: 9,070,406
// - Reduction: 97.53%
// - RPC Savings: ~98%
//
// Generated: 2025-10-30T16:13:05.208Z
// =============================================================================

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    // Range 1: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_0: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14829888,
      endBlock: 14829888,
    },
    // Range 2: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_1: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14908202,
      endBlock: 14908202,
    },
    // Range 3: 3 events in 944 blocks (0.32% efficient)
    RealUnit_Historical_2: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14925782,
      endBlock: 14926725,
    },
    // Range 4: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_3: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14948718,
      endBlock: 14948718,
    },
    // Range 5: 4 events in 1,259 blocks (0.32% efficient)
    RealUnit_Historical_4: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14956256,
      endBlock: 14957514,
    },
    // Range 6: 3 events in 546 blocks (0.55% efficient)
    RealUnit_Historical_5: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14967008,
      endBlock: 14967553,
    },
    // Range 7: 5 events in 4,369 blocks (0.11% efficient)
    RealUnit_Historical_6: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14973480,
      endBlock: 14977848,
    },
    // Range 8: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_7: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14997152,
      endBlock: 14997152,
    },
    // Range 9: 3 events in 357 blocks (0.84% efficient)
    RealUnit_Historical_8: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15034846,
      endBlock: 15035202,
    },
    // Range 10: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_9: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15043994,
      endBlock: 15043994,
    },
    // Range 11: 5 events in 6,769 blocks (0.07% efficient)
    RealUnit_Historical_10: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15074868,
      endBlock: 15081636,
    },
    // Range 12: 2 events in 113 blocks (1.77% efficient)
    RealUnit_Historical_11: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15095889,
      endBlock: 15096001,
    },
    // Range 13: 5 events in 7,944 blocks (0.06% efficient)
    RealUnit_Historical_12: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15120204,
      endBlock: 15128147,
    },
    // Range 14: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_13: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15167221,
      endBlock: 15167221,
    },
    // Range 15: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_14: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15263894,
      endBlock: 15263894,
    },
    // Range 16: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_15: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15276744,
      endBlock: 15276744,
    },
    // Range 17: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_16: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15388904,
      endBlock: 15388904,
    },
    // Range 18: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_17: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15416625,
      endBlock: 15416625,
    },
    // Range 19: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_18: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15445888,
      endBlock: 15445888,
    },
    // Range 20: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_19: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15451662,
      endBlock: 15451662,
    },
    // Range 21: 5 events in 1,511 blocks (0.33% efficient)
    RealUnit_Historical_20: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15459396,
      endBlock: 15460906,
    },
    // Range 22: 4 events in 6,602 blocks (0.06% efficient)
    RealUnit_Historical_21: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15476496,
      endBlock: 15483097,
    },
    // Range 23: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_22: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15497634,
      endBlock: 15497634,
    },
    // Range 24: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_23: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15532914,
      endBlock: 15532914,
    },
    // Range 25: 2 events in 590 blocks (0.34% efficient)
    RealUnit_Historical_24: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15580439,
      endBlock: 15581028,
    },
    // Range 26: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_25: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15624795,
      endBlock: 15624795,
    },
    // Range 27: 3 events in 7,073 blocks (0.04% efficient)
    RealUnit_Historical_26: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15673477,
      endBlock: 15680549,
    },
    // Range 28: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_27: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15711121,
      endBlock: 15711121,
    },
    // Range 29: 2 events in 632 blocks (0.32% efficient)
    RealUnit_Historical_28: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15717193,
      endBlock: 15717824,
    },
    // Range 30: 6 events in 5,220 blocks (0.11% efficient)
    RealUnit_Historical_29: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15762266,
      endBlock: 15767485,
    },
    // Range 31: 3 events in 3,950 blocks (0.08% efficient)
    RealUnit_Historical_30: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15783901,
      endBlock: 15787850,
    },
    // Range 32: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_31: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15802710,
      endBlock: 15802710,
    },
    // Range 33: 2 events in 9 blocks (22.22% efficient)
    RealUnit_Historical_32: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15810549,
      endBlock: 15810557,
    },
    // Range 34: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_33: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15861030,
      endBlock: 15861030,
    },
    // Range 35: 2 events in 5 blocks (40.00% efficient)
    RealUnit_Historical_34: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15881001,
      endBlock: 15881005,
    },
    // Range 36: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_35: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15912049,
      endBlock: 15912049,
    },
    // Range 37: 3 events in 3,323 blocks (0.09% efficient)
    RealUnit_Historical_36: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15924873,
      endBlock: 15928195,
    },
    // Range 38: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_37: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15968329,
      endBlock: 15968329,
    },
    // Range 39: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_38: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15983693,
      endBlock: 15983693,
    },
    // Range 40: 4 events in 4,875 blocks (0.08% efficient)
    RealUnit_Historical_39: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16026446,
      endBlock: 16031320,
    },
    // Range 41: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_40: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16039329,
      endBlock: 16039329,
    },
    // Range 42: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_41: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16055557,
      endBlock: 16055557,
    },
    // Range 43: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_42: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16067640,
      endBlock: 16067640,
    },
    // Range 44: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_43: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16089027,
      endBlock: 16089027,
    },
    // Range 45: 2 events in 147 blocks (1.36% efficient)
    RealUnit_Historical_44: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16104798,
      endBlock: 16104944,
    },
    // Range 46: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_45: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16120546,
      endBlock: 16120546,
    },
    // Range 47: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_46: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16140250,
      endBlock: 16140250,
    },
    // Range 48: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_47: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16148188,
      endBlock: 16148188,
    },
    // Range 49: 4 events in 355 blocks (1.13% efficient)
    RealUnit_Historical_48: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16155175,
      endBlock: 16155529,
    },
    // Range 50: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_49: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16290704,
      endBlock: 16290704,
    },
    // Range 51: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_50: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16332245,
      endBlock: 16332245,
    },
    // Range 52: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_51: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16367793,
      endBlock: 16367793,
    },
    // Range 53: 16 events in 3,421 blocks (0.47% efficient)
    RealUnit_Historical_52: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16375251,
      endBlock: 16378671,
    },
    // Range 54: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_53: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16418611,
      endBlock: 16418611,
    },
    // Range 55: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_54: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16434640,
      endBlock: 16434640,
    },
    // Range 56: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_55: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16476493,
      endBlock: 16476493,
    },
    // Range 57: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_56: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16483294,
      endBlock: 16483294,
    },
    // Range 58: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_57: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16527341,
      endBlock: 16527341,
    },
    // Range 59: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_58: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16532981,
      endBlock: 16532981,
    },
    // Range 60: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_59: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16541471,
      endBlock: 16541471,
    },
    // Range 61: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_60: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16583247,
      endBlock: 16583247,
    },
    // Range 62: 3 events in 1,598 blocks (0.19% efficient)
    RealUnit_Historical_61: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16590211,
      endBlock: 16591808,
    },
    // Range 63: 2 events in 1,113 blocks (0.18% efficient)
    RealUnit_Historical_62: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16597297,
      endBlock: 16598409,
    },
    // Range 64: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_63: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16640195,
      endBlock: 16640195,
    },
    // Range 65: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_64: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16696974,
      endBlock: 16696974,
    },
    // Range 66: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_65: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16725604,
      endBlock: 16725604,
    },
    // Range 67: 2 events in 2,450 blocks (0.08% efficient)
    RealUnit_Historical_66: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16746552,
      endBlock: 16749001,
    },
    // Range 68: 3 events in 1,165 blocks (0.26% efficient)
    RealUnit_Historical_67: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16782524,
      endBlock: 16783688,
    },
    // Range 69: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_68: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16804977,
      endBlock: 16804977,
    },
    // Range 70: 9 events in 4,172 blocks (0.22% efficient)
    RealUnit_Historical_69: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16842631,
      endBlock: 16846802,
    },
    // Range 71: 5 events in 5,528 blocks (0.09% efficient)
    RealUnit_Historical_70: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16878269,
      endBlock: 16883796,
    },
    // Range 72: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_71: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16889132,
      endBlock: 16889132,
    },
    // Range 73: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_72: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16917044,
      endBlock: 16917044,
    },
    // Range 74: 4 events in 1,300 blocks (0.31% efficient)
    RealUnit_Historical_73: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16924623,
      endBlock: 16925922,
    },
    // Range 75: 5 events in 6,741 blocks (0.07% efficient)
    RealUnit_Historical_74: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16931956,
      endBlock: 16938696,
    },
    // Range 76: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_75: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16947220,
      endBlock: 16947220,
    },
    // Range 77: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_76: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16975835,
      endBlock: 16975835,
    },
    // Range 78: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_77: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16981328,
      endBlock: 16981328,
    },
    // Range 79: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_78: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16989414,
      endBlock: 16989414,
    },
    // Range 80: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_79: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17030039,
      endBlock: 17030039,
    },
    // Range 81: 2 events in 172 blocks (1.16% efficient)
    RealUnit_Historical_80: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17093712,
      endBlock: 17093883,
    },
    // Range 82: 2 events in 201 blocks (1.00% efficient)
    RealUnit_Historical_81: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17151243,
      endBlock: 17151443,
    },
    // Range 83: 3 events in 2,271 blocks (0.13% efficient)
    RealUnit_Historical_82: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17164645,
      endBlock: 17166915,
    },
    // Range 84: 2 events in 119 blocks (1.68% efficient)
    RealUnit_Historical_83: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17214231,
      endBlock: 17214349,
    },
    // Range 85: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_84: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17263634,
      endBlock: 17263634,
    },
    // Range 86: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_85: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17270726,
      endBlock: 17270726,
    },
    // Range 87: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_86: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17277694,
      endBlock: 17277694,
    },
    // Range 88: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_87: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17324077,
      endBlock: 17324077,
    },
    // Range 89: 3 events in 5,481 blocks (0.05% efficient)
    RealUnit_Historical_88: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17336150,
      endBlock: 17341630,
    },
    // Range 90: 4 events in 506 blocks (0.79% efficient)
    RealUnit_Historical_89: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17370281,
      endBlock: 17370786,
    },
    // Range 91: 2 events in 1,071 blocks (0.19% efficient)
    RealUnit_Historical_90: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17385127,
      endBlock: 17386197,
    },
    // Range 92: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_91: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17392171,
      endBlock: 17392171,
    },
    // Range 93: 2 events in 1,759 blocks (0.11% efficient)
    RealUnit_Historical_92: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17419951,
      endBlock: 17421709,
    },
    // Range 94: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_93: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17451109,
      endBlock: 17451109,
    },
    // Range 95: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_94: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17469734,
      endBlock: 17469734,
    },
    // Range 96: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_95: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17521325,
      endBlock: 17521325,
    },
    // Range 97: 25 events in 68 blocks (36.76% efficient)
    RealUnit_Historical_96: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17536594,
      endBlock: 17536661,
    },
    // Range 98: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_97: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17569898,
      endBlock: 17569898,
    },
    // Range 99: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_98: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17577306,
      endBlock: 17577306,
    },
    // Range 100: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_99: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17584432,
      endBlock: 17584432,
    },
    // Range 101: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_100: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17612933,
      endBlock: 17612933,
    },
    // Range 102: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_101: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17619075,
      endBlock: 17619075,
    },
    // Range 103: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_102: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17669372,
      endBlock: 17669372,
    },
    // Range 104: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_103: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17691771,
      endBlock: 17691771,
    },
    // Range 105: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_104: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17697611,
      endBlock: 17697611,
    },
    // Range 106: 2 events in 5 blocks (40.00% efficient)
    RealUnit_Historical_105: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17712759,
      endBlock: 17712763,
    },
    // Range 107: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_106: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17719889,
      endBlock: 17719889,
    },
    // Range 108: 2 events in 4,228 blocks (0.05% efficient)
    RealUnit_Historical_107: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17758150,
      endBlock: 17762377,
    },
    // Range 109: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_108: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17790775,
      endBlock: 17790775,
    },
    // Range 110: 2 events in 3,108 blocks (0.06% efficient)
    RealUnit_Historical_109: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17825473,
      endBlock: 17828580,
    },
    // Range 111: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_110: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17870615,
      endBlock: 17870615,
    },
    // Range 112: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_111: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17941742,
      endBlock: 17941742,
    },
    // Range 113: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_112: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17969135,
      endBlock: 17969135,
    },
    // Range 114: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_113: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17991525,
      endBlock: 17991525,
    },
    // Range 115: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_114: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18011971,
      endBlock: 18011971,
    },
    // Range 116: 3 events in 2,921 blocks (0.10% efficient)
    RealUnit_Historical_115: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18033135,
      endBlock: 18036055,
    },
    // Range 117: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_116: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18119115,
      endBlock: 18119115,
    },
    // Range 118: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_117: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18127519,
      endBlock: 18127519,
    },
    // Range 119: 7 events in 486 blocks (1.44% efficient)
    RealUnit_Historical_118: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18221495,
      endBlock: 18221980,
    },
    // Range 120: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_119: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18292861,
      endBlock: 18292861,
    },
    // Range 121: 16 events in 20 blocks (80.00% efficient)
    RealUnit_Historical_120: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18333895,
      endBlock: 18333914,
    },
    // Range 122: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_121: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18362005,
      endBlock: 18362005,
    },
    // Range 123: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_122: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18419560,
      endBlock: 18419560,
    },
    // Range 124: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_123: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18427284,
      endBlock: 18427284,
    },
    // Range 125: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_124: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18452206,
      endBlock: 18452206,
    },
    // Range 126: 4 events in 1,043 blocks (0.38% efficient)
    RealUnit_Historical_125: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18469644,
      endBlock: 18470686,
    },
    // Range 127: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_126: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18526396,
      endBlock: 18526396,
    },
    // Range 128: 3 events in 772 blocks (0.39% efficient)
    RealUnit_Historical_127: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18534577,
      endBlock: 18535348,
    },
    // Range 129: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_128: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18576134,
      endBlock: 18576134,
    },
    // Range 130: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_129: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18611654,
      endBlock: 18611654,
    },
    // Range 131: 7 events in 5,299 blocks (0.13% efficient)
    RealUnit_Historical_130: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18729562,
      endBlock: 18734860,
    },
    // Range 132: 3 events in 1,196 blocks (0.25% efficient)
    RealUnit_Historical_131: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18762799,
      endBlock: 18763994,
    },
    // Range 133: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_132: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18769851,
      endBlock: 18769851,
    },
    // Range 134: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_133: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18790415,
      endBlock: 18790415,
    },
    // Range 135: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_134: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18806786,
      endBlock: 18806786,
    },
    // Range 136: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_135: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18821254,
      endBlock: 18821254,
    },
    // Range 137: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_136: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18842072,
      endBlock: 18842072,
    },
    // Range 138: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_137: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18961472,
      endBlock: 18961472,
    },
    // Range 139: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_138: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18982671,
      endBlock: 18982671,
    },
    // Range 140: 3 events in 3,962 blocks (0.08% efficient)
    RealUnit_Historical_139: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19028604,
      endBlock: 19032565,
    },
    // Range 141: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_140: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19039782,
      endBlock: 19039782,
    },
    // Range 142: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_141: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19075226,
      endBlock: 19075226,
    },
    // Range 143: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_142: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19111158,
      endBlock: 19111158,
    },
    // Range 144: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_143: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19175735,
      endBlock: 19175735,
    },
    // Range 145: 2 events in 95 blocks (2.11% efficient)
    RealUnit_Historical_144: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19234951,
      endBlock: 19235045,
    },
    // Range 146: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_145: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19261042,
      endBlock: 19261042,
    },
    // Range 147: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_146: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19303462,
      endBlock: 19303462,
    },
    // Range 148: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_147: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19324192,
      endBlock: 19324192,
    },
    // Range 149: 3 events in 209 blocks (1.44% efficient)
    RealUnit_Historical_148: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19389693,
      endBlock: 19389901,
    },
    // Range 150: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_149: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19440976,
      endBlock: 19440976,
    },
    // Range 151: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_150: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19485219,
      endBlock: 19485219,
    },
    // Range 152: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_151: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19510497,
      endBlock: 19510497,
    },
    // Range 153: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_152: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19519014,
      endBlock: 19519014,
    },
    // Range 154: 2 events in 2,985 blocks (0.07% efficient)
    RealUnit_Historical_153: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19525048,
      endBlock: 19528032,
    },
    // Range 155: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_154: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19566934,
      endBlock: 19566934,
    },
    // Range 156: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_155: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19580993,
      endBlock: 19580993,
    },
    // Range 157: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_156: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19587781,
      endBlock: 19587781,
    },
    // Range 158: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_157: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19609866,
      endBlock: 19609866,
    },
    // Range 159: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_158: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19634414,
      endBlock: 19634414,
    },
    // Range 160: 3 events in 3,908 blocks (0.08% efficient)
    RealUnit_Historical_159: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19660105,
      endBlock: 19664012,
    },
    // Range 161: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_160: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19669632,
      endBlock: 19669632,
    },
    // Range 162: 2 events in 65 blocks (3.08% efficient)
    RealUnit_Historical_161: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19676613,
      endBlock: 19676677,
    },
    // Range 163: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_162: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19682379,
      endBlock: 19682379,
    },
    // Range 164: 5 events in 8,267 blocks (0.06% efficient)
    RealUnit_Historical_163: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19732065,
      endBlock: 19740331,
    },
    // Range 165: 6 events in 8,383 blocks (0.07% efficient)
    RealUnit_Historical_164: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19766941,
      endBlock: 19775323,
    },
    // Range 166: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_165: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19781968,
      endBlock: 19781968,
    },
    // Range 167: 2 events in 912 blocks (0.22% efficient)
    RealUnit_Historical_166: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19788198,
      endBlock: 19789109,
    },
    // Range 168: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_167: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19816593,
      endBlock: 19816593,
    },
    // Range 169: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_168: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19917109,
      endBlock: 19917109,
    },
    // Range 170: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_169: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20010029,
      endBlock: 20010029,
    },
    // Range 171: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_170: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20024089,
      endBlock: 20024089,
    },
    // Range 172: 2 events in 1,501 blocks (0.13% efficient)
    RealUnit_Historical_171: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20031262,
      endBlock: 20032762,
    },
    // Range 173: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_172: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20083744,
      endBlock: 20083744,
    },
    // Range 174: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_173: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20111603,
      endBlock: 20111603,
    },
    // Range 175: 2 events in 412 blocks (0.49% efficient)
    RealUnit_Historical_174: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20161268,
      endBlock: 20161679,
    },
    // Range 176: 2 events in 127 blocks (1.57% efficient)
    RealUnit_Historical_175: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20174887,
      endBlock: 20175013,
    },
    // Range 177: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_176: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20184746,
      endBlock: 20184746,
    },
    // Range 178: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_177: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20235586,
      endBlock: 20235586,
    },
    // Range 179: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_178: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20248275,
      endBlock: 20248275,
    },
    // Range 180: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_179: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20292680,
      endBlock: 20292680,
    },
    // Range 181: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_180: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20318964,
      endBlock: 20318964,
    },
    // Range 182: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_181: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20324754,
      endBlock: 20324754,
    },
    // Range 183: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_182: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20331320,
      endBlock: 20331320,
    },
    // Range 184: 2 events in 2 blocks (100.00% efficient)
    RealUnit_Historical_183: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20339529,
      endBlock: 20339530,
    },
    // Range 185: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_184: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20383845,
      endBlock: 20383845,
    },
    // Range 186: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_185: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20389780,
      endBlock: 20389780,
    },
    // Range 187: 3 events in 1,857 blocks (0.16% efficient)
    RealUnit_Historical_186: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20425557,
      endBlock: 20427413,
    },
    // Range 188: 2 events in 4,127 blocks (0.05% efficient)
    RealUnit_Historical_187: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20471325,
      endBlock: 20475451,
    },
    // Range 189: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_188: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20568241,
      endBlock: 20568241,
    },
    // Range 190: 4 events in 2,620 blocks (0.15% efficient)
    RealUnit_Historical_189: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20589987,
      endBlock: 20592606,
    },
    // Range 191: 2 events in 29 blocks (6.90% efficient)
    RealUnit_Historical_190: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20673116,
      endBlock: 20673144,
    },
    // Range 192: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_191: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20682802,
      endBlock: 20682802,
    },
    // Range 193: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_192: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20692452,
      endBlock: 20692452,
    },
    // Range 194: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_193: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20719695,
      endBlock: 20719695,
    },
    // Range 195: 3 events in 445 blocks (0.67% efficient)
    RealUnit_Historical_194: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20740227,
      endBlock: 20740671,
    },
    // Range 196: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_195: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20770179,
      endBlock: 20770179,
    },
    // Range 197: 3 events in 98 blocks (3.06% efficient)
    RealUnit_Historical_196: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20777604,
      endBlock: 20777701,
    },
    // Range 198: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_197: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20833975,
      endBlock: 20833975,
    },
    // Range 199: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_198: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20842448,
      endBlock: 20842448,
    },
    // Range 200: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_199: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20863404,
      endBlock: 20863404,
    },
    // Range 201: 2 events in 1,498 blocks (0.13% efficient)
    RealUnit_Historical_200: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20883553,
      endBlock: 20885050,
    },
    // Range 202: 3 events in 4,546 blocks (0.07% efficient)
    RealUnit_Historical_201: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20915288,
      endBlock: 20919833,
    },
    // Range 203: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_202: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20955699,
      endBlock: 20955699,
    },
    // Range 204: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_203: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20971556,
      endBlock: 20971556,
    },
    // Range 205: 3 events in 7,025 blocks (0.04% efficient)
    RealUnit_Historical_204: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20984028,
      endBlock: 20991052,
    },
    // Range 206: 2 events in 37 blocks (5.41% efficient)
    RealUnit_Historical_205: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21046085,
      endBlock: 21046121,
    },
    // Range 207: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_206: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21072544,
      endBlock: 21072544,
    },
    // Range 208: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_207: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21078592,
      endBlock: 21078592,
    },
    // Range 209: 11 events in 1,881 blocks (0.58% efficient)
    RealUnit_Historical_208: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21108941,
      endBlock: 21110821,
    },
    // Range 210: 2 events in 74 blocks (2.70% efficient)
    RealUnit_Historical_209: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21134550,
      endBlock: 21134623,
    },
    // Range 211: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_210: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21164407,
      endBlock: 21164407,
    },
    // Range 212: 2 events in 72 blocks (2.78% efficient)
    RealUnit_Historical_211: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21192064,
      endBlock: 21192135,
    },
    // Range 213: 3 events in 494 blocks (0.61% efficient)
    RealUnit_Historical_212: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21220336,
      endBlock: 21220829,
    },
    // Range 214: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_213: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21270635,
      endBlock: 21270635,
    },
    // Range 215: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_214: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21279197,
      endBlock: 21279197,
    },
    // Range 216: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_215: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21285332,
      endBlock: 21285332,
    },
    // Range 217: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_216: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21342390,
      endBlock: 21342390,
    },
    // Range 218: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_217: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21379842,
      endBlock: 21379842,
    },
    // Range 219: 2 events in 2,181 blocks (0.09% efficient)
    RealUnit_Historical_218: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21421173,
      endBlock: 21423353,
    },
    // Range 220: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_219: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21442428,
      endBlock: 21442428,
    },
    // Range 221: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_220: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21514992,
      endBlock: 21514992,
    },
    // Range 222: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_221: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21560264,
      endBlock: 21560264,
    },
    // Range 223: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_222: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21571494,
      endBlock: 21571494,
    },
    // Range 224: 3 events in 2,281 blocks (0.13% efficient)
    RealUnit_Historical_223: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21578364,
      endBlock: 21580644,
    },
    // Range 225: 2 events in 1,435 blocks (0.14% efficient)
    RealUnit_Historical_224: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21585697,
      endBlock: 21587131,
    },
    // Range 226: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_225: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21622854,
      endBlock: 21622854,
    },
    // Range 227: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_226: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21636161,
      endBlock: 21636161,
    },
    // Range 228: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_227: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21673505,
      endBlock: 21673505,
    },
    // Range 229: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_228: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21686405,
      endBlock: 21686405,
    },
    // Range 230: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_229: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21730237,
      endBlock: 21730237,
    },
    // Range 231: 2 events in 240 blocks (0.83% efficient)
    RealUnit_Historical_230: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21771802,
      endBlock: 21772041,
    },
    // Range 232: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_231: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21780972,
      endBlock: 21780972,
    },
    // Range 233: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_232: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21788117,
      endBlock: 21788117,
    },
    // Range 234: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_233: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21829109,
      endBlock: 21829109,
    },
    // Range 235: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_234: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21836416,
      endBlock: 21836416,
    },
    // Range 236: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_235: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21843655,
      endBlock: 21843655,
    },
    // Range 237: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_236: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21879208,
      endBlock: 21879208,
    },
    // Range 238: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_237: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21886380,
      endBlock: 21886380,
    },
    // Range 239: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_238: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21893226,
      endBlock: 21893226,
    },
    // Range 240: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_239: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21916918,
      endBlock: 21916918,
    },
    // Range 241: 2 events in 39 blocks (5.13% efficient)
    RealUnit_Historical_240: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21922460,
      endBlock: 21922498,
    },
    // Range 242: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_241: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21929286,
      endBlock: 21929286,
    },
    // Range 243: 2 events in 2 blocks (100.00% efficient)
    RealUnit_Historical_242: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21938530,
      endBlock: 21938531,
    },
    // Range 244: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_243: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21943593,
      endBlock: 21943593,
    },
    // Range 245: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_244: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21967819,
      endBlock: 21967819,
    },
    // Range 246: 3 events in 1,535 blocks (0.20% efficient)
    RealUnit_Historical_245: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21979512,
      endBlock: 21981046,
    },
    // Range 247: 2 events in 552 blocks (0.36% efficient)
    RealUnit_Historical_246: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21986539,
      endBlock: 21987090,
    },
    // Range 248: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_247: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22015704,
      endBlock: 22015704,
    },
    // Range 249: 2 events in 944 blocks (0.21% efficient)
    RealUnit_Historical_248: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22022940,
      endBlock: 22023883,
    },
    // Range 250: 2 events in 2,334 blocks (0.09% efficient)
    RealUnit_Historical_249: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22029257,
      endBlock: 22031590,
    },
    // Range 251: 4 events in 1,744 blocks (0.23% efficient)
    RealUnit_Historical_250: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22037155,
      endBlock: 22038898,
    },
    // Range 252: 2 events in 1,697 blocks (0.12% efficient)
    RealUnit_Historical_251: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22079320,
      endBlock: 22081016,
    },
    // Range 253: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_252: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22094052,
      endBlock: 22094052,
    },
    // Range 254: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_253: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22115785,
      endBlock: 22115785,
    },
    // Range 255: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_254: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22122973,
      endBlock: 22122973,
    },
    // Range 256: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_255: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22144965,
      endBlock: 22144965,
    },
    // Range 257: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_256: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22166264,
      endBlock: 22166264,
    },
    // Range 258: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_257: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22179738,
      endBlock: 22179738,
    },
    // Range 259: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_258: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22194005,
      endBlock: 22194005,
    },
    // Range 260: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_259: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22202971,
      endBlock: 22202971,
    },
    // Range 261: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_260: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22215337,
      endBlock: 22215337,
    },
    // Range 262: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_261: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22238497,
      endBlock: 22238497,
    },
    // Range 263: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_262: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22243902,
      endBlock: 22243902,
    },
    // Range 264: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_263: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22281209,
      endBlock: 22281209,
    },
    // Range 265: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_264: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22367544,
      endBlock: 22367544,
    },
    // Range 266: 3 events in 534 blocks (0.56% efficient)
    RealUnit_Historical_265: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22374943,
      endBlock: 22375476,
    },
    // Range 267: 2 events in 897 blocks (0.22% efficient)
    RealUnit_Historical_266: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22424783,
      endBlock: 22425679,
    },
    // Range 268: 2 events in 1,935 blocks (0.10% efficient)
    RealUnit_Historical_267: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22474263,
      endBlock: 22476197,
    },
    // Range 269: 2 events in 779 blocks (0.26% efficient)
    RealUnit_Historical_268: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22523682,
      endBlock: 22524460,
    },
    // Range 270: 2 events in 1,979 blocks (0.10% efficient)
    RealUnit_Historical_269: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22529747,
      endBlock: 22531725,
    },
    // Range 271: 5 events in 712 blocks (0.70% efficient)
    RealUnit_Historical_270: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22545705,
      endBlock: 22546416,
    },
    // Range 272: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_271: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22567819,
      endBlock: 22567819,
    },
    // Range 273: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_272: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22644845,
      endBlock: 22644845,
    },
    // Range 274: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_273: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22679546,
      endBlock: 22679546,
    },
    // Range 275: 3 events in 371 blocks (0.81% efficient)
    RealUnit_Historical_274: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22724127,
      endBlock: 22724497,
    },
    // Range 276: 2 events in 127 blocks (1.57% efficient)
    RealUnit_Historical_275: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22729599,
      endBlock: 22729725,
    },
    // Range 277: 2 events in 2,233 blocks (0.09% efficient)
    RealUnit_Historical_276: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22743983,
      endBlock: 22746215,
    },
    // Range 278: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_277: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22765720,
      endBlock: 22765720,
    },
    // Range 279: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_278: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22787048,
      endBlock: 22787048,
    },
    // Range 280: 5 events in 2,035 blocks (0.25% efficient)
    RealUnit_Historical_279: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22795022,
      endBlock: 22797056,
    },
    // Range 281: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_280: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22816096,
      endBlock: 22816096,
    },
    // Range 282: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_281: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22837166,
      endBlock: 22837166,
    },
    // Range 283: 2 events in 135 blocks (1.48% efficient)
    RealUnit_Historical_282: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22861545,
      endBlock: 22861679,
    },
    // Range 284: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_283: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22872981,
      endBlock: 22872981,
    },
    // Range 285: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_284: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22883345,
      endBlock: 22883345,
    },
    // Range 286: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_285: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22893971,
      endBlock: 22893971,
    },
    // Range 287: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_286: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22916062,
      endBlock: 22916062,
    },
    // Range 288: 3 events in 1,142 blocks (0.26% efficient)
    RealUnit_Historical_287: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22923678,
      endBlock: 22924819,
    },
    // Range 289: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_288: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22930650,
      endBlock: 22930650,
    },
    // Range 290: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_289: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22939699,
      endBlock: 22939699,
    },
    // Range 291: 2 events in 380 blocks (0.53% efficient)
    RealUnit_Historical_290: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22946645,
      endBlock: 22947024,
    },
    // Range 292: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_291: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22965747,
      endBlock: 22965747,
    },
    // Range 293: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_292: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22973790,
      endBlock: 22973790,
    },
    // Range 294: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_293: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22994574,
      endBlock: 22994574,
    },
    // Range 295: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_294: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23016496,
      endBlock: 23016496,
    },
    // Range 296: 2 events in 244 blocks (0.82% efficient)
    RealUnit_Historical_295: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23030810,
      endBlock: 23031053,
    },
    // Range 297: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_296: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23039230,
      endBlock: 23039230,
    },
    // Range 298: 3 events in 5,108 blocks (0.06% efficient)
    RealUnit_Historical_297: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23075791,
      endBlock: 23080898,
    },
    // Range 299: 2 events in 638 blocks (0.31% efficient)
    RealUnit_Historical_298: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23087254,
      endBlock: 23087891,
    },
    // Range 300: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_299: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23116627,
      endBlock: 23116627,
    },
    // Range 301: 2 events in 458 blocks (0.44% efficient)
    RealUnit_Historical_300: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23123803,
      endBlock: 23124260,
    },
    // Range 302: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_301: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23166684,
      endBlock: 23166684,
    },
    // Range 303: 2 events in 132 blocks (1.52% efficient)
    RealUnit_Historical_302: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23173811,
      endBlock: 23173942,
    },
    // Range 304: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_303: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23187919,
      endBlock: 23187919,
    },
    // Range 305: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_304: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23196636,
      endBlock: 23196636,
    },
    // Range 306: 3 events in 1,152 blocks (0.26% efficient)
    RealUnit_Historical_305: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23216840,
      endBlock: 23217991,
    },
    // Range 307: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_306: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23225932,
      endBlock: 23225932,
    },
    // Range 308: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_307: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23268497,
      endBlock: 23268497,
    },
    // Range 309: 3 events in 1,958 blocks (0.15% efficient)
    RealUnit_Historical_308: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23274092,
      endBlock: 23276049,
    },
    // Range 310: 2 events in 47 blocks (4.26% efficient)
    RealUnit_Historical_309: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23333064,
      endBlock: 23333110,
    },
    // Range 311: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_310: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23338409,
      endBlock: 23338409,
    },
    // Range 312: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_311: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23367713,
      endBlock: 23367713,
    },
    // Range 313: 5 events in 5,855 blocks (0.09% efficient)
    RealUnit_Historical_312: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23376738,
      endBlock: 23382592,
    },
    // Range 314: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_313: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23431254,
      endBlock: 23431254,
    },
    // Range 315: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_314: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23440623,
      endBlock: 23440623,
    },
    // Range 316: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_315: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23445757,
      endBlock: 23445757,
    },
    // Range 317: 2 events in 4,489 blocks (0.04% efficient)
    RealUnit_Historical_316: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23476830,
      endBlock: 23481318,
    },
    // Range 318: 5 events in 1,988 blocks (0.25% efficient)
    RealUnit_Historical_317: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23488379,
      endBlock: 23490366,
    },
    // Range 319: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_318: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23497539,
      endBlock: 23497539,
    },
    // Range 320: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_319: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23510901,
      endBlock: 23510901,
    },
    // Range 321: 2 events in 2,750 blocks (0.07% efficient)
    RealUnit_Historical_320: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23523548,
      endBlock: 23526297,
    },
    // Range 322: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_321: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23531888,
      endBlock: 23531888,
    },
    // Range 323: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_322: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23556279,
      endBlock: 23556279,
    },
    // Range 324: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_323: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23568628,
      endBlock: 23568628,
    },
    // Range 325: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_324: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23575671,
      endBlock: 23575671,
    },
    // Range 326: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_325: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23588305,
      endBlock: 23588305,
    },
    // Range 327: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_326: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23617733,
      endBlock: 23617733,
    },
    // Range 328: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_327: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23639870,
      endBlock: 23639870,
    },
    // Current range: all blocks after historical period
    RealUnit_Current: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: HISTORICAL_END_BLOCK + 1,
    },
  },
});
