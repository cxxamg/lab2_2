export const canvasSize = 400
export const lineWidth = 2
export const gridPoints= 7
export const textMargin = 9
export const mainColor = '#857466'
export const center = canvasSize / 2
export const scale = canvasSize / gridPoints

export function initCanvas() {
    const canvas = document.getElementById('coordinate_plane')
    if (!canvas) {
        console.error('Canvas element not found!')
        return null
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
        console.error('Could not get 2d context from canvas!')
        return null
    }
    ctx.font = '13px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    return ctx
}

function drawAxisLabels(ctx, r) {
    let xLabel
    let yLabel
    const steps = [
        {value: -1, label: '-R'},
        {value: -0.5, label: '-R/2'},
        {value: 0.5, label: 'R/2'},
        {value: 1, label: 'R'}
    ]
    ctx.fillStyle = mainColor
    for (const element of steps) {
        const step = element
        const xValue = center + step.value * scale * (r || 1)
        if (r) {
            xLabel = (step.value * r).toString()
        } else {
            xLabel = step.label
        }
        ctx.fillText(xLabel, xValue, center + textMargin * 1.5)
        ctx.beginPath()
        ctx.moveTo(xValue, center - 2)
        ctx.lineTo(xValue, center + 2)
        ctx.closePath()
        ctx.stroke()
    }
    for (const element of steps) {
        const step = element
        const yValue = center - step.value * scale * (r || 1)
        if (r) {
            yLabel = (step.value * r).toString()
        } else {
            yLabel = step.label
        }
        ctx.fillText(yLabel, center - textMargin * 1.5, yValue)
        ctx.beginPath()
        ctx.moveTo(center - 2, yValue)
        ctx.lineTo(center + 2, yValue)
        ctx.closePath()
        ctx.stroke()
    }
}

function drawAxeOnCoordinatePlane(ctx, fromX, fromY, toX, toY) {
    const lengthOfHead = 10
    const angle = Math.atan2(toY - fromY, toX - fromX) // угол направления линии (оси)
    ctx.beginPath()
    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    // левая сторона указателя
    const thirtyDegreeAngle = Math.PI / 6
    const xForLeftPointer = toX - lengthOfHead * Math.cos(angle - thirtyDegreeAngle) // на 30 градусов влево
    const yForLeftPointer = toY - lengthOfHead * Math.sin(angle - thirtyDegreeAngle)
    ctx.lineTo(xForLeftPointer, yForLeftPointer)
    // правая сторона указателя
    ctx.moveTo(toX, toY)
    const xForRightPointer = toX - lengthOfHead * Math.cos(angle + thirtyDegreeAngle) // на 30 градусов вправо
    const yForRightPointer = toY - lengthOfHead * Math.sin(angle + thirtyDegreeAngle)
    ctx.lineTo(xForRightPointer, yForRightPointer)
    ctx.stroke()
}

function drawCoordinatePlane(ctx, r) {
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = mainColor
    drawAxeOnCoordinatePlane(ctx, 0, center, canvasSize, center)
    drawAxeOnCoordinatePlane(ctx, center, canvasSize, center, 0)
    drawAxisLabels(ctx, r)
}

function convertIntoCanvasCoordinates(x, y) {
    return [center + x * scale, center - y * scale]
}

function drawShapes(ctx, r) {
    const rForDrawing = r || 1
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = 'rgba(133, 116, 102, 0.3)'
    ctx.fillStyle = 'rgba(227, 237, 250, 0.6)'

    ctx.beginPath()
    ctx.moveTo(center, center)
    let [x1, y1] = convertIntoCanvasCoordinates(-rForDrawing, 0)
    ctx.lineTo(x1, y1)
    let [x2, y2] = convertIntoCanvasCoordinates(0, rForDrawing)
    ctx.lineTo(x2, y2)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(center, center)
    let [x3, y3] = convertIntoCanvasCoordinates(0, rForDrawing / 2)
    ctx.lineTo(x3, y3)
    let [x4, y4] = convertIntoCanvasCoordinates(rForDrawing, rForDrawing / 2)
    ctx.lineTo(x4, y4)
    let [x5, y5] = convertIntoCanvasCoordinates(rForDrawing, 0)
    ctx.lineTo(x5, y5)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(center, center)
    ctx.arc(center, center, rForDrawing * scale, Math.PI / 2, Math.PI, false)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}

export function drawPointOnCoordinatePlane(ctx, x, y, wasThereHit) {
    if (wasThereHit) {
        ctx.fillStyle = '#C0E6B1'
    } else {
        ctx.fillStyle = '#D14545'
    }
    ctx.beginPath()
    let [newX, newY] = convertIntoCanvasCoordinates(x, y)
    ctx.arc(newX, newY, 4, 0, 2*Math.PI)
    ctx.closePath()
    ctx.fill()
}

export function redraw(r = null) {
    console.log('redraw() called with r =', r)
    const ctx = initCanvas()
    if (!ctx) {
        console.error('Cannot redraw: canvas context is null')
        return
    }
    console.log('Clearing canvas...')
    ctx.clearRect(0, 0, canvasSize, canvasSize)
    console.log('Drawing coordinate plane...')
    drawCoordinatePlane(ctx, r)
    console.log('Drawing shapes...')
    drawShapes(ctx, r)
    console.log('Redraw completed successfully')
}

// Все функции доступны глобально