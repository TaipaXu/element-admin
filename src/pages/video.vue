<template>
    <div class="video-page">
        <video id="video-player" class="video-js video__player" controls preload="auto" data-setup="{}">
            <source src="//interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/mp4" />
            <source src="//interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/webm" />
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading
                to a web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                </a>
            </p>
        </video>
    </div>
</template>

<script setup lang="ts">
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css'

onMounted(() => {
    const options = {};

    const player = videojs('video-player', options, function onPlayerReady() {
        videojs.log('Your player is ready!');
    });
    player.on('suspend', function () {
        console.log("suspend");
    });
    player.on('loadstart', function () {
        console.log("loadstart");
    });
    player.on('progress', function () {
        console.log("progress");
    });
    player.on('abort', function () {
        console.log("abort");
    });
    player.on('error', function () {
        console.log("error");
    });
    player.on('stalled', function () {
        console.log("stalled");
    });
    player.on('play', function () {
        console.log("play");
    });
    player.on('pause', function () {
        console.log("pause");
    });
    player.on('loadedmetadata', function () {
        console.log("loadedmetadata");
    });
    player.on('loadeddata', function () {
        console.log("loadeddata");
    });
    player.on('waiting', function () {
        console.log("waiting");
    });
    player.on('playing', function () {
        console.log("playing");
    });
    player.on('canplay', function () {
        console.log("canplay");
    });
    player.on('canplaythrough', function () {
        console.log("canplaythrough");
    });
    player.on('seeking', function () {
        console.log("seeking");
    });
    player.on('seeked', function () {
        console.log("seeked");
    });
    player.on('timeupdate', function () {
        console.log("timeupdate");
    });
    player.on('ended', function () {
        console.log("ended");
    });
    player.on('ratechange', function () {
        console.log("ratechange");
    });
    player.on('durationchange', function () {
        console.log("durationchange");
    });
    player.on('volumechange', function () {
        console.log("volumechange");
    });
});
</script>

<style lang="scss">
.video {
    &__player {
        width: 100%;
    }
}
</style>
