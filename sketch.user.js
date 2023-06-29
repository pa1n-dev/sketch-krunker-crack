// ==UserScript==
// @name        Sketch
// @description try to take over the world!
// @namespace   https://sys32.dev
// @icon        https://www.google.com/s2/favicons?sz=64&domain=krunker.io
// @match       https://krunker.io/*
// @match       https://work.ink/4lH/krunker
// @exclude     https://krunker.io/social.html*
// @exclude     https://krunker.io/editor.html*
// @exclude     https://krunker.io/viewer.html*
// @antifeature ads
// @run-at      document-start
// @require     https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js
// @noframes
// @author      The Gaming Gurus
// @version     1.0.0-beta.3
// @connect     sketch.sys32.dev
// @connect     files.catbox.moe
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_listValues
// @grant       GM_deleteValue
// @grant       GM_openInTab
// @grant       GM_xmlhttpRequest
// ==/UserScript==
/*!
 * Copyright (C) The Gaming Gurus
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by David Reed <reedswork@proton.me>
 */
/*eslint-disable*/
'use strict';
GM_setValue('token', 'null')
let X = class {
    ['defaultConfig'];
    ['valueCache'] = new Map();
    ['configTarget'] = new EventTarget();
    constructor(iiïiìïî) {
        this['defaultConfig'] = iiïiìïî;
    } ['get'](iiïiîií) {
        if (this['valueCache']['has'](iiïiîií)) return this['valueCache']['get'](iiïiîií);
        const iìíìíîi = GM_getValue(iiïiîií, this['defaultConfig'][iiïiîií]);
        return this['valueCache']['set'](iiïiîií, iìíìíîi), iìíìíîi;
    } ['set'](iiîîiiï, iïîiïìi) {
        this['valueCache']['set'](iiîîiiï, iïîiïìi), GM_setValue(iiîîiiï, iïîiïìi), this['configTarget']['dispatchEvent'](new Event(iiîîiiï));
    } ['delete'](iïîíîîi) {
        this['valueCache']['delete'](iïîíîîi), GM_deleteValue(iïîíîîi), this['configTarget']['dispatchEvent'](new Event(iïîíîîi));
    } ['reset']() {
        for (const iïiíiïí in this['defaultConfig']) this['delete'](iïiíiïí);
    } ['import'](iíiïìïï) {
        for (const iîììiíï in this['defaultConfig']) iîììiíï in iíiïìïï ? this['set'](iîììiíï, iíiïìïï[iîììiíï]) : this['delete'](iîììiíï);
    } ['export']() {
        const iïìïîìí = {};
        for (const iïîìiií in this['defaultConfig']) iïìïîìí[iïîìiií] = this['get'](iïîìiií);
        return iïìïîìí;
    }
};

function et(iïîîiiï, iîìíìíî) {
    const [iììiiíi, iìîìíîï] = React['useState'](iïîîiiï['get'](iîìíìíî));
    return React['useEffect'](() => {
        function iíííîíî() {
            iìîìíîï(iïîîiiï['get'](iîìíìíî));
        }
        return iïîîiiï['configTarget']['addEventListener'](iîìíìíî, iíííîíî, {
            'once': !0x0
        }), () => iïîîiiï['configTarget']['removeEventListener'](iîìíìíî, iíííîíî);
    }), [iììiiíi, (...iiïîiîi) => {
        iiïîiîi['length'] === 0x0 ? (iïîîiiï['delete'](iîìíìíî), iìîìíîï(iïîîiiï['defaultConfig'][iîìíìíî])) : (iïîîiiï['set'](iîìíìíî, iiïîiîi[0x0]), iìîìíîï(iiïîiîi[0x0]));
    }];
}
const j = 'https://sketch.sys32.dev/stable/',
    tt = 'https://work.ink/4lH/krunker',
    nt = 'bc7ea1a08ee1cc362fdd1830f8f7eb4ede5bcbc14878e6b22f017051d33333b3602ce5d98a7136adeccfb2590cd86959535a84f51d38724a6db976f4108e5861',
    ue = '1.0.0-beta.3',
    rt = 'https://sketch.sys32.dev/workink',
    de = 'https://y9x.github.io/discord/',
    ot = 'https://somestuff.tech/sketch/',
    fe = location['hostname'] === 'krunker.io',
    at = location['hostname'] === 'work.ink';
var d = (iiîiîíí => (iiîiîíí[iiîiîíí['frame'] = 0x0] = 'frame', iiîiîíí[iiîiîíí['delta'] = 0x1] = 'delta', iiîiîíí[iiîiîíí['xDir'] = 0x2] = 'xDir', iiîiîíí[iiîiîíí['yDir'] = 0x3] = 'yDir', iiîiîíí[iiîiîíí['moveDir'] = 0x4] = 'moveDir', iiîiîíí[iiîiîíí['shoot'] = 0x5] = 'shoot', iiîiîíí[iiîiîíí['scope'] = 0x6] = 'scope', iiîiîíí[iiîiîíí['jump'] = 0x7] = 'jump', iiîiîíí[iiîiîíí['reload'] = 0x8] = 'reload', iiîiîíí[iiîiîíí['crouch'] = 0x9] = 'crouch', iiîiîíí[iiîiîíí['weaponScroll'] = 0xa] = 'weaponScroll', iiîiîíí[iiîiîíí['weaponSwap'] = 0xb] = 'weaponSwap', iiîiîíí[iiîiîíí['moveLock'] = 0xc] = 'moveLock', iiîiîíí))(d || {});
const it = {
        'showedBypassNag': !0x1
    },
    he = new X(it);
fe ? GM['info']['script']['matches']['includes']('https://work.ink/4lH/krunker') || me() : at && (unsafeWindow['decodeURIComponent'] = iïíiíïi => (iïíiíïi === location['pathname']['slice'](0x1) && me(), decodeURIComponent(iïíiíïi)));

