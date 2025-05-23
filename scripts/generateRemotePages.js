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
    var sourcesData, categories, _a, _b, _c, _i, categoryName, pages, _d, pages_1, page, pageName, source, pageDir, pagePath, pageComponentPath, pageContent, pageContentResponse, err_1, pageTSXContent, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 10, , 11]);
                sourcesData = fs.readFileSync('./sources.json', 'utf-8');
                categories = JSON.parse(sourcesData);
                _a = categories;
                _b = [];
                for (_c in _a)
                    _b.push(_c);
                _i = 0;
                _e.label = 1;
            case 1:
                if (!(_i < _b.length)) return [3 /*break*/, 9];
                _c = _b[_i];
                if (!(_c in _a)) return [3 /*break*/, 8];
                categoryName = _c;
                pages = categories[categoryName];
                _d = 0, pages_1 = pages;
                _e.label = 2;
            case 2:
                if (!(_d < pages_1.length)) return [3 /*break*/, 8];
                page = pages_1[_d];
                pageName = page.page, source = page.source;
                pageDir = "./app/docs/next/".concat(categoryName, "/").concat(pageName);
                pagePath = "".concat(pageDir, "/").concat(pageName, ".mdx");
                pageComponentPath = "".concat(pageDir, "/page.tsx");
                pageContent = '';
                if (!source.length) return [3 /*break*/, 6];
                _e.label = 3;
            case 3:
                _e.trys.push([3, 5, , 6]);
                return [4 /*yield*/, axios_1.default.get(source)];
            case 4:
                pageContentResponse = _e.sent();
                pageContent = pageContentResponse.data;
                // Replace <!-- to {/*
                pageContent = pageContent.replace(/<!--/g, '{/*');
                // Replace --> to */}
                pageContent = pageContent.replace(/-->/g, '*/}');
                pageContent = pageContent.replace(/\/{/g, '/{`');
                pageContent = pageContent.replace(/}\//g, '`}/');
                // pageContent = pageContent.replace('}/', '`}/');
                pageContent = pageContent.replace(/} \|/g, '`} |');
                pageContent = pageContent.replace(/<=/g, '{\<\=}');
                pageContent = pageContent.replace('<this-command>', '\<this-command\>');
                return [3 /*break*/, 6];
            case 5:
                err_1 = _e.sent();
                console.log('err');
                return [3 /*break*/, 6];
            case 6:
                // Check if the page already exists
                if (fs.existsSync(pagePath) || fs.existsSync(pageComponentPath)) {
                    console.error("Error: Page with name '".concat(pageName, "' already exists in category '").concat(categoryName, "'"));
                    return [3 /*break*/, 7];
                }
                // Create page directory
                fs.mkdirSync(pageDir, { recursive: true });
                // Create MDX file
                fs.writeFileSync(pagePath, pageContent);
                pageTSXContent = "import Component from './".concat(pageName, ".mdx';\n\nconst Page = () => {\n  return (\n    <Component />\n  );\n};\n\nexport default Page;\n        g");
                fs.writeFileSync(pageComponentPath, pageTSXContent);
                console.log("Page '".concat(pageName, "' created successfully in category '").concat(categoryName, "'"));
                _e.label = 7;
            case 7:
                _d++;
                return [3 /*break*/, 2];
            case 8:
                _i++;
                return [3 /*break*/, 1];
            case 9: return [3 /*break*/, 11];
            case 10:
                error_1 = _e.sent();
                console.error('An error occurred:', error_1.message);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); };
generatePages();
