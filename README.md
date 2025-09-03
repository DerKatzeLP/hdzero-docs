# Develop
```
npm run docs:dev
```
## i18n
1. go to /docs/.vitepress/config.mjs
2. change the config
  ```javascript
  themeConfig: {
    search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    },
                   // add the search translations here like zh
                }
            },
        }
  }
   ```
then copy
```javascript
 root: {
            label: 'English',
            lang: 'en',
...
},
// copy here and add the document title here, and check the path like zh, it should be /xx/${docs}, like { text: '文档', link: '/zh/what-is-hdzero' }
```

3. add new folder like **zh**, and copy all .md files in it, now you can translate it!
