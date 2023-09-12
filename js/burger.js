
let group = document.querySelector('.holder-group');
let titles = group.querySelectorAll('.title');

// console.log(group);
// console.log(titles);

for (let i = 0; i < titles.length; i++) {
    titles[i].onclick = function(event) {
        event.preventDefault();
    
        // console.log(event);
        event.target.classList.toggle('open');
        
        let currentGroup = event.target.parentElement;
        
        let box = currentGroup.querySelector('.box');
        if (event.target.classList.contains('open')) {
            // box.style.display = 'block';
            box.classList.add('open');
        } else {
            // box.style.display = 'none';
            box.classList.remove('open');
        }
    };
}

// titles.onclick = function(event) {
//     event.preventDefault();

//     // console.log(event);
//     event.target.classList.toggle('open');
    
//     let currentGroup = event.target.parentElement;
    
//     let box = currentGroup.querySelector('.box');
//     if (event.target.classList.contains('open')) {
//         // box.style.display = 'block';
//         box.classList.add('open');
//     } else {
//         // box.style.display = 'none';
//         box.classList.remove('open');
//     }
// };