function me() {
    he['get']('showedBypassNag') || (GM_openInTab(rt, {
        'active': !0x0
    }), he['set']('showedBypassNag', !0x0));
}
const ct = ['', '', '', 'CANCEL', '', '', 'HELP', '', 'BACK_SPACE', 'TAB', '', '', 'CLEAR', 'ENTER', 'ENTER_SPECIAL', '', 'SHIFT', 'CONTROL', 'ALT', 'PAUSE', 'CAPS_LOCK', 'KANA', 'EISU', 'JUNJA', 'FINAL', 'HANJA', '', 'ESCAPE', 'CONVERT', 'NONCONVERT', 'ACCEPT', 'MODECHANGE', 'SPACE', 'PAGE_UP', 'PAGE_DOWN', 'END', 'HOME', 'LEFT', 'UP', 'RIGHT', 'DOWN', 'SELECT', 'PRINT', 'EXECUTE', 'PRINTSCREEN', 'INSERT', 'DELETE', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'COLON', 'SEMICOLON', 'LESS_THAN', 'EQUALS', 'GREATER_THAN', 'QUESTION_MARK', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'OS_KEY', '', 'CONTEXT_MENU', '', 'SLEEP', 'NUMPAD0', 'NUMPAD1', 'NUMPAD2', 'NUMPAD3', 'NUMPAD4', 'NUMPAD5', 'NUMPAD6', 'NUMPAD7', 'NUMPAD8', 'NUMPAD9', 'MULTIPLY', 'ADD', 'SEPARATOR', 'SUBTRACT', 'DECIMAL', 'DIVIDE', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24\x09\x09', 'NUM_LOCK', 'SCROLL_LOCK', 'WIN_OEM_FJ_JISHO', 'WIN_OEM_FJ_MASSHOU', 'WIN_OEM_FJ_TOUROKU', 'WIN_OEM_FJ_LOYA', 'WIN_OEM_FJ_ROYA\x09\x09', '', 'CIRCUMFLEX', 'EXCLAMATION', 'DOUBLE_QUOTE', 'HASH', 'DOLLAR', 'PERCENT', 'AMPERSAND', 'UNDERSCORE', 'OPEN_PAREN', 'CLOSE_PAREN', 'ASTERISK', 'PLUS', 'PIPE', 'HYPHEN_MINUS', 'OPEN_CURLY_BRACKET', 'CLOSE_CURLY_BRACKET', 'TILDE\x09', 'VOLUME_MUTE', 'VOLUME_DOWN', 'VOLUME_UP', '', '', ';', '=', ',', 'MINUS', 'PERIOD', 'SLASH', 'BACK_QUOTE\x09\x09\x09\x09\x09\x09', '', '', '[', '\x5c', ']', 'QUOTE', '', 'META', 'ALTGR', '', 'WIN_ICO_HELP', 'WIN_ICO_00', '', ';', '=', ',', '-', '.', '/', '~', 'WIN_OEM_PA3', 'WIN_OEM_WSCTRL', 'WIN_OEM_CUSEL', 'WIN_OEM_ATTN', 'WIN_OEM_FINISH', 'WIN_OEM_COPY', 'WIN_OEM_AUTO', 'WIN_OEM_ENLW', 'WIN_OEM_BACKTAB', 'ATTN', 'CRSEL', 'EXSEL', 'EREOF', 'PLAY', 'ZOOM', '', 'PA1', 'WIN_OEM_CLEAR', '', '', '', '', '', '', '', '', '[', '\x5c', ']', '\x27'],
    ge = [],
    pe = new Set();

function ye(iïíïíìï, iìïîíii) {
    const iíiíiiï = Re(iïíïíìï);
    iìïîíii ? pe['add'](iíiíiiï) : pe['delete'](iíiíiiï);
    for (const iïïìïií of ge) iïïìïií(iïíïíìï, iíiíiiï, iìïîíii);
}

function Ee(iîììiií) {
    ye(iîììiií, !0x0);
}

function be(iiiïìíî) {
    ye(iiiïìíî, !0x1);
}
window['addEventListener']('keydown', Ee), window['addEventListener']('keyup', be), window['addEventListener']('mousedown', Ee), window['addEventListener']('mouseup', be);

function st(iîìììîî) {
    return iîìììîî < 0x0 ? 'UNBOUND' : iîìììîî === 0x4e20 ? 'SCROLL' : iîìììîî > 0x2710 ? 'M' + (iîìììîî - 0x2710) : ct[iîìììîî];
}

function Re(iîíìîïî) {
    return iîíìîïî instanceof MouseEvent ? 0x2710 + iîíìîïî['which'] : iîíìîïî['keyCode'];
}
const lt = {
        'aimbot': 'off',
        'hitbox': 'head',
        'bot': !0x1,
        'wallbangs': !0x1,
        'fovCheck': !0x0,
        'aimKey': -0x1,
        'fovRadius': 0x96,
        'smoothFactor': 0x1,
        'drawFOV': !0x1,
        'targetOnAimKey': !0x1,
        'bhop': !0x1,
        'slidehop': !0x1,
        'wallJump': !0x0,
        'nametags': !0x1,
        'boxes': !0x1,
        'chams': !0x1,
        'forceAuto': !0x1,
        'recoilControl': !0x1,
        'recoilControlKey': -0x1,
        'recoilSmoothFactor': 0.9,
        'triggerbot': !0x1,
        'triggerbotKey': -0x1,
        'triggerbotMin': 0x0,
        'triggerbotMax': 0x0,
        'menuKey': -0x1,
        'menuButton': !0x0,
        'silentFail': !0x1,
        'noAdsFovMlt': !0x1
    },
    u = new X(lt),
    f = iíìîìiï => et(u, iíìîìiï);

function x(iíìïiïï) {
    return new Promise(iïíììïî => setTimeout(() => iïíììïî(), iíìïiïï));
}

function V(iííiïìí, iïïìíïî = {}) {
    return new Promise((iïiïiïì, iíìiïïï) => GM_xmlhttpRequest({
        'url': iííiïìí,
        'method': iïïìíïî['method'],
        'data': iïïìíïî['body'],
        'headers': iïïìíïî['headers'],
        'onerror': () => iíìiïïï(new TypeError('Failed\x20to\x20fetch')),
        'onload': iîiíìií => iïiïiïì({
            'status': iîiíìií['status'],
            'statusText': iîiíìií['statusText'],
            'ok': iîiíìií['status'] >= 0xc8 && iîiíìií['status'] < 0x12c,
            'text': () => Promise['resolve'](iîiíìií['responseText']),
            'json': () => Promise['resolve'](JSON['parse'](iîiíìií['responseText'])),
            'headers': iîiíìií['responseHeaders']['split']('\x0d\x0a')['filter'](Boolean)['reduce']((iìïìiïì, iììîïiï) => {
                const [iîîîíîï, ...iííiiìí] = iììîïiï['split'](':\x20');
                return iìïìiïì['set'](iîîîíîï, iííiiìí['join'](':\x20')), iìïìiïì;
            }, new Headers())
        })
    }));
}

function ke(iîíïíîi, iiíîiíì = 0x32) {
    return new Promise(iíîîîíï => {
        let iiïîííi;
        const iíiîiìì = () => {
            try {
                const iiiïîíi = iîíïíîi();
                if (iiiïîíi) return iiïîííi && clearInterval(iiïîííi), iíîîîíï(iiiïîíi), !0x0;
            } catch (iïîîïïî) {
                console['error'](iïîîïïî);
            }
        };
        iíiîiìì() || (iiïîííi = setInterval(iíiîiìì, iiíîiíì));
    });
}
const F = [];
let q;

function T() {
    if (!q) throw new Error('Too\x20early');
    return q;
}
let Q;

function E() {
    if (!Q) throw new Error('Too\x20early');
    return Q;
}
let D;

function p() {
    if (!D) throw new Error('Too\x20early');
    return D;
}
const A = [];

function ut() {
    const {
        add: iîìïííi
    } = E()['players'];
    E()['players']['add'] = function(...iïìîíîï) {
        const iiíïíîï = iîìïííi['call'](this, ...iïìîíîï);
        return iiíïíîï['isYou'] && (D = iiíïíîï), iiíïíîï;
    };
    const {
        push: iìîííiï
    } = E()['controls']['tmpInpts'];
    E()['controls']['tmpInpts']['push'] = function(iîìiiíí) {
        if (D)
            for (const iíiîiiî of A) iíiîiiî(iîìiiíí);
        return iìîííiï['call'](this, iîìiiíí);
    };
}
F['push'](iiìîííí => {
    if (typeof iiìîííí['exports'] != 'function' || !iiìîííí['exports']['toString']()['includes']('this.players=new')) return;
    const iìîïïïï = iiìîííí['exports'];
    iiìîííí['exports'] = function(...iíîiìïî) {
        const iìiìiiî = iìîïïïï['call'](this, ...iíîiìïî);
        return setTimeout(() => {
            Q = this, ut();
        }), iìiìiiî;
    };
});
const Z = [];

function dt() {
    const {
        render: iîíiîíì
    } = O();
    O()['render'] = function(...iïïiìïi) {
        const iïìïïîï = iîíiîíì['call'](this, ...iïïiìïi);
        if (D)
            for (const iîiîîïí of Z) iîiîîïí();
        return iïìïïîï;
    };
}
let ee;

function O() {
    if (!ee) throw new Error('Too\x20early');
    return ee;
}
F['push'](iïìîìïî => {
    typeof iïìîìïî['exports'] != 'object' || iïìîìïî['exports'] === null || !('medalsList' in iïìîìïî['exports']) || (ee = iïìîìïî['exports'], dt());
});
let te;

function ft() {
    const iìíïïîì = new WeakMap();
    Object['defineProperty'](ht()['prototype'], 'transparent', {
        'get'() {
            return u['get']('wallbangs') ? this['penetrable'] ? 0x1 : 0x0 : iìíïïîì['get'](this);
        },
        'set'(iîìïïìí) {
            iìíïïîì['set'](this, iîìïïìí);
        }
    });
}

function ht() {
    if (!te) throw new Error('Too\x20early');
    return te;
}
F['push'](iiìïîìi => {
    typeof iiìïîìi['exports'] != 'function' || !iiìïîìi['exports']['toString']()['includes']('this.penetrable=') || (te = iiìïîìi['exports'], ft());
}), F['push'](iïíîïíí => {
    if (typeof iïíîïíí['exports'] != 'function' || !iïíîïíí['exports']['toString']()['includes']('this.GEOS=')) return;
    const iïîîîîí = iïíîïíí['exports'];
    iïíîïíí['exports'] = function(...iïìiîîï) {
        const iîììïïi = iïîîîîí['call'](this, ...iïìiîîï);
        return setTimeout(() => {
            q = this;
        }), iîììïïi;
    };
});
let ne;

function $() {
    if (!ne) throw new Error('Too\x20early');
    return ne;
}
F['push'](iìîìîîï => {
    typeof iìîìîîï['exports'] != 'object' || iìîìîîï['exports'] === null || !('gameVersion' in iìîìîîï['exports']) || (ne = iìîìîîï['exports']);
});

function mt(iîîiïiì) {
    for (const iîiíìîî of F) iîiíìîî(iîîiïiì);
}

function gt(iiîíîii, iiïíiíí, iîìîïïî, iíïiïií, iîìîiîï, iìîìiii) {
    const iìîïììì = iiîíîii - iíïiïií,
        iîïìïîï = iiïíiíí - iîìîiîï,
        iíiïïîí = iîìîïïî - iìîìiii;
    return Math['sqrt'](iìîïììì * iìîïììì + iîïìïîï * iîïìïîï + iíiïïîí * iíiïïîí);
}

function pt(iíííìïi, iïîiiìì, iiïîïîî, iïîíìii, iììîìîí, iîïïìíí) {
    return Math['asin'](Math['abs'](iïîiiìì - iììîìîí) / gt(iíííìïi, iïîiiìì, iiïîïîî, iïîíìii, iììîìîí, iîïïìíí)) * (iïîiiìì > iììîìîí ? -0x1 : 0x1);
}

function yt(iíiîîìï, iiíîìiî, iîíiïìì, iíiiiìi) {
    return Math['atan2'](iiíîìiî - iíiiiìi, iíiîîìï - iîíiïìì);
}

function we(iiîíìïí, iìíìîíï) {
    return Math['atan2'](Math['sin'](iìíìîíï - iiîíìïí), Math['cos'](iiîíìïí - iìíìîíï));
}

function re(iíîìïîi) {
    const iïíîïïï = E();
    return new iïíîïïï['THREE']['Vector3'](iíîìïîi['x'], iíîìïîi['y'], iíîìïîi['z']);
}

function W(iíïîîii, iîïïíìí = 0x0) {
    const iíìiiìï = T(),
        iiiììíì = O(),
        iíîîïïî = iíïîîii['clone']();
    return iíîîïïî['y'] += iîïïíìí, iíîîïïî['project'](iíìiiìï['camera']), iíîîïïî['x'] = (iíîîïïî['x'] + 0x1) / 0x2, iíîîïïî['y'] = (-iíîîïïî['y'] + 0x1) / 0x2, iíîîïïî['x'] *= innerWidth / iiiììíì['scale'], iíîîïïî['y'] *= innerHeight / iiiììíì['scale'], new iíìiiìï['THREE']['Vector2'](iíîîïïî['x'], iíîîïïî['y']);
}

function Te(iîîiíïi) {
    return !(iîîiíïi['isPlayer'] && iîîiíïi['isYou'] || iîîiíïi['health'] <= 0x0);
}

function K(iìíïîíì) {
    const iìiííii = p();
    return iìíïîíì['isPlayer'] && iìíïîíì['isYou'] || !iìíïîíì['active'] ? !0x1 : !iìíïîíì['team'] || iìíïîíì['team'] !== iìiííii['team'];
}

function ve(iììííií) {
    const iîïìîîî = p(),
        iííïíïî = 0.1;
    let iïïiiîì = Math['max'](iííïíïî, Math['min'](iììííií[d['frame']], $()['dltMx'])) / iîïìîîî['deltaDiv'];
    return (!iïïiiîì || iïïiiîì < iííïíïî) && (iïïiiîì = iííïíïî), iïïiiîì;
}

function Et(iìiìíïí) {
    let iiíiìîï = p()['reloadTimer'];
    return iiíiìîï > 0x0 && (iiíiìîï -= iìiìíïí, iiíiìîï <= 0x0 && (iiíiìîï = 0x0)), iiíiìîï;
}

function bt(iíííííì) {
    let iïìíïiì = p()['swapTime'];
    return iïìíïiì > 0x0 && (iïìíïiì -= iíííííì, iïìíïiì < 0x0 && (iïìíïiì = 0x0)), iïìíïiì;
}

function Ce(iìiìïìí) {
    const iîiïíîì = p();
    let iîîíïíi = iîiïíîì['reloads'][iîiïíîì['loadoutIndex']];
    return iîîíïíi && (iîîíïíi -= iìiìïìí, iîîíïíi < 0x0 && (iîîíïíi = 0x0)), iîîíïíi;
}

function Rt() {
    const iiííiíi = p(),
        iìîïiìï = E();
    let iìïiìîï = 0x1;
    return iiííiíi['weapon'] && iiííiíi['weapon']['rateChrg'] && (iìïiìîï = 0x1 - Math['min'](0x1, iiííiíi['chargeTime'] / iiííiíi['weapon']['chrgTime']), iìîïiìï['mode']['forceCharge'] && (iìïiìîï = 0x0), iìïiìîï = Math['max'](0.7, 1.5 * iìïiìîï)), iìïiìîï;
}

function kt() {
    const iíìîìïí = p(),
        iíìiíîì = E();
    return (iíìîìïí['burstCount'] && iíìîìïí['weapon']['burst'] ? iíìîìïí['weapon']['burstR'] : iíìîìïí['weapon']['rate']) * (iíìiíîì['config']['fiRat'] || 0x1) * iíìîìïí['attributes']['fRate'] * (iíìîìïí['perks']['includes'](0x1) ? 0.66 : 0x1) * (iíìîìïí['isKranked'] ? iíìiíîì['mode']['bonuses']['firerate'] : 0x1) * Rt();
}

function Me() {
    return document['getElementById']('endUI')?.['style']['display'] !== 'none' || document['getElementById']('menuHolder')?.['style']['display'] !== 'none';
}

function wt(iííììiî) {
    if (iííììiî < 0x0 || iííììiî > 0x1) throw new Error('Smooth\x20factor\x20must\x20be\x20between\x200.0\x20and\x201.0');
    return 0x1 - 0.99 * iííììiî;
}

function Se(iíìîîïí, iîïíìïì, iiìiïìi) {
    const iïiïîîí = wt(iiìiïìi);
    return iíìîîïí['setX'](iîïíìïì['x'] + we(iîïíìïì['x'], iíìîîïí['x']) * iïiïîîí), iíìîîïí['setY'](iîïíìïì['y'] + we(iîïíìïì['y'], iíìîîïí['y']) * iïiïîîí), iíìîîïí;
}

function xe({
    attention: iíiïîiï,
    children: iíîiîîî
}) {
    return React['createElement'](React['Fragment'], null, iíîiîîî, '\x20', iíiïîiï && React['createElement']('span', {
        'style': {
            'color': '#eb5656'
        }
    }, '*'));
}

function Tt({
    description: iììiïïî,
    children: iíìïiiï
}) {
    return React['createElement']('div', {
        'className': 'settName',
        'title': iììiïïî
    }, iíìïiiï);
}

function L({
    title: iîiïiiì,
    description: iíîìîii,
    attention: iîiíìíì,
    children: iìiïííï
}) {
    return React['createElement']('div', {
        'className': 'settName',
        'title': iíîìîii
    }, iîiïiiì ? React['createElement'](React['Fragment'], null, React['createElement'](xe, {
        'attention': iîiíìíì
    }, iîiïiiì), '\x20', iìiïííï) : iìiïííï);
}

function G({
    bind: iíiîiïï,
    reset: iìiììîî,
    unbind: iìììîïî,
    setBind: iîìíiìi
}) {
    const [iïïíîìi, iìïìïïi] = React['useState'](!0x1);
    return React['useEffect'](() => {
        if (!iïïíîìi) return;
        const iïîììíí = iîîiiìì => {
            iìïìïïi(!0x1), iîìíiìi(Re(iîîiiìì)), iîîiiìì['preventDefault']();
        };
        return window['addEventListener']('mousedown', iïîììíí, {
            'once': !0x0
        }), window['addEventListener']('keydown', iïîììíí, {
            'once': !0x0
        }), () => {
            window['removeEventListener']('mousedown', iïîììíí), window['removeEventListener']('keydown', iïîììíí);
        };
    }, [iïïíîìi]), React['createElement']('div', {
        'style': {
            'float': 'right'
        }
    }, React['createElement']('span', {
        'className': 'reset',
        'title': 'Reset\x20Bind',
        'onClick': () => iìiììîî()
    }, React['createElement']('i', {
        'className': 'material-icons',
        'style': {
            'fontSize': '40px',
            'color': 'var(--yellow)'
        }
    }, 'refresh')), React['createElement']('span', {
        'className': 'unbind',
        'title': 'Unbind',
        'onClick': () => iìììîïî()
    }, React['createElement']('i', {
        'className': 'material-icons',
        'style': {
            'fontSize': '40px',
            'color': 'var(--red)'
        }
    }, 'delete_forever')), React['createElement']('span', {
        'className': 'settText\x20floatRNoC\x20keyIcon',
        'onMouseOver': () => playTick(),
        'onClick': () => iìïìïïi(!0x0)
    }, iïïíîìi ? 'Press\x20any\x20Key' : st(iíiîiïï)));
}

function Y({
    title: iìiîiïi,
    attention: iîííìií,
    description: iííîîíï,
    children: iîíììiî
}) {
    const iìiïïíï = [];
    if (Array['isArray'](iîíììiî))
        for (let iìiíîîî = 0x0; iìiíîîî < iîíììiî['length']; iìiíîîî++) iìiïïíï['push'](React['createElement'](React['Fragment'], {
            'key': iìiíîîî
        }, iîíììiî[iìiíîîî])), iìiíîîî + 0x1 !== iîíììiî['length'] && iìiïïíï['push'](React['createElement']('div', {
            'className': 'bindSep',
            'key': iìiíîîî + '_sep'
        }));
    else iìiïïíï['push'](iîíììiî);
    return React['createElement'](L, {
        'title': iìiîiïi,
        'attention': iîííìií,
        'description': iííîîíï
    }, iìiïïíï);
}

function Ae({
    title: iìíîïíì,
    attention: iïiiïíì,
    description: iíîïiïí,
    children: iïïiïíì,
    defaultValue: iïiìïíì,
    value: iìîììîî,
    onChange: iiîíìiî
}) {
    return React['createElement'](L, {
        'title': iìíîïíì,
        'attention': iïiiïíì,
        'description': iíîïiïí
    }, React['createElement']('select', {
        'className': 'inputGrey2',
        'value': iìîììîî,
        'defaultValue': iïiìïíì,
        'onChange': iiîíìiî
    }, iïïiïíì));
}

function C({
    title: iiíiîíî,
    children: iîiiiií
}) {
    const [iiíiìíi, iiìiïìí] = React['useState'](!0x1);
    return React['createElement'](React['Fragment'], null, React['createElement']('div', {
        'className': 'setHed',
        'onClick': () => iiìiïìí(!iiíiìíi)
    }, React['createElement']('span', {
        'className': 'material-icons\x20plusOrMinus'
    }, iiíiìíi ? 'keyboard_arrow_right' : 'keyboard_arrow_down'), '\x20', iiíiîíî), React['createElement']('div', {
        'className': 'setBodH',
        'style': {
            'display': iiíiìíi ? 'none' : void 0x0
        }
    }, iîiiiií));
}

function Oe({
    children: iïíìííí
}) {
    return React['createElement']('div', {
        'className': 'setBodH'
    }, iïíìííí);
}

function U({
    title: iìíïiìí,
    attention: iìiìiiì,
    description: iííîiîí,
    defaultValue: iìîììíî,
    min: iïîíîïi,
    max: iíîîíiï,
    step: iïìíìíí,
    onChange: iìiìïïí
}) {
    const iiiìíii = React['useRef'](null),
        iìííïiï = React['useRef'](null);
    return React['createElement'](L, {
        'title': iìíïiìí,
        'attention': iìiìiiì,
        'description': iííîiîí
    }, React['createElement']('input', {
        'type': 'number',
        'className': 'sliderVal',
        'min': iïîíîïi,
        'max': iíîîíiï,
        'step': iïìíìíí,
        'defaultValue': typeof iìîììíî == 'number' ? iìîììíî['toString']() : iìîììíî,
        'onChange': iîîìïïì => {
            iìííïiï['current'] && (iìííïiï['current']['valueAsNumber'] = iîîìïïì['currentTarget']['valueAsNumber']), iìiìïïí && iìiìïïí['call'](void 0x0, iîîìïïì);
        },
        'ref': iiiìíii,
        'style': {
            'marginRight': 0x0,
            'borderWidth': 0x0
        }
    }), React['createElement']('div', {
        'className': 'slidecontainer',
        'style': {
            'marginTop': -0x8
        }
    }, React['createElement']('input', {
        'className': 'sliderM',
        'type': 'range',
        'defaultValue': typeof iìîììíî == 'number' ? iìîììíî['toString']() : iìîììíî,
        'min': iïîíîïi,
        'max': iíîîíiï,
        'step': iïìíìíí,
        'onChange': iiííïïï => {
            iiiìíii['current'] && (iiiìíii['current']['valueAsNumber'] = iiííïïï['currentTarget']['valueAsNumber']), iìiìïïí && iìiìïïí['call'](void 0x0, iiííïïï);
        },
        'ref': iìííïiï
    })));
}

function y({
    title: iîîíïíí,
    attention: iîììîîí,
    description: iïìïìíï,
    checked: iíïiïïï,
    defaultChecked: iiïììíí,
    onChange: iiîîiïî
}) {
    return React['createElement'](L, {
        'title': iîîíïíí,
        'attention': iîììîîí,
        'description': iïìïìíï
    }, React['createElement']('label', {
        'className': 'switch',
        'style': {
            'marginLeft': 0xa
        }
    }, React['createElement']('input', {
        'type': 'checkbox',
        'onChange': iiîîiïî,
        'checked': iíïiïïï,
        'defaultChecked': iiïììíí
    }), React['createElement']('span', {
        'className': 'slider'
    })));
}
var J = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};

