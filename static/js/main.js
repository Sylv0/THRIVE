function infoToggle(event,elmnt)
{
    event.preventDefault();
    elmnt.parentNode.parentNode.classList.toggle('expanded');
}

const pages = document.querySelector('#info-section').children;
const page_list = document.querySelector('#page-list');

let scrolling = false;

for(let i = 0; i < pages.length; i++)
{
    let li = document.createElement('li');
    let index = document.createTextNode(i+1);
    li.appendChild(index);
    page_list.appendChild(li);
    if(i !== (pages.length-1)){
        let span = document.createElement('span');
        page_list.appendChild(span);
    }
}

for(let i = 0; i < pages.length; i++)
{
    if((window.pageYOffset + (window.innerHeight/2)) >= (pages[i].offsetTop + (pages[i].offsetHeight/2)))
    {
        page_list.children[i].classList.add('active');
        break;
    }
    page_list.children[i].addEventListener('click', function(event)
    {
        console.log(event);
    });
}

console.log(document.querySelector('#page-list li::before'));

window.addEventListener('scroll', function(event)
{
    for(let i = 0; i < pages.length; i++)
    {
        if(window.pageYOffset >= pages[i].offsetTop/2 &&
            window.pageYOffset <= pages[i].offsetTop &&
            !page_list.children[i].classList.contains('active'))
        {
            document.querySelector('li.active').classList.remove('active');
            page_list.querySelectorAll('li')[i].classList.add('active');
            break;
        }
    }
});