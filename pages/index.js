import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";

export default function Home() {
  const { address, chainId, connectWallet } = useWeb3();

  return (
    <div className="Wrapper ">
      {address ? (
        <Dashboard />
      ) : (
        <div className="WrappperWallet   h-screen flex flex-col justify-center items-center text-white">
          <button
            className="bg-blue-500 hover:bg-blue-700 rounded font-bold px-4 py-1 text-2xl m-2 "
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </button>
          <div className="details text-center text-sm opacity-80">
            You need Chrome to connect <br /> and run this app
          </div>
        </div>
      )}
    </div>
  );
}
