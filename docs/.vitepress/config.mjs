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
                    ru: {
                        translations: {
                            button: {
                                buttonText: 'Поиск',
                                buttonAriaLabel: 'Поиск'
                            },
                            modal: {
                                noResultsText: 'Не найдено',
                                resetButtonTitle: 'Стереть',
                                footer: {
                                    selectText: 'Выбор',
                                    navigateText: 'Навигация'
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
                            {
                                text: 'Goggles', link: '/goggles-introduction',
                                collapsed: true,
                                items: [
                                    { text: 'Setup', link: '/goggles-setup' },
                                    { text: 'Operation', link: '/goggles-operation' },
                                    { text: 'Firmware Update', link: '/goggles-firmware-update' },
                                    { text: 'Troubleshooting', link: '/goggles-troubleshooting' },
                                    { text: 'OLED Display Disclaimer', link: '/goggles-oled-display-disclaimer' },
                                    { text: 'Warranty', link: '/goggles-warranty' },
                                ]
                            },
                            {
                                text: 'Monitor', link: '/monitor-introduction',
                                collapsed: true,
                                items: [
                                    { text: 'Setup', link: '/monitor-setup' },
                                    { text: 'Operation', link: '/monitor-operation' },
                                    { text: 'Firmware Update', link: '/monitor-firmware-update' },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'FC',
                        items: [
                            { text: 'HaLo', link: '/' },
                            { text: 'AIO5', link: '/' },
                            { text: 'AIO15', link: '/' },
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
                                text: 'Box Pro', link: '/zh/box-introduction',
                                collapsed: true,
                                items: [
                                    { text: '设置', link: '/zh/box-setup' },
                                    { text: '操作说明', link: '/zh/box-operation' },
                                    { text: '固件更新', link: '/zh/box-firmware-update' },
                                    { text: '多语言支持', link: '/zh/box-lang' },
                                    { text: '故障排除', link: '/zh/box-troubleshooting' },
                                    { text: '保修', link: '/zh/box-warranty' },
                                ]
                            },
                            {
                                text: 'Goggles', link: '/zh/goggles-introduction',
                                collapsed: true,
                                items: [
                                    { text: '设置', link: '/zh/goggles-setup' },
                                    { text: '操作说明', link: '/zh/goggles-operation' },
                                    { text: '固件更新', link: '/zh/goggles-firmware-update' },
                                    { text: '多语言支持', link: '/zh/goggles-lang' },
                                    { text: '故障排除', link: '/zh/goggles-troubleshooting' },
                                    { text: 'OLED 显示屏免责声明', link: '/zh/goggles-oled-display-disclaimer' },
                                    { text: '保修', link: '/zh/goggles-warranty' },
                                ]
                            }
                        ]
                    },
                    {
                        text: '飞控',
                        items: [
                            { text: 'HaLo', link: '/' },
                            { text: 'AIO5', link: '/' },
                            { text: 'AIO15', link: '/' },
                        ]
                    }
                ],
            }
        },
        ru: {
            label: 'Русский',
            lang: 'ru-RU',
            link: '/ru',
            themeConfig: {
                editLink: {
                    pattern:
                        'https://github.com/hd-zero/hd-zero.github.io/edit/main/docs/:path',
                    text: 'Редактировать на GitHub'
                },
                nav: [{ text: 'Документы', link: '/ru/what-is-hdzero' }],
                sidebar: [
                    {
                        text: 'Главная',
                        items: [{ text: 'Что такое HDZero?', link: '/ru/what-is-hdzero' }]
                    },
                    {
                        text: 'Передатчики (VTX)',
                        items: [
                            {
                                text: 'HDZero VTX',
                                link: '/ru/vtx-summary',
                                collapsed: true,
                                items: [
                                    { text: 'Whoop V2 VTX', link: '/ru/whoop-v2' },
                                    { text: 'Race V3 VTX', link: '/ru/race-v3' },
                                    { text: 'Freestyle V2 VTX', link: '/ru/freestyle-v2' },
                                    { text: 'ECO VTX', link: '/ru/eco-bundle' }
                                ]
                            },
                            { text: 'Схема установки VTX', link: '/ru/vtx-installation' },
                            { text: 'Основные рекомендации', link: '/ru/vtx-general' },
                            { text: 'LED-индикация VTX', link: '/ru/vtx-led' },
                            { text: 'Обновление прошивки', link: '/ru/vtx-firmware-update' },
                            { text: 'Часто задаваемые вопросы', link: '/ru/vtx-faq' },
                            { text: 'Гарантия', link: '/ru/vtx-warranty' }
                        ]
                    }
                ]
            }
        }
    }
})