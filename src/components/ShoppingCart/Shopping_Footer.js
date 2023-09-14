import TwitterIcon from '@mui/icons-material/Twitter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';


function Shopping_Footer(){
    return(
<div className="main_footer">
    <IconButton className="footer_links twitter"><TwitterIcon/></IconButton>
    <IconButton className="footer_links mail"><ContactMailIcon/></IconButton>
    <IconButton className="footer_links facebook"><FacebookIcon/></IconButton>
    <input type="text" disabled="true" className="footer_links address" value="Postal Address:343,Reefing Street, Crowning City, Mumbai-567843"></input>
</div>
    )
}

export default Shopping_Footer;