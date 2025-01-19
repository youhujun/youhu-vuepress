/*
 * @Descripttion: 
 * @version: v1
 * @Author: youhujun 2900976495@qq.com
 * @Date: 2025-01-18 09:51:07
 * @LastEditors: youhujun 2900976495@qq.com
 * @LastEditTime: 2025-01-20 04:14:24
 * @FilePath: \docs\.vuepress\config.js
 * Copyright (C) 2025 youhujun. All rights reserved.
 */

const nav = require('./nav/index')
const sidebar = require('./sidebar/index')

module.exports = {
	base: '/',
	title: '游鹄-YouHu',
	description: '游鹄,绘制山海与君共享!',
	head: [
		['link', { rel: 'icon', href: '/asset/img/favicon.ico' }]
	],
	host: '0.0.0.0',
	port: '8080',
	dest: '.vuepress/dist',
	extraWatchFiles: [
		'.vuepress/config.js',
	],
	patterns: [
		'**/*.md',
		'**/*.vue'
	],
	themeConfig: {
		logo: '/asset/img/white_logo.png',
		displayAllHeaders: true,
		activeHeaderLinks: true, // 默认值：true
		search: true,//搜索
		searchMaxSuggestions: 10,//最大搜索建议数
		lastUpdated: 'Last Updated',//最后更新时间
		smoothScroll: true,//页面滚动,
		markdown: {
			lineNumbers: true //显示代码行号
		},
		nav: nav,
		sidebar: sidebar,

	},
	plugins: [
		['@vuepress/active-header-links', {
			sidebarLinkSelector: '.sidebar-link',
			headerAnchorSelector: '.header-anchor'
		}],
		'@vuepress/back-to-top',
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