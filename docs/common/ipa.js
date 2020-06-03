
// 1. ipa transliteration (or direct?)
// 2. ipa emoji hint (sound colors?)
// 3. ipa mouth shapes (side/front)
// 4. kareoke practice: write/speak in language to match
// 5. word emojis 
// 6. word POS
// 7. translation (by word and phrase)
// TODO ipa letter audio, word audio

let ipaCommon = {
  "æ": {
    audio: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Near-open_front_unrounded_vowel.ogg",
    langs: {
      en: {
        icon: "apple",
        iconText: "apple",
        pre: "a",
        say: "ae"
      },
      hi: {
        dep: {
          
        },
        indep: {
          
        }
      }
    }
  },
  "ɑ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Open_back_unrounded_vowel.ogg",
    langs: {
      en: {
        icon: "flex-biceps",
        iconText: "arm",
        pre: "a",
        say: "a(h)"
      },
	  nl: {
		  graphemes: "a"
	  }
    }
  },
  "oː": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg",
      langs: {
	    en: {
	        icon: "airport",
	        iconText: "airplane",
	        pre: "a",
	        say: "a"
	  	},
		nl: {
			graphemes: "oo"
		}
	  }
  },
  "e": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Close-mid_front_unrounded_vowel.ogg",
    langs: {
      en: {
        icon: "airport",
        iconText: "airplane",
        pre: "a",
        say: "e(h)"
      }
    }
  },
  "ɛ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/7/71/Open-mid_front_unrounded_vowel.ogg",
	  langs: {
		  nl: {
			  graphemes: ["e", "ee"]
		  }
	  }
  },
  "h": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/d/da/Voiceless_glottal_fricative.ogg",
    langs: {
      en: {
        icon: "hummingbird",
        iconText: "hummingbird",
        pre: "h",
        say: "h"
      },
	  nl: {
		  graphemes: "h"
	  }
    }
  },
  "i": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/9/91/Close_front_unrounded_vowel.ogg",
    langs: {
      en: {
        icon: "inbox",
        iconText: "inbox",
        pre: "i",
        say: "e(e)"
      },
	  nl: {
		  graphemes: "ie"
	  }
    }
  },
  "o": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/8/84/Close-mid_back_rounded_vowel.ogg",
    langs: {
      en: {
        icon: "octopus",
        iconText: "octopus",
        pre: "o",
        say: "O"
      }
    }
  },
  "oː": {
    langs: {
      en: {
        icon: "scout-sign",
        iconText: "oath",
        pre: "oa",
        say: "O"
      }
    }
  },
  "øː": {
	  langs: {
		  nl: {
			  graphemes: "eu"
		  }
	  }
  },
  "y": {
    audio: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Close_front_rounded_vowel.ogg",
    langs: {
      en: {
        icon: "booger",
        iconText: "ooze",
        pre: "oo",
        say: "oo"
      },
	  nl: {
		  graphemes: "uu"
	  }
    }
  },
  "w": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Voiced_labio-velar_approximant.ogg",
    langs: {
      en: {
        icon: "wine-glass",
        iconText: "wine",
        pre: "w",
        say: "w"
      },
	  nl: {
		  graphemes: "w"
	  }
    }
  },
  "x": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Voiceless_velar_fricative.ogg",
    langs: {
      en: {
        icon: "hummingbird",
        iconText: "hummingbird",
        pre: "h",
        foreign: "nl",
        say: "hg"
      },
	  nl: {
		  graphemes: ["ch", "g"]
	  }
    }
  }
}

