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
// - Total Ranges: 228
// - Total Blocks to Scan: 929,003
// - Original Blocks: 9,070,406
// - Reduction: 89.76%
// - RPC Savings: ~90%
//
// Generated: 2025-10-30T13:22:52.283Z
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
    // Range 4: 13 events in 29,131 blocks (0.04% efficient)
    RealUnit_Historical_3: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14948718,
      endBlock: 14977848,
    },
    // Range 5: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_4: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 14997152,
      endBlock: 14997152,
    },
    // Range 6: 4 events in 9,149 blocks (0.04% efficient)
    RealUnit_Historical_5: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15034846,
      endBlock: 15043994,
    },
    // Range 7: 5 events in 6,769 blocks (0.07% efficient)
    RealUnit_Historical_6: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15074868,
      endBlock: 15081636,
    },
    // Range 8: 2 events in 113 blocks (1.77% efficient)
    RealUnit_Historical_7: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15095889,
      endBlock: 15096001,
    },
    // Range 9: 5 events in 7,944 blocks (0.06% efficient)
    RealUnit_Historical_8: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15120204,
      endBlock: 15128147,
    },
    // Range 10: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_9: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15167221,
      endBlock: 15167221,
    },
    // Range 11: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_10: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15263894,
      endBlock: 15263894,
    },
    // Range 12: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_11: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15276744,
      endBlock: 15276744,
    },
    // Range 13: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_12: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15388904,
      endBlock: 15388904,
    },
    // Range 14: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_13: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15416625,
      endBlock: 15416625,
    },
    // Range 15: 7 events in 15,019 blocks (0.05% efficient)
    RealUnit_Historical_14: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15445888,
      endBlock: 15460906,
    },
    // Range 16: 4 events in 6,602 blocks (0.06% efficient)
    RealUnit_Historical_15: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15476496,
      endBlock: 15483097,
    },
    // Range 17: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_16: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15497634,
      endBlock: 15497634,
    },
    // Range 18: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_17: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15532914,
      endBlock: 15532914,
    },
    // Range 19: 2 events in 590 blocks (0.34% efficient)
    RealUnit_Historical_18: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15580439,
      endBlock: 15581028,
    },
    // Range 20: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_19: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15624795,
      endBlock: 15624795,
    },
    // Range 21: 3 events in 7,073 blocks (0.04% efficient)
    RealUnit_Historical_20: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15673477,
      endBlock: 15680549,
    },
    // Range 22: 3 events in 6,704 blocks (0.04% efficient)
    RealUnit_Historical_21: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15711121,
      endBlock: 15717824,
    },
    // Range 23: 6 events in 5,220 blocks (0.11% efficient)
    RealUnit_Historical_22: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15762266,
      endBlock: 15767485,
    },
    // Range 24: 3 events in 3,950 blocks (0.08% efficient)
    RealUnit_Historical_23: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15783901,
      endBlock: 15787850,
    },
    // Range 25: 3 events in 7,848 blocks (0.04% efficient)
    RealUnit_Historical_24: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15802710,
      endBlock: 15810557,
    },
    // Range 26: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_25: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15861030,
      endBlock: 15861030,
    },
    // Range 27: 2 events in 5 blocks (40.00% efficient)
    RealUnit_Historical_26: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15881001,
      endBlock: 15881005,
    },
    // Range 28: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_27: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15912049,
      endBlock: 15912049,
    },
    // Range 29: 3 events in 3,323 blocks (0.09% efficient)
    RealUnit_Historical_28: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15924873,
      endBlock: 15928195,
    },
    // Range 30: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_29: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15968329,
      endBlock: 15968329,
    },
    // Range 31: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_30: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 15983693,
      endBlock: 15983693,
    },
    // Range 32: 5 events in 12,884 blocks (0.04% efficient)
    RealUnit_Historical_31: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16026446,
      endBlock: 16039329,
    },
    // Range 33: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_32: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16055557,
      endBlock: 16055557,
    },
    // Range 34: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_33: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16067640,
      endBlock: 16067640,
    },
    // Range 35: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_34: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16089027,
      endBlock: 16089027,
    },
    // Range 36: 2 events in 147 blocks (1.36% efficient)
    RealUnit_Historical_35: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16104798,
      endBlock: 16104944,
    },
    // Range 37: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_36: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16120546,
      endBlock: 16120546,
    },
    // Range 38: 6 events in 15,280 blocks (0.04% efficient)
    RealUnit_Historical_37: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16140250,
      endBlock: 16155529,
    },
    // Range 39: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_38: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16290704,
      endBlock: 16290704,
    },
    // Range 40: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_39: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16332245,
      endBlock: 16332245,
    },
    // Range 41: 17 events in 10,879 blocks (0.16% efficient)
    RealUnit_Historical_40: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16367793,
      endBlock: 16378671,
    },
    // Range 42: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_41: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16418611,
      endBlock: 16418611,
    },
    // Range 43: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_42: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16434640,
      endBlock: 16434640,
    },
    // Range 44: 2 events in 6,802 blocks (0.03% efficient)
    RealUnit_Historical_43: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16476493,
      endBlock: 16483294,
    },
    // Range 45: 3 events in 14,131 blocks (0.02% efficient)
    RealUnit_Historical_44: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16527341,
      endBlock: 16541471,
    },
    // Range 46: 6 events in 15,163 blocks (0.04% efficient)
    RealUnit_Historical_45: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16583247,
      endBlock: 16598409,
    },
    // Range 47: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_46: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16640195,
      endBlock: 16640195,
    },
    // Range 48: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_47: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16696974,
      endBlock: 16696974,
    },
    // Range 49: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_48: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16725604,
      endBlock: 16725604,
    },
    // Range 50: 2 events in 2,450 blocks (0.08% efficient)
    RealUnit_Historical_49: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16746552,
      endBlock: 16749001,
    },
    // Range 51: 3 events in 1,165 blocks (0.26% efficient)
    RealUnit_Historical_50: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16782524,
      endBlock: 16783688,
    },
    // Range 52: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_51: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16804977,
      endBlock: 16804977,
    },
    // Range 53: 9 events in 4,172 blocks (0.22% efficient)
    RealUnit_Historical_52: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16842631,
      endBlock: 16846802,
    },
    // Range 54: 6 events in 10,864 blocks (0.06% efficient)
    RealUnit_Historical_53: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16878269,
      endBlock: 16889132,
    },
    // Range 55: 11 events in 30,177 blocks (0.04% efficient)
    RealUnit_Historical_54: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16917044,
      endBlock: 16947220,
    },
    // Range 56: 3 events in 13,580 blocks (0.02% efficient)
    RealUnit_Historical_55: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 16975835,
      endBlock: 16989414,
    },
    // Range 57: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_56: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17030039,
      endBlock: 17030039,
    },
    // Range 58: 2 events in 172 blocks (1.16% efficient)
    RealUnit_Historical_57: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17093712,
      endBlock: 17093883,
    },
    // Range 59: 2 events in 201 blocks (1.00% efficient)
    RealUnit_Historical_58: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17151243,
      endBlock: 17151443,
    },
    // Range 60: 3 events in 2,271 blocks (0.13% efficient)
    RealUnit_Historical_59: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17164645,
      endBlock: 17166915,
    },
    // Range 61: 2 events in 119 blocks (1.68% efficient)
    RealUnit_Historical_60: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17214231,
      endBlock: 17214349,
    },
    // Range 62: 3 events in 14,061 blocks (0.02% efficient)
    RealUnit_Historical_61: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17263634,
      endBlock: 17277694,
    },
    // Range 63: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_62: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17324077,
      endBlock: 17324077,
    },
    // Range 64: 3 events in 5,481 blocks (0.05% efficient)
    RealUnit_Historical_63: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17336150,
      endBlock: 17341630,
    },
    // Range 65: 4 events in 506 blocks (0.79% efficient)
    RealUnit_Historical_64: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17370281,
      endBlock: 17370786,
    },
    // Range 66: 3 events in 7,045 blocks (0.04% efficient)
    RealUnit_Historical_65: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17385127,
      endBlock: 17392171,
    },
    // Range 67: 2 events in 1,759 blocks (0.11% efficient)
    RealUnit_Historical_66: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17419951,
      endBlock: 17421709,
    },
    // Range 68: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_67: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17451109,
      endBlock: 17451109,
    },
    // Range 69: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_68: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17469734,
      endBlock: 17469734,
    },
    // Range 70: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_69: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17521325,
      endBlock: 17521325,
    },
    // Range 71: 25 events in 68 blocks (36.76% efficient)
    RealUnit_Historical_70: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17536594,
      endBlock: 17536661,
    },
    // Range 72: 3 events in 14,535 blocks (0.02% efficient)
    RealUnit_Historical_71: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17569898,
      endBlock: 17584432,
    },
    // Range 73: 2 events in 6,143 blocks (0.03% efficient)
    RealUnit_Historical_72: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17612933,
      endBlock: 17619075,
    },
    // Range 74: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_73: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17669372,
      endBlock: 17669372,
    },
    // Range 75: 2 events in 5,841 blocks (0.03% efficient)
    RealUnit_Historical_74: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17691771,
      endBlock: 17697611,
    },
    // Range 76: 3 events in 7,131 blocks (0.04% efficient)
    RealUnit_Historical_75: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17712759,
      endBlock: 17719889,
    },
    // Range 77: 2 events in 4,228 blocks (0.05% efficient)
    RealUnit_Historical_76: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17758150,
      endBlock: 17762377,
    },
    // Range 78: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_77: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17790775,
      endBlock: 17790775,
    },
    // Range 79: 2 events in 3,108 blocks (0.06% efficient)
    RealUnit_Historical_78: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17825473,
      endBlock: 17828580,
    },
    // Range 80: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_79: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17870615,
      endBlock: 17870615,
    },
    // Range 81: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_80: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17941742,
      endBlock: 17941742,
    },
    // Range 82: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_81: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17969135,
      endBlock: 17969135,
    },
    // Range 83: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_82: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 17991525,
      endBlock: 17991525,
    },
    // Range 84: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_83: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18011971,
      endBlock: 18011971,
    },
    // Range 85: 3 events in 2,921 blocks (0.10% efficient)
    RealUnit_Historical_84: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18033135,
      endBlock: 18036055,
    },
    // Range 86: 2 events in 8,405 blocks (0.02% efficient)
    RealUnit_Historical_85: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18119115,
      endBlock: 18127519,
    },
    // Range 87: 7 events in 486 blocks (1.44% efficient)
    RealUnit_Historical_86: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18221495,
      endBlock: 18221980,
    },
    // Range 88: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_87: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18292861,
      endBlock: 18292861,
    },
    // Range 89: 16 events in 20 blocks (80.00% efficient)
    RealUnit_Historical_88: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18333895,
      endBlock: 18333914,
    },
    // Range 90: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_89: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18362005,
      endBlock: 18362005,
    },
    // Range 91: 2 events in 7,725 blocks (0.03% efficient)
    RealUnit_Historical_90: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18419560,
      endBlock: 18427284,
    },
    // Range 92: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_91: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18452206,
      endBlock: 18452206,
    },
    // Range 93: 4 events in 1,043 blocks (0.38% efficient)
    RealUnit_Historical_92: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18469644,
      endBlock: 18470686,
    },
    // Range 94: 4 events in 8,953 blocks (0.04% efficient)
    RealUnit_Historical_93: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18526396,
      endBlock: 18535348,
    },
    // Range 95: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_94: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18576134,
      endBlock: 18576134,
    },
    // Range 96: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_95: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18611654,
      endBlock: 18611654,
    },
    // Range 97: 7 events in 5,299 blocks (0.13% efficient)
    RealUnit_Historical_96: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18729562,
      endBlock: 18734860,
    },
    // Range 98: 4 events in 7,053 blocks (0.06% efficient)
    RealUnit_Historical_97: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18762799,
      endBlock: 18769851,
    },
    // Range 99: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_98: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18790415,
      endBlock: 18790415,
    },
    // Range 100: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_99: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18806786,
      endBlock: 18806786,
    },
    // Range 101: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_100: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18821254,
      endBlock: 18821254,
    },
    // Range 102: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_101: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18842072,
      endBlock: 18842072,
    },
    // Range 103: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_102: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18961472,
      endBlock: 18961472,
    },
    // Range 104: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_103: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 18982671,
      endBlock: 18982671,
    },
    // Range 105: 4 events in 11,179 blocks (0.04% efficient)
    RealUnit_Historical_104: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19028604,
      endBlock: 19039782,
    },
    // Range 106: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_105: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19075226,
      endBlock: 19075226,
    },
    // Range 107: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_106: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19111158,
      endBlock: 19111158,
    },
    // Range 108: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_107: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19175735,
      endBlock: 19175735,
    },
    // Range 109: 2 events in 95 blocks (2.11% efficient)
    RealUnit_Historical_108: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19234951,
      endBlock: 19235045,
    },
    // Range 110: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_109: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19261042,
      endBlock: 19261042,
    },
    // Range 111: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_110: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19303462,
      endBlock: 19303462,
    },
    // Range 112: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_111: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19324192,
      endBlock: 19324192,
    },
    // Range 113: 3 events in 209 blocks (1.44% efficient)
    RealUnit_Historical_112: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19389693,
      endBlock: 19389901,
    },
    // Range 114: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_113: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19440976,
      endBlock: 19440976,
    },
    // Range 115: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_114: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19485219,
      endBlock: 19485219,
    },
    // Range 116: 4 events in 17,536 blocks (0.02% efficient)
    RealUnit_Historical_115: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19510497,
      endBlock: 19528032,
    },
    // Range 117: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_116: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19566934,
      endBlock: 19566934,
    },
    // Range 118: 2 events in 6,789 blocks (0.03% efficient)
    RealUnit_Historical_117: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19580993,
      endBlock: 19587781,
    },
    // Range 119: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_118: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19609866,
      endBlock: 19609866,
    },
    // Range 120: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_119: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19634414,
      endBlock: 19634414,
    },
    // Range 121: 7 events in 22,275 blocks (0.03% efficient)
    RealUnit_Historical_120: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19660105,
      endBlock: 19682379,
    },
    // Range 122: 5 events in 8,267 blocks (0.06% efficient)
    RealUnit_Historical_121: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19732065,
      endBlock: 19740331,
    },
    // Range 123: 9 events in 22,169 blocks (0.04% efficient)
    RealUnit_Historical_122: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19766941,
      endBlock: 19789109,
    },
    // Range 124: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_123: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19816593,
      endBlock: 19816593,
    },
    // Range 125: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_124: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 19917109,
      endBlock: 19917109,
    },
    // Range 126: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_125: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20010029,
      endBlock: 20010029,
    },
    // Range 127: 3 events in 8,674 blocks (0.03% efficient)
    RealUnit_Historical_126: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20024089,
      endBlock: 20032762,
    },
    // Range 128: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_127: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20083744,
      endBlock: 20083744,
    },
    // Range 129: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_128: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20111603,
      endBlock: 20111603,
    },
    // Range 130: 2 events in 412 blocks (0.49% efficient)
    RealUnit_Historical_129: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20161268,
      endBlock: 20161679,
    },
    // Range 131: 3 events in 9,860 blocks (0.03% efficient)
    RealUnit_Historical_130: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20174887,
      endBlock: 20184746,
    },
    // Range 132: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_131: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20235586,
      endBlock: 20235586,
    },
    // Range 133: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_132: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20248275,
      endBlock: 20248275,
    },
    // Range 134: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_133: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20292680,
      endBlock: 20292680,
    },
    // Range 135: 5 events in 20,567 blocks (0.02% efficient)
    RealUnit_Historical_134: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20318964,
      endBlock: 20339530,
    },
    // Range 136: 2 events in 5,936 blocks (0.03% efficient)
    RealUnit_Historical_135: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20383845,
      endBlock: 20389780,
    },
    // Range 137: 3 events in 1,857 blocks (0.16% efficient)
    RealUnit_Historical_136: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20425557,
      endBlock: 20427413,
    },
    // Range 138: 2 events in 4,127 blocks (0.05% efficient)
    RealUnit_Historical_137: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20471325,
      endBlock: 20475451,
    },
    // Range 139: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_138: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20568241,
      endBlock: 20568241,
    },
    // Range 140: 4 events in 2,620 blocks (0.15% efficient)
    RealUnit_Historical_139: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20589987,
      endBlock: 20592606,
    },
    // Range 141: 4 events in 19,337 blocks (0.02% efficient)
    RealUnit_Historical_140: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20673116,
      endBlock: 20692452,
    },
    // Range 142: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_141: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20719695,
      endBlock: 20719695,
    },
    // Range 143: 3 events in 445 blocks (0.67% efficient)
    RealUnit_Historical_142: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20740227,
      endBlock: 20740671,
    },
    // Range 144: 4 events in 7,523 blocks (0.05% efficient)
    RealUnit_Historical_143: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20770179,
      endBlock: 20777701,
    },
    // Range 145: 2 events in 8,474 blocks (0.02% efficient)
    RealUnit_Historical_144: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20833975,
      endBlock: 20842448,
    },
    // Range 146: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_145: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20863404,
      endBlock: 20863404,
    },
    // Range 147: 2 events in 1,498 blocks (0.13% efficient)
    RealUnit_Historical_146: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20883553,
      endBlock: 20885050,
    },
    // Range 148: 3 events in 4,546 blocks (0.07% efficient)
    RealUnit_Historical_147: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20915288,
      endBlock: 20919833,
    },
    // Range 149: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_148: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20955699,
      endBlock: 20955699,
    },
    // Range 150: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_149: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20971556,
      endBlock: 20971556,
    },
    // Range 151: 3 events in 7,025 blocks (0.04% efficient)
    RealUnit_Historical_150: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 20984028,
      endBlock: 20991052,
    },
    // Range 152: 2 events in 37 blocks (5.41% efficient)
    RealUnit_Historical_151: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21046085,
      endBlock: 21046121,
    },
    // Range 153: 2 events in 6,049 blocks (0.03% efficient)
    RealUnit_Historical_152: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21072544,
      endBlock: 21078592,
    },
    // Range 154: 11 events in 1,881 blocks (0.58% efficient)
    RealUnit_Historical_153: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21108941,
      endBlock: 21110821,
    },
    // Range 155: 2 events in 74 blocks (2.70% efficient)
    RealUnit_Historical_154: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21134550,
      endBlock: 21134623,
    },
    // Range 156: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_155: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21164407,
      endBlock: 21164407,
    },
    // Range 157: 2 events in 72 blocks (2.78% efficient)
    RealUnit_Historical_156: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21192064,
      endBlock: 21192135,
    },
    // Range 158: 3 events in 494 blocks (0.61% efficient)
    RealUnit_Historical_157: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21220336,
      endBlock: 21220829,
    },
    // Range 159: 3 events in 14,698 blocks (0.02% efficient)
    RealUnit_Historical_158: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21270635,
      endBlock: 21285332,
    },
    // Range 160: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_159: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21342390,
      endBlock: 21342390,
    },
    // Range 161: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_160: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21379842,
      endBlock: 21379842,
    },
    // Range 162: 2 events in 2,181 blocks (0.09% efficient)
    RealUnit_Historical_161: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21421173,
      endBlock: 21423353,
    },
    // Range 163: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_162: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21442428,
      endBlock: 21442428,
    },
    // Range 164: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_163: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21514992,
      endBlock: 21514992,
    },
    // Range 165: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_164: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21560264,
      endBlock: 21560264,
    },
    // Range 166: 6 events in 15,638 blocks (0.04% efficient)
    RealUnit_Historical_165: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21571494,
      endBlock: 21587131,
    },
    // Range 167: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_166: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21622854,
      endBlock: 21622854,
    },
    // Range 168: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_167: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21636161,
      endBlock: 21636161,
    },
    // Range 169: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_168: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21673505,
      endBlock: 21673505,
    },
    // Range 170: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_169: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21686405,
      endBlock: 21686405,
    },
    // Range 171: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_170: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21730237,
      endBlock: 21730237,
    },
    // Range 172: 4 events in 16,316 blocks (0.02% efficient)
    RealUnit_Historical_171: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21771802,
      endBlock: 21788117,
    },
    // Range 173: 3 events in 14,547 blocks (0.02% efficient)
    RealUnit_Historical_172: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21829109,
      endBlock: 21843655,
    },
    // Range 174: 3 events in 14,019 blocks (0.02% efficient)
    RealUnit_Historical_173: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21879208,
      endBlock: 21893226,
    },
    // Range 175: 7 events in 26,676 blocks (0.03% efficient)
    RealUnit_Historical_174: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21916918,
      endBlock: 21943593,
    },
    // Range 176: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_175: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21967819,
      endBlock: 21967819,
    },
    // Range 177: 5 events in 7,579 blocks (0.07% efficient)
    RealUnit_Historical_176: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 21979512,
      endBlock: 21987090,
    },
    // Range 178: 9 events in 23,195 blocks (0.04% efficient)
    RealUnit_Historical_177: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22015704,
      endBlock: 22038898,
    },
    // Range 179: 2 events in 1,697 blocks (0.12% efficient)
    RealUnit_Historical_178: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22079320,
      endBlock: 22081016,
    },
    // Range 180: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_179: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22094052,
      endBlock: 22094052,
    },
    // Range 181: 2 events in 7,189 blocks (0.03% efficient)
    RealUnit_Historical_180: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22115785,
      endBlock: 22122973,
    },
    // Range 182: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_181: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22144965,
      endBlock: 22144965,
    },
    // Range 183: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_182: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22166264,
      endBlock: 22166264,
    },
    // Range 184: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_183: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22179738,
      endBlock: 22179738,
    },
    // Range 185: 2 events in 8,967 blocks (0.02% efficient)
    RealUnit_Historical_184: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22194005,
      endBlock: 22202971,
    },
    // Range 186: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_185: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22215337,
      endBlock: 22215337,
    },
    // Range 187: 2 events in 5,406 blocks (0.04% efficient)
    RealUnit_Historical_186: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22238497,
      endBlock: 22243902,
    },
    // Range 188: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_187: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22281209,
      endBlock: 22281209,
    },
    // Range 189: 4 events in 7,933 blocks (0.05% efficient)
    RealUnit_Historical_188: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22367544,
      endBlock: 22375476,
    },
    // Range 190: 2 events in 897 blocks (0.22% efficient)
    RealUnit_Historical_189: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22424783,
      endBlock: 22425679,
    },
    // Range 191: 2 events in 1,935 blocks (0.10% efficient)
    RealUnit_Historical_190: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22474263,
      endBlock: 22476197,
    },
    // Range 192: 4 events in 8,044 blocks (0.05% efficient)
    RealUnit_Historical_191: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22523682,
      endBlock: 22531725,
    },
    // Range 193: 5 events in 712 blocks (0.70% efficient)
    RealUnit_Historical_192: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22545705,
      endBlock: 22546416,
    },
    // Range 194: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_193: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22567819,
      endBlock: 22567819,
    },
    // Range 195: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_194: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22644845,
      endBlock: 22644845,
    },
    // Range 196: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_195: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22679546,
      endBlock: 22679546,
    },
    // Range 197: 5 events in 5,599 blocks (0.09% efficient)
    RealUnit_Historical_196: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22724127,
      endBlock: 22729725,
    },
    // Range 198: 2 events in 2,233 blocks (0.09% efficient)
    RealUnit_Historical_197: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22743983,
      endBlock: 22746215,
    },
    // Range 199: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_198: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22765720,
      endBlock: 22765720,
    },
    // Range 200: 6 events in 10,009 blocks (0.06% efficient)
    RealUnit_Historical_199: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22787048,
      endBlock: 22797056,
    },
    // Range 201: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_200: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22816096,
      endBlock: 22816096,
    },
    // Range 202: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_201: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22837166,
      endBlock: 22837166,
    },
    // Range 203: 2 events in 135 blocks (1.48% efficient)
    RealUnit_Historical_202: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22861545,
      endBlock: 22861679,
    },
    // Range 204: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_203: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22872981,
      endBlock: 22872981,
    },
    // Range 205: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_204: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22883345,
      endBlock: 22883345,
    },
    // Range 206: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_205: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22893971,
      endBlock: 22893971,
    },
    // Range 207: 8 events in 30,963 blocks (0.03% efficient)
    RealUnit_Historical_206: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22916062,
      endBlock: 22947024,
    },
    // Range 208: 2 events in 8,044 blocks (0.02% efficient)
    RealUnit_Historical_207: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22965747,
      endBlock: 22973790,
    },
    // Range 209: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_208: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 22994574,
      endBlock: 22994574,
    },
    // Range 210: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_209: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23016496,
      endBlock: 23016496,
    },
    // Range 211: 3 events in 8,421 blocks (0.04% efficient)
    RealUnit_Historical_210: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23030810,
      endBlock: 23039230,
    },
    // Range 212: 5 events in 12,101 blocks (0.04% efficient)
    RealUnit_Historical_211: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23075791,
      endBlock: 23087891,
    },
    // Range 213: 3 events in 7,634 blocks (0.04% efficient)
    RealUnit_Historical_212: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23116627,
      endBlock: 23124260,
    },
    // Range 214: 3 events in 7,259 blocks (0.04% efficient)
    RealUnit_Historical_213: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23166684,
      endBlock: 23173942,
    },
    // Range 215: 2 events in 8,718 blocks (0.02% efficient)
    RealUnit_Historical_214: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23187919,
      endBlock: 23196636,
    },
    // Range 216: 4 events in 9,093 blocks (0.04% efficient)
    RealUnit_Historical_215: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23216840,
      endBlock: 23225932,
    },
    // Range 217: 4 events in 7,553 blocks (0.05% efficient)
    RealUnit_Historical_216: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23268497,
      endBlock: 23276049,
    },
    // Range 218: 3 events in 5,346 blocks (0.06% efficient)
    RealUnit_Historical_217: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23333064,
      endBlock: 23338409,
    },
    // Range 219: 6 events in 14,880 blocks (0.04% efficient)
    RealUnit_Historical_218: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23367713,
      endBlock: 23382592,
    },
    // Range 220: 3 events in 14,504 blocks (0.02% efficient)
    RealUnit_Historical_219: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23431254,
      endBlock: 23445757,
    },
    // Range 221: 8 events in 20,710 blocks (0.04% efficient)
    RealUnit_Historical_220: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23476830,
      endBlock: 23497539,
    },
    // Range 222: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_221: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23510901,
      endBlock: 23510901,
    },
    // Range 223: 3 events in 8,341 blocks (0.04% efficient)
    RealUnit_Historical_222: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23523548,
      endBlock: 23531888,
    },
    // Range 224: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_223: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23556279,
      endBlock: 23556279,
    },
    // Range 225: 2 events in 7,044 blocks (0.03% efficient)
    RealUnit_Historical_224: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23568628,
      endBlock: 23575671,
    },
    // Range 226: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_225: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23588305,
      endBlock: 23588305,
    },
    // Range 227: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_226: {
      abi: RealUnitAbi,
      address: "0x553C7f9C780316FC1D34b8e14ac2465Ab22a090B",
      network: "mainnet",
      startBlock: 23617733,
      endBlock: 23617733,
    },
    // Range 228: 1 events in 1 blocks (100.00% efficient)
    RealUnit_Historical_227: {
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
