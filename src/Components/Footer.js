import './Footer.css';

const Footer = () =>  {

const currentTimeline = new Date ();
const year = currentTimeline.getFullYear();

return (
    <div className='footer bg-dark '>
        <footer className='footeritems text-center text-white'>{year}©Copyright:<a href='https://fsymbols.com'>Emojipedia.com</a></footer>
    </div>
);

}
export default Footer;