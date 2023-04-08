module.exports = {
    title: 'ChatGPT中文导航大全',
    description: 'Just playing around',
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '联系作者', 
                items: [
                    { text: 'Github', link: 'https://github.com/rongweihe' },
                    { text: '知乎', link: 'https://zhihu.com/people/herongwei' }
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
              title: "基础学习",
              path: '/handbook/read01',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/read01" },
                { title: "泛型", path: "/handbook/read02" }
              ],
            }
          ]
    }
}