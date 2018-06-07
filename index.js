const VoicesTTS = ((window) => {
	let CONF = {
		lang: 'zh-CN',  // language
		rate: 1,  		// 语速
		volume: 1,  	// 音量
		text: ''
	}

	const browserSupport = () => {
	    return ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window)
	}


	const init = (conf) => {
		if (conf) CONF = {...CONF, ...conf}

		if (!browserSupport()) {
			return false
		}
	}

	const speak = (text) => {
		let utterThis = new window.SpeechSynthesisUtterance()
		utterThis.lang = CONF.lang
		utterThis.rate = CONF.rate
		utterThis.volume = CONF.volume
        utterThis.text = text
        window.speechSynthesis.speak(utterThis)
	}

	const stop = () => {
    	window.speechSynthesis.cancel()
  	}

	return {
	    init: init,
	    browserSupport: browserSupport,
	    stop: stop,
	    speak: speak
	 }
})(window)

export default VoicesTTS
