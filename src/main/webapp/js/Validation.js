export function getFormValues(form) {
    const x = parseFloat(form.x.value);
    const xCanvas = parseFloat(form.xCanvas.value);
    const y = parseFloat(form.y.value);
    const r = parseFloat(form.radius.value);
    return { x, y, r, xCanvas};
}

export function validateValues({ x, y, r, xCanvas }) {
    const useX = !isNaN(xCanvas) ? xCanvas : x;

    if (isNaN(useX) || isNaN(y) || isNaN(r)) {
        alert("Все поля должны быть заполнены корректными числами.");
        return false;
    }

    if (useX < -5 || useX > 3) {
        alert("X должен быть в диапазоне от -5 до 3.");
        return false;
    }

    if (y < -5 || y > 5) {
        alert("Y должен быть в диапазоне от -5 до 5.");
        return false;
    }

    if (r < 1 || r > 3) {
        alert("R (радиус) должен быть в диапазоне от 1 до 3.");
        return false;
    }

    return true;
}