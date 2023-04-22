import Work from '../components/sections/Work'
import MiniFooter from '../components/MiniFooter';
import bgImg from '../images/bg-img.png' 


const Blogs = () => {
  return (
    <>
      <div className='contact'>
      <img className='bg-img' src={bgImg} />

        <Work />
        <MiniFooter/>
      </div>
    </>
  );
};

export default Blogs;