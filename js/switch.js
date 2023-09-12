let menu = document.querySelector('#menu-tabs');
let groupT = document.querySelectorAll('#group');
if (document.documentElement.clientWidth > 400){
    
    if (menu.children.length > 0) {
        groupT.forEach(item => item.style.display = 'none');
        groupT[0].style.display = 'block';
        menu.children[0].classList.add('active');
    
        menu.onclick = (event) => {
            for (let i = 0; i < menu.children.length; i++) {
                menu.children[i].classList.remove('active');
            }
            event.target.classList.add('active');
            for (let j = 0; j < groupT.length; j++) {
                if (groupT[j].classList[1] == event.target.classList[0]){
                    for (let k = 0; k < groupT.length; k++) {
                        groupT[k].style.display = 'none';
                    };
                    groupT[j].style.display = 'block';
                }
            }
        };
    }
} 
