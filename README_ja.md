# My-Components

[English](/README.md)

## 概要

私的に作ったコンポーネントをまとめたリポジトリ。\
使用するためには`shadcn/ui`のコンポーネントをあらかじめ追加しておく必要がある。\
ちなみに、まだ工事中なので、コンポーネントはほとんどない。

## スクショ

![screenshot](/docs/screenshot.png)

## ここみてね

<https://components.caru.live/>

## 自分のコンポーネントを追加する方法

1. コンポーネントを`components/collection`に追加する
2. `app/page.tsx`に`Showcase`の子要素として追加する

こんな感じ

```tsx
<Showcase title='Theme Toggle' code={getSnippet('toggletheme')}>
  <ToggleTheme />
</Showcase>
```

3. `npm run dev`でローカルサーバーを立ち上げる
4. `npm run extract`でコンポーネントのコードを抽出する
5. `Showcase`の`Code`ボタンを押してコンポーネントのコードが正しく表示されるか確認する

## クレジット

- [shadcn/ui](https://github.com/shadcn-ui/ui)

## ライセンス

[MIT](/LICENSE)
