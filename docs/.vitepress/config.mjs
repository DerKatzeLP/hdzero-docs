import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [['link', { rel: 'icon', href: '/short-icon.png' }]],
    title: "HDZero",
    description: "HDZero offers industry-leading low latency, giving you more time to react and the best possible chance of hitting that next gap. With its smooth, consistent FPV video feed, you'll experience the same locked-in feeling you get with analog video–but with the clarity of HD.",
    themeConfig: {
        logo: '/short-icon.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/hd-zero' },
            { icon: 'discord', link: 'https://discord.gg/kGsnEDMb2V' },
            { icon: 'facebook', link: 'https://www.facebook.com/groups/hdzero' }
        ],
        lastUpdated: true,
        search: {
            provider: 'algolia',
            options: {
                indexName: 'main',
                appId: '84BDMPSTP7',
                apiKey: '7fcc8ccaff1dcc4fca32dbac8522e6ed',
                locales: {
                    zh: {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '文档搜索',
                                buttonAriaLabel: '文档搜索'
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle:
                                        '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText:
                                        '你可能需要检查你的网络连接'
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    reportMissingResultsText:
                                        '你认为该查询应该有结果？',
                                    reportMissingResultsLinkText: '点击反馈'
                                }
                            }
                        }
                    }
                }
            },
        }
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hd-zero/hd-zero.github.io/edit/main/docs/:path'
                },
                nav: [
                    { text: 'Documents', link: '/what-is-hdzero' }
                ],
                sidebar: [
                    {
                        text: 'Home',
                        items: [
                            { text: 'What is HDZero?', link: '/what-is-hdzero' },
                        ]
                    },
                    {
                        text: 'VTX',
                        items: [
                            {
                                text: 'HDZero VTX Products', link: '/vtx-summary',
                                collapsed: true,
                                items: [
                                    { text: 'Whoop V2 VTX', link: '/whoop-v2' },
                                    { text: 'Race V3 VTX', link: '/race-v3', },
                                    { text: 'Freestyle V2 VTX', link: '/freestyle-v2', },
                                    { text: 'ECO VTX', link: '/eco-bundle', },
                                ]
                            },
                            { text: 'VTX Installation Diagram', link: '/vtx-installation', },
                            { text: 'General Considerations', link: '/vtx-general', },
                            { text: 'VTX LED Pattern', link: '/vtx-led', },
                            { text: 'VTX Firmware Update Guide', link: '/vtx-firmware-update', },
                            { text: 'FAQ', link: '/vtx-faq', },
                            {
                                text: 'Discontinued Video Transmitters', link: '/vtx-dis-summary',
                                collapsed: true,
                                items: [
                                    { text: 'Whoop VTX', link: '/whoop' },
                                    { text: 'Whoop lite VTX', link: '/whoop-lite', },
                                    { text: 'Race V1 VTX', link: '/race-v1', },
                                    { text: 'Race V2 VTX', link: '/race-v2', },
                                    { text: 'Freestyle V1 VTX', link: '/freestyle-v1', },
                                ],
                            },
                            { text: 'Warranty', link: '/vtx-warranty', },
                        ]
                    },
                    {
                        text: 'VRX',
                        items: [
                            {
                                text: 'Box Pro', link: '/box-introduction',
                                collapsed: true,
                                items: [
                                    { text: 'Setup', link: '/box-setup' },
                                    { text: 'Operation', link: '/box-operation' },
                                    { text: 'Firmware Update', link: '/box-firmware-update' },
                                    { text: 'Troubleshooting', link: '/box-troubleshooting' },
                                    { text: 'Warranty', link: '/box-warranty' },
                                ]
                            },
                            { text: 'Goggles', link: '/', },
                        ]
                    },
                    {
                        text: 'FC',
                        items: [
                            { text: 'HaLo', link: '/' },
                            { text: 'AIO5', link: '/' },
                            { text: 'AIO15', link: '/' },
                        ]
                    },
                    {
                        text: 'ESC',
                        items: [
                            {
                                text: 'HaLo', link: '/',
                                collapsed: true,
                                items: [
                                ]
                            },
                        ]
                    }
                ],
            }
        },
        zh: {
            label: '简体中文',
            lang: 'zh-CN',
            link: '/zh',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hd-zero/hd-zero.github.io/edit/main/docs/:path',
                    text: '在 GitHub 上编辑'
                },
                nav: [
                    { text: '文档', link: '/zh/what-is-hdzero' }
                ],
                sidebar: [
                    {
                        text: '首页',
                        items: [
                            { text: '什么是 HDZero?', link: '/zh/what-is-hdzero' },
                        ]
                    },
                    {
                        text: '视频发射机',
                        items: [
                            {
                                text: 'HDZero VTX 产品', link: '/zh/vtx-summary',
                                collapsed: true,
                                items: [
                                    { text: 'Whoop V2 VTX', link: '/zh/whoop-v2' },
                                    { text: 'Race V3 VTX', link: '/zh/race-v3', },
                                    { text: 'Freestyle V2 VTX', link: '/zh/freestyle-v2', },
                                    { text: 'ECO VTX', link: '/zh/eco-bundle', },
                                ]
                            },
                            { text: 'VTX 安装图', link: '/zh/vtx-installation', },
                            { text: '基础说明', link: '/zh/vtx-general', },
                            { text: 'VTX LED 模式', link: '/zh/vtx-led', },
                            { text: 'VTX 固件更新指南', link: '/zh/vtx-firmware-update', },
                            { text: '常问问题', link: '/zh/vtx-faq', },
                            { text: '保修', link: '/zh/vtx-warranty', },
                        ]
                    },
                    {
                        text: '视频接收机',
                        items: [
                            {
                                text: 'Box Pro', link: '/',
                                collapsed: true,
                                items: [

                                ]
                            },
                            { text: 'Goggles', link: '/', },
                        ]
                    },
                    {
                        text: '飞控',
                        items: [
                            { text: 'HaLo', link: '/' },
                            { text: 'AIO5', link: '/' },
                            { text: 'AIO15', link: '/' },
                        ]
                    },
                    {
                        text: '电调',
                        items: [
                            {
                                text: 'HaLo', link: '/',
                                collapsed: true,
                                items: [
                                ]
                            },
                        ]
                    }
                ],
            }
        }
    }
})
