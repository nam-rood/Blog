# 左侧栏 QQ 联系入口设计

## 背景
主人希望在博客左侧栏增加一个 QQ 联系入口，位置与现有 GitHub、Bilibili 等社交图标同级。点击后直接跳转到提供的 QQ 加好友链接：

`https://qm.qq.com/cgi-bin/qm/qr?k=ajAJx5w61Kt99gc3Uw9xmkWJkW5E-wjd`

## 现状
- 左侧社交图标的数据来源于 `src/config.ts` 中的 `profileConfig.links`
- 左侧个人资料卡片由 `src/components/widgets/profile/Profile.astro` 渲染
- 当前社交链接统一渲染为图标按钮，并通过 `target="_blank"` 新开页面打开

## 目标
- 在左侧个人资料卡片的社交图标区域新增一个 QQ 图标
- QQ 图标与现有社交入口视觉层级一致
- 点击 QQ 图标后，使用新标签页跳转到指定 QQ 链接
- 不新增弹窗、二维码、特殊 hover 文案等额外交互

## 方案对比

### 方案 A（采用）
直接在 `profileConfig.links` 中新增一个 QQ 配置项。

优点：
- 改动最小，复用现有渲染逻辑
- 与当前 GitHub、Bilibili、Discord 的配置方式一致
- 后续维护成本低，新增或调整社交链接只需改配置

缺点：
- QQ 入口与其他链接行为一致，无法单独做特殊强调

### 方案 B
在 `Profile.astro` 中为 QQ 增加特判逻辑，例如单独设置提示文案或样式。

优点：
- 可做更强的视觉提示

缺点：
- 会让现有通用社交按钮渲染逻辑出现分支
- 对当前需求而言复杂度偏高

### 方案 C
扩展链接配置结构，增加 `target`、`tooltip` 等字段后再接入 QQ。

优点：
- 未来扩展性更强

缺点：
- 超出本次需求范围，属于过度设计

## 采用设计
采用方案 A：在 `src/config.ts` 的 `profileConfig.links` 中新增 QQ 项，使用合适的 QQ 图标和主人提供的跳转链接。`Profile.astro` 不做结构改动，继续走现有社交图标渲染逻辑。

## 组件与数据流
1. `src/config.ts` 中新增一条 QQ 链接配置
2. `Profile.astro` 读取 `profileConfig.links`
3. 页面渲染出新的 QQ 图标按钮
4. 用户点击后，浏览器在新标签页打开 QQ 加好友链接

## 视觉与交互
- 保持与现有社交图标相同的按钮尺寸、圆角、间距、hover 和 active 效果
- 图标位置按 `profileConfig.links` 数组顺序展示
- 不新增文案，不调整布局，不改变左侧卡片高度策略之外的其他行为

## 错误处理
- 不添加额外运行时错误处理
- 若链接后续变更，仅通过配置更新 URL
- 若图标集不支持当前选定图标，再回退为项目现有图标库中的可用 QQ 图标

## 测试与验证
- 本地启动页面后，确认左侧社交图标中出现 QQ 图标
- 点击 QQ 图标，确认打开的是主人提供的 `qm.qq.com` 链接
- 检查桌面端与移动端左侧资料卡展示是否正常
- 确认其他社交图标功能不受影响

## 范围边界
本次仅实现左侧社交图标中的 QQ 入口，不包含：
- 微信入口
- 二维码弹层
- 联系方式专属卡片
- tooltip、统计埋点、特殊动画

## 实现文件
- `src/config.ts`
- 如有必要，验证 `src/components/widgets/profile/Profile.astro` 的现有渲染是否可直接兼容，但预期无需修改结构
