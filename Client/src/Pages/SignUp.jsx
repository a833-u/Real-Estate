import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const BRANDING = {
  logo: (
    <img
      src="/favicon.png"
      alt="PropVista logo"
      style={{ height: 77 }}
    />
  ),
  title: 'PropVista',
};
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <div className="flex justify-center my-5">{BRANDING.logo}</div>  
      <h1 className='text-3xl text-center font-semibold my-7'>Sign up to PropVista</h1>
      <form className="flex flex-col gap-4">
        {/* <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username"/> */}
        <TextField id="username" label="Username" variant="outlined" style={{background: 'white'}}/>
        <TextField id="email" label="Email" variant="outlined" style={{background: 'white'}}/>
        <TextField id="password" label="Password" variant="outlined" style={{background: 'white'}}/>
        <Button variant="contained" style={{background: '#334155', padding: 10}}>SIGN UP</Button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Already have an Account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
