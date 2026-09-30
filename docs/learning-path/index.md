---
title: 技术学习路线
description: 前端、Node.js、架构、IoT 与 AI 的长期学习路线。
---

# 技术学习路线

> v1.0 · 前端 → Node.js 全栈 / IoT → 系统架构与性能 → AI Application

本页面是个人知识库的长期总索引。章节编号尽量永久稳定；后续学习以编号为入口，逐节生成课件、实验、练习与验收题。

## 0. 使用方法与学习协议

建议工作日每次学习 30–60 分钟。不追求“看完”，追求能解释、能实验、能排障、能设计。每个章节完成后，把自己的理解整理进个人知识库，而不是直接复制课件。

| 掌握等级 | 定义 | 验收标准 |
| --- | --- | --- |
| 了解 | 知道概念、用途和边界 | 能用自己的话解释；知道什么时候需要继续查资料 |
| 熟练 | 能在真实项目中正确使用 | 能独立实现、调试，并解释常见坑 |
| 精通 | 能从底层原理定位复杂问题并做设计取舍 | 能做实验验证、性能/故障分析、方案设计，并清晰讲给别人 |

### 统一的单节学习流程

1. **为什么学**：明确它解决什么工程问题，以及与现有项目的关系。
2. **原理**：建立正确心智模型，避免只记 API 和结论。
3. **实验**：用最小代码、命令或抓包亲自观察现象。
4. **工程场景**：放入 Node、WebSocket、MQTT、Home Assistant、Docker 等真实场景。
5. **排障与表达**：分析常见故障，并能以高级工程师视角解释。
6. **验收**：概念题 + 代码/实验题 + Debug/设计题；通过后标记完成。

### 推荐的单节课件格式

学习目标 → 前置检查 → 核心原理 → 图解 → 最小实验 → 工程案例 → 常见坑 → 面试表达 → 练习 → 验收 → 个人笔记模板。

可以直接使用固定指令：`按学习总纲开始 NODE-03。先做前置检查，再正式上课。`

## 1. 总体学习顺序

推荐主线不是严格串行。JS、NODE、NET 是第一阶段核心；DB、BACKEND、OS、DSA 构成服务端基本功；ARCH、PERF、DIST、DEVOPS 构成高级工程能力；IOT 是差异化专项；PY、AI 在基本盘稳定后进入。

```text
JS → NODE → NET → DB + BACKEND → OS + DSA → ARCH + PERF
→ DIST + DEVOPS → SEC → IOT（并行强化）→ PY → AI
```

工作中正在遇到的问题可以随时提前学习对应章节。总纲是地图，不是必须严格按顺序完成的教材。

## 2. 模块与章节总纲

以下编号是长期稳定的学习入口。每个模块后续都可以继续拆成 `01-`、`02-` 等 Markdown 文件，自动出现在左侧 Sidebar 中。

### JS · JavaScript / TypeScript 基础

目标：精通｜12 章

| 编号 | 学习主题 |
| --- | --- |
| JS-01 | JavaScript 执行模型：执行上下文、调用栈、作用域 |
| JS-02 | Event Loop：任务、微任务与浏览器事件循环 |
| JS-03 | Promise 与 async/await：状态、链式调用、异常传播 |
| JS-04 | 闭包、作用域链与内存生命周期 |
| JS-05 | this、原型、原型链与 class |
| JS-06 | 对象模型：引用、浅拷贝/深拷贝、不可变思想 |
| JS-07 | Map / Set / WeakMap / WeakSet 与使用边界 |
| JS-08 | Iterator / Generator / Proxy / Reflect |
| JS-09 | ESM 与 CommonJS：加载、缓存、循环依赖 |
| JS-10 | TypeScript 类型系统：结构类型、收窄、泛型 |
| JS-11 | TypeScript 高级类型：keyof / infer / conditional / mapped |
| JS-12 | 声明文件、模块解析与 TS 编译流程 |

### NODE · Node.js Runtime 与服务端基础

目标：精通｜12 章

