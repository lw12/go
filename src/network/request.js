import axios from "axios"
export function request(config) {
	const instance1 = axios.create({
	 //baseURL: '127.0.0.1:8080',   //=> 这里是vue2直接路径访问  所以不需要
		timeout: 5000
	})
	return instance1(config)
}