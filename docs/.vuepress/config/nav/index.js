//导航栏
module.exports = [
    {text: 'HOME', link: '/index.html', icon: 'reco-home'},
    {
        text: 'OTHERS', icon: 'reco-document',
        items: [
            {
                text: 'Projects🎈',
                items: [{
                    text: 'My Project',
                    link: '/other/project',
                }]
            }, {
                text: 'Common sites🎈',
                items: [{
                    text: '✔ 友 链 →',
                    link: '/other/friends',
                }, {
                    text: 'Java SE API Documentation',
                    link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
                }, {
                    text: 'Program Creek',
                    link: 'https://www.programcreek.com/',
                }, {
                    text: 'Spring',
                    link: 'https://spring.io/',
                }, {
                    text: 'Stackoverflow',
                    link: 'https://stackoverflow.com/',
                }, {
                    text: 'LeetCode',
                    link: 'https://leetcode-cn.com/',
                }, {
                    text: 'Vue.js',
                    link: 'https://cn.vuejs.org/v2/guide/',
                }, {
                    text: 'BootCDN',
                    link: 'https://www.bootcdn.cn/',
                }, {
                    text: 'Linux命令大全',
                    link: 'https://www.linuxcool.com/',
                }, {
                    text: '编程语言排行榜',
                    link: 'https://www.tiobe.com/tiobe-index/',
                }]
            },]
    },
    {text: 'TIMELINE', link: '/timeline/', icon: 'reco-date'},
    {text: 'ABOUTME', link: '/about/', icon: 'reco-message'}
]