// https://img.icons8.com/color/26/000000/father.png
let ipa = {
  "ɑ": ipaCommon["ɑ"],
  "a": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/0/0e/PR-open_front_unrounded_vowel.ogg",
      langs: {
        en: {
          icon: "flex-biceps",
          iconText: "arm",
          pre: "a",
          say: "a(h)"
        }
      }
  },
  "æ": ipaCommon["æ"],
  "œː": {
	  langs: {
		  nl: {
			  graphemes: "eu"
		  }
	  }
  },
  "aː": {
	  langs: {
		  nl: {
			  graphemes: "aa"
		  }
	  }
  },
  "ɑi": {
	  langs: {
		  nl: {
			  graphemes: "ai"
		  }
	  }
  },
  "aːi":  {
	  langs: {
		  nl: {
			  graphemes: "aai"
		  }
	  }
  },
  "ɐ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/1/1e/PR-near-open_central_unrounded_vowel.ogg"	
  },
  "ɑ̃ː": {
	  langs: {
		  nl: {
			  graphemes: "en"
		  }
	  }
  },
  "ä": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/5/50/Open_central_unrounded_vowel.ogg"
  },
  "ɶ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Open_front_rounded_vowel.ogg"
  },
  "ɒ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/3/31/PR-open_back_rounded_vowel.ogg"
  },
  "b": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Voiced_bilabial_plosive.ogg",
    langs: {
      en: {
        icon: "butterfly",
        iconText: "butterfly",
        pre: "b",
        say: "b"
      },
	  nl: {
		  graphemes: "b"
	  }
    }
  },
  "c": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Voiceless_palatal_plosive.ogg",
    langs: {
      en: {
        icon: "cheese",
        iconText: "cheese",
        pre: "ch",
        say: "ch"
      },
	  nl: {
		  graphemes: ["tj", "ch"]
	  }
    }
  },
  "ɔː": {
	  langs: {
		  nl: {
			  graphemes: "o"
		  }	
	  }
  },
  "ɔi": {
	  langs: {
		  nl: {
			  graphemes: "oi"
		  }	
	  }
  },
  "d": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/0/01/Voiced_alveolar_plosive.ogg",
    langs: {
      en: {
        icon: "duck",
        iconText: "duck",
        pre: "d",
        say: "d"
      },
	  nl: {
		  graphemes: "d"
	  }
    }
  },
  "ɖ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/2/27/Voiced_retroflex_stop.oga"
  },
  "e": ipaCommon["e"],
  "eːu": {
	  langs: {
		  nl: {
			  graphemes: "eeuw"
		  }
	  }
  },
  "ɛ": ipaCommon["ɛ"],
  "ɘ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/6/60/Close-mid_central_unrounded_vowel.ogg"
  },
  "ə": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Mid-central_vowel.ogg",
	  langs: {
		  nl: {
			  graphemes: "e"
		  }
	  }
  },
  "ɛː": ipaCommon["ɛ"],
  "ɛ̃ː":  {
	  langs: {
		  nl: {
			  graphemes: "ain"
		  }
	  }
  },
  "ɛi": {
	  langs: {
		  nl: {
			  graphemes: ["ij", "ei"]
		  }
	  }
  },
  "eː": ipaCommon["ɛ"],
  "ɜ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/0/01/Open-mid_central_unrounded_vowel.ogg",
      langs: {
        en: {
          icon: "airport",
          iconText: "airplane",
          pre: "a",
          say: "e(h)"
        }
      }
  },
  "ɜː": ipaCommon["e"],
  "f": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/3/33/Voiceless_labiodental_fricative.ogg",
    langs: {
      en: {
        icon: "baby-feet",
        iconText: "feet",
        pre: "f",
        say: "f"
      },
	  nl: {
		  graphemes: "f"
	  }
    }
  },
  "g": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/1/12/Voiced_velar_plosive_02.ogg",
    langs: {
      en: {
        icon: "year-of-goat",
        iconText: "goat",
        pre: "g",
        say: "g"
      },
	  nl: {
		  graphemes: "g"
	  }
    }
  },
  "h": ipaCommon["h"],
  "ɦ": ipaCommon["h"],
  "i": ipaCommon["i"],
  "iː": {
	  langs: {
		  nl: {
			  graphemes: "y"
		  }
	  }
  },
  "ɨ": {
  	audio: "https://upload.wikimedia.org/wikipedia/commons/5/53/Close_central_unrounded_vowel.ogg"
  },
  "ɪ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Near-close_near-front_unrounded_vowel.ogg",
	  langs: {
		  nl: {
			  graphemes: "i"
		  }
	  }
  },
  "iu": {
	  langs: {
		  nl: {
			  graphemes: "ieuw"
		  }
	  }
  },
  "ɟ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Voiced_palatal_plosive.ogg",
    langs: {
      en: {
        icon: "puzzle",
        iconText: "jigsaw",
        pre: "j",
        say: "j"
      },
	  nl: {
		  graphemes: "g"
	  }
    }
  },
  "j": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Palatal_approximant.ogg",
    langs: {
      en: {
        icon: "sailing",
        iconText: "yacht",
        pre: "y",
        say: "y"
      },
	  nl: {
		  graphemes: "j"
	  }
    }
  }, 
  "k": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Voiceless_velar_plosive.ogg",
    langs: {
      en: {
        icon: "cup",
        iconText: "cup",
        pre: "c",
        say: "c"
      },
	  nl: {
		  graphemes: ["k", "c"]
	  }
    }
  }, 
  "l": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alveolar_lateral_approximant.ogg",
    langs: {
      en: {
        icon: "lamp",
        iconText: "lamp",
        pre: "l",
        say: "l"
      },
	  nl: {
		  graphemes: "l"
	  }
    }
  },
  "ɭ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Retroflex_lateral_approximant.ogg"
  },
  "ɫ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Velarized_alveolar_lateral_approximant.ogg"
  },
  "m": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bilabial_nasal.ogg",
    langs: {
      en: {
        icon: "magnet",
        iconText: "magnet",
        pre: "m",
        say: "m"
      },
	  nl: {
		  graphemes: "m"
	  }
    }
  },
  "n": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/2/29/Alveolar_nasal.ogg",
    langs: {
      en: {
        icon: "jewelry",
        iconText: "necklace",
        pre: "n",
        say: "n"
      },
	  nl: {
		  graphemes: "n"
	  }
    }
  },
  "ɲ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/4/46/Palatal_nasal.ogg",
    langs: {
      en: {
        icon: "artificial-intelligence",
        iconText: "neural",
        pre: "ne",
        say: "ny"
      },
	  nl: {
		  graphemes: ["nj", "n"]
	  }
    }
  }, 
  "ŋ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/3/39/Velar_nasal.ogg",
    langs: {
      en: {
        icon: "musical-notes",
        iconText: "so[ng]",
        pre: "ng",
        say: "ng"
      },
	  nl: {
		  graphemes: "ng"
	  }
    }
  },
  "ɳ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/a/af/Retroflex_nasal.ogg"
  },
  "o": ipaCommon["o"],
  "oː": ipaCommon["oː"],
  "oːi": {
	  langs: {
		  nl: {
			  graphemes: "oo"
		  }
	  }
  },
  "ɔ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d0/PR-open-mid_back_rounded_vowel.ogg",
      langs: {
        en: {
          icon: "octopus",
          iconText: "octopus",
          pre: "o",
          say: "O"
        },
		nl: {
			graphemes: "o"
		}
      }
  },
  "ɔ̃ː":  {
	  langs: {
		  nl: {
			  graphemes: "on"
		  }
	  }
  },
  "ɞ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Open-mid_central_rounded_vowel.ogg"
  },
  "œ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/0/00/Open-mid_front_rounded_vowel.ogg"
  },
  "ʌ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/8/80/PR-open-mid_back_unrounded_vowel2.ogg"
  },
  "ø": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/5/53/Close-mid_front_rounded_vowel.ogg",
      langs: {
        en: {
          icon: "octopus",
          iconText: "octopus",
          pre: "o",
          say: "O"
        }
      }
  },
  "øː": ipaCommon["oː"],
  "ɵ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Close-mid_central_rounded_vowel.ogg"
  },
  "o̞": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mid_back_rounded_vowel.ogg"
  },
  "ʉ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/6/66/Close_central_rounded_vowel.ogg"
  },	
  "ɯ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Close_back_unrounded_vowel.ogg"
  },
  "ʊ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Near-close_near-back_rounded_vowel.ogg"
  },
  "ʌu": {
	  langs: {
		  nl: {
			  graphemes: ["ou", "auw"]
		  }
	  }
  },
  "ɤ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/2/26/Close-mid_back_unrounded_vowel.ogg"
  },
  "p": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/5/51/Voiceless_bilabial_plosive.ogg",
    langs: {
      en: {
        icon: "beach",
        iconText: "palm",
        pre: "p",
        say: "p"
      },
	  nl: {
		  graphemes: ["p", "b"]
	  }
    }
  },
  "r": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Alveolar_trill.ogg",
    langs: {
      en: {
        icon: "robot-2",
        iconText: "robot",
        pre: "r",
        say: "r",
        foreign: "fr"
      },
	  nl: {
		  graphemes: "r"
	  }
    }
  },
  "ɹ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Alveolar_approximant.ogg"
  },
  "ɾ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Alveolar_tap.ogg"
  },
  "ɽ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/8/87/Retroflex_flap.ogg"
  },
  "ɻ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Retroflex_approximant.ogg"
  },
  "s": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Voiceless_alveolar_sibilant.ogg",
    langs: {
      en: {
        icon: "socks",
        iconText: "sock",
        pre: "s",
        say: "s"
      },
	  nl: {
		  graphemes: "s"
	  }
    }
  },
  "ʂ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Voiceless_retroflex_sibilant.ogg"
  },
  "ʃ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Voiceless_palato-alveolar_sibilant.ogg",
    langs: {
      en: {
        icon: "trainers",
        iconText: "shoe",
        pre: "sh",
        say: "sh"
      },
	  nl: {
	  	graphemes: ["sj", "ch"]
	  }
    }
  },
  "ʈ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Voiceless_retroflex_stop.oga"
  },
  "t̠ʃ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/9/97/Voiceless_palato-alveolar_affricate.ogg"
  },
  "ʈʂ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Voiceless_retroflex_affricate.ogg"
  },
  "ʒ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/3/30/Voiced_palato-alveolar_sibilant.ogg",
    langs: {
      en: {
        icon: "glasses",
        iconText: "vi[si]on",
        pre: "si",
        say: "zh"
      },
	  nl: {
		  graphemes: "j"
	  }
    }
  },
  "ɖʐ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/5/58/Voiced_retroflex_affricate.ogg"
  },
  "d̠ʒ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Voiced_palato-alveolar_affricate.ogg"
  },
  "t": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/0/02/Voiceless_alveolar_plosive.ogg",
    langs: {
      en: {
        icon: "tunnel",
        iconText: "tunnel",
        pre: "t",
        say: "t"
      },
	  nl: {
		  graphemes: ["t", "d"]
	  }
    }
  },
  "θ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/8/80/Voiceless_dental_fricative.ogg",
    langs: {
      en: {
        icon: "temperature",
        iconText: "thermometer",
        pre: "th",
        say: "th"
      }
    }
  },
  "ð": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Voiced_dental_fricative.ogg"
  },  
  "ʏ": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Near-close_near-front_rounded_vowel.ogg",
    langs: {
      en: {
        icon: "up",
        iconText: "up",
        pre: "u",
        say: "u(h)"
      },
	  nl: {
		  graphemes: "u"
	  }
    }
  },
  "ui": {
	  langs: {
		  nl: {
			  graphemes: "oei"
		  }
	  }
  },
  "œy": {
    langs: {
      en: {
        icon: "home",
        iconText: "h[ou]se",
        pre: "ou",
        say: "ou"
      },
	  nl: {
		  graphemes: "ui"
	  }
    }
  },  
  "y": ipaCommon["y"],
  "yː": {
	  langs: {
		  nl: {
			  graphemes: "u"
		  }
	  }
  },
  "yu": {
	  langs: {
		  nl: {
			  graphemes: "uw"
		  }
	  }
  },
  "u": {
		audio: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Close_back_rounded_vowel.ogg",
	    langs: {
	      en: {
	        icon: "booger",
	        iconText: "ooze",
	        pre: "oo",
	        say: "oo"
	      },
		  nl: {
			  graphemes: "oe"
		  }
	    }
  },
  "v": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/8/85/Voiced_labiodental_fricative.ogg",
    langs: {
      en: {
        icon: "vending-machine",
        iconText: "vending-machine",
        pre: "v",
        say: "v"
      },
	  nl: {
		  graphemes: "v"
	  }
    }
  },
  "w": ipaCommon["w"],
  "ʋ": ipaCommon["w"],
  "x": ipaCommon["x"],
  "ɣ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/4/47/Voiced_velar_fricative.ogg",
	  langs: {
		  nl: {
			  graphemes: "g"
		  }
	  }
  },
  "z": {
	audio: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Voiced_alveolar_sibilant.ogg",
    langs: {
      en: {
        icon: "archive",
        iconText: "zip",
        pre: "z",
        say: "z"
      },
	  nl: {
		  graphemes: "z"
	  }
    }
  },
  "ʐ": {
	  audio: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Voiced_retroflex_sibilant.ogg"
  }
}

let ipaLetterType = {
  vowels: {
    "ɑ": true,
    "a": true,
    "aː": true,
    "ɛ": true,
    "e": true,
    "ɛː": true,
    "eː": true,
    "ə": true,
    "ɪ": true,
    "i": true,
    "ɔ": true,
    "o": true,
    "ø": true,
    "øː": true,
    "oː": true,
    "u": true,
    "ʏ": true,
    "œy": true,
    "y": true,
  },
  consonants: {
    "b": true,
    "c": true,
    "d": true,
    "f": true,
    "g": true,
    "ɟ": true,
    "ɦ": true,
    "j": true,
    "k": true,
    "l": true,
    "m": true,
    "n": true,
    "ɲ": true,
    "ŋ": true,
    "p": true,
    "r": true,
    "s": true,
    "ʃ": true,
    "ʒ": true,
    "t": true,
    "v": true,
    "ʋ": true,
    "ɣ": true,
    "x": true,
    "z": true
  }
}


let alphabetTypes = {
  alphasyllabic: {
    hi: true
  },
  alpha: {
    en: true,
    nl: true
  },
  abjad: {
   arabic: true 
  }
}
let visualSpeechPart = {
  "noun": "user",
  "verb": ""
  // etc
}

let speechControls = {
	"breath": {
		"open": {img: "😮"}, 
		"glide_approximant": {img: "😗"}, 	// w
		"lateral_approximant": {img: "🔀"}, // l
		"sibilant_affricate": {img: "🍕"},  // ch, tzz (pi[zz]a)
		"non_sibilant_fricative": {img: "😛"}, // th - non-sibilant - flat tongue with tongue  slightly sticking out - airflow is straight out
		"sibilant_fricative": {img: "🤐"}, // sibilant - high sound with teeth, eg, sip, zip - curved tongue with tongue near the teeth - airflow is s-curved via tongue, upper mouth, and teeth ~
		"tap": {img: "🦁"},			// r
		"trill": {img: "⏰"},		// rr
		"plosive": {img: "💥"}, 	// stop
		"nasal": {img: "👃"},
	},
	"lips": {
		"bilabial": {img: "-"},	// --			// mb-close
		"labiodental": {img: "T"},	// `^`		// fv-close
		"unrounded_close": {img: ">1"},
		"unrounded_near_close": {img: ">2"},
		"unrounded_close_mid": {img: ">3"},
		"unrounded_mid": {img: ">+"},
		"unrounded_open_mid": {img: ">5"},
		"unrounded_near_open": {img: ">6"},
		"unrounded_open": {img: ">7"},
		"rounded_close": {img: ")1"},
		"rounded_near_close": {img: ")2"},
		"rounded_close_mid": {img: ")3"}, 
		"rounded_mid": {img: ")+"},  
		"rounded_open_mid": {img: ")5"},
		"rounded_open": {img: ")7"},
	},
	"tongue": {
		"front": {img: " #```/ "},
		"near_front": {img: " /*``/ "},
		"central": {img: " /`*`/ "},		// raised
		"near_back": {img: "/``*/ "},
		"back": {img: " /```# "}, 		// retracted
		"rest": {img: " __ "},
		"dental": {img: " #```/ "}, 		// th
		"alveolar": {img: " /*``/ "}, 	// n, t, d, s, z
		"retroflex": {img: "/`(`/ "},	// alveolar w/ low-pitch
		"post_alveolar": {img: " /`*`/ "}, // sh, ch
		"palatal": {img: "/``*/ "}, 	// j
		"velar": {img: " /```# "}		// k ga
	},
	"throat": {
		"unvoiced": {img: "|"}, 
		"voiced": {img: ":"}
	}
}

let speechControlsArray = Object.keys(speechControls)

let speechCodes = {
	"open:unrounded_close:front:unvoiced": {
		ipa: "i"
	},
	"open:unrounded_close:central:unvoiced": {
		ipa: "ɨ"
	},
	"open:unrounded_close:back:unvoiced": {
		ipa: "ɯ"
	},
	"open:rounded_close:front:unvoiced": {
		ipa: "y"
	},
	"open:rounded_close:central:unvoiced": {
		ipa: "ʉ"
	},
	"open:rounded_close:back:unvoiced": {
		ipa: "u"
	},
	"open:unrounded_near_close:near_front:unvoiced": {
		ipa: "ɪ"
	},
	"open:rounded_near_close:near_front:unvoiced": {
		ipa: "ʏ"
	},
	"open:rounded_near_close:near_back:unvoiced": {
		ipa: "ʊ"
	},
	"open:unrounded_close_mid:front:unvoiced": {
		ipa: "e"
	},
	"open:unrounded_close_mid:central:unvoiced": {
		ipa: "ɘ"
	},
	"open:unrounded_close_mid:back:unvoiced": {
		ipa: "ɤ"
	},
	"open:rounded_close_mid:front:unvoiced": {
		ipa: "ø"
	},
	"open:rounded_close_mid:central:unvoiced": {
		ipa: "ɵ"
	},
	"open:rounded_close_mid:back:unvoiced": {
		ipa: "o"
	},
	"open:rounded_mid:central:unvoiced": {
		ipa: "ə"
	},
	"open:rounded_mid:back:unvoiced": {
		ipa: "o̞"
	},
	"open:unrounded_open_mid:front:unvoiced": {
		ipa: "ɛ"
	},
	"open:unrounded_open_mid:central:unvoiced": {
		ipa: "ɜ"
	},
	"open:unrounded_open_mid:back:unvoiced": {
		ipa: "ʌ"
	},
	"open:rounded_open_mid:front:unvoiced": {
		ipa: "œ"
	},
	"open:rounded_open_mid:central:unvoiced": {
		ipa: "ɞ"
	},
	"open:rounded_open_mid:back:unvoiced": {
		ipa: "ɔ"
	},
	"open:unrounded_near_open:front:unvoiced": {
		ipa: "æ"
	},
	"open:unrounded_near_open:central:unvoiced": {
		ipa: "ɐ"
	},
	"open:unrounded_open:front:unvoiced": {
		ipa: "a"
	},
	"open:unrounded_open:central:unvoiced": {
		ipa: "ä"
	},
	"open:unrounded_open:back:unvoiced": {
		ipa: "ɑ"
	},
	"open:rounded_open:front:unvoiced": {
		ipa: "ɶ"
	},
	"open:rounded_open:back:unvoiced": {
		ipa: "ɒ"
	},
	"nasal:bilabial:rest:voiced": {
		ipa: "m"
	},
	"nasal:unrounded_mid:retroflex:voiced": {
		ipa: "ɳ"
	},
	"nasal:unrounded_mid:alveolar:voiced": {
		ipa: "n"
	},
	"nasal:unrounded_mid:palatal:voiced": {
		ipa: "ɲ"
	},
	"nasal:unrounded_mid:velar:voiced": {
		ipa: "ŋ"
	},
	"plosive:bilabial:rest:unvoiced": {
		ipa: "p"
	},
	"plosive:bilabial:rest:voiced": {
		ipa: "b"
	},
	"plosive:unrounded_mid:alveolar:unvoiced": {
		ipa: "t"
	},
	"plosive:unrounded_mid:retroflex:unvoiced": {
		ipa: "ʈ"
	},
	"plosive:unrounded_mid:alveolar:voiced": {
		ipa: "d"
	},
	"plosive:unrounded_mid:retroflex:voiced": {
		ipa: "ɖ"
	},
	"plosive:unrounded_mid:palatal:voiced": {
		ipa: "ɟ"
	},
	"plosive:unrounded_mid:palatal:unvoiced": {
		ipa: "c"
	},
	"plosive:unrounded_mid:velar:unvoiced": {
		ipa: "k"
	},
	"plosive:unrounded_mid:velar:voiced": {
		ipa: "g"
	},
	"sibilant_affricate:unrounded_mid:post_alveolar:unvoiced": {
		ipa: "t̠ʃ"
	},
	"sibilant_affricate:unrounded_mid:retroflex:unvoiced": {
		ipa: "ʈʂ"
	},
	"sibilant_affricate:unrounded_mid:retroflex:voiced": {
		ipa: "ɖʐ"
	},
	"sibilant_affricate:unrounded_mid:post_alveolar:voiced": {
		ipa: "d̠ʒ"
	},
	"sibilant_fricative:unrounded_mid:alveolar:unvoiced": {
		ipa: "s"
	},
	"sibilant_fricative:unrounded_mid:retroflex:unvoiced": {
		ipa: "ʂ"
	},
	"sibilant_fricative:unrounded_mid:alveolar:voiced": {
		ipa: "z"
	},
	"sibilant_fricative:unrounded_mid:retroflex:voiced": {
		ipa: "ʐ"
	},
	"sibilant_fricative:unrounded_mid:post_alveolar:unvoiced": {
		ipa: "ʃ"
	},	
	"sibilant_fricative:unrounded_mid:post_alveolar:voiced": {
		ipa: "ʒ"
	},
	"non_sibilant_fricative:labiodental:rest:unvoiced": {
		ipa: "f"
	},
	"non_sibilant_fricative:labiodental:rest:voiced": {
		ipa: "v"
	},
	"non_sibilant_fricative:unrounded_mid:dental:unvoiced": {
		ipa: "θ"
	},
	"non_sibilant_fricative:unrounded_mid:dental:voiced": {
		ipa: "ð"
	},
	"non_sibilant_fricative:unrounded_mid:rest:unvoiced": {
		ipa: "h"
	},
	"non_sibilant_fricative:unrounded_mid:velar:voiced": {
		ipa: "ɣ"
	},
	"non_sibilant_fricative:unrounded_mid:velar:unvoiced": {
		ipa: "x"
	},
	"glide_approximant:unrounded_mid:alveolar:voiced": {
		ipa: "ɹ"
	},
	"glide_approximant:unrounded_mid:retroflex:voiced": {
		ipa: "ɻ"
	},
	"tap:unrounded_mid:alveolar:voiced": {
		ipa: "ɾ"
	},
	"tap:unrounded_mid:retroflex:voiced": {
		ipa: "ɽ"
	},
	"trill:unrounded_mid:alveolar:voiced": {
		ipa: "r"
	},
	"glide_approximant:unrounded_mid:palatal:voiced": {
		ipa: "j"
	},
	"lateral_approximant:unrounded_mid:alveolar:voiced": {
		ipa: "l"
	},
	"lateral_approximant:unrounded_mid:retroflex:voiced": {
		ipa: "ɭ"
	},
	"lateral_approximant:unrounded_mid:velar:voiced": {
		ipa: "ɫ"
	},
	"glide_approximant:unrounded_mid:velar:voiced": {
		ipa: "w"
	}
}

let speechCodesArray = Object.keys(speechCodes)

for (let [code, val] of Object.entries(speechCodes)) {
	if (!ipa[val.ipa])
		ipa[val.ipa] = {}
	ipa[val.ipa].speechCode = code
}

let graphemes = {
	// source. populate ipa with graphemes.
	en: {
		"a": ["ɑː", "æ", "eɪ", "ə"],
		"b": ["b"],
		"c": ["k"],
		"d": ["d", "dj"],
		"dg": ["dʒ"],
		"e": ["ɛ", "iː", "ɪ"],
		"ee": ["iː"],
		"f": ["f"],
		"g": ["g", "dʒ", "ʒ"],
		"gh": ["x"],
		"h": ["h"],
		"i": ["aɪ", "ɪ", "i"],
		"io": ["i"],
		"ie": ["aɪ"],
		"j": ["j"],
		"k": ["k"],
		"l": ["l", "lj"],
		"le": ["əl"],
		"m": ["m"],
		"n": ["n", "nj", "ŋ"],
		"ng": ["ŋ"],
		"o": ["ɒ"],
		"ou": ["aʊ"],
		"ow": ["aʊ"],
		"oa": ["oʊ"],
		"ough": ["ɔː"],
		"oi": ["ɔɪ"],
		"oo": ["ʊ", "uː"],
		"p": ["p"],
		"q": ["k", "kw"],
		"r": ["ɹ"],
		"s": ["s", "sj", "ʃ", "z", "ʒ"],
		"t": ["t", "tj"],
		"tt": ["t"],
		"ti": ["ʃ"],
		"th": ["θ", "θj", "ð"],
		"the": ["ð"],
		"tch": ["tʃ"],
		"ch": ["tʃ"],
		"u": ["uː", "ʌ", "u"],
		"v": ["v"],
		"w": ["w"],
		"wh": ["hw"],
		"x": ["z", "k"],
		"y": ["j", "i"],
		"z": ["z", "zj"]
	},
	// destionation. population this with values from ipa
	nl: {
		"a": [],
		"aa": [],
		"aai": [],
		"ai": [],
		"ain": [],
		"auw": [],
		"b": [],
		"c": [],
		"ch": [],
		"d": [],
		"e": [],
		"ee": [],
		"eeuw": [],
		"ei": [],
		"en": [],
		"eu": [],
		"f": [],
		"g": [],
		"h": [],
		"i": [],
		"ie": [],
		"ieuw": [],
		"ij": [],
		"j": [],
		"k": [],
		"l": [],
		"m": [],
		"n": [],
		"ng": [],
		"nj": [],
		"o": [],
		"oe": [],
		"oei": [],
		"oi": [],
		"on": [],
		"oo": [],
		"ooi": ["oːi"],
		"ou": [],
		"p": [],
		"q": ['ku'],
		"r": [],
		"s": [],
		"sj": [],
		"t": [],
		"tj": [],
		"u": [],
		"ui": [],
		"uu": [],
		"uw": [],
		"v": [],
		"w": [],
		"x": ['z'],
		"y": [],
		"z": []
	}
}

Object.entries(ipa).forEach(([ipaVal, data]) => {
	if (data.langs && data.langs.nl && data.langs.nl.graphemes) {
		let g = data.langs.nl.graphemes
		if (!Array.isArray(g)) {
			g = [g]
		}
		g.forEach(gg => {
			if (!graphemes.nl[gg])
				graphemes.nl[gg] = []
			graphemes.nl[gg].push(ipaVal)
		})
	}
})
Object.entries(graphemes.en).forEach(([grapheme, ipaVals]) => {
	ipaVals.forEach(ipaVal => {
		let ipaObj = {langs: {en: {graphemes: []}}}
		if (!ipa[ipaVal])
			ipa[ipaVal] = ipaObj
		if (!ipa[ipaVal].langs)
			ipa[ipaVal].langs = ipaObj.langs
		if (!ipa[ipaVal].langs.en)
			ipa[ipaVal].langs.en = ipaObj.langs.en
		if (!ipa[ipaVal].langs.en.graphemes)
			ipa[ipaVal].langs.en.graphemes = ipaObj.langs.en.graphemes
		ipa[ipaVal].langs.en.graphemes.push(grapheme)
	})
})

let alphabetSimilarity = {
	en: {
		'a': ['e'],
		'b': ['d', 'p', 'q'],
		'c': ['e', 'o', 'u'],
		'd': ['b', 'p', 'q'],
		'e': ['a'],
		'f': ['t'],
		'g': ['p', 'q', 'y'],
		'h': ['k'],
		'i': ['j', 'l'],
		'j': ['l', 'i'],
		'k': ['h'],
		'l': ['j', 'i'],
		'm': ['n'],
		'n': ['m'],
		'o': ['c', 'u'],
		'p': ['b', 'g', 'q'],
		'q': ['b', 'g', 'p'],
		'r': [],
		's': ['z'],
		't': ['f'],
		'u': ['o', 'c'],
		'v': [],
		'w': [],
		'x': [],
		'y': [],
		'z': ['s']
	}
}

// 	https://st.unicode.org/cldr-apps/v#/hi/Smileys/
let langEmojis = {
	"hi": {
		"हरा दिल": "💚"
	}
}

let alphabets = {
	en: {
		"a": {
			ipa: "eɪ",
			nl: "y"
		},
		"b": {
			ipa: "bi",
			nl: "bi"
		},
		"c": {
			ipa: "si",
			nl: "si"
		},
		"d": {
			ipa: "di",
			nl: "di"
		},
		"e": {
			ipa: "i",
			nl: "i"
		},
		"f": {
			ipa: "ɛf",
			nl: "f"
		},
		"g": {
			ipa: "ʒi",
			nl: "ji"
		},
		"h": {
			ipa: "eɪtʃ",
			nl: "eitch"
		},
		"i": {
			ipa: "aɪ",
			nl: "ai"
		},
		"j": {
			ipa: "ʒeɪ",
			nl: "jei"
		},
		"k": {
			ipa: "keɪ",
			nl: "kei"
		},
		"l": {
			ipa: "ɛl",
			nl: "l"
		},
		"m": {
			ipa: "ɛm",
			nl: "m"
		},
		"n": {
			ipa: "ɛn",
			nl: "n"
		},
		"o": {
			ipa: "oʊ",
			nl: "o"
		},
		"p": {
			ipa: "pi",
			nl: "pi"
		},
		"q": {
			ipa: "kju",
			nl: "kuw"
		},
		"r": {
			ipa: "ɑr",
			nl: "ar"
		},
		"s": {
			ipa: "ɛs",
			nl: "s"
		},
		"t": {
			ipa: "ti",
			nl: "ti"
		},
		"u": {
			ipa: "ju",
			nl: "uw"
		},
		"v": {
			ipa: "vi",
			nl: "wi"
		},
		"w": {
			ipa: "dʌbəlju",
			nl: "doubbel uw"
		},
		"x": {
			ipa: "ɛks",
			nl: "x"
		},
		"y": {
			ipa: "waɪ",
			nl: "wai"
		},
		"z": {
			ipa: "zi",
			nl: "zi"
		}
	},
	nl: {
		"a": {
			ipa: "a",
			en: "a(h)"
		},
		"b": {
			ipa: "be",
			en: "bay"
		},
		"c": {
			ipa: "se",
			en: "say"
		},
		"d": {
			ipa: "de",
			en: "day"
		},
		"e": {
			ipa: "e",
			en: "a"
		},
		"f": {
			ipa: "ɛf",
			en: "f"
		},
		"g": {
			ipa: "ɣe",
			en: "h(~)ey"
		},
		"h": {
			ipa: "ɦa",
			en: "ha"
		},
		"i": {
			ipa: "i",
			en: "e"
		},
		"j": {
			ipa: "je",
			en: "ya(y)"
		},
		"k": {
			ipa: "ka",
			en: "ka"
		},
		"l": {
			ipa: "ɛɫ",
			en: "l"
		},
		"m": {
			ipa: "ɛm",
			en: "m"
		},
		"n": {
			ipa: "ɛn",
			en: "n"
		},
		"o": {
			ipa: "o",
			en: "o"
		},
		"p": {
			ipa: "pe",
			en: "pay"
		},
		"q": {
			ipa: "ky",
			en: "ku"
		},
		"r": {
			ipa: "ɛɾ",
			en: "er"
		},
		"s": {
			ipa: "ɛs",
			en: "s"
		},
		"t": {
			ipa: "te",
			en: "tay"
		},
		"u": {
			ipa: "y",
			en: "oo(h)"
		},
		"v": {
			ipa: "ve",
			en: "fay"
		},
		"w": {
			ipa: "ʋe",
			en: "vay"
		},
		"x": {
			ipa: "ɪks",
			en: "iks"
		},
		"y": {
			ipa: "ɛɪ",
			en: "a(y)"
		},
		"z": {
			ipa: "zɛt",
			en: "zet"
		}
	}
}