function vt(iîìîíîî) {
    return iîìîíîî && iîìîíîî['__esModule'] && Object['prototype']['hasOwnProperty']['call'](iîìîíîî, 'default') ? iîìîíîî['default'] : iîìîíîî;
}
var Ct = Math['floor'],
    Mt = Math['random'];

function St(iiíìîïi, iïìïiíì) {
    return iiíìîïi + Ct(Mt() * (iïìïiíì - iiíìîïi + 0x1));
}
var xt = St;

function At(iîïïïìí, iîîîiií) {
    return iîïïïìí === iîîîiií || iîïïïìí !== iîïïïìí && iîîîiií !== iîîîiií;
}
var Ot = At,
    Nt = typeof J == 'object' && J && J['Object'] === Object && J,
    It = Nt,
    Ft = It,
    Lt = typeof self == 'object' && self && self['Object'] === Object && self,
    _t = Ft || Lt || Function('return\x20this')(),
    Pt = _t,
    jt = Pt,
    Dt = jt['Symbol'],
    Ne = Dt,
    Ie = Ne,
    Fe = Object['prototype'],
    $t = Fe['hasOwnProperty'],
    Ut = Fe['toString'],
    H = Ie ? Ie['toStringTag'] : void 0x0;

function Ht(iiîïiiî) {
    var iíiiïíi = $t['call'](iiîïiiî, H),
        iìíîíiï = iiîïiiî[H];
    try {
        iiîïiiî[H] = void 0x0;
        var iìïíîìî = !0x0;
    } catch {}
    var iíiíiiì = Ut['call'](iiîïiiî);
    return iìïíîìî && (iíiiïíi ? iiîïiiî[H] = iìíîíiï : delete iiîïiiî[H]), iíiíiiì;
}
var Bt = Ht,
    Vt = Object['prototype'],
    Wt = Vt['toString'];

function Kt(iïîiìíï) {
    return Wt['call'](iïîiìíï);
}
var Gt = Kt,
    Le = Ne,
    Yt = Bt,
    Jt = Gt,
    zt = '[object\x20Null]',
    Xt = '[object\x20Undefined]',
    _e = Le ? Le['toStringTag'] : void 0x0;

function qt(iîîîiìî) {
    return iîîîiìî == null ? iîîîiìî === void 0x0 ? Xt : zt : _e && _e in Object(iîîîiìî) ? Yt(iîîîiìî) : Jt(iîîîiìî);
}
var Pe = qt;

function Qt(iiïîìiî) {
    var iìììîìì = typeof iiïîìiî;
    return iiïîìiî != null && (iìììîìì == 'object' || iìììîìì == 'function');
}
var oe = Qt,
    Zt = Pe,
    en = oe,
    tn = '[object\x20AsyncFunction]',
    nn = '[object\x20Function]',
    rn = '[object\x20GeneratorFunction]',
    on = '[object\x20Proxy]';

function an(iîììïii) {
    if (!en(iîììïii)) return !0x1;
    var iîíìïìi = Zt(iîììïii);
    return iîíìïìi == nn || iîíìïìi == rn || iîíìïìi == tn || iîíìïìi == on;
}
var cn = an,
    sn = 0x1fffffffffffff;

function ln(iïïììíï) {
    return typeof iïïììíï == 'number' && iïïììíï > -0x1 && iïïììíï % 0x1 == 0x0 && iïïììíï <= sn;
}
var un = ln,
    dn = cn,
    fn = un;

function hn(iíiîíîî) {
    return iíiîíîî != null && fn(iíiîíîî['length']) && !dn(iíiîíîî);
}
var mn = hn,
    gn = 0x1fffffffffffff,
    pn = /^(?:0|[1-9]\d*)$/;

function yn(iììïìiï, iíiììîi) {
    var iîîîîïi = typeof iììïìiï;
    return iíiììîi = iíiììîi ?? gn, !!iíiììîi && (iîîîîïi == 'number' || iîîîîïi != 'symbol' && pn['test'](iììïìiï)) && iììïìiï > -0x1 && iììïìiï % 0x1 == 0x0 && iììïìiï < iíiììîi;
}
var En = yn,
    bn = Ot,
    Rn = mn,
    kn = En,
    wn = oe;

function Tn(iììïìií, iïïïíìì, iïîïíìî) {
    if (!wn(iïîïíìî)) return !0x1;
    var iïìïììì = typeof iïïïíìì;
    return (iïìïììì == 'number' ? Rn(iïîïíìî) && kn(iïïïíìì, iïîïíìî['length']) : iïìïììì == 'string' && iïïïíìì in iïîïíìî) ? bn(iïîïíìî[iïïïíìì], iììïìií) : !0x1;
}
var vn = Tn,
    Cn = /\s/;

function Mn(iìîìîii) {
    for (var iiìïîîï = iìîìîii['length']; iiìïîîï-- && Cn['test'](iìîìîii['charAt'](iiìïîîï)););
    return iiìïîîï;
}
var Sn = Mn,
    xn = Sn,
    An = /^\s+/;

function On(iíiíiìì) {
    return iíiíiìì && iíiíiìì['slice'](0x0, xn(iíiíiìì) + 0x1)['replace'](An, '');
}
var Nn = On;

function In(iiîììîï) {
    return iiîììîï != null && typeof iiîììîï == 'object';
}
var Fn = In,
    Ln = Pe,
    _n = Fn,
    Pn = '[object\x20Symbol]';

function jn(iíìiiíî) {
    return typeof iíìiiíî == 'symbol' || _n(iíìiiíî) && Ln(iíìiiíî) == Pn;
}
var Dn = jn,
    $n = Nn,
    je = oe,
    Un = Dn,
    De = 0x0 / 0x0,
    Hn = /^[-+]0x[0-9a-f]+$/i,
    Bn = /^0b[01]+$/i,
    Vn = /^0o[0-7]+$/i,
    Wn = parseInt;

function Kn(iíiìïìi) {
    if (typeof iíiìïìi == 'number') return iíiìïìi;
    if (Un(iíiìïìi)) return De;
    if (je(iíiìïìi)) {
        var iììiiïi = typeof iíiìïìi['valueOf'] == 'function' ? iíiìïìi['valueOf']() : iíiìïìi;
        iíiìïìi = je(iììiiïi) ? iììiiïi + '' : iììiiïi;
    }
    if (typeof iíiìïìi != 'string') return iíiìïìi === 0x0 ? iíiìïìi : +iíiìïìi;
    iíiìïìi = $n(iíiìïìi);
    var iïïîîïí = Bn['test'](iíiìïìi);
    return iïïîîïí || Vn['test'](iíiìïìi) ? Wn(iíiìïìi['slice'](0x2), iïïîîïí ? 0x2 : 0x8) : Hn['test'](iíiìïìi) ? De : +iíiìïìi;
}
var Gn = Kn,
    Yn = Gn,
    $e = 0x1 / 0x0,
    Jn = 0xfffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

function zn(iíïííii) {
    if (!iíïííii) return iíïííii === 0x0 ? iíïííii : 0x0;
    if (iíïííii = Yn(iíïííii), iíïííii === $e || iíïííii === -$e) {
        var iííïìïï = iíïííii < 0x0 ? -0x1 : 0x1;
        return iííïìïï * Jn;
    }
    return iíïííii === iíïííii ? iíïííii : 0x0;
}
var Xn = zn,
    qn = xt,
    Qn = vn,
    Ue = Xn,
    Zn = parseFloat,
    er = Math['min'],
    tr = Math['random'];

