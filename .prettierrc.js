// npm install --save-dev @trivago/prettier-plugin-sort-imports

module.exports = {
  importOrder: [
    "^@utils/(.*)$",
    "^@apis/(.*)$",
    "^@hooks/(.*)$",
    "^@recoils/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@pages/(.*)$",
    "^@base/(.*)$",
    "^@common/(.*)$",
    "^@components/(.*)$",
    "^@styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "auto",
  vueIndentScriptAndStyle: true,
  bracketSameLine: true,
};
