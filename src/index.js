import Post from './Post'
import json from '../assets/json'
import logo from '../assets/webpack-logo.png'
import './styles/styles.css'

const post = new Post('webpack post title', logo);

console.log(post.toString());

console.log(json)