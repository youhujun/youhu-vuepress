/*
 * @Descripttion: 
 * @version: v1
 * @Author: youhujun 2900976495@qq.com
 * @Date: 2025-01-20 03:34:27
 * @LastEditors: youhujun 2900976495@qq.com
 * @LastEditTime: 2025-01-20 04:04:50
 * @FilePath: d:\wwwroot\Working\YouHu\YouhuProject\VuePress\youhu-blog-vuepress\docs\.vuepress\sidebar\index.js
 * Copyright (C) 2025 youhujun. All rights reserved.
 */

module.exports  = [
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
				children: [
					{
						title: '项目1.1',
						path: '/document/project1/one.md',
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
];