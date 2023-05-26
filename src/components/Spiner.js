import { RotatingLines } from 'react-loader-spinner';

export const Spiner = () => {
  const style = {textAlign: 'center'};
  return (
      
        <div style={style}>
<RotatingLines
  strokeColor='#9c27b0'
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
          visible={true}
          
/>
        </div>
    );
}