import { redraw, center, scale } from './canvas.js';
import { getFormValues, validateValues } from "./Validation.js";


 function initCanvasHandlers() {
    console.log('Initializing canvas handlers...');
    

    if (typeof redraw === 'function') {
        console.log('Calling redraw()...');
        redraw();
        console.log('Redraw completed');
    } else {
        console.error('redraw function is not available!');
    }
    

    const canvas = document.getElementById('coordinate_plane');
    if (canvas) {
        console.log('Canvas element found, adding click handler');
        canvas.addEventListener('click', function(e) {
            console.log('Canvas clicked');
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const radiusSelect = document.getElementById('radius');
            const r = parseFloat(radiusSelect.value);
            
            if (!isNaN(r) && r > 0) {

                const canvasX = x - center;
                const canvasY = center - y; // инвертируем Y
                

                const realX = (canvasX / (scale * r)) * r;
                const realY = (canvasY / (scale * r)) * r;
                
                console.log('Calculated coordinates: x =', realX, 'y =', realY);
                

                const xSelect = document.getElementById('xCanvas');
                //const closestX = Math.round(realX);
                xSelect.value = realX;

                
                const yInput = document.getElementById('y');
                yInput.value = (realY).toFixed(4);

                const form = document.getElementById('main_form');
                    const values = getFormValues(form);
                    if (validateValues(values)) {
                        form.submit();
                    } else {
                        alert('Некорректные данные, форма не отправлена');
                    }
            } else {
                alert('Сначала выберите радиус R!');
            }
        });
    } else {
        console.error('Canvas element not found!');
    }


    const radiusSelect = document.getElementById('radius');

    if (radiusSelect) {
        radiusSelect.addEventListener('change', function() {
            const r = parseFloat(radiusSelect.value);
            if (!isNaN(r) && r > 0) {
                console.log('Radius changed, redraw with R =', r);
                redraw(r);
            }
        });
    }


}

// Вызываем инициализацию после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCanvasHandlers);
} else {
    // Если DOM уже загружен, ждем немного для загрузки всех скриптов
    setTimeout(initCanvasHandlers, 100);
}