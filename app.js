document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();
    const input=document.querySelector('#message-input');
    const encrypted=btoa(input.value);
    const input2=document.querySelector('#link-input');

    input2.value=`${window.location}#${encrypted}`;

    input2.select();

});