| 编号 | 学习主题 |
| --- | --- |
| NODE-01 | Node.js 架构：JavaScript / V8 / Node / libuv / OS |
| NODE-02 | V8 基础：Heap、Stack、对象生命周期与 GC |
| NODE-03 | Node Event Loop：阶段、nextTick、setImmediate、Timer |
| NODE-04 | libuv 与 Thread Pool：哪些任务真正并行 |
| NODE-05 | EventEmitter：事件模型、监听器生命周期与泄漏 |
| NODE-06 | Buffer 与二进制数据 |
| NODE-07 | Stream 与 Backpressure |
| NODE-08 | 文件系统、File Descriptor 与异步 I/O |
| NODE-09 | child_process / worker_threads / cluster 的选择 |
| NODE-10 | 错误、异常、Unhandled Rejection 与进程边界 |
| NODE-11 | AbortController、取消、超时与资源释放 |
| NODE-12 | Graceful Shutdown 与服务生命周期 |

### NET · 计算机网络

目标：精通｜16 章

| 编号 | 学习主题 |
| --- | --- |
| NET-01 | TCP/IP 模型、OSI、IP、Port 与 Socket |
| NET-02 | TCP 三次握手 |
| NET-03 | TCP 四次挥手、TIME_WAIT 与 CLOSE_WAIT |
| NET-04 | TCP 可靠传输：序号、ACK、重传、滑动窗口 |
| NET-05 | 拥塞控制与网络性能基本模型 |
| NET-06 | TCP 粘包/拆包与应用层协议 framing |
| NET-07 | UDP：特点、适用场景与丢包 |
| NET-08 | DNS：解析链路、缓存与常见故障 |
| NET-09 | HTTP/1.1：请求响应、Keep-Alive、缓存 |
| NET-10 | HTTP/2：多路复用、流与头部压缩 |
| NET-11 | HTTP/3 / QUIC 基础 |
| NET-12 | HTTPS / TLS：证书、握手与加密基础 |
| NET-13 | Cookie / Session / CORS / CSP |
| NET-14 | WebSocket：握手、帧、心跳与断线重连 |
| NET-15 | SSE：模型、重连与 WebSocket 对比 |
| NET-16 | Reverse Proxy / Gateway / CDN 基础 |

### OS · 操作系统与 Linux

目标：熟练｜10 章

`OS-01` 进程、线程、协程与上下文切换；`OS-02` 用户态、内核态与系统调用；`OS-03` 虚拟内存、页、Stack 与 Heap；`OS-04` 文件系统与 File Descriptor；`OS-05` Socket、Pipe、stdin/stdout/stderr；`OS-06` Signal 与进程生命周期；`OS-07` CPU 调度、Load Average 与资源观测；`OS-08` 内存、OOM 与 Swap；`OS-09` Linux 权限、用户、进程与服务管理；`OS-10` Linux 网络/进程排障工具。

### DSA · 数据结构与算法

目标：熟练｜10 章

`DSA-01` 复杂度与 Big-O；`DSA-02` Array / Linked List；`DSA-03` Stack / Queue / Deque；`DSA-04` Hash Table / Map / Set；`DSA-05` Tree / BST；`DSA-06` Heap / Priority Queue；`DSA-07` Graph 与 BFS / DFS；`DSA-08` 排序与二分查找；`DSA-09` LRU 与缓存淘汰；`DSA-10` 工程中的算法复杂度分析与性能退化。

### DB · 数据库与缓存

目标：熟练 → 精通｜15 章

`DB-01` SQL 基础；`DB-02` JOIN / GROUP BY / Subquery / CTE；`DB-03` Window Function；`DB-04` Schema 与范式；`DB-05` B+ Tree；`DB-06` 联合索引、覆盖索引与索引失效；`DB-07` EXPLAIN 与慢查询；`DB-08` Transaction 与 ACID；`DB-09` Isolation Level；`DB-10` MVCC；`DB-11` Lock 与 Deadlock；`DB-12` Connection Pool；`DB-13` Redis 数据结构；`DB-14` 缓存一致性；`DB-15` Redis Pub/Sub、TTL 与分布式锁。

### BACKEND · 后端工程能力

目标：精通｜14 章

`BACKEND-01` REST 与 API Design；`BACKEND-02` 参数校验与错误模型；`BACKEND-03` Session / Token / JWT；`BACKEND-04` RBAC；`BACKEND-05` 结构化日志与关联 ID；`BACKEND-06` Timeout / Retry / Backoff；`BACKEND-07` Idempotency；`BACKEND-08` Rate Limit；`BACKEND-09` Circuit Breaker / Bulkhead / Fallback；`BACKEND-10` Pagination；`BACKEND-11` 任务队列；`BACKEND-12` 配置与 Secret Management；`BACKEND-13` 健康检查与 Graceful Shutdown；`BACKEND-14` API、集成测试与契约思维。