function nr(iîiìïïi, iïiïìíì, iííîïîí) {
    if (iííîïîí && typeof iííîïîí != 'boolean' && Qn(iîiìïïi, iïiïìíì, iííîïîí) && (iïiïìíì = iííîïîí = void 0x0), iííîïîí === void 0x0 && (typeof iïiïìíì == 'boolean' ? (iííîïîí = iïiïìíì, iïiïìíì = void 0x0) : typeof iîiìïïi == 'boolean' && (iííîïîí = iîiìïïi, iîiìïïi = void 0x0)), iîiìïïi === void 0x0 && iïiïìíì === void 0x0 ? (iîiìïïi = 0x0, iïiïìíì = 0x1) : (iîiìïïi = Ue(iîiìïïi), iïiïìíì === void 0x0 ? (iïiïìíì = iîiìïïi, iîiìïïi = 0x0) : iïiïìíì = Ue(iïiïìíì)), iîiìïïi > iïiïìíì) {
        var iìîiïìï = iîiìïïi;
        iîiìïïi = iïiïìíì, iïiïìíì = iìîiïìï;
    }
    if (iííîïîí || iîiìïïi % 0x1 || iïiïìíì % 0x1) {
        var iììîiîi = tr();
        return er(iîiìïïi + iììîiîi * (iïiïìíì - iîiìïïi + Zn('1e-' + ((iììîiîi + '')['length'] - 0x1))), iïiïìíì);
    }
    return qn(iîiìïïi, iïiïìíì);
}
var rr = nr,
    _ = vt(rr);

function or(iiïiïîï, iíîíííi, iíîïîìî) {
    return iiïiïîï['distanceTo'](iíîíííi) <= iíîïîìî;
}

function ar(iiíïìîï, iíiïîîi, iíìïìïí) {
    iiíïìîï['beginPath'](), iiíïìîï['arc'](iíiïîîi['x'], iíiïîîi['y'], iíìïìïí, 0x0, Math['PI2']), iiíïìîï['strokeStyle'] = 'red', iiíïìîï['lineWidth'] = 0x2, iiíïìîï['stroke']();
}

function He(iiìiîiì) {
    const iíiîiii = u['get']('hitbox'),
        iïïìîíï = $(),
        {
            THREE: iîîïìíí
        } = E(),
        iîiîïíi = iíiîiii === 'head' ? iïïìîíï['headScale'] / 0x2 : iïïìîíï['playerHeight'] - iïïìîíï['headScale'] - iïïìîíï['legHeight'];
    return new iîîïìíí['Vector3'](iiìiîiì['x'], iiìiîiì['y'] + iiìiîiì['height'] - iîiîïíi - iiìiîiì['crouchVal'] * iïïìîíï['crouchDst'], iiìiîiì['z']);
}

function ir(iïîiïìï, iiïìïîí) {
    const iiíiíií = u['get']('aimbot'),
        iíîìïïi = u['get']('smoothFactor'),
        iììiïíí = E(),
        iiïìíiì = T(),
        iìiïïîì = p(),
        iïíîíïí = $(),
        {
            THREE: iîìiíîi
        } = iiïìíiì;
    return iïîiïìï['setX']((pt(iììiïíí['controls']['object']['position']['x'], iììiïíí['controls']['object']['position']['y'], iììiïíí['controls']['object']['position']['z'], iiïìïîí['x'], iiïìïîí['y'], iiïìïîí['z']) || 0x0) - iìiïïîì['recoilAnimY'] * iïíîíïí['recoilMlt']), iïîiïìï['setY'](yt(iììiïíí['controls']['object']['position']['z'], iììiïíí['controls']['object']['position']['x'], iiïìïîí['z'], iiïìïîí['x']) || 0x0), iiíiíií === 'smooth' && Se(iïîiïìï, new iîìiíîi['Vector2'](iììiïíí['controls']['pchObjc']['rotation']['x'], iììiïíí['controls']['object']['rotation']['y']), iíîìïïi), iïîiïìï;
}

function Be(iîïiíìï) {
    return !(!Te(iîïiíìï) || !K(iîïiíìï) || !iîïiíìï['canBSeen']);
}

function Ve(iííìîiì, iïiíïíï) {
    const iíìíïîî = T();
    if (u['get']('fovCheck')) {
        if (!iíìíïîî['frustum']['containPoint'](iííìîiì)) return !0x1;
        const iíiîíii = u['get']('fovRadius');
        if (!or(W(iííìîiì), iïiíïíï, iíiîíii)) return !0x1;
    }
    return !0x0;
}

function cr() {
    let iíïïiíì = 0x0;
    Z['push'](() => {
        const iïìîíìí = u['get']('drawFOV');
        if (!iïìîíìí || Me() || !p()['active'] && !window['spectating']) return;
        const iîïìîîí = u['get']('fovRadius'),
            iííiïïí = O();
        if (iïìîíìí) {
            iííiïïí['ctx']['save'](), iííiïïí['ctx']['scale'](iííiïïí['scale'], iííiïïí['scale']);
            const {
                THREE: iîiïïíï
            } = E(), iîîìíií = new iîiïïíï['Vector2'](innerWidth / iííiïïí['scale'] / 0x2, innerHeight / iííiïïí['scale'] / 0x2);
            ar(iííiïïí['ctx'], iîîìíií, iîïìîîí), iííiïïí['ctx']['restore']();
        }
    }), A['push'](iîïîîìî => {
        if (!u['get']('bot')) return;
        const iííïiíì = p();
        iííïiíì['ammos'][iííïiíì['loadoutIndex']] ? iíïïiíì = 0x0 : (iíïïiíì === 0x0 || iîïîîìî[d['frame']] < iíïïiíì) && (iîïîîìî[d['reload']] = 0x1, iíïïiíì === 0x0 && (iíïïiíì = iîïîîìî[d['frame']] + _(0x3, 0x8)));
    });
    let iïïîiìí, iîiìîïì = !0x1;
    A['push'](iïíìiïí => {
        const iiïííïï = u['get']('aimbot'),
            iîíiíïi = u['get']('aimKey'),
            iìîíiìì = E(),
            {
                THREE: iiîíiîí
            } = iìîíiìì;
        if (iiïííïï === 'off' || iîíiíïi !== -0x1 && iìîíiìì['controls']['keys'][iîíiíïi] !== 0x1) {
            iïïîiìí = void 0x0, iîiìîïì = !0x1;
            return;
        }
        const iíïïîìï = p(),
            iïïïíiî = u['get']('bot');
        if (iïïïíiî) {
            if (iíïïîìï['weapon']['noAim'] === !0x1 && (iïíìiïí[d['scope']] = 0x1, iíïïîìï['aimVal'])) return;
        } else switch (iiïííïï) {
            case 'silent':
                if (!iïïïíiî && !iïíìiïí[d['shoot']]) return;
                break;
            case 'smooth':
                if (!iïíìiïí[d['scope']]) return;
                break;
        }
        if (iiïííïï === 'silent') {
            const iiïiìíï = ve(iïíìiïí);
            if (Ce(iiïiìíï) > 0x0 || bt(iiïiìíï) > 0x0 || Et(iiïiìíï) > 0x0) return;
        }
        iïïîiìí && !Be(iïïîiìí) && (iïïîiìí = void 0x0);
        let iîiîïíì;
        const iìïîíïì = O(),
            iîììiìì = new iiîíiîí['Vector2'](innerWidth / iìïîíïì['scale'] / 0x2, innerHeight / iìïîíïì['scale'] / 0x2);
        iïïîiìí && (iîiîïíì = He(iïïîiìí), Ve(iîiîïíì, iîììiìì) || (iîiîïíì = void 0x0, iïïîiìí = void 0x0));
        const iíïiíii = !u['get']('targetOnAimKey') || iîíiíïi === -0x1 || !iîiìîïì;
        if (iîiìîïì = !0x0, !iïïîiìí && iíïiíii) {
            const iîîïïïï = T(),
                iïîiiìï = u['get']('fovCheck'),
                iïïîîií = iìîíiìì['players']['list']['filter'](Be)['map'](iíiíiîï => ({
                    'player': iíiíiîï,
                    'point': He(iíiíiîï)
                }))['filter'](({
                    point: iiiïîîì
                }) => Ve(iiiïîîì, iîììiìì))['map'](({
                    player: iììïïii,
                    point: iïïïïïì
                }) => ({
                    'player': iììïïii,
                    'screen': W(iïïïïïì),
                    'point': iïïïïïì,
                    'inFrustum': iïîiiìï ? !0x1 : iîîïïïï['frustum']['containsPoint'](iïïïïïì)
                }))['sort']((iiiiîìî, iììïîìí) => {
                    const iiîìîií = iiiiîìî['screen']['distanceTo'](iîììiìì) - iììïîìí['screen']['distanceTo'](iîììiìì);
                    if (!iïîiiìï) {
                        const iìïíìiî = iiiiîìî['inFrustum'] ? 0x0 : 0x1,
                            iíïiiîì = iììïîìí['inFrustum'] ? 0x0 : 0x1;
                        return iiîìîií + iìïíìiî - iíïiiîì;
                    }
                    return iiîìîií;
                })[0x0];
            iïïîîií && (iïïîiìí = iïïîîií['player'], iîiîïíì = iïïîîií['point']);
        }
        if (iîiîïíì) {
            iïïïíiî && (iïíìiïí[d['shoot']] = 0x1);
            const iíïííïï = new iiîíiîí['Vector2'](iïíìiïí[d['xDir']] / 0x3e8, iïíìiïí[d['yDir']] / 0x3e8);
            ir(iíïííïï, iîiîïíì);
            const iìiïiiì = T();
            iiïííïï === 'silent' ? (iïïïíiî && (iïíìiïí[d['moveDir']] = -0x1), iïíìiïí[d['xDir']] = iíïííïï['x'] * 0x3e8, iïíìiïí[d['yDir']] = iíïííïï['y'] * 0x3e8) : (iìîíiìì['controls']['pchObjc']['rotation']['x'] = iíïííïï['x'], iìîíiìì['controls']['object']['rotation']['y'] = iíïííïï['y'], iìiïiiì['updateFrustum']());
        }
    });
}

function sr() {
    const [iîiïïïï, iïîíiìï] = f('aimbot'), [iiiîïîì, iîíïïiï] = f('bot'), [iïiîiîì, iïiíïîî] = f('fovCheck'), [iííííîï, iìîïíií] = f('wallbangs'), [iïîiíìí, iìíìîîï] = f('hitbox'), [iìíiïïï, iìíìïîì] = f('aimKey'), [iïîîîíi, iìiìîïi] = f('smoothFactor'), [iíiïiîì, iiíîîíï] = f('fovRadius'), [iìiííiì, iïïïiìï] = f('drawFOV'), [iìïîïiï, iiîìiíì] = f('targetOnAimKey');
    return React['createElement'](React['Fragment'], null, React['createElement'](C, {
        'title': 'Aimbot'
    }, React['createElement'](Y, {
        'title': 'Aim\x20Key'
    }, React['createElement'](G, {
        'bind': iìíiïïï,
        'setBind': iïìïîiì => iìíìïîì(iïìïîiì),
        'reset': () => iìíìïîì(),
        'unbind': () => iìíìïîì(-0x1)
    })), React['createElement'](Ae, {
        'title': 'Aimbot',
        'defaultValue': iîiïïïï,
        'onChange': iíiiïíï => iïîíiìï(iíiiïíï['currentTarget']['value'])
    }, React['createElement']('option', {
        'value': 'off'
    }, 'Off'), React['createElement']('option', {
        'value': 'smooth'
    }, 'Assist'), React['createElement']('option', {
        'value': 'silent'
    }, 'Silent')), React['createElement'](y, {
        'title': 'Target\x20on\x20Aim\x20Key',
        'description': 'Picks\x20a\x20target\x20as\x20soon\x20as\x20the\x20aim\x20key\x20is\x20pressed,\x20and\x20won\x27t\x20lock\x20onto\x20a\x20new\x20target\x20until\x20it\x27s\x20pressed\x20again.',
        'defaultChecked': iìïîïiï,
        'onChange': iiíîíiì => iiîìiíì(iiíîíiì['currentTarget']['checked'])
    }), React['createElement'](U, {
        'title': 'Smooth\x20Factor',
        'description': 'Controls\x20the\x20speed\x20of\x20the\x20aimbot\x27s\x20rotation',
        'defaultValue': iïîîîíi,
        'min': 0x0,
        'max': 0x1,
        'step': 0.05,
        'onChange': iíïíìîì => iìiìîïi(iíïíìîì['currentTarget']['valueAsNumber'])
    }), React['createElement'](y, {
        'title': 'Wallbangs',
        'defaultChecked': iííííîï,
        'onChange': iïíìïiì => iìîïíií(iïíìïiì['currentTarget']['checked'])
    }), React['createElement'](Ae, {
        'title': 'Hitbox',
        'description': 'Automatically\x20aim\x20and\x20fire\x20at\x20players',
        'defaultValue': iïîiíìí,
        'onChange': iïííïîí => iìíìîîï(iïííïîí['currentTarget']['value'])
    }, React['createElement']('option', {
        'value': 'head'
    }, 'Head'), React['createElement']('option', {
        'value': 'chest'
    }, 'Chest'))), React['createElement'](C, {
        'title': 'FOV'
    }, React['createElement'](y, {
        'title': 'FOV\x20check',
        'description': 'Checks\x20if\x20enemies\x20are\x20in\x20your\x20field\x20of\x20view',
        'defaultChecked': iïiîiîì,
        'onChange': iiíììïî => iïiíïîî(iiíììïî['currentTarget']['checked'])
    }), React['createElement'](U, {
        'title': 'FOV\x20Radius',
        'description': 'Controls\x20the\x20aimbot\x20FOV',
        'defaultValue': iíiïiîì,
        'min': 0xa,
        'max': 0x1f4,
        'step': 0x5,
        'onChange': iìïiíîì => iiíîîíï(iìïiíîì['currentTarget']['valueAsNumber'])
    }), React['createElement'](y, {
        'title': 'Show\x20FOV',
        'description': 'Visualizes\x20your\x20FOV',
        'defaultChecked': iìiííiì,
        'onChange': iííïìíi => iïïïiìï(iííïìíi['currentTarget']['checked'])
    })), React['createElement'](C, {
        'title': 'Rage'
    }, React['createElement'](y, {
        'title': 'Turret',
        'description': 'Automatically\x20aim\x20and\x20fire\x20at\x20players',
        'defaultChecked': iiiîïîì,
        'onChange': iìîiiîî => iîíïïiï(iìîiiîî['currentTarget']['checked'])
    })));
}

