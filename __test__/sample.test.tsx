import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/vitest';

import React from "react";
import App from "../src/App"

// デフォルトではクリーンアップされないため、Eachで実行する
beforeEach(() => {
    cleanup();
});
// userインスタンスのセットアップ
const user = userEvent.setup();

describe("tsx sample", () => {
    it("viteとReactの画像が表示されていることを確認する", () => {
        // コンポーネントをレンダリングする
        render(<App />)

        // レンダリングされたDOM上から要素を取得する
        const imgElementArray = screen.getAllByRole("img")

        // アサートする
        // 本来はテストケースごとに1アサーションが良いってt-wadaさんが言ってた
        expect(imgElementArray.length).toBe(2)
        expect(imgElementArray[0].getAttribute("alt")).toBe("Vite logo")
        expect(imgElementArray[1].getAttribute("alt")).toBe("React logo")
    })
    it("use jest-dom sample", () => {
        // コンポーネントをレンダリングする
        render(<App />)

        // 拡張されたマッチャーを使用できる
        expect(screen.getByText("count is 0")).toBeInTheDocument()
    })
    it("use user-event sample", async () /* async関数をテストケース内で使用する */ => {
        // コンポーネントをレンダリングする
        render(<App />)
        // レンダリングされたDOM上から要素を取得する
        const countButtonElement = screen.getByRole("button")

        // userの操作を再現する
        // clickはasync関数なので、awaitする
        await user.click(countButtonElement)

        // 拡張されたマッチャーを使用できる
        expect(screen.getByText("count is 1")).toBeInTheDocument()
    })
})

