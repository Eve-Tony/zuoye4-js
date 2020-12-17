var lfj = document.getElementById('lfj'),
    lrj = document.getElementById('lrj'),
    slide_imgs = document.getElementById('slide_imgs'),
    slide_btns = document.getElementById('slide_btns').getElementsByTagName('span'),
    slide_wrapper = document.getElementById('slide_wrapper'),
    slide_index = 0,  
    animated = false, 
    timer = null;

function imgChange(offset) {
    var newLeft = parseInt(slide_imgs.style.left) + offset, 
    time = 500,                                        
    perTime = 10,                                       
    per = time / perTime,                               
    perOffset = offset / per;                           
    
    animate = function() {
        animated = true;
        
        if ((perOffset < 0 && parseInt(slide_imgs.style.left) > newLeft) || 
            (perOffset > 0 && parseInt(slide_imgs.style.left) < newLeft)) {

            slide_imgs.style.left = parseInt(slide_imgs.style.left) + perOffset + 'px';
            setTimeout(animate, perTime);
        } else {
            animated = false;
            slide_imgs.style.left = newLeft + 'px';
            if (newLeft > -800) {
                slide_imgs.style.left = -3200 + 'px';
            }
            if (newLeft < -3200) {
                slide_imgs.style.left = -800 + 'px';
            }
        }
    }
    animate();
}
function btnChange() {
    for (var i=0; i<slide_btns.length; i++) {
        if (slide_btns[i].className = 'slide-btn activess') {
            slide_btns[i].className = 'slide-btn';
        }
    }
    slide_btns[slide_index].className = 'slide-btn activess';
}

function autoPlay() {
    timer = setInterval(function() {
        lrj.onclick();
    }, 3000);
}

function stopPlay() {
    clearInterval(timer);
}

lfj.onclick = function() {
    if (!animated) {
        imgChange(800);
        if (slide_index == 0) {
            slide_index = 3;
        } else {
            slide_index -= 1;
        }
        btnChange();
    }
}

lrj.onclick = function() {
    if (!animated) { 
        imgChange(-800);
        if (slide_index == 3) {
            slide_index = 0;
        } else {
            slide_index += 1;
        }
        btnChange();
    }
}
autoPlay();