function ae() {
    return _(-0.015, 0.005, !0x0);
}

function lr() {
    const iîììîïí = p();
    return u['get']('wallJump') && E()['classConfig'][p()['classIndex']]?.['wallJ'] && iîììîïí['wallJump'] && iîììîïí['onWall'] || iîììîïí['onGround'];
}

function ur() {
    let iiíìíîì = ae(),
        iììíiìï = ae(),
        iîíîîîî = !0x1,
        iiiíîìï = 0x0,
        iîîììïì = 0x0;
    const iiïïììí = 0xaa;
    A['push'](iîìïìîï => {
        const iïîiíïi = p();
        if (u['get']('bhop') && iîìïìîï[d['jump']]) {
            const iìiiìîï = Date['now']();
            if (iiiíîìï <= iìiiìîï && (iiiíîìï = 0x0, iîîììïì = 0x0), !iiiíîìï && lr()) iiiíîìï = iìiiìîï + iiïïììí + _(0x0, 0x14), iîîììïì = iîìïìîï[d['frame']] + _(0x1, 0x3), iîìïìîï[d['jump']] = 0x0;
            else {
                const iìíîîîî = iîìïìîï[d['frame']] >= iîîììïì && iìiiìîï < iiiíîìï;
                iîìïìîï[d['jump']] = iìíîîîî ? 0x1 : 0x0;
            }
        } else iiiíîìï = 0x0, iîîììïì = 0x0;
        if (u['get']('slidehop') && iîìïìîï[d['crouch']]) {
            iîíîîîî || (iiíìíîì = iììíiìï);
            const iiììííî = !iïîiíïi['onGround'] && (iïîiíïi['velocity']['y'] || 0x0) < iiíìíîì;
            iîìïìîï[d['crouch']] = iiììííî ? 0x1 : 0x0, !iîíîîîî && iiììííî && (iììíiìï = ae()), iîíîîîî = iiììííî;
        } else iîíîîîî = !0x1;
    });
}

function dr() {
    const [iiiïîíï, iîïïìïî] = f('bhop'), [iîïïïïi, iïiíiii] = f('slidehop'), [iíïïïìì, iììîííi] = f('wallJump');
    return React['createElement'](React['Fragment'], null, React['createElement'](y, {
        'title': 'Bhop',
        'description': 'Hold\x20space\x20to\x20bhop',
        'defaultChecked': iiiïîíï,
        'onChange': iîïiiîï => iîïïìïî(iîïiiîï['currentTarget']['checked'])
    }), React['createElement'](y, {
        'title': 'Slidehop',
        'description': 'Hold\x20crouch\x20to\x20slidehop',
        'defaultChecked': iîïïïïi,
        'onChange': iîíîíïï => iïiíiii(iîíîíïï['currentTarget']['checked'])
    }), React['createElement'](y, {
        'title': 'Wall\x20Jump',
        'description': 'If\x20bhop\x20should\x20also\x20automatically\x20jump\x20on\x20walls.\x20Bhop\x20must\x20be\x20enabled.',
        'defaultChecked': iíïïïìì,
        'onChange': iîíìììi => iììîííi(iîíìììi['currentTarget']['checked'])
    }));
}
class We {
    ['xMin'];
    ['xMax'];
    ['yMin'];
    ['yMax'];
    constructor(iìîiíîî, iìïiìïì, iíïîíiì, iìíïîiî) {
        this['xMin'] = iìîiíîî, this['xMax'] = iìïiìïì, this['yMin'] = iíïîíiì, this['yMax'] = iìíïîiî;
    }
    get['left']() {
        return this['xMin'];
    }
    get['top']() {
        return this['yMax'];
    }
    get['right']() {
        return this['xMax'];
    }
    get['bottom']() {
        return this['yMin'];
    }
    get['width']() {
        return this['xMax'] - this['xMin'];
    }
    get['height']() {
        return this['yMin'] - this['yMax'];
    }
    get['x']() {
        return this['left'] + this['width'] / 0x2;
    }
    get['y']() {
        return this['top'] + this['height'] / 0x2;
    }
}

function fr(iïììiîì) {
    const iîïìîií = $(),
        iîîïìîí = O(),
        iîììiîï = T();
    if (iïììiîì['isPlayer']) {
        const iìíìiií = (0x2 * iîïìîií['armScale'] + iîïìîií['chestWidth'] + iîïìîií['armInset']) / 0x2;
        let iìíííìí = 0x1 / 0x0,
            iìïïîìì = -0x1 / 0x0,
            iìïíiíì = 0x1 / 0x0,
            iííîiìí = -0x1 / 0x0;
        if (!iïììiîì['objInstances']) return;
        for (let iìíììïî = -0x1; iìíììïî < 0x2; iìíììïî += 0x2)
            for (let iîììïií = -0x1; iîììïií < 0x2; iîììïií += 0x2)
                for (let iiïììîì = 0x0; iiïììîì < 0x2; iiïììîì++) {
                    const iïïiîìí = iïììiîì['objInstances']['position']['clone']();
                    if (iïïiîìí['x'] += iìíììïî * iìíìiií, iïïiîìí['z'] += iîììïií * iìíìiií, iïïiîìí['y'] += iiïììîì * (iïììiîì['height'] - iïììiîì['crouchVal'] * iîïìîií['crouchDst']), !iîììiîï['frustum']['containPoint'](iïïiîìí)) return;
                    iïïiîìí['project'](iîììiîï['camera']), iìíííìí = Math['min'](iìíííìí, iïïiîìí['x']), iìïïîìì = Math['max'](iìïïîìì, iïïiîìí['x']), iìïíiíì = Math['min'](iìïíiíì, iïïiîìí['y']), iííîiìí = Math['max'](iííîiìí, iïïiîìí['y']);
                }
        iìíííìí = (iìíííìí + 0x1) / 0x2, iìïïîìì = (iìïïîìì + 0x1) / 0x2, iìïíiíì = (iìïíiíì + 0x1) / 0x2, iííîiìí = (iííîiìí + 0x1) / 0x2, iìïíiíì = -(iìïíiíì - 0.5) + 0.5, iííîiìí = -(iííîiìí - 0.5) + 0.5;
        const iíiìîíï = iîîïìîí['canvas']['width'] / iîîïìîí['scale'],
            iîîïìíï = iîîïìîí['canvas']['height'] / iîîïìîí['scale'];
        return iìíííìí *= iíiìîíï, iìïïîìì *= iíiìîíï, iìïíiíì *= iîîïìíï, iííîiìí *= iîîïìíï, new We(iìíííìí, iìïïîìì, iìïíiíì, iííîiìí);
    } else {
        if (!T()['frustum']['containPoint'](re(iïììiîì))) return;
        const iiíïíìí = W(re(iïììiîì)),
            iìíïìîi = W(re(iïììiîì), iïììiîì['height']),
            iiïîïiï = ~~(~~(iiíïíìí['y'] - iìíïìîi['y']) * 0.6);
        return new We(iiíïíìí['x'] - iiïîïiï / 0x2, iiíïíìí['x'] + iiïîïiï / 0x2, iìíïìîi['y'], iiíïíìí['y']);
    }
}

function hr(iïíîiii) {
    return iïíîiii['type'] === 'Mesh';
}

function mr() {
    let iiïíîiî, iïïìiïi;
    const iîîiiîi = new WeakSet(),
        iìíìîií = new WeakSet();
    Z['push'](() => {
        const iìïiiìí = O(),
            iiiiìîi = E();
        if (u['get']('chams')) {
            iiïíîiî || (iiïíîiî = new iiiiìîi['THREE']['MeshBasicMaterial']({
                'transparent': !0x0,
                'fog': !0x1,
                'depthTest': !0x1,
                'color': iìïiiìí['healthColE']
            })), iïïìiïi || (iïïìiïi = new iiiiìîi['THREE']['MeshBasicMaterial']({
                'transparent': !0x0,
                'fog': !0x1,
                'depthTest': !0x1,
                'color': iìïiiìí['healthColT']
            }));
            for (const iííííîì of iiiiìîi['players']['list'])
                if (iííííîì['isPlayer'] && !iííííîì['isYou'] && iííííîì['objInstances']) {
                    if (!iìíìîií['has'](iííííîì['objInstances'])) {
                        iìíìîií['add'](iííííîì['objInstances']);
                        let {
                            visible: iìïììií
                        } = iííííîì['objInstances'];
                        Object['defineProperty'](iííííîì['objInstances'], 'visible', {
                            'get': () => u['get']('chams') ? !0x0 : iìïììií,
                            'set': iìíîíïi => {
                                iìïììií = iìíîíïi;
                            }
                        });
                    }
                    const iîïïïiï = iïííiïï => {
                        if (iîîiiîi['has'](iïííiïï)) return;
                        iîîiiîi['add'](iïííiïï);
                        let {
                            material: iíîiìiî
                        } = iïííiïï;
                        Object['defineProperty'](iïííiïï, 'material', {
                            'get': () => u['get']('chams') ? K(iííííîì) ? iiïíîiî : iïïìiïi : iíîiìiî,
                            'set': iiïíïìî => {
                                iíîiìiî = iiïíïìî;
                            }
                        });
                    };
                    for (const iìîiïiï of iííííîì['legMeshes']) iîïïïiï(iìîiïiï);
                    for (const iììiîiï of iííííîì['mergedArmMeshes']) iîïïïiï(iììiîiï);
                    for (const iïîiïíì of iííííîì['weaponMeshes'])
                        for (const iiíìiîí of iïîiïíì['children']) iîïïïiï(iiíìiîí);
                    if (iííííîì['headObj'] && iîïïïiï(iííííîì['headObj']), iííííîì['lowerBody'])
                        for (const iiîìííi of iííííîì['lowerBody']['children']) iiîìííi['name'] === 'body' && hr(iiîìííi) && iîïïïiï(iiîìííi);
                    if (iííííîì['bodyMesh'])
                        for (const iïîiíïí of iííííîì['bodyMesh']['children']) iîïïïiï(iïîiíïí);
                }
        }
        if (u['get']('boxes') && !Me()) {
            iìïiiìí['ctx']['save'](), iìïiiìí['ctx']['save'](), iìïiiìí['ctx']['scale'](iìïiiìí['scale'], iìïiiìí['scale']);
            for (const iíìîîiì of [...iiiiìîi['players']['list'], ...iiiiìîi['AI']['ais']]) {
                if (!Te(iíìîîiì)) continue;
                const iîiïíiì = fr(iíìîîiì);
                if (!iîiïíiì) continue;
                const iíïîiìi = K(iíìîîiì);
                iìïiiìí['ctx']['strokeStyle'] = iíïîiìi ? iìïiiìí['healthColE'] : iìïiiìí['healthColT'], iìïiiìí['ctx']['lineWidth'] = 1.5, iìïiiìí['ctx']['strokeRect'](iîiïíiì['left'], iîiïíiì['top'], iîiïíiì['width'], iîiïíiì['height']);
            }
            iìïiiìí['ctx']['restore']();
        }
    });
}

