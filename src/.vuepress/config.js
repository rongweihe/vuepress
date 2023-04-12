module.exports = {
    title: 'ChatGPT中文导航网',
    description: 'Just playing around',
    themeConfig: {
        subSidebar: 'auto',
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            { text: '首页', link: '/' },
            {
                text: '联系作者', 
                items: [
                    { text: 'Github', link: 'https://github.com/rongweihe' },
                    { text: '知乎', link: 'https://zhihu.com/people/herongwei' },
                    { text: '联系方式', link: 'https://i.328888.xyz/2023/04/09/iciz4J.md.jpeg' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础概念",
              path: '/handbook/read01',
              collapsable: false, // 不折叠
              children: [
                { title: "什么是 ChatGPT", path: "/handbook/read01" },
                { title: "ChatGPT中的 GPT 分别是什么意思", path: "/handbook/read02" }
              ],
            },
            {
                title: "人工智能相关知识",
                path: '/handbook/what_is_en_decode',
                collapsable: false,
                children: [
                    { title: "什么是Encoder-Decoder 和 Seq2Seq", path: "/handbook/what_is_en_decode" },
                    { title: "Encoder-Decoder 有哪些应用？以及缺陷是什么？", path: "/handbook/how_en_decode_show" },
                    { title: "训练集、验证集、测试集（附：分割方法+交叉验证）", path: "/handbook/data_train_valid_test"}
                  ],
            },
            {
                title: "持续更新中...",
                path: '/handbook/read05',
                collapsable: false,
                children: [
                    { title: "持续更新中", path: "/handbook/read05" }
                  ],
            }
        ]
    }
}