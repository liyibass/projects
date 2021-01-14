export const fetchHeight = (DomThis) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(DomThis.$el.clientHeight)
        }, 2000)
    })
}
