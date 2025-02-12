# Interface: DocxOptions

## Hierarchy

- `Pick`<`IPropertiesOptions`, ``"title"`` \| ``"subject"`` \| ``"creator"`` \| ``"keywords"`` \| ``"description"`` \| ``"lastModifiedBy"`` \| ``"revision"`` \| ``"background"``\>

  ↳ **`DocxOptions`**

## Table of contents

### Properties

- [indentWidth](DocxOptions.md#indentwidth)
- [output](DocxOptions.md#output)
- [imageResolver](DocxOptions.md#imageresolver)
- [styles](DocxOptions.md#styles)
- [fonts](DocxOptions.md#fonts)
- [pageSetup](DocxOptions.md#pagesetup)
- [title](DocxOptions.md#title)
- [subject](DocxOptions.md#subject)
- [creator](DocxOptions.md#creator)
- [keywords](DocxOptions.md#keywords)
- [description](DocxOptions.md#description)
- [lastModifiedBy](DocxOptions.md#lastmodifiedby)
- [revision](DocxOptions.md#revision)
- [background](DocxOptions.md#background)

## Properties

### indentWidth

• `Optional` **indentWidth**: `number`

#### Defined in

[src/transformer.ts:150](https://github.com/zetlen/remark-docx/blob/ebec568/src/transformer.ts#L150)

___

### output

• `Optional` **output**: ``"buffer"`` \| ``"blob"``

Set output type of `VFile.result`. `buffer` is `Promise<Buffer>`. `blob` is `Promise<Blob>`.

#### Defined in

[src/transformer.ts:154](https://github.com/zetlen/remark-docx/blob/ebec568/src/transformer.ts#L154)

___

### imageResolver

• `Optional` **imageResolver**: `ImageResolver`

**You must set** if your markdown includes images. See example for [browser](https://github.com/inokawa/remark-docx/blob/main/stories/playground.stories.tsx) and [Node.js](https://github.com/inokawa/remark-docx/blob/main/src/index.spec.ts).

#### Defined in

[src/transformer.ts:158](https://github.com/zetlen/remark-docx/blob/ebec568/src/transformer.ts#L158)

___

### styles

• `Optional` **styles**: `IStylesOptions` & { `listItem`: `IBaseParagraphStyleOptions` ; `listItemOrdered`: `IBaseParagraphStyleOptions` ; `listItemCheckbox`: `IBaseParagraphStyleOptions`  }

Additional styles for markdown elements that don't map on to docx Paragraphs, such as lists

#### Defined in

[src/transformer.ts:162](https://github.com/zetlen/remark-docx/blob/ebec568/src/transformer.ts#L162)

___

### fonts

• `Optional` **fonts**: readonly `FontOptions`[]

Additional fonts to embed.

#### Defined in

[src/transformer.ts:166](https://github.com/zetlen/remark-docx/blob/ebec568/src/transformer.ts#L166)

___

### pageSetup

• `Optional` **pageSetup**: `Object`

Margins, headers, footers, borders.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `size?` | `IPageSizeAttributes` |
| `margin?` | `IPageMarginAttributes` |
| `pageNumbers?` | `IPageNumberTypeAttributes` |
| `borders?` | `IPageBordersOptions` |
| `textDirection?` | ``"lrTb"`` \| ``"tbRl"`` |

#### Defined in

[src/transformer.ts:170](https://github.com/zetlen/remark-docx/blob/ebec568/src/transformer.ts#L170)

___

### title

• `Optional` `Readonly` **title**: `string`

#### Inherited from

Pick.title

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:13

___

### subject

• `Optional` `Readonly` **subject**: `string`

#### Inherited from

Pick.subject

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:14

___

### creator

• `Optional` `Readonly` **creator**: `string`

#### Inherited from

Pick.creator

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:15

___

### keywords

• `Optional` `Readonly` **keywords**: `string`

#### Inherited from

Pick.keywords

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:16

___

### description

• `Optional` `Readonly` **description**: `string`

#### Inherited from

Pick.description

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:17

___

### lastModifiedBy

• `Optional` `Readonly` **lastModifiedBy**: `string`

#### Inherited from

Pick.lastModifiedBy

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:18

___

### revision

• `Optional` `Readonly` **revision**: `number`

#### Inherited from

Pick.revision

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:19

___

### background

• `Optional` `Readonly` **background**: `IDocumentBackgroundOptions`

#### Inherited from

Pick.background

#### Defined in

node_modules/docx/build/file/core-properties/properties.d.ts:29
