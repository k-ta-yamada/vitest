---
title: Getting Started | Guide
---

# はじめる {#getting-started}

## 概要 {#overview}

Vitest は、Vite によって実現された高速なユニットテストフレームワークです。

このプロジェクトの背後にある理論的根拠については、[Why Vitest](./why) セクションで詳しく知ることができます。

## Vitest オンラインを試す {#trying-vitest-online}

[StackBlitz](https://vitest.new) では、Vitest をオンラインで試すことができます。これはブラウザ上で直接 Vitest を実行するもので、ローカルでの設定とほぼ同じですが、マシンに何もインストールする必要がありません。

## Project に Vitest を追加する {#adding-vitest-to-your-project}

<CourseLink href="https://vueschool.io/lessons/how-to-install-vitest?friend=vueuse">Learn how to install by Video</CourseLink>

With npm
```bash
npm install -D vitest
```
or with yarn
```bash
yarn add -D vitest
```
or with pnpm
```bash
pnpm add -D vitest
```

:::tip
Vitest には Vite >=v3.0.0 と Node >=v14 が必要です
:::

上記の方法のいずれかを使用して、`package.json` に `vitest` のコピーをインストールすることをお勧めします。しかし、`vitest` を直接実行したい場合は、`npx vitest` を使用することができます（`npx` コマンドは npm と Node.js に付属しています）。

`npx` コマンドは、ローカルの `node_modules/.bin` から、コマンドを実行するために必要なパッケージをインストールして、そのコマンドを実行します。デフォルトでは，$PATH やローカルプロジェクトのバイナリにコマンドが存在するかどうかを確認し，それを実行します．コマンドが見つからない場合は、実行する前にインストールされます。

## Vitest の構成 {#configuring-vitest}

Vitest の大きな利点の 1 つは、Vite との統一的な設定です。もし存在すれば、`vitest` はあなたのルート `vite.config.ts` を読み込んで、あなたの Vite アプリとしてのプラグインやセットアップと一致させるでしょう。例えば、Vite の [resolve.alias](https://ja.vitejs.dev/config/shared-options.html#resolve-alias) と [プラグイン](https://ja.vitejs.dev/guide/using-plugins.html) の構成は、そのまま動作します。テストは別の構成にしたい場合は、そうすることができます:

- 優先順位の高い `vitest.config.ts` を作成します
- CLI に `--config` オプションを渡す（例: `vitest --config ./path/to/vitest.config.ts` ）
- `process.env.VITEST` または `defineConfig` の `mode` プロパティ（オーバーライドしない場合は `test` に設定されます）を使用して、`vite.config.ts` で異なる設定を条件付きで適用します。

`vitest` 自体の設定を行うには、Vite の config に `test` プロパティを追加します。また、`vite` 自身から `defineConfig` をインポートする場合は、config ファイルの先頭に [triple slash command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) で Vitest の型への参照を追加する必要があります。

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ...
  },
})
```

コンフィグオプションの一覧は [Config Reference](../config/) でご確認ください

## コマンドラインインターフェース {#command-line-interface}

Vitest がインストールされているプロジェクトでは、npm スクリプトで `vitest` バイナリを使用するか、`npx vitest` で直接実行することができます。以下は、scaffold された Vitest プロジェクトにおけるデフォルトの npm スクリプトです:

<!-- prettier-ignore -->
```json
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

ファイルの変更を監視せずにテストを一度だけ実行するには、`vitest run` を使用します。
さらに、`--port` や `--https` のような CLI オプションを指定することができます。CLI オプションの完全なリストについては、プロジェクトで `npx vitest --help` を実行してください。

[Command Line Interface](./cli.md) について詳しく見る

## IDE インテグレーション {#ide-integrations}

また、Vitest を使ったテスト体験をより充実させるために、Visual Studio Code の公式エクステンションを提供しました。

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)

[IDE Integrations](./ide.md) について詳しく見る

## 事例集 {#examples}

[@@include](../../../../examples/README.md)

## Vitest を使用したプロジェクト {#projects-using-vitest}

- [unocss](https://github.com/antfu/unocss)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [vitesse](https://github.com/antfu/vitesse)
- [vitesse-lite](https://github.com/antfu/vitesse-lite)
- [fluent-vue](https://github.com/demivan/fluent-vue)
- [vueuse](https://github.com/vueuse/vueuse)
- [milkdown](https://github.com/Saul-Mirone/milkdown)
- [gridjs-svelte](https://github.com/iamyuu/gridjs-svelte)
- [spring-easing](https://github.com/okikio/spring-easing)
- [bytemd](https://github.com/bytedance/bytemd)
- [faker](https://github.com/faker-js/faker)
- [million](https://github.com/aidenybai/million)
- [Vitamin](https://github.com/wtchnm/Vitamin)
- [neodrag](https://github.com/PuruVJ/neodrag)
- [svelte-multiselect](https://github.com/janosh/svelte-multiselect)
- [iconify](https://github.com/iconify/iconify)
- [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next)
- [cz-git](https://github.com/Zhengqbbb/cz-git)

<!--
For contributors:
We no longer accept new entries to this list a this moment.
Thanks for choosing Vitest!
-->

## 未リリースのコミットを利用する {#using-unreleased-commits}

最新の機能をテストするために新しいリリースを待てない場合は、[vitest repo](https://github.com/vitest-dev/vitest) をローカルマシンにクローンし、自分でビルドしてリンクする必要があります（pnpm が必要です）:

```bash
git clone https://github.com/vitest-dev/vitest.git
cd vitest
pnpm install
cd packages/vitest
pnpm run build
pnpm link --global # you can use your preferred package manager for this step
```

次に、Vitest を使用しているプロジェクトに行き、`pnpm link --global vitest`（または `vitest` をグローバルにリンクするために使用したパッケージマネージャ）を実行してください。

## コミュニティ {#community}

質問やヘルプが必要な場合は、[Discord](https://chat.vitest.dev) や [GitHub Discussions](https://github.com/vitest-dev/vitest/discussions) のコミュニティに連絡を取ってください。

[cac's dot notation]: https://github.com/cacjs/cac#dot-nested-options