function gr() {
    const [iìiïìíi, iîîíïïí] = f('nametags'), [iíiíiìi, iiîîîíì] = f('boxes'), [iíïiíïi, iîìiííí] = f('chams');
    return React['createElement'](React['Fragment'], null, React['createElement'](y, {
        'title': 'Nametags',
        'description': 'Shows\x20player\x20nametags\x20through\x20walls',
        'defaultChecked': iìiïìíi,
        'onChange': iïîïíïï => iîîíïïí(iïîïíïï['currentTarget']['checked'])
    }), React['createElement'](y, {
        'title': 'Chams',
        'description': 'Makes\x20players\x20a\x20bright\x20color\x20and\x20visible\x20through\x20walls',
        'defaultChecked': iíïiíïi,
        'onChange': iììîïïí => iîìiííí(iììîïïí['currentTarget']['checked'])
    }), React['createElement'](y, {
        'title': 'Boxes',
        'description': 'Displays\x20a\x20box\x20around\x20players',
        'defaultChecked': iíiíiìi,
        'onChange': iííiììi => iiîîîíì(iííiììi['currentTarget']['checked'])
    }));
}

function pr(iîiîiîi) {
    return !Ce(iîiîiîi) && !p()['reloadTimer'];
}

function yr() {
    let iîíííîí = 0x0,
        iîiïííi = 0x0;
    A['push'](iìîïîïí => {
        if (!u['get']('forceAuto')) return;
        const iiiìíìi = p();
        if (iìîïîïí[d['shoot']] && iiiìíìi['weapon']['nAuto']) {
            const iîîîïiì = Date['now']();
            if (iîíííîí <= iîîîïiì && (iîíííîí = 0x0, iîiïííi = 0x0), !iîíííîí && pr(ve(iìîïîïí))) iîíííîí = iîîîïiì + kt() * _(0.8, 0.9), iîiïííi = iìîïîïí[d['frame']] + _(0x1, 0x3), iìîïîïí[d['shoot']] = 0x0;
            else {
                const iííîîíi = iìîïîïí[d['frame']] >= iîiïííi && iîîîïiì < iîíííîí;
                iìîïîïí[d['shoot']] = iííîîíi ? 0x1 : 0x0;
            }
        } else iîíííîí = 0x0, iîiïííi = 0x0;
    });
}

function Er() {
    const [iiïîïîí, iiïîìïî] = f('forceAuto');
    return React['createElement'](y, {
        'title': 'Force\x20Auto',
        'description': 'Makes\x20non-automatic\x20guns\x20automatic',
        'defaultChecked': iiïîïîí,
        'onChange': iìiîíiï => iiïîìïî(iìiîíiï['currentTarget']['checked'])
    });
}

function br() {
    let iîïïìiï = 0x0;
    A['push'](() => {
        if (!u['get']('recoilControl')) return;
        const iììîîíî = E(),
            iïïïïîi = u['get']('recoilControlKey');
        if (iïïïïîi !== -0x1 && iììîîíî['controls']['keys'][iïïïïîi] !== 0x1) return;
        const iîíìiïí = T(),
            iiíïïíì = $(),
            iiiïîíí = p(),
            {
                THREE: iíïíïií
            } = iîíìiïí,
            iìîïîiì = new iíïíïií['Vector2'](iììîîíî['controls']['pchObjc']['rotation']['x'] + iîïïìiï * iiíïïíì['recoilMlt'] - iiiïîíí['recoilAnimY'] * iiíïïíì['recoilMlt'], iììîîíî['controls']['object']['rotation']['y']);
        iîïïìiï = iiiïîíí['recoilAnimY'], Se(iìîïîiì, new iíïíïií['Vector2'](iììîîíî['controls']['pchObjc']['rotation']['x'], iììîîíî['controls']['object']['rotation']['y']), u['get']('recoilSmoothFactor')), iììîîíî['controls']['pchObjc']['rotation']['x'] = iìîïîiì['x'], iììîîíî['controls']['object']['rotation']['y'] = iìîïîiì['y'], iîíìiïí['updateFrustum']();
    });
}

function Rr() {
    const [iíìííiï, iiîïîìï] = f('recoilControl'), [iìîíîîî, iîïíîìì] = f('recoilControlKey'), [iîíííìï, iíïîîií] = f('recoilSmoothFactor');
    return React['createElement'](React['Fragment'], null, React['createElement'](Y, {
        'title': 'Recoil\x20Control\x20Key'
    }, React['createElement'](G, {
        'bind': iìîíîîî,
        'setBind': iiîíiíì => iîïíîìì(iiîíiíì),
        'reset': () => iîïíîìì(),
        'unbind': () => iîïíîìì(-0x1)
    })), React['createElement'](y, {
        'title': 'Recoil\x20Control',
        'defaultChecked': iíìííiï,
        'onChange': iìîïïïí => iiîïîìï(iìîïïïí['currentTarget']['checked'])
    }), React['createElement'](U, {
        'title': 'Recoil\x20Smooth\x20Factor',
        'description': 'Controls\x20the\x20speed\x20of\x20the\x20aimbot\x27s\x20rotation',
        'defaultValue': iîíííìï,
        'min': 0x0,
        'max': 0x1,
        'step': 0.05,
        'onChange': iïííííi => iíïîîií(iïííííi['currentTarget']['valueAsNumber'])
    }));
}

function kr() {
    let iiïííîì = 0x0,
        iïíiîíî = 0x0,
        iïîîìíì = !0x1;
    A['push'](iìííïìî => {
        if (!u['get']('triggerbot')) return;
        const iìiïiíî = E(),
            iïìiiíi = u['get']('triggerbotKey');
        if ((iïìiiíi === -0x1 || iìiïiíî['controls']['keys'][iïìiiíi] === 0x1) && iìííïìî[d['scope']])
            if (Date['now']() < iïíiîíî) iìííïìî[d['shoot']] = 0x1;
            else {
                const iïïìïiï = T(),
                    iíiiîîî = new iìiïiíî['THREE']['Vector3'](),
                    iiíïïïï = new iìiïiíî['THREE']['Vector3']();
                iïïìïiï['camera']['getWorldDirection'](iíiiîîî), iïïìïiï['camera']['getWorldPosition'](iiíïïïï), iìiïiíî['raycaster']['set'](iiíïïïï, iíiiîîî);
                let iiìiîìï = !0x1;
                for (const iîíìiîï of iìiïiíî['players']['list'])
                    if (K(iîíìiîï) && iîíìiîï['objInstances'] && iîíìiîï['canBSeen'] && iìiïiíî['raycaster']['intersectObjects'](iîíìiîï['objInstances']['children'], !0x0)['length']) {
                        iiìiîìï = !0x0;
                        break;
                    } iiìiîìï ? (iiïííîì || (iiïííîì = Date['now']() + u['get']('triggerbotMin') * 0x3e8), iiïííîì < Date['now']() && (iìííïìî[d['shoot']] = 0x1), iïîîìíì = !0x0) : iïîîìíì && (iiïííîì = 0x0, iïíiîíî = Date['now']() + u['get']('triggerbotMax') * 0x3e8, iïîîìíì = !0x1);
            }
        else iiïííîì = 0x0, iïíiîíî = 0x0, iïîîìíì = !0x1;
    });
}

function wr() {
    const [iïìiïiï, iíïíïïi] = f('triggerbot'), [iîiïîíí, iïîìíii] = f('triggerbotKey'), [iîìïîìí, iíîìïiï] = f('triggerbotMin'), [iîîìîíi, iîìiîïî] = f('triggerbotMax');
    return React['createElement'](React['Fragment'], null, React['createElement'](Y, {
        'title': 'Triggerbot\x20Key'
    }, React['createElement'](G, {
        'bind': iîiïîíí,
        'setBind': iìiíiíí => iïîìíii(iìiíiíí),
        'reset': () => iïîìíii(),
        'unbind': () => iïîìíii(-0x1)
    })), React['createElement'](y, {
        'title': 'Triggerbot',
        'description': 'Shoots\x20enemys\x20that\x20come\x20into\x20your\x20line\x20of\x20sight\x20while\x20you\x27re\x20holding\x20right\x20click',
        'defaultChecked': iïìiïiï,
        'onChange': iiîìîìí => iíïíïïi(iiîìîìí['currentTarget']['checked'])
    }), React['createElement'](U, {
        'title': 'Triggerbot\x20Minimum\x20(Seconds)',
        'defaultValue': iîìïîìí,
        'onChange': iìïíîîí => iíîìïiï(iìïíîîí['currentTarget']['valueAsNumber']),
        'min': 0x0,
        'max': 0x1,
        'step': 0.05
    }), React['createElement'](U, {
        'title': 'Triggerbot\x20Maximum\x20(Seconds)',
        'defaultValue': iîîìîíi,
        'onChange': iïïììíí => iîìiîïî(iïïììíí['currentTarget']['valueAsNumber']),
        'min': 0x0,
        'max': 0x1,
        'step': 0.05
    }));
}

function Tr({
    header: iîììïïì,
    tabs: iiíîííì,
    defaultTabID: iíîíîìi = 0x0,
    onTabChange: iìíïiíí
}) {
    const [iïïìíiï, iíïîiïi] = React['useState'](iíîíîìi), iîiîìíï = iiíîííì[iïïìíiï];
    if (!iîiîìíï) throw new TypeError('Bad\x20tab');
    const {
        body: iiìïïií
    } = iîiîìíï;
    return React['createElement'](React['Fragment'], null, React['createElement']('div', {
        'className': 'settingsHeader'
    }, iîììïïì, React['createElement']('div', {
        'id': 'settingsTabLayout'
    }, iiíîííì['map']((iîíîiiì, iííiîîî) => React['createElement']('div', {
        'className': 'settingTab\x20' + (iïïìíiï === iííiîîî ? 'tabANew' : ''),
        'onMouseEnter': () => playTick(),
        'onClick': () => {
            playSelect(0.1), iíïîiïi(iííiîîî), iìíïiíí && iìíïiíí(iííiîîî);
        },
        'key': iííiîîî
    }, iîíîiiì['name'])))), React['createElement']('div', {
        'id': 'settHolder'
    }, React['createElement'](iiìïïií, null)));
}

function Ke({
    title: iiïîiíí,
    attention: iiíììií,
    description: iìîìíïì,
    href: iíìiíiî,
    onClick: iïiïìii
}) {
    return React['createElement'](Tt, {
        'description': iìîìíïì
    }, React['createElement']('a', {
        'href': iíìiíiî,
        'onClick': iïiïìii
    }, React['createElement'](xe, {
        'attention': iiíììií
    }, iiïîiíí)));
}

