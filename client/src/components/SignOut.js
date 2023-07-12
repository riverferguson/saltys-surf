import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';

function SignOut({ onSign }){

    const history = useHistory()

    const handleSignOut = () => {
        fetch('/signout', {
            method: "DELETE",
        }).then((r) => {
            if(r.ok){
                onSign(null)
                alert('Sign out successful, returning to home....')
                history.push('/home')
            } else {
                alert('Something went wrong. Please try again')
            }
        });
    }

    return (
        < >
            <h2>Would you like to Sign Out?</h2>
            <Button onClick={handleSignOut} variant="contained" disableElevation>
      Signout
    </Button>
        </>
    )
}

export default SignOut