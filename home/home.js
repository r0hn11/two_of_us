var menu_btn = document.getElementById('menu');
var menu_btn_parent = document.getElementById('toggle_btn');
var bar1 = document.getElementById('line1');
var bar2 = document.getElementById('line2');
var bar3 = document.getElementById('line3');
var header = document.querySelector('#nav_parent');
var html = document.querySelector('html');
var hero = document.getElementById('hero_container');



/*sections*/
var hero_section = document.getElementById('hero');
var contents_section = document.getElementById('contents');
var subject_section = document.getElementById('subject_sec');
var counter_section = document.getElementById('counter_sec');
var narrative_section = document.getElementById('narrative_sec');
var connect_section = document.getElementById('connect_sec');
var login_section = document.getElementById('login_sec');
var quote_section = document.getElementById('quote_sec');

/*global use*/

let ai_choice_run = 0;

let ai_choice = Math.floor(Math.random()*5);
ai_choice_run = ai_choice;
console.log(ai_choice_run);

/*hero desc*/
var hero_desc = document.getElementById('hero_description');
hero_desc.innerHTML = `<span id="first_letter" style="margin-right: 0.1em;"> </span>Finding happiness in little things.`;


/*preloader*/
window.addEventListener('load',function(){
    const loaderbg = document.getElementById('preload_box');
    const spinner = document.getElementById('spinner');
    spinner.classList.add('invisible');
    loaderbg.classList.add('invisible');
});


/* signing in*/

var submit = document.getElementById('login_btn');
var msg = document.getElementById('msg');
var sign = document.getElementById('sign');
var login_cont = document.getElementById('login_contact');
var ig = document.getElementById('igL');
var fb = document.getElementById('fbL');
var loader = document.getElementById('loader');
var quotebox = document.getElementById('quote_box');
var quotesign = document.getElementById('quote_sign');
var bgm = document.querySelector('audio');
bgm.autoplay = false;
login_cont.style.pointerEvents = 'none';

var sign_in_flag = 0;
html.classList.add('stop_scroll');
submit.addEventListener('click', validate);
document.addEventListener('keypress', function (e) {
    document.documentElement.scrollTop = 0;
    if (e.keyCode === 13) {
        e.preventDefault();
        validate();
        return false;
    }
});
function validate() {
    let usrname = document.getElementById('usr_id').value;
    let pass = document.getElementById('pw').value;
    if((usrname === 'Payal' && pass === 'stardust') || (usrname === 'Rohan' && pass === 'raincloud')){
        login_section.classList.add('login_closed');
        login_section.style.transitionDelay = '5s';
        setTimeout(function () {
            html.classList.remove('stop_scroll');
        },19000);
        msg.innerText = 'Please wait, signing in.'
        msg.style.opacity = '1';
        sign.innerHTML = '<i class="fas fa-check"></i>';
        sign.style.opacity = '1';
        sign.style.color = '#1FFF00';
        loader.style.opacity = '1';
        quotebox.classList.add('fade_quote');
        quotebox.style.animationDelay = '7s';
        quote_section.style.opacity = '0';
        quote_section.style.transitionDelay = '17s';
        quotesign.classList.add('quote_fade');
        quote_section.style.pointerEvents = 'none';
        setTimeout(function(){
            bgm.play();
        }, 5500);
        usrname.disabled = true;
        pass.disabled = true;
        sign_in_flag = 1;
    }
    else{
        login_section.classList.remove('login_closed');
        msg.innerText = 'Ask admin for credentials if unkown.'
        msg.style.opacity = '1';
        sign.innerHTML = '<i class="fas fa-times"></i>';
        sign.style.opacity = '1';
        sign.style.color = 'rgb(255, 50, 50)';
        login_cont.style.pointerEvents = 'auto';
        login_cont.style.opacity = '1';
        loader.style.opacity = '0';
        quotebox.classList.remove('fade_quote');
        quotebox.style.animationDelay = '0s';
        quote_section.style.opacity = '1';
        quote_section.style.transitionDelay = '0s';
        quotesign.classList.remove('quote_fade');
        quote_section.style.pointerEvents = 'auto';
        sign_in_flag = 0;
    }
}



