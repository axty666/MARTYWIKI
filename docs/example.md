## 本WIKI现已支持

### 禁用指定页面的编辑链接

```yaml
---
editLink: false
---
```

### 页面插入相关信息

[欲知更多](https://vuepress-community.netlify.app/zh/plugins/git-log/#api) (不可直接在文档中使用)

```md
- 本页面的作者：{{ $page.git.author }}
- 本页面的创建日期: {{ $page.git.created }}
- 本页面的更新日期: {{ $page.git.updated }}
- 本页面的更新日志: {{ $page.git.commits }}
- 本页面的贡献者：{{ $page.git.contributors.join(', ') }}
- 本页面的最后一次提交：{{ $page.git.commits[0].fullHash }}
```

### 导航栏/侧边栏相关

```yaml
---
navbar: false # 禁用导航栏
sidebar: false # 禁用侧边栏
sidebarDepth: 2 # 同时提取 h2 和 h3 标题(值为0-2,0为禁用)
---
```

### 特定文章的自定义布局

[参见vurpress中文文档有关内容](https://www.vuepress.cn/theme/default-theme-config.html#%E7%89%B9%E5%AE%9A%E9%A1%B5%E9%9D%A2%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80)

### 复制时添加版权信息

在开头插入此段即可（如果已有开头(结尾)的---请插入到---那部分内）

```yaml
---
 copyright:
    copyright: false # 当前页面无论复制多少时都不会添加版权信息
    minLength: 40 # 超过40个字时(此项优先于全局配置)
    authorName: MARYT # 作者姓名
  # authorName: { # 作者姓名,可以这样使用
  # "en-US": "MARYT",
  # "zh-CN": "MARYT"
  # },
    ###
    noCopy: false # 允许复制
    noSelect: false # 允许选中
---

```

### 提示/注意/警告

::: tip 

提示

 ::: 

```
::: tip 
提示
::: 
```

::: warning

注意

:::

```
::: warning
注意
::: 
```

 ::: danger

警告

:::

```
::: danger
警告
:::
```

### emoji

示例：:tada: :100: :bamboo: :gift_heart: :fire:

更多emoji请见https://www.webfx.com/tools/emoji-cheat-sheet/
