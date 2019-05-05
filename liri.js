require("dotenv").config();
var keys = require("./keys.js")

var Spotify = require("node-spotify-api");
var moment = require('moment')
var axios = require('axios');
var fs = require('fs');

var spotify = new Spotify(keys.spotify);