/*
 * @Descripttion: 
 * @version: v1
 * @Author: youhujun 2900976495@qq.com
 * @Date: 2025-01-18 09:51:07
 * @LastEditors: youhujun 2900976495@qq.com
 * @LastEditTime: 2025-01-19 02:50:01
 * @FilePath: \docs\.vuepress\config.js
 * Copyright (C) 2025 youhujun. All rights reserved.
 */
module.exports = {
	base:'/',
	title: '游鹄-YouHu',
	description: '游鹄,绘制山海与君共享!',
	head: [
		['link', { rel: 'icon', href: '/asset/img/favicon.ico' }]
	],
	host:'0.0.0.0',
	port:'8080',
	dest:'.vuepress/dist',
	extraWatchFiles:[
		'.vuepress/config.js',
	],
	patterns:[
		'**/*.md', 
		'**/*.vue'
	],
	themeConfig:{
		logo:'/asset/img/white_logo.png',
		displayAllHeaders: true,
		activeHeaderLinks: true, // 默认值：true
		search: true,//搜索
		searchMaxSuggestions: 10,//最大搜索建议数
		lastUpdated: 'Last Updated',//最后更新时间
		smoothScroll: true,//页面滚动,
		markdown: {
			lineNumbers: true //显示代码行号
		},
		nav: [
			{ text: '主页', link: '/' },
			{ text: '指南', link: '/zh/guide/', target: '_self' },
			{ 
				text: '开源项目', 
				ariaLabel: 'Language Menu',  
				items:[
					{ text: '项目一', link: '/document/project1/', arget: '_blank' },
					{ text: '项目二', link: '/document/project2/', arget: '_blank' },
					{ text: '项目三', link: '/document/project3/', arget: '_blank' }
				]
			},
			{ text: '链接', link: 'https://www.baidu.com', target: '_blank' }
		],
		sidebar: [
			{
				title: '主页',   // 必要的
				path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				initialOpenGroupIndex: -1
			},
			{
				title: '指南',
				path: '/zh/guide/', 
				collapsable: true, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				initialOpenGroupIndex: -1, // 可选的, 默认值是 0
				children: [
					{
						title: '介绍',   // 必要的
						path: '/zh/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: false, // 可选的, 默认值是 true,
						sidebarDepth: 2,    // 可选的, 默认值是 1
					},
					{
						title: '项目一',   // 必要的
						path: '/document/project1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 2,    // 可选的, 默认值是 1
						initialOpenGroupIndex: -1,
						children:[
							{
								title:'项目1.1',
								path:'/document/project1/one.md',
								collapsable: false, // 可选的, 默认值是 true,
								sidebarDepth: 3, 
								initialOpenGroupIndex: 0,
							},
							{
								title: '项目1.2',
								path: '/document/project1/two.md',
								collapsable: false, // 可选的, 默认值是 true,
								sidebarDepth: 3,
								initialOpenGroupIndex: 0,
							}
						]
					},
					{
						title: '项目二',   // 必要的
						path: '/document/project2/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 2,    // 可选的, 默认值是 1
						initialOpenGroupIndex: 0,
						children: [
							{
								title: '项目2.1',
								path: '/document/project2/one.md',
								collapsable: false, // 可选的, 默认值是 true,
								sidebarDepth: 3,
								initialOpenGroupIndex: 0,
							},
							{
								title: '项目2.2',
								path: '/document/project2/two.md',
								collapsable: false, // 可选的, 默认值是 true,
								sidebarDepth: 3,
								initialOpenGroupIndex: 0,
							}
						]
					},
					{
						title: '项目三',   // 必要的
						path: '/document/project3/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: false, // 可选的, 默认值是 true,
						sidebarDepth: 2,    // 可选的, 默认值是 1
						initialOpenGroupIndex: -1
					}
				]
				
			}
		],

	},
	plugins: [
		['@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}],
		'@vuepress/back-to-top',
		'@vuepress/blog',
		['@vuepress/medium-zoom', {
			selector: 'img.zoom-custom-imgs',
			// medium-zoom options here
			// See: https://github.com/francoischalifour/medium-zoom#options
			options: {
				margin: 16
			}
		}],
		'@vuepress/nprogress',
		['@vuepress/search', {
			searchMaxSuggestions: 10
		}]
	]
}