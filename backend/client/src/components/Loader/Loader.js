import { Grid } from 'react-loader-spinner'
import "../Loader/Loader.scss"

function Loader() {
  return (
<div className='Loader__container'>
<div className="Loader">
<Grid
  height="80"
  width="70"
  color="white"
  ariaLabel="grid-loading"
  radius="8.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>
    </div>
  )
}

export default Loader