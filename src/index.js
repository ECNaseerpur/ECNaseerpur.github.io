document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.style.animation = 'fadeIn 0.5s';
    welcomeMessage.style.opacity = '1';
   
    setTimeout(function () {
       welcomeMessage.style.opacity = '1';
    }, 5000); // The message will be visible for 3 seconds
   
    setTimeout(function () {
       welcomeMessage.style.display = 'none';
    }, 7000); // The message will be removed after 5 seconds
   });
   