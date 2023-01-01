const {hash}=window.location;

const message=atob(hash.replace('#',''));

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML=message;
}

document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();
    const message=document.querySelector('#message-form');
    const link=document.querySelector('#link-form');
    const input=document.querySelector('#message-input');
    const encrypted=btoa(input.value);
    const input2=document.querySelector('#link-input');

    input2.value=`${window.location}#${encrypted}`;

    message.classList.add('hide');
    link.classList.remove('hide')
    input2.select();

});

