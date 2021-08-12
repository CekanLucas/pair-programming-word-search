const wordSearch = (letters, word) => {
    // if ()
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch