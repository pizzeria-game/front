<script setup lang="ts"></script>

<template>
    <div class="container">
        <a href="#" class="button button--piyo">
            <div class="button__wrapper">
                <span class="button__text">ENTRY</span>
            </div>
            <div class="characterBox">
                <div class="character wakeup">
                    <div class="character__face"></div>
                </div>
                <div class="character wakeup">
                    <div class="character__face"></div>
                </div>
                <div class="character">
                    <div class="character__face"></div>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.button--piyo {
    --main_color: #f4cf47;
    --sub_color1: #f4e19c;
    --sub_color2: #ff8108;
    --base_color: #000;
    --border_radius1: 60px 60px 40px 40px / 48px 48px 30px 30px;
    --border_radius2: 70px 70px 40px 40px / 48px 48px 30px 30px;
    --border_radius3: 40px 40px 40px 40px / 48px 48px 30px 30px;
}
.button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 80px;
    box-sizing: border-box;
    text-decoration: none;
    border: solid 3px #000;
    border-radius: 40px;
    background: var(--main_color);
    font-family: "Fredoka One", cursive;
}
.button::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    right: 20px;
    bottom: 0;
    margin: auto 0;
    width: 24px;
    height: 24px;
    background: var(--base_color);
    transition: all ease 0.2s;
}
.button__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
}
.button__wrapper::before,
.button__wrapper::after {
    transition: all 0.5s ease;
}
.characterBox {
    position: absolute;
    top: -54px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 180px;
    height: 56px;
}
.button__text {
    position: relative;
    z-index: 3;
    font-size: 32px;
    letter-spacing: 4px;
    color: var(--base_color);
    transition: all 0.3s ease;
}
.character {
    position: relative;
    width: 56px;
    height: 36px;
    box-sizing: border-box;
    border: solid 3px #000;
    background: var(--main_color);
    border-radius: var(--border_radius1);
    animation: sleep 1s ease infinite alternate;
}

.character__face::before {
    left: -5px;
}
.character__face::after {
    right: -5px;
}

.button--piyo::before {
    clip-path: path(
        "M24,12.02c0-1.09-.75-1.71-.81-1.77L11.17,.45c-.91-.74-2.21-.56-2.91,.42-.69,.97-.52,2.37,.39,3.11l7.12,5.81-13.7-.02h0C.93,9.77,0,10.76,0,11.99c0,1.23,.93,2.22,2.07,2.22l13.7,.02-7.13,5.78c-.91,.74-1.09,2.13-.4,3.11,.41,.58,1.03,.88,1.65,.88,.44,0,.88-.15,1.25-.45l12.04-9.76c.07-.06,.82-.67,.82-1.77Z"
    );
}

.button:hover .button__wrapper::before {
    transform: translateX(-12px);
}
.button:hover .button__wrapper::after {
    transform: rotateY(180deg) translateX(-12px);
}
.button:hover .button__text {
    letter-spacing: 6px;
}
.button:hover::before {
    right: 14px;
}
.button:hover .wakeup {
    animation: wakeup 0.2s ease;
    animation-fill-mode: forwards;
}
.button:hover .wakeup .character__face {
    top: 20px;
}

@keyframes sleep {
    0% {
        height: 36px;
        border-radius: var(--border_radius1);
    }
    100% {
        height: 32px;
        border-radius: var(--border_radius2);
    }
}
@keyframes wakeup {
    0% {
        height: 32px;
        border-radius: var(--border_radius2);
    }
    100% {
        height: 56px;
        border-radius: var(--border_radius3);
    }
}
.container {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
}
.button:not(:last-child) {
    margin-bottom: 80px;
}
</style>