### ARCH · 软件设计与架构

目标：熟练 → 精通｜13 章

`ARCH-01` 高内聚低耦合；`ARCH-02` SOLID；`ARCH-03` Dependency Injection / Inversion；`ARCH-04` Adapter / Strategy / Factory / Observer；`ARCH-05` State Machine；`ARCH-06` Repository / Service / Facade；`ARCH-07` Clean Architecture；`ARCH-08` Hexagonal Architecture / Ports & Adapters；`ARCH-09` UseCase、Port、Adapter 与 Bootstrap 边界；`ARCH-10` DDD 基础；`ARCH-11` Event Driven Architecture；`ARCH-12` CQRS / Event Sourcing；`ARCH-13` 架构权衡。

### DIST · 并发与分布式系统

目标：熟练｜11 章

`DIST-01` Race Condition / Atomicity；`DIST-02` Mutex / Semaphore / Deadlock；`DIST-03` Producer-Consumer 与 Backpressure；`DIST-04` 消息队列；`DIST-05` CAP；`DIST-06` 强一致性与最终一致性；`DIST-07` 消息投递语义；`DIST-08` 重复、乱序、丢失与幂等；`DIST-09` 分布式锁与 Lease；`DIST-10` Saga；`DIST-11` 服务发现、故障检测与重试风暴。

### DEVOPS · Docker / DevOps / 交付

目标：熟练｜11 章

`DEVOPS-01` Image / Container / Registry；`DEVOPS-02` Dockerfile 与 Layer Cache；`DEVOPS-03` Multi-stage Build；`DEVOPS-04` Volume / Network / Port；`DEVOPS-05` Docker Compose；`DEVOPS-06` Multi-arch Build；`DEVOPS-07` CI/CD；`DEVOPS-08` Nginx / Reverse Proxy；`DEVOPS-09` 发布与回滚；`DEVOPS-10` Kubernetes 基础；`DEVOPS-11` ConfigMap / Secret / Probe。

### PERF · 性能工程与可观测性

目标：熟练 → 精通｜12 章

`PERF-01` Latency / Throughput / QPS；`PERF-02` P50 / P95 / P99；`PERF-03` CPU Profiling 与 Flame Graph；`PERF-04` Heap Snapshot；`PERF-05` GC 与内存泄漏；`PERF-06` Event Loop Lag；`PERF-07` Load / Stress / Soak Test；`PERF-08` Benchmark；`PERF-09` Metrics / Logs / Traces；`PERF-10` OpenTelemetry；`PERF-11` Prometheus / Grafana；`PERF-12` 线上故障排查方法论。

### SEC · 应用安全

目标：熟练基础｜10 章

`SEC-01` 威胁建模与最小权限；`SEC-02` XSS；`SEC-03` CSRF；`SEC-04` SQL Injection；`SEC-05` SSRF；`SEC-06` HTTPS / TLS 安全边界；`SEC-07` Password Hash / Salt；`SEC-08` JWT 安全；`SEC-09` OAuth 2.0 / OIDC；`SEC-10` Secret、API Key 与依赖安全。

### IOT · IoT / 智能家居专项

目标：熟练 → 精通｜14 章

`IOT-01` IoT 系统架构；`IOT-02` MQTT Topic / Broker / Client；`IOT-03` MQTT QoS；`IOT-04` Retain / Last Will / Keep Alive；`IOT-05` MQTT 重连与离线；`IOT-06` mDNS / DNS-SD；`IOT-07` Desired / Reported State；`IOT-08` 设备能力模型与协议转换；`IOT-09` Zigbee；`IOT-10` Matter；`IOT-11` Home Assistant 与 MQTT Discovery；`IOT-12` 高频上报与背压；`IOT-13` 在线状态、心跳与故障恢复；`IOT-14` IoT + AI Tool Calling。

### PY · Python：AI 与工程辅助语言

目标：熟练使用｜10 章

`PY-01` Python 语法与数据模型；`PY-02` 函数、类、模块与包；`PY-03` 类型提示与 dataclass；`PY-04` 异常与资源管理；`PY-05` 迭代器 / Generator；`PY-06` asyncio；`PY-07` 虚拟环境与依赖管理；`PY-08` HTTP / JSON / 文件处理；`PY-09` FastAPI；`PY-10` NumPy / Pandas 基础。

