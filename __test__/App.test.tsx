import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/vitest';

import React from "react";
import App from "../src/App"

// デフォルトではクリーンアップされないため、Eachで実行する
beforeEach(() => {
    cleanup();
    // コンポーネントをレンダリングする
    render(<App />)
});
// userインスタンスのセットアップ
// const user = userEvent.setup();

describe("App.tsx", () => {
    it("現時点では重刺剣が６つ表示される", () => {
        expect(screen.queryAllByRole("article").length).toBe(6)
    })
})

