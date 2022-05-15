# Formily 示例

ui-lib 内代码来自 [@formily/element-plus](https://github.com/formilyjs/element-plus/tree/main/packages/components)

## 本地调试过程中发现的问题

ui-lib 被 link 方式引入到 usage 使用时， usage dev 环境下正常运行，但是 build 之后，会报错。

解决方式：使用 workspace