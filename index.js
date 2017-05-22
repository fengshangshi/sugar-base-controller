/**
 * @file 基础Controller类
 * @author ss.feng
 */
'use strict'

class Controller {
	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	// 渲染模板
	render(template, data) {
		this.end(data);
	}

	// 响应
	end(html) {
		this.res.end(html);
	}
}
