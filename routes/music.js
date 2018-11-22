var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/getDiscList', function (req, res) {
    var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com'
        },
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => {
        console.log(e)
    })
})

router.get('/lyric', function (req, res) {
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        var ret = response.data
        if (typeof ret === 'string') {
            var reg = /^\w+\(({[^()]+})\)$/
            var matches = ret.match(reg)
            if (matches) {
                ret = JSON.parse(matches[1])
            }
        }
        res.json(ret)
    }).catch((e) => {
        console.log(e)
    })
})
/**
 * @msg:node路由转发
 * @param {type}
 * @return:
 */
router.get('/getSongList', function (req, res) {
    var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/',
            host: 'y.qq.com'
        },
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => {
        console.log(e)
    })
})
router.get('/getTopList', function (req, res) {
    var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/',
            host: 'y.qq.com'
        },
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => {
        console.log(e)
    })
})


router.get('/search', function (req, res) {
    var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/',
            host: 'y.qq.com'
        },
        params: req.query
    }).then(response => {
        res.json(response.data)
    }).catch(e => {
        console.log(e)
    })
})
module.exports = router;
