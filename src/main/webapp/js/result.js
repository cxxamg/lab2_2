import {initCanvas, drawPointOnCoordinatePlane, redraw} from "./canvas.js"

document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('canvas_container')
    const historyJson = dataContainer.dataset.historyJson
    const currentRString = dataContainer.dataset.currentR
    let historyData = JSON.parse(historyJson)
    const ctx = initCanvas()
    const r = currentRString ? parseFloat(currentRString) : null
    redraw(r)
    if (historyData.length > 0) {
        historyData.forEach(({x, y, hit}) => {
            drawPointOnCoordinatePlane(ctx, x, y, hit)
        })
    }
})

