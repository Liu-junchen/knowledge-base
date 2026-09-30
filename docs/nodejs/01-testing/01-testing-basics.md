---
title: 测试基础
tags:
  - Node.js
  - Testing
---

# 测试基础

测试的目标是让代码行为可以被稳定地验证。

| 类型 | 关注点 |
| --- | --- |
| 单元测试 | 单个函数或模块 |
| 集成测试 | 多个模块协作 |

## 一个最小示例

```ts
export function add(a: number, b: number): number {
  return a + b
}
```
