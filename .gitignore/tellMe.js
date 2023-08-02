function tellMe(joke) {
  VoiceRSS.speech({
    key: '6297b78b27b140e0b3dd8d1b24b6355b',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}