/*nav_menu*/
menu_btn.addEventListener('click',close);
let btn_flag = 1;
function close(){
    menu_info_l();
    btt_rvl();
    if(btn_flag === 1){
        bar1.classList.add('close_frame');
        bar2.classList.add('close_frame');
        bar3.classList.add('close_frame');
        header.classList.remove('closed_menu');
        hero.classList.add('invisible');
        menu_btn_parent.classList.remove('closed_menu_btn');
        html.classList.add('stop_scroll');
        img_rvl.style.opacity = '0';
        img_rvl.style.pointerEvents = 'none';
        hero_parent.style.filter = 'brightness(1)';
        hero_parent.style.transitionDuration = '0.5s';
        menu_info.innerText = 'close (Esc)';
        menu_info.style.zIndex = '10';
        btt_parent.style.opacity = '0';
        btt_parent.style.pointerEvents = 'none';
        menu_btn_parent.style.paddingRight = '0.7em';
        menu_btn_parent.style.paddingTop = '0.7em';
        btn_flag = 0;
    }
    else if(btn_flag === 0){
        bar1.classList.remove('close_frame');
        bar2.classList.remove('close_frame');
        bar3.classList.remove('close_frame');
        menu_btn.style.transform = 'translateX(0)';
        header.classList.add('closed_menu');
        hero.classList.remove('invisible');
        menu_btn_parent.classList.add('closed_menu_btn');
        html.classList.remove('stop_scroll');
        img_rvl.style.opacity = '1';
        img_rvl.style.pointerEvents = 'auto';
        svg.style.transform = 'rotate(0deg)';
        fade_img_rvl();
        menu_info.innerText = 'menu (Esc)';
        menu_btn.style.zIndex = '3';
        menu_btn_parent.style.paddingRight = '0';
        menu_btn_parent.style.paddingTop = '0';
        btn_flag = 1;
    }
}

/*close with escape*/
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27 && sign_in_flag === 1) {
        close();
    }
});

/*navigate*/
var home =document.getElementsByClassName('link')[0];
home.addEventListener('click', navigate);

function navigate(){
    close();
    document.documentElement.scrollTop = 0; 
}

/*rvl img*/
var hero_parent = document.querySelector('#hero');
var img_rvl = document.getElementById('image_reveal');
var svg = document.querySelector('svg');
var menu_info = document.querySelector('#menu_info');
var rvl_info = document.querySelector('#rvl_info');
img_rvl.addEventListener('click', reveal);
window.addEventListener('scroll',fade_img_rvl);
img_rvl.addEventListener('mouseenter', reveal_info_e);
img_rvl.addEventListener('mouseleave', reveal_info_l);
menu_btn.addEventListener('mouseenter', menu_info_e);
menu_btn.addEventListener('mouseleave', menu_info_l);
let hover_flag = 1;
let bg_flag = true;
reveal_info_l();
menu_info_l();
function reveal(){
    if(bg_flag === true){
        hero.classList.add('invisible');
        hero_parent.style.filter = 'brightness(2)';
        img_rvl.style.transitionDuration = '0.3s';
        hero_parent.style.transitionDuration = '1s';
        svg.style.transform = 'rotate(-30deg)';
        reveal_info_l();
        document.documentElement.scrollTop = 0; 
        bg_flag = false;
    }
    else if(bg_flag === false){
        hero.classList.remove('invisible');
        hero_parent.style.filter = 'brightness(1)';
        img_rvl.style.transitionDuration = '0.3s';
        hero_parent.style.transitionDuration = '0.5s';
        svg.style.transform = 'rotate(0deg)';
        reveal_info_l();
        bg_flag = true;
    }
}
function reveal_info_e(){
    rvl_info.style.transform = 'translate(0)';
    rvl_info.style.opacity = '1';
}
function reveal_info_l(){
    rvl_info.style.transform = 'translate(30px)';
    rvl_info.style.opacity = '0';
}
function menu_info_e(){
    menu_info.style.transform = 'translate(0)';
    menu_info.style.opacity = '1';
}
function menu_info_l(){
    menu_info.style.transform = 'translate(30px)';
    menu_info.style.opacity = '0';
}
function fade_img_rvl(){
    if(window.scrollY > 643){
        img_rvl.style.opacity = 0;
        img_rvl.style.pointerEvents = 'none';
        img_rvl.style.transitionDuration = '1s';
    }
    else{
        img_rvl.style.opacity = 1;
        img_rvl.style.pointerEvents = 'auto';
        img_rvl.style.transitionDuration = '0.5s';
    }
}

