"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var axios_1 = require("axios");
var generatePages = function () { return __awaiter(void 0, void 0, void 0, function () {
    var args, override, sourcesData, categories, _a, _b, _c, _i, categoryName, pages, _d, pages_1, page, pageName, source, pageDir, pagePath, pageComponentPath, pageContent, pageContentResponse, err_1, mdxExists, tsxExists, pageTSXContent, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                args = process.argv.slice(2);
                override = args.includes('--override') || args.includes('-o');
                _e.label = 1;
            case 1:
                _e.trys.push([1, 13, , 14]);
                sourcesData = fs.readFileSync('./sources.json', 'utf-8');
                categories = JSON.parse(sourcesData);
                _a = categories;
                _b = [];
                for (_c in _a)
                    _b.push(_c);
                _i = 0;
                _e.label = 2;
            case 2:
                if (!(_i < _b.length)) return [3 /*break*/, 12];
                _c = _b[_i];
                if (!(_c in _a)) return [3 /*break*/, 11];
                categoryName = _c;
                pages = categories[categoryName];
                _d = 0, pages_1 = pages;
                _e.label = 3;
            case 3:
                if (!(_d < pages_1.length)) return [3 /*break*/, 11];
                page = pages_1[_d];
                pageName = page.page, source = page.source;
                pageDir = "./app/docs/next/".concat(categoryName, "/").concat(pageName);
                pagePath = "".concat(pageDir, "/").concat(pageName, ".mdx");
                pageComponentPath = "".concat(pageDir, "/page.tsx");
                pageContent = '';
                if (!source.length) return [3 /*break*/, 8];
                _e.label = 4;
            case 4:
                _e.trys.push([4, 6, , 7]);
                return [4 /*yield*/, axios_1.default.get(source)];
            case 5:
                pageContentResponse = _e.sent();
                pageContent = pageContentResponse.data;
                pageContent = pageContent.replace(/<!--/g, '{/*');
                pageContent = pageContent.replace(/-->/g, '*/}');
                pageContent = pageContent.replace(/\/{/g, '/{`');
                pageContent = pageContent.replace(/}\//g, '`}/');
                pageContent = pageContent.replace(/} \|/g, '`} |');
                pageContent = pageContent.replace(/<=/g, '`\<\=`');
                pageContent = pageContent.replace('<this-command>', '\<this-command\>');
                // custom link handle
                pageContent = pageContent.replace(/\[README-update-service\.md\]\(README-update-service\.md\)/g, '<a href="/docs/next/core-dex/api-server/update-service" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">Update service</a>');
                pageContent = pageContent.replace(/\(https:\/\/golang\.org\/dl\/\)/g, '<a href="https://golang.org/dl/" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">https://golang.org/dl/</a>');
                pageContent = pageContent.replace(/\(https:\/\/dev\.mysql\.com\/downloads\/\)/g, '<a href="https://dev.mysql.com/downloads/" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">https://dev.mysql.com/downloads/</a>');
                pageContent = pageContent.replace(/\[Coreum\]\(https:\/\/docs\.coreum\.dev\/docs\/next\/nodes-and-validators\/run-full-node\)/g, '<a href="/docs/next/nodes-and-validators/run-full-node" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">Coreum</a>q');
                pageContent = pageContent.replace(/\[Price And Amount Limits\]\(price-and-amount-limits\.md\)/g, '<a href="/docs/next/modules/coreum-dex/prices-and-limits" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">Price And Amount Limits</a>');
                pageContent = pageContent.replace(/\[event\.proto\]\(\.\.\/\.\.\/\.\.\/proto\/coreum\/dex\/v1\/event\.proto\)/g, '<a href="https://github.com/CoreumFoundation/coreum/blob/master/proto/coreum/dex/v1/event.proto" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">event.proto</a>');
                pageContent = pageContent.replace(/\[\`price_tick\`\]\(https:\/\/www\.investopedia\.com\/terms\/t\/tick\.asp\)/g, '<a href="https://www.investopedia.com/terms/t/tick.asp" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">price_tick</a>');
                pageContent = pageContent.replace(/\[🔗 Price Tick Calculator Spreadsheet\]\(https:\/\/docs\.google\.com\/spreadsheets\/d\/1UL9Ni6VP_fmrXw4lv6snPcNyBTGYFFF085jGheivs9A\)/g, '<a href="https://docs.google.com/spreadsheets/d/1UL9Ni6VP_fmrXw4lv6snPcNyBTGYFFF085jGheivs9A" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">🔗 Price Tick Calculator Spreadsheet</a>');
                pageContent = pageContent.replace(/\[Investopedia: Price Tick\]\(https:\/\/www\.investopedia\.com\/terms\/t\/tick\.asp\)/g, '<a href="https://www.investopedia.com/terms/t/tick.asp" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">Investopedia: Price Tick</a>');
                pageContent = pageContent.replace(/- \[Binance Trading Limits\]\(https:\/\/www\.binance\.us\/trade-limits\)/g, '');
                pageContent = pageContent.replace(/\[link\]\(https:\/\/docs\.docker\.com\/engine\/install\/\)/g, '<a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">link</a>');
                pageContent = pageContent.replace(/\[\!\[coreum-wasm-sdk on crates\.io\]\(https:\/\/img\.shields\.io\/crates\/v\/coreum-wasm-sdk\.svg\)\]\(https:\/\/crates\.io\/crates\/coreum-wasm-sdk\) \[\!\[Docs\]\(https:\/\/docs\.rs\/coreum-wasm-sdk\/badge\.svg\)\]\(https:\/\/docs\.rs\/coreum-wasm-sdk\)/g, "<div className=\"flex items-center gap-2 my-2\">\n    <a href=\"https://crates.io/crates/coreum-wasm-sdk\" target=\"_blank\">\n        <img src=\"https://img.shields.io/crates/v/coreum-wasm-sdk.svg\" alt=\"coreum-wasm-sdk on crates.io\" />\n    </a>\n    <a href=\"https://docs.rs/coreum-wasm-sdk\" target=\"_blank\">\n        <img src=\"https://docs.rs/coreum-wasm-sdk/badge.svg\" alt=\"Docs\" />\n    </a>\n</div>");
                pageContent = pageContent.replace(/\[coreum-rust-protobuf\]\(https:\/\/github\.com\/CoreumFoundation\/coreum-rust-protobuf\)/g, '<a href="https://github.com/CoreumFoundation/coreum-rust-protobuf" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">coreum-rust-protobuf</a>');
                pageContent = pageContent.replace(/\[coreum-test-tube\]\(https:\/\/github\.com\/CoreumFoundation\/test-tube\)/g, '<a href="https://github.com/CoreumFoundation/test-tube" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">coreum-test-tube</a>');
                pageContent = pageContent.replace(/\[Coreum Website\]\(https:\/\/coreum\.com\)/g, '<a href="https://coreum.com" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">Coreum Website</a>');
                pageContent = pageContent.replace(/\[Coreum Documentation\]\(https:\/\/docs\.coreum\.dev\)/g, '[Coreum Documentation](/)');
                pageContent = pageContent.replace(/\[Smart contract examples\]\(https:\/\/github\.com\/CoreumFoundation\/coreum\/tree\/master\/integration-tests\/contracts\)/g, '<a href="https://github.com/CoreumFoundation/coreum/tree/master/integration-tests/contracts" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">Smart contract examples</a>');
                return [3 /*break*/, 7];
            case 6:
                err_1 = _e.sent();
                console.log('err');
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 9];
            case 8: return [3 /*break*/, 10];
            case 9:
                mdxExists = fs.existsSync(pagePath);
                tsxExists = fs.existsSync(pageComponentPath);
                if (!override && (mdxExists || tsxExists)) {
                    console.error("Skipping '".concat(pageName, "' in '").concat(categoryName, "': files already exist. ") +
                        "Use --override to overwrite.");
                    return [3 /*break*/, 10];
                }
                fs.mkdirSync(pageDir, { recursive: true });
                fs.writeFileSync(pagePath, pageContent);
                if (!tsxExists) {
                    pageTSXContent = "import Component from './".concat(pageName, ".mdx';\n\nconst Page = () => {\n  return (\n    <Component />\n  );\n};\n\nexport default Page;");
                    fs.writeFileSync(pageComponentPath, pageTSXContent);
                    console.log("Page '".concat(pageName, "' created successfully in category '").concat(categoryName, "'"));
                }
                _e.label = 10;
            case 10:
                _d++;
                return [3 /*break*/, 3];
            case 11:
                _i++;
                return [3 /*break*/, 2];
            case 12: return [3 /*break*/, 14];
            case 13:
                error_1 = _e.sent();
                console.error('An error occurred:', error_1.message);
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
generatePages();
