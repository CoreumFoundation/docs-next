'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import { TabItem, Tabs } from "../Tabs";
import Link from "next/link";
import { Input } from "../Input";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {stringToPath } from "@cosmjs/crypto";
import axios from "axios";
import { Spinner } from "../Spinner";
import Image from 'next/image';

const tabs = [
  { label: 'Mainnet', id: 'mainnet' },
  { label: 'Testnet', id: 'testnet' },
  { label: 'Devnet', id: 'devnet' },
];

const CONFIG = {
  devnet: {
    denom: 'udevcore',
    tokenPrefix: 'devcore',
    fundWalletURL: 'https://api.devnet-1.coreum.dev/api/faucet/v1/fund',
    coreumHDPath: "m/44'/990'/0'/0/0",
    explorerLink: 'https://explorer.devnet-1.coreum.dev/coreum/transactions',
  },
  testnet: {
    denom: 'utestcore',
    tokenPrefix: 'testcore',
    fundWalletURL: 'https://api.testnet-1.coreum.dev/api/faucet/v1/fund',
    coreumHDPath: "m/44'/990'/0'/0/0",
    explorerLink: 'https://explorer.testnet-1.coreum.dev/coreum/transactions',
  },
};

export const Faucets = () => {
  const [currentTab, setCurrentTab] = useState<TabItem>(tabs[0]);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [mnemonic, setMnemonic] = useState<string>('');
  const [txHash, setTxHash] = useState<string>('');
  const [fundLoading, setFundLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isWalletGenerated, setIsWalletGenerated] = useState<boolean>(false);

  const currentConfig = useMemo(() => {
    return CONFIG[currentTab.id as ('testnet' | 'devnet')] || {};
  }, [currentTab.id]);

  const fundWallet = useCallback(async (address: string) => {
    try {
      const response = await axios.post(currentConfig.fundWalletURL, {
        address: address,
      });

      setTxHash(response.data.txHash);
    } catch (error) {
      setErrorMessage((error as any).response.data.content[0].kind);

      console.error(error);
    }
  }, [currentConfig?.fundWalletURL]);

  const handleRequestFunds = useCallback(async () => {
    setFundLoading(true);
    if (walletAddress.length) {
      await fundWallet(walletAddress);
    }
    setFundLoading(false);
  }, [fundWallet, walletAddress]);

  
  const handleGenerateWallet = useCallback(async () => {
    const wallet = await DirectSecp256k1HdWallet.generate(24, {
      prefix: currentConfig.tokenPrefix,
      hdPaths: [stringToPath(currentConfig.coreumHDPath)],
    });

    const [{ address }] = await wallet.getAccounts();

    setWalletAddress(address);
    setMnemonic(wallet.mnemonic);
    setIsWalletGenerated(true);

    setFundLoading(true);
    await fundWallet(address);
    setFundLoading(false);
  }, [currentConfig.coreumHDPath, currentConfig.tokenPrefix, fundWallet]);

  const handleChangeWalletAddress = useCallback((value: string | number) => {
    setWalletAddress(typeof value === 'string' ? value : String(value));

    setTxHash('');
    setMnemonic('');
    setErrorMessage('');
    setFundLoading(false);
    setIsWalletGenerated(false);
  }, []);

  useEffect(() => {
    setWalletAddress('');
    setTxHash('');
    setMnemonic('');
    setErrorMessage('');
    setFundLoading(false);
    setIsWalletGenerated(false);
  }, [currentTab.id]);

  const getErrorMessage = useCallback((err: string) => {
    switch (err) {
      case 'server.rate_limit':
        if (isWalletGenerated) {
          return (
            <span>The Rate Limit has been surpassed, wallet was generated but funding was not successful. Please, try again in several hours. If you need more funds for specific testing purposes, please request them in the <Link href="https://discord.com/invite/VgkhYeWmTd" target="_blank" className="text-[#25D695] font-medium">Discord</Link></span>
          );
        }

        return (
          <span>Error: The Rate Limit has been surpassed. Please, try again in several hours. If you need more funds for specific testing purposes, please request them in the <Link href="https://discord.com/invite/VgkhYeWmTd" target="_blank" className="text-[#25D695] font-medium">Discord</Link></span>
        );
      case 'server.internal_error':
        if (isWalletGenerated) {
          return 'Wallet was generated but funding was not successful. Error: Unable to transfer tokens';
        }

        return 'Error: Unable to transfer tokens';
      default:
        return err;
    }
  }, [isWalletGenerated]);

  const renderErrorOrTxHash = useMemo(() => {
    if (errorMessage) {
      return (
        <span className="text-[#eee] text-base font-light">{getErrorMessage(errorMessage)}</span>
      );
    }

    return (
      <Link
        target="_blank"
        className="text-[#25D695] text-base"
        href={`${currentConfig?.explorerLink}/${txHash}`}
      >
        {txHash}
      </Link>
    );
  }, [currentConfig?.explorerLink, errorMessage, getErrorMessage, txHash]);

  const renderInfo = useMemo(() => {
    if (!fundLoading && !(txHash.length || errorMessage.length)) {
      return null;
    }

    if (fundLoading) {
      return (
        <div className="flex flex-col w-full gap-2 bg-[#0E0F10] py-4 px-6 rounded-xl text-[#5E6773] text-sm text-nowrap overflow-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline w-full gap-2 text-wrap break-words">
            <span className="text-nowrap min-w-[120px] w-[120px]">Tx Hash:</span>
            <Spinner />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline w-full gap-2 text-wrap break-words">
            <span className="text-nowrap min-w-[120px]  w-[120px]">Wallet Address:</span>
            <span className="text-[#eee] text-base font-light">{walletAddress}</span>
          </div>
          {mnemonic.length ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-baseline w-full gap-2 text-wrap break-words">
                <span className="text-nowrap min-w-[120px] w-[120px]">Wallet Mnemonic:</span>
                <span className="flex text-[#eee] text-base font-light text-wrap">{mnemonic}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2 text-wrap break-words text-[#eee] text-base">
                ⚠️ Mnemonic is the only way to restore you wallet, save it in a safe place.
              </div>
            </>
          ) : null}
        </div>
      );
    }

    return (
      <div className="flex flex-col w-full gap-4 bg-[#0E0F10] py-4 px-6 rounded-xl text-[#5E6773] text-sm text-nowrap overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-baseline w-full gap-2 text-wrap break-words">
          <span className="text-nowrap min-w-[120px] w-[120px]">Tx Hash:</span>
          {renderErrorOrTxHash}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline w-full gap-2 text-wrap break-words">
          <span className="text-nowrap min-w-[120px]  w-[120px]">Wallet Address:</span>
          <span className="text-[#eee] text-base font-light">{walletAddress}</span>
        </div>
        {mnemonic.length ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-baseline w-full gap-2 text-wrap break-words">
              <span className="text-nowrap min-w-[120px] w-[120px]">Wallet Mnemonic:</span>
              <span className="flex text-[#eee] text-base font-light text-wrap">{mnemonic}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2 text-wrap break-words text-[#eee] text-base">
              ⚠️ Mnemonic is the only way to restore you wallet, save it in a safe place.
            </div>
          </>
        ) : null}
      </div>
    );
  }, [errorMessage.length, fundLoading, mnemonic, renderErrorOrTxHash, txHash.length, walletAddress]);

  const renderContent = useMemo(() => {
    switch (currentTab.id) {
      case 'mainnet':
        return (
          <div className="flex flex-col w-full gap-8">
            <div className="text-base font-normal text-[#868991]">
              You can generate your address at <Link className="text-[#25D695] font-semibold" href="/docs/tools/wallets">wallet page</Link>, and you can find the list of Coreum Markets <Link target="_blank" className="text-[#25D695] font-semibold" href="https://coinmarketcap.com/currencies/coreum/markets">here</Link>.
            </div>
            <div className="text-base font-normal text-[#868991]">
              Note: Check if EX supports withdrawal into Coreum Network beforehand.
            </div>
          </div>
        );
      case 'testnet':
      case 'devnet':
        return (
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col md:flex-row w-full items-center gap-6">
              <div
                className="relative flex w-full md:w-[280px] overflow-hidden py-4 px-6 bg-sidebar-active text-[#25D695] hover:opacity-60 text-base font-medium font-['space grotesk'] rounded-xl cursor-pointer"
                onClick={handleGenerateWallet}
              >
                Generate Funded Wallet
                <Image className="absolute right-5 top-0 w-12 select-none" alt="faucet-coin-left" src="/images/tools/faucet/left.svg" width={36} height={36} />
                <Image className="absolute right-1 top-0 select-none" alt="faucet-coin-top" src="/images/tools/faucet/top.svg" width={21} height={21} />
                <Image className="absolute right-0 bottom-0 select-none" alt="faucet-coin-bottom" src="/images/tools/faucet/bottom.svg" width={53} height={53} />
              </div>
              <div className="flex-none text-[#9FA2AC] text-base font-['space grotesk'] font-normal">
                Or
              </div>
              <div className="w-full md:w-auto flex-1">
                <Input
                  buttonLabel="Request Fund"
                  onButtonClick={handleRequestFunds}
                  inputName={"wallet_address"}
                  inputId={"wallet_address"}
                  inputType={"text"}
                  value={walletAddress}
                  onChange={handleChangeWalletAddress}
                  placeholder="Enter wallet address"
                />
              </div>
            </div>
            {renderInfo}
          </div>
        );
      default:
    }
  }, [currentTab.id, handleChangeWalletAddress, handleGenerateWallet, handleRequestFunds, renderInfo, walletAddress]);

  return (
    <div className="flex flex-col w-full gap-10 overflow-hidden">
      <Tabs
        currentTab={currentTab}
        tabs={tabs}
        setCurrentTab={setCurrentTab}
      />
      {renderContent}
    </div>
  );
};
