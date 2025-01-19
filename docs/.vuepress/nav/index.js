
module.exports = [
	{ text: '主页', link: '/' },
	{ text: '指南', link: '/zh/guide/', target: '_self' },
	{
		text: '开源项目',
		ariaLabel: 'Language Menu',
		items: [
			{ text: '项目一', link: '/document/project1/', arget: '_blank' },
			{ text: '项目二', link: '/document/project2/', arget: '_blank' },
			{ text: '项目三', link: '/document/project3/', arget: '_blank' }
		]
	},
	{ text: '链接', link: 'https://www.baidu.com', target: '_blank' }
];