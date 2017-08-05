const hasProp = {}.hasOwnProperty

const extend = function(e, t) {
    function n() {
        this.constructor = e
    }
    for (const r in t)
        hasProp.call(t, r) && (e[r] = t[r])
    return n.prototype = t.prototype,
    e.prototype = new n,
    e.__super__ = t.prototype,
    e
}

export default extend