/*back to contents fade*/
var btt_parent = document.getElementById('btt_par');
btt_parent.addEventListener('click', backToTop);
var scroll_threshold = (subject_section.offsetHeight/2) + contents_section.offsetHeight;
window.addEventListener('scroll', btt_rvl);
function backToTop(){
    document.documentElement.scrollTop = 0;
}
function btt_rvl(){
    if(window.scrollY > scroll_threshold){
        btt_parent.style.opacity = '1';
        btt_parent.style.pointerEvents = 'auto';
        btc_main.style.transform = 'rotate(0deg)';
    }
    else{
        btt_parent.style.opacity = '0';
        btt_parent.style.pointerEvents = 'none';
        btc_main.style.transform = 'rotate(180deg)';
    }
}

/*back to contents info*/
var btc_info = document.getElementById('bt_menu');
var btc_main = document.getElementById('back_to_top');
btt_parent.addEventListener('mouseenter', btc_info_e);
btt_parent.addEventListener('mouseleave', btc_info_l);
function btc_info_e(){
    btc_info.style.transform = 'translate(0)';
    btc_info.style.opacity = '1';
}
function btc_info_l(){
    btc_info.style.transform = 'translate(30px)';
    btc_info.style.opacity = '0';
}

/*explore button*/
var xplore_btn = document.getElementById('explore');
xplore_btn.addEventListener('click', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let riple = document.createElement('span');
    riple.classList.add('riple')
    riple.style.left =  x + 'px';
    riple.style.top =  y + 'px';
    this.appendChild(riple);
    setTimeout(() => {
        riple.remove();
    },1000);
    document.documentElement.scrollTop = contents_section.offsetHeight;
});


/*scroll delay contents section*/
var contents = document.getElementsByClassName('sub_contents');
var sec1 = document.getElementById('sect1');
var sec2 = document.getElementById('sect2');
var sec3 = document.getElementById('sect3');
var sec4 = document.getElementById('sect4');
contents[0].style.opacity = '0';
contents[0].style.transform = 'translateX(-100px)';
contents[1].style.opacity = '0';
contents[1].style.transform = 'translateX(-100px)';
contents[2].style.opacity = '0';
contents[2].style.transform = 'translateX(-100px)';
contents[3].style.opacity = '0';
contents[3].style.transform = 'translateX(-100px)';

window.addEventListener('scroll', fade_contents_in)
function fade_contents_in(){
    if(window.scrollY > 178){
        contents[0].style.opacity = '1';
        contents[0].style.transform = 'translateX(0)';
        contents[0].style.transitionDelay = '0s';
        contents[1].style.opacity = '1';
        contents[1].style.transform = 'translateX(0)';
        contents[1].style.transitionDelay = '0.15s';
        contents[2].style.opacity = '1';
        contents[2].style.transform = 'translateX(0)';
        contents[2].style.transitionDelay = '0.3s';
        contents[3].style.opacity = '1';
        contents[3].style.transform = 'translateX(0)';
        contents[3].style.transitionDelay = '0.45s';
    }
    else{
        contents[0].style.opacity = '0';
        contents[0].style.transform = 'translateX(-50px)';
        contents[0].style.transitionDelay = '0s';
        contents[1].style.opacity = '0';
        contents[1].style.transform = 'translateX(-50px)';
        contents[1].style.transitionDelay = '0s';
        contents[2].style.opacity = '0';
        contents[2].style.transform = 'translateX(-50px)';
        contents[2].style.transitionDelay = '0s';
        contents[3].style.opacity = '0';
        contents[3].style.transform = 'translateX(-50px)';
        contents[3].style.transitionDelay = '0s';
    }
}

/*scrolling to sections*/
var ttl = document.getElementsByClassName('ttl');

contents[0].addEventListener('click', function(){
    document.documentElement.scrollTop = subject_section.offsetHeight + contents_section.offsetHeight;
});
contents[1].addEventListener('click', function(){
    document.documentElement.scrollTop = subject_section.offsetHeight + contents_section.offsetHeight + counter_section.offsetHeight;
});
contents[2].addEventListener('click', function(){
    document.documentElement.scrollTop = narrative_section.offsetTop;
});
contents[3].addEventListener('click', function(){
    document.documentElement.scrollTop = connect_section.offsetTop;
});

/*subject fade in*/
var subj_box = document.querySelector('#subjx');
var subj_img = document.querySelector('#subj_img');
window.addEventListener('scroll', fade_subj_in);
function fade_subj_in(){
    if(window.scrollY > contents_section.offsetHeight + 100){
        subj_box.style.opacity = '1';
        subj_box.style.transform = 'translateY(0)';
        subj_box.style.transitionDelay = '0.25s';
        subj_img.style.opacity = '1';
        subj_img.style.transform = 'translateX(0)';
        subj_img.style.transitionDelay = '0.5s';
    }
    else{
        subj_box.style.opacity = '0';
        subj_box.style.transform = 'translateY(1em)';
        subj_box.style.transitionDelay = '0s';
        subj_img.style.opacity = '0';
        subj_img.style.transform = 'translateY(-1em)';
        subj_img.style.transitionDelay = '0s';
    }
}

