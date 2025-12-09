import { Abi } from "viem";

interface ContractConfig {
    abi: Abi;
    address: `0x${string}`;
}

interface ReadOnlyClient {
    multicall: (config: { contracts: { abi: Abi; address: `0x${string}`; functionName: string; args: any[] }[] }) => Promise<any[]>;
}


export const getBalances = async (addresses: string[], contract: ContractConfig, client: ReadOnlyClient) => {
    const balances = await client.multicall({
        contracts: addresses.map((address) => ({
            abi: contract.abi,
            address: contract.address,
            functionName: "balanceOf",
            args: [address as `0x${string}`],
        })),
    });

    return balances.map((balance) => balance.result);
}
    