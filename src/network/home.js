import {request} from './request.js'
import axios from 'axios';
	
export function getHome(file){
	return request({
		url:file
	})
}

export function getAllHome(url){
	return axios.get(url)
}

export function getCity(url){
	return axios.get(url)
}