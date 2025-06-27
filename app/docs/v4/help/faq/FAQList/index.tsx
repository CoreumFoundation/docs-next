'use client';

import { useState } from "react";
import { ExpandedQuestion } from "@/components/ExpandedQuestion";

const FAQ_ITEMS = [
  {
    id: 1,
    label: 'How to point `cored` to a specific network?',
    description: (
      <>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">
          By default, cored binary points to the local node (localhost:26657).
        </p>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">
          To point it to a specific node you should use two flags – <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">--node</code> and <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">--chain-id</code>.
        </p>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">For example status for the specific node can be retrieved this way:</p>
        <pre className="bg-code rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words text-sm mt-3 mb-3">
          <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">
            cored status --node=&#123;NODE_URL_WITH_PORT&#125; --chain-id=&#123;CHAIN_ID&#125;
          </code>
        </pre>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">
          <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">NODE_URL_WITH_PORT</code> and <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">CHAIN_ID</code> can be found at <a href="/docs/v4/tutorials/get-started/setup-cli" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-semibold leading-7">network variables page</a>.
        </p>
      </>
    ),
  },
  {
    id: 2,
    label: 'How to fix `account not found` error?',
    description: (
      <>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">If you see the next message:</p>
        <pre className="bg-code rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words text-sm mt-3 mb-3">
          <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">
            Error: rpc error:
            {'\n'}  code = NotFound desc = rpc error:
            {'\n'}    code = NotFound desc = account testcore1q07ldrjnr8xtsy3rz82yxqcdrffu3uw3daslrw not found:
            {'\n'}      key not found
          </code>
        </pre>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">Two reasons might cause this issue:</p>
        <ol className="ml-4 mb-5 list-decimal">
          <li className="text-main-title-light dark:text-main-title-dark text-sm mb-2">
            Your account probably has zero balance, and it is not visible on the network. You should{' '}
            <a href="/docs/v4/tools-and-ecosystem/faucet">fund</a> it before using it.
          </li>
          <li className="text-main-title-light dark:text-main-title-dark text-sm mb-2">
            RPC node you used to send the request is not fully synced, use another RPC node or wait
            for sync completion.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 3,
    label: 'How to fix `key not found` error?',
    description: (
      <>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">If you see the next message:</p>
        <pre className="bg-code rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words">
          <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">
            Error: testcore1f2dyj8dhdv62ytrkuvn832ezzjdcpg2jhrtzvy.info: key not found
          </code>
        </pre>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">
          Probably, your <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">RPC_URL</code> and/or <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">chain-id</code> belong to different
          networks. Also, this error often occurs when you have added your account into a specific
          keyring (i.e. <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">--keyring-backend=test</code>) and you forget to specify that keyring in
          the CLI command.
        </p>
      </>
    ),
  },
  {
    id: 4,
    label: 'How can I integrate Coreum into my real estate brokerage?',
    description: (
       <p className="text-base font-normal text-[#868991] leading-7 mb-2">
          Coreum is designed specifically to tokenize real-world assets like real estate. Depending on whether your property is rental, commercial, or residential, the integration details may vary. We recommend reaching out to our team <a href="https://www.coreum.com/contact-partnership" className="text-[#25D695] hover:opacity-80 font-semibold">here</a> so we can guide you through a tailored implementation.
      </p>
    ),
  },
  {
    id: 5,
    label: 'What makes the Coreum blockchain unique?',
    description: (
      <ul className="list-disc ml-5 text-[#868991] list-inside">
        <li>Cross-Chain Routing Across IBC & XRPL.</li>
        <li>Native Asset Programmability with Smart Tokens (WASM).</li>
        <li>Compliance-First Design with Proven Stability & 1 Second Finality.</li>
        <li>Organic Orderbook DEX with AMM Liquidity Routing.</li>
      </ul>
    ),
  },
  {
    id: 6,
    label: 'How can I delegate my tokens to a validator?',
    description: (
      <p className="text-base font-normal text-[#868991] leading-7 mb-2">
        You can delegate your $COREUM tokens to a validator directly through any supported wallet, including Leap, Cosmostation, Fox Wallet & more. Most wallets offer delegation as a built-in feature, making it easy to participate in securing the network and earning rewards. Alternatively, you can connect any supported wallet to a third party dashboard such as <a href="https://restake.app" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 font-semibold">Restake.app</a> to stake your $COREUM. See the full list of supported wallets <a href="https://docs.coreum.dev/docs/v4/tools-and-ecosystem/wallets" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 font-semibold">here</a>.
      </p>
    ),
  },
  {
    id: 7,
    label: 'What is the process for creating a new token on Coreum?',
    description: (
      <p className="text-base font-normal text-[#868991] leading-7 mb-2">
        You can issue a new token on Coreum using the <a href="https://token-hub.coreum.dev/" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 font-semibold">TokenHub</a> in just a few clicks. For advanced users, the CLI is also available to use by following this <a href="https://docs.coreum.dev/docs/v4/tutorials/smart-tokens/create-and-manage-ft" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 font-semibold">guide</a>. The Coreum Foundation recommends deploying your token on the testnet first to test its functionality before launching it on the mainnet.
      </p>
    ),
  },
  {
    id: 8,
    label: 'How can I report bugs or issues in Coreum?',
    description: (
      <p className="text-base font-normal text-[#868991] leading-7 mb-2">
        You can report bugs or issues on the <a href="https://github.com/CoreumFoundation/coreum/issues" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 font-semibold">Coreum GitHub page</a>. Alternatively, join the Coreum Foundation <a href="https://discord.com/invite/VgkhYeWmTd" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 font-semibold">Discord Server</a> to share issues directly with the community and core team.
      </p>
    ),
  },
  {
    id: 9,
    label: 'How does Coreum handle misbehaving validators?',
    description: (
      <>
        <p className="text-base font-normal text-[#868991] leading-7 mb-2">
          There are 2 types of misbehaviour:
        </p>
        <ul className="list-disc ml-5 text-[#868991] list-inside">
          <li className="mb-2">
            <strong>Uptime misbehaviour:</strong> If the validator starts missing more than 50% of blocks in a period of 34,000 blocks, it will get jailed for 60 seconds. During this time, the operator cannot unjail it. The punishment is burning 0.5% of the validator&apos;s stake. Once resolved, an unjail transaction is required.
          </li>
          <li>
            <strong>Double signing misbehaviour:</strong> A validator that signs two blocks at the same height will be slashed 5% of total delegations and permanently removed from the validator set (&quot;tombstoned&quot;). A new validator must be created with a new consensus key.
          </li>
        </ul>
      </>
    ),
  },
];


export const FAQList = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full gap-4">
      {FAQ_ITEMS.map((item: { id: number; label: string; description: string | React.ReactNode; }, index: number) => {
        return (
          <ExpandedQuestion
            label={item.label}
            description={item.description}
            isActive={activeQuestion === item.id}
            key={`faq-${index}`}
            onClick={() => setActiveQuestion(activeQuestion === item.id ? null : item.id)}
          />
        );
      })}
    </div>
  );
};
