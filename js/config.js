// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    "dyttzy": {
        "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
        "name": "电影天堂资源",
        "detail": "http://caiji.dyttzyapi.com"
    },
    "heimuer": {
        "api": "https://json.heimuer.xyz/api.php/provide/vod",
        "name": "黑木耳",
        "detail": "https://heimuer.tv"
    },
    "ruyi": {
        "api": "https://cj.rycjapi.com/api.php/provide/vod",
        "name": "如意资源"
    },
    "bfzy": {
        "api": "https://bfzyapi.com/api.php/provide/vod",
        "name": "暴风资源"
    },
    "tyyszy": {
        "api": "https://tyyszy.com/api.php/provide/vod",
        "name": "天涯资源"
    },
    "ffyzy": {
        "api": "http://cj.ffzyapi.com/api.php/provide/vod",
        "name": "非凡云",
        "detail": "http://cj.ffzyapi.com"
    },
    "iqiyi": {
        "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
        "name": "iqiyi资源"
    },
    "wolong": {
        "api": "https://wolongzyw.com/api.php/provide/vod",
        "name": "卧龙资源"
    },
    "wolong2": {
        "api": "https://collect.wolongzyw.com/api.php/provide/vod",
        "name": "卧龙资源2"
    },
    "jisu": {
        "api": "https://jszyapi.com/api.php/provide/vod",
        "name": "极速资源",
        "detail": "https://jszyapi.com"
    },
    "mozhua": {
        "api": "https://mozhuazy.com/api.php/provide/vod",
        "name": "魔爪资源"
    },
    "yinghua": {
        "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
        "name": "樱花资源"
    },
    "wujin": {
        "api": "https://api.wujinapi.me/api.php/provide/vod",
        "name": "无尽资源"
    },
    "wwzy": {
        "api": "https://wwzy.tv/api.php/provide/vod",
        "name": "旺旺短剧"
    },
    "ikun": {
        "api": "https://ikunzyapi.com/api.php/provide/vod",
        "name": "iKun资源"
    },
    "lzi": {
        "api": "https://cj.lziapi.com/api.php/provide/vod",
        "name": "量子资源站"
    },
    "huya": {
        "api": "https://www.huyaapi.com/api.php/provide/vod",
        "name": "虎牙资源",
        "detail": "https://www.huyaapi.com"
    },
    "ckzy": {
        "api": "https://ckzy.me/api.php/provide/vod",
        "name": "CK资源",
        "detail": "https://ckzy.me"
    },
    "wujinzy": {
        "api": "https://api.wujinapi.com/api.php/provide/vod",
        "name": "无尽资源2",
        "detail": "https://api.wujinapi.com"
    },
    "hongniuzy": {
        "api": "https://www.hongniuzy2.com/api.php/provide/vod",
        "name": "红牛资源",
        "detail": "https://www.hongniuzy2.com"
    },
    "AV5": {
        "api": "https://91md.me/api.php/provide/vod/",
        "name": "AV-91麻豆",
        "detail": "https://91md.me"
    },
    "AV6": {
        "api": "http://lbapiby.com/api.php/provide/vod/at/json",
        "name": "AV-AIvin",
        "detail": "http://lbapiby.com"
    },
    "AV8": {
        "api": "http://fhapi9.com/api.php/provide/vod",
        "name": "AV-番号资源",
        "detail": "http://fhapi9.com/"
    },
    "AV11": {
        "api": "https://Naixxzy.com/api.php/provide/vod",
        "name": "AV-奶香香",
        "detail": "https://Naixxzy.com"
    },
    "AV12": {
        "api": "https://slapibf.com/api.php/provide/vod",
        "name": "AV-森林资源",
        "detail": "https://slapibf.com"
    },
    "AV13": {
        "api": "https://shayuapi.com/api.php/provide/vod",
        "name": "AV-鲨鱼资源",
        "detail": "https://shayuapi.com"
    },
    "AV17": {
        "api": "https://apiyutu.com/api.php/provide/vod",
        "name": "AV-玉兔资源",
        "detail": "https://apiyutu.com"
    },
    "AV19": {
        "api": "https://www.pgxdy.com/api/json.php",
        "name": "AV-AV资源",
        "detail": "https://www.pgxdy.com"
    },
    "AV20": {
        "api": "https://www.gdlsp.com/api/json.php",
        "name": "AV-香奶儿资源",
        "detail": "https://www.gdlsp.com"
    },
    "AV21": {
        "api": "https://www.kxgav.com/api/json.php",
        "name": "AV-白嫖资源",
        "detail": "https://www.kxgav.com"
    },
    "AV23": {
        "api": "https://www.xrbsp.com/api/json.php",
        "name": "AV-淫水资源",
        "detail": "https://www.xrbsp.com"
    },
    "AV24": {
        "api": "https://www.msnii.com/api/json.php",
        "name": "AV-美少女资源",
        "detail": "https://www.msnii.com"
    },
    "AV25": {
        "api": "https://lbapi9.com/api.php/provide/vod/at/json",
        "name": "AV-乐播资源",
        "detail": "https://lbapi9.com"
    },
    "AV1": {
        "api": "https://www.caoliuzyw.com/api.php/prodao/vod",
        "name": "AV-草榴资源",
        "detail": "https://www.caoliuzyw.com"
    },
    "ffzy": {
        "api": "http://ffzy5.tv/api.php/provide/vod",
        "name": "非凡影视",
        "detail": "http://ffzy5.tv"
    },
    "1_360Tzy": {
        "name": "TV-360资源",
        "api": "https://360zy.com/api.php/provide/vod",
        "detail": "https://360zy.com"
    },
    "2_Tbdyzy": {
        "name": "TV-百度云资源",
        "api": "https://api.apibdzy.com/api.php/provide/vod",
        "detail": "https://api.apibdzy.com"
    },
    "3_Tbfzy": {
        "name": "TV-暴风资源",
        "api": "https://bfzyapi.com/api.php/provide/vod",
        "detail": ""
    },
    "4_Tdbzy": {
        "name": "TV-豆瓣资源1",
        "api": "https://caiji.dbzy.tv/api.php/provide/vod",
        "detail": "https://caiji.dbzy.tv"
    },
    "45_dbzy": {
        "name": "TV-豆瓣资源2",
        "api": "https://dbzy.tv/api.php/provide/vod",
        "detail": "https://dbzy.tv"
    },
    "5_Tffzy": {
        "name": "TV-非凡资源",
        "api": "https://cj.ffzyapi.com/api.php/provide/vod",
        "detail": "https://cj.ffzyapi.com"
    },
    "6_Tgszy": {
        "name": "TV-光速资源",
        "api": "https://api.guangsuapi.com/api.php/provide/vod",
        "detail": "https://api.guangsuapi.com"
    },
    "7_Thhzy": {
        "name": "TV-豪华资源",
        "api": "https://hhzyapi.com/api.php/provide/vod",
        "detail": "https://hhzyapi.com"
    },
    "8_Thme": {
        "name": "TV-黑木耳1",
        "api": "https://json.heimuer.xyz/api.php/provide/vod",
        "detail": "https://json.heimuer.xyz"
    },
    "74_hmedb": {
        "name": "TV-黑木耳2",
        "api": "https://json02.heimuer.xyz/api.php/provide/vod",
        "detail": "https://json02.heimuer.xyz"
    },
    "9_Thnzy": {
        "name": "TV-红牛资源",
        "api": "https://www.hongniuzy2.com/api.php/provide/vod",
        "detail": "https://www.hongniuzy2.com"
    },
    "10_Thyzy": {
        "name": "TV-虎牙资源",
        "api": "https://www.huyaapi.com/api.php/provide/vod",
        "detail": "https://www.huyaapi.com"
    },
    "11_Tzy": {
        "name": "TV-ikun资源",
        "api": "https://ikunzyapi.com/api.php/provide/vod",
        "detail": "https://ikunzyapi.com"
    },
    "12_Tjyzy": {
        "name": "TV-金鹰资源",
        "api": "https://jyzyapi.com/api.php/provide/vod",
        "detail": "https://jyzyapi.com"
    },
    "13_Tlzzy": {
        "name": "TV-量子资源",
        "api": "https://cj.lziapi.com/api.php/provide/vod",
        "detail": ""
    },
    "14_Tmdzy": {
        "name": "TV-墨斗资源",
        "api": "https://www.mdzyapi.com/api.php/provide/vod",
        "detail": "https://www.mdzyapi.com"
    },
    "15_Tplzy": {
        "name": "TV-飘零资源",
        "api": "https://p2100.net/api.php/provide/vod",
        "detail": "https://p2100.net"
    },
    "16_Tsdzy": {
        "name": "TV-闪电资源",
        "api": "https://sdzyapi.com/api.php/provide/vod",
        "detail": "http://sdzyapi.com"
    },
    "17_Tsbzy": {
        "name": "TV-速播资源",
        "api": "https://subocaiji.com/api.php/provide/vod",
        "detail": ""
    },
    "18_Tsnzy": {
        "name": "TV-索尼资源",
        "api": "https://suoniapi.com/api.php/provide/vod",
        "detail": ""
    },
    "19_Tkzy": {
        "name": "TV-U酷资源",
        "api": "https://api.ukuapi.com/api.php/provide/vod",
        "detail": "https://api.ukuapi.com"
    },
    "51_Ukzy": {
        "name": "TV-U酷资源",
        "api": "https://api.ukuapi88.com/api.php/provide/vod",
        "detail": "https://api.ukuapi88.com"
    },
    "20_Twwzy": {
        "name": "TV-旺旺资源",
        "api": "https://api.wwzy.tv/api.php/provide/vod",
        "detail": "https://api.wwzy.tv"
    },
    "48_wwdj": {
        "name": "TV-旺旺短剧",
        "api": "https://wwzy.tv/api.php/provide/vod",
        "detail": "https://wwzy.tv"
    },
    "21_Twlzy": {
        "name": "TV-卧龙资源1",
        "api": "https://collect.wolongzy.cc/api.php/provide/vod",
        "detail": "https://collect.wolongzy.cc"
    },
    "44_wlzy": {
        "name": "TV-卧龙资源2",
        "api": "https://wolongzyw.com/api.php/provide/vod",
        "detail": "https://wolongzyw.com"
    },
    "22_Twjzy": {
        "name": "TV-无尽资源",
        "api": "https://api.wujinapi.com/api.php/provide/vod",
        "detail": ""
    },
    "23_Txlzy": {
        "name": "TV-新浪资源",
        "api": "http://api.xinlangapi.com/xinlangapi.php/provide/vod",
        "detail": "http://api.xinlangapi.com"
    },
    "24_Tyhzy": {
        "name": "TV-樱花资源",
        "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
        "detail": ""
    },
    "25_Tzdzy": {
        "name": "TV-最大资源",
        "api": "https://api.zuidapi.com/api.php/provide/vod",
        "detail": "https://api.zuidapi.com"
    },
    "68_1080zyk": {
        "name": "TV-1080资源库",
        "api": "https://api.1080zyku.com/inc/api_mac10.php",
        "detail": "https://api.1080zyku.com"
    },
    "72_smy": {
        "name": "TV-神马云",
        "api": "https://api.1080zyku.com/inc/apijson.php",
        "detail": "https://api.1080zyku.com"
    },
    "43_mtzy": {
        "name": "TV-茅台资源",
        "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
        "detail": "https://caiji.maotaizy.cc"
    },
    "46_mzzy": {
        "name": "TV-魔爪资源",
        "api": "https://mozhuazy.com/api.php/provide/vod",
        "detail": "https://mozhuazy.com"
    },
    "49_xmmzy": {
        "name": "TV-小猫咪资源",
        "api": "https://zy.xmm.hk/api.php/provide/vod",
        "detail": "https://zy.xmm.hk"
    },
    "39_dyttzy": {
        "name": "TV-电影天堂资源",
        "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
        "detail": "http://caiji.dyttzyapi.com"
    },
    "40_ryzy": {
        "name": "TV-如意资源",
        "api": "https://cj.rycjapi.com/api.php/provide/vod",
        "detail": "https://cj.rycjapi.com"
    },
    "41_tyzy": {
        "name": "TV-天涯资源",
        "api": "https://tyyszy.com/api.php/provide/vod",
        "detail": "https://tyyszy.com"
    },
    "52_hnzy": {
        "name": "TV-紅牛资源",
        "api": "https://www.hongniuzy2.com/api.php/provide/vod",
        "detail": "https://www.hongniuzy2.com"
    },
    "60_Czy": {
        "name": "TV-CK资源",
        "api": "https://ckzy.me/api.php/provide/vod",
        "detail": "https://ckzy.me"
    },
    "76_nndb": {
        "name": "TV-牛牛点播",
        "api": "https://api.niuniuzy.me/api.php/provide/vod",
        "detail": "https://api.niuniuzy.me"
    },
    "77_yydb": {
        "name": "TV-丫丫点播",
        "api": "https://cj.yayazy.net/api.php/provide/vod",
        "detail": "https://cj.yayazy.net"
    },
    "26_91Amd": {
        "name": "AV-91麻豆",
        "api": "https://91md.me/api.php/provide/vod",
        "detail": "https://91md.me"
    },
    "27_A": {
        "name": "AV-AIvin",
        "api": "http://lbapiby.com/api.php/provide/vod",
        "detail": ""
    },
    "28_Aaskzy": {
        "name": "AV-奥斯卡资源",
        "api": "https://aosikazy.com/api.php/provide/vod",
        "detail": "https://aosikazy.com"
    },
    "29_Aclzy": {
        "name": "AV-草榴资源",
        "api": "https://www.caoliuzyw.com/api.php/prodao/vod",
        "detail": "https://www.caoliuzyw.com"
    },
    "30_Afhzy": {
        "name": "AV-番号资源",
        "api": "http://fhapi9.com/api.php/provide/vod",
        "detail": ""
    },
    "31_Ajpzy": {
        "name": "AV-精品资源",
        "api": "https://www.jingpinx.com/api.php/provide/vod",
        "detail": "https://www.jingpinx.com"
    },
    "32_Aljzy": {
        "name": "AV-辣椒资源",
        "api": "https://apilj.com/api.php/provide/vod",
        "detail": "https://apilj.com"
    },
    "33_Alsbzy": {
        "name": "AV-老色逼资源",
        "api": "https://apilsbzy1.com/api.php/provide/vod",
        "detail": "https://apilsbzy1.com"
    },
    "34_Anxx": {
        "name": "AV-奶香香",
        "api": "https://Naixxzy.com/api.php/provide/vod",
        "detail": "https://Naixxzy.com"
    },
    "35_Aslzy": {
        "name": "AV-森林资源",
        "api": "https://slapibf.com/api.php/provide/vod",
        "detail": "https://slapibf.com"
    },
    "36_Asyzy": {
        "name": "AV-鲨鱼资源",
        "api": "https://shayuapi.com/api.php/provide/vod",
        "detail": "https://shayuapi.com"
    },
    "37_Aytzy": {
        "name": "AV-玉兔资源",
        "api": "https://apiyutu.com/api.php/provide/vod",
        "detail": "https://apiyutu.com"
    },
    "58_sng": {
        "name": "AV-色南国",
        "api": "https://api.sexnguon.com/api.php/provide/vod",
        "detail": "https://api.sexnguon.com"
    },
    "62_smzy": {
        "name": "AV-色猫资源",
        "api": "https://api.maozyapi.com/inc/apijson_vod.php",
        "detail": ""
    },
    "63_msnzy": {
        "name": "AV-美少女资源",
        "api": "https://www.msnii.com/api/json.php",
        "detail": "https://www.msnii.com"
    },
    "64_ysjzy": {
        "name": "AV-饮水机资源",
        "api": "https://www.xrbsp.com/api/json.php",
        "detail": "https://www.xrbsp.com"
    },
    "65_xnezy": {
        "name": "AV-香奶儿资源",
        "api": "https://www.gdlsp.com/api/json.php",
        "detail": "https://www.gdlsp.com"
    },
    "66_bpzy": {
        "name": "AV-白嫖资源",
        "api": "https://www.kxgav.com/api/json.php",
        "detail": "https://www.kxgav.com"
    },
    "67_hAzy": {
        "name": "AV-黄AV资源",
        "api": "https://www.pgxdy.com/api/json.php",
        "detail": "https://www.pgxdy.com"
    },
    "61_lbzy": {
        "name": "AV-乐播资源",
        "api": "https://lbapi9.com/api.php/provide/vod",
        "detail": ""
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
