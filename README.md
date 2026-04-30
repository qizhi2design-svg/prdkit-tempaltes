# prdkit-templates

用于存放产品需求与原型说明模板。

## 文件

- `prd.md`：PRD 模板
- `prototype/`：通用网页原型模板
- `prototype-mobile/`：移动端原型模板
- `prototype-admin/`：PC 后台原型模板
- `templates.json`：模板索引，供后续 CLI 识别可用模板

## 使用方式

复制对应模板后按项目实际情况填写，保留结构，删除不适用的提示文字即可。

## 给 CLI 的约定

`templates.json` 用于声明当前仓库内有哪些可用模板。

建议 CLI 至少读取这些字段：

- `id`：模板唯一标识，用于命令行选择
- `name`：展示名称
- `description`：模板说明
- `file`：模板文件名
- `output_suggestion`：默认输出文件名建议
- `tags`：可选标签，用于搜索或分类
