$(document).ready(function(){

    $('.dlcsite').on('click',()=>{
        window.open('https://www.dlcdev.great-site.net/', '_blank');
    });

    $('.flgsite').on('click',()=>{
        window.open('https://flg.rf.gd/', '_blank');
    });
    
    $('.mxdhub').on('click',()=>{
        window.open('https://mxdhub.great-site.net/', '_blank');
    });

    $(".hamburger").on('click',()=>{        
        $('.hamburger').toggleClass('active');
        $('.nav-bar').toggleClass('active');
    });
    
});