import './AboutMeHeader.css'
export default function AboutMeHeader({handleIndexChange,tabIndex}){
  return(
    <>
      <section className='about-me-header'>
          <h3> About me: </h3>
          <div className='about-me-tab'>
            <div className={tabIndex === 1 ? 'index selected' : 'index'} onClick={()=>handleIndexChange(1)}></div>
            <div className={tabIndex === 2 ? 'index selected' : 'index'} onClick={()=>handleIndexChange(2)}></div>
            <div className={tabIndex === 3 ? 'index selected' : 'index'} onClick={()=>handleIndexChange(3)}></div>
          </div>
      </section>
    </>
  );
}