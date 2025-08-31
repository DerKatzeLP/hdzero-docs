import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [['link', {rel: 'icon', href: '/short-icon.png'}]],
    title: "HDZero",
    description: "HDZero offers industry-leading low latency, giving you more time to react and the best possible chance of hitting that next gap. With its smooth, consistent FPV video feed, you'll experience the same locked-in feeling you get with analog video–but with the clarity of HD.",
    themeConfig: {
        logo: '/short-icon.png',

        socialLinks: [
            {icon: 'github', link: 'https://github.com/hd-zero'},
            {icon: 'discord', link: 'https://discord.gg/kGsnEDMb2V'},
            {icon: 'facebook', link: 'https://www.facebook.com/groups/hdzero'}
        ],
        lastUpdated: true,
        algolia: {
            indexName: 'hdzero-docs',
            appId: 'L46WWET8I8',
            apiKey: '7da19dfcb84bc90110e19c785fc21fbe',
            translations: {
                button: {
                    buttonText: 'Search Docs / 文档搜索',
                    buttonAriaLabel: 'Search Docs / 文档搜索'
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: 'Clear 清除查询条件',
                        resetButtonAriaLabel: 'Clear 清除查询条件',
                        cancelButtonText: 'Cancel 取消',
                        cancelButtonAriaLabel: 'Cancel 取消'
                    },
                    startScreen: {
                        recentSearchesTitle: 'History 搜索历史',
                        noRecentSearchesText: 'History is empty 没有搜索历史',
                        saveRecentSearchButtonTitle: 'Save to history 保存至搜索历史',
                        removeRecentSearchButtonTitle:
                            'Remove from history 从搜索历史中移除',
                        favoriteSearchesTitle: 'Favorite 收藏',
                        removeFavoriteSearchButtonTitle: 'Remove from favorite 从收藏中移除'
                    },
                    errorScreen: {
                        titleText: 'Unable to get results 无法获取结果',
                        helpText:
                            'You need to check your network connection 你可能需要检查你的网络连接'
                    },
                    footer: {
                        selectText: 'Choose 选择',
                        navigateText: 'Switch 切换',
                        closeText: 'Close 关闭'
                    },
                    noResultsScreen: {
                        noResultsText: 'Unable to find related results 无法找到相关结果',
                        suggestedQueryText: 'You can try to search 你可以尝试查询',
                        reportMissingResultsText:
                            'Do you think the query should have results? 你认为该查询应该有结果？',
                        reportMissingResultsLinkText: 'Click Feedback 点击反馈'
                    }
                }
            }
        },
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/hd-zero/hdzero-docs.github.io/main/docs/:path'
                },
                nav: [
                    {text: 'Documents', link: '/what-is-hdzero'}
                ],
                sidebar: [
                    {
                        text: 'Home',
                        items: [
                            {text: 'What is HDZero?', link: '/what-is-hdzero'},
                        ]
                    },
                    {
                        text: 'VTX',
                        collapsed: true,
                        items: [
                            {text: 'HDZero VTX Products', link: '/vtx-summary',
                                items: [
                                    {text: 'Whoop V2 VTX', link: '/whoop-v2'},
                                    {text: 'Race V3 VTX', link: '/race-v3',},
                                    {text: 'Freestyle V2 VTX', link: '/freestyle-v2',},
                                    {text: 'ECO VTX', link: '/eco-bundle',},
                                ]},
                            {text: 'VTX Installation Diagram', link: '/vtx-installation',},
                            {text: 'General Considerations', link: '/vtx-general',},
                            {text: 'VTX LED Pattern', link: '/vtx-led',},
                            {text: 'VTX Firmware Update Guide', link: '/vtx-firmware-update',},
                            {text: 'FAQ', link: '/vtx-faq',},
                            {text: 'Discontinued Video Transmitters', link: '/vtx-dis-summary',
                                items: [
                                    {text: 'Whoop VTX', link: '/whoop'},
                                    {text: 'Whoop lite VTX', link: '/whoop-lite',},
                                    {text: 'Race V1 VTX', link: '/race-v1',},
                                    {text: 'Race V2 VTX', link: '/race-v2',},
                                    {text: 'Freestyle V1 VTX', link: '/freestyle-v1',},
                                ],},
                            {text: 'Warranty', link: '/vtx-warranty',},
                        ]
                    },
                    {
                        text: 'VRX',
                        collapsed: true,
                        items: [
                            {text: 'Box Pro', link: '/',
                                collapsed: true,
                                items: [
                                ]},
                            {text: 'Goggles', link: '/',},
                        ]
                    },
                    {
                        text: 'FC',
                        collapsed: true,
                        items: [
                            {text: 'HaLo', link: '/',
                                collapsed: true,
                                items: [
                                ]},
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
                    pattern: 'https://github.com/hd-zero/hdzero-docs.github.io/main/docs/:path',
                    text: '在 GitHub 上编辑'
                },
                nav: [
                    {text: '文档', link: '/zh/what-is-hdzero'}
                ],
                sidebar: [
                    {
                        text: '首页',
                        items: [
                            {text: '什么是 HDZero?', link: '/zh/what-is-hdzero'},
                        ]
                    },
                    {
                        text: '视频发射机',
                        collapsed: true,
                        items: [
                            {text: 'HDZero VTX Products', link: '/vtx-summary',
                                items: [
                                    {text: 'Whoop V2 VTX', link: '/whoop-v2'},
                                    {text: 'Race V3 VTX', link: '/race-v3',},
                                    {text: 'Freestyle V2 VTX', link: '/freestyle-v2',},
                                    {text: 'ECO VTX', link: '/eco-bundle',},
                                ]},
                            {text: 'VTX Installation Diagram', link: '/vtx-installation',},
                            {text: 'General Considerations', link: '/vtx-general',},
                            {text: 'VTX LED Pattern', link: '/vtx-led',},
                            {text: 'VTX Firmware Update Guide', link: '/vtx-firmware-update',},
                            {text: 'FAQ', link: '/vtx-faq',},
                            {text: 'Discontinued Video Transmitters', link: '/vtx-dis-summary',
                                items: [
                                    {text: 'Whoop VTX', link: '/whoop'},
                                    {text: 'Whoop lite VTX', link: '/whoop-lite',},
                                    {text: 'Race V1 VTX', link: '/race-v1',},
                                    {text: 'Race V2 VTX', link: '/race-v2',},
                                    {text: 'Freestyle V1 VTX', link: '/freestyle-v1',},
                                ],},
                            {text: 'Warranty', link: '/vtx-warranty',},
                        ]
                    },
                    {
                        text: '视频接收机',
                        collapsed: true,
                        items: [
                            {text: 'Box Pro', link: '/',
                                collapsed: true,
                                items: [
                                ]},
                            {text: 'Goggles', link: '/',},
                        ]
                    },
                    {
                        text: '飞控',
                        collapsed: true,
                        items: [
                            {text: 'HaLo', link: '/',
                                collapsed: true,
                                items: [
                                ]},
                        ]
                    }
                ],
            }
        }
    }
})
