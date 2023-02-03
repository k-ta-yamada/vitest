---
title: Features | Guide
outline: deep
---

# 特徴 {#features}

<FeaturesList class="!gap-1 text-lg" />

<div h-2 />
<CourseLink href="https://vueschool.io/lessons/your-first-test?friend=vueuse">Learn how to write your first test by Video</CourseLink>

## test、dev、build 間での設定の共有 {#shared-config-between-test-dev-and-build}

Vite のコンフィグ、トランスフォーマー、リゾルバー、プラグイン。テストを実行するには、あなたのアプリと同じ設定を使用します。

[Configuring Vitest](/guide/#configuring-vitest) について詳しく見る。

## Watch モード {#watch-mode}

```bash
$ vitest
```

ソースコードやテストファイルを変更すると、Vitest はモジュールグラフをスマートに検索し、関連するテストのみを再実行します。これは、[Vite の HMRの動作と同じです！](https://twitter.com/antfu7/status/1468233216939245579)

`vitest` は、**開発環境ではデフォルト** で `watch モード`、CI 環境では（`process.env.CI` が提供されると）スマートに `runモード` で起動します。`vitest watch` や `vitest run` で明示的にモードを指定することができます。

## すぐに使える一般的な Web イディオム {#common-web-idioms-out-of-the-box}

すぐに使える ES モジュール / TypeScript / JSX サポート / PostCSS

## スレッド {#threads}

[Tinypool](https://github.com/tinylibs/tinypool) （[Piscina](https://github.com/piscinajs/piscina) の軽量フォーク）による Workers のマルチスレッド化により、テストを同時に実行することができます。Vitest ではスレッドはデフォルトで有効になっており、CLI で `--no-threads` を渡すことで無効化することができます。

また、Vitest は各ファイルの環境を分離し、あるファイルの変異が他のファイルに影響を与えないようにします。CLI に `--no-isolate` を渡すことで分離を無効にすることができます（正確さと実行パフォーマンスを引き換えにします）。

## テストフィルタリング {#test-filtering}

Vitest では、テストにかかる時間を短縮し、開発に集中できるよう、実行するテストを絞り込む方法を多数用意しました。

[Test Filtering](./filtering.md) について詳しく見る。

## テストの同時実行 {#running-tests-concurrently}

連続したテストで `.concurrent` を使用すると、並行してテストが実行されます。

```ts
import { describe, it } from 'vitest'

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('serial test', async () => { /* ... */ })
  it.concurrent('concurrent test 1', async () => { /* ... */ })
  it.concurrent('concurrent test 2', async () => { /* ... */ })
})
```

スイートで `.concurrent` を使用すると、その中のすべてのテストが並列に実行されます。

```ts
import { describe, it } from 'vitest'

// All tests within this suite will be run in parallel
describe.concurrent('suite', () => {
  it('concurrent test 1', async () => { /* ... */ })
  it('concurrent test 2', async () => { /* ... */ })
  it.concurrent('concurrent test 3', async () => { /* ... */ })
})
```

`.skip`、`.only`、`.todo` は、コンカレントスイートやテストでも使用することができます。詳しくは、[API Reference](../api/#test-concurrent) をご覧ください。

## スナップショット {#snapshot}

[Jest 互換](https://jestjs.io/docs/snapshot-testing) のスナップショットをサポート。

```ts
import { expect, it } from 'vitest'

it('renders correctly', () => {
  const result = render()
  expect(result).toMatchSnapshot()
})
```

[Snapshot](./snapshot) について詳しく見る。

## Chai と Jest に互換の `expect` {#chai-and-jest-expect-compatibility}

[Chai](https://www.chaijs.com/) のアサーションに加え、 [Jest `expect`](https://jestjs.io/docs/expect) に対応した API を内蔵しています。

マッチャーを追加するサードパーティーライブラリを使用している場合、`test.globals` を `true` に設定すると互換性が高くなることに注意してください。

## モック {#mocking}

[Tinyspy](https://github.com/tinylibs/tinyspy) は、`vi` オブジェクト上で `jest` 互換の API でモッキングするために組み込まれています。

```ts
import { expect, vi } from 'vitest'

const fn = vi.fn()

fn('hello', 1)

expect(vi.isMockFunction(fn)).toBe(true)
expect(fn.mock.calls[0]).toEqual(['hello', 1])

fn.mockImplementation(arg => arg)

fn('world', 2)

expect(fn.mock.results[1].value).toBe('world')
```

Vitest は DOM とブラウザ API をモックするために [happy-dom](https://github.com/capricorn86/happy-dom) または [jsdom](https://github.com/jsdom/jsdom) の両方をサポートしています。これらは Vitest に付属していませんので、インストールする必要があるかもしれません:

```bash
$ npm i -D happy-dom
# or
$ npm i -D jsdom
```

その後、コンフィグファイルの `environment` オプションを変更してください。

```ts
// vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
  },
})
```

[Mocking](./mocking) について詳しく見る。

## カバレッジ {#coverage}

Vitest は、[`c8`](https://github.com/bcoe/c8) による Native コードカバレッジと [`istanbul`](https://istanbul.js.org/) による instrumented コードカバレッジをサポートしています。

```json
{
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
```

[Coverage](./coverage) について詳しく見る。

## In-source テスト {#in-source-testing}

Vitest は、[Rust のモジュールテスト](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest) と同様に、実装と一緒にソースコード内でテストを実行する方法も提供します。

これにより、テストは実装と同じクロージャを共有し、エクスポートすることなくプライベートな状態に対してテストすることができるようになります。一方で、開発のためのフィードバックループをより身近なものにすることもできます。

```ts
// src/index.ts

// the implementation
export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
```

[In-source testing](./in-source) について詳しく見る。

## ベンチマーキング <sup><code>experimental</code></sup> {#benchmarking-experimental}

Vitest 0.23.0 から、[Tinybench](https://github.com/tinylibs/tinybench) 経由で
[`bench`](../api/#bench) 機能によるベンチマークテストを実行し、性能結果を比較することができます。

```ts
import { bench, describe } from 'vitest'

describe('sort', () => {
  bench('normal', () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => {
      return a - b
    })
  })

  bench('reverse', () => {
    const x = [1, 5, 4, 2, 3]
    x.reverse().sort((a, b) => {
      return a - b
    })
  })
})
```

## Type テスト <sup><code>experimental</code></sup> {#type-testing-experimental}

Vitest 0.25.0 以降では、型の回帰を検出する [テストを書く](./testing-types) ことができます。Vitest には [`expect-type`](https://github.com/mmkal/expect-type) パッケージが付属しており、同様のわかりやすい API を提供します。

```ts
import { assertType, expectTypeOf } from 'vitest'
import { mount } from './mount.js'

test('my types work properly', () => {
  expectTypeOf(mount).toBeFunction()
  expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()

  // @ts-expect-error name is a string
  assertType(mount({ name: 42 }))
})
```
