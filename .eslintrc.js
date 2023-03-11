module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  settings: {
    // import 時に js, jsx, ts, tsx の拡張子を読み込めるようにする
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],

    // JSX記法 を .jsx と .tsx で許可
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],

    // TS を使用しているので無効にした
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,

    // React 17 からJSXトランスフォームが変更された影響で以下のルールを無効にした
    // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    // export default 必須にする必要はないため無効にした
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 0,

    // import 時に js, jsx, ts, tsx の拡張子が無しでも読み込めるようにする
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    // https://github.com/import-js/eslint-plugin-import/issues/1558
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // 関数コンポーネントの形式を arrow-function のみ許可した
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],

    // htmlとカスタムコンポーネントのみスプレッド構文を許可した
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': [
      2,
      {
        html: 'ignore',
        custom: 'ignore',
        exceptions: [''],
      },
    ],

    // test と mocks と jest.setup.js は devDependencies からの import を許可した
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/mocks/**',
          'jest.setup.js',
          'src/graphql/generated/index.ts',
        ],
      },
    ],

    // require を使用しないと解決しない時もあるため許可した
    // https://typescript-eslint.io/rules/no-var-requires/
    '@typescript-eslint/no-var-requires': 0,
  },
};
