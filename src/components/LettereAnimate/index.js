import './index.scss';

const LettereAnimate = ({ lettereClass, strArray, idx }) => {
    
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${lettereClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default LettereAnimate;
