import styles from '../style';
import { logo, copyright }  from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* div for logo and paragraph */}
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt='hoobank' className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      {/* div for links */}
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='lex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
          <ul className='list-none mt-6'>
            {footerLink.links.map((link, index) => (
              <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                {link.name}
              </li>
            ))}
          </ul>
          </div>
        ))}
      </div>
    </div>
    {/* TODO: */}
    {/* div for grey separation bar */}
    

    {/* div for copyright */}
    <div className='flex'>
      <p className={`${styles.paragraph} pr-2`}>Copyright</p>
      <img src={copyright} alt='copyright' className='w-[16px] h-[16px] object-contain mt-[7px]'/>
      <p className={`${styles.paragraph} pl-4`}>2021 HooBank. All Rights Reserved.</p>
    </div>
  </section>
)


export default Footer