/*counter fade in*/
var countr = document.querySelector('#counter_parent');
window.addEventListener('scroll', fade_cnt_in);
function fade_cnt_in(){
    if(window.scrollY > contents_section.offsetHeight + subject_section.offsetHeight + (counter_section.offsetHeight/3)){
        countr.style.opacity = '1';
        countr.style.transform = 'translateX(0)';
        countr.style.transitionDelay = '0.25s';
    }
    else{
        countr.style.opacity = '0';
        countr.style.transform = 'translateX(-1em)';
        countr.style.transitionDelay = '0s';
    }
}

/*narrative fade in*/
var narration = document.getElementById('narrative_para');
var narration_ttl = document.getElementById('narrate_subttl');
var read_more_btn = document.getElementById('read_story');

window.addEventListener('scroll', fade_nar_in);
function fade_nar_in(){
    if(window.scrollY > contents_section.offsetHeight + subject_section.offsetHeight + counter_section.offsetHeight + 300){
        narration.style.opacity = '1';
        narration.style.transform = 'translateY(0)';
        narration.style.transitionDelay = '0.25s';
        narration_ttl.style.opacity = '1';
    }
    else{
        narration.style.opacity = '0';
        narration.style.transform = 'translateY(0.3em)';
        narration.style.transitionDelay = '0s';
        narration.style.transitionDuration = '0.5s';
        narration_ttl.style.opacity = '0';
    }
}

window.addEventListener('scroll', fade_btn_in);
function fade_btn_in(){
    read_more_btn.style.transitionDuration = '1s';
    if(window.scrollY > contents_section.offsetHeight + subject_section.offsetHeight + counter_section.offsetHeight + (narrative_section.offsetHeight/2)){
        read_more_btn.style.opacity = '1';
    }
    else{
        read_more_btn.style.opacity = '0';
        read_more_btn.style.transitionDelay = '0';
    }
}

read_more_btn.addEventListener('mouseenter' , function(){
    read_more_btn.style.transitionDuration = '0.3s';
});

/*days calculator*/
let _date = new Date();
let cr_day = _date.getDate();
let cr_month = _date.getMonth() + 1;
let cr_year = _date.getFullYear();

const date1 = new Date('9/14/2020');
const date2 = new Date(cr_month+'/'+cr_day+'/'+cr_year);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

const diff_year = diffDays / 365*12;
const rnd_months = Math.floor(diff_year);
const rnd_yr = Math.floor(diff_year/12);

var days_div = document.querySelector('#days');
var yr_div = document.querySelector('#years');
var days_sub_div = document.querySelector('#day_sub');
var yr_sub_div = document.querySelector('#yr_sub');
days_div.innerText = diffDays;
if(rnd_months<12){
    yr_div.innerText = rnd_months;
    yr_sub_div.innerText = ' complete month(s)';
}
else{
    yr_div.innerText = rnd_yr;
    yr_sub_div.innerText = ' complete year(s)';
}

days_div.style.filter = 'brightness(0.7) saturate(0)';
if((cr_year%4 == 0 && cr_year%100 == 0) && (diffDays/366 ===0)){
    days_div.style.filter = 'saturate(1)';
    hero_desc.innerHTML = `<span id="first_letter" style="margin-right:0.3em; font-size: 2.5em; font-family: sacramento;">we love us</span> <span style="color: #fff; text-shadow: 0 0 15px #FF007C;">&#10084;</span>`;
    hero_desc.style.color = '#FFD2E8';
    hero_desc.style.textShadow = '0  0 15px #FF007C';
}
if(cr_year%4 != 0 && (diffDays%365 === 0)){
    days_div.style.filter = 'saturate(1)';
    hero_desc.innerHTML = `<span id="first_letter" style="margin-right:0.3em; font-size: 2.5em; font-family: sacramento;">we love us</span> <span style="color: #fff; text-shadow: 0 0 15px #FF007C;">&#10084;</span>`;
    hero_desc.style.color = '#FFD2E8';
    hero_desc.style.textShadow = '0  0 15px #FF007C';
}

// login_section.style.opacity = '0';
// login_section.style.pointerEvents = 'none';
// html.classList.remove('stop_scroll');