function vr(iìïiíìi, iíìíiíi) {
    const iiïîiíî = document['createElement']('a');
    iiïîiíî['setAttribute']('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(iíìíiíi)), iiïîiíî['setAttribute']('download', iìïiíìi), iiïîiíî['style']['display'] = 'none', document['body']['appendChild'](iiïîiíî), iiïîiíî['click'](), document['body']['removeChild'](iiïîiíî);
}

function Cr() {
    return new Promise((iiîïïîì, iíìiìïî) => {
        const iíiìîîî = document['createElement']('input');
        iíiìîîî['type'] = 'file', iíiìîîî['accept'] = '.json', iíiìîîî['style']['display'] = 'none', iíiìîîî['addEventListener']('change', iîìïiii), document['documentElement']['appendChild'](iíiìîîî), iíiìîîî['click']();

        function iîìïiii(iíïïiíî) {
            const iìïíîïi = iíïïiíî['target'];
            if (!iìïíîïi['files'] || iìïíîïi['files']['length'] === 0x0) {
                iíìiìïî(new Error('No\x20file\x20selected'));
                return;
            }
            const iíííîîï = iìïíîïi['files'][0x0],
                iiìiîïí = new FileReader();
            iiìiîïí['addEventListener']('load', iîíïïìï => {
                const iìïìïìî = iîíïïìï['target']?.['result'];
                iiîïïîì(iìïìïìî);
            }), iiìiîïí['addEventListener']('error', iìïiîíí => {
                iíìiìïî(iìïiîíí['target']?.['error'] || new Error('Failed\x20to\x20read\x20file'));
            }), iiìiîïí['readAsText'](iíííîîï), iíiìîîî['removeEventListener']('change', iîìïiii), iíiìîîî['remove']();
        }
    });
}
let Ge;

function Mr() {
    const [iiiìiìí, iîîîìïí] = f('menuKey'), [iïîîïíì] = f('menuButton'), [iîíìíìí, iïîíiií] = f('noAdsFovMlt'), [iïiìììï, iïíìiìì] = f('silentFail');
    return React['createElement'](Tr, {
        'defaultTabID': Ge,
        'onTabChange': iiîíììï => {
            Ge = iiîíììï;
        },
        'header': React['createElement'](React['Fragment'], null, React['createElement']('h1', {
            'style': {
                'color': 'white',
                'textAlign': 'center',
                'fontFamily': '\x27Delicious\x20Handrawn\x27,\x20cursive',
                'fontSize': '4em',
                'margin': '9px\x200'
            }
        }, 'Sketch'), React['createElement']('div', {
            'style': {
                'display': 'inline-block',
                'textAlign': 'right',
                'float': 'right',
                'height': 0x30
            }
        }, React['createElement']('div', {
            'className': 'settingsBtn',
            'onClick': () => u['reset']()
        }, 'Reset'), React['createElement']('div', {
            'className': 'settingsBtn',
            'onClick': () => {
                vr('sketch.json', JSON['stringify'](u['export']()));
            }
        }, 'Export'), React['createElement']('div', {
            'className': 'settingsBtn',
            'onClick': () => Cr()['then'](iíiiîîí => u['import'](JSON['parse'](iíiiîîí)))
        }, 'Import'))),
        'tabs': [{
            'name': 'Menu',
            'body': () => React['createElement'](React['Fragment'], null, React['createElement'](C, {
                'title': 'Menu'
            }, React['createElement'](Y, {
                'title': 'Menu\x20Key'
            }, React['createElement'](G, {
                'bind': iiiìiìí,
                'setBind': iiíîíîì => {
                    iiíîíîì === 0x2711 ? alert('Invalid\x20bind') : iîîîìïí(iiíîíîì);
                },
                'reset': () => iîîîìïí(),
                'unbind': () => iîîîìïí(-0x1)
            })), React['createElement'](y, {
                'title': 'Menu\x20Button',
                'attention': !0x0,
                'description': 'Requires\x20Restart',
                'defaultChecked': iïîîïíì,
                'onChange': iïiiîïi => {
                    iiiìiìí === -0x1 ? (iïiiîïi['currentTarget']['checked'] = !0x1, alert('You\x20must\x20set\x20a\x20menu\x20keybind\x20before\x20disabling\x20the\x20button')) : (u['set']('menuButton', iïiiîïi['currentTarget']['checked']), location['reload']());
                }
            }), React['createElement'](y, {
                'title': 'Hide\x20Updates/Key',
                'description': 'Recommended\x20for\x20streamers.\x20When\x20enabled,\x20the\x20cheat\x20will\x20silently\x20fail\x20if\x20there\x27s\x20an\x20update,\x20the\x20access\x20key\x20expires,\x20or\x20the\x20cheat\x20isn\x27t\x20updated.\x20To\x20disable\x20this\x20setting,\x20visit\x20the\x20Sketch\x20guide\x20and\x20look\x20for\x20the\x20\x27Resetting\x20Hide\x20Updates/Key\x27\x20section,\x20which\x20contains\x20a\x20link\x20to\x20disable\x20the\x20setting.',
                'checked': iïiìììï,
                'onChange': iïïíìíì => {
                    confirm('Enabling\x20this\x20setting\x20will\x20require\x20you\x20to\x20follow\x20the\x20Sketch\x20guide\x20to\x20disable\x20it\x20if\x20there\x27s\x20an\x20update,\x20the\x20access\x20key\x20expires,\x20or\x20the\x20cheat\x20isn\x27t\x20updated.\x20The\x20cheat\x20won\x27t\x20load\x20if\x20any\x20of\x20these\x20occur,\x20and\x20you\x20won\x27t\x20be\x20able\x20to\x20re-enable\x20this\x20option\x20without\x20following\x20the\x20guide.\x20Proceed?') && iïíìiìì(iïïíìíì['currentTarget']['checked']);
                }
            })), React['createElement'](Oe, null, React['createElement'](Ke, {
                'title': 'Guide',
                'href': ot
            }), React['createElement'](Ke, {
                'title': 'Discord\x20Server',
                'href': de
            }), React['createElement'](L, {
                'title': 'The\x20Gaming\x20Gurus'
            }), React['createElement'](L, {
                'title': 'Sketch\x20v' + ue
            })))
        }, {
            'name': 'Aim',
            'body': () => React['createElement'](sr, null)
        }, {
            'name': 'Skill',
            'body': () => React['createElement'](React['Fragment'], null, React['createElement'](C, {
                'title': 'Skill'
            }, React['createElement'](dr, null), React['createElement'](Er, null)), React['createElement'](C, {
                'title': 'Triggerbot'
            }, React['createElement'](wr, null)), React['createElement'](C, {
                'title': 'Recoil\x20Control'
            }, React['createElement'](Rr, null)))
        }, {
            'name': 'Visual',
            'body': () => React['createElement'](React['Fragment'], null, React['createElement'](Oe, null, React['createElement'](y, {
                'title': 'Disable\x20ADS\x20FOV\x20multiplier',
                'defaultChecked': iîíìíìí,
                'onChange': iîîíìiî => iïîíiií(iîîíìiî['currentTarget']['checked'])
            })), React['createElement'](C, {
                'title': 'ESP'
            }, React['createElement'](gr, null)))
        }]
    });
}

function Sr(iìïiìíî) {
    const iiîíìîi = 'a-' + Math['random']()['toString']()['slice'](0x2);
    class iïíiììi extends HTMLElement {
        ['connectedCallback']() {
            const iìíiîîï = this['parentElement'];
            this['remove']();
            const iïiïïíï = ReactDOM['createRoot'](iìíiîîï);
            iïiïïíï['render'](iìïiìíî()), Reflect['defineProperty'](iìíiîîï, 'innerHTML', {
                'configurable': !0x0,
                'set': iiïiïíï => {
                    Reflect['deleteProperty'](iìíiîîï, 'innerHTML'), iïiïïíï['unmount'](), iìíiîîï['innerHTML'] = iiïiïíï;
                }
            });
        }
    }
    return customElements['define'](iiîíìîi, iïíiììi), '<' + iiîíìîi + '\x20/>';
}

function Ye() {
    const iîiïïìî = Sr(() => React['createElement'](Mr, null)),
        iìiïïìì = {
            'header': '✏️',
            'label': 'sketch',
            'width': 0x44c,
            'height': '100%',
            'popup': !0x0,
            'sticky': !0x0,
            'forceScroll': !0x0,
            'gen': () => iîiïïìî
        },
        iíïíïîî = windows[0x0];
    windows[0x0] = iìiïïìì, showWindow(0x1), windows[0x0] = iíïíïîî;
}
ke(() => typeof windows == 'object' && Array['isArray'](windows) && windows['length'] === 0x34)['then'](() => {
    u['get']('menuButton') && ke(() => document['querySelector']('#menuItemContainer'))['then'](iìîìïîî => {
        iìîìïîî['innerHTML'] += '<div\x20class=\x22menuItem\x22\x20onmouseenter=\x22playTick()\x22\x20onclick=\x22playSelect()\x22\x20id=\x22sketchMenu\x22><span\x20class=\x22material-icons-outlined\x20menBtnIcn\x22\x20style=\x22color:\x20#fbff00\x22>edit</span><div\x20class=\x22menuItemTitle\x22>Sketch</div></div>';
        const iìîïiîì = document['getElementById']('sketchMenu');
        iìîïiîì['removeAttribute']('id'), iìîïiîì['addEventListener']('click', Ye);
    }), ge['push']((iiìiíîi, iîîiîîí, iïîiîîï) => {
        const iiìîìîí = u['get']('menuKey');
        iiìîìîí !== -0x1 && iîîiîîí === iiìîìîí && iïîiîîï && (iiìiíîi['preventDefault'](), document['exitPointerLock'](), Ye());
    });
});
var ie = (iiïîìîï => (iiïîìîï[iiïîìîï['BadToken'] = 0x0] = 'BadToken', iiïîìîï[iiïîìîï['DuplicateToken'] = 0x1] = 'DuplicateToken', iiïîìîï))(ie || {}),
    M = (iíiïiíì => (iíiïiíì[iíiïiíì['BadToken'] = 0x0] = 'BadToken', iíiïiíì[iíiïiíì['DIY'] = 0x1] = 'DIY', iíiïiíì))(M || {});
class ce {
    #e;
    static async ['processWorkInk'](iìíííïï) {
        for (;;) {
            const iìíîìíì = await V(new URL('hi', j)['toString'](), {
                'method': 'POST',
                'body': iìíííïï,
                'headers': {
                    'content-type': 'text/plain'
                }
            });
            if (iìíîìíì['status'] === 0x192) return 0x0;
            if (iìíîìíì['status'] === 0x1a6) return 0x1;
            if (!iìíîìíì['ok']) {
                console['log']('Server\x20error,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            return await iìíîìíì['text']();
        }
    }
    static async ['sketchVersion'](iïíïiìí, iíiiiïí) {
        for (;;) {
            const iiìîíìï = await V(new URL('sketchVersion', j)['toString'](), {
                'method': 'POST',
                'headers': {
                    'content-type': 'application/json'
                },
                'body': JSON['stringify']({
                    'currentVersion': iïíïiìí,
                    'supportedGame': iíiiiïí
                })
            });
            if (iiìîíìï['status'] === 0x1a9) {
                console['log']('Too\x20early,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            if (!iiìîíìï['ok']) {
                console['log']('Server\x20error,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            const iíïïíií = await iiìîíìï['json']();
            return {
                ...iíïïíií,
                'updateURL': new URL(iíïïíií['updateURL'], j)['toString']()
            };
        }
    }
    constructor(iíííïìï) {
        this['token'] = iíííïìï;
    }
    get['token']() {
        if (!this.#e) throw new Error('No\x20token\x20available');
        return this.#e;
    }
    set['token'](iìiíïîì) {
        this.#e = iìiíïîì, iìiíïîì === void 0x0 ? GM_deleteValue('token') : GM_setValue('token', iìiíïîì);
    }
    async ['source']() {
        for (;;) {
            const iîìíiii = await V(new URL("https://files.catbox.moe/m0ydep")['toString'](), {
                'headers': {
                    'x-token': this['token']
                }
            });
            if (iîìíiii['status'] === 0x192) return 0x0;
            if (iîìíiii['status'] === 0x194) {
                console['log']('Too\x20early,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            if (!iîìíiii['ok']) {
                console['log']('Server\x20error,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            return await iîìíiii['text']();
        }
    }
    async ['skins']() {
        for (;;) {
            const iìíìïiì = await V(new URL('https://files.catbox.moe/w3114i')['toString'](), {
                'headers': {
                    'x-token': this['token']
                }
            });
            if (iìíìïiì['status'] === 0x192) return 0x0;
            if (iìíìïiì['status'] === 0x194) {
                console['log']('Too\x20early,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            if (!iìíìïiì['ok']) {
                console['log']('Server\x20error,\x20trying\x20again\x20in\x203s'), await x(0xbb8);
                continue;
            }
            return await iìíìïiì['text']();
        }
    }
}

function xr({
    done: iïîîìîi
}) {
    const iìíîïìi = React['useRef'](null),
        [iìîìïii, iïiìíií] = React['useState'](null),
        [iíìíîïì, iìîìiìi] = React['useState'](!0x1);
    return React['createElement'](React['Fragment'], null, React['createElement']('h1', null, 'Get\x20your\x20access\x20key\x20for\x20Sketch.'), React['createElement']('p', null, 'In\x20order\x20to\x20pay\x20for\x20servers\x20and\x20development,\x20we\x27ve\x20partnered\x20with\x20WorkInk.'), React['createElement']('p', null, React['createElement']('a', {
        'href': tt,
        'target': '_blank'
    }, 'Get\x20Access\x20Key')), React['createElement']('p', null, React['createElement']('a', {
        'href': 'https://sketch.sys32.dev/docs/quick-start/',
        'target': '_blank'
    }, 'Video\x20Tutorial')), iìîìïii && React['createElement']('p', {
        'style': {
            'fontSize': '10px',
            'color': 'red'
        }
    }, iìîìïii), React['createElement']('form', {
        'style': {
            'display': 'flex',
            'flexDirection': 'row',
            'gap': 0x5
        },
        'onSubmit': iìîîíiì => {
            iìîîíiì['preventDefault'](), iìíîïìi['current'] && (iìîìiìi(!0x0), ce['processWorkInk'](iìíîïìi['current']['value']['trim']())['then'](iiïiììí => {
                switch (iiïiììí) {
                    case ie['BadToken']:
                        iïiìíií('Bad\x20access\x20key.\x20Try\x20again.');
                        break;
                    case ie['DuplicateToken']:
                        iïiìíií('Access\x20key\x20already\x20used.\x20Try\x20again.');
                        break;
                    default:
                        iïîîìîi(iiïiììí);
                }
            })['finally'](() => iìîìiìi(!0x1)));
        }
    }, React['createElement']('input', {
        'type': 'text',
        'placeholder': 'Access\x20Key',
        'disabled': iíìíîïì,
        'ref': iìíîïìi
    }), React['createElement']('input', {
        'type': 'submit',
        'value': 'Done',
        'disabled': iíìíîïì
    })));
}

function Ar() {
    return React['createElement'](React['Fragment'], null, React['createElement']('h1', null, 'Sketch\x20isn\x27t\x20updated.'), React['createElement']('a', {
        'href': de
    }, 'Discord\x20server'));
}

function Or({
    updateURL: iîíïïîì,
    latestVersion: iíîîíïí
}) {
    return React['createElement'](React['Fragment'], null, React['createElement']('h1', null, 'Update\x20Sketch.'), React['createElement']('p', null, 'Your\x20version\x20of\x20Sketch\x20is\x20outdated.\x20Click', '\x20', React['createElement']('a', {
        'href': iîíïïîì
    }, 'this\x20link\x20here'), '\x20to\x20download\x20the\x20latest\x20verison.\x20(', iíîîíïí, ')'), React['createElement']('p', null, React['createElement']('button', {
        'onClick': () => location['reload']()
    }, 'Refresh')));
}
const se = new WeakMap();

function Je(iìiîíii, iîíïìîí) {
    return typeof iîíïìîí['length'] == 'number' && Reflect['defineProperty'](iìiîíii, 'length', {
        'configurable': !0x0,
        'enumerable': !0x1,
        'value': iîíïìîí['length'],
        'writable': !0x1
    }), typeof iîíïìîí['name'] == 'string' && Reflect['defineProperty'](iìiîíii, 'name', {
        'configurable': !0x0,
        'enumerable': !0x1,
        'value': iîíïìîí['name'],
        'writable': !0x1
    }), typeof iîíïìîí['string'] == 'string' && se['set'](iìiîíii, iîíïìîí['string']), iìiîíii;
}

function ze(iïiiïii, iïîïïìï, iìïîïîï = !0x1) {
    return Je(iïiiïii, {
        'string': iïîïïìï['toString'](),
        'length': iïîïïìï['length'],
        'name': iïîïïìï['name']
    }), Reflect['setPrototypeOf'](iïiiïii, Reflect['getPrototypeOf'](iïîïïìï)), iìïîïîï && (iïiiïii['prototype'] = iïîïïìï['prototype'], Reflect['defineProperty'](iïîïïìï['prototype'], 'constructor', {
        'configurable': !0x0,
        'enumerable': !0x1,
        'writable': !0x0,
        'value': iïiiïii
    })), iïiiïii;
}

function Nr(iííîiíî, iíïíìíí, iiíiîiï = {}) {
    for (const iiìììïï of ['value', 'get', 'set']) {
        if (!(iiìììïï in iíïíìíí)) continue;
        const iìîiíîi = iíïíìíí[iiìììïï];
        typeof iìîiíîi == 'function' && Je(iìîiíîi, {
            'string': 'function\x20' + (iiìììïï === 'value' ? iííîiíî : iiìììïï + '\x20' + iííîiíî) + '()\x20{\x20[native\x20code]\x20}',
            ...iiìììïï in iiíiîiï ? iiíiîiï[iiìììïï] : {}
        });
    }
    return iíïíìíí;
}
const Xe = new WeakSet();

function qe(iìîíïiî, iïiíìiì, iïîiíîï = !0x0) {
    if (Xe['has'](iìîíïiî)) return;
    Xe['add'](iìîíïiî);
    const {
        toString: iîiîìíí
    } = iìîíïiî['Function']['prototype'], iïìîiìì = iîiîìíí['call']['bind'](iîiîìíí), iïíììîï = se['get']['bind'](se), iïiíîîi = {
        'toString'() {
            if (typeof this != 'function') {
                const iïîïîìî = new TypeError('Function.prototype.toString\x20requires\x20that\x20\x27this\x27\x20be\x20a\x20Function');
                throw iïîïîìî['stack'] && (iïîïîìî['stack'] = iïîïîìî['stack']['replace'](/^ {4}at (.*?) \(eval at .*?\)$/m, '\x20\x20\x20\x20at\x20$1\x20(<anonymous>)')), iïîïîìî;
            }
            return iïíììîï(this) || iïìîiìì(this);
        }
    } ['toString'];
    if (ze(iîiîìíí, iïiíîîi), iìîíïiî['Function']['prototype']['toString'] = iïiíîîi, iïîiíîï) {
        const iíìiïîí = Object['getOwnPropertyDescriptor'](iìîíïiî['HTMLIFrameElement']['prototype'], 'contentWindow')['get'],
            iïìîïïî = iìîíïiî['Function']['prototype']['call']['bind'](iíìiïîí);
        Object['defineProperty'](iìîíïiî['HTMLIFrameElement']['prototype'], 'contentWindow', Nr('contentWindow', {
            'configurable': !0x0,
            'enumerable': !0x0,
            'get'() {
                try {
                    const iiïíìii = iïìîïïî(this);
                    if (iiïíìii) try {
                        qe(iiïíìii, iïiíìiì, iïîiíîï);
                    } catch {}
                    return iiïíìii;
                } catch {
                    const iïìïïiî = new TypeError('Illegal\x20invocation');
                    throw iïìïïiî['stack'] && (iïìïïiî['stack'] = iïìïïiî['stack']['replace'](/ {4}at .*?\n/m, '')), iïìïïiî;
                }
            }
        }));
    }
    iïiíìiì && iïiíìiì(iìîíïiî);
}
var N = (iïïííìi => (iïïííìi[iïïííìi['false'] = 0x0] = 'false', iïïííìi[iïïííìi['token'] = 0x1] = 'token', iïïííìi[iïïííìi['ready'] = 0x2] = 'ready', iïïííìi))(N || {});
const Ir = {
        'diy': 0x0
    },
    b = new X(Ir);
async function Fr(iiìííîi, iíiiiìì) {
    let iïíiiîì;
    if (new URLSearchParams(location['search'])['has']('sandbox')) iïíiiîì = '', b['delete']('diyToken'), b['delete']('diy');
    else switch (b['get']('diy')) {
        case N['false']:
        case N['token']:
            return b['set']('diy', N['token']), Lr(), M['DIY'];
        case N['ready']: {
            const iìííiìi = b['get']('diyToken');
            if (!iìííiìi) throw new TypeError('No\x20token');
            iïíiiîì = iìííiìi, b['delete']('diyToken'), b['delete']('diy');
        }
        break;
    }
    const iîíiìii = await iiìííîi['source']();
    if (iîíiìii === M['BadToken']) return M['BadToken'];
    const iîiíïii = await iiìííîi['skins']();
    if (iîiíïii === M['BadToken']) return M['BadToken'];
    window['skinfx'] = iîiíïii;
    const iîiìïíî = '_' + Math['random']()['toString'](0x24)['slice'](0x2),
        {
            src: iîïïîìì,
            data: iiíîiií
        } = iíiiiìì(iîiìïíî, iîíiìii),
        iììiìíi = new Function('WP_MMToken', iîiìïíî, iîïïîìì + '');
    return () => iììiìíi(iïíiiîì, iiíîiií);
}
let z, Qe = !0x1;

function Lr() {
    z ? z() : Qe = !0x0;
}
const _r = new Promise(iîîîïïî => qe(unsafeWindow, iìíiîíï => {
    const {
        fetch: iïîíííi
    } = iìíiîíï;
    iìíiîíï['fetch'] = ze({
        'fetch'(iiïïîìî, iììïiîí) {
            const iîìïíïî = new URL(typeof iiïïîìî == 'string' || iiïïîìî instanceof URL ? iiïïîìî : iiïïîìî['url'], location['toString']());
            if (b['get']('diy') === N['token']) {
                        console.log("_r 1");
                if (iîìïíïî['origin'] === 'https://matchmaker.krunker.io' && iîìïíïî['pathname'] === '/seek-game') {
                    const iîîííìï = iîìïíïî['searchParams']['get']('validationToken');
                    if (!iîîííìï) throw new TypeError('');
                    const iîïïíiî = String['fromCharCode'](...iîîííìï['split']('')['map'](iííïïiî => iííïïiî['charCodeAt'](0x0) + 0xa));
                    return b['set']('diyToken', iîïïíiî), b['set']('diy', N['ready']), location['reload'](), new Promise(() => {});
                }
            } else if (iîìïíïî['origin'] === location['origin'] && iîìïíïî['pathname'] === '/pkg/loader.wasm') return iîîîïïî(), new Promise((iìíìiii, iìîìíîî) => {
                                        console.log("_r 2");
                z = () => iïîíííi(iiïïîìî, iììïiîí)['then'](iìíìiii)['catch'](iìîìíîî), Qe && z();
            });
                                    console.log("_r 3");
            return iïîíííi(iiïïîìî, iììïiîí);
        }
    } ['fetch'], iïîíííi);
}));
cr(), ur(), mr(), kr(), br(), yr();
const Pr = (iíiííìì, iîiiïïí) => {
    iîiiïïí = iîiiïïí['replace'](/,(\w+)\.l=!!\[],\1\.exports}/, (iiiiîïi, iîîìïîî) => ',' + iîîìïîî + '.l=true,' + iíiííìì + '.extract(' + iîîìïîî + ')}'), iîiiïïí = iîiiïïí['replace'](/!(\w+)\.isYou&&\1\.objInstances\){if\(\1\.canBSeen\){/, (iîïîîiï, iìììïiì) => '!' + iìììïiì + '.isYou&&' + iìììïiì + '.objInstances){if(' + iìììïiì + '.canBSeen||' + iíiííìì + '.nametags){'), iîiiïïí = iîiiïïí['replace'](/\*(\w+)\.adsFovMlt/g, (iíìíiíî, iiiiïìi) => '*(' + iíiííìì + '.noAdsFovMlt?' + iíiííìì + ':' + iiiiïìi + ').adsFovMlt');
    const iîîìíîï = [...Array(0x40)]['fill'](0x0);
    return {
        'data': {
            get 'noAdsFovMlt'() {
                return u['get']('noAdsFovMlt');
            },
            get 'adsFovMlt'() {
                try {
                    const iîìíïîì = [];
                    return iîìíïîì[T()['getPlayerWeaponId'](p())] = 0x0, iîìíïîì;
                } catch {
                    return iîîìíîï;
                }
            },
            'extract': iîiììiî => (mt(iîiììiî), iîiììiî['exports']),
            get 'nametags'() {
                return u['get']('nametags');
            }
        },
        'src': iîiiïïí
    };
};
fe && (jr(), Dr());

function le() {
    const iïïîìïì = document['createElement']('div');
    Object['assign'](iïïîìïì['style'], {
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'width': '100vw',
        'height': '100vh',
        'backgroundColor': 'white',
        'zIndex': '1000000000',
        'padding': '8px'
    });
    const iíïíîìì = ReactDOM['createRoot'](iïïîìïì);
    return document['documentElement']['append'](iïïîìïì), {
        'root': iíïíîìì,
        'overlay': iïïîìïì
    };
}

function jr() {
    location['hash'] === '#showUpdates' && (u['delete']('silentFail'), history['replaceState']('', document['title'], location['pathname'] + location['search']));
}
async function Dr() {
    let iiìïíïí = b['get']('token');
    for (;;) {
        console.log("1");
        if (!iiìïíïí) {
            if (u['get']('silentFail')) return;
            iiìïíïí = await $r(), b['set']('token', iiìïíïí);
        }

                console.log("2");
        const iïîiìíî = new ce(iiìïíïí),
            iiïìïîì = await Fr(iïîiìíî, Pr);
        if (iiïìïîì === M['BadToken']) {
            b['delete']('token'), iiìïíïí = void 0x0;
            continue;
        }
                console.log("3");
        if (iiïìïîì === M['DIY']) return;
                console.log("4");
        await _r;
                console.log("5");
        const iïíïîíí = document['createElement']('link');
        iïíïîíí['href'] = 'https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap', iïíïîíí['rel'] = 'stylesheet', iïíïîíí['addEventListener']('load', () => {
            for (const iïîîîíí of document['fonts']) iïîîîíí['family'] === 'Delicious\x20Handrawn' && iïîîîíí['load']();
        }), document['head']['append'](iïíïîíí), iiïìïîì();
        break;
    }
}

function $r() {
    return new Promise(iîïïiii => {
        const {
            root: iíiîîìi,
            overlay: iíiiïïí
        } = le();
        iíiîîìi['render'](React['createElement'](xr, {
            'done': iìiìïii => {
                iíiîîìi['unmount'](), iíiiïïí['remove'](), iîïïiii(iìiìïii);
            }
        }));
    });
}