### AI · AI Application Engineering

目标：熟练｜16 章

`AI-01` LLM 基础；`AI-02` Transformer / Attention；`AI-03` LLM API 与消息模型；`AI-04` Prompt Engineering；`AI-05` Structured Output / JSON Schema；`AI-06` Function / Tool Calling；`AI-07` Embedding；`AI-08` Vector Database；`AI-09` RAG；`AI-10` Chunking / Retrieval / Reranking；`AI-11` Agent 基础；`AI-12` Agent Workflow；`AI-13` LLM Evaluation；`AI-14` Hallucination / Grounding；`AI-15` 成本、Latency、Caching 与生产化；`AI-16` AI + IoT 综合实践。

## 3. 阶段性项目与验收

| 阶段 | 覆盖模块 | 毕业标准 |
| --- | --- | --- |
| 阶段 A：Runtime 基本功 | JS + NODE + NET | 能解释并实验 Event Loop、Promise、TCP/HTTP/WebSocket；独立定位 Timer、Listener、异步任务造成的问题。 |
| 阶段 B：后端基本盘 | DB + BACKEND + OS + DSA | 独立设计一个带 PostgreSQL、认证、日志、超时重试、幂等和优雅退出的 Node 服务。 |
| 阶段 C：高级工程能力 | ARCH + PERF + DIST + DEVOPS | 能对真实服务做架构拆分、压测、CPU/Heap 分析、容器化发布，并用证据解释性能问题。 |
| 阶段 D：IoT 专项 | IOT | 能设计 MQTT/mDNS/HA/Matter 的数据流、状态同步、重连、去重和高频上报策略。 |
| 阶段 E：AI 应用 | PY + AI | 不用框架先完成 LLM API → Structured Output → Tool Calling → RAG → Agent，并连接真实 IoT 能力。 |

## 4. 个人知识库单节笔记模板

```md
# {章节编号} {章节名称}

## 1. 我为什么需要它
- 真实问题：
- 与当前项目的关系：

## 2. 我的心智模型
用自己的话解释，不复制定义。

## 3. 核心知识
-

## 4. 实验
### 实验目标
### 代码 / 命令
### 观察结果
### 为什么会这样

## 5. 工程场景
- 正确做法：
- 常见错误：
- 排障步骤：

## 6. 我曾经遇到的真实问题
记录项目中的具体案例。

## 7. 面试 / 对外表达
用 1 分钟和 5 分钟两个版本解释。

## 8. 尚未理解的问题
-

## 9. 验收结果
- [ ] 能解释
- [ ] 能实验
- [ ] 能排障
- [ ] 能做设计取舍
- [ ] 能讲给别人听
```

## 5. 与 ChatGPT 配合的固定指令

- 开始某节：`按我的技术学习总纲，开始 NODE-03。先做前置检查，再正式上课。`
- 继续某节：`继续 NODE-03，上次已经学到 Event Loop phases，从实验部分继续。`
- 只做实验：`针对 NET-14 给我设计 3 个从简单到真实工程的实验，我自己执行。`
- 验收：`对 NODE-03 做结课验收。不要先给答案，一题一题问我。`
- 复习：`随机抽查 JS-01～JS-06，重点找我的知识漏洞。`
- 工程迁移：`把 PERF-05 和我当前 Node 服务的内存上涨问题结合起来，带我做一次真实排查。`
- 生成笔记：`根据我们刚才的学习过程，整理一份适合放入个人知识库的 NODE-03 笔记；区分事实、我的理解和待验证问题。`

## 6. 学习原则

- 不要按章节数量制造进度感。一个知识点能解决真实问题，比看完十节课更重要。
- 优先学习当前工作中正在发生的问题；总纲是地图，不是必须按顺序完成的教材。
- 先理解原理，再学框架。尤其 AI、架构和 DevOps，不用工具名代替基础概念。
- 每个“精通”章节至少做一次可复现实验或真实故障分析。
- 每隔 4–6 周做一次随机复习和综合项目，主动暴露遗忘。
- 知识库只保留自己能理解和复述的内容；无法解释的内容标记为待学习，而不是直接收藏。
