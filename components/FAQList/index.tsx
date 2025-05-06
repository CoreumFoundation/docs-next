'use client';

import { useState } from "react";
import { ExpandedQuestion } from "../ExpandedQuestion";

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
          <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">NODE_URL_WITH_PORT</code> and <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal">CHAIN_ID</code> can be found at <a href="/docs/next/tutorials/get-started/setup-cli" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-semibold leading-7">network variables page</a>.
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
            <a href="/docs/next/tools-and-ecosystem/faucet">fund</a> it before using it.
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
          <code className="text-main-title-light dark:text-main-title-dark text-sm font-normal text-sm">
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
