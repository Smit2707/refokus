import React from 'react'

const Footer = () => {
    return (
        <div className='w-[95%] mx-auto text-white'>
            <div className='py-10 flex gap-32'>
                <div className='basis-1/2'>
                    <h2 className='text-[7vw] font-semibold tracking-tight leading-none'>refokus.</h2>
                </div>
                <div className='basis-1/2 flex gap-4'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-400 capitalize'>Socials</h4>
                        {["twitter", "instagram", "facebook", "github", "linkedin"].map((items, index) => {
                            return (
                                <a className='mt-3 block text-zinc-600 capitalize'>{items}</a>
                            )
                        })}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-400 capitalize'>sitemap</h4>
                        {["Home", "work", "careers", "contact"].map((items, index) => {
                            return (
                                <a className='mt-3 block text-zinc-600 capitalize'>{items}</a>
                            )
                        })}
                    </div>
                    <div className=''>
                        <p>Get insights and updates on branding, websites and growth.</p>
                        <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='w-40 mt-5' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer