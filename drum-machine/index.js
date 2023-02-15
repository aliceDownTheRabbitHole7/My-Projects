import * as React from 'https://esm.sh/react@18.2.0';
import * as ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const soundsGroupOne = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

const soundsGroupTwo = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }, 
];

const soundsName = {
  heaterKit: "Heater Kit",
  pianoKit: "Piano Kit"
};

const soundsGroup = {
  heaterKit: soundsGroupOne,
  pianoKit: soundsGroupTwo
};

const KeyboardKey = ({ play, sound: { id, key, mp3, keyCode } }) => {
  
  const handleKeyDown = (event) => {
    if(event.keyCode === keyCode){
      play(key, id)
    }
  }
  
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, [])
  
  return (
    <button id={keyCode} className="drum-pad btn btn-primary m-1 w-25 shadow" onClick={() => play(key, id)}>
      <audio className="clip" id={key} src={mp3} />
      {key}
    </button>
  )
}

const Keyboard = ({ power, play, sounds }) => (
  <div className="keyboard">
    {power 
      ? sounds.map((sound) => <KeyboardKey play={play} sound={sound}/>)
      : sounds.map((sound) => <KeyboardKey play={play} sound={{...sound, mp3: '#'}}/>)
    }
  </div>
)

const DrumControl = ({ stop, name, power, volume, handleVolumeChange, changeSoundsGroup }) => (
  <div className="control">
    <button onClick={stop} className="btn btn-warning m-3">Power {power ? "OFF" : "ON"}</button>
    <h3 className="pr-4" id="vol-percent">Volume: %{Math.round(volume * 100)}</h3>
    <input
      max='1'
      min='0'
      step='0.01'
      type='range'
      value={volume}
      onChange={handleVolumeChange}/>
    <h3 id="name-text" className="mt-3">{name}</h3>
    <button onClick={changeSoundsGroup} className="btn btn-info mb-3">Change Sounds</button>
  </div>
)

const App = () => {
  const [power, setPower] = React.useState(true)
  const [volume, setVolume] = React.useState(1)
  const [soundType, setSoundType] = React.useState('heaterKit')
  const [soundName, setSoundName] = React.useState('')
  const [sounds, setSounds] = React.useState(soundsGroup[soundType])
  
  const stop = () => {
    setPower(!power)
  }
  
  const handleVolumeChange = (event) => {
    setVolume(event.target.value)
  }  
  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  }
  
  const changeSoundsGroup = () => {
    setSoundName("");
    if(soundType === 'heaterKit'){
      setSoundType('pianoKit')
      setSounds(soundsGroup.pianoKit)
    } else {
      setSoundType('heaterKit')
      setSounds(soundsGroup.heaterKit)
    }
  } 
  
  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key))
    audios.forEach(audio => {
      if(audio){
        audio.volume = volume
      }
    })
  }
  
  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div className="container d-flex align-items-center text-center m-2" id="display">
        <Keyboard power={power} play={play} sounds={sounds} />
        <DrumControl
          stop={stop}
          power={power}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
          name={soundName || soundsName[soundType]} 
          changeSoundsGroup={changeSoundsGroup}/>  
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));