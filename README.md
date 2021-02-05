# react-quill-editor

✨基于`quill.js`封装的**React Quill Rich Editor**, 优化了原有组件的用户体验，扩展了表情、分割线、音频、投票等控件
### Install

```bash
npm i rql-editor -S
```

### Usage

```javascript
import RqlEditor from 'rql-editor'

class Example extends React.Component {
    render() {
        return (
            <RqlEditor
                onChange={this.handleEditorChange}
                getEditor={(editor: any) => {
                    this.editor = editor
                }}
                value={''}
                toolbarId="outer-toolbar"
                toolbars={[
                    ['undo', 'redo'],
                    ['clean', 'brush'],
                    ['fontsize', 'bold', 'italic', 'underline', 'strike', 'header', 'color', 'background'],
                    [
                        'align',
                        'indent',
                        'indentbothend',
                        'frontdistance',
                        'enddistance',
                        'lineheight',
                        'letterspacing',
                        'sequence'
                    ],
                    ['table', 'blockquote', 'line', 'codeblock', 'emotion'],
                    ['audio', 'video', 'image', 'vote', 'link']
                ]}
                placeholder="Compose an epic..."
            />
        )
    }

    ...
}

```

### Configuration

|配置项|类型|说明|是否必须|
|:-|:-:|:-|:-|
|value|string|初始化富文本|false|
|toolbars|array|工具栏|false|
|toolbarId|string|工具栏Dom Id|false|
|onChange|function|编辑器内容变更回调|false|
|getEditor|function|获得编辑器对象|false|
|placeholder|string|placeholder|false|
