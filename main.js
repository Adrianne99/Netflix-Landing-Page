const accord = document.getElementsByClassName('contentbox');

for (i = 0; i<accord.length; i++ ){
    accord[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}