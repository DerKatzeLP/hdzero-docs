import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
    extends: DefaultTheme,
    // Layout: () => {
    //     // 其他配置
    // },
    enhanceApp({ app }) {
        app.use(NolebaseGitChangelogPlugin)
    }
}
